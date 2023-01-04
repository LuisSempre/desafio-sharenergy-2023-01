import { useState } from "react";

const Dogs = () => {
  const [imgURL, setURL] = useState();
  const callIMG = () => {
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((data) => setURL(data[0].json));
  };
  return (
    <div className='max-w-2xl mx-auto flex justify-center items-center py-8'>
      <img src={imgURL}></img>
      <button onClick={callIMG}>Refresh</button>
    </div>
  );
};

export default Dogs;
