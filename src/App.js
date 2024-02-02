import logo from './logo.svg';
import './App.css';
import { FaSearch } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
// import Header  from './components/Header.js';


import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import { FaSearch } from "react-icons/fa";



// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import ExampleCarouselImage from 'react-bootstrap/ExampleCarouselImage';






function App() {
  return (
    <div className='website'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img src={require('./image/logo3.png')}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='md-100px'>
            <Nav className="ms-auto">

              <NavDropdown title="home" id="basic-nav-dropdown" className='mb-100px'>
                <NavDropdown.Item href="#action/3.1" className='mb-100px'>main home page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> creative home page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">corporate home page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">bussiness home page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">minimal home page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">portfolio home page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">shop home page</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <Nav.Link href="#link">sevices</Nav.Link>
              <Nav.Link href="#link">portfolio</Nav.Link>

              <NavDropdown title="blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">blog detail</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">product grid</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">product list</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">product detail</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">shopping cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">wish list</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">checkout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">login</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="#link">contact</Nav.Link>


            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>


      {/* start lider */}
      <Carousel className='w-100%' id='1'>
        <Carousel.Item className='w-100%'>
          <img src={(require('./image/slider5.jpg'))} className='w-100%'></img>
          <Carousel.Caption>
            <h3>enjoy the new</h3>
            <h1>experience of web</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={(require('./image/slider5.jpg'))} className='w-100%'></img>
          <Carousel.Caption>
            <h3>enjoy the new</h3>
            <h1>experience of web</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={(require('./image/slider5.jpg'))}></img>
          <Carousel.Caption>
            <h3>enjoy the new</h3>
            <h1>experience of web</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* end slider */}


      {/* start stay now */}
      <div className='stay_now'>
        <Container>
          <Row>
            <Col classname='stay_col' lg-6></Col>
            <div className='section_title'>
              <h5>stay-now-to-plan</h5>
              <h2>Your awesome home with us!</h2>
              <img src={require('./image/title.png')}></img>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                elementum tristique.</p>
            </div>
          </Row>
          <Row className='stay_v'>
            <Col lg-4 md-4>
              <div className='a_icon'>
                <div className='icon_img'>
                  <img src={require('./image/plan1.png')}></img>
                </div>
                <div className='icon_text'>
                  <h5>infrastructure</h5>
                  <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Suspendisse varius enim in
                    eros elementum tristique.</p>
                </div>
              </div>
            </Col>
            <Col lg-4 md-4>
              <div className='a_icon'>
                <div className='icon_img'>
                  <img src={require('./image/plan3.png')}></img>
                </div>
                <div className='icon_text'>
                  <h5>house renovation</h5>
                  <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Suspendisse varius enim in
                    eros elementum tristique.</p>
                </div>
              </div>
            </Col>
            <Col lg-4 md-4>
              <div className='a_icon'>
                <div className='icon_img'>
                  <img src={require('./image/plan3.png')}></img>
                </div>
                <div className='icon_text'>
                  <h5>sefty rules</h5>
                  <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Suspendisse varius enim in
                    eros elementum tristique.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* end stay now */}
      {/* start gallery */}
      <section class="portfolio-area pt-155 pb-95 text-center fix section">
        <Container>
          <Row g-0>
            <Col>
              <div class="section_title">
                <h2>Our portfolio gallery</h2>
                {/* <img src={require('./image/title.png')}></img> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                  elementum tristique.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <Row class="grid-three g-0">
            <div class="cat6">
              <div class="portfolio">
                {/* <img src={require('./image/port24.webp')}></img> */}
                <a class="image-popup hover" href="img/portfolio/port24.jpg">
                  {/* <img src="img/icon/plus.png" alt="plus"> */}
                </a>
              </div>
            </div>
            <div class="cat8 d-flex">
              <div class="row g-0">
                <div class="cat7 ">
                  <div class="portfolio news-heffect">
                    {/* <img src={require('./image/port25.webp')}></img> */}

                    <a class="image-popup hover" href="img/portfolio/port25.jpg">
                      {/* <img src="img/icon/plus.png" alt="plus"> */}
                    </a>
                  </div>
                </div>
                <div class="cat7">
                  <div class="portfolio news-heffect">
                    {/* <img src={require('./image/port26.webp')}></img> */}

                    <a class="image-popup hover" href="img/portfolio/port26.jpg">
                      {/* <img src="img/icon/plus.png" alt="plus"> */}
                    </a>
                  </div>
                </div>
                <div class="cat7">
                  <div class="portfolio news-heffect">
                    {/* <img src={require('./image/port27.webp')}></img> */}

                    <a class="image-popup hover" href="img/portfolio/port27.jpg">
                      {/* <img src="img/icon/plus.png" alt="plus"> */}
                    </a>
                  </div>
                </div>
                <div class="cat7">
                  <div class="portfolio news-heffect">
                    {/* <img src={require('./image/port28.webp')}></img> */}

                    <a class="image-popup hover" href="img/portfolio/port28.jpg">
                      {/* <img src="img/icon/plus.png" alt="plus"> */}
                    </a>
                  </div>
                </div>
                <div class="cat5">
                  <div class="portfolio news-heffect">
                    {/* <img src={require('./image/port29.webp')}></img> */}

                    <a class="image-popup hover" href="img/portfolio/port29.jpg">
                      {/* <img src="img/icon/plus.png" alt="plus"> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>


        <div className='container_1'>
          <Row>
            <Col className='col-img g-0 m-3px' sm={5}>
              <img src={require('./image/port24.webp')}></img>
            </Col>
            <Col>
              <Row lg={3}>
                <Col className='g-0'>

                  <img src={require('./image/port25.webp')}></img>
                </Col>
                <Col className='g-0'>
                  <div className='img_26'>
                    <img src={require('./image/port26.webp')}></img>
                    <div className='hover'>
                    </div>
                  </div>

                </Col>
                <Col className='g-0'><img src={require('./image/port27.webp')}></img></Col>

              </Row>
              <Row>
                <Col className='g-0 img_2'><img src={require('./image/port29.webp')}></img></Col>
                <Col className='g-0 img_3'><img src={require('./image/port28.webp')}></img></Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
      {/* end gallery */}


      {/* start stay-up-to date */}
      <div className='date_now'>
        <Container>
          <Row>
            <Col classname='date_col'>
              <div className='section_title'>
                <h5>stay-up-to-date</h5>
                <h2>Check out our lastest work!</h2>
                <img src={require('./image/title.png')}></img>
                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Suspendisse varius enim in
                  eros elementum tristique.</p>
              </div>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col lg={4} md={6}>
                <div className='single_item'>
                  <div className='latest_icon'>
                    <img src={require('./image/work1.png')}></img>
                  </div>
                  <div className='latest_content'>
                    <h5>design & build pakage</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua enim minim</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className='single_item'>
                  <div className='latest_icon'>
                    <img src={require('./image/work2.png')}></img>
                  </div>
                  <div className='latest_content'>
                    <h5>design & build pakage</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua enim minim</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className='single_item'>
                  <div className='latest_icon'>
                    <img src={require('./image/work3.png')}></img>
                  </div>
                  <div className='latest_content'>
                    <h5>design & build pakage</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua enim minim</p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className='single_item'>
                  <div className='latest_icon'>
                    <img src={require('./image/work4.png')}></img>
                  </div>
                  <div className='latest_content'>
                    <h5>design & build pakage</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua enim minim</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className='single_item'>
                  <div className='latest_icon'>
                    <img src={require('./image/work5.png')}></img>
                  </div>
                  <div className='latest_content'>
                    <h5>design & build pakage</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua enim minim</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className='single_item'>
                  <div className='latest_icon' >
                    <img src={require('./image/work6.png')}></img>
                  </div>
                  <div className='latest_content'>
                    <h5>design & build pakage</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua enim minim</p>
                  </div>
                </div>

              </Col>
            </Row>
          </Container>
        </Container>
        {/* end stay-up-to date */}


        <div className='fun_area'>
          <Container>
            <Row>
              <Col lg={3} ms={4}>
                <div className='single_fun' >
                  <div className='fun_content'>
                    <h3 className='f'>330</h3>
                    <p>house renovation</p>
                  </div>
                  <div className='fun_content'>
                    <h3 className='f'>1149</h3>
                    <p>customers</p>
                  </div>
                  <div className='fun_content'>
                    <h3 className='f'>1815</h3>
                    <p>green building</p>
                  </div>
                  <div className='fun_content'>
                    <h3 className='f'>2837</h3>
                    <p>metal roofing</p>
                  </div>
                </div>
              </Col>

            </Row>
          </Container>
        </div>

        {/* start testimonial */}
        <Container>
          <OwlCarousel className='owl-theme' loop margin={50}>

            <div class='item d-flex'>
              <div className='image'>
                <img src={require('./image/testi4.webp')}></img>
              </div>
              <div className='text'>
                <h1>Mariasara</h1>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>

                <p>Lorem ipsum dolor sit amet, elit euismod consecteturaiing praesent .</p>
                <span>graphic design</span>

              </div>
            </div>
            <div class='item d-flex'>
              <div className='image'>
                <img src={require('./image/testi3.webp')}></img>
              </div>
              <div className='text'>
                <h1>Mariasara</h1>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>

                <p>Lorem ipsum dolor sit amet, elit euismod consecteturaiing praesent .</p>
                <span>graphic design</span>

              </div>
            </div>
            <div class='item d-flex'>
              <div className='image'>
                <img src={require('./image/testi5.webp')}></img>
              </div>
              <div className='text'>
                <h1>Mariasara</h1>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>

                <p>Lorem ipsum dolor sit amet, elit euismod consecteturaiing praesent .</p>
                <span>graphic design</span>

              </div>
            </div>
            <div class='item d-flex'>
              <div className='image'>
                <img src={require('./image/testi4.webp')}></img>
              </div>
              <div className='text'>
                <h1>Mariasara</h1>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>

                <p>Lorem ipsum dolor sit amet, elit euismod consecteturaiing praesent .</p>
                <span>graphic design</span>

              </div>
            </div>
            <div class='item d-flex'>
              <div className='image'>
                <img src={require('./image/testi3.webp')}></img>
              </div>
              <div className='text'>
                <h1>Mariasara</h1>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>

                <p>Lorem ipsum dolor sit amet, elit euismod consecteturaiing praesent .</p>
                <span>graphic design</span>

              </div>
            </div>
            <div class='item d-flex'>
              <div className='image'>
                <img src={require('./image/testi5.webp')}></img>
              </div>
              <div className='text'>
                <h1>Mariasara</h1>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='#E2DD00'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>
                <i><IoIosStar color='gray'></IoIosStar></i>

                <p>Lorem ipsum dolor sit amet, elit euismod consecteturaiing praesent .</p>
                <span>graphic design</span>

              </div>
            </div>

          </OwlCarousel>
        </Container>

        {/* end tenstimonial */}




        {/* start blog */}
        <div className='blog'>
          <div className='blog_area'>
            <Container>
              <Row>
                <Col lg={6} md={10}>
                  <div className='title text-left'>
                    <h2>latest blog</h2>
                    <img src={require('./image/title.png')}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                      elementum tristique.</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={8} className='d-flex'>
                  <Row>
                    <Col lg={6} md={6}>
                      <div className='single_blog'>
                        <div className='blog_img'>
                          <img src={require('./image/blog1.webp')}></img>
                        </div>
                        <div className='blog_content'>
                          <div className='blog_date'>
                            <h3>20</h3>
                            <span>may</span>
                          </div>
                        </div>
                        <div className='blog_text ms-100px'>
                          <h3>Build a Wood Fired Clay Oven</h3>
                          <ul className='d-flex'>
                            <li>post by <a href='#'>heavy</a></li>
                            <li>1 comment</li>
                          </ul>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incidi dunt ut labore et dolore</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className='single_blog'>
                        <div className='blog_img'>
                          <img src={require('./image/blog2.webp')}></img>
                        </div>
                        <div className='blog_content'>
                          <div className='blog_date'>
                            <h3>20</h3>
                            <span>may</span>
                          </div>
                        </div>
                        <div className='blog_text ms-100px'>
                          <h3>Build a Wood Fired Clay Oven</h3>
                          <ul className='d-flex'>
                            <li>post by <a href='#'>heavy</a></li>
                            <li>1 comment</li>
                          </ul>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incidi dunt ut labore et dolore</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col lg={4}>
                  <div className='blog_right' tabIndex={1} >
                    <div class="single_blog">
                      <h4><a href="blog-details.html">Build a Wood Fired Clay Oven</a></h4>
                      <ul className='d-flex'>
                        <li>post by <a href="blog-details.html">hevy</a></li>
                        <li>1 comment</li>
                      </ul>
                    </div>
                    <div class="single_blog">
                      <h4><a href="blog-details.html">Build a Wood Fired Clay Oven</a></h4>
                      <ul className='d-flex'>
                        <li>post by <a href="blog-details.html">hevy</a></li>
                        <li>1 comment</li>
                      </ul>
                    </div>
                    <div class="single_blog">
                      <h4><a href="blog-details.html">Build a Wood Fired Clay Oven</a></h4>
                      <ul className='d-flex'>
                        <li>post by <a href="blog-details.html">hevy</a></li>
                        <li>1 comment</li>
                      </ul>
                    </div>
                    <div class="single_blog">
                      <h4><a href="blog-details.html">Build a Wood Fired Clay Oven</a></h4>
                      <ul className='d-flex'>
                        <li>post by <a href="blog-details.html">hevy</a></li>
                        <li>1 comment</li>
                      </ul>
                    </div>
                    <div class="single_blog">
                      <h4><a href="blog-details.html">Build a Wood Fired Clay Oven</a></h4>
                      <ul className='d-flex'>
                        <li>post by <a href="blog-details.html">hevy</a></li>
                        <li>1 comment</li>
                      </ul>
                    </div>
                    <div class="single_blog">
                      <h4><a href="blog-details.html">Build a Wood Fired Clay Oven</a></h4>
                      <ul className='d-flex'>
                        <li>post by <a href="blog-details.html">hevy</a></li>
                        <li>1 comment</li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* end blog */}
      </div>


      {/* start footer */}
      <div className='footer_area'>
        <div className='main_footer'>
          <Container>
            <Row>
              <Col lg={4} md={4}>

                <div className="single-widget">
                  <div class="footer-logo">
                    <a href="index.html"><img src={require('./image/logo.webp')}></img></a>
                  </div>
                  <p class="add">No 40 Baria Sreet 11 New York, United States</p>
                  <p><span>Tel.</span> (800) 123 456 789 / (800) 123 456 789</p>
                  <p><span>Email</span> info@yourdomain.com</p>
                  <div class="footer-social">
                    <ul className='d-flex'>
                      <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                      <li><a href="#"><FaTwitter></FaTwitter></a></li>
                      <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                      <li><a href="#"><FaTwitter></FaTwitter></a></li>
                      <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                    </ul>
                  </div>
                </div>

              </Col>
              <Col lg={4} md={4}>
                <div className="single_widget">
                  <h3>Item tags</h3>
                  <div className="tag-wrapper">
                    <a href="business.html">business</a>
                    <a href="corporate.html">agency</a>
                    <a href="corporate.html">agency</a>
                    <a href="shop.html">shop</a>
                    <a href="index.html">homepage</a>
                    <a href="index.html">onepage</a>
                    <a href="business.html">business</a>
                    <a href="business.html">wordpress</a>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4}>
                <div className="single-widget">
                  <h3>instagram follow</h3>
                  <div className="instagram-wrapper">
                    <div className="row">
                      <Col lg={6}>
                        <div className="news-heffect">
                          <a href="https://www.instagram.com/devitems/" class="hover"><img src={require('./image/instagram1.webp')}></img></a>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="news-heffect">
                          <a href="https://www.instagram.com/devitems/" class="hover"><img src={require('./image/instagram1.webp')}></img></a>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="news-heffect">
                          <a href="https://www.instagram.com/devitems/" class="hover"><img src={require('./image/instagram1.webp')}></img></a>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="news-heffect">
                          <a href="https://www.instagram.com/devitems/" class="hover">
                            <img src={require('./image/instagram1.webp')}></img>
                          </a>
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
              </Col>

            </Row>
          </Container>
        </div>

      </div>
      {/* end footer */}


    </div>
  );
}

export default App;
