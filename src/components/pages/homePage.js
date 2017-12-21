import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
                <header className="masthead text-center text-white d-flex" id="home">
                <div className="container my-auto">
                  <div className="row">
                    <div className="col-lg-10 mx-auto">
                      <h1 className="text-uppercase">
                        <strong>React Bootstrap4 Template</strong>
                      </h1>
                      <hr/>
                    </div>
                    <div className="col-lg-8 mx-auto">
                      <p className="text-faded mb-5">This template can help you build better websites using the Bootstrap and React framework!</p>
                      {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
                      <Link to="/detail" className="btn btn-primary btn-xl js-scroll-trigger">Find Out More</Link>
                    </div>
                  </div>
                </div>
              </header>
        );
    }
}

export default Homepage;