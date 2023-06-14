import logo from './logo.svg';
import './App.css';
import ReadAPIwithPagination from './Components/ReadAPIwithPagination';
import InfiniteScroll from './Components/InfiniteScrollImplementation/InfiniteScroll';
import PrintWithInterval from './Components/PrintWithInterval';
import MainCounter from './Components/Counter/MainCounter';
import TodoListApp from './Components/TodoListApp';
import HorizontalScrollCard from './Components/HorizontalScrollCard';
import Timer from './Components/CountdownTimer/Timer';

function App() {
  return (
    <div className='Main'>
      <h1>Hello Friends...</h1>
      <h2>Welcome To The Interview Prep Session. Let's start some magic!</h2>
      {/* <ReadAPIwithPagination /> */}
      {/* <InfiniteScroll /> */}
      {/* <PrintWithInterval /> */}
      {/* <MainCounter /> */}
      {/* <TodoListApp /> */}
      {/* <HorizontalScrollCard /> */}
      <Timer duration={2 * 24 * 60 * 60 * 1000} />
    </div>
  );
}

export default App;
