import React,{useState,useEffect} from "react";
import { Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {student} from './student'
import {v4 as uuid} from "uuid"
import {Link,useNavigate} from 'react-router-dom'


function Edit() {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [id,setId]=useState('');
    let history = useNavigate();

        const index = student.map(function(e){
            return e.Id
        }).indexOf(id);

        const handleSubmit = (e)=>{
            e.preventDefault();

            let a = student[index];
            a.Name=name;
            a.Age=age;
            a.Id=id;
                // student.push({id:uniqueId, Name:a, Age:b, Id:c});
                history("/");
        }

        useEffect(()=>{
            setName(localStorage.getItem('Name'))
            setAge(localStorage.getItem('Age'))
            setId(localStorage.getItem('Id'))
        },[])
     
        
        
        return(
            <div>
                  <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3" controlled="forName">
            <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
        </Form.Group> 

        <Form.Group className="mb-3" controlled="forAge">
            <Form.Control type="text" placeholder="Enter Age" required value={age} onChange={(e)=>setAge(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlled="forAge">
            <Form.Control type="text" placeholder="Enter Id" required  value={id} onChange={(e)=>setId(e.target.value)}>
            </Form.Control>
        </Form.Group>

        <Button onClick={(e)=>handleSubmit(e)} type="submit">Update</Button>

      </Form>
            </div>
        )


}

export default Edit
