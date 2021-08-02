import './ContactList.css';

export default function ContactList({ contacts, onDeleteContact }) {
   return (
   <ul className="ContactList">
      {contacts.map(contact =>
         <li key={contact.id} >
            <p>{contact.name}: {contact.number}</p>
            <button onClick={()=>onDeleteContact(contact.id)}>Удалить</button>
         </li>
      )}
   </ul> 
);
}
