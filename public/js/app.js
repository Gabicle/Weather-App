const weatherForm = document.getElementById("form");
const searchInput = document.getElementById("search");
const msgOne = document.getElementById('msg-one');
const msgTwo = document.getElementById('msg-two');


weatherForm.addEventListener("submit", e => {
  const location = searchInput.value;
  msgOne.textContent = 'Loading...';
  msgTwo.textContent = '';

  if (location === "") {
    msgOne.textContent = "Enter a location";
  } else {
    fetch(`/weather?address=${location}`).then(res => {
      res.json().then(data => {

        if (data.error) {
           msgOne.textContent = data.error;

        } else {
          msgOne.textContent = data.location;
          msgTwo.textContent = data.forecast;
          
        }
      });
    });
  }

  e.preventDefault();
});
