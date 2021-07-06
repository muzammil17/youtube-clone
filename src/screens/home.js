import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import VideoCard from "../components/videoCard";
import { allVideos } from "../reducers/videosReducer";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const videos = useSelector(allVideos);
  console.log(videos);
  return (
    <div>
      <Header />
      <Container>
        {videos && videos.length > 0 ? (
          videos.map((video) => <VideoCard video={video} key={video.etag} />)
        ) : (
          <Row className="justify-content-md-center" style={{marginTop: "20px"}}>
            {"Search Something :)"}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
