import React, { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";

const Form = () => {
  const [postData, setPostData] = useState({
    days: "",
    title: "",
    description: "",
    img: "",
    rate: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/v1/package", postData, {
        headers: {
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmMwYzg3MTMyMTM1NTZkMjc0Mjk0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDE4OTU0NywiZXhwIjoxNjY0MTkwNDQ3fQ.EQPG6lnQ9d9xIlmTU1xReIgCuzF4eZY0BB3FOxApWvM",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(postData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="days"
          value={postData.days}
          onChange={(e) =>
            setPostData({ ...postData, days: e.target.value })
          }
        />
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
        <input
          type="text"
          placeholder="location"
          value={postData.location}
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="rate"
          value={postData.rate}
          onChange={(e) => setPostData({ ...postData, rate: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
