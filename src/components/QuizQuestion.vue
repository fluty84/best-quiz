<template>
    <h3>{{ statement }}</h3>
    <label
        v-for="option in options"
        :key="option"
        :for="`${id}-${option}`"
    >
        <input
            type="radio"
            :id="`${id}-${option}`"
            :value="option"
            :checked="option === answer"
            @change="$emit('answer', option)"
        >
        {{ option }}
    </label>
</template>

<script>
    export default {
        props: {
            id: Number,
            statement: String,
            options: Array,
            answer: String,
        },

        emits: ["answer"]
    }
</script>