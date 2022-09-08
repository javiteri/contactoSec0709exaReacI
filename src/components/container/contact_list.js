import React, {useState, useEffect} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../../components/pure/forms/ContactForm';

const ContactListComponet = () => {
    
    const defaultContact1= new Contact('Javier','Viteri','099979',true,"Normal" );
    const defaultContact2= new Contact('Ariel','Viteri','099959',false,"Vip" );
    const defaultContact3= new Contact('July','Barreto','099996',false,"Normal" );
    const defaultContact4= new Contact('Mia','Viteri','09983',true,"Vip" );

    //Estado del componente
    const [contacts, setContacts] = useState([defaultContact1,defaultContact2,defaultContact3,defaultContact4] );
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Contact State has been modified');
        setLoading(false);
        return () => {
            console.log('ContactList component is going to unmount');
        };
    }, [contacts]);

    function changeState(contact)  {
        console.log('cambiar estado de contacto')
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].estate = !tempContacts[index].estate;
        setContacts(tempContacts);
    }

    function removeContact(contact)  {
        console.log('cambiar estado de contacto')
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact)  {
        console.log('cambiar estado de contacto')
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }



    
    return (
        <div className='col-12'>
            <div className='card'>
            <div className='card-header p-3'>
                <h1>Contacts</h1>
            </div>
            <div className='card-body' data-mb-perfect-scrollbar='true'  style={{position:'relative',height:'auto'}}>
                <table style={{width : '100%', spacing: '20px 5px'}}>
                    <thead>
                        <tr>
                            <th scope='col'>Nombres</th>
                            <th scope='col'>Apellidos</th>
                            <th scope='col'>NumMovil</th>
                            <th scope='col'>Tipo</th>
                            <th scope='col'>Estado</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) =>{
                            return(
                                <ContactComponent 
                                key={index} 
                                contact={contact}
                                estate={changeState}
                                remove={removeContact}
                                ></ContactComponent>            
                            )
                        })}
                        
                    </tbody>

                </table>
            </div>
            <ContactForm add={addContact}></ContactForm>
            </div>
            
        </div>
        
    );
}

export default ContactListComponet;
