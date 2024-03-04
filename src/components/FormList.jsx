import "../styles/FormList.css";
import PropTypes from "prop-types";
import { Form } from "./Form";

function FormList({
  formList,
  changeHandler,
  formOptions,
  hasTitle,
  updateFormList,
  formListTemplate,
  addable,
}) {
  function addForm() {
    updateFormList();
  }
  return (
    <div className="forms-list">
      <div className="header">{hasTitle && <h2>{formList.title}</h2>}</div>

      <div className="forms-container">
        {formList.forms.map((form) => {
          return (
            <Form
              key={form.id}
              form={form}
              options={formOptions}
              changeHandler={changeHandler(form.id)}
            />
          );
        })}

        {addable.add && <button onClick={console.log()}>Add {addable.title}</button>}
      </div>
    </div>
  );
}

FormList.propTypes = {
  formList: PropTypes.object,
  hasTitle: PropTypes.bool,
  changeHandler: PropTypes.func,
  formOptions: PropTypes.object,
  updateFormList: PropTypes.func,
  formListTemplate: PropTypes.object,
};

export { FormList };
