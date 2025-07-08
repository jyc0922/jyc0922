import ReactDOM from 'react-dom/client'
import * as D from './data'

// const children = [
//   <li>
//     <a href="http://www.google.com" target="_blank">
//       <p>go to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.naver.com" target="_blank">
//       <p>go to Naver</p>
//       </a>
//   </li>,
//   <li>
//     <a href="http://www.twitter.com" target="_blank">
//       <p>go to X</p>
//       </a>
//   </li>
// ]


// const children =[0,1,2, 3, 4, 5, 6, 7, 8, 9].map((n:number) => <h3>Hello world! {n}</h3>)
// const rootVirtualDom = <ol>{children}</ol>

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>    
    <img src={D.randomAvatar()} width={200} height={200} />
  </div>
))
const rootVirtualDom = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDom)