import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import * as yup from 'yup';
import Form from './components/Form'
import schema from './validation/schema'

const initialFormValues= {
  name:'',//text
  size:'',//dropdown
  pepperoni: false,
  peppers: false,
  onion: false,
  spinach: false,
  textInput: '', //special instructions
}
const initialFormErrors={
  name:'',
  size:'',
  textInput:''
}

const initialPizza = [];
const initialDisable = true;

const App = () => {
  const [pizza, setPizza]= useState(initialPizza);
  const [formValues, setFormValues]= useState(initialFormValues);
  const [formErrors, setFormErrors]= useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisable);

  const change = (name, value) => {
    //validation with YUP
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => { 
      setFormErrors({...formErrors,
         [name]: ""
        })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.formErrors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const formSubmit = () => {
    const newPizza = {
      name:formValues.name.trim(),
      size:formValues.size.trim(),
      toppings:['pepperoni', 'peppers', 'onion', 'spinach'].filter(
        (topping) => formValues[topping]
      ),
      textInput:formValues.textInput.trim()
    }
    //if statement
    setPizza([...pizza, newPizza])
  }
  useEffect(() => {
//validating  form values 
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    })
  },[formValues])

  return (
    <div className='container'>
      <header>
        <h1>Lambda Eats</h1>
      </header>
      <div className='order'>
        <p>Your favorite food delivered while coding</p>
        <Link to="/pizza">Order now</Link>
      </div>  

     
      <div>
        <Switch>
        <Route >
          <Form 
           values={formValues}
           change={change}
           submit={formSubmit}
           disabled={disabled}
           errors={formErrors}
           pizzas={pizza}
           />
        
        </Route>
           </Switch>
      </div>
   


    </div>
  );
};
export default App;
