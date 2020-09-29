import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { Modal, Typography } from 'antd'

class Editor extends React.Component {
  render() {
    const { uploadFn, validateFn } = this
    const { value, onChange } = this.props

    const defaultControls = [
      'fullscreen',
      'separator',
      'undo',
      'redo',
      'separator',
      'font-size',
      'line-height',
      'letter-spacing',
      'separator',
      'text-color',
      'bold',
      'italic',
      'underline',
      'strike-through',
      'hr',
      'separator',
      'superscript',
      'subscript',
      'remove-styles',
      'emoji',
      'separator',
      'text-indent',
      'text-align',
      'separator',
      'headings',
      'list-ul',
      'list-ol',
      'blockquote',
      'code',
      'separator',
      'media',
      'separator',
      'link',
      'separator',
      'clear'
    ]
    const accepts = 'image/png, image/jpeg, image/gif, video/mp4'
    // 自定义扩展
    const extendControls = [
      'separator',
      {
        key: 'view-html', // 控件唯一标识，必传
        type: 'button',
        title: '点击查看html内容', // 指定鼠标悬停提示文案
        text: '查看html', // 指定按钮文字，此处可传入jsx，若已指定html，则text不会显示
        onClick: () => {
          const { info } = Modal
          const curHtml = BraftEditor.createEditorState(value).toHTML()
          info({
            width: '40%',
            height: '40%',
            icon: false,
            title: (
              <Typography.Paragraph copyable={{ text: curHtml }}>
                当前内容的 HTML
              </Typography.Paragraph>
            ),
            maskClosable: true,
            okText: '关闭',
            content: curHtml
          })
        }
      }
    ]

    return (
      <BraftEditor
        controls={defaultControls}
        media={{
          uploadFn,
          validateFn,
          accepts
        }}
        forceNewLine
        value={BraftEditor.createEditorState(value)}
        onChange={onChange}
        extendControls={extendControls}
      />
    )
  }
}

export default Editor
