import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Upload, Icon, message } from 'antd'

class BlogThumbnail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }
    this.draggerSetting = {
      name: 'file',
      multiple: false,
      action: '/fileUpload',
    }
  }

  handleModalOnOff = visible => evt => {
    this.setState({
      visible,
    })
    return false
  }

  handleChangeDragger = info => {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
      this.changeTimeoutVisible(400, false)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
      this.changeTimeoutVisible(400, false)
    }
  }
  changeTimeoutVisible = (timing, visible) => {
    setTimeout(() => {
      this.setState({
        visible,
      })
    }, timing)
  }
  render() {
    const { Dragger } = Upload
    return (
      <>
        <img className="thumbnailPicture" src="/static/img/picture.svg" onClick={this.handleModalOnOff(true)} />
        <Modal
          title="썸네일 이미지 추가"
          visible={this.state.visible}
          onOk={this.handleModalOnOff(true)}
          onCancel={this.handleModalOnOff(false)}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <Dragger {...this.draggerSetting} onChange={this.handleChangeDragger}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Drag and drop Image Or Click this section.</p>
            <p className="ant-upload-hint">이미지 파일만 올려주세요.</p>
          </Dragger>
        </Modal>
      </>
    )
  }
}

BlogThumbnail.propTypes = {}

export default BlogThumbnail
