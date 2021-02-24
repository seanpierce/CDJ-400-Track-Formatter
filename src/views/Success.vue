<template>
    <div id="success" class="view">
        <h1>Success!</h1>

        <button
            class="full-width"
            @click="open()">View Formatted Files
        </button>

        <router-link to="/"
            tag="button" 
            class="half-width">
            Format More Files
        </router-link>

        <button class="half-width"
            @click="quit()">
            Quit
        </button>
    </div>
</template>

<script>
const remote = require('electron').remote
const shell = require('electron').shell

export default {

    computed: {

        destination() {
            return this.$store.state.destination
        }
    },

    methods: {

        open() {
            shell.showItemInFolder(this.destination)
        },

        quit() {
            let w = remote.getCurrentWindow()
            w.close()
        }
    }
}
</script>