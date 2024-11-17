import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

const Download: FC<IProps> = (props) => {
  console.log(props)

  return (
    <div>
      <div> name: {props.name}</div>
      <div> age: {props.age}</div>
    </div>
  )
}

Download.displayName = 'Download'

// const Download = (props: IProps) => {
//   console.log(props)

//   return (
//     <div>
//       <div> name: {props.name}</div>
//       <div> age: {props.age}</div>
//     </div>
//   )
// }

// const Download: React.FunctionComponent<IProps> = (props) => {
//   console.log(props)

//   return (
//     <div>
//       <div> name: {props.name}</div>
//       <div> age: {props.age}</div>
//     </div>
//   )
// }

export default memo(Download)
