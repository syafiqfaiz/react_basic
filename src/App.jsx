// import {useState} from 'react'

// function App() {
//   const [nombor, setNombor] = useState(100)

//   return (
//     <div className="container">
//       <div>Hello World</div>

//       {nombor}
//       <div
//         className="btn btn-primary"
//         onClick={()=>{
//           setNombor(nombor + 1)
//         }}
//       >Tambah saya</div>
//     </div>
//   )
// }

// export default App;


import { useState } from "react"
import Button from "./components/Button"
function App() {
  const [firstNumbers, setFirstNumbers] = useState('')
  const [secondNumbers, setSecondNumbers] = useState('')
  const [selectedOperation, setSelectedOperation] = useState('')
  const [jawapan, tentukanJawapan] = useState('')
  
  // on click, kita nak tambah dalam list of numbers
  const onClickNumber = (nombor) => {
    if (selectedOperation === ''){
      setFirstNumbers(firstNumbers + nombor)
    } else {
      setSecondNumbers(secondNumbers + nombor)
    }
  }

  const numberRow = (numberArray) => (
    <div className="row align-items-center mt-2">
      {numberArray.map((number)=>(
        <div className="col" key={number} >
          <Button label={number} handleClick={() => onClickNumber(number)} type={''}/>
        </div>
      ))}
    </div>
  )

  const onClickoperation = (operation) => {
    setSelectedOperation(operation)
  }

  const operationRow = (operationArray) => (
    <div className="row align-items-center mt-2">
      {operationArray.map((operation)=>(
        <div className="col" key={operation} >
          <Button label={operation} handleClick={() => onClickoperation(operation)} type={'warning'}/>
        </div>
      ))}
    </div>
  )

  const kiraJawapan = () => {
    if (selectedOperation === '+') {
      tentukanJawapan(parseInt(firstNumbers) +  parseInt(secondNumbers))
    } else if (selectedOperation === '-') {
      tentukanJawapan(parseInt(firstNumbers) -  parseInt(secondNumbers))
    } else if (selectedOperation === 'x') {
      tentukanJawapan(parseInt(firstNumbers) *  parseInt(secondNumbers))
    } else if (selectedOperation === '/') {
      tentukanJawapan(parseInt(firstNumbers) /  parseInt(secondNumbers))
    }
  }

  const reset = () => {
    setFirstNumbers('')
    setSecondNumbers('')
    setSelectedOperation('')
    tentukanJawapan('')
  }

  return (
    <div className="container">
      <div className="flex">
        <div className="border border-primary">{firstNumbers} {selectedOperation} {secondNumbers}</div>
        <div className="m-auto align-items-center">
          {numberRow([1,2,3])}
          {numberRow([4,5,6])}
          {numberRow([7,8,9])}
        </div>
        {operationRow(['+', '-', '/', 'x'])}
        <div className="mt-2">
          <Button label={'Selesaikan'} handleClick={kiraJawapan} type={'warning'}/>
        </div>
        <div className="mt-2">
          <Button label={'Reset'} handleClick={reset} type={'warning'}/>
        </div>
        {jawapan}
      </div>
    </div>
  )
}

export default App
