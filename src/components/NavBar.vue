<template>
  <div class="sticky top-0 w-full bg-gradient-to-r from-sky-600 to-primary z-10">
    <nav>
      <div class="flex flex-col font-semibold space-y-4 text-light text-2xl py-3 md:justify-center md:text-base md:px-6">
        <button data-collapse-toggle="navbar-default" type="button" class="px-6 text-end sm:flex sm:flex-row sm:justify-end md:hidden" aria-controls="navbar-default" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="hidden md:contents uppercase" id="navbar-default">
          <ul class="flex flex-col w-full space-y-8 py-8 absolute text-center bg-primary md:flex md:flex-row md:justify-center md:sticky md:items-center md:space-x-8 md:space-y-0 md:py-0 md:bg-inherit lg:space-x-16">
            <li><a href="#about-me" :class="{ active: 'about-me' == props.section.currentSection }">About Me</a></li>
            <li><a href="#history" :class="{ active: 'history' == props.section.currentSection }">History</a></li>
            <li><a href="#technology" :class="{ active: 'technology' == props.section.currentSection }">Technology</a></li>
            <li><a href="#education" :class="{ active: 'education' == props.section.currentSection }">Education</a></li>
            <li><a href="#article" :class="{ active: 'article' == props.section.currentSection }">Article</a></li>
            <li><a href="#feedback" class="inline-block rounded bg-light px-6 pb-2 pt-2.5 w-max leading-normal
                  text-primary shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2
                  focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600
                  active:shadow-primary-2" data-twe-ripple-init data-twe-ripple-color="light">
                  <i class="fa-solid fa-reply me-0.5"></i> Feedback
            </a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const props = defineProps({
  section: Object,
});

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<style scoped>
.active{
  font-weight: bold;
  border-bottom: 2px solid #f1f5f9;
  /* background-color: #f1f5f9;
  color: #172554;
  padding: 8px 24px 8px 24px;
  border-radius: 4px; */
}
</style>