import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Intro = ({ setIntro }) => {
  const arr = [
    "Hello", "नमस्ते", "Hola", "Bonjour",
    "Ciao", "Olá", "Здравствуйте",
    "Merhaba", "Γειά", "Hej", "Hallo", "Salam"
  ];

  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    let timer;

    if (index < arr.length) {
      timer = setTimeout(() => 
      setIndex(prev => prev + 1), 200);
    }

    else if(index == arr.length){

        setTimeout(() => setIntro(true),500);
    }
   
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div>
    
      {index < arr.length ? (
        <div className="fixed inset-0 bg-black flex justify-center items-center text-white font-semibold text-7xl">
          {arr[index]}
        </div>
      )
    
      : (
        <AnimatePresence >
        
            <motion.div
              key="last-word" // unique key so only this triggers exit
              initial={{ opacity: 0, y: 0}}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 5, ease:"easeInOut"}}
              className="fixed inset-0 bg-black flex justify-center items-center text-white font-semibold text-3xl"
            >
            </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Intro;
