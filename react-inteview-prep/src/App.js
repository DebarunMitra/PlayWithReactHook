import logo from './logo.svg';
import './App.css';
import ReadAPIwithPagination from './Components/ReadAPIwithPagination';
import InfiniteScroll from './Components/InfiniteScrollImplementation/InfiniteScroll';
import PrintWithInterval from './Components/PrintWithInterval';
import MainCounter from './Components/Counter/MainCounter';
import TodoListApp from './Components/TodoListApp';
import HorizontalScrollCard from './Components/HorizontalScrollCard';
import Timer from './Components/CountdownTimer/Timer';
import MainComponent from './Components/LifeCycleMethod/ClassLevel/MainComponent';
import PortalDemo from './Components/ReactPortal/PortalDemo';
import Person from './Components/ErrorBoundaries/Person';
import ErrorBoundary from './Components/ErrorBoundaries/ErrorBoundary';
import BoxColorDecolor from './Components/BoxColorDecolor/BoxColorDecolor';
import TicTacToeMain from './Components/TicTacToeGame/TicTacToeMain';
import CodeSplittingMain from './Components/CodeSplitting/CodeSplittingMain';
import DebouncingMain from './Components/Debouncing/DebouncingMain';
import ContextHookMain from './Components/ContextHookManagement/ContextHookMain';
import CustomForm from './Components/CustomFormValidation/CustomForm';

function App() {
  // localStorage.setItem("testing-bool", JSON.stringify(true));
  // localStorage.setItem("testing", 100);
  
  return (
    <div className='Main'>
      <h1>Hello Friends...</h1>
      <h2>Welcome To The Interview Prep Session. Let's start some magic!</h2>
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Person personName={'Joker'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Person personName={'Bruce Wane'} /> 
      </ErrorBoundary>
      <ErrorBoundary>
        <Person personName={'Clint Clark'} /> 
      </ErrorBoundary> */}
      {/* <MainComponent /> */}
      {/* <ReadAPIwithPagination /> */}
      {/* <InfiniteScroll /> */}
      {/* <PrintWithInterval /> */}
      {/* <MainCounter /> */}
      {/* <TodoListApp /> */}
      {/* <HorizontalScrollCard /> */}
      {/* <Timer duration={2 * 24 * 60 * 60 * 1000} /> */}
      {/* <BoxColorDecolor /> */}
      {/* <TicTacToeMain /> */}
       {/* <CodeSplittingMain /> */}
       {/* <DebouncingMain /> */}
       {/* <ContextHookMain /> */}
       <CustomForm />
    </div>
  );
}

export default App;
