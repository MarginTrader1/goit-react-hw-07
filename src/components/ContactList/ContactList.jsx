import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
   //получаем данные из стора
   const contacts = useSelector(selectContacts);
   const filter = useSelector(selectNameFilter);

   //фильтруем контакты через фильтр
   let filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
   );

   return (
      <ul className={css.list}>
         {filteredContacts.map(({ id, name, number }) => {
            return (
               <li key={id} className={css.card}>
                  <Contact name={name} number={number} id={id} />
               </li>
            );
         })}
      </ul>
   );
};

export default ContactList;
