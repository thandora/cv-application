import "../styles/FormList.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Form } from "./Form";

function FormList({ formList }) {
  const [visible, setVisiblility] = useState(true);

  function toggleVisibility() {
    setVisiblility(!visible);
  }

  return (
    <div className="form-container">
      <div className="header">
        <h2>{formList.title}</h2>
        <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"}</button>
      </div>

      <div className={visible ? "forms-container" : "forms-container minimized"}>
        {formList.forms.map((form) => {
          return <Form key={form.id} form={form} isDeletable={true} />;
        })}
      </div>
    </div>
  );
}

FormList.propTypes = {
  formList: PropTypes.object,
};

export { FormList };
