import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Row,Col,Button } from 'react-bootstrap';
import { useState } from 'react'
import { Link } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    async function loginUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if (data.user) {
      localStorage.setItem('token', data.user)
      alert('Login successful')
      console.log(data.user)
      window.location.href = '/'
    } else {
      alert('Please check your username and password')
    }
  }

	return(
		<div>      
       <Container style = {{margin: "40px"}}>
   <Row>
    <Col >
    <h1> New Account</h1>
    <br/>
     <Link to= "/signup">
     <Button className = "primary" type="submit" >Signup</Button>
     </Link>
    </Col>
    <Col>
    <h1> Login </h1>
    <Form onSubmit = {loginUser}>                         
       <Form.Control type = "email" 
                    placeholder="Email"
                    name = "email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required placeholder="Email" />
                   <br/>
      <Form.Control type = "password" 
                    placeholder="Password"
                    name = "password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required placeholder="Password" />
                  <br/>
       <Button className = "primary" type="submit">Login</Button>
       </Form>
    </Col>
  </Row>
  </Container>

		</div>
	)
	
}

export default Login;