<template>
    <div id="formatter" class="view">
        <h1>CDJ Track Formatter</h1>

        <div>
            <h2>Source</h2>
            <PathSelector :name="'source'" :path="source" />
        </div>
        <div>
            <h2>Destination</h2>
            <PathSelector :name="'destination'" :path="destination" />
        </div>

        <button class="full-width color">Format</button>

        <hr>
        <Nav />
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import PathSelector from '@/components/PathSelector'

export default {

    components: {
        Nav,
        PathSelector
    },

    computed: {

        source() {
            return this.$store.state.source
        },

        destination() {
            return this.$store.state.destination
        }
    }
}
</script>