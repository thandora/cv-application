import "../styles/Form.css";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Field } from "./Field";

function Form({
  form,
  changeHandler,
  addableField = { addable: false, fieldTemplate: {} },
  options = { deletable: false, hideable: false },
  formListUpdater,
}) {
  const [visible, setVisiblility] = useState(true);
  const { deletable, hideable } = options;

  function toggleVisibility() {
    setVisiblility(!visible);
  }

  function addField(fieldTemplate) {
    const newField = { ...fieldTemplate, id: crypto.randomUUID() };
    const newForm = { ...form, fields: [...form.fields, newField] };
    formListUpdater(newForm);
  }

  function removeField(fieldId) {
    return function () {
      const newFields = form.fields.filter((field) => {
        return field.id !== fieldId;
      });

      const newForm = { ...form, fields: newFields };
      formListUpdater(newForm);
    };
  }

  return (
    <div className="form-container">
      <div className="header">
        <h2>{form.title}</h2>
        {/* TODO: implement delete */}
        {deletable && <button>Delete me</button>}
        {hideable && <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"}</button>}
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
                removeFieldHandler={removeField(field.id)}
                removable={field.removable}
              />
            </Fragment>
          );
        })}

        {addableField.addable && (
          <button
            onClick={(e) => {
              e.preventDefault();
              addField(addableField.fieldTemplate);
            }}
          >
            Add {addableField.fieldTemplate.name}
          </button>
        )}
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
  options: PropTypes.object,
  addableField: PropTypes.object,
  formListUpdater: PropTypes.func,
};

export { Form };
