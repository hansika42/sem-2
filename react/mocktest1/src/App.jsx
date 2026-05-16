function App(){
    const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundColor: "#f4f6f9",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "20px",
    width: "300px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  };

  const inputStyle = {
    padding: "5px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4f46e5",
    color: "white",
    fontSize: "15px",
    cursor: "onclick",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom:"15px",
    letterSpacing: "1px",
    color: "#333",
  };


  return (
  <div style={containerStyle}>
    <form style={formStyle}>
      <h1 style={headingStyle}>Student Registration Form</h1>
      <input type="text" placeholder="Student Name" style={inputStyle}/>
      <input type="email" placeholder="Email" style={inputStyle}/>
      <input type="text" placeholder="Password" style={inputStyle}/>
      <input type="text" placeholder="course" style={inputStyle}/>
      <input type="number" placeholder="Mobile No." style={inputStyle}/>
      <button type="reset" style={buttonStyle}> Register </button>
    </form>
  </div>

  );
}

export default App;