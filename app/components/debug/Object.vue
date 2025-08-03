<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps({
        someArray: {
            type: Array,
            required: true,
            default: () => [] // BP
        },
        x: {
            type: Number,
            default: 0 // All
        }
    });

    const someArrayItems = computed(() => {
    if (props.x <= 0) {
        return props.someArray;
    } else {
        return props.someArray.slice(0, props.x);
    }
    });
</script>

<template><div>

    <h2>Array:</h2>
    <div
        v-for="(item,index) in someArrayItems"
        :key="index"
    >

        <p>{{ item }}</p>

    </div>

</div></template>
