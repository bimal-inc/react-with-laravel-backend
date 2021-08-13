import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Addprod() {

    const [name,setName] = useState("");

    // const [name,setName] = useState("");
    // const [name,setName] = useState("");
    // const [name,setName] = useState("");
    // const [name,setName] = useState("");

  return (
    <div>
      <Navbar />
      <br/>
      <div className="col-sm-4 offset-sm-3">
        <div className="form-group ">
          <label for="exampleInputname1">Enter Title</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputname1"
            aria-describedby="nameHelp"
            placeholder="Enter title"
          />
        </div>
        <br></br>
        <div className="form-group ">
          <label for="exampleInputname1">Enter Price</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputname1"
            aria-describedby="nameHelp"
            placeholder="Enter title"
          />
        </div>
        <br></br>

        <div class="mb-3">
        <label for="exampleInputname1">Choose file</label>
          <input
            type="file"
            class="form-control"
            name=""
            id=""
            placeholder=""
            aria-describedby="fileHelpId"
          />
          <small id="fileHelpId" class="form-text text-muted">
            Help text
          </small>
        </div>
        <br></br>
        <div class="form-floating">
        
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          ></textarea>
         
          <label for="floatingTextarea2">Enter Description</label>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Addprod;
