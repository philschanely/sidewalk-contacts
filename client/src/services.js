export const getTest = async () => {
  const res = await fetch('/api/test')
  const data = await res.json();
  return data;
};
