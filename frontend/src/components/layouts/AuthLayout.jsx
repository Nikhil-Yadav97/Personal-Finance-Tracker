import React from "react";
import dash from "../../assets/images/dash.webp";
import { LuTrendingUpDown } from "react-icons/lu";

function AuthLayout({ children }) {
    return (
        <div className="flex">
            {/* Left Section */}
            <div className="w-screen md:w-[60vw] h-screen px-12 pt-8 pb-12 font-normal">
                <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
                {children}
            </div>

            {/* Right Section */}
            <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-cover bg-no-repeat bg-center relative p-8 overflow-hidden font-normal">
                {/* Background shapes */}
                <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5 z-0" />
                <div className="w-48 h-56 rounded-[40px] border border-fuchsia-600 absolute top-[30%] right-0 z-0" />
                <div className="w-48 h-56 rounded-[40px] border bg-violet-500 absolute -bottom-7 left-5 z-0" />

                {/* Stats Card */}
                <div className="grid grid-cols-1 place-items-center z-20 mt-7 relative">
                    <StatsInfoCard
                        icon={<LuTrendingUpDown />}
                        label="Track Your Income & Expenses"
                        value="₹4,33,000"
                        color="bg-purple-600"
                    />
                </div>

                {/* Background image */}
                <img
                    src={dash}
                    alt="Dashboard Illustration"
                    className="absolute bottom-20 right-20px w-[85%] h-auto object-contain z-10 rounded-sm"
                />
            </div>
        </div>
    );
}

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="font-normal flex items-center gap-4 bg-white p-4 rounded-xl shadow-md w-fit shadow-purple-400/10 border border-gray-200/50">
      {/* Icon Container */}
      <div
        className={`w-12 h-12 flex items-center justify-center text-[28px] text-gray-100 rounded-lg ${color || "bg-purple-700"}`}
      >
        {icon}
      </div>

      {/* Text Section */}
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-lg font-semibold text-gray-800">{value}</span>
      </div>
    </div>
  );
};
