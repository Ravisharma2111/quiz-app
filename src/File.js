export const questions = [
    { 
      id:1,
      question: "1 .Where Are You From ?",
      options: [
        { id:0    , text: "Bhopal", isCorrect: true },
        { id:1    , text: "Mumbai", isCorrect: false },
        { id:2    , text: "Banglore", isCorrect: false },
        { id:3    , text: "Gurgaon", isCorrect: false },
      ],
      "score":4,
      "negative" : -2,
    },
    {
      id:2,
      question: "2 . Past you Stayed In Which City?",
      options: [
        { id:0    , text: "Manglore", isCorrect: false },
        { id:1    , text: "Kolkata ", isCorrect: false },
        { id:2    , text:  "Banglore", isCorrect: false },
        { id:3    , text: " delhi", isCorrect: false },
        { id:4    , text: "Gurgaon", isCorrect: true },

      ],
      "score":4,
      "negative" : -2,
    },
    {
      id:3,
      question: "3 .Which City You Can't Visit?",
      options: [
        { id:0    , text: "Gurgaon", isCorrect: false },
        { id:1    , text: "Mumbai", isCorrect: true },
        { id:2    , text: " Delhi ", isCorrect: false },
        { id:3    , text: "Jaipur", isCorrect: false },
        { id:4    , text: "HYD", isCorrect: false },
        { id:5    , text: " Lucknow ", isCorrect: false },
      ],
      "score":4,
      "negative" : -2,
    },
    {
      id:4,
      question: "4 .Where Are You  ",
      options: [
        { id:0    , text: "Manglore", isCorrect: false },
        { id:1    , text: " Jaipur ", isCorrect: true },
        { id:2    , text: "Banglore", isCorrect: false },
        { id:3    , text: "Mumbai", isCorrect: false },
      ],
      "score":4,
      "negative" : -2,
    },
    {
      id:5,
      question: "5 .Where Are You Going ?",
      options: [
        { id:0    , text: " Banglore ", isCorrect: false },
        { id:1    , text: "Mumbai", isCorrect: false },
        { id:2    , text: "Manglore", isCorrect: false },
        { id:3    , text: "UK", isCorrect: true },
      ],
      "score":4,
      "negative" : -2,
    },
  ];

//   import React, { useState, useEffect } from "react";
// import { ListGroup } from "react-bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Card } from "react-bootstrap";
// import "./Project.css";
// import { questions } from "./File.js";
// import QuizApp from "./QuizApp";
// import Timer from "./Timer";

// // import { textAlign } from "@mui/system";

// function App() {
//   const [arr, setArr] = useState([]);
//   // const [clicked, setClicked] = useState(false);
//   const [selected, setSelected] = useState("");
//   const [error, setError] = useState("");
//   const [showResults, setShowResults] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [ash, setAsh] = useState(false);
//   const [Stop, setStop] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(null);
//   // const[count, setCount] = useState(0)
//   const [bgClr, setBgClr] = useState("white");
//   const [selectedAnswer, setSelectedAnswer] = useState([0]);

//   // const tick = () => {
//   //   setCount(count + 1)
//   // }

//   // let interval
//   // useEffect(() => {
//   //   interval = setInterval(tick, 1000)
//   //   return ()=> {
//   //       clearInterval(interval)
//   //   }
//   // }, [count])

//   const handleButtonNext = (e) => {
//     e.preventDefault();
//     if (selected === "") {
//       return setError("Please Select One Option");
//     }
//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResults(true);
//     }
//     setAsh(false);

//     // clearInterval(interval);
//   };

//   const handleButtonSkip = () => {
//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResults(true);
//     }
//   };
//   const optionClicked = (qwe, id) => {
//     setSelectedAnswer([...selectedAnswer, id]);
//     console.log("id", id);
//     if (qwe.isCorrect) {
//       setIsCorrect(qwe.isCorrect);

