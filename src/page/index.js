import React, {Fragment}from 'react'

function Index() {
  return (
    <Fragment>
        <section id="header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top ">
                <div className="container">
                    <a className="navbar-brand" href="#">E-<span className="text-danger">SHOP</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#special">Special</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonial">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </section>

   

    <section id="home" className="home pt-5 overflow-hidden">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" ></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" ></button>
              
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://img.freepik.com/free-photo/sassy-beautiful-young-woman-winking-showing-tongue-flirty-white-background_1258-125900.jpg?w=1380&t=st=1692465797~exp=1692466397~hmac=fe9d05b459ec980580d62cc66272844775863917be12006950836cd8a39dccdd" className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                  <h1>Women</h1>
                  <h2>50% Discount For this Season</h2>
                  <a href="#" className="btn btn-danger text-uppercase mt-4">Our product</a>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="https://img.freepik.com/free-photo/handsome-man-wearing-leather-jacket-looking-confident-camera-standing-white-background_1258-110987.jpg?w=1380&t=st=1692465432~exp=1692466032~hmac=9898c6941a84ec0126bb25696ca971b999a7cefced4fe33b608881effc549be9" className="d-block w-100" alt="..."/>
                <div className="carousel-caption ">
                  <h1>E-Shop</h1>
                  <h2>Working with Card & Pay Pal</h2>
                  <a href="#" className="btn btn-danger text-uppercase mt-4">Our product</a>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true">
                <span className="ti-angle-left slider-icon"></span>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true">
                <span className="ti-angle-right slider-icon"></span>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

       

          <div className="offer">
            <div className="container">
              <div className="row">

               
                <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
                  <a href="#">
                    <div className="offer-box text-center position-relative">
                      <div className="offer-inner">
                        <div className="offer-img position-relative overflow-hidden">
                          <img src="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8561.jpg?w=1480&t=st=1692634247~exp=1692634847~hmac=24ad6bf5ef1c772205d3a15c92f45632241c15e653106fb95e11cd1b6ad57f3d" alt="offer img..." className="img-1 img-fluid"/>
                          <div className="offer-overlay"></div>
                        </div>
                        <div className="offer-info">
                          <div className="offer-info-inner">
                            <p className="heading-bigger text-capitalized">Sale 70%</p>
                            <p className="offer-title-1 text-uppercase font-weight-bold" >Don't Miss the chance</p>
                            <button type="button" className="btn btn-outline-danger text-uppercase mt-4" >Shop now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4 d-flex flex-column justify-content-between">
                  <a href="#">
                    <div className="offer-box text-center position-relative mb-4 mb-sm-0 mb-lg-0">
                      <div className="offer-inner">
                        <div className="offer-img position-relative overflow-hidden">
                          <img src="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated_158538-8585.jpg?t=st=1692630695~exp=1692631295~hmac=b104404c1eb2740ef059f6bbe5dbfb7d975d5d373c53f74e1a07fc1a762342a0" alt="offer img..." className="img-2 img-fluid"/>
                          <div className="offer-overlay"></div>
                        </div>
                        <div className="offer-info">
                          <div className="offer-info-inner">
                            <p className="heading-bigger text-capitalized">Sale 60%</p>
                            <p className="offer-title-1 text-uppercase font-weight-bold" >Don't Miss the chance</p>
                            <button type="button" className="btn btn-outline-danger text-uppercase mt-4" >Shop now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#">
                    <div className="offer-box text-center position-relative">
                      <div className="offer-inner">
                        <div className="offer-img position-relative overflow-hidden">
                          <img src="https://img.freepik.com/free-photo/smiling-lady-model-short-blue-dress-hat-barfoot-white_231208-4357.jpg?w=1800&t=st=1692632016~exp=1692632616~hmac=50e52a7bbfbd1091eabe276657cc8e254eabc0d0b9aaca49a2fb50bf4b10ca57" alt="offer img..." className="img-2 img-fluid"/>
                          <div className="offer-overlay"></div>
                        </div>
                        <div className="offer-info">
                          <div className="offer-info-inner">
                            <p className="heading-bigger text-capitalized">Sale 50%</p>
                            <p className="offer-title-1 text-uppercase font-weight-bold" >Don't Miss the chance</p>
                            <button type="button" className="btn btn-outline-danger text-uppercase mt-4" >Shop now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

          
                <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
                  <a href="#">
                    <div className="offer-box text-center position-relative">
                      <div className="offer-inner">
                        <div className="offer-img position-relative overflow-hidden">
                          <img src="https://img.freepik.com/free-photo/portrait-young-pensive-lady-standing-t-shirt-jeans-thoughtfully-looking-camera-white-background-isolated_574295-1266.jpg?w=1800&t=st=1692632092~exp=1692632692~hmac=1476eb1ef6ab69962004e6c40ca0a15e9826b870651e0b5bfc1d19df20e40691" alt="offer img..." className="img-1 img-fluid"/>
                          <div className="offer-overlay"></div>
                        </div>
                        <div className="offer-info">
                          <div className="offer-info-inner">
                            <p className="heading-bigger text-capitalized">Sale 40%</p>
                            <p className="offer-title-1 text-uppercase font-weight-bold" >Don't Miss the chance</p>
                            <button type="button" className="btn btn-outline-danger text-uppercase mt-4" >Shop now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
    </section>

    

    <section id="products" className="products">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="headline text-center mb-5">
              <h2 className="pb-3 position-relative d-inline-block">FEATURED PRODUCTS</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <a href="#" className="d-block text-center mb-4">
              <div className="product-list">
                <div className="product-img position-relative">
                  <span className="sale">Sale</span>
                  <img src="https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1692711579~exp=1692712179~hmac=d499c599267fe03acd6af4d00dc1d650a7c185d4ffa377af5bfff4b8eec980a7" alt="Product img...." className="img-fluid blue product-img-first"/>
                  <img src="https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?w=360&t=st=1692711528~exp=1692712128~hmac=9c32aa0c0878cc8ce90f4898cab911a92c9994a03a04c99cfdb87d3bfa18334d" alt="Product img...." className="img-fluid product-img-second"/>
                </div>
                <div className="product-name pt-3">
                  <h3 className="text-capitalized">Summer sleevless blue</h3>
                  <p className="mb-0 amount">$400.00 <del>$580.00</del></p>
                  <div className="py-1">
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                  </div>
                  <button type="button" className="add-to-cart">ADD TO CART</button>
                </div>
              </div>
              
            </a>
          </div>
          <div className="col-sm-6 col-lg-4">
            <a href="#" className="d-block text-center mb-4">
              <div className="product-list">
                <div className="product-img position-relative">
                  <img src="https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?w=360&t=st=1692711528~exp=1692712128~hmac=9c32aa0c0878cc8ce90f4898cab911a92c9994a03a04c99cfdb87d3bfa18334d" alt="Product img...." className="img-fluid product-img-first"/>
                  <img src="https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1692711579~exp=1692712179~hmac=d499c599267fe03acd6af4d00dc1d650a7c185d4ffa377af5bfff4b8eec980a7" alt="Product img...." className="img-fluid blue product-img-second"/>
                </div>
                <div className="product-name pt-3">
                  <h3 className="text-capitalized">Lase water salube dress</h3>
                  <p className="mb-0 amount">$300.00</p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                  </div>
                  <button type="button" className="add-to-cart">ADD TO CART</button>
                </div>
              </div>
              
            </a>
          </div>
          <div className="col-sm-6 col-lg-4">
            <a href="#" className="d-block text-center mb-4">
              <div className="product-list">
                <div className="product-img position-relative">
                  <span className="sale">Sale</span>
                  <img src="https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1692711579~exp=1692712179~hmac=d499c599267fe03acd6af4d00dc1d650a7c185d4ffa377af5bfff4b8eec980a7" alt="Product img...." className="img-fluid blue product-img-first"/>
                  <img src="https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?w=360&t=st=1692711528~exp=1692712128~hmac=9c32aa0c0878cc8ce90f4898cab911a92c9994a03a04c99cfdb87d3bfa18334d" alt="Product img...." className="img-fluid product-img-second"/>
                </div> 
                <div className="product-name pt-3">
                  <h3 className="text-capitalized">Summer sleevless blue</h3>
                  <p className="mb-0 amount">$350.00 <del>$600.00</del></p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star"></span>
                  </div>
                  <button type="button" className="add-to-cart">ADD TO CART</button>
                </div>
              </div>
              
            </a>
          </div>
          <div className="col-sm-6 col-lg-4">
            <a href="#" className="d-block text-center mb-4">
              <div className="product-list">
                <div className="product-img position-relative">
                  <img src="https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?w=360&t=st=1692711528~exp=1692712128~hmac=9c32aa0c0878cc8ce90f4898cab911a92c9994a03a04c99cfdb87d3bfa18334d" alt="Product img...." className="img-fluid product-img-first"/>
                  <img src="https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1692711579~exp=1692712179~hmac=d499c599267fe03acd6af4d00dc1d650a7c185d4ffa377af5bfff4b8eec980a7" alt="Product img...." className="img-fluid blue product-img-second"/>
                </div>  
                <div className="product-name pt-3">
                  <h3 className="text-capitalized">Lase water salube dress</h3>
                  <p className="mb-0 amount">$500.00</p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star"></span>
                  </div>
                  <button type="button" className="add-to-cart">ADD TO CART</button>
                </div>
              </div>
              
            </a>
          </div>
          <div className="col-sm-6 col-lg-4">
            <a href="#" className="d-block text-center mb-4">
              <div className="product-list">
                <div className="product-img position-relative">
                  <span className="sale">Sale</span>
                  <img src="https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1692711579~exp=1692712179~hmac=d499c599267fe03acd6af4d00dc1d650a7c185d4ffa377af5bfff4b8eec980a7" alt="Product img...." className="img-fluid blue product-img-first"/>
                  <img src="https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?w=360&t=st=1692711528~exp=1692712128~hmac=9c32aa0c0878cc8ce90f4898cab911a92c9994a03a04c99cfdb87d3bfa18334d" alt="Product img...." className="img-fluid product-img-second"/>
                </div>
                <div className="product-name pt-3">
                  <h3 className="text-capitalized">Summer sleevless blue</h3>
                  <p className="mb-0 amount">$450.00 <del>$680.00</del></p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                  </div>
                  <button type="button" className="add-to-cart">ADD TO CART</button>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-4">
            <a href="#" className="d-block text-center mb-4">
              <div className="product-list">
                <div className="product-img position-relative">
                  <img src="https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?w=360&t=st=1692711528~exp=1692712128~hmac=9c32aa0c0878cc8ce90f4898cab911a92c9994a03a04c99cfdb87d3bfa18334d" alt="Product img...." className="img-fluid product-img-first"/>
                  <img src="https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1692711579~exp=1692712179~hmac=d499c599267fe03acd6af4d00dc1d650a7c185d4ffa377af5bfff4b8eec980a7" alt="Product img...." className="img-fluid blue product-img-second"/>
                </div> 
                <div className="product-name pt-3">
                  <h3 className="text-capitalized">Lase water salube dress</h3>
                  <p className="mb-0 amount">$350.00</p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                    <span className="ti-star"></span>
                  </div>
                  <button type="button" className="add-to-cart">ADD TO CART</button>
                </div>
              </div>
              
            </a>
          </div>
        </div>
        

        <div className="overflow-hidden my-5">
          <div className="row">
            <div className="col-sm-12 up-to-off">
              <img src="https://img.freepik.com/free-photo/time-prepare-holidays-cheeky-gorgeous-smiling-girl-with-red-curly-hair-pointing-right-advice_1258-126299.jpg?w=1380&t=st=1692717940~exp=1692718540~hmac=dd178151d0508b6c9525183c5e28c3fe8a3578cb84caf3d8557abfe4f48da95e" alt="Banner img.." className="img-fluid w-100"/>
              <div className="off-content">
                <h2>UP TO 75% OFF SPRING SALE</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>



    <section id="special" className="special">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="headline text-center mb-5">
              <h2 className="pb-3 position-relative d-inline-block">SUMMER SPECIAL</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-7 text-center text-lg-start">
            <div className="countdown-container">
              <h2 className="text-uppercase">Women Green Dress</h2>
              <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi veniam possimus eius. Aliquid, excepturi. Numquam expedita porro dolorum est consectetur quas animi eos quaerat sunt ipsa quibusdam, laborum recusandae.</p>
              <ul className="list-unstyled countdown-counter">
                <li><span className="fs-1 d-block" id="days">00</span>Days</li>
                <li><span className="fs-1 d-block" id="hours">00</span>Hr</li>
                <li><span className="fs-1 d-block" id="min">00</span>Min</li>
                <li><span className="fs-1 d-block" id="sec">00</span>Sec</li>
              </ul>
              <span className="countdown-price h3 d-block mb-4">$420.00 <del>$600.00</del></span>
              <button type="button" className="btn btn-danger">ADD TO CART</button>
            </div>
          </div>
          <div className="col-sm-12 col-lg-5">
            <div className="special-img position-relative">
              <span className="sale">Sale</span>
              <img src="https://img.freepik.com/premium-photo/women-s-summer-green-dress_917664-14479.jpg?w=360" alt="special img..." className="img-fluid w-100"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    

    <section id="testimonial" className="testimonial">

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="headline text-center mb-5">
              <h2 className="pb-3 position-relative d-inline-block">Testimonials</h2>
            </div>
          </div>

          <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">

            <div id="carouselExampleDark2" className="carousel carousel-dark slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="0" className="active" ></button>
                <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="1" ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="user-info">
                    <div className="row">
                      <div className="col-sm-12">
                        <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1692799020~exp=1692799620~hmac=ef6bcf7a52ceeebf4eaa8a0f89a77bc9e19387a6dd952a377a8c491de4c12bee" alt="user img..." className="img-fluid"/>
                      </div>
                    </div>
                    <div className="username">
                      <h3>Martin johe, Co-Founder/ CEO</h3>
                      <span>Fastcompany ltd.</span>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam facere nemo repellat nam ipsa perspiciatis aut laudantium natus, omnis provident repellendus at atque, exercitationem, dolorem quaerat labore expedita nihil nisi!</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="user-info">
                    <div className="row">
                      <div className="col-sm-12">
                        <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1692799265~exp=1692799865~hmac=3aea4aaa30fe68f59e78c384bf73b36ae6fc14cad29637971490f28b03052691" alt="user img..." className="img-fluid"/>
                      </div>
                    </div>
                    <div className="username">
                      <h3>John Doe, Co-Founder/ CEO</h3>
                      <span>Fastcompany ltd.</span>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam facere nemo repellat nam ipsa perspiciatis aut laudantium natus, omnis provident repellendus at atque, exercitationem, dolorem quaerat labore expedita nihil nisi!</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">
                  <span className="ti-angle-left slider-icon"></span>
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">
                  <span className="ti-angle-right slider-icon"></span>
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="contact">
      <div className="contact">
        <div className="container">
          <div className="mb-5 text-center">
            <h5>Let's Start a Conversation!</h5>
            <h2 className="fw-bold">Contact Us</h2>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-5">
              <h4 className="fw-bold">Contact Info</h4>
              <ul className="list-unstyled info">
                <li className="d-flex align-items-center">
                  <span className="pe-3 ti-location-pin fs-5"></span>
                  <p><a href="">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a></p>
                </li>
                <li className="d-flex align-items-center">
                  <span className="pe-3 ti-mobile fs-5"></span>
                  <p><a href="">+92 999-9999999</a></p>
                </li>
                <li className="d-flex align-items-center">
                  <span className="pe-3 ti-envelope fs-5"></span>
                  <p><a href="">Info@eshop.in</a></p>
                </li>
              </ul>
            </div>

            <div className="col-lg-7 col-md-7 pt-lg-0 pt-md-0 pt-4">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-inp">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Your Name"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inp">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Email Address"/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inp">
                      <textarea name="message" className="textarea" id="message" cols="30" rows="4" placeholder="Enter Your Message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inp">
                      <button type="button" className="btn btn-danger"><span className="ti-rocket pe-2 fs-5"></span>Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  

    <footer>
      <div className="p-3 copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-start">
              <p className="my-0">Copyright &copy; 2023 <a href="#">E-SHOP </a>All Rights Reserved</p>
            </div>
            <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-end">
              <p className="my-0">Designed by NOMAN</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </Fragment>
  )
}

export default Index