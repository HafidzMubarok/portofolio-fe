<template>
    <section id="history" class="bg-light scroll-mt-8 snap-start lg:py-8">
        <div class="px-10 py-8 text-center space-y-4">
            <h1 class="text-primary font-bold text-2xl lg:text-3xl">My Experience and Job History</h1>
            <p class="text-primary text-base md:text-lg lg:text-xl">Job History</p>
        </div>
        <div
            class="flex flex-col px-6 pb-8 space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:justify-center">
            <Card v-for="work in workHistories" :data-collapse-target="'detail-history-card-'+work._id" :controls="'detail-history-card-'+work._id" btnCollapse>
                <h5 class="mb-2 text-xl font-bold leading-tight">{{ work.company }}</h5>
                <p class="text-base">{{ work.position }}</p>
                <p class="font-light text-sm">{{ formatDate(work.entry_date) }} - {{ formatDate(work.out_date) }}</p>
                <p class="mb-4 text-base hidden" :id="'detail-history-card-'+work._id">
                    {{ work.description }}
                </p>
            </Card>
        </div>
        <div class="px-10 pb-8 text-center space-y-4">
            <p class="text-primary text-base md:text-lg lg:text-xl">Project</p>
        </div>
        <div class="px-6 md:px-24 lg:px-12">
            <swiper
                :enabled="false"
                :direction="'vertical'"
                :slides-per-view="'auto'"
                :space-between="16"
                :pagination="{
                    clickable: true,
                }"
                :navigation="true"
                :breakpoints="{
                    '768': {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        enabled: true,
                        direction: 'horizontal',
                    },
                    '976': {
                        slidesPerView: projectView,
                        spaceBetween: 32,
                        centeredSlides: true,
                        enabled: true,
                        direction: 'horizontal',
                    },
                }"
                :modules="modules"
                class="mySwiper"
                >
                <swiper-slide v-if="projects" v-for="project in projects">
                    <Card :data-collapse-target="'detail-projec-card-'+project._id" :controls="'detail-projec-card-'+project._id" btnCollapse>
                        <h5 v-if="project.title" class="mb-2 text-xl font-bold leading-tight">{{ project.title }}</h5>
                        <p v-if="project.subtitle" class="text-base">{{ project.subtitle }}</p>
                        <p v-if="project.start_date && project.end_date" class="font-light text-sm">{{ formatDate(project.start_date) }} - {{ formatDate(project.end_date) }}</p>
                        <p v-if="project.description" class="mb-4 text-base hidden" :id="'detail-projec-card-'+project._id">
                            {{ project.description }}
                        </p>
                    </Card>
                </swiper-slide>
                <swiper-slide v-else v-for="project in projectData">
                    <Card :data-collapse-target="'detail-projec-card-'+project.id" :controls="'detail-projec-card-'+project.id" btnCollapse>
                        <h5 class="mb-2 text-xl font-bold leading-tight">{{ project.title }}</h5>
                        <p class="text-base">{{ project.subTitle }}</p>
                        <p class="font-light text-sm">{{ project.date }}</p>
                        <p class="mb-4 text-base hidden" :id="'detail-projec-card-'+project.id">
                            {{ project.detail }}
                        </p>
                    </Card>
                </swiper-slide>
            </swiper>
            <div
                class="flex flex-col pb-8 md:hidden">
                <a href="#" class="p-3 font-semibold text-center bg-primary text-light rounded-lg uppercase">
                    Show More Project <i class="fa-solid fa-chevron-down"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '../Card.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { onMounted, ref } from 'vue';

export default {
    components: {
        Card,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const workHistories = ref([]);
        const projects = ref([]);

        const fetchWorkHistories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/works');

                if (response && response.data) {
                    workHistories.value = response.data
                } else {
                    throw new Error('Struktur data tidak sesuai');
                }
            } catch (error) {
                console.error(error)
            }
        }

        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/projects');

                if (response && response.data) {
                    projects.value = response.data
                } else {
                    throw new Error('Struktur data tidak sesuai');
                }
            } catch (error) {
                console.error(error)
            }
        }

        onMounted(() => {
            fetchWorkHistories();
            fetchProjects();
        });

        function formatDate(dateString) {
            let date, month, year, newDate;
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            date = new Date(dateString);

            month = date.getMonth();
            year = new String(date.getFullYear());

            newDate = months[month] + ' ' + year;

            return newDate;
        }
        
        return {
            modules: [Pagination, Navigation],
            workHistories,
            projects,
            projectData: [
                {
                    id: 1,
                    title: "HRIS",
                    subTitle: "Project of PT Lapi Divusi",
                    date: "November 2022 - July 2023",
                    detail: "Involved in the development of employee data management web applications, such as the creation of features based on CRUD based features with Laravel and PostgreSQL technology."
                },
                {
                    id: 2,
                    title: "SI Rukun",
                    subTitle: "Final Project on Politeknik Negeri Bandung",
                    date: "March 2023 - December 2024",
                    detail: "Completed the development of cover letter and certificate management features, population data collection features, and user management features using Laravel, PHP, PostgreSQL, and Bootstrap development technologies."
                },
                {
                    id: 3,
                    title: "SI Rukun",
                    subTitle: "Final Project on Politeknik Negeri Bandung",
                    date: "March 2023 - December 2024",
                    detail: "Completed the development of cover letter and certificate management features, population data collection features, and user management features using Laravel, PHP, PostgreSQL, and Bootstrap development technologies."
                },
                {
                    id: 4,
                    title: "HRIS",
                    subTitle: "Project of PT Lapi Divusi",
                    date: "November 2022 - July 2023",
                    detail: "Involved in the development of employee data management web applications, such as the creation of features based on CRUD based features with Laravel and PostgreSQL technology."
                },
            ],
            formatDate,
        };
    },
    computed: {
        projectView() {
            return this.projectData.length > 2 ? 3 : this.projectData.length > 1 ? 2 : 1;
        }
    },
};
</script>

<style lang="scss" scoped></style>