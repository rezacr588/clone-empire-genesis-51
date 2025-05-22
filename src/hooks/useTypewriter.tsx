import { useState, useEffect } from 'react';

/**
 * A custom hook that creates a typewriter effect for text
 * 
 * @param textOptions - Array of strings to cycle through with the typewriter effect
 * @param typingSpeed - Speed of typing in milliseconds (default: 80)
 * @param deletingSpeed - Speed of deleting in milliseconds (default: 50)
 * @param delayAfterType - Delay after typing completes in milliseconds (default: 1500)
 * @param delayAfterDelete - Delay after deletion completes in milliseconds (default: 500)
 * 
 * @returns An object containing the current animated text and status information
 */
export function useTypewriter(
  textOptions: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  delayAfterType = 1500,
  delayAfterDelete = 500
) {
  const [animatedText, setAnimatedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [typePosition, setTypePosition] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = textOptions[textIndex];

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        // Typing effect
        setAnimatedText(fullText.substring(0, typePosition + 1));
        setTypePosition(typePosition + 1);
        
        // Check if done typing - ensure we reach the end of the string
        if (typePosition >= fullText.length - 1) {
          setIsDeleting(true);
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsDeleting(true);
          }, delayAfterType);
        }
      } else {
        // Deleting effect
        setAnimatedText(fullText.substring(0, typePosition - 1));
        setTypePosition(typePosition - 1);
        
        // Check if done deleting
        if (typePosition <= 1) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % textOptions.length);
          clearInterval(typeInterval);
          setTimeout(() => {
            setTypePosition(0);
          }, delayAfterDelete);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearInterval(typeInterval);
  }, [
    fullText, 
    textOptions, 
    typePosition, 
    isDeleting, 
    textIndex, 
    typingSpeed, 
    deletingSpeed, 
    delayAfterType, 
    delayAfterDelete
  ]);

  return {
    animatedText,
    isDeleting,
    currentTextIndex: textIndex,
    isDone: typePosition >= fullText.length && !isDeleting
  };
}

export default useTypewriter; 