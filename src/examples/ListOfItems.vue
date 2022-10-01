<template>
    <input
        type="text"
        v-model="value"
        @keydown.enter="addItem"
    />
    <button @click="addItem">add item to the list</button>
    <ul>
        <li
            v-for="item in items"
            :key="item.id"
        >
            {{ item.text }}
            <button @click="removeItem(item.id)">x</button>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            value: "",
        }
    },

    methods: {
        addItem() {
            if (!this.value) return
            const id = this.items.length
            const text = this.value
            this.items.push({
                id,
                text,
            })
            this.value = ""
        },

        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id)
        }
    }
}
</script>