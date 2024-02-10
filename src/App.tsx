import React, { ChangeEventHandler, useEffect, useState } from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import TextInput from "./components/TextInput";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setInputValue(ev.target.value);
    if (ev.target.value.length > 6) {
      setInputError("some error");
    } else {
      setInputError(null);
    }
  };
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <div className="App">
      <Signin />
      <Signup />
      <TextInput
        label="qwer"
        description="ty"
        placeholder="qwer"
        value={inputValue}
        onChange={handleChange}
        error={inputError}
        withAsterisk={true}
        // radius={"xl"}
      />
    </div>
  );
}

export default App;
