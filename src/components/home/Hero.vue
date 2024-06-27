<template>
    <section id="home" class="px-12 bg-gradient-to-r from-sky-600 to-primary lg:ps-36 lg:h-screen">
        <div class="container py-12 lg:pt-24 lg:pb-12">
            <div class="flex flex-wrap justify-end space-y-6">
                <div class="lg:basis-1/2 self-center space-y-6">
                    <div class="w-full self-center space-y-6 md:w-auto">
                        <h1 v-if="profile.first_name || profile.last_name" class="block font-bold uppercase text-light text-center text-4xl md:text-6xl lg:text-start">
                            <span v-if="profile.first_name">{{ profile.first_name }}</span> <span v-if="profile.first_name">{{ profile.last_name }}</span>
                        </h1>
                        <h2 v-if="profile.professional_motto" class="font-normal text-light text-center lg:text-start md:text-2xl">{{ profile.professional_motto }}</h2>
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
                    <div class="space-x-6 text-light text-center">
                            <a v-if="profile.email" href="#">
                                <i class="fa-solid fa-envelope fa-xl"></i>
                            </a>
                            <a v-if="profile.whatsapp" href="#">
                                <i class="fa-brands fa-whatsapp fa-xl"></i>
                            </a>
                            <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank">
                                <i class="fa-brands fa-linkedin fa-xl"></i>
                            </a>
                            <a v-if="profile.github" :href="profile.github" target="_blank">
                                <i class="fa-brands fa-github fa-xl"></i>
                            </a>
                            <a v-if="profile.instagram" :href="profile.instagram" target="_blank">
                                <i class="fa-brands fa-instagram fa-xl"></i>
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