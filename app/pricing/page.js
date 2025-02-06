"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FAQSection from "../components/pricing/FAQSection";
import ComparisonTable from "../components/pricing/ComparisonTable";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    features: [
      "5 chat rooms",
      "Basic AI assistance",
      "1GB storage",
      "Email support",
      "2 team members",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 29, annual: 290 },
    features: [
      "Unlimited chat rooms",
      "Advanced AI features",
      "25GB storage",
      "Priority support",
      "Up to 10 team members",
      "Custom integrations",
      "Analytics dashboard",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, annual: 990 },
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 dedicated support",
      "Unlimited team members",
      "Custom AI training",
      "Advanced security",
      "API access",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Header */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Simple, transparent pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center space-x-4 mt-12 mb-16"
        >
          <span className={`text-lg ${!annual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-16 h-8 bg-gray-800 rounded-full p-1 transition-colors duration-300"
          >
            <div
              className={`absolute w-6 h-6 bg-purple-500 rounded-full transition-transform duration-300 ${
                annual ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-lg ${annual ? 'text-white' : 'text-gray-400'}`}>
            Annual <span className="text-purple-500">(Save 20%)</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? 'border-purple-500 bg-gray-900/50'
                  : 'border-gray-800 bg-gray-900/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <div className="bg-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  ${annual ? plan.price.annual : plan.price.monthly}
                </span>
                <span className="text-gray-400">{plan.price.monthly === 0 ? '' : annual ? '/year' : '/month'}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-purple-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-purple-500 hover:bg-purple-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <ComparisonTable />

        {/* FAQ Section */}
        <FAQSection />

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-6">
              Contact our sales team for a personalized demo and custom pricing
              tailored to your organization's needs.
            </p>
            <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 