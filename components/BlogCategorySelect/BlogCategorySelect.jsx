import React from 'react'
import { connect } from 'react-redux'
import { addBlogCategory } from '../../ducks/blog'
class BlogCategorySelect extends React.Component {
  handleChange = evt => {
    this.props.addBlogCategory(evt.target.value)
  }

  render() {
    return (
      <div
        className="d-flex justify-content-between"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <div className="p-2 col-example text-left">CATEGORY</div>

        <select
          className="browser-default custom-select"
          onChange={this.handleChange}
        >
          <option>카테고리를 선택 해주세요.</option>
          <option value="java">java</option>
          <option value="javascript">javascript</option>
          <option value="database">database</option>
          <option value="react">React</option>
        </select>
      </div>
    )
  }
}
// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  category: state.category,
})

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  addBlogCategory: category => dispatch(addBlogCategory(category)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlogCategorySelect)
