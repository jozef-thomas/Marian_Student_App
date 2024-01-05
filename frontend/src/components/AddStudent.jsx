import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css';
import axios from 'axios'
const AddStudent = () => {
  var[inputs,setInputs] = useState({
    sname:"",
    age:"",
    rollNo:"",
    place:"",
    phoneNo:""})
 const inputHandler = (e)=>{
    const {name,value}=e.target
    setInputs((prevData)=>({...prevData,[name]:value}))
    console.log(inputs)
 }
 const addHandler = ()=>{
  console.log("button clicked");
  axios.post("http://localhost:8080/add",inputs)
  .then((response)=>{
    console.log(response.data)
    alert(response.data)
  })
  .catch((err)=>console.log(err))
 }
  return (
    <div style={{margin:'6%'}} className='App' >
      <Typography variant='h4' style={{color:'purple'}}>
        Add Students Form
        </Typography>
        <br /><br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField 
            label='Student Name' 
            variant='outlined' 
            fullWidth
            name='sname'
            value={inputs.sname}
            onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}> 
            <TextField label='Student Age' 
            variant='outlined' 
            fullWidth
            name='age'
            value={inputs.age}
            onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}> 
            <TextField 
            label='Student Roll No'
             variant='outlined' 
             fullWidth
             name='rollNo'
            value={inputs.rollNo}
            onChange={inputHandler}
             />
          </Grid>
          <Grid item xs={12} sm={6} md={6}> 
            <TextField 
            label='Student Place' 
            variant='outlined' 
            fullWidth
            name='place'
            value={inputs.place}
            onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}> 
            <TextField 
            label='Student Phone Number' 
            variant='outlined' 
            fullWidth
            name='phoneNo'
            value={inputs.phoneNo}
            onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}> 
          <Button variant='contained' color='secondary' onClick={addHandler}>Submit</Button>
          </Grid>
        </Grid>

    </div>
  )
}

export default AddStudent