import React from 'react'

class BlogCategorySelect extends React.Component {


    handleChange = evt => {

    }

    render() {
        return (
            <div className="d-flex justify-content-between" style={{marginTop : 20, marginBottom: 20}}>
                <div className="p-2 col-example text-left">CATEGORY</div>

                <select className="browser-default custom-select">
                    <option>카테고리를 선택 해주세요.</option>
                    <option value="java">java</option>
                    <option value="javascript">javascript</option>
                    <option value="database">database</option>
                    <option value="react">React</option>
                </select>
            </div>
        );
    }
}

export default BlogCategorySelect;