import { useState, useEffect } from "react";

export default function Typewriter() {
  const textToType = " Full-Stack Developer";
  const typingSpeed = 100;
  const erasingSpeed = 30;
  const pauseTime = 1500;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isErasing && index < textToType.length) {
      // Typing
      timeout = setTimeout(() => {
        setText((prev) => prev + textToType.charAt(index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!isErasing && index === textToType.length) {
      // Pause before erasing
      timeout = setTimeout(() => setIsErasing(true), pauseTime);
    } else if (isErasing && text.length > 0) {
      // Erasing
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, erasingSpeed);
    } else if (isErasing && text.length === 0) {
      // Restart typing
      setIsErasing(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [text, index, isErasing]);

  return <span id="typewriter-text">{text}</span>;
}