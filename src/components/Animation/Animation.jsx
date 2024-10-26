import { useContext } from 'react'
import { CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingContext } from '../../Context/SettingContext'
import PropTypes from 'prop-types'
const  Animation = ({    timer , animate  , children  }) => {
 const{stopAnimate} = useContext(SettingContext)

 return <>
<CountdownCircleTimer
isPlaying={animate}
duration={timer * 60}
colors={[
 "#004777",25,
 "#FFCC01", 50,
  "#A30000", 25,

]}
strokeWidth={6}
size={220}
trailColor='bg-text'
onComplete={() =>{
stopAnimate()
}} 
>
{children}
</CountdownCircleTimer>
</>
  
}
  
Animation.propTypes = {
  timer: PropTypes.number.isRequired,
  animate: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
export default Animation        
        