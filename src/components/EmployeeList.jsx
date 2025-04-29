import EmployeeListItem from "./EmployeeListItem";

const employees = [
  { id: 1, name: "James King", title: "President and CEO" },
  { id: 2, name: "Julie Taylor", title: "VP of Marketing" },
  { id: 3, name: "Eugene Lee", title: "CFO" },
  { id: 4, name: "John Williams", title: "VP of Engineering" },
  { id: 5, name: "Ray Moore", title: "VP of Sales" },
  { id: 6, name: "Paul Jones", title: "QA Manager" },
];
const EmployeeList = () => {
  return (
    <div style={{ 
      width: "90%", 
      maxWidth: "500px", 
      margin: "0 auto", 
      padding: "20px" 
    }}>
      {employees.map((emp) => (
        <EmployeeListItem key={emp.id} name={emp.name} title={emp.title} />
      ))}
    </div>
  );
};

export default EmployeeList;
