import React, { useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';
import { LEVELS } from '../../../models/levels.enum';

const ContactForm = ({add}) => {

    const nameRef=useRef('');
    const last_nameRef= useRef('');
    const num_movilRef= useRef('');
    const levelRef= useRef(LEVELS.NORMAL);
    
    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            last_nameRef.current.value,
            num_movilRef.current.value,
            false,
            levelRef.current.value
    );
    add(newContact);
    }
    

    return (
        <form onSubmit={addContact} className="d-flex justify-content-center align-items-center mb-4">
            <div className='form-outline flex-fill'>
            <hr size="8px" color="black"/>
            <h1>Registro de Contactos</h1>
            
                <input ref={nameRef} id='inputName' type="text" className='form-control form-control-lg form-control' required autoFocus placeholder="Nombres"/>
                <input ref={last_nameRef} id='inputLastName' type="text" className='form-control form-control-lg form-control' required placeholder="Apellidos"/>
                <input ref={num_movilRef} id='inputNumMovil' type="text" className='form-control form-control-lg form-control' required placeholder="Numero movil"/>
                <label htmlFor='selectLevel' className='sr-only'>Tipo</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL}>
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.VIP}>Vip</option>
                </select>
                
                <hr/>
                <button type='submit' className="btn btn-success btn-lg ms-2">Agregar</button>
            </div>
        </form>
        
    );
}

ContactForm.propTypes ={
    add: PropTypes.func.isRequired,
}

export default ContactForm;
