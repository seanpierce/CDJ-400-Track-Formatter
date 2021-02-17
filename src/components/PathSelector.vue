<template>
    <div class="path-selector">
        <span v-if="!path" @click="getPath()">{{ label }}</span>
        <div v-if="path">{{ path }}</div>
        <span v-if="path" @click="getPath()">Edit</span>
    </div>
</template>

<script>
const { dialog } = require('electron').remote

export default {

    props: {
        name: {
            type: String,
            default: null    
        },
        label: {
            type: String,
            default: 'Select Path'
        },
        path: {
            type: String,
            default: null
        }
    },
    
    methods: {

        getPath() {
            dialog.showOpenDialog({
                properties: ['openDirectory']
            }).then(data => {
                let path = data.filePaths[0]
                let payload = {
                    name: this.name,
                    path: path
                }
                this.$store.dispatch('setPath', payload)
            })
        }
    }
}
</script>