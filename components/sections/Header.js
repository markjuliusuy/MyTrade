import React from "react";
import NextLink from "next/link";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Image,
  Container
} from "react-bootstrap";

const Header = props => {
  return (
    <Navbar expand="lg" className="border-bottom border-info">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="https://mytrade.com.ph/image/layout_set_logo?img_id=36592"
            width={172}
          ></Image>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
