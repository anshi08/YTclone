import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import Searchbar from './components/Searchbar';
import VideoDetails from './components/videodetail';
import VideoList from './components/videolist';
import { useState , useEffect } from 'react';
import youtube from './API/youtube';
import Switch from './components/Switch';
import Handle from './components/Switch'



function App() {

  const [videos,setVedios] = useState([])
  const [selectedVideo,setSelectedVideo] = useState('')
  // const [darkmode,setDarkmode] = useState('darkmode')
  

  const onVideoSelect = (video) =>{
    setSelectedVideo(video)
    
  }

    useEffect(() =>{
     async function handleSubmit(){
      const response = await youtube.get("search" ,{
        params:{
         part : "snippet" ,
         maxResults : 5,
         key : 'AIzaSyCYKiSHVendAes0tCSZIXDD6j_wnkw_lq8',
         q: "doraemon"
       }
      })
      setVedios(response.data.items) 
      setSelectedVideo(response.data.items[0])
     }
    handleSubmit()
  },[])
  
  
    const submitHandler = async (searchTerm) => {    
    const response = await youtube.get("search" ,{
     params:{
      part : "snippet" ,
      maxResults : 5,
      key : 'AIzaSyCYKiSHVendAes0tCSZIXDD6j_wnkw_lq8',
      q: searchTerm
    }
   })
   setVedios(response.data.items)
   setSelectedVideo(response.data.items[0])
  }

  
  return (
    <div className="App">
      <Container>
       <Searchbar OnFormSubmit={submitHandler}/>
       <Row>
        <Col sm={8}>
          <VideoDetails videos={selectedVideo}/> 
        </Col>
        <Col sm={4}>
          <VideoList videos={videos} onVideoSelect = {onVideoSelect}/>
        </Col>
       </Row>
      </Container>
      <Container>
        <Switch/>
      </Container>
    </div>
  );
}


export default App;
