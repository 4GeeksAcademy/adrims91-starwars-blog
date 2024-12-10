import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const { state, toggleFavorite } = useContext(AppContext);

  return (
    <div className="container">
      <h1 className="fs-1 text-danger m-3">Vehicles</h1>
      <div className="d-flex flex-nowrap" style={{ overflowX: "auto" }}>
        {state.vehicles.length > 0 ? (
          state.vehicles.map((vehicle) => (
            <div key={`${vehicle.type}-${vehicle.uid}`} className="card mx-3" style={{ minWidth: "18rem" }}>
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Vehicle" style={{ minHeight: '200px' }}/>
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Model: {vehicle.model}</li>
                <li className="list-group-item">Length: {vehicle.length}</li>
                <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
              </ul>
              <div className="card-body d-flex justify-content-around">
                <Link to={`/vehicles_details/${vehicle.uid}`} className="btn btn-primary">
                  Learn more!
                </Link>
                {!state.favorites.some(fav => fav.uid === vehicle.uid && fav.type === vehicle.type) ? (
                  <button onClick={() => toggleFavorite(vehicle)} className="btn btn-danger">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                ) : (
                  <button onClick={() => toggleFavorite(vehicle)} className="btn btn-danger">
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

export default Vehicles;
