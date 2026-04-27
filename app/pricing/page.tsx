import PricingAddOns from "@/components/pricing/add-ons";
import PricingHeader from "@/components/pricing/header";
import PaymentOptions from "@/components/pricing/payment-options";
import PricingList from "@/components/pricing/pricing-list";

export default function Pricing() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PricingHeader />

        {/* Pricing Cards */}
        <PricingList />

        {/* Add-ons */}
        <PricingAddOns />

        {/* FAQ Pricing */}
        <PaymentOptions />
      </div>
    </div>
  );
}
