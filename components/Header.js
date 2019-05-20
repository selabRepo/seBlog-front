import React, { Component } from 'react';
import '../static/css/Header.css'
import Link from "next/Link";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleScroll = () => {
    this.setState({scroll: window.scrollY});
  }

  componentDidMount() {
    const el = document.querySelector('nav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
  }

  render() {

    const headerList = [
        { name : 'Home', link : '/'},
        { name : 'About',link : '/about'},
        { name : 'Blog', link : '/blog'},
        { name :'MYMAP', link : 'myMap'},
    ].map((headerLi,index) =>
        <Link href={headerLi.link}>
            <li className={'header_li'} key={index}>
                <h3 className={"h3-responsive text-center my-1"}>{headerLi.name}</h3>
            </li>
        </Link>
    )
    return (
      <>

        <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
          <ul className={'header_ul'}>
            <li style={{width:400}}>
                <h2 className="h1-responsive font-weight-bold text-center my-2">
                    SE LAB
                </h2>
            </li>
            {headerList}
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;