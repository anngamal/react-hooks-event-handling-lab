// Code Keypad Component Here

function Keypad (){
    function handleChange(event) {
        console.log("Entering password")
    }
    return (
        <div>
            <input type="password" name="password" placeholder="Entering password" onChange={handleChange} />
        </div>
    )
}

export default Keypad;

//<input type="text" name="username" placeholder="Enter username..." />