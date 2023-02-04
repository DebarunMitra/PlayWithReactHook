import { useEffect, useState } from 'react'
import axios from 'axios'

//custom hook
export default function useBookSearchHook(query, pagenumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(()=>{
    setBooks([]);
  }, [query]);

  useEffect(()=>{
    setLoading(true);
    setError(false);

    let cancle;
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pagenumber },
      cancelToken: new axios.CancelToken(c=>cancle=c)
    }).then(response=>{
      console.log(response.data);
      setBooks(prevBooks=>{
        return [...new Set([...prevBooks, ...response.data.docs.map(b=>b.title)])]
      })

      setHasMore(response.data.docs.length>0)
      setLoading(false);
    }).catch(e=>{
      if(axios.isCancel(e)){
        return
      }
      setError(true);
        
    })

    return ()=>cancle()
  }, [query, pagenumber])
  
  return {loading, error, books, hasMore};
}
