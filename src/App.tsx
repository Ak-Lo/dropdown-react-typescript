import { useState } from "react"
import Select from "./Select"
import {ValueType} from "./Select"

function App() {
  const dropItems = [
    "one", 
    "two",
    "three",
    "four"
  ]

  // type TMultiselect = string | undefined
 
  const [value, setValue] = useState<string | undefined>(dropItems[0])
  const [valueMulti, setValueMulti] = useState<ValueType[]>([])

  // function onChange(e: MouseEvent<HTMLButtonElement | HTMLDivElement>, item: string | undefined){
  //   e.stopPropagation();
  //   setValue(item);
  // }

  return (
    <>
      <Select onChange={setValue} dropItems={dropItems} value={value}/>
      <Select onChange={setValueMulti} dropItems={dropItems} value={valueMulti} multiSel/>
    </>
  )
}

export default App
