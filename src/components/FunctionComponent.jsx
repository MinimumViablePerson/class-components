import { useEffect, useState } from 'react'

function FunctionComponent ({ name }) {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  const down = () => setCount(count - 1)
  const up = () => setCount(count + 1)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => setUsers(users))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <div>
        <h1>Hello {name}</h1>
        <h1>{count}</h1>
        <button onClick={() => down()}>-</button>
        <button onClick={() => up()}>+</button>
      </div>

      <div>
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FunctionComponent
