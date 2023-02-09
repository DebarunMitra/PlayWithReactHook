import { useEffect, useState } from "react";
import './Styles/ReadAPIwithPagination.css';

function PrintWithInterval() {
    const [input, setInput] = useState("");
  const [words, setWords] = useState([]);
  const [display, setDisplay] = useState(0);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let collectWords = input.split(" ");
    console.log(collectWords);
    if (collectWords.length <= 1) {
      //alert("Enter More Words...");
    } else {
      setWords(collectWords);
      setDisplay(1);
    }
  };

  useEffect(() => {
    //console.log("use Effect called...");
    if (input && words.length > display) {
      // console.log(words);
      const timer = setTimeout(() => {
        setDisplay(() => display + 1);
        return () => clearInterval(timer);
      }, 1000);
    }
  }, [display, words.length]);

  return (
    <div className='App'>
        <div className="input-container">
          <form onChange={(e)=>onSubmitHandler(e)}>
          <input
          type="text"
          onChange={(e) => {
            setInput(()=>e.target.value);
          }}
          value={input}
          placeholder="Enter Many Words..."
        />
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
      <div
        className="display-container"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'center' }}
      >
        {words.slice(0, display).map((word, index) => (
          <p key={`key-${index}`}style={{ paddingRight: 4 }}>{word}</p>
        ))}
      </div>
    </div>
  )
}

export default PrintWithInterval