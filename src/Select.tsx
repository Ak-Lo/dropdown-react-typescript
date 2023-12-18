import { useState } from "react"
import styles from "./app.module.css"

export type ValueType = string | undefined

type SelectPropsSingle = {
  multiSel?: false
  dropItems: Array<string>
  value?: ValueType
  onChange: (o: ValueType | undefined) => void
}

type SelectPropsMulti = {
  multiSel: true
  dropItems: Array<string>
  value: ValueType[]
  onChange: (o: ValueType[]) => void
}

type SelectProps = SelectPropsSingle | SelectPropsMulti

function Select( {multiSel, onChange, dropItems, value}: SelectProps ) {

  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  function clearOptions() {
    multiSel ? onChange([]) : onChange(undefined)
  }

  function selectOption(option: ValueType){
    if (multiSel){ 
      if (value.includes(option)) {
        onChange(value.filter(o => o !== option))
      } else {
        onChange([...value, option])
      }

    }
    else {
      onChange(option) 
    }
   
  }


    return (
      <>
        <div className={styles.container}>          
          <div className={styles.initialvalue} onClick={() => setMenuVisible(true)}>
            {value} 
            <div className={styles.menuButtons}> 
              <button onClick={(e) => {e.stopPropagation(); clearOptions()}}>x</button>
              <button onClick={(e) => {e.stopPropagation(); setMenuVisible(prev => !prev)}}>{">"}</button>
            </div>
          </div>     
          <div className={menuVisible ? styles.items : styles.menuHidden}>
            {dropItems.map((dropItem, index) => {
              return (
                <p key={index} onClick={(e) => {e.stopPropagation(); selectOption(dropItem); setMenuVisible(false)}}>
                  {dropItem}
                </p>
              )
            })}
          </div>
        </div>
      </>
    )
}


export default Select