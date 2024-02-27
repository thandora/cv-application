import "../styles/Form.css";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Field } from "./Field";

function Form({ title, fields, isDeletable }) {
  const [currentFields, setFields] = useState(fields);
  const [visible, setVisiblility] = useState(true);

  function handleChange(id) {
    return function (e) {
      const field = currentFields.find((field) => field.id === id);
      const fieldId = currentFields.findIndex((field) => field.id === id);
      const tempFields = [...currentFields];
      field.value = e.target.value;
      tempFields[fieldId] = field;
      setFields(tempFields);
    };
  }

  function toggleVisibility() {
    setVisiblility(!visible);
  }

  return (
    <div className="form-container">
      <div className="header">
        <h2>{title}</h2>
        {isDeletable && <button>Delete me</button>}
        <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"}</button>
      </div>

      <form action="" className={visible ? "form" : "form minimized"}>
        {fields.map((field) => {
          return (
            <Fragment key={field.id}>
              <Field
                name={field.name}
                type={field.type}
                value={field.value}
                changeHandler={handleChange(field.id)}
              />
            </Fragment>
          );
        })}
      </form>
    </div>
  );
}

Form.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.array,
  isDeletable: PropTypes.bool,
};

export { Form };
