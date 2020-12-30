<template>
  <b-container class="text-center">
    <b-card
      tag="article"
      class="mt-4 ml-auto mr-auto w-50 b-card"
    >

      <b-img
        rounded
        fluid
        thumbnail
        width="300px"
        height="300px"
        class="m-auto"
        src="https://picsum.photos/600/400/?image=82"
      ></b-img>

      <b-card-text class="h3 text-center">
        Имя пользователя
      </b-card-text>

      <b-list-group flush class="mt-3 mb-3 text-left text-info">
        <b-list-group-item class="border-info">Некоторая информация о пользователе</b-list-group-item>
        <b-list-group-item>Некоторая информация о пользователе</b-list-group-item>
        <b-list-group-item>Некоторая информация о пользователе</b-list-group-item>
      </b-list-group>

      <b-button href="#" variant="info" class="float-left">Изменить профиль</b-button>
    </b-card>
  </b-container>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.b-card {
  width: 450px !important;
}
@media screen and (max-width: 500px) {
  .b-card {
    width: auto !important;
  }
}
</style>