import React from 'react';
import SearchExample from '../components/SearchExample';
import {useNavigate} from "react-router-dom"

function Home (){

	const navigate = useNavigate();

	return (
	<div>	
	<h1>Koding Akademi Home Page</h1>
	<hr/>
	<SearchExample/>
	<hr/>
	<button 
		className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
		onClick={()=>navigate("/about")}>About</button>
	</div>

	);
}

export default Home;
