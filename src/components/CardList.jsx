import Card from "./Card";
import { useFilter } from "../context/filterContext";
function CardList() {
  const { list } = useFilter();
  return (
    <div className="m-auto max-w-[50rem] px-4 py-4">
      <ul className="flex flex-col gap-16 sm:gap-5">
        {list?.length && list.map((item) => <Card item={item} key={item.id} />)}
      </ul>
    </div>
  );
}

export default CardList;
