import { useState , useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
    const [blogs,setblogs] = useState(null);
    
// useEffect runs after every render
//fetch merr response dokumentin nga serveri
//then e konverton ne json
//then e merr daten dhe e vendos ne state
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => { return res.json(); })
        .then(data => {setblogs(data); });
    }, []);

    return(
        <div className="home">
        {blogs && <BlogList blogs={blogs} title= "All Blogs"/>}
        </div>
        
    );
}

export default Home;