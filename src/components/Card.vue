<template>
  <div class="card">
    <div class="card-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="card-description">
      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "description"],
  computed: {},
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 250px;
  padding-top: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  margin-right: 5px;
  margin-top: 20px;

  .card-title  {
    width: 80%;
    word-wrap: break-word;
  }
  .card-description {
    width: 90%;
    word-wrap: break-word;
  }
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
