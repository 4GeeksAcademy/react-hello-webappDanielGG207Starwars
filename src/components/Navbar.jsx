import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const Navbar = () => {
	const {store, dispatch} = useGlobalReducer()
	

	

	


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src= "https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" className="image"></img></span>
				</Link>
				<div className="ml-auto">
				<div class="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Favorites
                </button>
                <ul class="dropdown-menu">
					{store.favorites.map((object, i)=>{

						return(
							<li className="d-flex" key = {i}><a className="dropdown-item" href="#" >{object.name}</a> <i className="fa-solid fa-trash" onClick={()=>{

								dispatch({
									type:"remove_favorite", 
									payload:object
								})
							}}></i></li>
							
						)

                

					})}
                 
				
			  
                 
                 
                </ul>
                </div>
				</div>
			</div>
		</nav>
	);
};