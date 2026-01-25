import { OrderStatus } from "./order";

export interface Order {
  id: string;
  customerName: string;
  county: string;
  total: number;
  status: OrderStatus;
  items: {
    name: string;
    quantity: number;
  }[];
}

export const mockOrders: Record<string, Order> = {
  "123": {
    id: "123",
    customerName: "John Mwangi",
    county: "Nairobi",
    total: 200000,
    status: "out_for_delivery",
    items: [
      { name: "iPhone 17 Pro Max", quantity: 2 },
      { name: "Airpods Pro  ", quantity: 1 },
    ],
  },
};
