import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateIteMgs = () => {
  const brands = useLoaderData();
  console.log(brands);
  const { _id, BrandName, BrandImage } = brands;
  const handleAddBrandMgs = (event) => {
    event.preventDefault();
    const form = event.target;
    const BrandName = form.BrandName.value;
    const BrandImage = form.BrandImage.value;
    const updateBrand = { BrandName, BrandImage };
    console.log(updateBrand);

    fetch(
      `https://mongo-mongoose-test-server.vercel.app/mongoose/mongooseRoomCategory/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateBrand),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0 || data._id) {
          console.log("adbf");
          Swal.fire({
            title: "Success!",
            text: "Brand Name & Image Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h2 className="container mx-auto text-center text-8xl mt-28 py-4 border-y-4">
        Mongooose Add items
      </h2>
      <div>
        <div className="hero  mt-20 bg-base-200">
          <div>
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-center pb-6">
                Add New Brand Car
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleAddBrandMgs} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Name {_id}</span>
                  </label>
                  <input
                    type="text"
                    name="BrandName"
                    defaultValue={BrandName}
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
                    defaultValue={BrandImage}
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

export default UpdateIteMgs;
