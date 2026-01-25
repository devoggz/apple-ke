export type OrderStatus =
  | "confirmed"
  | "processing"
  | "out_for_delivery"
  | "delivered";

export const orderSteps: {
  key: OrderStatus;
  label: string;
}[] = [
  { key: "confirmed", label: "Order Confirmed" },
  { key: "processing", label: "Processing" },
  { key: "out_for_delivery", label: "Out for Delivery" },
  { key: "delivered", label: "Delivered" },
];
