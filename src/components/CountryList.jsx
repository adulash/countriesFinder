import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

function CountryList({ data }) {
  return (
    <div className="mt-8 grid justify-between gap-x-[70px] gap-y-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {data && data.length ? (
        data.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))
      ) : (
        <EmptySearch message={"Not Valid input"} />
      )}
    </div>
  );
}

export default CountryList;
