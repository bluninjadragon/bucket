import React, { useState } from "react";

function BucketList() {
  const [bucket, setBucket] = useState("");
  const [bucketList, setBucketList] = useState([]);

  const handleChange = (e) => {
    setBucket(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBucketList((bucketList) => [...bucketList, bucket]);
  };

  return (
    <div>
      <h1>WELCOME TO THE BUCKET DOME</h1>
      <div>You're typing with: {bucket}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          name="text"
          value={bucket}
          onChange={handleChange}
        ></input>
        <button>Add bucket list item</button>
      </form>
      <ul>
        {bucketList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;
