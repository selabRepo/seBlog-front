import React from 'react'
import { connect } from 'react-redux'
import { addBlogCategory } from '../../ducks/blog'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../ducks/category'

class BlogCategorySelect extends React.Component {
  handleChange = evt => {
    this.props.addBlogCategory(evt.target.value)
  }

  async componentWillMount() {
    const { CategoryActions } = this.props
    CategoryActions.setCategories()
  }

  render() {
    const { category } = this.props
    return (
      <div className="d-flex justify-content-between" style={{ marginTop: 20, marginBottom: 20 }}>
        <div className="p-2 col-example text-left">CATEGORY</div>
        <select className="browser-default custom-select" onChange={this.handleChange}>
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
    addBlogCategory: category => dispatch(addBlogCategory(category)),
    CategoryActions: bindActionCreators(categoryActions, dispatch),
  }),
)(BlogCategorySelect)
