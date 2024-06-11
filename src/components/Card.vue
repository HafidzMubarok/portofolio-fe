<template>
    <div
        class="block rounded-lg bg-white p-12 text-surface shadow-secondary-1 text-primary space-y-4 md:max-w-xs md:w-full md:h-fit lg:max-w-md">
        <slot></slot>
        <button v-if="btnCollapse" type="button" class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 w-max text-xs font-medium uppercase leading-normal 
                text-light shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 
                focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 
                active:shadow-primary-2" data-twe-ripple-init data-twe-ripple-color="light"
                :data-collapse-toggle="props.dataCollapseTarget" :aria-controls="props.controls" aria-expanded="false">
            {{ setBtnText }}
        </button>
        <button v-else type="button" class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 w-max text-xs font-medium uppercase leading-normal 
                text-light shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 
                focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 
                active:shadow-primary-2" data-twe-ripple-init data-twe-ripple-color="light">
            {{ btnText }}
        </button>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
    dataCollapseTarget: String,
    controls: String,
    btnText: String,
    btnCollapse: Boolean,
});

const dataCollapseTarget = ref(props.dataCollapseTarget);
const btnCollapse = ref(props.btnCollapse);
const btnText = ref(props.btnText);

const isHidden = ref(false);
const observer = ref(null);

const setBtnText = computed(() => {
    return isHidden.value ? 'Show Detail' : 'Hide';
});

const checkHiddenClass = () => {
    const targetElement = document.getElementById(dataCollapseTarget.value);
    if (targetElement) {
        isHidden.value = targetElement.classList.contains('hidden');
    }
}

const observeTargetElement = () => {
    const targetObserver = document.getElementById(dataCollapseTarget.value);
    if (targetObserver) {
        observer.value = new MutationObserver(() => {
            checkHiddenClass();
        });
        observer.value.observe(targetObserver, {
            attributes: true,
            attributeFilter: ['class'],
        });
    }
}

onMounted(() => {
    checkHiddenClass();
    observeTargetElement();
});
</script>

<style lang="scss" scoped></style>