import PropTypes from "prop-types";
import { useFilter } from "../context/filterContext";
function Card({ item }) {
  const {
    position,
    logo,
    featured: isFeatured,
    postedAt,
    contract,
    location,
    languages,
    tools,
    new: isNew,
    company,
  } = item;
  const tech = [...languages, ...tools];

  const { addFilter } = useFilter();

  return (
    <li
      className={`border-desaturated-dark-cyan shadow-custom relative rounded-[4px] ${isFeatured && "border-l-4"} bg-white px-5 pb-4 pt-14 sm:flex sm:items-center sm:gap-5 sm:pt-4`}
    >
      <img
        src={logo}
        alt={company}
        className="absolute left-16 top-0 -translate-x-1/2 -translate-y-1/2 sm:static sm:w-20 sm:translate-x-0 sm:translate-y-0"
      />

      {/* main info */}
      <div className="border-b sm:border-0">
        <div className="space-x-2">
          <span className="text-dark-grayish-cyan mr-1 font-semibold capitalize">
            {company}
          </span>
          {isNew && (
            <span className="bg-desaturated-dark-cyan rounded-full px-2 py-1 text-sm font-semibold uppercase text-white">
              new!
            </span>
          )}
          {isFeatured && (
            <span className="bg-very-dark-grayish-cyan rounded-full px-2 py-1 text-sm font-semibold uppercase text-white">
              featured
            </span>
          )}
        </div>

        {/* position details */}
        <div className="flex flex-col gap-2 py-3 font-semibold sm:gap-1 sm:py-1">
          <span className="text-very-dark-grayish-cyan hover:text-desaturated-dark-cyan transition-colorss cursor-pointer duration-300">
            {position}
          </span>
          <div className="text-dark-grayish-cyan flex gap-3 text-sm">
            <span>{postedAt}</span> &middot; <span>{contract}</span>
            &middot;
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* tech list */}
      <div className="grow pt-3 text-sm font-semibold sm:pt-0">
        <ul className="flex flex-wrap gap-3 sm:justify-end">
          {tech.map((t, i) => (
            <li
              onClick={() => addFilter(t)}
              className="text-dark-grayish-cyan bg-desaturated-dark-cyan/10 hover:bg-dark-grayish-cyan cursor-pointer rounded-[3px] px-2 py-1 transition-colors duration-300 hover:text-white"
              key={i}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    position: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    postedAt: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    languages: PropTypes.array,
    tools: PropTypes.array,
    new: PropTypes.bool,
    company: PropTypes.string.isRequired,
  }),
};

export default Card;
