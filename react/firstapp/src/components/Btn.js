function Btn() {
    const clickHandler =
        () => console.log("You Clicked the Button");
    return (
        <button onClick={clickHandler}>
            Click Me
        </button>
    );
}

export default Btn;