export default function Input({ label, name, value, onInputChange }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onInputChange}
        required
      ></input>
    </p>
  );
}
