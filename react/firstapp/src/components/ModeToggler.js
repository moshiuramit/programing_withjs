function ModeToggler() {
    let darkModeOn = true;
    let darkMode = <h1>Dark Mode is On</h1>;
    let lightMode = <h1>Light Mode is On</h1>;

    function handlerClick() {
        darkModeOn = !darkModeOn;
        darkModeOn ? console.log("Dark Mode is on") : console.log("Light mode is on");
    }
        
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handlerClick}>
                Click me to change the Mode
            </button>
      </div>
    );
}

export default ModeToggler;