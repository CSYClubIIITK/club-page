"use client";
import styles from "../page.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPhone, FaEnvelope, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

const ImageComponent = ({
  imageSrc1,
  name1,
  namex1,
  imageSrc2,
  name2,
  namex2,
  imageSrc3,
  name3,
  namex3
}) => {
  return (
    <Container>
      <br />

      <center>
        <Row>
          <Col xs={12} md={4}>
            <img
              src={imageSrc1}
              alt="Media"
              width={225}
              height={225}
              className={styles.eventclass}
            />
            <h5 style={{ color: "white" }} align="center" className="styles.social-icon">
              {name1}
              {namex1 && <><br />{namex1}</>}

            </h5>

            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "space-evenly",
                margin: "10px"
              }}
            ></div>

            <br />
          </Col>

          <Col xs={12} md={4}>
            <img
              src={imageSrc2}
              alt="Media"
              width={225}
              height={225}
              className={styles.eventclass}
            />
            <h5 style={{ color: "white" }} align="center" className="whitetext">
              {name2}
              {namex2 && <><br />{namex2}</>}
            </h5>
            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "space-evenly",
                margin: "10px"
              }}
            ></div>
          </Col>
          <Col xs={12} md={4}>
            <img
              src={imageSrc3}
              alt="Media"
              width={225}
              height={225}
              className={styles.eventclass}
            />
            <h5 style={{ color: "white" }} align="center" className="whitetext">
              {name3}
              {namex3 && <><br />{namex3}</>}
            </h5>
            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "space-evenly",
                margin: "10px"
              }}
            ></div>
          </Col>
        </Row>
      </center>
    </Container>
  );
};

export default ImageComponent;
