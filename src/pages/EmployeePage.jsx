import Header from "../components/Header";



const EmployeePage = () => {
    const boxStyle = {
        border: "1px solid #555",
        padding: "15px 20px",
        marginBottom: "12px",
        borderRadius: "12px",
        backgroundColor: "#1a1a1a",
    };
  return (

    
    <div style={{ color: "white",marginBottom:"200px" }}>
      <Header title="Employee" />
      <div
        style={{
          padding: "20px",
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/463434516_8431214456927655_2414350569029819121_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=xKPPzxAr8YwQ7kNvwFBGpAp&_nc_oc=AdkiRA4mwY4kt3cIpoKhZF3npSC6ZwxkSXubQLRvq2XKaiWO-erWIklhCZOxXlLBomE_8AuKF5OFtdRGY41YICLQ&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=yzdWMuNJQpNFXyfjFX0pjQ&oh=00_AfEir88KLHJIgCKRk32YgyzT-AD46UzAu7RPbjkzkrtg8A&oe=68160AC8"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />
        <h2>Julie Taylor</h2>
        <p>VP of Marketing</p>
        <div style={{ marginTop: "20px", textAlign: "left", width: "100%" }}>
  <div style={boxStyle}>
    <p><strong>Call Office:</strong> 781-000-0002</p>
  </div>
  <div style={boxStyle}>
    <p><strong>Call Mobile:</strong> 617-000-0000</p>
  </div>
  <div style={boxStyle}>
    <p><strong>SMS:</strong> 617-000-0000</p>
  </div>
  <div style={boxStyle}>
    <p><strong>Email:</strong> jtaylor@fakemail.com</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default EmployeePage;
