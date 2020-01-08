<template>
    <b-container class="main-content">
        <b-img src="../assets/picture.jpg" rounded="circle" alt="Picture of Jacob Beneski" left></b-img>
        <p>Some of my earliest memories involve taking things apart to see how they work. I have always loved diving into the inner workings of anything I can get my hands on. When I was old enough to have my own computer, this desire to learn grew exponentially and I became interested in programming shortly after.</p>

        <p>My formal software education started in my Junior year of high school, and I completed my Computer Science degree from St. Edwards in December of 2019. To satisfy my addiction to leaning, I continued to explore new concepts, tools and programming languages alongside my classwork.</p>

        <p>TL;DR: I'm a hard worker, and I enjoy to learn, but I also like to have fun and relax! Let's grab a beer and talk!</p>
    </b-container>
</template>

<script>
    import {BContainer, BImg } from 'bootstrap-vue'
    export default {
        name: "About",
        components: {
            BContainer, BImg
        }
    }
</script>
