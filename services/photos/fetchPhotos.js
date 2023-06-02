const fetchPhotos = id => {
  return fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then(
    res => res.json()
  )
}

export default fetchPhotos
