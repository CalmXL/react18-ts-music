import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}

// interface ISnapshot {
//   address: string
// }

class Demo extends PureComponent<IProps, IState> {
  // name = 'aaa'
  // state = {
  //   message: 'hello',
  //   counter: 99
  // }

  // getSnapshotBeforeUpdate() {
  //   return {
  //     address: 'dasdas'
  //   }
  // }

  constructor(props: IProps) {
    super(props)

    this.state = {
      message: 'hello, world',
      counter: 100
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2>Demo</h2>
        name: {this.props.name}
        age: {this.props.age}
        message: {this.state.message}
        counter: {this.state.counter}
      </div>
    )
  }
}

export default Demo
