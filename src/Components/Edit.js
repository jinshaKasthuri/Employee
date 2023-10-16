import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import employee from './Employee';
import { useNavigate} from 'react-router-dom';



function Edit() {

 const [id,setId]=useState('')
 const[uname,setUname]=useState('')
 const[age,setage]=useState(0)
 const[desig,setDesig]=useState('')
 const[salary,setsalary]=useState(0)

useEffect(()=>{
setId(JSON.parse(localStorage.getItem("id"))) //data store
setUname(localStorage.getItem("uname"))
setage(JSON.parse(localStorage.getItem("age")))
setDesig(localStorage.getItem("desig"))
setsalary(JSON.parse(localStorage.getItem("salary")))
},[])

var index=employee.map((item)=>item.id).indexOf(id)
let history=useNavigate()



const handleUpdate=(e)=>{
  e.preventDefault()    //one time


let emp=employee[index]
emp.name=uname
emp.age=age
emp.desig=desig
emp.salary=salary
history('/')
}



  return (
    <>
      <h1 className='text-center text-warning p-3 mt-3' >Update details of Employee Data</h1>
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
        <Form.Control value={uname} type="text"  onChange={(e)=>setUname(e.target.value)}/>

        <Form.Label>Employee Age</Form.Label>
        <Form.Control value={age} type="text"   onChange={(e)=>setage(e.target.value)}/>

        <Form.Label>Employee Designation</Form.Label>
        <Form.Control value={desig} type="text"  onChange={(e)=>setDesig(e.target.value)} />

        <Form.Label>Employee Salary</Form.Label>
        <Form.Control  value={salary} type="text" onChange={(e)=>setsalary(e.target.value)} />

      </Form.Group>
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Edit
