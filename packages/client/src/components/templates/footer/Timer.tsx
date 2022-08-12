import { useCarts } from 'contexts/CartProvider'
import { useEffect, useState } from 'react'

const Timer = ({ initCart }: any) => {
  const [seconds, setSeconds] = useState(10)
  const { carts } = useCarts()

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (seconds === 0) {
        initCart()
        clearInterval(countdown)
      }
    }, 1000)

    return () => clearInterval(countdown)
  }, [seconds, initCart])

  useEffect(() => {
    setSeconds(10)
  }, [carts])

  return (
    <div onClick={() => setSeconds(10)}>
      <div>시간 연장버튼</div>
      <div> {seconds < 10 ? `0${seconds}` : seconds} </div>
    </div>
  )
}

export default Timer
