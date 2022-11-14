async function fetchAPI() {
   const fetchMe = await fetch('https://restcountries.com/v3.1/region/europe');
   return fetchMe.json();
}

export default fetchAPI;