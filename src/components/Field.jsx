import PropTypes from "prop-types";

function Field({ name, type, value, changeHandler, removable, removeFieldHandler }) {
  return (
    <div className="form-row">
      <label>
        {name + ": "}
        <input type={type} value={value} onChange={changeHandler} />
        {removable && (
          <button
            onClick={(e) => {
              e.preventDefault();
              removeFieldHandler();
            }}
          >
            Remove
          </button>
        )}
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
  removable: PropTypes.bool,
  removeFieldHandler: PropTypes.func,
};

export { Field };
