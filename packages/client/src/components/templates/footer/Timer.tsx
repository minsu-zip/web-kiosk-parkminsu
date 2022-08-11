import { useEffect, useState } from 'react'

const Timer = ({ initCart }: any) => {
  const [seconds, setSeconds] = useState(20)

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

  return (
    <div onClick={() => setSeconds(20)}>
      <div>시간 연장버튼</div>
      <div> {seconds < 10 ? `0${seconds}` : seconds} </div>
    </div>
  )
}

export default Timer
