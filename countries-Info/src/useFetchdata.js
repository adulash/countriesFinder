import { useEffect, useState } from "react";

function useFetchData(country) {
  const [result, setResult] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);

  const fetchDataFromAPI = () => {
    let url = `https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region`;
    setIsError(false);
    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setResult(data[0]);
        } else {
          setResult(data);
          setfilteredList(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setfilteredList(data);
    } else {
      fetchDataFromAPI();
    }
  };
  return { result, filteredList, setfilteredList, isLoading, isError };
}

export default useFetchData;
