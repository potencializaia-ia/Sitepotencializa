import type { IncomingMessage, ServerResponse } from "node:http";
import { analyzeProcesses } from "../src/api/analyze.js";
import type { FormData } from "../src/types/saas.js";

// Função serverless da Vercel — equivalente ao POST /api/analyze do server.ts
type VercelRequest = IncomingMessage & { body: FormData };
type VercelResponse = ServerResponse & {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};

export const config = { maxDuration: 60 };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const result = await analyzeProcesses(req.body);

    if ("erro" in result) {
      return res.status(422).json(result);
    }

    res.status(200).json(result);
  } catch (err) {
    console.error("Erro na API /analyze:", err);
    res.status(500).json({ error: "Erro interno ao processar análise" });
  }
}
