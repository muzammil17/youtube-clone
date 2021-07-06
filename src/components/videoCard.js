import React from "react";
import { Col, Row, Image, Card } from "react-bootstrap";

const VideoCard = ({ video }) => {
  const {
    snippet: {
      description,
      channelTitle,
      title,
      thumbnails: {
        high: { url },
      },
    },
  } = video;
  return (
    <div>
      <Row className="cardCover">
        <Col md={3} sm={5} xs={12}>
          <Image src={url} height={200} width={"100%"} />
        </Col>

        <Col>
          <Card className="customCard">
            <Card.Body>
              <Card.Title className="videoTitle">{title}</Card.Title>
              <Card.Text className="videoDescription">{description}</Card.Text>
              <footer className="blockquote-footer">
                <cite title="Source Title">{channelTitle}</cite>
              </footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default VideoCard;
