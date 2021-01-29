import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form submit">
        

        
        {/* <button disabled={disabled}>submit</button> */}

        <div className="errors">
          
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.textInput}</div>
        </div>
      

      <div className="form-group inputs">
        

    
        <label>
          Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>
 {/* DropDown */}
        <label>
          Size
          <select onChange={onChange} value={values.size} name="size">
            <option value="">- Select a size -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>

      <div className="topping-forms">
        <h4>Toppings</h4>
        {/* /* CHECKBOXES */ }
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>
          Peppers
          <input
            type="checkbox"
            name="peppers"
            checked={values.peppers}
            onChange={onChange}
          />
        </label>
        <label>
          Onion
          <input
            type="checkbox"
            name="onion"
            checked={values.onion}
            onChange={onChange}
          />
        </label>
        <label>
          Spinach
          <input
            type="checkbox"
            name="spinach"
            checked={values.spinach}
            onChange={onChange}
          />
        </label>
        </div>
         <label>
          Special Instructions
          <input
            value={values.textInput}
            onChange={onChange}
            name="textInput"
            type="text"
          />
        </label>
        <button disabled={disabled}>submit</button>
      </div>
    </form>
  );
}

