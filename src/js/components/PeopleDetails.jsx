import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PeopleDetails = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const person = state.people.find((item) => item.uid === id);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card mb-3" style={{maxWidth: "90vw"}}>
      <div className="row text-center">
        <div className="col-md-4">
        <img src="https://via.placeholder.com/800x600" alt="Placeholder Image" className="img-fluid"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, rerum, placeat quibusdam veritatis eum et eos explicabo, alias officia sunt expedita quidem facilis. Illo, quas repellendus. Consequatur totam dolores aliquid?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam modi repudiandae porro, in reiciendis nam dicta hic? Nihil nulla nam aliquid quis? Inventore repudiandae earum aliquam voluptas? Dolores, voluptatem.
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer text-danger text-center d-flex justify-content-evenly">
        <p>Name <br />{person.name}</p>
        <p>Birth Year <br />{person.birth}</p>
        <p>Gender <br />{person.gender}</p>
        <p>Height <br />{person.heigth}</p>
        <p>Skin Color <br />{person.skin_color}</p>
        <p>Eye Color <br />{person.eye_color}</p>
      </div>
    </div>
  );
};

export default PeopleDetails;
