import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import functions
import { read, update, remove } from "../Functions/Users";
import { IoArrowBackCircle } from "react-icons/io5";
import { RiSave3Fill, RiDeleteBin5Fill } from "react-icons/ri";

const UserEdit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    number: "",
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
  });

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (id) => {
    read(id).then((res) => {
      setData(res.data);
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    // do not refresh
    e.preventDefault();
    // check input
  if (
    data.firstName.trim() === "" ||
    data.lastName.trim() === "" ||
    data.tel.trim() === "" ||
    data.email.trim() === ""
  ) {
    alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    return;
  }
    update(params.id,data)
      .then((res) => {
        navigate('/')
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          alert(err.response.data);
        } else {
          console.error("create user >>", err);
        }
      })
  };

  const handleRemove = async () => {
    const confirmRemove = window.confirm("คุณแน่ใจหรือไม่ที่จะลบข้อมูลนี้?");
    if (confirmRemove) {
      remove(params.id)
        .then((res) => {
          // console.log(res)
          loadData(params.id);
          navigate("/");
        })
        .catch((err) => console.log("remove user >>", err));
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mt-12 mb-6 bg-green-800 px-6 p-1 text-xl text-white border rounded-lg">
        Edit User
      </div>
      <form className="w-[90%] xl:w-[70%] bg-gray-200 border rounded-lg border-green-800 p-4">
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
            className="text-lg bg-gray-200 "
            placeholder="HN Number"
            onChange={(e) => handleChange(e)}
            value={data.number}
            readOnly
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
            value={data.firstName}
            required
          />
          <span className="text-red-600 mr-3">*</span>

          <input
            type="text"
            name="lastName"
            className="border border-black text-lg mr-2 pl-1"
            placeholder="นามสกุล"
            onChange={(e) => handleChange(e)}
            value={data.lastName}
            required
          />
          <span className="text-red-600">*</span>
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
            value={data.tel}
            required
            maxLength="10"
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
            value={data.email}
            required
          />
          <span className="text-red-600">*</span>
        </div>

        <br />
      </form>
      <div className="flex justify-center items-center mt-6">
        <button>
          <Link
            to={"/"}
            className="bg-gray-300 border rounded-lg p-2 m-2 flex justify-center items-center hover:bg-black hover:text-white"
          >
            <IoArrowBackCircle />
            cancel
          </Link>
        </button>

        <Link
          to={"/addUser"}
          className="bg-gray-300 border rounded-lg p-2 m-2 flex justify-center items-center hover:bg-black hover:text-white"
        >
          <RiSave3Fill /> <button>Add</button>
        </Link>

        <button
          className="bg-gray-300 border rounded-lg p-2 m-2 flex justify-center items-center hover:bg-black hover:text-white"
          onClick={handleSave}
        >
          <RiSave3Fill />
          Save
        </button>
        <button
          className="bg-gray-300 border rounded-lg p-2 m-2 flex justify-center items-center hover:bg-black hover:text-white"
          onClick={handleRemove}
        >
          <RiDeleteBin5Fill />
          Delete
        </button>
      </div>
    </section>
  );
};

export default UserEdit;
