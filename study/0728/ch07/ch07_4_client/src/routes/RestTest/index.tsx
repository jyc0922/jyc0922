import GetTest from './GetTest'
import PostTest from './PostTest'
import PutTest from './PutTest'
import DeleteTest from './DeleteTest'

export default function RestTest() {
  return (
    <div>
      <p className='text-3xl font-bold text-center'>RestTest</p>
      <DeleteTest />
      <PutTest />
      <PostTest />
      <GetTest />
    </div>
  )
}
