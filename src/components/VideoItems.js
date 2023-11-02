import React from 'react'
import { Row, Container } from 'react-bootstrap';
import VideoCard from './VideoCard';

const VideoItems = ({ videos }) => {

    console.log(videos);

    const videoMap = videos.map((item, index) => (
        <Container key={index}>
            <VideoCard item={item} />
        </Container>
    )
    )

    return (
        <Row className="d-flex flex-wrap justify-content-start gap-4" direction="horizontal" >
            {videoMap}
        </Row>
    )
}

export default VideoItems