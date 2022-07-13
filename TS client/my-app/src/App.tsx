import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <main className="layout">
        <section className="sidebar">
          <img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
          />
          <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu"></nav>
          <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          />
        </section>
        <section className="schedule">
          <Button confirm={"confirm"} danger={"danger"} onClick={() => {}} disabled={false}>
            hello
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
