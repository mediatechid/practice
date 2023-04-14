import React from 'react';
import {useNavigate} from "react-router-dom"

function About () {
	const navigate = useNavigate();
	return <div>
		<h2>About us Page</h2>

		Read more about us at :
		<a href="https://kodingakademi.id/">
			https://www.kodingakademi.id
		</a>
		<hr/>
		<button 
			className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
			onClick={()=>navigate(-1)}>Go Back Home</button>
	</div>
}
export default About;
