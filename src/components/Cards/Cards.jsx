import './Cards.css'


function Cards({ product, products, setProducts }) {
    
    const addProductInCart = () => {
        let productIndex = products.findIndex(elem => elem.name === product.name)            
        products[productIndex].quantity += 1
        setProducts([...products])
    }    
    const removeProductInCart = () => {
        if (product.quantity > 0) {            
            let productIndex = products.findIndex(elem => elem.name === product.name)            
            products[productIndex].quantity = products[productIndex].quantity - 1
            setProducts([...products])
        }
        if (product.quantity === 0) {            
            setProducts([])
        }
    }

    return <div className="Cards" key={product.name}>
        <h3 className='name'>{product.name}</h3>
        <p className='description'>{product.description}</p>
        <p className='price'>${product.price}</p>
        <div className='rowQuantity'>
            <button className='removeBtn' onClick={() => removeProductInCart()}>-</button>
            <p className='quantity'>{product.quantity}</p>
            <button className='addBtn' onClick={() => addProductInCart()}>+</button>
        </div>
    </div>;
}

export default Cards;