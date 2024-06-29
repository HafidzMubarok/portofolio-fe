<template>
    <li class="py-6 md:pb-4 md:pt-3 md:px-4 lg:px-6 hover:md:border-b-4 hover:md:border-b-secondary" 
    :class="{ 'border-s-4 border-s-secondary md:border-s-0 md:border-b-4 md:border-b-secondary font-bold active': props.active }">
        <a :href="props.navLink" class="py-6" @click="props.collapse.collapse()">
            {{ title }}
        </a>
    </li>
</template>

<script setup>

const props = defineProps({
    active: Boolean,
    navLink: String,
    title: String,
    collapse: Object,
});

</script>

<style scoped>
.active{
  background-color: rgba(241,245,249,0.38);
}
</style>