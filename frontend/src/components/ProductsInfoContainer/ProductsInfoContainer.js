import React, {useState,useEffect} from 'react';
import { useRouteMatch} from 'react-router-dom';


const ProductsInfoContainer = () => {

   let match = useRouteMatch();
   const [productItem, setProductItem] = useState('');
   const [producJsontItem, setProductJsonItem] = useState('');

   useEffect(() => {
      (productItem.length < 2) ? fetchItem(): setLayoutItems();
   }, [productItem]);

   const fetchItem = async () => {
      let data = await fetch(process.env.REACT_APP_API+"/api/items/"+match.params.id);
      let items = await data.json();
      setProductItem(items);
   }

   const setLayoutItems = () => {
      setProductJsonItem({
         description: productItem[1].item.description,
         picture: productItem[0].item.picture[0].url,
         price: productItem[0].item.price.currency,
         sold_quantity: productItem[0].item.sold_quantity,
      });
   }


   return (

      <div className="container-inner">
         <div className="prod-container">
            <div className="prod-row">
               <div className="prod-image">
                  <img src={producJsontItem.picture} alt=""/>
               </div>
               <div className="prod-info">
                  <span className="prod-info_descrip">Nuevo - {producJsontItem.sold_quantity } vendidos</span>
                  <span className="prod-info_title"></span>
                  <span className="prod-info_price">${producJsontItem.price}</span>
                  <div className="prod-info_button">
                     <button className="btn-buy">Comprar</button>
                  </div>
               </div>
            </div>
            <div className="prod-row">
               <div className="prod-descrip">
                  <span className="prod-descrip_title">
                     Descripción del producto
                  </span>
                  <span className="prod-descrip_content">
                        {producJsontItem.description}
                  </span>
               </div>
            </div>
         </div>
      </div>

    );
}

export default ProductsInfoContainer;