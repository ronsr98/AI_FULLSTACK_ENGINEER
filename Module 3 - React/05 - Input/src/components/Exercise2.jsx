import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  const handleSelect = (e) => {
    const chosen = e.target.value;
    setFruit(chosen);
    // setFruit is async, so we log the value we just grabbed,
    // and read name from state like the exercise asked
    console.log(`${name} selected ${chosen}`);
  };

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select id="select-input" onChange={handleSelect} value={fruit}>
        <option value="">-- pick a fruit --</option>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="mango">mango</option>
      </select>
    </div>
  );
};

export default Exercise2;
