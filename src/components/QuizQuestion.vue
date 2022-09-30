<template>
    <h3>{{ statement }}</h3>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
            v-for="option in options"
            :key="option"
            class="flex rounded outline-black outline grow"
        >
            <input
                type="radio"
                :id="`${id}-${option}`"
                :value="option"
                :checked="option === answer"
                class="peer hidden"
                @change="$emit('answer', option)"
            >
            <label
                :for="`${id}-${option}`"
                class="peer-checked:bg-blue-500 peer-checked:dark:bg-blue-300 peer-checked:text-white peer-checked:dark:text-black bg-blue-100 dark:bg-blue-700 hover:bg-blue-200 hover:dark:bg-blue-600 transition-all px-4 py-6 inline-flex text-center cursor-pointer w-full justify-center items-center focus-visible:ring ring-offset-2 ring-blue-200 rounded"
                tabindex="1"
                @keydown.enter="$emit('answer', option)"
            >
                {{ option }}
            </label>
        </div>
    </div>
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