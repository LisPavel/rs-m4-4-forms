import React, { ChangeEventHandler, useEffect, useState } from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import TextInput from "./components/TextInput";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setInputValue(ev.target.value);
  };
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <div className="App">
      <Signin />
      <Signup />
      <TextInput label="qwer" value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default App;
