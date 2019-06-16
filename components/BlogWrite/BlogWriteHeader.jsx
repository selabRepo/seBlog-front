import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import { connect } from "react-redux";

class BlogWriteHeader extends Component {

    handleSave = (evt) => {
        evt.preventDefault()
        console.log(this.props.category.category)
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

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    category: state.category,
});
  
  // props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(BlogWriteHeader);
