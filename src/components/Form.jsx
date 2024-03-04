import "../styles/Form.css";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Field } from "./Field";

function Form({ form, deletable, changeHandler }) {
  const [visible, setVisiblility] = useState(true);

  function toggleVisibility() {
    setVisiblility(!visible);
  }

  return (
    <div className="form-container">
      <div className="header">
        <h2>{form.title}</h2>
        {/* TODO: implement delete */}
        {deletable && <button>Delete me</button>}
        <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"}</button>
      </div>

      <form action="" className={visible ? "form" : "form minimized"}>
        {form.fields.map((field) => {
          return (
            <Fragment key={field.id}>
              <Field
                name={field.name}
                type={field.type}
                value={field.value}
                changeHandler={changeHandler(field.id)}
              />
            </Fragment>
          );
        })}
      </form>
    </div>
  );
}

Form.propTypes = {
  form: PropTypes.object,
  title: PropTypes.string,
  fields: PropTypes.array,
  deletable: PropTypes.bool,
  changeHandler: PropTypes.func,
};

export { Form };
