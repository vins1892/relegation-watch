// pages/api/football.js
// Server-side proxy → football-data.org (no CORS issues)

const API_BASE = "https://api.football-data.org/v4";

export default async function handler(req, res) {
  const { path } = req.query;
  if (!path) return res.status(400).json({ error: "Missing path param" });

  const apiKey = process.env.FOOTBALL_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "FOOTBALL_API_KEY not set in environment variables" });

  const url = `${API_BASE}/${Array.isArray(path) ? path.join("/") : path}`;

  try {
    const upstream = await fetch(url, {
      headers: { "X-Auth-Token": apiKey },
    });
    const data = await upstream.json();
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600"); // cache 5 min
    res.status(upstream.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
