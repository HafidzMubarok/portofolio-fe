<template>
    <section id="feedback" class="bg-primary scroll-mt-8 snap-start lg:px-32 lg:pt-20 lg:pb-32">
        <div class="px-10 py-8 text-center space-y-4 lg:px-36 lg:pb-12">
            <h1 class="text-light font-bold text-2xl lg:text-3xl">Feel Free to Send Me Feedback</h1>
            <p class="text-light text-lg font-base">Your feedback will send to my email</p>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="flex flex-col px-6 space-y-6 pb-6 md:px-10 lg:px-40">
                <div class="space-y-6 md:flex md:flex-row md:space-x-4 md:space-y-0 lg:space-x-8">
                    <div class="space-y-2 md:w-1/2">
                        <span class="font-semibold text-light">First Name</span>
                        <input id="firstName" v-model="firstName" class="rounded-lg p-3 border-0 outline-0 focus:ring-2 focus:ring-secondary ring-inset w-full text-primary" />
                    </div>
                    <div class="space-y-2 md:w-1/2">
                        <span class="font-semibold text-light">Last Name</span>
                        <input id="lastName" v-model="lastName" class="rounded-lg p-3 border-0 outline-0 focus:ring-2 focus:ring-secondary ring-inset w-full text-primary" />
                    </div>
                </div>
                <div class="space-y-2">
                    <span class="font-semibold text-light">Email</span>
                    <input id="email" v-model="email" class="rounded-lg p-3 border-0 outline-0 focus:ring-2 focus:ring-secondary ring-inset w-full text-primary" />
                </div>
                <div class="space-y-2">
                    <span class="font-semibold text-light">Your Feedback</span>
                    <input id="feedback" v-model="feedback" class="rounded-lg p-3 border-0 outline-0 focus:ring-2 focus:ring-secondary ring-inset w-full text-primary" />
                </div>
                <button type="submit" class="text-base font-semibold text-light bg-secondary rounded-md py-3 px-8 hover:shadow-lg hover:opacity-80">
                    Send Your Feedback
                </button>
            </div>
        </form>
    </section>
</template>

<script setup>
import Input from "../Input.vue";
import Button from "../Button.vue";
import { ref, onMounted } from "vue";
import axios from 'axios';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const feedback = ref('');

const handleSubmit = async () => {
    try {
        const response = await axios.post('http://localhost:3000/api/feedback', {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            feedback: feedback.value,
        });

        if (response.status == 200) {
            console.log(response);
        } else {
            console.log(response);
        }
    } catch (error) {
        throw new Error('Struktur data tidak sesuai');
    }
}
</script>

<style lang="scss" scoped>

</style>