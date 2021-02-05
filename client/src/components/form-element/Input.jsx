const Input = ({ title, name, type, value, handleChange }) => (
    <label>
        <input type={type} name={name} value={value} required onChange={handleChange} />
        <span>{title}</span>
    </label>
)

export default Input;