import PropTypes from "prop-types";
import { Fragment, useState } from "react";

function Form({ title, fields, isDeletable }) {
  const [currentFields, setFields] = useState(fields);

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

  function display() {
    console.log(currentFields);
  }

  return (
    <form action="" className="form">
      <div className="header">
        <h2>{title}</h2>
        {isDeletable && <button>Delete me</button>}
      </div>

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

      <button onClick={display}>Click me</button>
    </form>
  );
}

Form.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.array,
  isDeletable: PropTypes.bool,
};

function Field({ name, type, value, changeHandler }) {
  return (
    <div className="form-row">
      <label>
        {name}
        <input type={type} value={value} onChange={changeHandler} />
      </label>
    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  field: PropTypes.object,
  changeHandler: PropTypes.func,
};

export { Form };
