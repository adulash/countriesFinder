import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import useFetchData from "../useFetchdata";

function Home() {
  const { setResult, filteredList, setfilteredList, isLoading, isError } = useFetchData();

  return (
    <>
      {isError && <ShowMessage message="Something went wrong !!" />}
      {isLoading && <ShowMessage message="Loading countries... " />}
      {!isError && !isLoading && (
        <div className="container mx-auto px-5 md:px-0">
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput contriesList={setResult} filteredCountries={setfilteredList} />
            <RegionMenu contriesList={setResult} filteredCountries={setfilteredList} />
          </div>
          <CountryList data={filteredList} />
        </div>
      )}
    </>
  );
}

export default Home;
