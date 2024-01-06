import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircle, IoAddCircle } from "react-icons/io5";
import { create } from "../Functions/Users";

const UserAddForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    number: "",
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // check input
    if (
      data.number.trim() === "" ||
      data.firstName.trim() === "" ||
      data.lastName.trim() === "" ||
      data.tel.trim() === "" ||
      data.email.trim() === ""
    ) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }
      create(data)
        .then((res) => {
          navigate('/')
        })
        .catch((err) => {
          if (err.response && err.response.status === 400) {
            alert(err.response.data);
          } else {
            console.error("create user >>", err);
          }
        });
    }

  return (
    <section className="mt-20">
      <div className="text-center w-[40%] text-xl mb-2">
        เพิ่ม เจ้าของ
      </div>
      <div className="flex flex-col justify-center items-center">
      <form className="w-[90%] xl:w-[70%] bg-gray-200 border-t-4 border-b-4 border-green-800 p-4">
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
            className="border border-black text-lg pl-1 w-32 mr-2"
            placeholder="HN Number"
            onChange={(e) => handleChange(e)}
            maxLength="6"
            required
          />
          <span className="text-red-600 mr-12">*</span>

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
          <span className="text-red-600 mr-3">*</span>

          <input
            type="text"
            name="lastName"
            className="border border-black text-lg mr-2 pl-1"
            placeholder="นามสกุล"
            onChange={(e) => handleChange(e)}
            required
          />
          <span className="text-red-600 mr-3">*</span>
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
            maxLength="10"
            required
          />
          <span className="text-red-600 mr-3">*</span>

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
          <span className="text-red-600 mr-3">*</span>
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
        <button
          className="bg-gray-300 border rounded-lg p-2 m-2 flex justify-center items-center hover:bg-black hover:text-white"
          onClick={handleSubmit}
        >
          <IoAddCircle />
          Add
        </button>
      </div>
      </div>
    </section>
  );
};

export default UserAddForm;
