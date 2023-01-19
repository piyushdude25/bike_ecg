import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "./customers.css";
// function createData(
//   name: "sdf",
//   calories: "r",
//   fat: "number",
//   carbs: "number",
//   protein: "number"
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
// ];

export default function Customers() {
  const [customerData, setCustomerData] = React.useState([]);
  //   console.log("customerData:", customerData);
  const fetchCustomerData = () => {
    axios
      .get("http://localhost:5000/customers")

      .then((res) => setCustomerData(res.data))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchCustomerData();
  }, []);

  return (
    <div className="customerBox">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          {/* <caption>A basic table example with a caption</caption> */}
          <TableHead className="blue">
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.first_name} {row.last_name}
                </TableCell>
                <TableCell align="right">{row.billing.city}</TableCell>
                <TableCell align="right">{row.billing.address_1}</TableCell>
                <TableCell align="right">{row.billing.email}</TableCell>
                <TableCell align="right">{row.billing.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
