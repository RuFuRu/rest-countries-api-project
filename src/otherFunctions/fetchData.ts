async function fetchData() {
   const fetchMe = await fetch('https://restcountries.com/v3.1/all');
   const response = await fetchMe.json();
   return response;
}

export default fetchData;