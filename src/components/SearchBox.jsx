import { useId } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../redux/filtersSlice";
import style from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const query = useSelector(selectNameFilter);

  function handleSearch(query) {
    dispatch(changeFilter(query));
  }

  return (
    <div className={style.search}>
      <label htmlFor={id} className={style.searchLabel}>
        Find contacts by name
      </label>
      <div className={style.relative}>
        <div className={style.searchIcon}>
          <FiSearch size="24px" />
        </div>
        <input
          type="text"
          name="query"
          id={id}
          className={style.searchInput}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}




// export default function SearchBox({ filterContacts, setFilterContacts }) {
//   const handleSearch = (event) => {
//     setFilterContacts(event.target.value);
//   };
//   return (
//     <div className={css.div}>
//       <label>Find contacts by name </label>
//       <input type="text" value={filterContacts} onChange={handleSearch} />
//     </div>
//   );
// }