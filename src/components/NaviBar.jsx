import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  notStrongTextAction,
  strongTextAction,
} from "../store/reducers/strongTextReduser";

const NaviBar = () => {
  const strongText = useSelector((state) => state.strongText.strongText);
  const dispatch = useDispatch();

  const doStrongText = () => {
    strongText === false
      ? dispatch(strongTextAction())
      : dispatch(notStrongTextAction());
  };

  return (
    <div>
      {!strongText ? (
        <Navbar
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
          className="fixed-top"
        >
          <Container>
            <NavbarBrand>
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                <h2>Concert CLUB</h2>
              </Link>{" "}
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Button
                  variant="light"
                  style={{ marginBottom: "0.5rem" }}
                  className="me-md-2 mb-md-0 rounded-0"
                  onClick={() => doStrongText()}
                >
                  Версия для слабовидящих
                </Button>
                <Button variant="light" className="rounded-0">
                  Мой профиль
                </Button>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
          className="fixed-top"
        >
          <Container>
            <NavbarBrand>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/home"
              >
                <h2 className="fw-bold">Concert CLUB</h2>
              </Link>{" "}
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Button
                  variant="light"
                  style={{ marginBottom: "0.5rem" }}
                  className="me-md-2 mb-md-0 rounded-0 fw-bold"
                  onClick={() => doStrongText()}
                >
                  Версия для слабовидящих
                </Button>
                <Button variant="light" className="rounded-0 fw-bold">
                  Мой профиль
                </Button>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default NaviBar;
