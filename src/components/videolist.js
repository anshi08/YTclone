import VideoItem from "./videoitem"




function VideoList({videos, onVideoSelect}){
  if(videos.length == 0) return <h1>Loading...</h1>

    return(
        <>
        
        {videos.map((video,idx) => <VideoItem key={idx} video={video} onVideoSelect = {onVideoSelect}/>)}
        </>   
    )
}

export default VideoList