
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export const SectionP = () => {
    const {id} = useParams()
    const[planet, setPlanet] = useState([])


    useEffect( ()=> {
        fetch("https://www.swapi.tech/api/planets/" + id)

        .then(res => res.json())
    
        .then(data => setPlanet(data.result.properties))
    
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
                     <h1>{planet.name}</h1>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias maxime voluptatibus nam id amet. Reprehenderit facere sit veritatis fugiat impedit, sint deserunt quas. Quisquam esse corrupti, aut placeat sapiente nisi.</p>
                    </div>


                


            </div>

            <div className="red-line"></div>

            <div class = "row p-0">

                <div class="col p-0 ps-2">
                <h3 className="text-center">Name</h3>
                </div>
                <div class="col p-0 ps-2">
                <h3 className="text-center">Climate</h3>
                </div>
                <div class="col p-0 ps-2">
                <h3 className="text-center">Population</h3>
                </div>
                <div class="col p-0 ps-2">
                <h3 className="text-center">Orbital Period</h3>
                </div>
                <div class="col p-0 ps-2">
                <h4 className="text-center">Rotation Period</h4>
                </div>




            </div>

            <div class = "row p-0">

                <div class="col p-0 ps-2">
                 <h4 className="text-center"> {planet.name} </h4>
                </div>
                <div class="col p-0 ps-2">
                <h4 className="text-center"> {planet.climate} </h4>
                </div>
                <div class="col p-0 ps-2">
                <h4 className="text-center"> {planet.population} </h4>
                </div>
                <div class="col p-0 ps-2">
                <h4 className="text-center"> {planet.orbital_period} </h4>
                </div>
                <div class="col p-0 ps-2">
                <h4 className="text-center"> {planet.rotation_period} </h4>
                </div>



            </div>


           


         </div>
        </div>


            )
  
}