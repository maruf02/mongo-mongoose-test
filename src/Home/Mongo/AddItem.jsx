import React from "react";
import Swal from "sweetalert2";
import { vite_key } from "../firebase/firebase.config";

const AddItem = () => {
  const handleAddBrand = (event) => {
    event.preventDefault();
    const form = event.target;
    const BrandName = form.BrandName.value;
    const BrandImage = form.BrandImage.value;
    const Brand = { BrandName, BrandImage };
    console.log(Brand);
    console.log("dff", vite_key);
    fetch("https://mongo-mongoose-test-server.vercel.app/mongoRoomCategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Brand),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Brand Name & Image Insert Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h2 className="container mx-auto text-center text-8xl mt-28 py-4 border-y-4">
        Mongo Add items
      </h2>
      <pre>import.meta.env.VITE_API_KEY: {import.meta.env.VITE_apiKey}</pre>
      <div>
        <div className="hero  mt-20 bg-base-200">
          <div>
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-center pb-6">
                Add New Brand Car
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleAddBrand} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Name{vite_key}</span>
                  </label>
                  <input
                    type="text"
                    name="BrandName"
                    placeholder="Enter Brand Name...."
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Img URL</span>
                  </label>
                  <input
                    type="text"
                    name="BrandImage"
                    placeholder="Enter Image URL only"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
