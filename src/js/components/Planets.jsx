import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Planets = () => {
  const { state, toggleFavorite } = useContext(AppContext);

  return (
    <div className="container">
      <h1 className="fs-1 text-danger m-3">Planets</h1>
      <div className="d-flex flex-nowrap" style={{ overflowX: "auto" }}>
        {state.planets.length > 0 ? (
          state.planets.map((planet) => (
            <div key={`${planet.type}-${planet.uid}`} className="card mx-3" style={{ minWidth: "18rem" }}>
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Planet" style={{ minHeight: '200px' }}/>
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Diameter: {planet.diameter}</li>
                <li className="list-group-item">Gravity: {planet.gravity}</li>
                <li className="list-group-item">Climate: {planet.climate}</li>
              </ul>
              <div className="card-body d-flex justify-content-around">
                <Link to={`/planets_details/${planet.uid}`} className="btn btn-primary">
                  Learn more!
                </Link>
                {!state.favorites.some(fav => fav.uid === planet.uid && fav.type === planet.type) ? (
                  <button onClick={() => toggleFavorite(planet)} className="btn btn-danger">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                ) : (
                  <button onClick={() => toggleFavorite(planet)} className="btn btn-danger">
                    <i className="fa-solid fa-heart"></i>
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Planets;
