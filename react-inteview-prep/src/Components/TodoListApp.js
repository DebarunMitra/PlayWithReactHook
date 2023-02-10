import { useState } from "react";
import './Styles/ReadAPIwithPagination.css';

function TodoListApp() {
    const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([
    {
      item: "Apple"
    },
    {
      item: "Banana"
    }
  ]);

  const handleAddItem = () => {
    if (input.length > 0) {
      setTodoList((prevTodoList) => [...prevTodoList, { item: input }]);
      setInput("");
    }
  };

  const handleDeleteItem = (item) => {
    setTodoList(todoList.filter((data) => data.item != item));
  };

  return (
    <div className='App'>
        <div className="input-container">
        <input
          type="text"
          value={input}
          placeholder="Add Item"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={() => handleAddItem()}>
          Add
        </button>
      </div>
      <div className="item-container">
        {todoList.length == 0 ? (
          <p>No Item To Show!</p>
        ) : (
          todoList.map((data) => (
            <p>
              <span>{data.item}</span>&nbsp;&nbsp;&nbsp;
              <button type="button" onClick={() => handleDeleteItem(data.item)}>
                ❌
              </button>
            </p>
          ))
        )}
      </div>
    </div>
  )
}

export default TodoListApp;
