const SearchBar = () => {
  return (
    <div style={{ width: "90%", maxWidth: "400px", margin: "10px auto" }}>
      <input
        type="text"
        placeholder="Search employees..."
        style={{
          width: "90%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #444",
          backgroundColor: "#1a1a1a",
          color: "white",
        }}
      />
    </div>
  );
};

export default SearchBar;
