import OrderProgress from "@/components/order/OrderProgress";
import { mockOrders } from "@/app/lib/mockOrders";

export default function UserOrderPage({ params }: { params: { id: string } }) {
  const order = mockOrders[params.id];

  if (!order) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-xl font-semibold">Order not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-semibold mb-2">Order #{order.id}</h1>
      <p className="text-gray-500 mb-10">Delivery to {order.county}</p>

      {/* PROGRESS */}
      <OrderProgress status={order.status} />

      {/* ORDER SUMMARY */}
      <div className="apple-card p-6 mt-12 space-y-4">
        <h2 className="font-medium">Items</h2>

        {order.items.map((item, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span>
              {item.name} × {item.quantity}
            </span>
          </div>
        ))}

        <div className="border-t pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>KES {order.total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
