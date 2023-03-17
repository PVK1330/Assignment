import { useState } from "react";

const AddProduct =(props) => {

    const defaultProduct = {
        name:"",
        brand:"",
        amount:""
    }
    const [product,setProduct] = useState(defaultProduct)
    const onClickHandler = (event) => {
        event.preventDefault();
    
        props.onSubmit(product);
        setProduct(defaultProduct)
    
     }
     
     const handleInputChange = (event, field) => setProduct({...product, [field]: event.target.value})
    return(
        <div className='product_add_product'>
        <form onSubmit={onClickHandler}>
            ProductName <input type="text" onChange={ (e) => handleInputChange(e, 'name')} value={product.name}></input>
            Brand <input type="text" onChange={ (e) => handleInputChange(e, 'brand')} value={product.brand}></input>
            Amount <input type="number" onChange={ (e) => handleInputChange(e, 'amount')} value={product.amount}></input>
            <button type="submit">Add</button>

        </form>
    </div>
)
}


export default AddProduct;