import { useState, useEffect } from 'react'

const useInitialState=(API)=>{
  const [videos, setVideo]= useState({
    'mylist': [],
    'trends': [],
    'originals': []
  })
  useEffect(()=>{
    fetch(API)
    .then(response=>response.json())
    .then(data=>setVideo(data))
  },
    []
  )
  return videos
}
export default useInitialState