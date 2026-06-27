import { useState } from "react";

const Exercise1 = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleChange = (event, property) => {
    setPerson({ ...person, [property]: event.target.value });
  };

  // read both values straight from state (the proper React way)
  const goToBar = () => {
    alert(`Come in ${person.name}, you're ${person.age} - that's good enough`);
  };

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => handleChange(e, "name")}
        value={person.name}
      />
      <input
        id="age-input"
        onChange={(e) => handleChange(e, "age")}
        value={person.age}
      />
      <button onClick={goToBar}>Go to Bar</button>
    </div>
  );
};

export default Exercise1;
