import React from "react";
import HeaderPopular from './HeaderPopular';
import CardItem from './CardItem';
import { CartContext } from './../../App';

export default function Cards() {
    const { onAddToCart, showProduct } = React.useContext(CartContext);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
         fetch('https://63064d8cdde73c0f8457f06d.mockapi.io/hairBand')
        .then((res) => {
            return res.json();
        })
        .then(json => {
            setProducts(json);
        });
    }, []);

    return (
        <div className="popular">
            <HeaderPopular />
            <ul className="slides">
                {products.map((product, index) => {
                    return (
                        <CardItem 
                        key={index}
                        img={product.img} 
                        alt={product.title} 
                        title={product.title} 
                        price={product.price}
                        ratting={product.ratting}
                        onPlus={(obj) => {onAddToCart(obj)}}
                        onProduct={(obj) => {showProduct(obj)}} />
                        )
                })}
            </ul>
        </div>
    );
}
