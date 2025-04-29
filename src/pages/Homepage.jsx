import Header from "../components/Header";
import SearchBar from "../components/SearchBar"; 
import EmployeeList from "../components/EmployeeList";

const HomePage = () => {
    return (
      <div>
        <Header title="Employee Directory" />
        <SearchBar />
        <EmployeeList />
      </div>
    );
  };
  

export default HomePage;
