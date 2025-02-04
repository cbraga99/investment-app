import { useState } from "react";

export default function Input({ desc, handleChanges, ...props }) {
  const [value, SetValue] = useState();

  function handleChange(event) {
    SetValue(event.target.value);
    handleChanges();
  }

  return (
    <>
      <label>{desc}</label>
      <input {...props} onChange={handleChange} />
    </>
  );
}
