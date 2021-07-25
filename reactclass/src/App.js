// import logo from './logo.svg';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import {Button, Navbar, Container, Nav, Jumbotron, Alert, Row, Form, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import "./style.css";
import { FaHeart } from 'react-icons/fa';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1ImfnGQEdcwMpU0TUafI5kqkZsvbMXKBHG8t1XKkdG9w",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
    <div class="body">
        
  <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="https://www.vitrendz.tech">
      <img
        src="https://drive.google.com/thumbnail?id=10bwXdT0UY1ElXcGkHDHiN3jpRSPEnQaQ" 
        className="d-inline-block align-top navLogo"
        alt="logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
        <Container Fluid>
          <div class="appBody">
            <br/><br/><br/><br/>
            <Row>
                <Col md={12}>
                    <Alert class="alert alert-warning" role="alert">
                        <div id="grades">Welcome ! <strong> Find your Class Groups here </strong>[ Use Ctrl+F or Find for
                            easy
                            Navigation! ]
                        </div>
                    </Alert>
                </Col >
            </Row>
            <Jumbotron Fluid class="jumbotron complete">
                <div class="card-container p-4 centered has-box-shadow row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10 col-sm-12 col-xs-12 centered">
              <h1 class="ding">VITrendz Whatsapp Community</h1>
                        <Container Fluid>
                            <Row class="head">
                                <div class="form-control d-none d-xl-block col-xl title splpd" name="gnameto">
                                    Group Name
                                </div>
                                <div class="form-control d-none d-xl-block col-xl title splpd" name="glinkto">
                                    Group Link
                                </div>
                                <div class="form-control d-none d-xl-block col-xl title splpd" name="spamto">
                                    Spam
                                </div>
                            </Row>
                        </Container>
                        <br/>
                        {data.map((item, i) => (
                        <Fragment key={i}>
                                          <Container Fluid>
                                              <Row>
                                                  
                                              <div class="form-control d-none d-xl-block col-xl splpd" name="gname">
                                                  {item.gname}
                                              </div>
                                              <div class="form-control d-none d-xl-block col-xl splpd" name="glink">
                                              <a href={item.glink} target='_new'>Link</a>
                                              </div>
                                              <div class="form-control d-none d-xl-block col-xl splpd" name="spam">
                                                  {item.spam}
                                              </div>
                                              </Row>
                                              <br />
                                          </Container>
                                          </Fragment>
                      ))}
                      <h1 class="ding">VITrendz Telegram Community</h1>
                      <Container Fluid>
                            <Row class="head">
                                <div class="form-control d-none d-xl-block col-xl title splpd" name="gnameto">
                                    Group Name
                                </div>
                                <div class="form-control d-none d-xl-block col-xl title splpd" name="glinkto">
                                    Group Link
                                </div>
                                <div class="form-control d-none d-xl-block col-xl title splpd" name="spamto">
                                    Spam
                                </div>
                            </Row>
                        </Container>
                        <br/>
                        {data.map((item, j) => {
                          return item.gnamet===""?
                        null
                              : <Fragment key={j}>
                              <Container Fluid>
                                  <Row>
                                      
                                  <div class="form-control d-none d-xl-block col-xl splpd" name="gnamet">
                                      {item.gnamet}
                                  </div>
                                  <div class="form-control d-none d-xl-block col-xl splpd" name="glinkt">
                                  <a href={item.glinkt} target='_new'>Link</a>
                                  </div>
                                  <div class="form-control d-none d-xl-block col-xl splpd" name="spamt">
                                      {item.spamt}
                                  </div>
                                  </Row>
                                  <br />
                              </Container>
                              </Fragment>
                          
              })}
                                <section>
                                  <div className="d-grid">
                                    <Button variant="primary" class="gbtn btn btn-block" size="lg" id="gbtn"
                                        onclick="window.open(' https://www.instagram.com/vitrendz ')">Follow Us for More
                                        Updates</Button>
                                    <p class="vitrends">Created with <FaHeart /> by VITrendz</p>
                                    </div>
                                </section>
                    </div>
                </div>
    
    
                <div class="modal fade" id="modal-error" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-danger" id=" modal-title">Error</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body" id="modal-body"></div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Got it</button>
                            </div>
                        </div>
                    </div>
                </div>
                <script language="javascript" type="text/javascript" src="calculator.js"></script>
            </Jumbotron>
            </div>
        </Container>
    </div>
    
    </>
  );
}

// https://docs.google.com/spreadsheets/d/e/2PACX-1vR5cessTKMMFmfUAXpnUObXA7aq-KniI3ic47g755BXj1D_OCyT_0jZvXjIVEPn0zocODsgW9bL-y4w/pubhtml