function videoList = videos.map((video) => {
    return (
        <VideoListCard key={video.id.videoId} video={video}/>
    )
}

export default VideoList;
