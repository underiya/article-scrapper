import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../App";
const SearchForm = ({ onSearch, setLoading }) => {
  const [topic, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim() == "") {
      alert("Please enter a topic");
      return;
    }

    console.log(topic);
    const PostData = async (url, cred) => {
      setLoading(true);
      try {
        let res = await axios.post(url, { topic: cred });
        console.log(res.data.data);
        setLoading(false);
        onSearch(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    PostData(baseUrl + "/scrape", topic);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={topic}
          placeholder="Enter the topic"
          onChange={(e) => setForm(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default SearchForm;
