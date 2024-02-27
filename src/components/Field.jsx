import PropTypes from "prop-types";

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

export { Field };
