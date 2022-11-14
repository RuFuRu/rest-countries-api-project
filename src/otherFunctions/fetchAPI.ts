async function fetchAPI() {
   const fetchMe = await fetch('https://restcountries.com/v3.1/region/europe');
   const response: JSON = await fetchMe.json();
   return response;
}

export default fetchAPI;