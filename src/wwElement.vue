<template>
  <div class="shadcn-kit">
    <!-- Button -->
    <ShadcnButton
      v-if="content.componentType === 'button'"
      :variant="content.variant"
      :size="content.size"
    >
      {{ content.label }}
    </ShadcnButton>

    <!-- Input -->
    <ShadcnInput
      v-else-if="content.componentType === 'input'"
      :modelValue="content.value"
      :placeholder="content.placeholder"
      @update:modelValue="handleInputChange"
    />

    <!-- Badge -->
    <ShadcnBadge
      v-else-if="content.componentType === 'badge'"
      :variant="content.variant"
    >
      {{ content.badgeText }}
    </ShadcnBadge>

    <!-- Switch -->
    <ShadcnSwitch
      v-else-if="content.componentType === 'switch'"
      :checked="content.value"
      @update:checked="handleSwitchChange"
    />

    <!-- Fallback -->
    <div v-else class="text-red-500">
      Please select a valid component type in the settings.
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ShadcnButton from "@/components/ui/Button.vue";
import ShadcnInput from "@/components/ui/Input.vue";
import ShadcnBadge from "@/components/ui/Badge.vue";
import ShadcnSwitch from "@/components/ui/Switch.vue";

const props = defineProps({
  content: { type: Object, required: true },
  /* wwEditor:start */
  wwEditorState: { type: Object, default: () => ({}) },
  /* wwEditor:end */
});

const emit = defineEmits(["trigger-event", "update:content:effect"]);

function handleInputChange(value) {
    // In WeWeb, we typically assume the user bound a variable to 'value'.
    // We emit an update if we wanted to support 2-way binding directly on the prop,
    // but usually WeWeb handles variable updates via workflows or specific bindings.
    // For standard "Input" component behavior, we might want to emit a value change event.
    // For now, let's just emit a generic event if needed, or rely on internal state if not bound.
    // However, to update the bound variable in WeWeb user needs to use "On Change" workflow.
    // But for visual feedback in editor:
    emit("update:content:effect", { value });
}

function handleSwitchChange(val) {
    emit("update:content:effect", { value: val });
}
</script>

<style>
@import "./styles/globals.css";
</style>
