// import {Link} from 'react-router-dom' 
import {Link} from '../../components'

export default function NavigationBar() {
  return (
    <div className='flex p-4 bg-gray-100'>
      <Link to="/" className='btn btn-link'>Home 홈페이지</Link>
      <Link to="/board" className='btn btn-linkml-4'>Board 게시판</Link>
    </div>
  )
}
