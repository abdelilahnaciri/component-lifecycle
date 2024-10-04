const Navbar = ({ setPage }: { setPage: (page: string) => void }) => {
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-3">
        <li
          className="underline cursor-pointer hover:text-indigo-600
        duration-300"
          onClick={() => setPage("home")}
        >
          Home
        </li>
        <li
          className="underline cursor-pointer hover:text-indigo-600
        duration-300"
          onClick={() => setPage("products")}
        >
          Products
        </li>
        <li
          className="underline cursor-pointer hover:text-indigo-600
        duration-300"
          onClick={() => setPage("about")}
        >
          About Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
