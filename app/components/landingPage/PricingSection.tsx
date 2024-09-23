import Button from "@/app/common/Button";
import React from "react";

import { GrStatusGood } from "react-icons/gr";

const smallOptions = [
  "Generate up to 10 resumes",
  "Create sharable links for resumes",
  "Export to PDF or Docs",
];

const mediumOptions = [
  "Generate up to 20 resumes",
  "Create sharable links for resumes",
  "Export to PDF or Docs",
  "Share resume credits to friends",
];
const largeOptions = [
  "Generate up to 30 resumes",
  "Create sharable links for resumes",
  "Export to PDF or Docs",
  "Share resume credits to friends",
];

const PricingSection = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-14 lg:px-24">
      <div className="text-center space-y-3">
        <h2>Affordable Pricing Plans</h2>
        <p>
          Create professional resumes with ease. Choose the bundle that best
          fits your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <PricingCard
          type="Small Bundle"
          subtext="Great for occasional users who need a few resumes."
          price="5.00"
          options={smallOptions}
        />
        <PricingCard
          type="Medium Bundle"
          subtext="Ideal for users needing more resumes at a lower cost per resume."
          price="9.00"
          options={mediumOptions}
        />
        <PricingCard
          type="Large Bundle"
          subtext="Best for regular users, offering the best value per resume."
          price="12.00"
          options={largeOptions}
        />
      </div>
    </section>
  );
};

export default PricingSection;

const PricingCard = ({
  type,
  subtext,
  price,
  options,
}: {
  type: string;
  subtext: string;
  price: string;
  options?: string[];
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 space-y-8 shadow-sm">
      <div className="py-2">
        <h3 className="font-semibold text-sm">{type}</h3>
        <h1 className="font-semibold">${price}</h1>
      </div>
      <div>
        <p>{subtext}</p>
      </div>

      <ul className="space-y-6">
        {options?.map((option, index) => (
          <li key={index} className="border-b flex space-x-2 items-center pb-2">
            <GrStatusGood color="#2563eb" />
            <p>{option}</p>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Button address="/" text="Coming Soon" />
      </div>
    </div>
  );
};
