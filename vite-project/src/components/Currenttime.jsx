const Current = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
  
    return (
      <>
        <p>This is the current time in India: {time}</p>
        <p>This is the current date in India: {date}</p>
      </>
    );
  };
  
  export default Current;
  