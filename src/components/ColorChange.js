import { useState } from "react";
import HexConverter from "./HexConverter";

export default function ColorChange() {
  const [hexValue, setHex] = useState('#ffffff');
  const [value, setValue] = useState('rgb(255,255,255)');

  const hexChange = ({target}) => {
    const hex = target.value;
    const hexChange = HexConverter(hex);
    setHex(hex);
    setValue(hexChange ? `rgb(${hexChange.r}, ${hexChange.g}, ${hexChange.b})` : 'Ошибка');

    if (hex.length < 7) {
      setValue('')
      return;
    }
  }

  return (
    <div className="change-color" style={{backgroundColor: value}}>
      <form className="change-form" onSubmit={(event) => event.preventDefault()}>
        <input className="change-input" type="text" value={hexValue} onChange={hexChange}/>
        <span className="change-text">{value}</span>
      </form>
    </div>
  )
}