<template>
    <div>
        <button @click="show = !show">Click in this button to toggle rendering the following paragraph</button>
        <p
            v-if="show"
            class="p-5 bg-blue-200 outline outline-blue-300"
        >
            This is a paragraph that you can remove from the DOM by clicking on the button above.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    }
}
</script>