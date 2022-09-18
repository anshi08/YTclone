import {Card, Container,Row,Col} from 'react-bootstrap'

function VideoDetails({videos}){
  // console.log(videos)
   if(!videos) return <Container><Row><Col sm={12}><h1 style={{textAlign:"center"}}>Loading!!</h1></Col></Row></Container>
   const setVedios = `https://www.youtube.com/embed/${videos.id.videoId}`
   return(   
        <Card>    
          <iframe width="730" height="345" src= {setVedios} >
          </iframe>
        <Card.Body>
          <Card.Text>
            <h3 style={{color : "black"}}>{videos.snippet.title}</h3>
            <h4 style={{color : "black"}}>{videos.snippet.description}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    )

}

export default VideoDetails