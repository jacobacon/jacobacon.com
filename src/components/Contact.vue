<template>
    <b-container class="main-content">
        <b-row class="justify-content-center">
            <b-col>
                 <b-button variant="link" href="https://www.linkedin.com/in/jacob-beneski-a23a4853/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" />&nbsp;LinkedIn</b-button>
            </b-col>
            <b-col>
                <b-button variant="link" href="https://github.com/jacobacon" target="_blank"><font-awesome-icon :icon="['fab', 'github']" />&nbsp;GitHub</b-button>
            </b-col>
            <b-col>
                <b-button variant="link" href="mailto:jacob@bene.ski?subject=Lets%20Talk!&body=Hey%20Jacob!%0d%0a%0d%0a%0d%0aYou%20seem%20%20cool!"><font-awesome-icon icon="at" />&nbsp;E-Mail</b-button>
            </b-col>
        </b-row>
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
