import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";
import BlogOverview from '../BlogOverview';

class BlogList extends Component {

    makeBlogList = () => {
        
    }
    render() {
        const myData = ['a','b','c']
        return (
        <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody>
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                블로그 포스팅 
              </h2>
              <p className="text-center w-responsive mx-auto mb-5">
                SE 기술 블로그 내용
              </p>
              {myData && myData.map(data => 
                <BlogOverview
                    data={data}
                />)
              }
            </MDBCardBody>
          </MDBCard>
        );
    }
}

BlogList.propTypes = {

};

export default BlogList;
