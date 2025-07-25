import type { ChangeEvent } from "react"
import { useState, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts"
import * as D from '../../data'

type SignUpFormType = Record<'email' | 'password'| 'confirmPassword', string>
const initialFormState = {email:D.randomEmail(), password:'1', confirmPassword:'1'}

export default function SignUp() {
  const [{email, password, confirmPassword}, setForm] = useState<SignUpFormType>(initialFormState)
  const changed = useCallback(
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({...obj, [key]: event.target.value}))
    },
    []
  )

  const navigate = useNavigate()
  const {signup} = useAuth()
  const createAccount = useCallback(() => {
    console.log(email, password, confirmPassword)
    if (password === confirmPassword) {
      signup(email, password, ()=>navigate('/'))
    } else alert('password is not equal to confirmPassword 비밀번호가 일치하지 않습니다.')
  }, [email, password, confirmPassword, signup, navigate])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl text-center text-primary">Sign Up</h1>
          <input 
            type="text"
            className="w-full p-3 mb-4 input input-primary"
            name="email"
            placeholder="Email 입력하세요"
            value={email}
            onChange={changed('email')}
          />
          <input 
            type="password"
            className="w-full p-3 mb-4 input input-primary"
            name="password"
            placeholder="Password 입력하세요"
            value={password}
            onChange={changed('password')}
          />
          <input 
            type="password"
            className="w-full p-3 mb-4 input input-primary"
            name="confirmPassword"
            placeholder="Confirm Password 비밀번호 확인"
            value={confirmPassword}
            onChange={changed('confirmPassword')}
          />
          <button 
            type="submit"
            className="w-full btn btn-primary"
            onClick={createAccount}>
            CREATE ACCOUNT 계정생성
          </button>
        </div>

        <div className="mt-6 text-grey-800">
          Already have an account? 계정을 갖고 계신가요?
          <Link className="btn btn-link btn-primary" to="/login">LOG In</Link>
        </div>
      </div>
    </div>
  )
}
