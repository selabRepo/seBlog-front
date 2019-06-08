import React from 'react';
import { MDBBtn } from "mdbreact";
import styled from 'styled-components';


const BlogWriteHeader = ({ onBack, onSubmit }) => {
    return (
        <div>
            <MDBBtn color="primary">뒤로가기</MDBBtn>
            <MDBBtn color="primary" style={{marginLeft: 20}}>저장하기</MDBBtn>
        </div>
    );
};

export default BlogWriteHeader;
