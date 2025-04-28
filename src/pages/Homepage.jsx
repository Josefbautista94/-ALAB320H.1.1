import Header from "../components/Header";
import SearchBar from "../components/Searchbar";
import EmployeeList from "../components/EmployeeList";

const HomePage = () => {
  return (
    <div>
      <Header title=" Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
};

export default HomePage;
