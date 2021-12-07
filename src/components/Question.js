import React from "react";
import "./Question.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Question() {
  const history = useHistory();

  return (
    <div className="question ">
      <div className="question__info">
        <h1> Have a question about hosting?</h1>

        <Button onClick={() => history.push("/message")} variant="outlined">
          Ask a Superhost
        </Button>
      </div>
    </div>
  );
}

export default Question;
