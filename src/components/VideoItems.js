import React from 'react'
import { Row, Card } from 'react-bootstrap';

const VideoItems = ({ videos }) => {

    console.log(videos);

    const videoMap = videos.map((item, index) => (
        <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.snippet.thumbnails.high["url"]}></Card.Img>
            <Card.Body>
                <Card.Title>{item.snippet.title}</Card.Title>
                <Card.Text>
                    {item.snippet.description}
                </Card.Text>
            </Card.Body>
        </Card >
    )
    )

    return (
        <Row className="d-flex flex-wrap justify-content-start gap-4" direction="horizontal" >
            {videoMap}
        </Row>
    )
}

export default VideoItems