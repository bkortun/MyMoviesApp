import React from "react";

const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie, i) => (
        <div className="col-lg-4" key={i}>
          <div className="card mb-4 shadow-sm">
            <img src="" className="card-img-top" alt="Sample Movie" />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.plot}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-md btn-outline-danger" onClick={()=>props.deleteProp(movie)}>
                  Delete
                </button>
                <h2>
                  <span className="badge badge-info">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
