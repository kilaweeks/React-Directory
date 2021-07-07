import { useEffect, useContext } from "react";
import { Context } from "../components/Context/Context.js";
import axios from "axios";

export function useGet(url) {
  const { employees, setEmployees, displayedEmployees, setDisplayedEmployees } =
    useContext(Context);

  // Fetches employees from API
  useEffect(() => {
    async function getEmployees() {
      try {
        const response = await axios.get(url);
        setEmployees(response.data.results);
        setDisplayedEmployees(response.data.results);
      } catch (error) {
        console.log("Error fetching from API");
      }
    }
    getEmployees();
  }, []);

  function sortFunc(sort) {
    switch (sort) {
      case "name":
        sortByName();
        break;
      case "age":
        sortByAge();
        break;
      default:
        console.log("sort does not match any cases");
    }
  }

  // Sort employees by first name 
  function sortByName() {
    employees.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      } else {
        return 1;
      }
    });
    setDisplayedEmployees([...employees]);
  }

  // Sort employees by age
  function sortByAge() {
    employees.sort(function (a, b) {
      return a.dob.age - b.dob.age;
    });
    setDisplayedEmployees([...employees]);
  }

  return { displayedEmployees, sortFunc };
}
