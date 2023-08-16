import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { authenticate } from "./store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { notificationActions } from "./store";
import { Notification } from "./UI/Notification";

function App() {
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth.isLoggedIn;
  const dispatch = useDispatch();

  console.log("isLoggedIn");
  console.log(isLoggedIn);

  const notification = useSelector((state) => state.notification);

  // const closeAlertHandler = () => {
  //   dispatch(notificationActions.hideAlert());
  // };
  const closeCardHandler = () => {
    dispatch(notificationActions.hideCardNotification());
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(notificationActions.hideCardNotification());
      dispatch(notificationActions.hideAlert());
    }, [4000]);
  }, [dispatch]);

  useEffect(() => {
    const tryLogin = async () => {
      const strAuthData = localStorage.getItem("auth");
      const parsedAuthData = JSON.parse(strAuthData);

      if (!parsedAuthData) {
        localStorage.clear();
        return <Navigate to="/" />;
      }

      const { user, token, expiresIn, expirationTime, isLoggedIn } =
        parsedAuthData;
      if (!user || !token) {
        localStorage.clear();
        return <Navigate to="/" />;
      }
      // TODO: to convert expirationTime into browser's time zone
      const expiryTime = new Date(expirationTime);
      const currentTime = new Date(Date.now());
      const isExpired = expiryTime < currentTime;

      if (isExpired) {
        localStorage.clear();
        return <Navigate to="/" />;
      }

      await dispatch(authenticate(parsedAuthData));
    };
    tryLogin();
  }, [dispatch]);

  // <Routes>
  //   <Route path="/dashboard/*" element={<Dashboard />} />
  //   <Route path="/auth/*" element={<Auth />} />
  //   <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
  // </Routes>

  return (
    <Fragment>
      <div className="bg-gray-light-1 overflow-x-hidden text-base">
        <BrowserRouter>
          {!isLoggedIn && (
            <Fragment>
              {notification.showCardNotification && (
                <Notification
                  type={notification.cardNotificationType}
                  message={notification.cardMessage}
                  onClose={closeCardHandler}
                />
              )}
              <Routes>
                <Route path="/auth/*" element={<Auth />} />
                <Route path="*" element={<Navigate to="/auth" replace />} />
              </Routes>
            </Fragment>
          )}

          {isLoggedIn && (
            <Fragment>
              {notification.showCardNotification && (
                <Notification
                  type={notification.cardNotificationType}
                  message={notification.cardMessage}
                  onClose={closeCardHandler}
                />
              )}
              <Routes>
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route
                  path="*"
                  element={<Navigate to="/dashboard/home" replace />}
                />
              </Routes>
            </Fragment>
          )}
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
