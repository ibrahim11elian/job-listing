import CardList from "./components/CardList";
import Filter from "./components/Filter";
import { useFilter } from "./context/filterContext";

function App() {
  const { filterList } = useFilter();

  return (
    <div className="flex flex-col">
      <div className="bg-mobile sm:bg-desktop bg-desaturated-dark-cyan h-32 bg-cover bg-no-repeat"></div>

      <main className="w-full bg-teal-50 pt-14 sm:pt-5">
        {filterList?.length ? <Filter /> : null}

        <CardList />
      </main>
    </div>
  );
}

export default App;
