import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import employee from './Employee';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

function Add() {

  
 const [id,setId]=useState('')
 const[uname,setUname]=useState('')
 const[age,setage]=useState('')
 const[desig,setDesig]=useState('')
 const[salary,setsalary]=useState('')

let history=useNavigate()
 

const handleAdd=(e)=>{
  e.preventDefault() 
  let ids=uuid()
 // console.log(ids);
  let uniqueid=ids.slice(0,8)

  
  
  employee.push(
    {
     id:uniqueid,
      name:uname,
      age:age,
      desig:desig,
      salary:salary,
    }
    
  )
  history('/')
  

  }  
  
  

  return (
    <>
      <h1 className='text-center text-warning p-3 mt-3' >Add details of Employee Data</h1>
        <div className='text-center p-2 fs-5'>
        <p className='p-3'>The term "employee management systems" is used broadly to describe a range of software systems that cover key aspects of HR admin. They are also known by other names too. Some vendors refer to their products as employee databases, while others use acronyms like HRIS (human resources information system), HCM (human capital management), or HRMS (human resource management system).</p>
      </div>
      <Container>
      <Row>
        <Col md={4}>
          <img className='w-100 mt-5'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksN97Mh83UeEEcig3QFLCZzMCAHnOOiyVQg&usqp=CAU"
/>
        </Col>
        <Col md={8}>
        <Form className='border p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" required
         onChange={(e)=>setUname(e.target.value)}
        />

        <Form.Label>Employee Age</Form.Label>
        <Form.Control type="text"  required
        onChange={(e)=>setage(e.target.value)}
        />

        <Form.Label>Employee Designation</Form.Label>
        <Form.Control type="text"  placeholder='Employee designation'required
        onChange={(e)=>setDesig(e.target.value)} 
        />

        <Form.Label>Employee Salary</Form.Label>
        <Form.Control type="text" required
        onChange={(e)=>setsalary(e.target.value)}
         />

      </Form.Group>
      <Button 
      onClick={(e)=>handleAdd(e)}
       variant="primary" type="submit">
       Add
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Add
