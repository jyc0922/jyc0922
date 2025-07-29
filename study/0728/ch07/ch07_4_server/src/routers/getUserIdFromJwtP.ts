import type {Request} from 'express'
import * as U from '../utils'

export const getUserIdFromJwtP = (req: Request) =>
  new Promise<string>(async (resolve, rejects) => {
    const {authorization} = req.headers || {}
    if (!authorization) {
      rejects(new Error('JSON 토큰이 없습니다.'))
      return
    }

    try {
      const tmp = authorization.split(' ')
      if (tmp.length !== 2) rejects(new Error('헤더에서 JSON 토큰을 얻을 수 없습니다.'))
      else {
        const jwt = tmp[1]
        const decoded = (await U.jwtVerifyP(jwt)) as {userId: string}
        resolve(decoded.userId)
      }
    } catch (e) {
      if (e instanceof Error) rejects(new Error(e.message))
    }
  })
