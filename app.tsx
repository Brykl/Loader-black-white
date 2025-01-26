
import './App.css'
import { easeInOut, motion } from "framer-motion";

function App() {


  return (
    <>
      <div className='back_ground'>

      <motion.div 
       animate={{ rotate: [0, 360,360, 0,0, 360, 360], scale: [1.5, 1.5, 1, 1, 1, 1.5, 1.5, 1.5]}}
       initial={{rotate: 360, scale: 1.5 }}
       transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: easeInOut,
        times: [0.3, 0.05, 1, 0.05, 0,3, 0.05, 1, 0.05]
       }}
      className='arc1'>
      </motion.div>
      <motion.div 
       animate={{ rotate: [0, 360,360, 0,0, 360, 360], scale: [1.5, 1.5, 1, 1, 1, 1.5, 1.5, 1.5]}}
       initial={{rotate: 360, scale: 1.5}}
       transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: easeInOut,
        times: [0.3, 0.05, 1, 0.05, 0,3, 0.05, 1, 0.05]
       }}
      className='arc2'>
      </motion.div>

      <motion.div 
       animate={{ rotate: [360, 0,0, 360,360, 0, 0], scale: [1, 1, 1.5, 1.5, 1.5, 1, 1, 1]}}
       initial={{rotate: 360, scale: 1}}
       transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: "mirror",
        ease: easeInOut,
        times: [0.3, 0.05, 1, 0.05, 0,3, 0.05, 1, 0.05]
       }}
      className='arc3'>
      </motion.div>
      <motion.div 
       animate={{ rotate: [360, 0,0, 360,360, 0, 0], scale: [1, 1, 1.5, 1.5, 1.5, 1, 1, 1] }}
       initial={{rotate: 360, scale: 1}}
       transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: "mirror", 
        ease: easeInOut,
        times: [0.3, 0.05, 1, 0.05, 0,3, 0.05, 1, 0.05]
       }}
      className='arc4'>
      </motion.div>

      </div>
    </>
  )
}

export default App
