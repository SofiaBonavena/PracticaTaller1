

//PREGUNTAS:
// 1) Como hago para no tener que copiar/pegar los datos sino sacarlo de songs.js?
// 2) Porque me dice redeclared...

const songs = [
    { title: 'Bohemian Rhapsody', artist: 'Queen', year: 1975 },
    { title: 'Stairway to Heaven', artist: 'Led Zeppelin', year: 1971 },
    { title: 'Hotel California', artist: 'Eagles', year: 1977 },
    { title: 'Imagine', artist: 'John Lennon', year: 1971 },
    { title: 'Like a Rolling Stone', artist: 'Bob Dylan', year: 1965 },
    { title: 'Sweet Child O Mine', artist: 'Guns N Roses', year: 1987 },
    { title: 'Smells Like Teen Spirit', artist: 'Nirvana', year: 1991 },
    { title: 'Purple Haze', artist: 'Jimi Hendrix', year: 1967 },
    { title: 'Let It Be', artist: 'The Beatles', year: 1970 },
    { title: 'Thriller', artist: 'Michael Jackson', year: 1982 },
  ]
/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)
*/

/*1) Import songs array using modules.*/


/*2. Use the map function to create a new array with the title of each song in uppercase letters.*/

const titless = songs.map((song) => song.title.toUpperCase());
console.log('Ex 2.',titless);


/*3. Use the filter function to create a new array with all the songs released before 1975.*/

const songsBefore1975 = songs.filter(song => song.year < 1975);
console.log('Ex 3.', songsBefore1975);

// ME DI CUENTA QUE PODIA HACER DESTRUCTURING
const songsBeforeX = songs.filter(({ year }) => year < 1975);
console.log('Ex 3.', songsBeforeX);


/*4. Use destructuring to create a variable that stores the title of the first song in the array.*/

//NO ME DEJA PORQUE "TITLE IS REDECLERED"
// const primerCancion = songs[0];
// const { title } = primerCancion;
// console.log("ex 4 ", title);


/*5. Use the find function to get the object representing the song "Hotel California".*/

const findHotelCalifornia = songs.find(
  (song) => song.title === "Hotel California"
);
console.log("Ex 5.", findHotelCalifornia);

/*6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)*/

/*7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.*/

//Me costó
const newArray = songs.map(
  ({ title, artist, year }) => `${title} - ${artist} - (${year})`
);
console.log("Ex 7.", newArray);

/*8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.*/

const songsTheBeatles = songs.filter(({ artist }) => artist === "The Beatles");
console.log(songsTheBeatles, "Ex 8");


/*9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)*/

/*10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)*/

/*11. Use the find function to get the object representing the song with the longest title.*/

/*12. Use destructuring and template literals to log the title, artist and year of the first element of the array.*/

const [firstSong] = songs;
const { title, artist, year } = firstSong;
console.log('Ex 12.', `${title} ${artist} ${year} `);


/*13. Use the rest operator to create a new array without the first element.*/

const [, ...songsWithoutFirst] = songs;
console.log("Ex 13 ", songsWithoutFirst);

/*14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.*/

/*15. Use the every() method to check if all the songs have titles that are 5 or more characters long.*/

// Tuve que buscarlo. EL EVERY DEVUELVE true o FALSE si cumple la condicion que le pases
const cumple = songs.every(({ title }) => title.length >= 5);
console.log("Ex 13 ",cumple);

/*16. Use the some() method to check if there are any songs from the 80s.*/

/*17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."*/

const findBeatles = songs.find(({ title }) => title === "Let It Be");
console.log(
  "ex 17",
  `${findBeatles.artist} released ${findBeatles.title} in ${findBeatles.year}`
);

/*18. Use the map() method to create a new array with just the artist names.*/

const artistNames = songs.map(({ artist }) => artist);
console.log("ex 18", artistNames);

/*19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.*/

/*20. Write your own function using at least 3 concepts.*/


