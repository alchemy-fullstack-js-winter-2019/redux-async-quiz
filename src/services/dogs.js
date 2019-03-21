export const getDogs = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => {
      return {
        dog: json.message
      };
    });
};

// .then(res => res.json())
//     .then(res => {
//       return res.map(country => {
//         return {
//           name: country.name,
//           capital: country.capital,
//           flag: country.flag,
//           languages: country.languages,
//           population: country.population
//         };
