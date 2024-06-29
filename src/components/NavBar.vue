<template>
  <div class="absolute z-10 top-0 w-full bg-transparent" :class="{ 'sticky': 'home' != props.section.currentSection }">
    <nav>
      <div class="flex flex-col font-semibold space-y-4 text-light text-2xl py-3 md:pb-0 md:justify-center md:text-base md:px-6"
      :class="{ 'bg-primary md:pt-2': 'home' != props.section.currentSection, 'md:pt-8': 'home' == props.section.currentSection , 'bg-primary': !isHidden }">
        <button type="button" class="px-6 text-end sm:flex sm:flex-row sm:justify-end md:hidden" aria-expanded="false" id="menu-btn">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="hidden md:contents uppercase" id="navbar-default">
          <ul class="flex flex-col w-full py-8 absolute text-center bg-primary md:flex md:flex-row md:justify-center md:align-middle md:sticky md:items-center md:space-x-4 md:pt-1 md:pb-0 md:bg-inherit lg:space-x-8">
            
            <nav-item v-for="item in itemDatas" :active="item.section == props.section.currentSection" :collapse="collapse" :nav-link="item.navLink" :title="item.title"/>

            <li class="py-6 md:py-0"><a href="#feedback" @click="collapse.collapse()" class="inline-block rounded bg-light px-6 pb-2 pt-2.5 w-max leading-normal
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
import { onMounted, ref } from 'vue'
import { initFlowbite, Collapse } from 'flowbite'

import NavItem from '../components/NavItem.vue'

const props = defineProps({
  section: Object,
});

const dataCollapseTarget = ref('navbar-default');
const dataCollapseTrigger = ref('menu-btn')
const isHidden = ref(true);
const collapse = ref(null);
const itemDatas = ref([
  {
    title: 'About Me',
    navLink: '#about-me',
    section: 'about-me'
  },
  {
    title: 'History',
    navLink: '#history',
    section: 'history'
  },
  {
    title: 'Technology',
    navLink: '#technology',
    section: 'technology'
  },
  {
    title: 'Education',
    navLink: '#education',
    section: 'education'
  },
  {
    title: 'Article',
    navLink: '#article',
    section: 'article'
  },
]);

const collapseTargetElement = () => {
  const triggerCollapse = document.getElementById(dataCollapseTrigger.value);
  const targetCollapse = document.getElementById(dataCollapseTarget.value);

  const options = {
    onCollapse: () => {
      isHidden.value = true;
    },
    onExpand: () => {
      isHidden.value = false;
    },
    onToggle: () => {
      //
    },
  };

  const instanceOptions = {
    id: dataCollapseTarget.value,
    override: true
  };

  collapse.value = new Collapse(targetCollapse, triggerCollapse, options, instanceOptions);
}

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
  collapseTargetElement();
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