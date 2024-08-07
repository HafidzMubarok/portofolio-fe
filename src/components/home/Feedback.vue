<template>
    <section id="feedback" class="bg-primary scroll-mt-8 snap-start lg:px-32 lg:pt-20 lg:pb-32">
        <div class="px-10 py-8 text-center space-y-4 lg:px-36 lg:pb-12">
            <h1 class="text-light font-bold text-2xl lg:text-3xl">Feel Free to Send Me Feedback</h1>
            <p class="text-light text-lg font-base">Your feedback will send to my email</p>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="flex flex-col px-6 space-y-6 pb-6 md:px-10 lg:px-40">
                <div class="space-y-6 md:flex md:flex-row md:space-x-4 md:space-y-0 lg:space-x-8">
                    <Input 
                        input-id="firstName" 
                        :input-model="firstName"
                        @update:input-model="$event => (firstName = $event)"
                        class="font-semibold text-light md:w-1/2">
                        First Name
                    </Input>
                    <Input 
                        input-id="lastName" 
                        :input-model="lastName"
                        @update:input-model="$event => (lastName = $event)"
                        class="font-semibold text-light md:w-1/2">
                        Last Name
                    </Input>
                </div>
                <Input 
                    input-id="email" 
                    :input-model="email"
                    @update:input-model="$event => (email = $event)"
                    class="font-semibold text-light">Email</Input>
                <Input 
                    input-id="feedback" 
                    :input-model="feedback"
                    @update:input-model="$event => (feedback = $event)"
                    class="font-semibold text-light">Your Feedback</Input>
                <Button btn-text="Send Your Feedback" :loading="loading" :success="success" btnSubmit />
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
const loading = ref(false);
const success = ref(false);
const failed = ref(false);

// const handleSubmit = async () => {
//     try {
//         loading.value = true;
//         const response = await axios.post('http://localhost:3000/api/feedback', {
//             firstName: firstName.value,
//             lastName: lastName.value,
//             email: email.value,
//             feedback: feedback.value,
//         });

//         if (response.status == 200) {
//             console.log(response);
//             loading.value = false;
//             success.value = true;
//             setTimeout(() => {
//                 success.value = false;
//                 firstName.value = '';
//                 lastName.value = '';
//                 email.value = '';
//                 feedback.value = '';
//                 // location.reload();
//             }, 1000); // Success animation


//         } else {
//             console.log(response);
//         }
//     } catch (error) {
//         throw new Error('Struktur data tidak sesuai');
//     }
// }

const handleSubmit = async () => {
    try {
        loading.value = true;
        const response = await axios.post('https://fathul-portofolio-be.fly.dev/api/feedback', {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            feedback: feedback.value,
        });
        
        if (response.status == 200) {
            loading.value = false;
            success.value = true;
            setTimeout(() => {
                success.value = false;
                firstName.value = '';
                lastName.value = '';
                email.value = '';
                feedback.value = '';
                // location.reload();
            }, 1000); // Success animation
            

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