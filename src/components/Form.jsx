import "../styles/Form.css";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Field } from "./Field";

function Form({ form, deletable }) {
  const [currForm, setForm] = useState(form);
  const [visible, setVisiblility] = useState(true);

  function updateForm(fieldId) {
    return function (e) {
      const newFields = currForm.fields.map((field) => {
        if (field.id === fieldId) {
          return { ...field, value: e.target.value };
        }
        return { ...field };
      });

      setForm({ ...currForm, fields: newFields });
    };
  }

  function toggleVisibility() {
    setVisiblility(!visible);
  }

  return (
    <div className="form-container">
      <div className="header">
        <h2>{currForm.title}</h2>
        {/* TODO: implement delete */}
        {deletable && <button>Delete me</button>}
        <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"}</button>
      </div>

      <form action="" className={visible ? "form" : "form minimized"}>
        {currForm.fields.map((field) => {
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
  deletable: PropTypes.bool,
};

export { Form };
