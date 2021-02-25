<template>
    <div id="how" class="view">
        <h1>How It Works</h1>

        <p>This application copies or moves files from one directory to another, and organizes the files using each file's metadata properties. In the destiantion directory, the files are separated first by artist, then each artist's tracks are separated by album.</p>

        <h2>Instructions</h2>
        <ol>
            <li>Select a source directory. This is the folder containing the tracks you wish to format</li>
            <li>Select a destination direcotry. This is the output directory where you want the formatted files to be placed</li>
            <li>Select an option "Move" or "Copy". The option to Copy creates new files in the destination directory without modifying the location of the files in the source directory. The option to Move will reloacate the files in the source directory to the destination directory once formatted.</li>
        </ol>

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