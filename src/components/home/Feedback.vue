<template>
    <section id="feedback" class="bg-primary scroll-mt-8 snap-start lg:px-32 lg:pt-20 lg:pb-32">
        <div class="px-10 py-8 text-center space-y-4 lg:px-36 lg:pb-12">
            <h1 class="text-light font-bold text-2xl lg:text-3xl">Feel Free to Send Me Feedback</h1>
            <p class="text-light text-lg font-base">Your feedback will send to my email</p>
        </div>
        <form action="#" method="post">
            <div class="flex flex-col px-6 space-y-6 pb-6 md:px-10 lg:px-40">
                <div class="space-y-6 md:flex md:flex-row md:space-x-4 md:space-y-0 lg:space-x-8">
                    <Input class="text-light md:w-1/2">First Name</Input>
                    <Input class="text-light md:w-1/2">Last Name</Input>
                </div>
                <Input class="text-light">Email</Input>
                <Input class="text-light">Feedback</Input>
                <Button class="bg-secondary text-light">
                    Send Your Feedback
                </Button>
            </div>
        </form>
    </section>
</template>

<script setup>
import Input from "../Input.vue";
import Button from "../Button.vue";
</script>

<style lang="scss" scoped>

</style>