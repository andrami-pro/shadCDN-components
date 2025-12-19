<script setup>
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { SwitchRoot, SwitchThumb } from "radix-vue";

const props = defineProps({
  checked: { type: Boolean, default: false },
  class: { type: String, default: '' },
});

const emits = defineEmits(["update:checked"]);

const calculatedClass = computed(() => {
    return cn(
      "tw-peer tw-inline-flex tw-h-6 tw-w-11 tw-shrink-0 tw-cursor-pointer tw-items-center tw-rounded-full tw-border-2 tw-border-transparent tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-background disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-primary data-[state=unchecked]:tw-bg-input",
      props.class
    )
});

const thumbClass = cn("tw-pointer-events-none tw-block tw-h-5 tw-w-5 tw-rounded-full tw-bg-background tw-shadow-lg tw-ring-0 tw-transition-transform data-[state=checked]:tw-translate-x-5 data-[state=unchecked]:tw-translate-x-0");

const handleUpdate = (val) => {
    emits('update:checked', val);
}
</script>

<template>
  <SwitchRoot
    :class="calculatedClass"
    :checked="checked"
    @update:checked="handleUpdate"
  >
    <SwitchThumb :class="thumbClass" />
  </SwitchRoot>
</template>
