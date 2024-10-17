// import React from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// const Home = () => {
//     const rows=[{
//         Empid:1034,
//         Name:"Aswathy",
//         Dept:"Electronics",
//         Location:"tvm"
//     },
//     {
//         Empid:1036,
//         Name:"Akhila",
//         Dept:"Mechanics",
//         Location:"tvm "
//     },
//     {
//         Empid:1037,
//         Name:"Akshay",
//         Dept:"Electrical",
//         Location:"tvm" 
//     }
// ]
//   return (
//     <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//       <TableHead>
//         <TableRow>
//           <TableCell>Empid</TableCell>
//           <TableCell align="right">Name</TableCell>
//           <TableCell align="right">Dept&nbsp;(g)</TableCell>
//           <TableCell align="right">Location&nbsp;(g)</TableCell>
        
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow
//             key={row.name}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >
//             <TableCell component="th" scope="row">
//               {row.Empid}
//             </TableCell>
//             <TableCell align="right">{row.Name}</TableCell>
//             <TableCell align="right">{row.Dept}</TableCell>
//             <TableCell align="right">{row.Location}</TableCell>
        
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
//   )
// }

// export default Home
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//define data(array of object )
const employees = [
  { id: 1, name: 'John Doe', age: 28, department: 'Engineering', position: 'Software Engineer', salary: 75000 },
  { id: 2, name: 'Jane Smith', age: 34, department: 'Human Resources', position: 'HR Manager', salary: 68000 },
  { id: 3, name: 'Michael Johnson', age: 45, department: 'Finance', position: 'Chief Financial Officer', salary: 120000 },
  { id: 4, name: 'Emily Davis', age: 29, department: 'Marketing', position: 'Marketing Specialist', salary: 60000 },
  { id: 5, name: 'Robert Brown', age: 50, department: 'Operations', position: 'Operations Manager', salary: 90000 },
];
export const Home = () => {
  return (
    <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="employee table">
    <TableHead >
      <TableRow>
        <TableCell>Employee ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell align="right">Age</TableCell>
        <TableCell align="right">Department</TableCell>
        <TableCell align="right">Position</TableCell>
        {/* <TableCell align="right">Salary&nbsp;(USD)</TableCell> */}
      </TableRow>
    </TableHead>
    <TableBody>
      {employees.map((employee) => (
        <TableRow key={employee.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">{employee.id}</TableCell>
          <TableCell>{employee.name}</TableCell>
          <TableCell align="right">{employee.age}</TableCell>
          <TableCell align="right">{employee.department}</TableCell>
          <TableCell align="right">{employee.position}</TableCell>
          {/* <TableCell align="right">{employee.salary}</TableCell> */}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


  )
}
export default Home