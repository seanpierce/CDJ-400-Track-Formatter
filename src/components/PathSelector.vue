<template>
    <div class="path-selector">
        <button @click="getPath()">{{ label }}</button>
    </div>
</template>

<script>
const { dialog } = require('electron').remote

export default {

    props: {
        label: {
            type: String,
            default: 'Select Path'
        }
    },
    
    methods: {

        getPath() {
            dialog.showOpenDialog({
                properties: ['openDirectory']
            }).then(data => {
                console.log(data.filePaths[0])
            })
        }
    }
}
</script>