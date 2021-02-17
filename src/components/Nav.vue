<template>
    <div id="nav">
        <router-link v-if="route !== 'Formatter'"
            to="/format"
            tag="button" 
            class="full-width">
            Start
        </router-link>

        <router-link to="/how"
            tag="button" 
            class="half-width">
            How it works
        </router-link>

        <router-link to="/why"
            tag="button" 
            class="half-width">
            Why?
        </router-link>
    </div>
</template>

<script>
export default {
    
    computed: {
        route() {
            return this.$route.name
        }
    }
}
</script>