<template>
  <div>
    <div class="form">
      <form>
        <fieldset class="inputs-container">
          <label for="title">Title</label>
          <input v-model="title" type="text" name="title" id="title" />

          <label for="description">Description</label>
          <textarea
            name="description"
            v-model="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>

          <div class="buttons-container">
            <button @click.prevent="add">Add</button>
            <button @click.prevent="cancel">Cancel</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    description: "",
    id: "",
  }),
  methods: {
    add() {
      const data = {
        id: Date.now(),
        title: this.title,
        description: this.description,
      };
      this.$store.dispatch("addCard", data);
    },
    cancel() {},
  },
};
</script>

<style lang="scss">
.inputs-container {
  display: flex;
  flex-direction: column;
  width: 10%;
  align-items: center;
  margin: 0 auto;

  textarea {
    max-width: 100%;
    box-sizing: border-box;
    padding: 0;
  }
}
.buttons-container {
  display: flex;
  margin: 10px;

  button {
    margin: 5px;
  }
}
</style>

