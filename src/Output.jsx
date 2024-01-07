import React from 'react'
import { motion } from 'framer-motion';
 
function Output(props) {
  return (
    
    <motion.div
    initial={{ scale: -2 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 150,
      damping: 5
    }} 
    className="Output text-[16px] w-auto p-2 bg-zinc-700 max-w-[285px] hover:bg-red-900 text-slate-200 rounded-md gap-2"
    onClick = {() => props.delete(props.id)}
    >
      {props.name}
    </motion.div>
    

    
  )
}

export default Output