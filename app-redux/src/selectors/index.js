
export const getNextId = (collection) => {
  return collection.reduce( (acc, item) => Math.max(acc, item.id), 0) + 1;
};
