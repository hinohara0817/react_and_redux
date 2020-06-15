// typeとそれに対応する値をもつ
//action creater
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => {
  return //action
  {
    type: INCREMENT
  }
}

export const decrement = () => ({
  type: DECREMENT
})
