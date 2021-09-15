/** @format */

const getIsLogIn = (state) => state.auth.isLogIn;
const getUsername = (state) => state.auth.user.name;
const getIsLoding = (state) => state.auth.isLoding;

const authSelectors = {
  getIsLogIn,
  getUsername,
  getIsLoding,
};
export default authSelectors;
