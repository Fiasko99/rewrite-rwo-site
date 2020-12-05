<template>
  <div id="app">
    
    <header>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <img src="./assets/logo.svg" height="40px" alt="Kitten">
        <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item to="/" exact exact-active-class="active">Главная</b-nav-item>
              <b-nav-item to="/content" exact exact-active-class="active">Книги</b-nav-item>
              <b-nav-item to="/about" exact exact-active-class="active">О нас</b-nav-item>
          </b-navbar-nav>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <span>User</span>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <router-view/>
  </div>
</template>



<script>
  export default {
    
  }
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';

</style>
