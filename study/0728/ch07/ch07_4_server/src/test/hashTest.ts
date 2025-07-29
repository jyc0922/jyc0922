import * as U from '../utils'

const hashTest = async () => {
  const password = '1234'
  try {
    const hashed = await U.hashPasswordP(password)
    console.log('hashed', hashed)
    const same = await U.comparePasswordP(password, hashed)
    console.log('same:', same)
    const notSame = await U.comparePasswordP('abcd1234', hashed)
    console.log('notSame:', notSame)
  } catch (e) {
    if (e instanceof Error) console.log('error', e.message)
  }
}
hashTest()
