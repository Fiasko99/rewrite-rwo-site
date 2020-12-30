<template>
  <div id="app">
    
    <header>
      <b-navbar toggleable="lg" type="light" variant="light">
        <img src="./assets/logo.svg" height="40px" alt="Kitten">
        <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item to="/home" exact exact-active-class="active">Главная</b-nav-item>
              <b-nav-item to="/content" exact exact-active-class="active">Книги</b-nav-item>
              <b-nav-item to="/about" exact exact-active-class="active">О нас</b-nav-item>
          </b-navbar-nav>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <span>User</span>
              </template>
              <b-dropdown-item to="/profile" exact exact-active-class="active">Profile</b-dropdown-item>
              <b-dropdown-item to="/" exact exact-active-class="active">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>



<script>
  export default {
    
  }
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
body {
  background-image: url('https://d2halst20r4hcy.cloudfront.net/7ac/ece4d/33b2/4b48/a570/840d3a1c28a0/original/1673282.jpg');
  background-color: white;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
