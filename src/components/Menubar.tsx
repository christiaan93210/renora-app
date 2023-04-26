import React from "react";

const menus: string[] = [
  "Assets",
  "invitations",
  "Asset Sources",
  "Profile",
  "Billing",
  "Sign Out",
];

const Menubar = () => {
  return (
    <div className="flex flex-col gap-2 p-5 border-r-2 border-[#202835] text-[#88c0f3] text-[18px] bg-[#13182345] w-[250px]">
      {menus.map((menu, index) => (
        <div key={index} className="p-3 hover:bg-[#1e4577] hover:cursor-pointer rounded border-none hover:border-2">
          <h2>{menu}</h2>
        </div>
      ))}
    </div>
  );
};

export default Menubar;
