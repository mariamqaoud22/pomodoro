import { createContext, useState } from 'react'
import PropTypes from 'prop-types';

export const SettingContext = createContext()
function SettingContextProvider(props) {
  
  const [pomodoro , setPomodoro] = useState(0)
  const [execution , setExecution] = useState({})
  const [startAnimate , setStartAnimate] = useState(false)
   
  function setCurrentTimer(active_state) {
    updateExecution ({
      ...execution ,
      active: active_state
  }  )
  setTimeTime(execution)
}
 
  function startTimer() {
    setStartAnimate(true)
  }

  function pauseTimer() {
    setStartAnimate(false)
    
  }
 
    const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    return `${minutes}:${seconds}`
  }
  
  const SettingBtn = () => {
    setExecution({})
    setPomodoro(0)
  }
  
  const updateExecution = updatedSettings => {
    setExecution(updatedSettings);
    setTimeTime(updatedSettings);
  };

  

  
const setTimeTime = evalute => {
  switch(evalute.active){
    case "Work":
      setPomodoro(evalute.Work )
      break
    case "Short Break":
      setPomodoro(evalute.ShortBreak )
      break
    case "Long Break":
      setPomodoro(evalute.LongBreak )
      break
    default:
      setPomodoro(0)    
      break
  }
  }



  function stopAnimate() {
    setStartAnimate(false)
  }

  return <>
  <SettingContext.Provider
   value={{
     pomodoro ,
     execution ,
     updateExecution ,
     startAnimate ,
     startTimer ,
     pauseTimer ,
     children ,
     SettingBtn ,
     setCurrentTimer ,
    stopAnimate  , 

    }}>
      {props.children}
  </SettingContext.Provider>
  </>
}



SettingContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };
export default SettingContextProvider