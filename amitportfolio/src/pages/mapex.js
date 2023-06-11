/* This is the raw data array will make it a map list */
const data = [
    {
        id: "1",
        title: "Nuttela", 
        description: "Greeting from the crowd. .. .. Chocolate",
        image: "https://picsum.photos/id/918/200/?random",
        price: "$ 10.00"
    },
    {
        id: "2",
        title: "Tiramisu", 
        description: "Greeting from the crowd. .. .. Sweets",
        image: "https://picsum.photos/id/918/200/?random",
        price: "$ 10.00"
    },
    {
        id: "3",
        title: "Bluberry", 
        description: "Greeting from the crowd. .. .. sweets and sour",
        image: "https://picsum.photos/id/918/200/?random",
        price: "$ 10.00"
    }
];




function Mapex(){
    /* Converting the data into Map Loop through the array of deserts  */
    const listItems = data.map( desert => {
        const itemText =  `${desert.title} - ${desert.description} : ${desert.price}`
        return <li>{itemText}</li>
    });
    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default Mapex;