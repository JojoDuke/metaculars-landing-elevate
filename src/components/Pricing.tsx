import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

const plans = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for early-stage startups",
    features: [
      "Up to 1,000 active users",
      "Basic AI onboarding flows",
      "Email support",
      "Analytics dashboard",
      "2 team members"
    ]
  },
  {
    name: "Growth",
    price: "999",
    description: "For scaling companies",
    popular: true,
    features: [
      "Up to 10,000 active users",
      "Advanced AI personalization",
      "Priority support",
      "Custom integrations",
      "5 team members",
      "A/B testing"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited active users",
      "Custom AI models",
      "24/7 dedicated support",
      "Advanced security",
      "Unlimited team members",
      "Custom features"
    ]
  }
];

const Pricing = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400">
            Choose the perfect plan for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card relative mt-12 ${
                plan.popular ? "border-primary/30" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">
                  {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-400">/month</span>
                )}
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="metallic-button w-full"
                onClick={() => setIsDialogOpen(true)}
              >
                Contact Us
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ContactDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default Pricing;