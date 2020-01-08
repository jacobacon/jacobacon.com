<template>
    <div id="app">
        <b-container class="content">
            <img alt="Jacob Beneski Logo" src="./assets/logo.png" height="240px" width="240px" id="logo">
            <h1 class="my-3">
                Jacob Beneski
            </h1>
            <h3>Software Engineer | B.S. in Computer Science - <a href="https://www.stedwards.edu"> St. Edwards University</a> | Eagle Scout</h3>
            <b-container fluid class="mt-3">
                <b-row class="justify-content-center">
                    <b-col><b-button variant="link" @click="content='about'"><font-awesome-icon icon="user"/>&nbsp;About</b-button></b-col>
                    <b-col><b-button variant="link" @click="content='contact'"><font-awesome-icon icon="address-card"/>&nbsp;Contact</b-button></b-col>
                    <b-col><b-button variant="link" href="/files/Resume-Jacob_Beneski.pdf" download><font-awesome-icon icon="file-alt"/>&nbsp;Resume</b-button></b-col>
                    <b-col><b-button variant="link" @click="content='projects'"><font-awesome-icon icon="code"/>&nbsp;Projects</b-button></b-col>

                </b-row>
            </b-container>
            <transition name="component-fade" mode="out-in">
                <component :is="content" class="mb-3"></component>
            </transition>
        </b-container>
    </div>
</template>

<script>
    import {BContainer, BRow, BButton, BCol} from 'bootstrap-vue'
    import Projects from "@/components/Projects";
    import About from "@/components/About";
    import Contact from "@/components/Contact";

    export default {
        name: 'app',
        components: {
            About,
            Contact,
            Projects,
            BContainer, BRow,
            BButton, BCol
        },
        data() {
            return {
                content: 'about'
            }
        }
    }
</script>

<style>
    body {
        background: #4f5964 !important;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 60px;
    }

    h1 {
        font-size: 5.5rem !important;
    }

    h1, h3, a {
        color: whitesmoke !important;
    }

    .main-content{
        padding: 10px;
        color: whitesmoke;
        background-color: #21262c;
        border-style: groove;
    }

    @media (max-width: 575.98px) {
        h1 {
            font-size: 1.5rem !important;
        }

        #logo{
            height: 50px;
            width: 50px;
        }
    }

    @media (max-width: 767.98px) {
        h1 {
            font-size: 2.5rem !important;
        }

        #logo{
            height: 100px;
            width: 100px;
        }
    }

    @media (max-width: 991.98px) {
        h1 {
            font-size: 3.5rem !important;
        }

        #logo{
            height: 120px;
            width: 120px;
        }
    }

    button, .btn-link {
        color: whitesmoke !important;
        font-size: 2.5rem !important;
    }

    .content {
        z-index: 999;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    ul {
        list-style: none;
    }
</style>
