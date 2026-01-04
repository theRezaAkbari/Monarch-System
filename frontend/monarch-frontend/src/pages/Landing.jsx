import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

export default function Landing() {
  return (
    <div className="bg-[#f6f2ee] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="text-center mt-20 px-4">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Everything you need, all in one app
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect your accounts and Monarch will do the heavy lifting to
          categorize your finances. From there, you can track, budget,
          collaborate, and set goals specific to you.
        </p>
      </section>

      {/* Features */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 items-center justify-items-center
">
        
        <FeatureCard
          label="Track"
          title="Know where you stand"
          description="From your net worth to day-to-day spending and cash flow, feel confident about where you’re at."
        />


        <FeatureCard
          label="Collaborate"
          title="Make smart money moves together"
          description="Invite your partner to see your full picture, budget together, and reach your goals faster."
        />
         <FeatureCard
          label="Budget"
          title="Budgeting that fits your life"
          description="Create a budget that flexes to your needs — and not the other way
            around."
        />
        <FeatureCard
          label="Plan"
          title=" Set goals (and crush them)"
          description="Track your goals and adjust your cash flow to make sure you stick
            the landing."
        />
      </section>

    </div>
  );
}
