import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import StudentsList from "./components/StudentsList";
import AddStudents from "./components/AddStudents";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setStudents(response);
      });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <h1>Mes étudiants</h1>
        <Switch>
          <Route path="/" exact>
            <StudentsList students={students} />
          </Route>
          <Route path="/add">
            <AddStudents />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
