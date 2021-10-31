import { Link } from 'react-router-dom'
import * as React from 'react'

function Index() {
  return <React.Fragment>
    <div>
    <Link to="/test1"><a className="btn btn-primary">Test 1</a></Link>
      <Link to="/test2"><a className="btn btn-primary">Test 2</a></Link>
    <br/>
    Hello World!
    </div>
  </React.Fragment>
}

export default Index

const indexString = 'function Index() {\n' +
  '  return <React.Fragment>\n' +
  '    <div>\n' +
  '    <Link to="/test1">Test 1</Link>\n' +
  '    <Link to="/test2">Test 2</Link>\n' +
  '    <br/>\n' +
  '    Hello World!\n' +
  '    </div>\n' +
  '  </React.Fragment>\n' +
  '}'

export {indexString as IndexAsString}
