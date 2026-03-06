import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read mock data once strictly on startup
const mockDataPath = path.join(__dirname, "../data/mockPerfumes.json");
const mockDataRaw = fs.readFileSync(mockDataPath, "utf-8");
const perfumes = JSON.parse(mockDataRaw);

export const getAllPerfumes = (req, res) => {
  res.json(perfumes);
};

export const getPerfumeById = (req, res) => {
  const id = parseInt(req.params.id);
  const perfume = perfumes.find((p) => p.id === id);

  if (!perfume) {
    return res.status(404).json({ error: "Perfume not found" });
  }

  res.json(perfume);
};
