import './App.css'
import Button from './components/Button/Button'
import SetPomodoro from './components/SetPomodoro/SetPomodoro'
import Animation from './components/Animation/Animation'
import {  useContext } from 'react'
import { useEffect } from 'react'
import { SettingContext } from './Context/SettingContext'


const App = () =>  {

  const {
    pomodoro ,
    execution , 
    setCurrentTimer , 
    SettingBtn , 
    Children,
    startAnimate ,
    startTimer ,
    pauseTimer ,
    updateExecution ,
  } = useContext(SettingContext)

useEffect(() => { updateExecution (execution) ;} 
, [execution , startAnimate , updateExecution]  ) ;

  return <>
 
<div className='mx-auto w-full flex flex-col min-h-screen bg-bg bg-gradient-radial from-primary to-secondary text-text items-center justify-center'>
<h1 className='text-5xl font-bold mb-2 ' >Pomodoro</h1>
<small className="text-text mb-8">Be productive with your time</small>

{pomodoro !== 0 ? 

 <> 
 <ul className="list-none flex flex-row space-x-4 uppercase text-sm p-3 bg-secondary rounded-full text-text ">
<li>
  <Button
  title="Work"
  activeClass={execution.active === "Work" ? "active-label"  : undefined  }
  _callback={() => setCurrentTimer("Work")}
  
  />
</li>
<li>
  <Button
  title="Long Break"
  activeClass={execution.active === "Long Break" ? "active-label" : undefined  }
  _callback={() => setCurrentTimer("Long Break")}
  />
</li>
<li>
  <Button
  title="Short Break"
  activeClass={execution.active === "Short Break" ? "active-label" : undefined  }
  _callback={() => setCurrentTimer("Short Break")}
  />
</li>

 </ul>

 <Button title="Settings" _callback={SettingBtn} />
 <div className= "time-container" >
  <div className=" time-wrapper ">
    <Animation
   key={pomodoro}
    timer={pomodoro}
    animate={startAnimate}
    >
{Children}
    </Animation>

  </div>
 </div>
 <div className=' flex flex-row space-x-4 items-center justify-center p-8 '>
<Button title="Start" className={!startAnimate && "active"} _callback={startTimer} />
<Button title="pause" className={startAnimate && "active"} _callback={pauseTimer} />
 </div>
 </> : 
 <SetPomodoro />
  }
</div>
    </>
  
}

export default App





     
 