import React from 'react'
import Container from '@material-ui/core/Container'
import BlogWriteTemplate from "./BlogWriteTemplate";
import BlogWriteHeader from "./BlogWriteHeader";
import BlogPane from '../BlogPane'
import BlogCategorySelect from "../BlogCategorySelect/BlogCategorySelect";
import BlogWriteNotifications from '../BlogWriteNotifications'
import { connect } from 'react-redux'
import { initAllEvent } from '../../ducks/event';

class BlogWrite extends React.Component {

    render() {
        return (
            <Container>
                <BlogWriteTemplate
                    notifications={<BlogWriteNotifications/>}
                    header={<BlogWriteHeader/>}
                    editor={<BlogPane/>}
                    categorySelect={<BlogCategorySelect/>}
                    />
            </Container>
        )
    }

    componentWillUnmount() {
        this.props.initAllEvent()
    }
}
const mapStateToProps = state => ({
});

  // props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    initAllEvent: () => dispatch(initAllEvent()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BlogWrite)