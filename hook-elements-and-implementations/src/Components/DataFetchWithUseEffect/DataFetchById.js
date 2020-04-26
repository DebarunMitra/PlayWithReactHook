import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingById() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idByBtn, setIdByBtn] = useState(1)




    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idByBtn}`)
            .then(res => {
                setPost(res.data)
            }).catch(err => {
                console.log(err);

            })
    }, [idByBtn])

    function setIdOnBtnClick(){
        setIdByBtn(id);
    }

    return (
        <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={setIdOnBtnClick}>Click To Fetch</button>
            <div>{post.title}</div>
        </div>
    );
}

export default DataFetchingById;