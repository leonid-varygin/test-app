<template>
  <div>
    <label for="dragndrop">Disable dragndrop</label>
    <input
      type="checkbox"
      name="dragndrop"
      id="dragndrop"
      v-model="dragndrop"
    />
    <draggable
      v-model="cards"
      class="draggable"
      :class="dragndrop"
      :options="{ disabled: dragndrop }"
    >
      <Card
        class="card"
        v-for="card of cards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
      />
    </draggable>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import draggable from "vuedraggable";

export default {
  name: "Home",
  components: {
    Card,
    draggable,
  },
  data: () => ({
    dragndrop: false,
  }),

  computed: {
    cards: {
      get() {
        return this.$store.state.cards;
      },
      set(value) {
        this.$store.dispatch("setCards", value);
      },
    },
  },
  mounted() {
    this.$store.dispatch("updateCards");
  },
};
</script>

<style lang="scss">
.draggable {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
