import './AddProduct.css'
import '../../App.css'
import AddForm from '../AddForm/AddForm';


function AddProduct(props) {

	return <div className='AddProduct'>
		<div className="container">
			{/* <button onClick={() => handleForm()}>X</button> */}
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