<script setup lang="ts" generic="T extends any[]">
// TS - Define props
interface Props {
  items: T; // Defines 'items' as a prop that must be an array of strings
}

const props = defineProps<Props>();
// const newVar = props.items //Using array in script setup
</script>

<template><div>

    <h2>Array:</h2>
    <div
        v-for="(item,index) in props.items"
        :key="index"
    >
        <p>{{ item }}</p>
    </div>

</div></template>
