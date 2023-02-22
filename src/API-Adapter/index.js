const srcInfo = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft";

export const getSrcInfo = async () => {
  try {
    const response = await fetch(`${srcInfo}/posts`);
    const result = await response.json();
    const postArray = result.data.posts;

    return postArray;
  } catch (error) {
    console.error(error);
  }
};

export const postUserInfo = async (username, password) => {
  try {
    const response = await fetch(`${srcInfo}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    console.log(username, password);

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const postUserLogin = async (username, password) => {
  try {
    const response = await fetch(`${srcInfo}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    console.log(username, password);

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
