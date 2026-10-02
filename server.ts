import "./loadEnv";
import express from "express";
import cors from "cors";
import { analyzeProcesses } from "./src/api/analyze.js";
import type { FormData } from "./src/types/saas.js";

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Analyze endpoint
app.post("/api/analyze", async (req, res) => {
  try {
    const data: FormData = req.body;
    const result = await analyzeProcesses(data);

    if ("erro" in result) {
      return res.status(422).json(result);
    }

    res.json(result);
  } catch (err) {
    console.error("Erro na API /analyze:", err);
    res.status(500).json({ error: "Erro interno ao processar análise" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 SaaS API servidor rodando em http://localhost:${PORT}`);
});
