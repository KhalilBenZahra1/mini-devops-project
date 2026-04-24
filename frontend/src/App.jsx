import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState(null);
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/info")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.error("Error fetching info:", err));
  }, []);

  const checkHealth = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/health");
      const data = await res.json();
      setHealth(data.status);
    } catch (_error) {
      setHealth("error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "Arial" }}>
      <h1>Mini DevOps Project</h1>
      <p>Frontend React + Backend FastAPI</p>

      <button
        onClick={checkHealth}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Check Backend Health
      </button>

      {health && <p style={{ marginTop: "20px" }}>Backend status: {health}</p>}

      <div style={{ marginTop: "30px" }}>
        <h2>Backend Info</h2>
        {info ? (
          <pre>{JSON.stringify(info, null, 2)}</pre>
        ) : (
          <p>Loading backend info...</p>
        )}
      </div>
    </div>
  );
}

export default App;
