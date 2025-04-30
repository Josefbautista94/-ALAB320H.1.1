const Header = ({title}) => { // creating function called header
    return( // we're going to return jsx

        //The first {} means "this is JavaScript.", The second {} is the object with the style info.
        <header      style={{
            padding: "20px",
            background: "#1f1f1f",
            color: "white",
            width: "100%",
            height: "80px", // Fix both header heights
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // center the text inside
            boxSizing: "border-box" // make sure padding doesn't push it beyond width
          }}
    > 
                <h1 style={{ fontSize: "24px", margin: 0 }}>{title}</h1>
                {/* This is saying, "show whatever the title is inside an h1 tag." If title is “Employee Directory,” it’ll show up as big text: Employee Directory.*/}
        </header>
    )
}

export default Header;