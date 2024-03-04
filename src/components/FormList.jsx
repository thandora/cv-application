import "../styles/FormList.css";
import PropTypes from "prop-types";
import { Form } from "./Form";

function FormList({ formList, changeHandler, hasTitle }) {
  return (
    <div className="forms-list">
      <div className="header">{hasTitle && <h2>{formList.title}</h2>}</div>

      <div className="forms-container">
        {formList.forms.map((form) => {
          return (
            <Form
              key={form.id}
              form={form}
              isDeletable={true}
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
};

export { FormList };
