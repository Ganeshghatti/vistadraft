import PropTypes from 'prop-types'; // Import PropTypes

import { Link } from "react-router-dom";

export default function MenuLink({ slug, page }) {
  return (
    <li className="text-white group text-[11px] font-bold tracking-wider cursor-pointer">
      <Link to={slug}>{page}</Link>
      <span className="h-[1.8px] w-0 transition-all duration-500 group-hover:w-full bg-white block mt-1"></span>
    </li>
  );
}

// Add PropTypes validation
MenuLink.propTypes = {
  slug: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
