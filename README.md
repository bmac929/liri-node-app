# liri-node-app  
Liri serves as a quick and easy way to find information regarding bands/artists, songs, and movies. 
I started the app by stating the required variables which are axios, spotify, moment.js, fs, dotenv, and keys.js.
Depending on the search term that is used Liri will access a specific API to rretrieve information. The 3 APIs that are used are Bands in Town, Spotify, and OMDB. The code is broken up into 3 major parts. Each API has its own section. First we specify the Bands in Town API url and then specify what information to bring back. We repeat this process with Spotify and OMDB.

1. With the command "concert-this" liri will find an artist or bands next concert date, city, & venue.

2. With "spotify-this-song" liri find a song's artist, the song's title, a link to a preview of the song, and also the album that the song is on. 


3. With "movie-this" liri will provide the title of the movie, the year it was released, the IMDB rating, the Rotten Tomatoes rating, the country in which the movie was produced, the language, the plot, and the actors of the movie.

4. With "do-what-it-says" liri will perform the action indicated in the random.txt file.

Liri is a useful way to find information regarding multilple subjects all in one place. Liri eliminates the need to search for information on multiple websites and multiple databases. By simply changing the command, liri is able to access a different database and provide a whole different set of data.

To get started with liri simply open the correct file path conataining liri in your terminal. From there, type in "node liri.js" followed by one of the commands stated in numbers 1-4:

1. Enter band/artist name (ex. node liri.js concert-this Big Sean)
![Concert This Command] (C:\Users\B-Mac\Desktop\CBC\Homework\liri-node-app\CTCommand)
![Concert This Results] (C:\Users\B-Mac\Desktop\CBC\Homework\liri-node-app\CTResults)

2. Enter song title (ex. node liri.js spotify-this-song Going Bad)
![Spotify This Song Command) (C:\Users\B-Mac\Desktop\CBC\Homework\liri-node-app\STSCommand)
![Spotify This Song Results) (C:\Users\B-Mac\Desktop\CBC\Homework\liri-node-app\STSResults)

3. Enter movie title (ex. node liri.js movie-this Inception)
![Movie This Command] (C:\Users\B-Mac\Desktop\CBC\Homework\liri-node-app\MTCommand)
![Movie This Results] (C:\Users\B-Mac\Desktop\CBC\Homework\liri-node-app\MTResults)
4. Enter one of the previous commands in the "random.txt" file
![Do What It Says Command] (C:\Users\B-Mac\Desktop\CBC\Homework\liri-node-app\DWISCommand)
![Do What It Says Results] (C:\Users\B-Mac\Desktop\CBC\Homework\liri-node-app\DWISResults)
In addtion to the the 3 APIs stated, Liri also uses moment.js, axios, and FS.
                                        
                                        
If you have any difficulty please email me at bmac929@yahoo.com
