import { Link, useParams } from "react-router-dom";
import useFetchData from "../useFetchdata";
import ShowMessage from "../components/ShowMessage";

function Country() {
  const { country } = useParams();
  const { result, isLoading, isError } = useFetchData(country);

  return (
    <>
      {isError && <ShowMessage message="Something went wrong !!" />}
      {isLoading && <ShowMessage message="Loading countries... " />}
      {!isError && !isLoading && (
        <div className="mx-auto w-full max-w-6xl px-5 md:px-0">
          <Link className="MB-16 inline-block rounded-md bg-white p-3 md:mb-20" to="/">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="call-made">
                <path
                  id="Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.8922 3.53553L7.07071 4.71405L3.18162 8.60313L18.0309 8.60313L18.0309 10.253L3.18162 10.253L7.07071 14.1421L5.8922 15.3206L-0.000355655 9.42809L5.8922 3.53553Z"
                  fill="#111827"
                />
              </g>
            </svg>
          </Link>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-36">
            <img className="w-full" src={result?.flags?.svg} alt={result?.flags?.alt} />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">{result?.name?.common}</h1>
              <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {parseInt(result?.population).toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{result?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    <span className="font-light">{result?.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{result?.capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span className="font-light">{result?.tld?.join(", ")}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {result?.currencies &&
                        Object.keys(result.currencies)
                          .map((currency) => `${result.currencies[currency].name}`)
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Language: </span>
                    <span className="font-light">
                      {result?.languages &&
                        Object.values(result.languages)
                          .map((lang) => `${lang}`)
                          .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Country;
