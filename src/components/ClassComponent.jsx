import React from 'react'

class ClassComponent extends React.Component {
  state = {
    count: 0,
    users: []
  }

  down = () => this.setState({ count: this.state.count - 1 })

  up = () => this.setState({ count: this.state.count + 1 })

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ users: users }))

    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return false
  // }

  componentWillUnmount = () => {
    clearInterval(this.intervalId)
  }

  render = () => {
    const { name } = this.props
    const { count, users } = this.state

    return (
      <div>
        {/* <button onClick={() => this.forceUpdate()}>FORCE UPDATE</button> */}
        <div>
          <h1>Hello {name}</h1>
          <h1>{count}</h1>
          <button onClick={() => this.down()}>-</button>
          <button onClick={() => this.up()}>+</button>
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
}

export default ClassComponent
