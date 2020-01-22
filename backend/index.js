const express = require('express')
const request = require('request')
const dotenv = require('dotenv')
const cors = require('cors');
const async = require("async");
const app = express()
app.use(cors());

dotenv.config();

// Search.
app.get('/api/items?q:query', (req, res) => {
    request(process.env.URL + '/sites/MLA/search?q=' + req.params.query, (err, resp, body) => {
        let items = JSON.parse(body);
        items = (items.results).slice(0, 4);
        res.send(items);
    });
});

// Search Result.
app.get('/api/items/:id', (req, res) => {

    var requests = [
        { url: `${process.env.URL}/items/${req.params.id}` },
        { url: `${process.env.URL}/items/${req.params.id}/description` }
    ];

    async.map(requests, (obj, callback) => {
            request(obj, (err, resp, body) => {

                if (!err && resp.statusCode == 200) {

                    let jsonBody = JSON.parse(body);

                    let customJson = {

                        author: {
                            name: "",
                            lastname: "",
                        },

                        item: {

                            id: jsonBody.id,
                            title: jsonBody.title,

                            price: {
                                currency: jsonBody.price,
                                amount: jsonBody.initial_quantity,
                                decimals: jsonBody.available_quantity,
                            },

                            picture: jsonBody.pictures,
                            condition: jsonBody.condition,
                            free_shipping: jsonBody.shipping,
                            sold_quantity: jsonBody.sold_quantity,
                            description: jsonBody.plain_text
                        }
                    };

                    callback(null, customJson)


                } else {
                    callback(err || resp.statusCode);
                }

            });
        },
        (err, results) => {
            (err) ? console.log(err): res.send(results);
        });

});

app.listen(process.env.PORT, () => console.log(`Server Running: ${process.env.PORT}!`))