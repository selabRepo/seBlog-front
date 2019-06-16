import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import { blogSave } from '../../ducks/event';

class BlogWriteHeader extends Component {

    handleSave = (evt) => {
        evt.preventDefault()
        console.log(this.props.blog)
        this.props.blogSave(true)
        // TODO: api Server로 전송
    }

    render() {
        return (
            <div>
                <MDBBtn color="primary">뒤로가기</MDBBtn>
                <MDBBtn color="primary" style={{marginLeft: 20}} onClick={this.handleSave}>저장하기</MDBBtn>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    blog: state.blog,
});
  
  // props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    blogSave: (isSave) => dispatch(blogSave(isSave)),
});

export default connect(mapStateToProps,mapDispatchToProps)(BlogWriteHeader);
