import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { RiSave3Fill } from "react-icons/ri";
import { create } from "../Functions/Users";

const UserAddForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    number: "",
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
  });

  const [validationErrors, setValidationErrors] = useState([]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    create(data)
      .then((res) => {
        // console.log(res);
        navigate("/");
      })
      .catch((err) => console.log("create user >>", err));
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mt-12 mb-6 bg-green-800 px-6 p-1 text-xl text-white border rounded-lg">
        เจ้าของ
      </div>
      <form className="w-[90%] xl:w-[70%] bg-gray-200 border rounded-lg border-green-800 p-4">
        {validationErrors &&
          validationErrors.map((error) => (
            <div key={error.param} className="text-red-500 font-bold">
              {error.msg}
            </div>
          ))}

        <div>
          <label
            htmlFor="number"
            className="bg-green-800 mr-4 text-xl text-white px-9"
          >
            HN
          </label>
          <input
            type="text"
            name="number"
            className="border border-black text-lg mr-2 pl-1 "
            placeholder="HN Number"
            onChange={(e) => handleChange(e)}
            required
          />

          <label
            htmlFor="name"
            className="bg-green-800 p-1 w-[30px] ml-4 mr-4 text-xl text-white"
          >
            ชื่อเจ้าของ
          </label>
          <input
            type="text"
            name="firstName"
            className="border border-black text-lg mr-2 pl-1"
            placeholder="ชื่อ"
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            type="text"
            name="lastName"
            className="border border-black text-lg mr-2 pl-1"
            placeholder="นามสกุล"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <br />
        <div>
          <label
            htmlFor="tel"
            className="bg-green-800 p-1 mr-4 text-xl text-white"
          >
            เบอร์ติดต่อ
          </label>
          <input
            type="text"
            name="tel"
            className="border border-black text-lg mr-2 pl-1"
            placeholder="เบอร์ติดต่อ"
            onChange={(e) => handleChange(e)}
            required
          />

          <label
            htmlFor="email"
            className="bg-green-800 p-1 mr-4 text-xl text-white px-5"
          >
            E-mail
          </label>
          <input
            type="text"
            name="email"
            className="border border-black text-lg mr-2 pl-1 px-10"
            placeholder="e-mail"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <br />
      </form>
      <div className="flex justify-center items-center mt-6">
        <Link
          to={"/"}
          className="bg-gray-300 border rounded-lg p-2 m-2 flex justify-center items-center hover:bg-black hover:text-white"
        >
          <IoArrowBackCircle />
          <button>cancel</button>
        </Link>
        <button className="" onClick={handleSubmit}>
          <Link
            to={"/"}
            className="bg-gray-300 border rounded-lg p-2 m-2 flex justify-center items-center hover:bg-black hover:text-white"
          >
            <RiSave3Fill />
            Add
          </Link>
        </button>
      </div>
    </section>
  );
};

export default UserAddForm;
