import './AddForm.css'
import '../../App.css'
import { useState } from 'react';


function AddForm(props) {

    const handleInputChange = (e) => {
        if (e.target.name === "name") props.setName(e.target.value)   
        if (e.target.name === "description") props.setDescription(e.target.value)
        if (e.target.name === "price") {
            if (e.target.value == Number(e.target.value)) props.setPrice(e.target.value)
            else {
                e.target.value = props.price
            }
        }        
    }
        
    const [alreadyExists, setAlreadyExists] = useState(false)

    const handleInputSubmit = (e) => {
        e.preventDefault()
        let foundProduct = props.products.find(elem => elem.name === props.name)
        if (foundProduct) {
            setAlreadyExists(true)
        } else {            
            props.setProducts([
                ...props.products,
                {'name': props.name, 'description': props.description, 'price': props.price, 'quantity': 1}
            ])            
            setAlreadyExists(false)
            e.target.reset()
        }
    }

    return <form className="AddForm" onSubmit={handleInputSubmit} >
        <input required type="text" name='name' onChange={(e) => handleInputChange(e)} />
        <label htmlFor="">Nombre del producto</label>
        <textarea type="text" name='description' onChange={(e) => handleInputChange(e)}  />        
        <label htmlFor="">Descripción (opcional)</label>
        <input required type="text" name='price' placeholder='$' onChange={(e) => handleInputChange(e)} />
        <label htmlFor="">Precio</label>
        <input type="submit" value='Agregar' />
        {alreadyExists && <p className='existingProduct'>Ya existe un producto con este nombre</p>}
    </form>;
}

export default AddForm;