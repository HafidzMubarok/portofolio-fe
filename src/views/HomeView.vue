<script setup>
import { ref, onMounted } from "vue";

import NavBar from "../components/NavBar.vue";
import Hero from "../components/home/Hero.vue";
import AboutMe from "../components/home/AboutMe.vue";
import Experience from "../components/home/Experience.vue";
import Skills from "../components/home/Skills.vue";
import Education from "../components/home/Education.vue";
import Article from "../components/home/Article.vue";
import Feedback from "../components/home/Feedback.vue";

const currentSection = ref('');

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    currentSection.value = entry.target.getAttribute('id')
                }
            })
        },
        {
            rootMargin: '-250px 0px -250px 0px',
        }
    )

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section)  
    })
});
</script>

<template>
    <NavBar :section="{ currentSection }" />
    <Hero />
    <AboutMe />
    <Experience />
    <Skills />
    <Education />
    <Article />
    <Feedback />
    <a v-if="currentSection != 'home'" href="#home" class="rounded-full fixed w-fit bottom-16 right-16 py-4 px-6 bg-secondary text-light text-center z-10"><i class="fa-solid fa-arrow-up"></i></a>
</template>
