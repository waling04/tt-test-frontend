import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { list } from "../Functions/Users";
import { BiSolidEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "operation",
    headerName: "Operation",
    width: 150,
    renderCell: (params) => (
      <Link to={"/edit/" + params.row._id} className="text-2xl text-center">
        <BiSolidEdit />
      </Link>
    ),
  },
  { field: "number", headerName: "HN เจ้าของ", width: 150 },
  {
    field: "fullName",
    headerName: "ชื่อเจ้าของ",
    width: 200,
    valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`,
  },
  { field: "tel", headerName: "เบอร์ติดต่อ", width: 150 },
  { field: "email", headerName: "อีเมล", type: "email", width: 200 },
];

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    list()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getRowId = (row) => row._id;

  return (
    <main className="mt-20">
      <h1 className="text-center w-[45%] text-xl">ค้นหาเจ้าของ</h1>
      <div className="flex flex-col justify-center items-center">
      <div style={{ height: 500, width: "65%" }} className="border-t-8 border-green-700 pt-4">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15, 20]}
          autoPageSize={false}
          getRowId={getRowId}
        />
      </div>
      </div>
    </main>
  );
};

export default DataTable;
