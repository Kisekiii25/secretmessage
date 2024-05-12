import React from 'react'
import './Page.css'

const Page = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0957c479-5cf3-4311-8427-c3ea1339c745");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='page'>
      <h2 className='name'>Secret Message 🤫</h2>
      <form onSubmit={onSubmit}>
        <div className="messageContainer">
            <p>send Keivin anonymous messages!</p>
            <textarea placeholder='send Keivin anonymous messages...' rows="10"  name="message" required></textarea>
            <button type="submit">Send!</button>
            <br />
            <span>{result}</span>
        </div>
      </form>
    </div>
  )
}

export default Page
