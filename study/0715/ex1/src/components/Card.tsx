import type { FC } from "react"

const Card: FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-1/2 p-4 mx-auto border-2 border-black">
              <img src={"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fd2u3dcdbebyaiu.cloudfront.net%2Fuploads%2Fatch_img%2F69%2F106eba47e2adf0e25a6bde989f690814.jpeg&type=sc960_832"}></img>
                <p className="ml-2">홍길동</p>
                <p className="text-gray-500">Frontend Developer</p>
                <p className="text-gray-900">React 와 Tailwind를 배우는 중입니다.</p>
            </div>
            <div className="flex flex-row justify-center gap-4 p-4 item-center">
                <p className="btn btn-primary">홈</p>
                <p className="btn btn-success">소개</p>
                <p className="btn btn-secondary">연락</p>
            </div>
            <div className="flex flex-row justify-center gap-4 p-4 item-center">
                <div className="flex flex-col items-center justify-center border-2 border-black">
                  <img className="w-80 h-60"src="https://imagescdn.gettyimagesbank.com/500/201812/jv11293874.jpg"></img>
                  <p className="ml-2">홍길동</p>
                  <p className="text-gray-500">Frontend Developer</p>
                  <p className="text-gray-900">React 와 Tailwind를 배우는 중입니다.</p>
                </div>
                <div className="flex flex-col items-center justify-center border-2 border-black">
                  <img className="w-80 h-60" src="https://imagescdn.gettyimagesbank.com/500/201907/jv11447141.jpg"></img>
                  <p className="ml-2">안중근</p>
                  <p className="text-gray-500">Frontend Developer</p>
                  <p className="text-gray-900">React 와 Tailwind를 배우는 중입니다.</p>
                </div>
                <div className="flex flex-col items-center justify-center border-2 border-black">
                  <img className="w-80 h-60" src="https://imagescdn.gettyimagesbank.com/500/201907/jv11516555.jpg"></img>
                  <p className="ml-2">윤봉길</p>
                  <p className="text-gray-500">Frontend Developer</p>
                  <p className="text-gray-900">React 와 Tailwind를 배우는 중입니다.</p>
                </div>
            </div>
            <div className="flex flex-row items-center w-full h-16 m-4 bg-blue-300">
              <div className="flex flex-row">
                <p>My Site</p>
              </div>
              <div className="flex flex-row items-center justify-end w-full h-full">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
              </div>              
            </div>
            <div className="flex flex-col items-center justify-center w-1/4 h-48 m-4 mx-auto bg-pink-300 border-2 border-gray-300 rounded-md">
              <label htmlFor="email" className="text-black">회원 로그인</label>
              <input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="px-3 py-2 m-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                id="password"
                type="password"
                placeholder="비밀번호 입력"
                className="px-3 py-2 m-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="w-1/2 h-1/4 btn btn-primary">로그인</p>
            </div>
            
        </div>
    )
}

export default Card