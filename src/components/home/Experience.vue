<template>
    <section id="history" class="bg-light scroll-mt-8 snap-start lg:py-8">
        <div class="px-10 py-8 text-center space-y-4">
            <h1 class="text-primary font-bold text-2xl lg:text-3xl">My Experience and Job History</h1>
            <p class="text-primary text-base md:text-lg lg:text-xl">Job History</p>
        </div>
        <div
            class="flex flex-col px-6 pb-8 space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:justify-center">
            <Card data-collapse-target="detail-history-card-1" controls="detail-history-card-1" btnCollapse>
                <h5 class="mb-2 text-xl font-bold leading-tight">PT Lapi Divusi</h5>
                <p class="text-base">Web Developer</p>
                <p class="font-light text-sm">November 2022 - July 2023</p>
                <p class="mb-4 text-base hidden" id="detail-history-card-1">
                    Have been working part-time and involved in the development of employee data management web
                    applications. Working using Laravel framework, Bootstrap, PostgreSQL database, GitLab version
                    control, and other supporting tools. other supporting tools.
                </p>
            </Card>
            <Card data-collapse-target="detail-history-card-2" controls="detail-history-card-2" btnCollapse>
                <h5 class="mb-2 text-xl font-bold leading-tight">PT Lapi Divusi</h5>
                <p class="text-base">Web Developer</p>
                <p class="font-light text-sm">November 2022 - July 2023</p>
                <p class="mb-4 text-base hidden" id="detail-history-card-2">
                    Involved in the development of employee data management web applications, such as the creation of
                    features based on CRUD based features with Laravel and PostgreSQL technology.
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
                <swiper-slide v-for="project in projectData">
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

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
    components: {
        Card,
        Swiper,
        SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
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
        ]
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