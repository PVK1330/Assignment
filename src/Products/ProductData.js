import React from 'react';

const ProductData = ({ product }) => {
    return (
        <>
           
                <div className='product_detail'>
                    {/* <span className='product_data_name'>ProductName : {product.name}</span>
                    <span className='product_data_brand'>Brand :  {product.brand}</span>
                    <span className='product_data_amount'>${product.amount}</span> */}
                    <div className='product_data_name'>ProductName : {product.name}</div>
                    <div className='product_data_brand'>Brand : {product.brand}</div>
                    <div className='product_data_amount'>${product.amount}</div>
                </div>
            
        </>
    )
}


export default ProductData