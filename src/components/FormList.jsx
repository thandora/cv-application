import "../styles/FormList.css";
import PropTypes from "prop-types";
import { Form } from "./Form";

function FormList({ formList, changeHandler, formOptions, hasTitle }) {
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
      </div>
    </div>
  );
}

FormList.propTypes = {
  formList: PropTypes.object,
  hasTitle: PropTypes.bool,
  changeHandler: PropTypes.func,
  formOptions: PropTypes.object,
};

export { FormList };
