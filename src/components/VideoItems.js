import React from 'react'
import { Stack, Card } from 'react-bootstrap';

const VideoItems = ({ videos }) => {

    console.log(videos);

    const videoMap = videos.map((item, index) => (
        <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.snippet.title}</Card.Title>
            </Card.Body>
        </Card >
    )
    )

    return (
        <Stack className="d-flex flex-wrap justify-content-start" direction="horizontal" gap={3}>
            {videoMap}
        </Stack>
    )
}

export default VideoItems