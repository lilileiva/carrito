import { useState } from 'react';
import './AddProduct.css'
import '../../App.css'
import AddForm from '../AddForm/AddForm';


function AddProduct(props) {

	const [isFormOpen, setIsFormOpen] = useState(false)

	const handleForm = () => {
		{ console.count() }
		isFormOpen ? setIsFormOpen(false) : setIsFormOpen(true)
	}

	return <div className={isFormOpen ? "AddProduct" : "closedAddProduct"}>
		<button className='formBtn' onClick={() => handleForm()}>
			{
				isFormOpen
					? <span className="material-symbols-outlined">close</span>
					: <span className="material-symbols-outlined">menu</span>
			}
		</button>
		<div className={isFormOpen ? "container" : "closedContainer"}>
			<h2 className='title'>Agregar producto</h2>
			<div className='divider'></div>
			<AddForm
				name={props.name}
				description={props.description}
				price={props.price}
				setName={props.setName}
				setDescription={props.setDescription}
				setPrice={props.setPrice}
				products={props.products}
				setProducts={props.setProducts}
			/>
		</div>
	</div>;
}

export default AddProduct;