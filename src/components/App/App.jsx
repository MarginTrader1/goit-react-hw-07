import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

const App = () => {
   const dispatch = useDispatch();

   //используем хук useEffect для первой загрузки
   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch]);

   return (
      <div className={css.container}>
         <ContactForm />
         <ContactList />
         <SearchBox />
      </div>
   );
};

export default App;
