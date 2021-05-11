import './form-input.styles.scss';

export const handleChange = (event, state, setState) => {
  const { name, value } = event.target;

  setState({ ...state, [name]: value });
};

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label && (
      <label
        className={`form-input-label ${
          otherProps.value.length ? 'shrink' : ''
        }`}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
