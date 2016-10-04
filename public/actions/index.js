export function updateList(movies){
  return {
    type: "UPDATE_MOVIES",
    movies: movies
  }
}

export function updateYear(year){
  return{
    type: "UPDATE_YEAR",
    year: year
  }
};
