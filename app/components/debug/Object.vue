<script setup lang="ts" generic="T extends any[]">
// TS - Define props
interface Props {
  items: T; // Defines 'items' as a prop that must be an array of strings
}

const props = defineProps<Props>();
const newVar = props.items //Using array in script setup
</script>

<template><div>



    <!-- <div
        v-for="(item,index) in props.items"
        :key="index"
    >
        <p>{{ item }}</p>
    </div> -->

    <div v-for="item in newVar.slice(0, 2)" :key="item.id">
        <h2>Route - {{ item.path }}</h2>
        <p>Title: {{ item.title }}</p>
        <p>Stem: {{ item.stem }}</p>
        <p>{{ item }} </p>
    </div>

</div></template>
