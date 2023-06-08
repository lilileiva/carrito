import { useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import ProductsList from './components/ProductsList/ProductsList';

function App() {

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState("")
	const [products, setProducts] = useState([])

	return <div className="App">
		<AddProduct
			name={name}
			description={description}
			price={price}
			setName={setName}
			setDescription={setDescription}
			setPrice={setPrice}
			products={products}
			setProducts={setProducts}
		/>
		<ProductsList products={products} setProducts={setProducts} />
	</div>
}

export default App;
