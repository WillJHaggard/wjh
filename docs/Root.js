import React, {Component} from 'react'
import wjh from '../src/css/wjh.css'

class Root extends Component {
  render() {
    let links = [
      { text: 'Typography', href: '#typography' },
      { text: 'Buttons', href: '#buttons' },
      { text: 'Colors', href: '#colors' },
      { text: 'Components', href: '#components' },
    ]
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: wjh }} />
        </head>
        <body>
          <h1>{links[0]}</h1>
        </body>
      </html>
    )
  }
}

export default Root
