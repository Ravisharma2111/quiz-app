import {useState ,useEffect} from "react"

const Timer = ({setStop,currentQuestion, handletime, currData, setCurrData}) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000); 
    return () => clearInterval(interval);
  }, [timer, setStop]);
 
  if(!currData){
    handletime(timer)
    setCurrData(true)
  }

  useEffect(() => {
    setTimer(15);
  }, [currentQuestion,setTimer]);
  
  return timer;
};


export default Timer;