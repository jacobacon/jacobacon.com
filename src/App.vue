<template>
    <div id="app">
        <b-container class="content">
            <img alt="Jacob Beneski Logo" src="./assets/logo.png" height="20%" width="20%">
            <h1 class="my-3">
                Jacob Beneski
            </h1>
            <b-container fluid class="mt-3">
                <b-row class="justify-content-center">
                    <b-button variant="link" @click="click='about'">About</b-button>
                    <b-button variant="link" @click="click='contact'" id="contact-button">Contact</b-button>
                    <b-button variant="link" @click="click='projects'">Projects</b-button>
                </b-row>
            </b-container>
            <Projects v-if="click==='projects'"></Projects>
            <About v-if="click==='about'"></About>
            <Contact v-if="click==='contact'"></Contact>
        </b-container>
    </div>
</template>

<script>
    import {BContainer, BRow, BButton, BPopover} from 'bootstrap-vue'
    import Projects from "@/components/Projects";
    import About from "@/components/About";
    import Contact from "@/components/Contact";

    export default {
        name: 'app',
        components: {
            Contact,
            About,
            Projects,
            BContainer, BRow,
            BButton, BPopover
        },
        data() {
            return {
                click: false
            }
        }
    }
</script>

<style>
    body {
        background: #1B263B !important;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 60px;
    }

    h1 {
        color: whitesmoke;
        font-size: 5.5rem !important;
    }

    button, .btn-link {
        color: whitesmoke !important;
        font-size: 2.5rem !important;
    }

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .content {
        z-index: 999;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    ul {
        list-style: none;
    }
</style>
