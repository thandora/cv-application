import "../styles/Form.css";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Field } from "./Field";

function Form({ form, isDeletable }) {
  const [currForm, setForm] = useState(form);
  const [visible, setVisiblility] = useState(true);

  function updateForm(fieldId) {
    return function (e) {
      const fieldIndex = currForm.fields.findIndex((f) => f.id === fieldId);
      const newFields = [...currForm.fields];
      newFields[fieldIndex].value = e.target.value;
      const newForm = { ...currForm, fields: newFields };

      setForm(newForm);
    };
  }

  function toggleVisibility() {
    setVisiblility(!visible);
  }

  return (
    <div className="form-container">
      <div className="header">
        <h2>{form.title}</h2>
        {/* TODO: implement delete */}
        {isDeletable && <button>Delete me</button>}
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
                changeHandler={updateForm(field.id)}
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
  isDeletable: PropTypes.bool,
};

export { Form };
