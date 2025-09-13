import styles from "./Input.module.css"

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={name} className={styles.label}>
        {text}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value||""}
        className={styles.input}
      />
    </div>
  )
}

export default Input
