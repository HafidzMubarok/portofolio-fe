<template>
    <section id="about-me" class="bg-primary scroll-mt-8 snap-start h-screen lg:px-24 lg:py-8">
        <div class="flex flex-col h-full justify-center px-10 py-8 space-y-4">
            <h1 class="text-light font-bold text-2xl lg:text-3xl">About Me</h1>
            <p v-if="profile.about_me" class="lg:text-lg text-light">
                {{ profile.about_me }}
            </p>
            <div v-else class="pt-32 pb-60">
                <h1 class="text-light text-center opacity-70 font-bold text-2xl lg:text-3xl">About me not yet added</h1>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';

const profile = ref([]);

// const fetchProfiles = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/api/profile');

//         if (response && response.data) {
//             profile.value = response.data[0];
//             console.log(profile.value);
//         } else {
//             throw new Error('Struktur data tidak sesuai');
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }

const fetchProfiles = async () => {
    try {
        const response = await axios.get('https://fathul-portofolio-be.fly.dev/api/profile');

        if (response && response.data) {
            profile.value = response.data[0];
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

<style lang="scss" scoped></style>