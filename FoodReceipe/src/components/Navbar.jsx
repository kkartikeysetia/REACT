import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/Context";

export default function Navbar() {
  //accepsts the context object & return currenty context value
  const { search, setSearch, handleSubmit } = useContext(GlobalContext);
  // means from global context using this hook we are accessing search & set Search
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}></NavLink>
        Food Recipe
      </h2>
      {/* on submit of this form  get seaMY rch value & based on that call api */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter items"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // iske baad handlesubmit becoz click per krne per call api
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-500"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/fav"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
