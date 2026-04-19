import fs from "fs/promises";
import path from "path";

// Vercel serverless functions have a read-only filesystem except for /tmp.
// Data stored in /tmp is ephemeral and will not persist across requests.
// For persistent storage in production, a database like Supabase should be used.
const isVercel = process.env.VERCEL === "1";
const DATA_DIR = isVercel 
  ? path.join("/tmp", "data") 
  : path.join(process.cwd(), "data");

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

export async function appendToJsonFile(filename: string, data: Record<string, unknown>) {
  await ensureDataDir();

  const filePath = path.join(DATA_DIR, filename);
  let existing: Record<string, unknown>[] = [];

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    existing = JSON.parse(fileContent);
  } catch {
    // File doesn't exist yet, start fresh
  }

  existing.push(data);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

  return data;
}

export async function readJsonFile(filename: string) {
  await ensureDataDir();

  const filePath = path.join(DATA_DIR, filename);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch {
    return [];
  }
}
