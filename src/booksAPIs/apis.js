const userKey = 'BAFDeFz3wenh6832PNOX';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${userKey}/books`;

export const apiFetchBooks = async () => {
  const resp = await fetch(baseURL);
  const data = await resp.json();

  const books = Object.entries(data).map(([id, book]) => {
    const { title, author, category } = book[0];
    return {
      id, title, author, category,
    };
  })
    .sort((a, b) => a.title.localeCompare(b.title));
  return books;
};

export const apiAddBook = async ({
  id,
  title,
  author,
  category,
}) => {
  await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  });
};

export const apiRemoveBook = async (id) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
