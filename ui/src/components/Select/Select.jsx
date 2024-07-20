import "./Select.scss";
/* eslint-disable react/prop-types */
const Select = ({ id, choose, onselect, defaultValue, label }) => {
  const onSelect = (e) => {
    let x = [e.target.id, e.target.value];
    onselect(x);
  };

  return (
    <div className="detail-box">
      <label className="detail-label" htmlFor={id}>
        {label}
      </label>
      <select id={id} onChange={onSelect} className="form-select">
        {choose.map((option) => {
          return (
            <option
              key={option}
              selected={option === defaultValue}
              value={option}
            >
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
