import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Project.css";
import { questions } from "./File.js";
import Timer from "./Timer";

function App() {
  const [arr, setArr] = useState([]);
  const [selected, setSelected] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [ash, setAsh] = useState(false);
  const [stop, setStop] = useState(false);
  //   const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [myClick, setMyClick] = useState([0]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [button, setButton] = useState(true);
  const [timer, setTimer] = useState([]);
  //   console.log("arr", setArr);
  //   console.log("stop", stop);
  useEffect(() => {
    setInterval(() => {
      handleButtonSkip();
    }, 15000);
  }, [currentQuestion]);

  const handleButtonNext = (e) => {
    e.preventDefault();
    if (selected === "") {
      return;
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
    setAsh(false);
  };

  const handleButtonSkip = () => {
    // e.preventDefault();
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
    setAsh(false);
  };

  const optionClicked = (qwe, id) => {
    setMyClick([id]);
    setButton(false);
    console.log("hiii", qwe);
    setTimer([...timer, qwe]);

    if (qwe.isCorrect) {
      setIsCorrect(qwe.isCorrect);
      setArr(qwe);
      setScore(score + 4);
      setButton(false);
    } else {
      setScore(score - 2);
    }
    setAsh(true);
    // return qwe;
    // setButton(false);
  };

  const handleTextChange = (e) => {
    setSelected(e.target.value);
  };
  // console.log("rrrrrrrrrrr", timer)
  return (
    // <NetworkBandwidth>/
    <Card
      className=" Happy example-square  shadow-1-strong"
      style={{ textAlign: "center", color: "#000000" }}
    >
      <h3
        style={{
          textAlign: "center",
          color: "black",
          backgroundColor: "darkgoldenrod",
        }}
      >
        {" "}
        Score: {score}{" "}
      </h3>
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1
            style={{
              color: "black",
              backgroundColor: "darkgoldenrod",
            }}
          >
            {questions.map((ques, idi) => {
              return (
                <div style={{ fontSize: "25px" }}>
                  <Container>
                    <Row key={idi}>
                      <Col>{ques.question}</Col>
                    </Row>
                  </Container>
                  <div>
                    {ques.options.map((el, ide) => {
                      return (
                        <div key={ide}>
                          <h3 style={{backgroundColor:"lightcoral"}} > {el.isCorrect ? el.text : ""} </h3>
                          </div>
                      );
                      }
                    )}
                  </div>
                </div>
              );
            })}
            <hr/> 
            {
              timer.map((em,idw) => {
                  return(
                      <div>
                      
                <h2 style={{backgroundColor:"grey"}} >  {idw} You Selected: {em.text} </h2> 
                      </div>
                  )
              })
          }
          </h1>
          <div>
            <h1
              style={{
                color: "black",
                backgroundColor: "darkgoldenrod",
                padding: "20px",
                margin: "20px",
              }}
            >
              {" "}
              Your Score Is :{score}{" "}
            </h1>
          </div>
          {/* <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
            </h2>
            */}
        </div>
      ) : (
        <div>
          <h3
            style={{
              textAlign: "center",
              color: "black",
              backgroundColor: "darkgoldenrod",
            }}
          >
            <Timer setStop={setStop} currentQuestion={currentQuestion}></Timer>
          </h3>
          <Card.Title style={{ fontSize: "45px" }}>
            {" "}
            {questions[currentQuestion].question}{" "}
          </Card.Title>

          <ul className="answer-section-wrapper">
            {questions[currentQuestion].options.map((option, idf) => {
              return (
                <div
                  style={{ padding: "5px" }}
                  className=" answer-list  d-flex justify-content-center"
                  key={idf}
                >
                  <Card
                    style={{
                      height: "3rem",
                      textAlign: "center",
                      width: "10rem",
                      fontSize: "20px",
                      backgroundColor: "lightgrey",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor:
                          myClick.includes(questions[currentQuestion].id) &&
                          option.isCorrect
                            ? "green"
                            : myClick.includes(questions[currentQuestion].id) &
                              !option.isCorrect
                            ? "red"
                            : "white",
                      }}
                    >
                      <input
                        disabled={ash ? true : false}
                        onChange={(e) => handleTextChange(e)}
                        checked=""
                        type="radio"
                        name="Ques"
                        // key={option.id}
                        // id={option.id}
                        // value={option.id}
                        onClick={() =>
                          optionClicked(option, questions[currentQuestion].id)
                        }
                      />
                  {console.log('first', option )}
                      <span style={{ textAlign: "center" }}>{option.text}</span>
                    </div>
                  </Card>
                </div>
              );
            })}
          </ul>
          {console.log("jjiji",currentQuestion)}
          {button && <h3 style={{ color: "red" }}> </h3>}
          <button
            className="next-button"
            disabled={button}
            onClick={(e) => handleButtonNext(e)}
          >
            {" "}
            Next{" "}
          </button>

          <button
            className="skip-button"
            onClick={(e) => handleButtonSkip(e)}
          >
            {" "}
            Skip{" "}
          </button>
        </div>
      )}
    </Card>
    // </NetworkBandwidth>
  );
}

export default App;
