export function selectBook(book) {
  // selectBook is an ActionCreator and needs to return an action,
  // as object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}