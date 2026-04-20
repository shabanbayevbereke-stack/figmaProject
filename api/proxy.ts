import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios, { AxiosError } from "axios";
interface EGovErrorResponse {
  message?: string;
  code?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const { bin } = req.query;

    if (!bin) {
      return res.status(400).json({
        error: "Missing 'bin' query parameter",
      });
    }

    const API_KEY = import.meta.env.VITE_API_KEY;

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
  } catch (error) {
    const axiosError = error as AxiosError<EGovErrorResponse>;

    console.error("Egov Proxy Error:", axiosError.message);

    return res.status(axiosError.response?.status || 500).json({
      error: "Egov Proxy Error",
      message: axiosError.message,
      details: axiosError.response?.data || "No additional info",
    });
  }
}
