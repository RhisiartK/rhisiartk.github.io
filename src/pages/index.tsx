import * as React from 'react'
import IndexPage, {IndexAsString} from './index2'
import { useState } from 'react'
import Typist from 'react-typist';

function Index() {
  console.log(IndexAsString)

  const [stringTyped, setStringTyped] = useState(false)

  const onTypingDone = () => {
    setTimeout(() => {
      setStringTyped(true)
    }, 3000)
  }

  return !stringTyped ? <Typist onTypingDone={onTypingDone} avgTypingDelay={10} cursor={{blink: true, show: true}}>
    <pre>{'function Index() {'}</pre><br/>
    <pre>{'  return <React.Fragment>'}</pre><br/>
    <pre>{'    <div>'}</pre><br/>
    <pre>{'    <Link to="/test1"><a className="btn btn-primary">Test 1</a></Link>'}</pre><br/>
    <pre>{'    <Link to="/test2"><a className="btn btn-primary">Test 2</a></Link>'}</pre><br/>
    <pre>{'    <br/>'}</pre><br/>
    <pre>{'    Hello World!'}</pre><br/>
    <pre>{'    </div>'}</pre><br/>
    <pre>{'  </React.Fragment>'}</pre><br/>
    <pre>{'}'}</pre><br/>
  </Typist> : <IndexPage/>
}

export default Index
