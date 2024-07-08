import removeImg from "../assets/icon-remove.svg";
import { useFilter } from "../context/filterContext";

function Filter() {
  const { filterList, removeFilter, resetFilter } = useFilter();

  return (
    <div className="m-auto max-w-[50rem] -translate-y-24 p-4 sm:-translate-y-16">
      <div className="shadow-custom flex items-center justify-between rounded-[4px] bg-white px-5 py-4">
        <ul className="flex flex-wrap gap-3">
          {filterList.map((item, i) => (
            <li className="flex items-center" key={i}>
              <span className="bg-desaturated-dark-cyan/10 text-dark-grayish-cyan rounded-l-[4px] px-3 py-0.5 font-semibold capitalize">
                {item}
              </span>
              <button
                className="hover:bg-very-dark-grayish-cyan bg-desaturated-dark-cyan rounded-r-[4px] px-3 py-[7px] transition-colors duration-300"
                onClick={() => removeFilter(item)}
              >
                <img src={removeImg} alt="remove icon" />
              </button>
            </li>
          ))}
        </ul>
        <button
          className="text-dark-grayish-cyan font-semibold hover:underline"
          onClick={resetFilter}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Filter;
