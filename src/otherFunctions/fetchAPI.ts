async function fetchAPI() {
   const fetchMe = await fetch('https://restcountries.com/v3.1/all');
   return fetchMe.json();
}

export default fetchAPI;