import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const { bin } = req.query;
    const API_KEY = "54d796a2b9354e7fa31562694e1986e1";

    const sourceQuery = {
      size: 100,
      query: {
        bool: {
          must: [
            {
              match: { bin: bin },
            },
          ],
        },
      },
    };

    const response = await axios.get("https://data.egov.kz/api/v4/gbd_ul/v1", {
      params: {
        apiKey: API_KEY,
        source: JSON.stringify(sourceQuery),
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.log(error);
    
    return res.status(error.response?.status || 500).json({
      error: "Egov Proxy Error",
      message: error.message,
      details: error.response?.data || "No additional info",
    });
  }
}
