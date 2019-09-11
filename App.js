import React from 'react';
import readXlsxFile from 'read-excel-file';
import './App.css';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
 


handleChange=()=>{
  console.log("hi");
  readXlsxFile(this.myRef.current.files[0]).then((rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
    console.log("hi");
    console.log(rows);
    console.log(rows[0][0]);
    console.log(rows[1][0]);
    
  })
}

render(){
  
  return (
    <div className="App">
    <input type="file" ref={this.myRef} id="input" onChange={this.handleChange}></input>
    </div>
  );
}
}

export default App;
