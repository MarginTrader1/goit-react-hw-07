import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
   const dispatch = useDispatch();

   let filterValue = useSelector(selectNameFilter);

   const handleChange = (evt) => {
      dispatch(changeFilter(evt.target.value));
   };

   const id = useId();

   return (
      <div className={css.input}>
         <label htmlFor={`search-${id}`}>Find contacts by name</label>
         <input type="text" id={`search-${id}`} value={filterValue} onChange={handleChange} />
      </div>
   );
};

export default SearchBox;
