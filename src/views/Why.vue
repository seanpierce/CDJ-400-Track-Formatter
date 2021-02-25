<template>
    <div id="why" class="view">
        <h1>Why?</h1>

        <p>This project was developed to organize tracks so that they may be easily used with Pioneer CDJ400s. This particular model of CDJ is one of the first that implemented the use of a USB drive to allow the user to play MP3s of a stick instead of using actual Cds.</p>
        <p>The CDJs are not robust enough to provide a decent interface for browsing the tracks. Instead of using the artist or album, the unit shows the file name - in most cases this is displayed as "02 Beachy Head.mp3", where "02" is the tracks place within the album, and "Beachy Head" is the title. This way of browsing the files makes it difficult to find the track you wish to play. If you wanted to cue a specific track, you might need to navigate through all the "01"s then all the "02"s, etc.</p>
        <p>Also, I wanted to learn how to make a native app that is capable of manipulating files on the filesystem :)</p>

        <Nav />
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    
    components: {
        Nav
    }
}
</script>