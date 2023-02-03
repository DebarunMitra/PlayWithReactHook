import { useEffect, useState, useRef, useCallback } from 'react'
import useBookSearch from './useBookSearchHook'

function InfiniteScroll() {
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const {
        loading, 
        error, 
        books, 
        hasMore
    } = useBookSearch(query, pageNumber);

    const observer = useRef();
    const lastBook = useCallback((node)=>{
        if(loading){
            return;
        }
        if(observer.current){
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting && hasMore){
                console.log("Visible");
                setPageNumber(prevPageNumber=>prevPageNumber+1)
            }
        })
        if(node){
            observer.current.observe(node);
        }
    }, [loading, hasMore])

    function hnndleSearch(e){
        setQuery(e.target.value);
        setPageNumber(1);
    }


  return (
    <div className='App'>
        <div className='input-section'>
            <input id="search-text" type="text" value={query} onChange={(e)=>hnndleSearch(e)} placeholder="Search"/>
        </div>
        <div className='display-section'>
            {books.map((book, index)=>{
                if(books.length === index+1){
                    return (<p key={`book-key-${book}`} ref={lastBook}>{book}</p>)
                }else{
                    return (<p key={`book-key-${book}`} >{book}</p>)
                }
                
            })}
        </div>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error...'}</div>
    </div>
  )
}

export default InfiniteScroll