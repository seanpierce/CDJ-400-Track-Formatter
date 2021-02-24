<template>
    <div id="formatter" class="view">
        <h1>CDJ Track Formatter</h1>

        <div class="format-section">
            <h2>Source</h2>
            <PathSelector :name="'source'" :path="source" />
        </div>

        <div>
            <span class="icon">
                &#8595;
            </span>
        </div>

        <div class="format-section margin-bottom">
            <h2>Destination</h2>
            <PathSelector :name="'destination'" :path="destination" />
        </div>

        <div class="format-section margin-bottom margin-top">
            <h2>Action</h2>

            <div class="radio-group">
                <input id="radio-action-copy" type="radio" value="copy" v-model="action">
                <label for="radio-action-copy">Copy</label>
            </div>

            <div class="radio-group">
                <input id="radio-action-move" type="radio" value="move" v-model="action">
                <label for="radio-action-move">Move</label>
            </div>
        </div>

        <button id="button-format"
            class="full-width color"
            @click="format()">Format
        </button>

        <hr>
        <Nav />
    </div>
</template>

<script>
import Formatter from '@/formatter'
import Nav from '@/components/Nav'
import PathSelector from '@/components/PathSelector'

export default {

    components: {
        Nav,
        PathSelector
    },

    data() {
        return {
            action: 'copy'
        }
    },

    computed: {

        source() {
            return this.$store.state.source
        },

        destination() {
            return this.$store.state.destination
        }
    },

    methods: {

        format() {
            let formater = new Formatter(this.source, this.destination)
            formater.format(this.action)
                .then(() => {
                    console.log('Writing complete!')
                    this.$router.push('/success')
                })
        }
    },
}
</script>