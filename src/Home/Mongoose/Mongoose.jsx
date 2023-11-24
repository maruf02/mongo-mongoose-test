import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Mongoose = () => {
  const brands = useLoaderData();
  console.log(brands);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://mongo-mongoose-test-server.vercel.app/mongoose/mongooseRoomCategory/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data && (data.deletedCount > 0 || data._id)) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              Swal.fire("Error", "Failed to delete the file.", "error");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "Failed to delete the file.", "error");
          });
      }
    });
  };
  return (
    <div>
      <h2 className="container mx-auto text-center text-8xl mt-28 py-4 border-y-4">
        Mongoose test
      </h2>
      {/*  */}

      <div className="overflow-x-auto max-w-md container mx-auto pt-14">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>image</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, i) => (
              <tr key={brand._id}>
                <th>{i + 1}</th>
                <td>{brand.BrandName}</td>
                <td>{brand.BrandImage}</td>
                <td className="btn mr-8">
                  <Link to={`/updateMgs/${brand._id}`}>
                    <button>U</button>
                  </Link>
                </td>
                <td onClick={() => handleDelete(brand._id)} className="btn">
                  x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  */}
    </div>
  );
};

export default Mongoose;
