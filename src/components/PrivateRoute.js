/** @format */

import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLogIn = useSelector(authSelectors.getIsLogIn);

  return (
    <Route {...routeProps}>
      {isLogIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
