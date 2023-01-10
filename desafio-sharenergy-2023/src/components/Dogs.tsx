const dog_btn = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_result");

dog_btn.addEventListener("click", getRandomDog);

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
      }
    });
}

const Dogs = () => {
  return (
    <>
      <div className='results'>
        <div id='dog_result' className='result'>
          <p>Random Dog Placeholder</p>
        </div>
      </div>

      <div className='buttons'>
        <button id='dog_btn'>Get Dog</button>
      </div>
    </>
  );
};

export default Dogs;
