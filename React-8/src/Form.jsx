import { useState } from "react";
export default function Form() {
  //   let [fullName, SetfullName] = useState("Akhil");
  //   let [userName, SetUserName] = useState("Akhil");

  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  //   let handleUserName = (event) => {
  //     // console.log(event.target.value);
  //     SetUserName(event.target.value);
  //   };

  //   let handlefullName = (event) => {
  //     // console.log(event.target.value);
  //     SetfullName(event.target.value);
  //   };

  let handleInputChane = (event) => {
    // let fieldname = event.target.name;
    // let newValue = event.target.value;
    // console.log(newValue);
    // console.log(fieldname);
    setFormData((currData) => {
      //   currData[fieldname] = newValue;
      //   return { ...currData,[fieldname]:newValue };
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">User Name</label>
      <input
        placeholder="Enter username"
        type="text"
        value={formData.userName}
        // onChange={handlefullName}
        onChange={handleInputChane}
        id="username"
        name="userName"
      />
      <br />
      <br />
      <label htmlFor="fullname">Full Name</label>
      <input
        placeholder="Enter full name"
        type="text"
        value={formData.fullName}
        // onChange={handleUserName}
        onChange={handleInputChane}
        id="fullname"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        placeholder="Password"
        type="text"
        value={formData.password}
        // onChange={handleUserName}
        onChange={handleInputChane}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </form>
  );
}
