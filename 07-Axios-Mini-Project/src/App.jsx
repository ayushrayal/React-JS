import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getdata() {
    setLoading(true);
    try {
      const newusers = [...user];
      const response = await axios.get("https://randomuser.me/api/");
      newusers.push(response.data.results[0]);
      setUser(newusers);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch user data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="main">
      <div className="upper">
        <button onClick={getdata} disabled={loading}>
          {loading ? "Loading..." : "Get Data"}
        </button>
      </div>

      <div className="lower">
        {
          user.map((data, idx) => {
            return <div className="card" key={idx}>
              <img src={data.picture.large} alt={`${data.name.first} ${data.name.last}`} />
              <h2>{data.name.first} {data.name.last}</h2>
              <h6>{data.email} {data.phone}</h6>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default App;
