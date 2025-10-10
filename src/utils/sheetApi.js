import Papa from "papaparse";

export async function fetchProducts() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRY4dXr1U1JwhbQEnxBdcNSIiVNlplHfYrAZ1jAfS6eap3-H1VvkpmoNmi7s0tMAbT1vGwSBhGtWjJW/pub?gid=0&single=true&output=csv";

  // Add timestamp to bypass browser/edge caching
  const timestamp = `t=${Date.now()}`;
  const separator = url.includes("?") ? "&" : "?";
  const finalUrl = url + separator + timestamp;

  console.log("Fetching CSV from:", finalUrl);

  const res = await fetch(finalUrl, { cache: "no-store" });
  if (!res.ok) {
    console.error("Failed to fetch CSV:", res.status, res.statusText);
    return [];
  }

  const csvText = await res.text();
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });

  return parsed.data
    .filter(row => row["Amazon Link"] && row["Product Name"] && row["Slug"])
    .map(row => ({
      affiliate_link: row["Amazon Link"],
      name: row["Product Name"],
      description: row["Description"],
      slug: row["Slug"],
    }));
}
