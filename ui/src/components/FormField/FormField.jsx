import "./FormField.scss";

/* eslint-disable react/prop-types */
const FormField = (props) => {
  const onChange = (e) => {
    let x = [e.target.id, e.target.value];
    console.log(x);
    props.onchange(x);
  };
  return (
    <div className="detail-box">
      <label className="detail-label" htmlFor={props.id}>
        {props.text}
      </label>
      <input
        type="text"
        className="form-input"
        id={props.id}
        placeholder={props.text}
        onChange={onChange}
        disabled={props.id == "eid"}
        value={props.id == "eid" ? props.editid : props.data[props.id]}
      />
    </div>
  );
};
export default FormField;
