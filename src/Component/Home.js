import React from 'react'
import { Button, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {student} from './student'
import {Link,useNavigate} from 'react-router-dom'

export default function Home() {
    const history = useNavigate();

const editUser = (id, name ,age)=>{
    localStorage.setItem('Name',name)
    localStorage.setItem('Age',age)
    localStorage.setItem('Id',id)

}

    const deleteUser = (Id)=>{
        const index = student.map(function(e){
            return e.Id
        }).indexOf(Id)
        student.splice(index,1)
        history('/')
    }
   
    return (
        
        <div style={{ margin: "12rem" }}>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                           student.map(item=> 
                           ( <tr key={item.Id}>
                                    <td>{item.Id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>
                                    <Link to={`/edit`}><Button onClick={()=>editUser(item.Id,item.Name,item.Age)}>Edit</Button>
                                    </Link> 
                                    &nbsp;
                                    <Button onClick={()=>deleteUser(item.Id)}>Delete</Button></td>
                                    </tr>
                            )
                        )
                    }
                </tbody>
            </Table><br></br>
            <Link className='d-grid gap-2' to = '/create'>
                <Button size="lg">Create</Button>
                </Link>
        </div>
        
    )
}
