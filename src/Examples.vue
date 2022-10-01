<template>
  <div>
    <conditional-displaying />
    <conditional-rendering />
    <list-of-items />
  </div>
</template>

<script>
import ConditionalDisplaying from "./examples/ConditionalDisplaying.vue"
import ConditionalRendering from "./examples/ConditionalRendering.vue"
import ListOfItems from './examples/ListOfItems.vue'

export default {
  components: {
    ConditionalDisplaying,
    ConditionalRendering,
    ListOfItems,
  }
}
</script>