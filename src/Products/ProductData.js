import React from 'react';

const ProductData = ({ product }) => {
    return (
        <>
            <div class="flex-container">
                <div className='product_detail'>
                    <div className='product_data_name'>ProductName : {product.name}</div>
                    <div className='product_data_brand'>Brand : {product.brand}</div>
                    <div className='product_data_amount'>${product.amount}</div>
                </div>
            </div>
        </>
    )
}


export default ProductData