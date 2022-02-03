import React from "react";
import { Button } from 'react-bootstrap'
import  { useEffect, useState } from "react"

function Dashboard(){

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
      
	return(
		<div style = {{margin: "30px"}}>
		  <h1>Dashboard</h1>
		  <br/>
		   <Button variant="primary" onClick={handleLogout}>
                       Logout
                </Button>
             <br/>             
		</div>
	)
	
}

export default Dashboard;