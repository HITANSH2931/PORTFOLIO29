import { useEffect, useState } from "react";

function TypeWriter() {
  const text = "Java Full Stack Developer";
  const [display, setDisplay] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {

    let timer;
    if (i < text.length) {
       timer = setTimeout(() => {
        setDisplay((prev) => prev + text[i]);
        setI(i + 1);
      }, 150); // typing speed

    }
    else {
      // when full text is typed, restart after delay
      timer = setTimeout(() => {
        setDisplay("");
        setI(0);
      }, 150);
    }

      return () => clearTimeout(timer);
    
  }, [i]);

  return (
    <div className="text-4xl font-semibold text-white ">
      {display}
      <span className="animate-pulse">|</span>
    </div>
  );
}

export default TypeWriter;
