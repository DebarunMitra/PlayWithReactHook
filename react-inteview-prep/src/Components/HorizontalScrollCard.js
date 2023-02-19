import React, {useEffect, useState} from 'react'
import './Styles/ReadAPIwithPagination.css';

function HorizontalScrollCard() {
const data = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    }
];

const [photos, setPhotos] = useState(data);
const [dataCounter, setDataCounter] = useState(5);

useEffect(() => {
  function getPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        return response.json();
      })
      .then((dataRes) => {
        let dataSet = [];
        for(let i=0;i<dataCounter;i++){
          dataSet.push(dataRes[i]);
        }
        console.log(dataSet);
        setPhotos(dataSet);
      });
  }
  getPhotos();
}, [dataCounter]);

const loadMoreData = ()=>{
  setDataCounter(()=>dataCounter+5);
}

  return (
    <div className='App'>
      <button onClick={()=>loadMoreData()}>Load More Cards</button>
      <div className="main-container">
        <div className="card-container">
          {photos.length > 0 ? (
            photos.map((photo) => (
              <div key={`card-${photo.id}`} id={photo.id} className="card">
                <img
                  id={"image" + photo.id}
                  src={photo.url}
                  alt="card-img"
                  width="300"
                  height="200"
                />
                <div id={"desc" + photo.id} className="card-description">
                  <p id={"album" + photo.id}>
                    <span>albumId: {photo.albumId}</span>
                    <span>|| photoId: {photo.id}</span>
                  </p>
                  <p id={"title" + photo.id}>{photo.title}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default HorizontalScrollCard