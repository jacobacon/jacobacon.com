<template>
    <b-container class="main-content">
        <ul>
            <li><b-button variant="link" href="https://jacobacon.com/markov" traget="_blank">Markov Chain Generator</b-button></li>
            <li><b-button variant="link" href="https://github.com/jacobacon/ProgLang" traget="_blank">CookPy - Proof of Concept Programming Language</b-button></li>
            <li><b-button variant="link" href="https://github.com/jacobacon/jacobacon.com" target="_blank">Site Source Code</b-button></li>
            <li><b-button variant="link" href="https://github.com/jacobacon" target="_blank">Much More on my GitHub</b-button></li>
        </ul>
    </b-container>
</template>

<script>
    import {BContainer, BButton} from 'bootstrap-vue'
    export default {
        name: "Projects",
        components: {
            BContainer, BButton
        }
    }
</script>

<style scoped>
    .main-content{
        color: whitesmoke;
    }

    button, .btn-link {
        color: whitesmoke !important;
        font-size: initial !important;
    }
</style>
