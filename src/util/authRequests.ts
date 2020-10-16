export const login = async values => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(values)
  });

  const data = await response.json();

  console.log('data: ', data);

  return data;
};

export const register = async values => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE}signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(values)
  });

  const data = await response.json();

  console.log('data: ', data);

  return data;
};
