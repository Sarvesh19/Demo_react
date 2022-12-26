import React, { useEffect, useState, useRef } from "react";
import Component1 from "./component1";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 export const userDetailContext = React.createContext("");

export default function TextForm(props) {
  let inputElement
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    console.info(inputElement);
    
    setText(event.target.value);
    setUserDetail(event.target.value);
  };
  const [text, setText] = useState("");
  const [userDetails, setUserDetail] = useState("sarvesh");
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    // Runs ONCE after initial rendering
    console.info("textform..........");
  },[userDetails]);

  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      setPersons(persons);
    })
  },[])

 const  handleParent = (count ) =>{
    console.info(count)
  }

  return (
    <>
      <div className="container my-3" style = {{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>

        <ul>
        {
          persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID...</TableCell>
            <TableCell align="right">Name!!</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">WebSite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




        <userDetailContext.Provider value={userDetails}>
        <Component1 handleParent ={handleParent} test= "sarveshhhhhh"></Component1>

      
      </userDetailContext.Provider>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={ handleOnChange}
            style = {{backgroundColor:props.mode === 'dark' ? '#212121' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}}
            id="myBox"
            rows={10}
            value={text}
            ref={(input) => inputElement = input}
          />
          <br />
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-danger mx-2" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <div className="container" style = {{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length -1 } words and {text.length} characters
        </p>
        <p>{Math.ceil(0.008 * text.split(" ").length)} Minutes read</p>
        <br />
        <br />
        <h2>Preview</h2>
        <p>{text.length <= 0 ? "Enter something in the textbox above to preview here" : text}</p>
      </div>
    </>
  );
}
