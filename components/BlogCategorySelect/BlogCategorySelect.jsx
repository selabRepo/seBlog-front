import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../ducks/category'
import * as blogActions from '../../ducks/blog'
import './_BlogCategorySelect.scss'

class BlogCategorySelect extends React.Component {
  handleChange = evt => {
    const { BlogActions } = this.props
    BlogActions.addBlogCategory(evt.target.value)
  }

  componentDidMount(prevProps, prevState) {
    const { CategoryActions } = this.props
    CategoryActions.setCategories()
  }

  render() {
    const { category } = this.props
    return (
      <div className="categorySelectTemplate">
        <div className="categoryTitle">CATEGORY</div>
        <select className="categorySelect" onChange={this.handleChange}>
          <option>카테고리를 선택 해주세요.</option>
          {category &&
            category.map(cate => <option key={`${cate.id}`} value={`${cate.id}`}>{`${cate.categoryName}`}</option>)}
        </select>
      </div>
    )
  }
}
export default connect(
  state => ({
    category: state.category.category,
  }),
  dispatch => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
    CategoryActions: bindActionCreators(categoryActions, dispatch),
  }),
)(BlogCategorySelect)
