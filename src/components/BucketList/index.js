import React, { useState } from "react";
import Bucket from "./../Bucket";
import styles from "./bucketlist.module.css";

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
      <h1 className={styles.bucket}>WELCOME TO THE BUCKET DOME</h1>
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
          <Bucket key={index}>{item}</Bucket>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;
