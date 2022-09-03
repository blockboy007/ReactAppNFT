import React, { useState, useEffect, initialState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";


const GetForm = (props) => {
      const [state, setState] = useState([]);
      const [name, setName] = useState([]);
      const [policy, setPolicy] = useState([]);
      return (
        <div>
          <p> hello {state} </p>
          // <h1> {state.policy_id} </h1>
          <p> Hello World! </p>
        </div>
      )
    }

    export default GetForm;
