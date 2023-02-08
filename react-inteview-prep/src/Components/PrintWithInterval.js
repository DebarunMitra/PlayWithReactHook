import { useEffect, useState } from "react";

function PrintWithInterval() {
    const [input, setInput] = useState("");
  const [words, setWords] = useState([]);
  const [display, setDisplay] = useState(0);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let collectWords = input.split(" ");
    if (collectWords.length <= 1) {
      //alert("Enter More Words...");
    } else {
      setWords(collectWords);
      setDisplay(1);
    }
  };

  useEffect(() => {
    if (input && words.length > display) {
      console.log(words);
      const timer = setTimeout(() => {
        setDisplay(() => display + 1);
        return () => clearInterval(timer);
      }, 1000);
    }
  }, [input, words, display]);

  return (
    <div>
        <div className="input-container">
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
            onSubmitHandler(e);
          }}
          value={input}
          placeholder="Enter Many Words..."
        />
      </div>
      <div
        className="display-container"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {words.slice(0, display).map((word) => (
          <p style={{ paddingRight: 4 }}>{word}</p>
        ))}
      </div>
    </div>
  )
}

export default PrintWithInterval