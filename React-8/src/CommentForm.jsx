import { useState } from "react";
export default function CommentForm() {
  let [formData, setFormData] = useState({
    userName: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      userName: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h4>Give a Comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          onChange={handleInputChange}
          id="userName"
          type="text"
          placeholder="username"
          value={formData.userName}
          name="userName"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          onChange={handleInputChange}
          id="remarks"
          value={formData.remarks}
          placeholder="Add few remarks"
          name="remarks"
        >
          Remarks
        </textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          onChange={handleInputChange}
          min={1}
          max={5}
          id="rating"
          type="number"
          value={formData.rating}
          name="rating"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
