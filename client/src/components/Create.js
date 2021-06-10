import React from 'react';
import {Field, reduxForm} from 'redux-form';

class Create extends React.Component {

  renderError(meta){
    if(meta.touched && meta.error){
        return (
          <div className="error">{meta.error}</div>
        )
    }
  }

  renderInput=(formProps)=>{
<<<<<<< HEAD
    
=======
   
>>>>>>> 72814175ff65a2ca68edad7cd5a04ddf63539196
    return (
      <div className="item">
          <label>{formProps.label}</label>
          <input {...formProps.input} autoComplete="off"  />
          <div>{this.renderError(formProps.meta)}</div>
      </div>
      
      )
  }

  onSubmit(formValues){
      console.log('formValues',formValues)
  }

  render(){
    console.log('this.props',this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter brewery"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
        <Field name="email" component={this.renderInput} label="Enter email"/>
        <button>Submit</button>
      </form>
    )
  }
  
}

const validate=(formValues)=>{
    const errors= {}

    if(!formValues.title){
      errors.title="You must enter the name of your brewery"
    }

    if(!formValues.description){
      errors.description="You must enter description"
    }

    if(!formValues.email){
      errors.email="You must enter one email"
    }

    return errors;
}

export default reduxForm({
    form: 'breweryCreate',
    validate
})(Create);