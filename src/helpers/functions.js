export const stripPageNumberFromQuery = (search) => {
  const query = new URLSearchParams(search);

  return Number(query.get('page'));
};

export const getNumberOfPages = (count) => Math.ceil(count / 20);

export const stripIdFromUrl = (item) => item.id || Number(item.url.match(/(?<=\/)\d+(?=\/)/)[0]);
