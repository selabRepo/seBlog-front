import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './_BlogCategory.scss'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../ducks/category'
import * as blogListActions from '../../ducks/blogList'
import { connect } from 'react-redux'
class BlogCategory extends Component {
  ALL = -1
  componentDidMount(prevProps, prevState) {
    this.setCategories()
  }
  setCategories = () => {
    const { category } = this.props
    const { isOnloadSuccess } = category
    const { CategoryActions } = this.props
    if (isOnloadSuccess === false) {
      CategoryActions.setCategories()
    }
  }

  handleClickCategory = categoryID => evt => {
    const { BlogListActions } = this.props
    if (categoryID === this.ALL) {
      BlogListActions.getBlogList({})
      return false
    }
    this.props.BlogListActions.getBlogListByCategory({ categoryID })
    return false
  }
  shouldComponentUpdate(prevProps, prevState) {
    return this.props.category !== prevProps.category
  }
  render() {
    const { category } = this.props.category
    return (
      <div className="NavCategory">
        <ul>
          <li className="category" onClick={this.handleClickCategory(this.ALL)}>
            <a href="#">전체</a>
          </li>
          {category &&
            category.length > 1 &&
            category.map(cateElement => (
              <li className="category" onClick={this.handleClickCategory(cateElement.id)}>
                <a href="#">{cateElement.categoryName}</a>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

BlogCategory.propTypes = {
  CategoryActions: PropTypes.func,
  category: PropTypes.any,
}

export default connect(
  state => ({
    category: state.category,
  }),
  dispatch => ({
    CategoryActions: bindActionCreators(categoryActions, dispatch),
    BlogListActions: bindActionCreators(blogListActions, dispatch),
  }),
)(BlogCategory)
