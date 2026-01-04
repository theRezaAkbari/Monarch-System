export default function FeatureCard({ label, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm max-w-sm">
      <p className="text-xs uppercase tracking-wide text-orange-400 font-semibold mb-2">
        {label}
      </p>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="text-sm bg-orange-500 text-white px-4 py-2 rounded-full">
        Learn more
      </button>
    </div>
  );
}
