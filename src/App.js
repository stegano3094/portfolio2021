import './App.css';
import React, { Component, useState, useEffect, useRef } from 'react';
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Jumbotron, Container, Card, Nav } from 'react-bootstrap';
import ProjectData from './data/projectdata.js'
import devImg from './imagefolder/room.PNG'
import mainImg from './imagefolder/main_banner_img.jpg'
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import reactDom from 'react-dom';

/**
 * https://reactjsexample.com/easy-to-make-scroll-animation-with-reactjs/
 * 
 */

const RefEx = () => {
  const scrollRef = useRef();
  return (
    <div>

    </div>
  )

}

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Nav variant="tabs" defaultActiveKey="link-1" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={ ()=>{window.scrollTo({top: 0, behavior: 'smooth'})} }>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={ ()=>{window.scrollTo({top: 310, behavior: 'smooth'})} }>WhoAmI</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={ ()=>{window.scrollTo({top: 970, behavior: 'smooth'})} }>SKILLS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" onClick={ ()=>{window.scrollTo({top: 1900, behavior: 'smooth'})} }>TYPICAL PROJECT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5" onClick={ ()=>{window.scrollTo({top: 3000, behavior: 'smooth'})} }>Contact Me</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <Title></Title>

      <Body></Body>

      <Footer></Footer>
    </div>
  );
}

function Title() {
  return (
    <div>
      <Jumbotron fluid className="TitleDiv">
        <Container className="TitleContainer">
          <h1 className="WhiteText">Portfolio</h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

function Body() {
  return (
    <div className="Body">

      <Bounce bottom cascade>
        <div className="WhoAmI ContentsMarginTop ContentsMarginBottom">
          <h2>WHO AM I?</h2>
          <p>????????? ????????? ????????? ??????????????????.</p>
          <div className="WhoAmI1">
            <div>
              <img src={devImg} width="200" height="200" alt="????????? ?????????" className="ImgMargin"></img>
              <div className="WhoAmI1-profile">
                <ul>
                  <li>??????</li>
                  <li>????????????</li>
                  <li>?????????</li>
                </ul>
                <ul className="MarginLeft30">
                  <li>?????????</li>
                  <li>1994.07.08</li>
                  <li>steganowork@naver.com</li>
                </ul>
              </div>
            </div>

            <div className="DivLine"></div>

            <div className="MarginLeft60">
              <div className="WhoAmI2-profile">
                <h4>??????</h4>
                <ul className="WhoAmI2-profile-ul">
                  <li>2013-03 ~ 2019-02</li>
                  <li>2017-06 ~ 2018-05</li>
                  <li>2018-06</li>
                  <li>2019-02 ~ 2021-05</li>
                  <li>2020-05</li>
                </ul>
                <ul className="WhoAmI2-profile-ul">
                  <li>??????????????? ????????????????????? ??????</li>
                  <li>?????? ?????? ???????????? ??????</li>
                  <li>??????????????? i-Capstone Design ???????????? ????????????</li>
                  <li>??????????????? ?????? (QE???)</li>
                  <li>?????? ???????????? ?????? (????????????:1021181450000)</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </Bounce>

      <ScrollContainer>

        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
            <div className="SKILLS ContentsMarginTop ContentsMarginBottom">
              <h2>SKILLS</h2>
              <div className="PROJECT">
              {
                ProjectData.map((a, i) => {
                  return <ProjectCard data={a} key={i}></ProjectCard>
                })
              }
            </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), MoveIn(-1000, 0))}>
            <h2 className="ContentsMarginTop ContentsMarginBottom">TYPICAL PROJECT</h2>
            <div className="PROJECT">
              {
                ProjectData.map((a, i) => {
                  return <ProjectCard data={a} key={i}></ProjectCard>
                })
              }
            </div>
          </Animator>
        </ScrollPage>

        <Fade right>
          <div className="BottomLink ContentsMarginTop ContentsMarginBottom" >
            <h6>GitHub<br />
              <a href="https://github.com/stegano3094">https://github.com/stegano3094</a>
            </h6>
            <br />
            <h6>Blog<br />
              <a href="http://steganowork.ipdisk.co.kr">http://steganowork.ipdisk.co.kr</a>
            </h6>
          </div>
        </Fade>
      </ScrollContainer>

    </div>
  )
}

function ProjectCard(props) {
  return (
    <div className="ProjectCardDiv">
      <Card className="bg-white" onClick={(e) => {/*???????????? ?????? ???*/ }}>
        <Card.Img src={props.data.imgUri} alt="CardImage" />
        <Card.Body>
          <Card.Title>{props.data.projectName}</Card.Title>
          <Card.Text>{props.data.skill}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

function Footer() {
  return (
    <div className="FooterDiv">
      <br />
      <h6>Contact me through email<br /><p>steganowork@naver.com</p></h6>
      <p>??? ???????????? ????????? ????????? ?????? ?????? ??????????????? ????????? ?????????????????????.<br />
      Copyright 2021. steganowork All rights reserved</p>
      <br />

    </div>
  )
}

export default App;