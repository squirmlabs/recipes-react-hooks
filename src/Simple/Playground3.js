import React, { useState } from "react";

export function Playground3() {
  const [text, setText] = useState("");

  const [checked, setChecked] = useState(false);
  
  const handleCheckboxToggle = () => setChecked(prevChecked => !prevChecked);
  
  return (
    <section>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxToggle}
      />
      <ul>
        <li>{text}</li>
        <li>{checked.toString()}</li>
      </ul>
    </section>
  );
}
