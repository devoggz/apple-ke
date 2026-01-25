import { orderSteps, OrderStatus } from "@/app/lib/order";

export default function OrderProgress({ status }: { status: OrderStatus }) {
  const currentIndex = orderSteps.findIndex((step) => step.key === status);

  return (
    <div className="flex justify-between mt-10">
      {orderSteps.map((step, index) => {
        const active = index <= currentIndex;

        return (
          <div key={step.key} className="flex-1 text-center">
            <div
              className={`mx-auto w-4 h-4 rounded-full mb-2 ${
                active ? "bg-black" : "bg-gray-300"
              }`}
            />
            <p className={`text-xs ${active ? "text-black" : "text-gray-400"}`}>
              {step.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
