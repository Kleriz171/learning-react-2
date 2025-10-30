function Home() {
    const handleClick = () => {
        console.log();
    }
    const handleClick2 = (name) => {
        console.log('Hello ' + name);
    };
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2('Amina')}>Amina</button>
        </div>
    );
}

export default Home;