<template>
    <div class="space-y-2">
        <span class="font-semibold">
            <slot></slot>
        </span>
        <input 
            type="text"
            :id="props.inputId"
            v-model="props.inputModel"
            @input="emit('update:inputModel', $event.target.value)"
            class="rounded-lg p-3 border-0 outline-0 focus:ring-2 focus:ring-secondary ring-inset w-full text-primary"
        >
    </div>
</template>

<script setup>

const props = defineProps({
    inputModel: String,
    inputId: String,
});

const emit = defineEmits(['update:inputModel'])

</script>

<style lang="scss" scoped></style>