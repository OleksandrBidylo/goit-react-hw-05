import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  return (
    <div className={s.searchBar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" placeholder="Enter a movie" className={s.Field} />
          <button type="submit">
            <FaSearch />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
