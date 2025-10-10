import Papa from "papaparse";

export async function fetchProducts() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRY4dXr1U1JwhbQEnxBdcNSIiVNlplHfYrAZ1jAfS6eap3-H1VvkpmoNmi7s0tMAbT1vGwSBhGtWjJW/pub?gid=0&single=true&output=csv";

  // Add timestamp to bypass cache and always fetch latest sheet
  const res = await fetch(url + `?t=${Date.now()}`);
  const csvText = await res.text();

  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });

  // Only read the first 4 keys
  return parsed.data.map((row) => ({
    affiliate_link: row["Amazon Link"],
    name: row["Product Name"],
    description: row["Description"],
    slug: row["Slug"],
  }));
}
