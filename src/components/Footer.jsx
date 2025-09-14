import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12 px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="text-xl font-bold text-gray-500">@ 2025 Portfolio</div>
      <div className="flex gap-6">
        <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy</a>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms</a>
        <Link to="/contact" className="text-sm text-gray-700 font-semibold">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
