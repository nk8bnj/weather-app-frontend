import NavLinkItem from "../NavLinkItem/NavLinkItem";

const Navbar: React.FC = () => (
  <nav className="bg-neutral-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <ul className="flex space-x-4">
          <NavLinkItem path="/" label="Main" />
          <NavLinkItem path="/list" label="List" />
        </ul>

        <p className="text-gray-500 text-lg">
          Test work for{" "}
          <span className="text-teal-500 font-semibold">
            Beverly Hills Company
          </span>{" "}
          by Nikita Ganzha
        </p>
      </div>
    </div>
  </nav>
);

export default Navbar;