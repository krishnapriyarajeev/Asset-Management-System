const DetailRow = ({ id, text, value }) => {
  return (
    <div className="detail-space">
      <label htmlFor={id} className="head">
        {text}
      </label>
      <div id={id}>{value}</div>
    </div>
  );
};
export default DetailRow;