//       setArr(qwe);
//       setScore(score + 4);
//     }
//     setAsh(true);
//   };
//   const handleTextChange = (e) => {
//     setSelected(e.target.value);
//     if (error) {
//       setError("");
//     }
//   };
  // const poi = (data) => {
  //   console.log("this",data)
  //   setIsCorrect(data.isCorrect)
  //   optionClicked(data);
  // };

//   return (
//     <Card
//       className=" Happy example-square  shadow-1-strong"
//       style={{ textAlign: "center", color: "##000000" }}
//     >
//       <h3
//         style={{
//           textAlign: "center",
//           color: "black",
//           backgroundColor: "darkgoldenrod",
//         }}
//       >
//         {" "}
//         Score: {score}{" "}
//       </h3>
//       {showResults ? (
//         /* 4. Final Results */
//         <div className="final-results">
//           <h1
//             style={{
//               color: "black",
//               backgroundColor: "darkgoldenrod",
//               padding: "20px",
//               margin: "200px",
//             }}
//           >
//             {" "}
//             Thanks You{" "}
//           </h1>
//           <div>
//             <h1
//               style={{
//                 color: "black",
//                 backgroundColor: "darkgoldenrod",
//                 padding: "20px",
//                 margin: "200px",
//               }}
//             >
//               {" "}
//               Your Score Is :{score}{" "}
//             </h1>
//           </div>
//           {/* <h1>Final Results</h1>
//           <h2>
//             {score} out of {questions.length} correct - (
//             {(score / questions.length) * 100}%)
//             </h2>*/}
//         </div>
//       ) : (
//         <div>
//           <h3
//             style={{
//               textAlign: "center",
//               color: "black",
//               backgroundColor: "darkgoldenrod",
//             }}
//           >
//             <Timer setStop={setStop} currentQuestion={currentQuestion} />{" "}
//           </h3>
//           <Card.Title style={{ fontSize: "35px" }}>
//             {" "}
//             {questions[currentQuestion].question}
//           </Card.Title>

//           <ul className="answer-section-wrapper">
//             {questions[currentQuestion].options.map((option) => {
//               return (
//                 <div>
//                   <div
//                     style={{ padding: "5px" }}
//                     className=" answer-list  d-flex justify-content-center"
//                   >
//                     <Card
//                       style={{
//                         height: "3rem",
//                         textAlign: "center",
//                         width: "10rem",
//                         fontSize: "20px",
//                         backgroundColor: "lightgrey",
//                       }}
//                     >
//                       <div
//                         style={{
//                           backgroundColor:
//                             selectedAnswer.includes(
//                               questions[currentQuestion].id
//                             ) && option.isCorrect
//                               ? "green"
//                               : selectedAnswer.includes(
//                                   questions[currentQuestion].id
//                                 ) && option.isCorrect == false
//                               ? "red"
//                               : "white",
//                         }}
//                       >
//                         <input
//                           disabled={ash ? true : false}
//                           onChange={(e) => handleTextChange(e)}
//                           type="radio"
//                           name="Ques"
//                           key={option.id}
//                           onClick={() =>
//                             optionClicked(option, questions[currentQuestion].id)
//                           }
//                           // style={{ backgroundColor: 'red' }}
//                         />
//                         <span>{option.text}</span>
//                       </div>
//                     </Card>
//                   </div>
//                 </div>
//                 // <QuizApp
//                 // onSele
//                 // currentQuestion={currentQuestion}
//                 //   handleTextChange={handleTextChange}
//                 //   optionClicked={optionClicked}
//                 //   ash={ash}
//                 //   option={option}
//                 // />
//               );
//             })}
//           </ul>
//           {error && <h3 style={{ color: "red" }}>{error}</h3>}
//           <button className="next-button" onClick={(e) => handleButtonNext(e)}>
//             {" "}
//             Next{" "}
//           </button>

//           <button
//             onClick={() => handleButtonSkip()}
//             style={{ backgroundColor: "red" }}
//           >
//             {" "}
//             Skip{" "}
//           </button>
//         </div>
//       )}
//     </Card>
//   );
// }

// export default App;
