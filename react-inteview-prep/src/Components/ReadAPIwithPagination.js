import React, {useEffect, useState} from 'react'

function ReadAPIwithPagination() {
  const [photos, setPhotos] = useState([]);
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
          setPhotos(dataSet);
        });
    }
    getPhotos();
  }, []);

  return (
    <div>
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

export default ReadAPIwithPagination;