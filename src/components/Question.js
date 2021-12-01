import React from "react";
import "./Question.css";
import { Button } from "@material-ui/core";

function Question() {
  return (
    <div className="question">
      <div className="question__info">
        <h1> Have a question about hosting?</h1>

        <Button variant="outlined">Ask a Superhost</Button>
      </div>
    </div>
  );
}

export default Question;
