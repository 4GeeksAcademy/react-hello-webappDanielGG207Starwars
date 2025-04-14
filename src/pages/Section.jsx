
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export const Section = () => {
    const {id} = useParams()
    const[character, setCharacter] = useState([])

     
     useEffect( ()=> {
            fetch("https://www.swapi.tech/api/people/" + id)
    
            .then(res => res.json())
        
            .then(data => setCharacter(data.result.properties))
        
            .catch(err => console.error(err))
    
    
    
    
        }, [])


    return (
        <div className="main-container">
         <div className="container p-0">
            


                <div class="row p-0">

                    <div class="col p-0 ps-2">
                     1 of 2
                    </div>


                    <div class="col p-0">
                     <h1>{character.name}</h1>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias maxime voluptatibus nam id amet. Reprehenderit facere sit veritatis fugiat impedit, sint deserunt quas. Quisquam esse corrupti, aut placeat sapiente nisi.</p>
                    </div>


                


            </div>

            <div className="red-line"></div>

            <div class = "row p-0">

                <div class="col p-0 ps-2">
                <h3 className="text-center">Name</h3>
                </div>
                <div class="col p-0 ps-2">
                <h3 className="text-center">Birth Year</h3>
                </div>
                <div class="col p-0 ps-2">
                <h3 className="text-center">Height</h3>
                </div>
                <div class="col p-0 ps-2">
                <h3 className="text-center">Skin Color</h3>
                </div>
                <div class="col p-0 ps-2">
                <h3 className="text-center">Eye Color</h3>
                </div>




            </div>

            <div class = "row p-0">

                <div class="col p-0 ps-2">
                 <h4 className="text-center"> {character.name} </h4>
                </div>
                <div class="col p-0 ps-2">
                <h4 className="text-center"> {character.birth_year} </h4>
                </div>
                <div class="col p-0 ps-2">
                <h4 className="text-center"> {character.height} </h4>
                </div>
                <div class="col p-0 ps-2">
                <h4 className="text-center"> {character.skin_color} </h4>
                </div>
                <div class="col p-0 ps-2">
                <h4 className="text-center"> {character.eye_color} </h4>
                </div>



            </div>


           


         </div>
        </div>


            )
  
}