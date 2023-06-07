import { useState } from 'react'
import './Cards.css'


function Cards({ product, products, setProducts }) {

    const addProductInCart = () => {
        let foundProduct = products.find(elem => elem.id == product.id)
        let productId = products.findIndex(elem => elem.id == product.id)
        setProducts(products.splice(productId, 1))
        foundProduct.quantity += 1
        setProducts([...products, foundProduct])
    }    

    const removeProductInCart = () => {
        if (product.quantity == 0) {
            let productId = products.findIndex(elem => elem.id == product.id)
            setProducts(products.splice(productId, 1))
        }
        if (product.quantity > 0) {
            let foundProduct = products.find(elem => elem.id == product.id)
            let productId = products.findIndex(elem => elem.id == product.id)
            setProducts(products.splice(productId, 1))
            foundProduct.quantity = foundProduct.quantity - 1
            setProducts([...products, foundProduct])
        }
    }

    return <div className="Cards" key={product.id}>
        <h3 className='name'>{product.name}</h3>
        <p className='description'>{product.description}</p>
        <p className='price'>${product.price}</p>
        <div className='rowQuantity' key={product.id}>
            <button className='removeBtn' onClick={() => removeProductInCart()}>-</button>
            <p className='quantity'>{product.quantity}</p>
            <button className='addBtn' onClick={() => addProductInCart()}>+</button>
        </div>
    </div>;
}

export default Cards;