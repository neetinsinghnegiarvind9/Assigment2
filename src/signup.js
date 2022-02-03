import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col,Button,Container } from 'react-bootstrap';
import { useState } from 'react'
import { useHistory} from "react-router-dom"
import { Link } from "react-router-dom";

function Signup() {

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

   async function registerUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      }),
    })

    const data = await response.json()
     if (data.status == 'ok') {
     
      alert('Account created successfully')
      console.log(data)
        window.location.href = '/login'
    } else {
      alert('Please check your username and password')
    }   
  }
    
	
	return(
		<div>      
       <Container style = {{margin: "30px"}}>
   <Row>
    <Col>
    <h1 style = {{marginTop : "20px"}}>New Account</h1>
    <Form onSubmit = {registerUser}>

      <Form.Control type = "text" 
                    placeholder="First name"
                    name = "firstName"
                    value = {firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    required placeholder="First name" />
            <br/>
      <Form.Control type = "text" 
                    placeholder="Last name"
                    name = "LastName"
                    value = {lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    required placeholder="Last name" />
            <br/>
       <Form.Control type = "number" 
                    placeholder="Phone Number"
                    name = "phoneNumber"
                    value = {phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    required placeholder="Phone Number" />  
            <br/>
      <Form.Control type = "email" 
                    placeholder="Email"
                    name = "email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    required placeholder="Email" />
            <br/>
      <Form.Control type = "password" 
                    placeholder="Password"
                    name = "password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    required placeholder="Password" />
             <br/>
       <Button className = "primary" type="submit">Sign Up</Button>

       </Form>
    </Col>
    <Col style = {{marginLeft : "40px"}}>
     <h1> Welcome Back</h1>
     <br/>
       <Link to= "/login">
     <Button className = "primary" type="submit" >Login</Button>
     </Link>
    </Col>
  </Row>
  </Container>

		</div>
	)
	
}

export default Signup;