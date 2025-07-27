import { useMemo } from "react"
import CustomerComment from "./CustomerComment"
import { Div } from "../../components"
import * as D from '../../data'

export default function Promotion() {
  const comments = useMemo(() => D.makeArray(3).map(D.makeRandomCustomerComment), [])
  const children = useMemo(
    () => comments.map(comment => (
    <CustomerComment key={comment.uuid} customerComment={comment} />
  )), 
  [comments]
)

  return (
    <section className="w-full mt-4">
      <h2 className="ml-4 text-5xl font-bold">What our customers say 고객님의 목소리:</h2>
      <div className="flex justify-between w-full p-4">
        <Div width="15%" minWidth="15%"
         className="flex items-center justify-center text-white bg-primary">
         Your message here 메시지를 확인하세요
        </Div>
        <div className="flex flex-wrap justify-center p-4 mt-4">{children}</div>
        <Div width="15%" minWidth="15%"
         className="flex items-center justify-center text-white bg-primary">
         Your advertizement here 광고를 확인하세요
        </Div>
      </div>
    </section>
  )
}
