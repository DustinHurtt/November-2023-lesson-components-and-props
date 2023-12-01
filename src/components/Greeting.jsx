

const Greeting = (props) => {
    const message = "Hello Ana!";

    console.log("These are our Greeting props", props)
 
    return (
      <div>
        <u>{message}</u>
      </div>
    );
}

export default Greeting