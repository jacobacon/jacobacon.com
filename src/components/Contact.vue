<template>
    <b-container class="main-content">
        <ul>
            <li>
                <b-button variant="link" href="https://www.linkedin.com/in/jacob-beneski-a23a4853/" target="_blank">LinkedIn</b-button>
            </li>
            <li>
                <b-button variant="link" href="mailto:jacob@bene.ski?subject=Lets%20Talk!&body=Hey%20Jacob!%0d%0a%0d%0a%0d%0aYou%20seem%20%20cool!">E-Mail</b-button>
            </li>
            <li>
                <b-button variant="link">Twitter</b-button>
            </li>
        </ul>
    </b-container>
</template>

<script>
    import {BContainer, BButton} from 'bootstrap-vue'
    export default {
        name: "Contact",
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
