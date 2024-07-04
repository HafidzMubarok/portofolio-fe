<template>
    <section id="home" class="px-12 bg-gradient-to-r from-sky-600 to-primary lg:ps-36 lg:h-screen">
        <div class="container mx-auto py-28 md:pt-44 lg:pb-12">
            <div class="flex flex-wrap justify-center space-y-6">
                <div class="lg:basis-1/2 self-center space-y-6">
                    <div class="w-full self-center space-y-6 md:w-auto">
                        <h1 v-show="profile.first_name || profile.last_name" class="block font-bold uppercase text-light text-center text-4xl md:text-6xl lg:text-start">
                            <span v-show="profile.first_name">{{ profile.first_name }}</span> <span v-show="profile.first_name">{{ profile.last_name }}</span>
                        </h1>
                        <h2 v-show="profile.professional_motto" class="font-normal text-light text-center lg:text-start md:text-2xl">{{ profile.professional_motto }}</h2>
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
                    <img src="/img/profile-pic-2.png" alt="Profile Pic" class="bg-no-repeat bg-center bg-contain bg-blob rounded-full mx-auto size-60 md:size-80">
                    <div class="text-light text-center mt-0">
                        <!-- Start Email Icon -->
                        <button v-show="profile.email" id="emailBtn" @click="copy(profile.email)" type="button" class="p-3 " 
                            @mouseover="email = true; setTooltip(profile.email, 'emailTooltip', 'emailBtn')"
                            @mouseleave="email = false">
                            <i class="fa-solid hover:-translate-y-1 transition ease-out delay-150 duration-200" :class="{ 'fa-2xl fa-envelope-open': email, 'fa-xl fa-envelope': !email }"></i>
                        </button>
                        <div id="emailTooltip" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-light bg-primary rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ tooltipMessage }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <!-- End of Email Icon -->

                        <!-- Start of Whatsapp Icon -->
                        <button v-show="profile.whatsapp" id="waBtn" @click="copy(profile.whatsapp)"
                        class="p-3 " 
                            @mouseover="whatsapp = true, setTooltip(profile.whatsapp, 'emailTooltip', 'waBtn')"
                            @mouseleave="whatsapp = false">
                            <i class="fa-brands fa-whatsapp transition ease-out delay-150 duration-200 hover:-translate-y-1" :class="{ 'fa-2xl': whatsapp, 'fa-xl': !whatsapp }"></i>
                        </button>
                        <div id="waTooltip" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-light bg-primary rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ tooltipMessage }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <!-- End of Whatsapp Icon -->

                        <!-- Start of linkedin Icon -->
                        <a v-show="profile.linkedin" :href="profile.linkedin" target="_blank"
                            class="p-3 " id="linkedinBtn"
                            @mouseover="linkedin = true; setTooltip(profile.linkedin, 'linkedinTooltip', 'linkedinBtn')"
                            @mouseleave="linkedin = false">
                            <i class="fa-brands fa-linkedin transition ease-out delay-150 duration-200 hover:-translate-y-1" :class="{ 'fa-2xl': linkedin, 'fa-xl': !linkedin }"></i>
                        </a>
                        <div id="linkedinTooltip" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-light bg-primary rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ tooltipMessage }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <!-- End of linkedin Icon -->

                        <!-- Start of github Icon -->
                        <a v-show="profile.github" :href="profile.github" target="_blank"
                            class="p-3 " id="githubBtn"
                            @mouseover="github = true; setTooltip(profile.github, 'githubTooltip', 'githubBtn')"
                            @mouseleave="github = false">
                            <i class="fa-brands fa-github transition ease-out delay-150 duration-200 hover:-translate-y-1" :class="{ 'fa-2xl': github, 'fa-xl': !github }"></i>
                        </a>
                        <div id="githubTooltip" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-light bg-primary rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ tooltipMessage }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <!-- End of github Icon -->

                        <!-- Start of instagram Icon -->
                        <a v-show="profile.instagram" :href="profile.instagram" target="_blank" 
                            class="p-3 " id="instagramBtn"
                            @mouseover="instagram = true; setTooltip(profile.instagram, 'instagramTooltip', 'instagramBtn')"
                            @mouseleave="instagram = false">
                            <i class="fa-brands fa-instagram transition ease-out delay-150 duration-200 hover:-translate-y-1" :class="{ 'fa-2xl': instagram, 'fa-xl': !instagram }"></i>
                        </a>
                        <div id="instagramTooltip" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-light bg-primary rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ tooltipMessage }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <!-- End of instagram Icon -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';

import { Tooltip } from 'flowbite';

const profile = ref([]);
const email = ref(false);
const whatsapp = ref(false);
const linkedin = ref(false);
const github = ref(false);
const instagram = ref(false);
const tooltipMessage = ref('');
const tooltip = ref({});

const fetchProfiles = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/profile');

        if (response && response.data) {
            profile.value = response.data[0];
        } else {
            throw new Error('Struktur data tidak sesuai');
        }
    } catch (error) {
        console.error(error)
    }
}

const setTooltip = (message, tooltipId, buttonId) => {
    const $target = document.getElementById(tooltipId);
    const $trigger = document.getElementById(buttonId);
    
    const options = {
        placement: 'bottom',
        onHide: () => {
            //
        },
        onShow: () => {
            tooltipMessage.value = message;
        },
        onToggle: () => {
            console.log('tooltip is toggled');
        },
    };

    const instanceOptions = {
        id: tooltipId,
        override: true
    };
    // console.log($target);
    tooltip.value = new Tooltip($target, $trigger, options, instanceOptions);
}

const copy = (item) => {
    // tooltipMessage.value = item;
    navigator.clipboard.writeText(item).then(
    function () {
        tooltipMessage.value = 'copied to clopboard!'; // success 
    })
    .catch(
        function() {
        tooltipMessage.value = 'error!'; // error
    });
}

onMounted(() => {
    fetchProfiles();
    // emailTooltip();
});

</script>

<style scoped>

</style>