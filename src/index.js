const $ = require('jquery');
const { sayHello } = require('./hello');
const { getMovies } = require('./api.js');

sayHello('Commander');

let msg = $('#message');
let movieList = $('#movies');

getMovies().then((movies) => {
    msg.text('Here\'s Your Movies');
    movieList.append(movies.reduce( (a, { title, rating, id }) => {
        return a + `<tr><td>${id}</td><td>${title}</td><td>${rating} / 5</td><td><button>x</button></td></tr>`;
    },''));
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});
