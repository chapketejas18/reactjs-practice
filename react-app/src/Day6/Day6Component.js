import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./Question1/ErrorBoundary";
import { Suspense, lazy } from "react";
import { Home } from "./Question1";
import { Counter } from "./Question3";
import { LoginForm } from "./Question4";
import { UserProfile } from "./Question5";
import { ShowModal } from "./Question6";

const Dashboard = lazy(() => import("./Question1/Dashboard"));
const Profile = lazy(() => import("./Question1/Profile"));

export const Day6Component = () => {
  return (
    <>
      <center>
        <h1>
          ------------------------------------------------------------------Day
          6----------------------------------------------------------------------------
        </h1>
      </center>
      <BrowserRouter>
        <Suspense fallback={<div>Wait Components are Loading...</div>}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </BrowserRouter>
      <hr />
      <Counter />
      <hr />
      <LoginForm />
      <hr />
      <UserProfile
        name={"Tejas"}
        username={"tejas18"}
        gender={"Male"}
        address={"Akola"}
        contact={9960733381}
      />
      <UserProfile />
      <hr />
      <ShowModal />
    </>
  );
};
