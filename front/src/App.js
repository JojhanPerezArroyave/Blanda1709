import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_NEWSAPI_KEY;
const CATEGORIES = ["business","entertainment","general","health","science","sports","technology"];
const BASE = "https://newsapi.org/v2/top-headlines";

export default function App() {
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = async (cat, q) => {
    setLoading(true);
    setErr("");
    try {
      let url = `${BASE}?country=us&category=${cat}&pageSize=20&apiKey=${API_KEY}`;
      if (q.trim() !== "") {
        url += `&q=${encodeURIComponent(q)}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      if (data.status !== "ok") throw new Error(data.message || "Error");
      setArticles(data.articles || []);
    } catch (e) {
      setErr(e.message);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(category, query); }, [category, query]);

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 16 }}>
      <h1>Top headlines (US)</h1>

      <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
        <label htmlFor="cat">Category:</label>
        <select id="cat" value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>

        <input
          type="text"
          placeholder="Search keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, padding: "4px 8px" }}
        />
      </div>

      {loading && <p>Loading…</p>}
      {err && <p style={{ color: "crimson" }}>Error: {err}</p>}

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 16 }}>
        {articles.map((a, i) => (
          <li key={i} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}>
            {a.urlToImage && (
              <img
                src={a.urlToImage}
                alt={a.title || "image"}
                style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 6 }}
              />
            )}
            <h3 style={{ margin: "8px 0" }}>
              <a href={a.url} target="_blank" rel="noreferrer">{a.title}</a>
            </h3>
            <small>{a.source?.name} • {a.publishedAt && new Date(a.publishedAt).toLocaleString()}</small>
            <p>{a.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}