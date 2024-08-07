<template>
    <section id="education" class="bg-light scroll-mt-8 snap-start">
        <div class="px-10 py-8 text-center space-y-4 lg:pt-20">
            <h1 class="text-primary font-bold text-2xl lg:text-3xl">My Education</h1>
        </div>
        <div class="flex flex-col px-6 pb-8 space-y-4 text-left lg:px-32 lg:pt-6">
            <Card v-if="educations.length != 0" v-for="(education, index) in educations" 
            class="md:max-w-full lg:max-w-full" :data-collapse-target="'detail-education-card-'+index" :controls="'detail-education-card-'+index" 
            :btn-disable="!education.description" btnCollapse>
                <img src="/img/education-logo.svg" alt="education logo" class="max-w-20 pb-4">
                <h5 v-if="education.institution" class="text-primary text-xl font-bold leading-tight mb-5">{{ education.institution }}</h5>
                <p v-if="education.qualification" class="text-base">{{ education.qualification }}</p>
                <p v-if="education.start_date || education.end_date" class="font-light text-sm">
                    <span v-if="education.start_date">{{ formatDate(education.start_date) }}</span> - <span v-if="education.end_date">{{ formatDate(education.end_date) }}</span><span v-else>Now</span>
                </p>
                <p v-if="education.description" class="mb-4 text-base hidden" :id="'detail-education-card-'+index">
                    {{ education.description }}
                </p>
            </Card>
            <div v-else class="pt-32 pb-60">
                <h1 class="text-primary text-center opacity-70 font-bold text-2xl lg:text-3xl">Education not yet added</h1>
            </div>
        </div>
    </section>
</template>

<script setup>
import Card from "../Card.vue";
import { ref, onMounted } from "vue";

import axios from 'axios';

const educations = ref([]);

// const fetchEducations = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/api/education/all');

//         if (response && response.data) {
//             educations.value = response.data;
//             console.log(educations.value);
//         } else {
//             throw new Error('Struktur data tidak sesuai');
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }

const fetchEducations = async () => {
    try {
        const response = await axios.get('https://fathul-portofolio-be.fly.dev/api/education/all');

        if (response && response.data) {
            educations.value = response.data;
        } else {
            throw new Error('Struktur data tidak sesuai');
        }
    } catch (error) {
        console.error(error)
    }
}

function formatDate(dateString) {
    let date, month, year, newDate;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    date = new Date(dateString);

    month = date.getMonth();
    year = new String(date.getFullYear());

    newDate = months[month] + ' ' + year;

    return newDate;
}

onMounted(() => {
    fetchEducations();
});
</script>

<style lang="scss" scoped></style>