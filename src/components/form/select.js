import styles from "./Select.module.css"

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={name} className={styles.label}>
        {text}
      </label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value}
        className={styles.select}
      >
        <option value="">Selecione uma opção</option>
        {options && options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
