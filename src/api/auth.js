import { url } from "../store";

export const signIn = async ({ email, password }) => {
  const response = await fetch(`${url}/users/signin`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response.json();
};

// signup
export const signUp = async ({
  firstName,
  lastName,
  email,
  password,
  phone,
}) => {
  const response = await fetch(`${url}/users/signup`, {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      phone,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response.json();
};
