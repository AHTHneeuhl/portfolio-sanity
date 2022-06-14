import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-red-100">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            className="inline-flex items-center py-3 px-3 mr-4 text-red-800 hover:text-red-900 text-4xl font-bold lordish tracking-widest"
          >
            SP
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex text-center py-3 px-3 my-2 rounded text-xl text-red-700 hover:text-red-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/posts"
            className="inline-flex text-center py-3 px-3 my-2 rounded text-xl text-red-700 hover:text-red-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex text-center py-3 px-3 my-2 rounded text-xl text-red-700 hover:text-red-800"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-2">
          <SocialIcon
            url="https://twitter.com/ahthneeuhl"
            className="mr-4"
            target="_blank"
            fgColor="#FFFFFF"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/AHTHneeuhl"
            className="mr-4"
            target="_blank"
            fgColor="#FFFFFF"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ahthneeuhl/"
            className="mr-4"
            target="_blank"
            fgColor="#FFFFFF"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
