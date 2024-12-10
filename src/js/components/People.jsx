import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const People = () => {
  const { state, toggleFavorite } = useContext(AppContext);

  return (
    <div className="container">
      <h1 className="fs-1 text-danger m-3">Characters</h1>
      <div className="d-flex flex-nowrap" style={{ overflowX: "auto" }}>
        {state.people.length > 0 ? (
          state.people.map((char) => (
            <div key={`${char.type}-${char.uid}`} className="card mx-3" style={{ minWidth: "18rem" }}>
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Character" style={{ minHeight: '200px' }}/>
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Height: {char.height}</li>
                <li className="list-group-item">Mass: {char.mass}</li>
                <li className="list-group-item">Hair Color: {char.hair_color}</li>
              </ul>
              <div className="card-body d-flex justify-content-around">
                <Link to={`/people_details/${char.uid}`} className="btn btn-primary">
                  Learn more!
                </Link>
                {!state.favorites.some(fav => fav.name === char.name) ? (
                  <button onClick={() => toggleFavorite(char)} className="btn btn-danger">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                ) : (
                  <button onClick={() => toggleFavorite(char)} className="btn btn-danger">
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

export default People;
