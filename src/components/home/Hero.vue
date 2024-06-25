<template>
    <section id="home" class="px-12 bg-gradient-to-r from-sky-600 to-primary lg:ps-36 lg:h-screen">
        <div class="container py-12 lg:pt-24 lg:pb-12">
            <div class="flex flex-wrap justify-end space-y-6">
                <div class="lg:basis-1/2 self-center space-y-6">
                    <div class="w-full self-center space-y-6 md:w-auto">
                        <h1 class="block font-bold uppercase text-light text-center text-4xl md:text-6xl lg:text-start">{{ profile.first_name }}  {{ profile.last_name }}</h1>
                        <h2 class="font-normal text-light text-center lg:text-start md:text-2xl">{{ profile.professional_motto }}</h2>
                    </div>
                    <div class="w-full self-center space-y-6 md:w-auto">
                        <div class="text-center py-3 lg:text-start">
                            <a href="#about-me"
                                class="text-base font-semibold text-light bg-secondary rounded-md py-3 px-8 hover:shadow-lg hover:opacity-80">Explore
                                <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        
                    </div>
                </div>
                <div class="space-y-6 lg:mx-auto lg:pb-4 lg:basis-1/2">
                    <img src="/img/profile-pic-2.png" alt="Profile Pic" class="max-w-full mx-auto px-16 md:max-w-96 md:ps-0 lg:px-8">
                    <div class="text-light text-center">
                        <a v-if="profile.email" href="#"
                        class="p-3 hover:bg-light hover:text-primary hover:font-semibold hover:rounded-md" 
                            @mouseover="email = true"
                            @mouseleave="email = false">
                            <i class="fa-solid fa-envelope fa-xl"></i>
                            <span v-show="email == true" class="ms-2">{{ profile.email }}</span>
                        </a>
                        <a v-if="profile.whatsapp" href="#"
                        class="p-3 hover:bg-light hover:text-primary hover:font-semibold hover:rounded-md" 
                            @mouseover="whatsapp = true"
                            @mouseleave="whatsapp = false">
                            <i class="fa-brands fa-whatsapp fa-xl"></i>
                            <span v-show="whatsapp" class="ms-2">{{ profile.whatsapp }}</span>
                        </a>
                        <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank"
                            class="p-3 hover:bg-light hover:text-primary hover:font-semibold hover:rounded-md" 
                            @mouseover="linkedin = true"
                            @mouseleave="linkedin = false">
                            <i class="fa-brands fa-linkedin fa-xl"></i>
                            <span v-show="linkedin" class="ms-2">{{ profile.linkedin }}</span>
                        </a>
                        <a v-if="profile.github" :href="profile.github" target="_blank"
                            class="p-3 hover:bg-light hover:text-primary hover:font-semibold hover:rounded-md" 
                            @mouseover="github = true"
                            @mouseleave="github = false">
                            <i class="fa-brands fa-github fa-xl"></i>
                            <span v-show="github" class="ms-2">{{ profile.github }}</span>
                        </a>
                        <a v-if="profile.instagram" :href="profile.instagram" target="_blank" 
                            class="p-3 hover:bg-light hover:text-primary hover:font-semibold hover:rounded-md" 
                            @mouseover="instagram = true"
                            @mouseleave="instagram = false">
                            <i class="fa-brands fa-instagram fa-xl"></i>
                            <span v-show="instagram" class="ms-2">{{ profile.instagram }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';

const profile = ref([]);
const email = ref(false);
const whatsapp = ref(false);
const linkedin = ref(false);
const github = ref(false);
const instagram = ref(false);

const fetchProfiles = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/profile');

        if (response && response.data) {
            profile.value = response.data[0];
            console.log(profile.value);
        } else {
            throw new Error('Struktur data tidak sesuai');
        }
    } catch (error) {
        console.error(error)
    }
}

onMounted(() => {
    fetchProfiles();
});

</script>

<style scoped>

</style>