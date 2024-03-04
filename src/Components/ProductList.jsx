

function ProductList({ product, addToCart }) {
    return (
        <div className='flex'>
            {product.map((productItem, productIndex) => (
                <div style={{ width: '33%', padding: '10px' }} key={productIndex}>
                    <div className='product-item'>
                        <img src={productItem.url} width="90%" height="200px" alt={productItem.name} />
                        <p>{productItem.name} | {productItem.category}</p>
                        <p> {productItem.seller} </p>
                        <p> Rs. {productItem.price} /-</p>
                        <button className="add-to-cart-button" onClick={() => addToCart(productItem)}>Add To Cart</button>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
