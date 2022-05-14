import React, {useMemo} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectores/getHeroByName";
import { HeroCard } from "../hero/HeroCard";

import queryString from 'query-string'


export const SearchScreen = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.search)

  const {q} = queryString.parse(location.search);
  console.log(q) 
  // Con esto puedo ver cual son los parametros que 
  // tiene pasada la url, en este caso con la q

  const [ formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFilter = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) =>{
    e.preventDefault();
    console.log(searchText)
    navigate(`?q=${searchText}`)

  }
  
  return (
    <>
      <h1> Búsqueda </h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={ handleSearch }>
            <input
              type="text"
              placeholder="Buscar un Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultado</h4>
          <hr />
          {
            (q === '')
            ? <div className="alert alert-info">Buscar un heroe</div>
            :(heroesFilter.length === 0)
            && <div className="alert alert-danger"> No hay Resultados: {q}</div>
          }          
          


          {
            heroesFilter.map( hero => (
              <HeroCard 
              key={hero.id}
              {...hero}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};
