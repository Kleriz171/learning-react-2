import { use, useState } from "react";

function Home() {

    const [name, setName] = useState("mario")
    const [age, setAge] = useState(25)
    

    const handleClick = () => {
        setName("luigi");
        console.log("clicked button");
        setAge(30);
    }
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <h1>{name} {age}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;