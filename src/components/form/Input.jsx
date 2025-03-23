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
        {...rest} // Permite passar atributos extras, como required, disabled, etc.
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired, // Ex.: "text", "email", "password", etc.
  text: PropTypes.string, // Texto exibido no <label>
  name: PropTypes.string.isRequired, // Nome do input para identificação
  placeholder: PropTypes.string, // Placeholder é opcional
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Pode ser string ou número
  handleOnChange: PropTypes.func.isRequired, // Função para capturar mudanças
  customClass: PropTypes.string, // Classe CSS adicional (opcional)
};

export default Input;
