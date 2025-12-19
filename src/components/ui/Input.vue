<script setup>
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { useVModel } from "@vueuse/core"; // Note: We might need @vueuse/core if we want advanced v-model, but standard defineModel or emit is easier for simple usage. Let's stick to simple props/emits or Vue 3.4 defineModel if available. WeWeb uses Vue 3.
// To avoid extra deps, I'll use standard model implementation.

const props = defineProps({
  defaultValue: { type: [String, Number], default: '' },
  modelValue: { type: [String, Number], default: '' },
  class: { type: String, default: '' },
});

const emits = defineEmits(["update:modelValue"]);

const onInput = (event) => {
    emits("update:modelValue", event.target.value);
};

const calculatedClass = computed(() => {
    return cn(
        "tw-flex tw-h-10 tw-w-full tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
        props.class
    )
});
</script>

<template>
  <input
    :class="calculatedClass"
    :value="modelValue || defaultValue"
    @input="onInput"
  />
</template>
