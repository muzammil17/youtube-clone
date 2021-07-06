import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setVideos } from "../reducers/videosReducer";
import url from "../url";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchVideos = async (e) => {
    e.preventDefault();
    try {
      const response = await url.get("search", {
        params: {
          maxResults: 15,
          part: "snippet",
          key: "AIzaSyDO8WH5bHniJ9l6nbxEqd04_wEi0Qv0qR0",
          q: query,
        },
      });

      console.log(response);
      dispatch(setVideos(response.data.items));
    } catch (err) {
      const error = err.response || err;
      console.error(error);
    }
  };

  // console.log(query);

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>Youtube</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Form className="d-flex" inline onSubmit={fetchVideos}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={query}
                onChange={handleChange}
              />
            </Form>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
