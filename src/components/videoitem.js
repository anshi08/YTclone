import {Row,Col,Container,Image} from 'react-bootstrap'

function VideoItem({video,onVideoSelect}){
console.log(video)

    return(
        <Container style={{padding : "10px"}} >
        <Row>
        <Col sm={8} style={{cursor : "pointer"}} onClick = {()=> onVideoSelect(video)}>
           <Image src={video.snippet.thumbnails.medium.url} thumbnail={true}/>
        </Col>
        <Col sm={4}>
          <h6>{video.snippet.title.slice(0,41)}</h6>  
        </Col>
      </Row>
      </Container>
    )

}

export default VideoItem