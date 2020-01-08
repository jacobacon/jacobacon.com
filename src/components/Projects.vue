<template>
    <b-container class="main-content">
        <ul class="mt-3">
            <li><b-button variant="link" href="/files/WeIoT-Project-Concept.pdf" download><h4><span class="underline">We-IoT (Senior Level Project)</span></h4></b-button><p>A Digital Transformation IoT system PoC for Wind Turbine farms developed by a 7 person Scrum Team at St. Edwards. I worked in QA, and DevOps as well as testing. Skills involved include virtualization, linux server deployment, QA, unit testing in Node, as well as integration testing and CI/CD for a complex integrated WebApp.</p></li>
            <li><b-button variant="link" href="https://jacobacon.com/markov" traget="_blank"><h4><span class="underline">Markov Chain Generator</span></h4></b-button><p>Markov chains are mathematical tools used to predict the next outcome based only off the current state of a system. They are useful for speech prediction, population trends and other analytics. This is a simple Markov chain generator that takes 'training' text, and generates a new paragraph based on the probabilities of each word following some other word.</p></li>
            <li><b-button variant="link" href="https://github.com/jacobacon/ProgLang" traget="_blank"><h4><span class="underline">CookPy</span></h4></b-button><p>A Proof of Concept interpreted stack based programming language developed for Programming Languages course at St. Edwards. Basic functionality is complete including: mathematics, variables, I/O, as well as stack modification</p></li>
            <li><b-button variant="link" href="https://blog.jacobacon.com" target="_blank"><h4><font-awesome-icon icon="blog"/>&nbsp;Blog</h4></b-button></li>
            <li><b-button variant="link" href="https://github.com/jacobacon" target="_blank"><h4><font-awesome-icon :icon="['fab', 'github']" />&nbsp;<span>Much more on my GitHub!</span></h4></b-button><p>Personal GitHub includes more personal projects as well as all my classwork & homework from St. Edwards University</p></li>
            <li><b-button variant="link" href="https://github.com/jacobacon/jacobacon.com" target="_blank"><h4><font-awesome-icon icon="file-code" />&nbsp;<span>Site Source Code</span></h4></b-button></li>
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
    button {
        color: whitesmoke !important;
        font-size: initial !important;
    }

    .underline {
        text-decoration: underline;
    }
</style>
