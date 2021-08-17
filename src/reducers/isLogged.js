const isLogged = (state = false, action) => {
  if (action.type === "login") {
    return true;
  }
  if (action.type === "logout") {
    return false;
  }
  return state;
};
export default isLogged;
