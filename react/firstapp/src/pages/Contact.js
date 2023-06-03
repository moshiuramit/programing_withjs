import ReactPlayer from "react-player"; // all media 
//import ReactPlayer from "react-player/youtube";
function Contact() {
    return (
        <div>
            <h1>Write your contact module</h1>
            <MyVideo />
        </div>    
    )
}

const MyVideo = () => {
    return (
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=tv1u08KOQmg' />
        </div>
    );
};

export default Contact;