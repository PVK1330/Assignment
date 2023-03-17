import AddProduct from "./AddProduct";
import ProductData from "./ProductData";
import './product.css'

import { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([])
    const onNewProductAdd = (product) => setProducts([...products, product])

    return (
        <>
            <AddProduct onSubmit={onNewProductAdd} />
           <div className="container.flex"> {products.map(data => {
                return (<ProductData product={data} />)
            })}
            </div>
        </>
    )
}

export default Products;