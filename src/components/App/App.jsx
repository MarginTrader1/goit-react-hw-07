import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const App = () => {
   return (
      <div className={css.container}>
         <ContactForm />
         <ContactList />
         <SearchBox />
      </div>
   );
};

export default App;
