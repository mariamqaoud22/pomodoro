import { useContext, useState } from "react"
import { SettingContext } from "../../Context/SettingContext"

const SetPomodoro =() => {
 const[newTimar , setNewTimar] = useState({
  Work: 25,
  ShortBreak: 5,
  LongBreak: 15,
  active : "Work",
})
const {updateExecution} = useContext(SettingContext)
const handleChange = (e) => {
  const {name , value} = e.target 
  switch(name){
    case "Work":
      setNewTimar({...newTimar , Work : parseInt(value)})
      break
    case "Short Break":
      setNewTimar({...newTimar , ShortBreak : parseInt(value)})
      break
    case "Long Break":
      setNewTimar({...newTimar , LongBreak : parseInt(value)})
      break
    }
}
const handleSubmit =  e  => { 
  e.preventDefault()  
  updateExecution(newTimar)   
}
  return <>
<div className="max-w-md mx-auto p-6 bg-secondary text-text rounded-lg shadow-lg text-center">
    <form  noValidate onSubmit={handleSubmit}>
    <div className="flex justify-center space-x-4 mb-6">
<input className="w-16 h-16 bg-primary rounded-full text-center text-xl font-semibold text-text" name="Work"  onChange={handleChange} value={newTimar.Work}  />
<input className="w-16 h-16 bg-primary rounded-full text-center text-xl font-semibold text-text" name="Short Break"  onChange={handleChange} value={newTimar.ShortBreak}  />
<input className="w-16 h-16 bg-primary rounded-full text-center text-xl font-semibold text-text" name="Long Break"  onChange={handleChange} value={newTimar.LongBreak}  />
</div>
<button type="submit" > Set Timer</button>
    </form>
    </div>    
    </>
  
}



export default SetPomodoro