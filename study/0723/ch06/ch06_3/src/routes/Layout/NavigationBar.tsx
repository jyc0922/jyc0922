import {Link as RRLink} from 'react-router-dom'
import {Link} from '../../components'

export default function NavigationBar() {
  return (
    <div className='flex justify-between bg-base-100'>
      <div className='flex p-2 navbar'>
        <Link to="/" className="btn btn-link">Home 홈페이지</Link>
        <Link to="/board" className="ml-4 btn btn-link">Board 게시판</Link>
      </div>
      <div className='flex items-center p-2'>
        <RRLink to='/login' className='btn btn-sm btn-primary'>
          Login 로그인
        </RRLink>
        <RRLink to='/signup' className='ml-4 btn btn-sm btn-secondary'>
          Signup 회원가입
        </RRLink>
        <RRLink to='/logout' className='ml-4 mr-4'>
          Logout 
        </RRLink>
      </div>
    </div>
  )
}
