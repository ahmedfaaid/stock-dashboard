export const login = async values => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  });

  const data = await response.json();

  console.log('data: ', data);

  return data;
};
