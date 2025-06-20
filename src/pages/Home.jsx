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
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-5 md:px-0">
          <div className="w-full max-w-6xl flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0 mb-10">
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
