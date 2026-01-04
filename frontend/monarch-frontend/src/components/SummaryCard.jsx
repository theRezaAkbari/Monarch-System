export default function SummaryCard({
  title,
  value,
  subtitle,
  color = "text-gray-800",
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>

      <p className={`text-3xl font-semibold mt-2 ${color}`}>
        {value}
      </p>

      {subtitle && (
        <p className="text-xs text-gray-400 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
