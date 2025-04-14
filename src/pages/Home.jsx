
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {

  
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const {store, dispatch} = useGlobalReducer()
  
  const navigate = useNavigate()
  useEffect( ()=> {
	
	fetch("https://www.swapi.tech/api/people")

	.then((response)=> (response.json()))
  
	.then((data) => {setCharacters(data.results)})
  
	.catch((error)=> {console.log( error)})

  }  , [])

  useEffect( ()=> {
	
	fetch("https://www.swapi.tech/api/planets")

	.then((response)=> (response.json()))
  
	.then((data) => {setPlanets(data.results)})
  
	.catch((error)=> {console.log( error)})

  }  , [])
	return (
		<div className="main-container">
            <div className="container">

            <h1>Characters</h1>

			<div className="flex">

             {characters.map (
               (object, index)=> { return(
				
				<div className="card" style={{ width: "18rem" }} key = {index}>
				 <div className="card-body">
				  <h5 className="card-title">{object.name}</h5>
				  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  <div className="d-flex" >
				  <button type="button" className="btn btn-primary me-auto" onClick={() => {navigate("/section/"+ object.uid)}}>More Info</button>

				  {store.favorites.some(fav => fav.name == object.name)?(
					
					
					 <button type="button" className="btn btn-outline-warning ms-4" onClick={()=> {
                       dispatch({
						type:"remove_favorite",
						payload: object
					   })

					 }}><i class="fa-solid fa-heart" ></i></button>


				  ): (

					<button type="button" className="btn btn-outline-warning ms-4" data-id = {object} 

				  
				  
						onClick={(event)=> {
	  
						  dispatch({
							  type: "add_favorites",
							  payload: object
						  })
	  
						  console.log(event.currentTarget.dataset.id)
						  console.log(store.favorites)
						  
						  
						  }} ><i class="fa-regular fa-heart"></i></button>
				  )}

					 

						
                        
					
					
					
					
				 
				  </div>
				  
				 </div>
			  </div>
			  
				)

			
				

			   }
			 )}
			 
			 </div>

			 <h1>Planets</h1>
           <div className="flex">

		   
			{planets.map (
               (object, index)=> { return(
				
				<div className="card" style={{ width: "18rem" }} key = {index}>
				 <div className="card-body">
				  <h5 className="card-title">{object.name}</h5>
				  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  <div className="d-flex" >
				  <button type="button" className="btn btn-primary me-auto" 
				  onClick={() => {navigate("/section/"+ object)}}>More Info</button>
				  
				  {store.favorites.some(fav => fav.name == object.name)?(
					
					
					<button type="button" className="btn btn-outline-warning ms-4" onClick={()=>{
						dispatch({
							type:"remove_favorite",
							payload:object
						})
					}}><i class="fa-solid fa-heart"></i></button>


				 ): (

				   <button type="button" className="btn btn-outline-warning ms-4" data-id = {object.uid} 

				    
				 
					   onClick={(event)=> {
	 
						 dispatch({
							 type: "add_favorites",
							 payload: object
						 })
	 
						 console.log(event.currentTarget.dataset.id)
						 console.log(store.favorites)
						 
						 
						 }} ><i class="fa-regular fa-heart"></i></button>
				 )}

					

				  </div>
				 </div>
			  </div>
			  
			  
				)

			
				

			   }
			 )}
		   </div>
			

        {console.log("This Should Repeat")}



				
			</div>
			
        









		</div>
		
	);
}; 