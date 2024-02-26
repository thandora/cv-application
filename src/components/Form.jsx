import PropTypes from "prop-types";

function Form({ fields }) {
  return (
    <div className="form">
      <div className="header"></div>

      {fields.map((field) => {
        return (
          <>
            <label>{field.name}</label>
          </>
        );
      })}
    </div>
  );
}

Form.propTypes = {
  fields: PropTypes.object,
};

export { Form };
