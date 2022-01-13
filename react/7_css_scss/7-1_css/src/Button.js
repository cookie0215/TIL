import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ text }) {
  return (
    // css를 자바스크립트 object로 변환시켜준다.
    <button className={styles.btn}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;