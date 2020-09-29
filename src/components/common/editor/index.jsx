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
        title: '点击查看 HTML 内容', // 指定鼠标悬停提示文案
        text: '查看 HTML', // 指定按钮文字，此处可传入jsx，若已指定html，则text不会显示
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
      },
      'separator',
      {
        key: 'to-github', // 控件唯一标识，必传
        type: 'button',
        title: '查看源码', // 指定鼠标悬停提示文案
        text: (
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4="
            alt="github"
            width="26"
          />
        ),
        onClick: () => {
          const w = window.open('about:blank')
          w.location.replace('https://github.com/hsl947/Braft-Editor')
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
