<template>
    <section id="article" class="bg-white scroll-mt-8 snap-start">
        <div class="px-10 py-8 text-start space-y-4 lg:pt-20 lg:px-32">
            <h1 class="text-primary font-bold text-2xl lg:text-3xl">My Recent Article</h1>
            <p class="text-primary text-lg font-base">Stay Informed!</p>
        </div>
        <div class="px-10 pb-8 text-left lg:pt-6 lg:px-32">
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
                        spaceBetween: 10,
                        enabled: true,
                        direction: 'horizontal',
                    },
                    '976': {
                        slidesPerView: articleView,
                        spaceBetween: 32,
                        enabled: true,
                        direction: 'horizontal',
                    },
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-if="articles" v-for="article in articles" :key="article._id" class="py-2 px-2">
                    <Card class="drop-shadow-lg" btn-text="Read More">
                        <img src="/img/education-logo.svg" alt="education logo" class="max-h-40 w-screen pb-4">
                        <p v-if="article.created_at" class="text-base text-end">{{ formatDate(article.created_at) }}</p>
                        <h5 v-if="article.title" class="text-primary text-xl font-bold leading-tight mb-5">{{ article.title }}</h5>
                        <p v-if="article.content" class="mb-4 text-base truncate">
                            {{ article.content }}
                        </p>
                    </Card>
                </swiper-slide>
                <swiper-slide v-else v-for="article in articleDatas" :key="article.id" class="py-2 px-2">
                    <Card class="drop-shadow-lg" btn-text="Read More">
                        <img src="/img/education-logo.svg" alt="education logo" class="max-h-40 w-screen pb-4">
                        <p v-if="article.date" class="text-base text-end">{{ article.date }}</p>
                        <h5 v-if="article.title" class="text-primary text-xl font-bold leading-tight mb-5">{{ article.title }}</h5>
                        <p v-if="article.description" class="mb-4 text-base truncate">
                            {{ article.description }}
                        </p>
                    </Card>
                </swiper-slide>
            </swiper>
            <div class="flex flex-col pb-8 md:hidden">
                <a href="#" class="p-3 font-bold text-center bg-primary text-light rounded-lg uppercase">
                    Show More Article
                    <i class="fa-solid fa-chevron-down"></i></a>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '../Card.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import { onMounted, ref } from "vue";

import axios from 'axios';

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
        const articles = ref([]);

        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/article/all');

                if (response && response.data) {
                    articles.value = response.data;
                    console.log(articles.value);
                } else {
                    throw new Error('Struktur data tidak sesuai');
                }
            } catch (error) {
                console.error(error);
            }
        }

        onMounted(() => {
            fetchArticles()
        });

        function formatDate(dateString) {
            let day, date, month, year, newDate;
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            date = new Date(dateString);

            day = date.getDate();
            month = date.getMonth();
            year = new String(date.getFullYear());

            newDate = day + ' ' + months[month] + ' ' + year;

            return newDate;
        }
      return {
        modules: [Pagination, Navigation],
        articles,
        formatDate,
        articleDatas: [
            {
                id: 1,
                date: "January 2024",
                title: "POLBAN Final Project Deadline Has Been Extended",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi amet harum enim, iusto recusandae repudiandae delectus ad exercitationem corporis. Blanditiis dolore accusamus modi magnam veniam officia sint mollitia? Sequi, voluptatum."
            },
            {
                id: 2,
                date: "January 2024",
                title: "POLBAN Final Project Deadline Has Been Extended",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi amet harum enim, iusto recusandae repudiandae delectus ad exercitationem corporis. Blanditiis dolore accusamus modi magnam veniam officia sint mollitia? Sequi, voluptatum."
            },
            {
                id: 3,
                date: "January 2024",
                title: "POLBAN Final Project Deadline Has Been Extended",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi amet harum enim, iusto recusandae repudiandae delectus ad exercitationem corporis. Blanditiis dolore accusamus modi magnam veniam officia sint mollitia? Sequi, voluptatum."
            },
            {
                id: 4,
                date: "January 2024",
                title: "POLBAN Final Project Deadline Has Been Extended",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi amet harum enim, iusto recusandae repudiandae delectus ad exercitationem corporis. Blanditiis dolore accusamus modi magnam veniam officia sint mollitia? Sequi, voluptatum."
            },
        ],
      };
    },
    computed: {
        articleView() {
            return this.articleDatas.length >= 2 ? 2 : 1;
        }
    },
};
</script>

<style lang="scss" scoped></style>