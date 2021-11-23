



fetch('http://www.omdbapi.com/?apikey=a42fbcc5&?t=the+shining&y=1993')
  .then(response => response.json())
  .then(data => console.log(data));