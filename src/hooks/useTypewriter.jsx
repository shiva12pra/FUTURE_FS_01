import { useEffect, useState } from 'react';

function useTypewriter(words, speed = 120, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];
    const updateText = isDeleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    const timeout = setTimeout(() => {
      setText(updateText);

      if (!isDeleting && updateText === currentWord) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && updateText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

export default useTypewriter;
