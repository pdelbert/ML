import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch} from 'react-router-dom';

const ProductsListContainer = () => {

   const match = useRouteMatch();
   const [productItem, setProductItem] = useState([]);

   useEffect(() => {
      (productItem.length === 0) ? fetchItem() : void(0);
   },[productItem]);

   const fetchItem = async () => {
      let data = await fetch(process.env.REACT_APP_API+'/api/itemsq:'+match.params.id);
      let items = await data.json();
      setProductItem(items);
   }

   return (
      <div className="container-inner">
          <ul className="product-list">
            {
               productItem.map(function(d, idx){
                  return (
                     <li className="product-item" key={idx}>
                        <Link to={`/items/${d.id}`}>
                           <div className="item image">
                              <img src={d.thumbnail} alt="Product Avatar" width="115" />
                           </div>
                           <div className="item info">
                              <span className="info-price">
                                 <label>${d.price}</label>
                              </span>
                              <span className="info-content">{d.title}</span>
                           </div>
                           <div className="item location">
                              <span>{d.address.state_name}</span>
                           </div>
                        </Link>
                     </li>
                  )
               })
            }
         </ul>
      </div>
   );
}

export default ProductsListContainer;