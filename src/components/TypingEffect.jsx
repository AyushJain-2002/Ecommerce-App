import { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypingEffect() {
  const typedElement = useRef(null);   // reference to span element
  const typedInstance = useRef(null);  // reference to typed.js instance

  useEffect(() => {
    // Create typed instance
    typedInstance.current = new Typed(typedElement.current, {
      strings: [
        "frontend development",
        "backend development",
        "web development",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    // Cleanup on component unmount
    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <h2 className="text-2xl font-bold">
      I am into <span ref={typedElement} ></span>
    </h2>
  );
}

export default TypingEffect;
