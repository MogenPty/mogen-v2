export default function PaymentOptions() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-black mb-6">PAYMENT OPTIONS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 neo-brutalist-border neo-brutalist-shadow">
          <h3 className="font-black text-lg mb-3">💳 FULL PAYMENT</h3>
          <p className="font-bold">Pay in full and save 10% on your project</p>
        </div>
        <div className="bg-pink-100 p-6 neo-brutalist-border neo-brutalist-shadow">
          <h3 className="font-black text-lg mb-3">📅 SPLIT PAYMENT</h3>
          <p className="font-bold">50% upfront, 50% on completion</p>
        </div>
        <div className="bg-lime-100 p-6 neo-brutalist-border neo-brutalist-shadow">
          <h3 className="font-black text-lg mb-3">📱 EASY PAYMENTS</h3>
          <p className="font-bold">Bank transfer, EFT, or cash</p>
        </div>
      </div>
    </div>
  );
}
