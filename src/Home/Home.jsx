import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="container mx-auto text-center text-5xl mt-28 py-4 border-y-4">
        Mongo+Mongoose/Daisy+MaterialUI test
      </h2>

      <div className="container mx-auto flex justify-center gap-4 mt-4">
        <Link to="/mongoView">
          <button className="btn btn-outline btn-primary">Mongo</button>
        </Link>
        <Link to="/mongoAdd">
          <button className="btn btn-outline btn-primary">Mongo Add</button>
        </Link>

        <div className="divider divider-horizontal">OR</div>
        <Link to="/mongooseView">
          <button className="btn btn-outline btn-secondary">Mongoose</button>
        </Link>
        <Link to="/mongooseAdd">
          <button className="btn btn-outline btn-secondary">
            Mongoose Add
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
