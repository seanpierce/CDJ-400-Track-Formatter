# CDJ 400 Track Formatter (MacOS Native)

This project contains a native app for MacOS developed using Vue and Electron. The app allows a user to quickly format a group of tracks so that they are easily browsable on a set of Pioneer CDJ-400s.

<img src="/src/assets/images/display.png">

## The Problem

Pioneer CDJ-400s organize and display tracks by their full filename, based on the track's metadata. The format for this is `track_number song_title` (example: "02 Beachy Head.mp3") which isn't very helpful. I found it difficult to find tracks with this formatting, having to scroll through all the 01s, then the 02s, etc. Furthermore, some artists have tracks which are not uniquely named - this proposes an even more annoying scenario.

## The Solution

Create a formatting app that will organize each file within a directory which adheres to the format of `artist/album/title.mp3`(example: "Throbbing Gristle/20 Jazz Funk Greats/Beachy Head.mp3") which would allow me to search tracks by artists alphabetically, then drill down into the songs available for that artist.

*No rekordbox, no problem*
