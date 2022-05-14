import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectores/getHeroById";

import './hero.css';



export const HeroScreen = () => {

  const {heroeId} = useParams();
  const navigater = useNavigate();
  const hero = useMemo( () =>  getHeroById(heroeId), [heroeId] );

  if(!hero) {
    return <Navigate to='/' />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const imagePath = heroImages(`./${heroeId}.jpg`); //`/assets/${heroeId}.jpg` Desde public asser

  

  const handleReturn = () => {
    navigater( -1 ); // Vuelve a la pagina anterior
  }


  return (
    <div className="row mt-5">
        <div className="col-4">
          <img 
              src={ imagePath }
              alt={superhero}
              className='img-thumbnail animate__animated animate__bounceInLeft ' />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{ superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego: </b> { alter_ego } </li>
            <li className="list-group-item"> <b>Publisher: </b> { publisher } </li>
            <li className="list-group-item"> <b>First Appearance: </b> { first_appearance } </li>            
          </ul>

          <h5 className="margen-alto" >Characters</h5>
          <p> {characters} </p>

          <button 
          className="btn btn-outline-info"
          onClick={ handleReturn }
          >
            Regresar
          </button>

        </div>
    </div>
  )
}
