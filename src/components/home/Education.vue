<template>
    <section id="education" class="bg-light scroll-mt-8 snap-start">
        <div class="px-10 py-8 text-center space-y-4 lg:pt-20">
            <h1 class="text-primary font-bold text-2xl lg:text-3xl">My Education</h1>
        </div>
        <div class="flex flex-col px-6 pb-8 space-y-4 text-left lg:px-32 lg:pt-6">
            <Card class="md:max-w-full lg:max-w-full" data-collapse-target="detail-education-card-1" btnCollapse>
                <img src="/img/education-logo.svg" alt="education logo" class="max-w-20 pb-4">
                <h5 class="text-primary text-xl font-bold leading-tight mb-5">Politeknik Negeri Bandung</h5>
                <p class="text-base">Bachelor Degree of Technology</p>
                <p class="font-light text-sm">July 2019 - January 2024</p>
                <p class="mb-4 text-base hidden" id="detail-education-card-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi amet harum enim, iusto recusandae
                    repudiandae delectus ad exercitationem corporis. Blanditiis dolore accusamus modi magnam veniam
                    officia sint mollitia? Sequi, voluptatum.
                </p>
            </Card>
        </div>
    </section>
</template>

<script setup>
import Card from "../Card.vue";
</script>

<style lang="scss" scoped></style>