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

export const getUserPosts = async () => {
  try {
    const response = await fetch(`${srcInfo}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const addPost = async (title, description, price) => {
  try {
    const response = await fetch(`${srcInfo}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
        },
      }),
    });
    console.log(title, description, price);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`${srcInfo}/posts/id`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `BEARER ${localStorage.getItem("userToken")}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
