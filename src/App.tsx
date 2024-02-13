import React, { ChangeEventHandler, useState } from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import TextInput, { Sizes, Variants } from "./components/TextInput";

const sizes: Sizes[] = ["xs", "sm", "md", "lg", "xl"];
const variants: Variants[] = ["default", "filled", "unstyled"];

function App() {
  const [size, setSize] = useState<Sizes>("sm");
  const [variant, setVariant] = useState<Variants>("default");
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  // const [inputError, setInputError] = useState<string | null>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setInputValue(ev.target.value);
    // if (ev.target.value.length > 6) {
    //   setInputError("some error");
    // } else {
    //   setInputError(null);
    // }
  };

  const handleSizeSelect: ChangeEventHandler<HTMLSelectElement> = (ev) => {
    setSize(ev.target.value as Sizes);
  };
  const handleVariantSelect: ChangeEventHandler<HTMLSelectElement> = (ev) => {
    setVariant(ev.target.value as Variants);
  };
  const handleDisabledChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setDisabled(ev.target.checked);
  };
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
        withAsterisk={true}
        size={size}
        variant={variant}
        error
        disabled={disabled}
        // variant="unstyled"
        // radius={"xl"}
      />
      <select value={size} name="size" id="size" onChange={handleSizeSelect}>
        {sizes.map((size) => (
          <option key={size}>{size}</option>
        ))}
      </select>
      <select
        value={variant}
        name="variant"
        id="variant"
        onChange={handleVariantSelect}
      >
        {variants.map((variant) => (
          <option key={variant}>{variant}</option>
        ))}
      </select>
      <label>
        disabled{" "}
        <input
          checked={disabled}
          onChange={handleDisabledChange}
          type="checkbox"
        />
      </label>
    </div>
  );
}

export default App;
