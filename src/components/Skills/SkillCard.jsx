import React from "react";

const SkillCard = ({ icon, name,color }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-black text-3xl hover:scale-110 transition">
        {icon}
      </div>
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
};

export default SkillCard