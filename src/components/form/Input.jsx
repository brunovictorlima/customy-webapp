import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input({
  type,
  text,
  name,
  placeholder = '',
  value,
  handleOnChange,
  customClass = '',
  ...rest
}) {
  return (
    <div className={`${styles.form_control} ${customClass}`}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        {...rest} // Permite atributos extras como required e disabled
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleOnChange: PropTypes.func.isRequired,
  customClass: PropTypes.string,
};

export default Input;
