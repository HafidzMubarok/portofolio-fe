<template>
  <div class="absolute z-10 top-0 w-full bg-transparent" :class="{ 'sticky': 'home' != props.section.currentSection }">
    <nav>
      <div class="flex flex-col font-semibold space-y-4 text-light text-2xl py-3 md:pb-0 md:pt-8 md:justify-center md:text-base md:px-6"
      :class="{ 'bg-primary md:pt-2': 'home' != props.section.currentSection }">
        <button data-collapse-toggle="navbar-default" type="button" class="px-6 text-end sm:flex sm:flex-row sm:justify-end md:hidden" aria-controls="navbar-default" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="hidden md:contents uppercase" id="navbar-default">
          <ul class="flex flex-col w-full py-8 absolute text-center bg-primary md:flex md:flex-row md:justify-center md:align-middle md:sticky md:items-center md:space-x-4 md:pt-1 md:pb-0 md:bg-inherit lg:space-x-8">
            <li class="py-6 md:pb-4 md:pt-3 md:px-4 lg:px-6 hover:md:border-b-4 hover:md:border-b-secondary" :class="{ 'border-s-4 border-s-secondary md:border-s-0 md:border-b-4 md:border-b-secondary font-bold active': 'about-me' == props.section.currentSection }">
              <a href="#about-me">
                About Me
              </a>
            </li>
            <li class="py-6 md:pb-4 md:pt-3 md:px-4 lg:px-6 hover:md:border-b-4 hover:md:border-b-secondary" :class="{ 'border-s-4 border-s-secondary md:border-s-0 md:border-b-4 md:border-b-secondary font-bold active': 'history' == props.section.currentSection }">
              <a href="#history">
                History
              </a>
            </li>
            <li class="py-6 md:pb-4 md:pt-3 md:px-4 lg:px-6 hover:md:border-b-4 hover:md:border-b-secondary" :class="{ 'border-s-4 border-s-secondary md:border-s-0 md:border-b-4 md:border-b-secondary font-bold active': 'technology' == props.section.currentSection }">
              <a href="#technology">
                Technology
              </a>
            </li>
            <li class="py-6 md:pb-4 md:pt-3 md:px-4 lg:px-6 hover:md:border-b-4 hover:md:border-b-secondary" :class="{ 'border-s-4 border-s-secondary md:border-s-0 md:border-b-4 md:border-b-secondary font-bold active': 'education' == props.section.currentSection }">
              <a href="#education">
                Education
              </a>
            </li>
            <li class="py-6 md:pb-4 md:pt-3 md:px-4 lg:px-6 hover:md:border-b-4 hover:md:border-b-secondary" :class="{ 'border-s-4 border-s-secondary md:border-s-0 md:border-b-4 md:border-b-secondary font-bold active': 'article' == props.section.currentSection }">
              <a href="#article">
                Article
              </a>
            </li>
            <li class="py-6 md:py-0"><a href="#feedback" class="inline-block rounded bg-light px-6 pb-2 pt-2.5 w-max leading-normal
                  text-primary shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:opacity-80 hover:shadow-primary-2
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
  background-color: rgba(241,245,249,0.38);
}

.hero{
  padding-top: 40px;
}
</style>