// utils/fetchProducts.js
export async function fetchProducts() {
  const SHEET_ID = "1sbkKBH-W-jSwr_ib1S6nuQvIcXE-MrbgEOoSmKlkYAU"; // your sheet ID
  const API_KEY = "AIzaSyAMIHJnHDZwoVJJcY601csW6_Mw5_4TLNA";    // your API key
  const RANGE = "Sheet1!A:D"; // columns: Amazon Link, Product Name, Description, Slug

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

  try {
    const res = await fetch(url, { cache: "no-store" }); // no caching
    if (!res.ok) {
      console.error("Failed to fetch sheet:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();

    if (!data.values || data.values.length < 2) return [];

    const [headers, ...rows] = data.values;

    const products = rows.map((row) => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index] || "";
      });
      return {
        affiliate_link: obj["Amazon Link"],
        name: obj["Product Name"],
        description: obj["Description"],
        slug: obj["Slug"],
      };
    });

    // Filter out rows with missing essential info
    return products.filter(
      (p) => p.affiliate_link && p.name && p.slug
    );
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}
