import { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './ProductsList.css'


function ProductsList({ products, setProducts }) {

    const [totalPrice, setTotalPrice] = useState(0)

    const calculateTotalPrice = () => {
        let total = 0        
        products.map((product) => {
            total += (Number(product.price) * Number(product.quantity))
        })
        return total
    }

    useEffect(() => {
        let total = calculateTotalPrice()
        setTotalPrice(total)
    }, [products])

    return <div className='ProductsList'>
        <div className="container">
            <div className='row'>
                <h2 className='title'>Lista de productos</h2>
                <h2 className='cart'>
                    <span class="material-symbols-outlined">shopping_cart</span>
                    ${totalPrice}
                </h2>
            </div>
            <div className='divider'></div>
            <div className='cardsContainer'>
                {
                    products.length !== 0
                        ? products.map((product) => <Cards product={product} products={products} setProducts={setProducts} />)
                        : <p className='no-products'>
                            <span class="material-symbols-outlined">shopping_bag</span>
                            Aún no hay productos
                        </p>
                }
            </div>
        </div>
    </div>;
}

export default ProductsList;