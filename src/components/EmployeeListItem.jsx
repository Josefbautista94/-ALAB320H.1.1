const EmployeeListItem = ({ name, title }) => {
    return (
      <div style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "5px 0",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}>
        <img 
          src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/463434516_8431214456927655_2414350569029819121_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=xKPPzxAr8YwQ7kNvwFBGpAp&_nc_oc=AdkiRA4mwY4kt3cIpoKhZF3npSC6ZwxkSXubQLRvq2XKaiWO-erWIklhCZOxXlLBomE_8AuKF5OFtdRGY41YICLQ&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=yzdWMuNJQpNFXyfjFX0pjQ&oh=00_AfEir88KLHJIgCKRk32YgyzT-AD46UzAu7RPbjkzkrtg8A&oe=68160AC8" 
          alt={`${name} profile`} 
          style={{
            width: "50px",     // Set width
            height: "50px",    // Set height
            objectFit: "cover", // Makes sure the image fills the space without stretching weird
            borderRadius: "50%"
          }}
        />
        <div>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    );
  };
  
  export default EmployeeListItem;
  