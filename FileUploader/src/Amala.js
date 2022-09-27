import React, { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";

const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    img: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/api/v1/product", postData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(postData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="desc"
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, img: base64 })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
