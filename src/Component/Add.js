import React,{useState} from "react";
import { Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {student} from './student'
import {v4 as uuid} from "uuid"
import {useNavigate} from 'react-router-dom'


function Add() {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [id,setId]=useState('');
    let history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a = name,
            b = age,
            c = id;
            student.push({id:uniqueId, Name:a, Age:b, Id:c});
            history("/");

    }

  return (
    <div>
      <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3" controlled="forName">
            <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
        </Form.Group> 

        <Form.Group className="mb-3" controlled="forAge">
            <Form.Control type="text" placeholder="Enter Age" required onChange={(e)=>setAge(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlled="forAge">
            <Form.Control type="text" placeholder="Enter Id" required onChange={(e)=>setId(e.target.value)}>
            </Form.Control>
        </Form.Group>

        <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>

      </Form>
    </div>
  )
}

export default Add
