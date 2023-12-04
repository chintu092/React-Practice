/* eslint-disable no-undef */
import './App.css';
import React, { useState, useEffect  } from 'react';
import FormData from './FormData';
import Table from './Table';

function App() {

  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState(
    {
      fullName: '',
      emailAddress: '',
      salary: '',
      description: '',
      location: '',
      pushnotifications: '',
      favfood: [ ],
      uploadImage: '',
    }
  );

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //For Radio Button
  const onChangeRadioButton = (evnt) =>{
   //console.log(evnt.target.value); //this is required to show value inside every event
   setformInputData({...formInputData, pushnotifications:evnt.target.value})
  }
  const onChangeCheckBox = (evnt) =>{
    setformInputData({...formInputData, favfood:[...formInputData.favfood,evnt.target.value]})
    //console.log(formInputData);
   }

   const onUploadImg = (evnt) =>{
    //console.log(evnt.target.files[0]);
    setformInputData({...formInputData, uploadImage:evnt.target.files[0].name})
   }


  const handleChange = (evnt) => {
    const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
    setformInputData(newInput)
  }

//to add space in radio value  
 const getRealPushnotification = (value) =>{
  if (value === 'Sameasemail'){
    return 'Same As Email';
  } else if (value === 'Nopushnotifications'){
    return 'No Push Notifications';
  } 
  return value;
 } 

 const unCheck = (i) => {
  const splitvariable = document.getElementsByName('favfood');
  for(i=0; i<splitvariable.length; i++) {
    splitvariable[i].checked = false;
   }   
}

useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formInputData);
  }
}, [formErrors]);


const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.fullName) {
    errors.fullName = "Name is required!";
  }
  if (!values.emailAddress) {
    errors.emailAddress = "Email is required!";
  } else if (!regex.test(values.emailAddress)) {
    errors.emailAddress = "This is not a valid email format!";
  }
  if (!values.salary) {
    errors.salary = "Salary is required";
  } 
  return errors;
};

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    setFormErrors(validate(formInputData));
    setIsSubmit(true);

    const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
    if (checkEmptyInput && Object.keys(formErrors).length === 0) {
      //console.log(formInputData);
      //const splitvariable = 'Same_as_email';
      //console.log(splitvariable.replaceAll('_',' ')); //using this we can remove _ in radio value

      //const splitvariable = formInputData.favfood;
      //console.log(splitvariable.toString().replaceAll('_',' '));
      const newFormData = {...formInputData, pushnotifications:getRealPushnotification(formInputData.pushnotifications), favfood:formInputData.favfood.toString().replaceAll('_',' ')}
      const newData = (data) => ([...data, newFormData])
      setTableData(newData);
      const emptyInput = { fullName: '', emailAddress: '', salary: '', description: '', location: '', pushnotifications: '', favfood: '', uploadImage: ''}
      setformInputData(emptyInput)

      unCheck();
    }
   
    

  }

  //console.log(formInputData);

  return (
    <div className='max-w-7xl mx-auto pt-5 pb-5'>
      <div className=" p-4 border border-[#d1d5db] rounded-md">
        <FormData handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} handleOnRadioChange={onChangeRadioButton} handleOnCheckBoxChange={onChangeCheckBox} handleUploadImg={onUploadImg} FormErrorsData={formErrors} />
      </div>
      <div className="">
        <Table tableData={tableData} />
      </div>
    </div>
  );
}

export default App;
