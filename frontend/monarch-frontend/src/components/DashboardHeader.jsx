
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function DashboardHeader({
//   user,
//   currentMonth,        // "2026-01"
//   onMonthChange,       // function
// }) {
//   const dateObj = new Date(currentMonth + "-01");

//   const formatMonth = (date) =>
//     date.toLocaleDateString("en-US", {
//       month: "long",
//       year: "numeric",
//     });

//   const changeMonth = (direction) => {
//     const newDate = new Date(dateObj);
//     newDate.setMonth(newDate.getMonth() + direction);

//     const formatted = newDate.toISOString().slice(0, 7); // YYYY-MM
//     onMonthChange(formatted);
//   };

//   return (
//     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//       {/* User Info */}
//       <div className="flex items-center gap-4">
//         {/* Avatar */}
//         <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
//           {user?.first_name?.[0] || "U"}
//         </div>

//         <div>
//           <p className="text-sm text-gray-500">Dashboard</p>
//           <p className="text-lg font-semibold text-gray-800">
//             {user ? `${user.first_name} ${user.last_name}` : "Loading..."}
//           </p>
//         </div>
//       </div>

//       {/* Month Switch */}
//       <div className="flex items-center gap-3 bg-white border rounded-xl px-4 py-2 shadow-sm">
//         <button
//           onClick={() => changeMonth(-1)}
//           className="p-1 rounded hover:bg-gray-100"
//         >
//           <ChevronLeft size={18} />
//         </button>

//         <span className="text-sm font-medium text-gray-700 min-w-[120px] text-center">
//           {formatMonth(dateObj)}
//         </span>

//         <button
//           onClick={() => changeMonth(1)}
//           className="p-1 rounded hover:bg-gray-100"
//         >
//           <ChevronRight size={18} />
//         </button>
//       </div>
//     </div>
//   );
// }
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DashboardHeader({
  user,
  currentMonth,
  onMonthChange,
}) {
  // currentMonth = "YYYY-MM"
  const date = new Date(currentMonth + "-01");

  const formatMonth = (d) =>
    d.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

  const changeMonth = (direction) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + direction);

    const monthString = newDate
      .toISOString()
      .slice(0, 7); // YYYY-MM

    onMonthChange(monthString);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
          {user?.first_name?.[0] || "U"}
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Welcome back,
          </p>
          <p className="text-lg font-semibold text-gray-800">
            {user
              ? `${user.first_name} ${user.last_name}`
              : "Loading..."}
          </p>
        </div>
      </div>

      {/* Month Switch */}
      <div className="flex items-center gap-3 bg-white border rounded-xl px-4 py-2 shadow-sm">
        <button
          onClick={() => changeMonth(-1)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <ChevronLeft size={18} />
        </button>

        <span className="text-sm font-medium text-gray-700 min-w-[120px] text-center">
          {formatMonth(date)}
        </span>

        <button
          onClick={() => changeMonth(1)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
