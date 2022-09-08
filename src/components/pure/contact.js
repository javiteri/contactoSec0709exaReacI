import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class';
//Importamos la hoja de estilos de contact.scss
import '../../styles/contac.scss'
import { LEVELS } from '../../models/levels.enum';

const ContactComponent = ({contact, estate, remove}) => {

    useEffect(() => {
        console.log('Created Contact');
        return () => {
            console.log(`Contact ${contact.name} is going to unmount`);
        };
    }, [contact]);

    function contactLevelBadge(){
        switch(contact.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                    <i className='bi-award contac-action'></i>
                    <span className='badge bg-primary'>{contact.level}</span>                         
                    </h6>)
            case LEVELS.VIP:
                return(
                    <h6 className='mb-0'>
                    <i className='bi-award-fill contac-action' style={{color: 'green'}}></i>    
                    <span className='badge bg-warning'>{contact.level}</span>                         
                    </h6>)        
            default:
                break;        
       }
    }

    function contactIconCompleted(){
        if(contact.estate){
            return(<i onClick={() => estate(contact)} className='bi-toggle-on contac-action' style={{color: 'green'}}></i>)
        }else{
            return(<i onClick={() => estate(contact)} className='bi-toggle-on contac-action' style={{color: 'red'}}></i>)
        }
    }
            
    return (
        <tr className='fw-normal'>
            <th className='width: 45%'>
            <span className='ms-2, align-right'>{contact.name} </span>    
            </th>
            <th>
            <span className='ms-2'>{contact.last_name} </span>
            </th>
            <td className='align-middle'>
            <span className='align-middle'>{contact.num_movil} </span>    
            </td>
            <td>
            {contactLevelBadge()}
            </td>
            <td className='align-middle'>
            <span>{contactIconCompleted()} {contact.estate? 'Conectado' : 'Desconectado'}</span>    
            </td>
            <td className='align-middle'>
            <i onClick={() => remove(contact)} className='bi-trash' style={{color: 'tomato', fontSize: '20px'}}></i>
            </td>
        </tr>      
        
        
    );
}

ContactComponent.prototype = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    estate:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
};

export default ContactComponent;
