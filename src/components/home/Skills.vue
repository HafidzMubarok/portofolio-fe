<template>
    <section id="technology" class="bg-primary scroll-mt-8 snap-start lg:py-8">
        <div class="px-10 py-8 text-end space-y-4 lg:px-36 lg:mb-12">
            <h1 class="text-light font-bold text-2xl lg:text-3xl">Technology That I Usually Use</h1>
        </div>
        <div class="flex flex-col px-6 pb-8 space-y-4 md:items-center text-center lg:px-0 lg:flex-row lg:flex-wrap lg:space-x-4 lg:space-y-0 lg:justify-center">
            <Card v-if="skills && skills.length != 0" v-for="(skill, index) in skills" 
            class="lg:max-w-xs" :data-collapse-target="'detail-skill-card-'+index" :controls="'detail-skill-card-'+index" 
            :btn-disable="!skill.description" btnCollapse>
                <i v-if="skill.icon" class="fa-brands text-7xl" :class="'fa-'+skill.icon"></i>
                <h5 v-if="skill.name" class="text-primary text-xl font-bold leading-tight mb-5">{{ skill.name }}</h5>
                <p v-if="skill.description" class="mb-4 text-base hidden" :id="'detail-skill-card-'+index">
                    {{ skill.description }}
                </p>
            </Card>
            <div v-else class="pt-32 pb-60">
                <h1 class="text-light text-center opacity-70 font-bold text-2xl lg:text-3xl">Technology not yet added</h1>
            </div>
            <div class="flex flex-col pb-8 lg:hidden">
                <a href="#" class="p-3 font-bold text-center bg-secondary text-light rounded-lg uppercase">Show
                    More Technology
                    <i class="fa-solid fa-chevron-down"></i></a>
            </div>
        </div>
    </section>
</template>

<script>
import Card from "../Card.vue";
import { onMounted, ref } from "vue";
import axios from 'axios';

import { defineAsyncComponent } from "vue";

// const Card = defineAsyncComponent(() =>
//     import("../Card.vue")
// );

export default {
    components: {
        Card,
    },
    setup() {
        const skills = ref([]);

        // const fetchSkills = async () => {
        //     try {
        //         const response = await axios.get('http://localhost:3000/api/skill/all');

        //         if (response && response.data) {
        //             skills.value = response.data;
        //             console.log(skills.value);
        //         } else {
        //             throw new Error('Struktur data tidak sesuai');
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
        
        const fetchSkills = async () => {
            try {
                const response = await axios.get('https://fathul-portofolio-be.fly.dev/api/skill/all');
                
                if (response && response.data) {
                    skills.value = response.data;
                } else {
                    throw new Error('Struktur data tidak sesuai');
                }
            } catch (error) {
                console.error(error);
            }
        }

        onMounted(() => {
            fetchSkills();
        });

        return {
            skills,
        }
    }
};
</script>

<style lang="scss" scoped></style>