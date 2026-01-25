export const counties = [
  "Nairobi",
  "Kiambu",
  "Machakos",
  "Kajiado",
  "Mombasa",
  "Nakuru",
  "Kisumu",
  "Uasin Gishu",
  "Meru",
  "Nyeri",
];

export function calculateDeliveryFee(county: string): number {
  if (county === "Nairobi") return 0;

  const tier300 = ["Kiambu", "Machakos", "Kajiado"];
  const tier500 = ["Mombasa", "Nakuru", "Kisumu"];

  if (tier300.includes(county)) return 300;
  if (tier500.includes(county)) return 500;

  return 1000;
}
