const Header = ({title}) => { // creating function called header
    return( // we're going to return jsx

        //The first {} means "this is JavaScript.", The second {} is the object with the style info.
        <header style = {{padding: "20px", background: "#333", color :"white"}}> 
            <h1>{title}</h1> {/* This is saying, "show whatever the title is inside an h1 tag." If title is “Employee Directory,” it’ll show up as big text: Employee Directory.*/}
        </header>
    )
}

export default Header;