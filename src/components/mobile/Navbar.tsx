import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 flex rounded py-2 backdrop-blur-3xl px-2 justify-between shadow-xl z-30">
        <a href="https://renora.io/" className="flex items-center">
          <img src="/logo.png" alt="Renora Technologies" className="w-[30px]" />
          <div className="ml-2 tracking-wide text-[15px]">
            <h2 className="mb-[-5px]">Renora</h2>
            <h2>Technologies</h2>
          </div>
        </a>
      </div>
      <div className="rounded-xl mt-2 mx-[auto] w-[95%] flex p-2 bg-[#131823] items-center">
        <CiSearch className="text-[30px]" />
        <input
          placeholder="Search Assets"
          className="ml-5 bg-[#131823] outline-0 w-[100%] text-[20px]"
        />
      </div>
    </>
  );
};

export default Navbar;
