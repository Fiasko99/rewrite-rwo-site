<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      
    }
  },
  mounted() {
    this.$socket.on("user-connected", (data) => {
      console.log(data);
      this.$socket.emit("users");
    })
    this.$socket.emit("users");
    this.$socket.on("users", (data) => {
      console.log("users", data);
    })
  }
}
</script>
