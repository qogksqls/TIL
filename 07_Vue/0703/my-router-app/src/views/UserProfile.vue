<template>
  <div>
    <h1>User Profile</h1>
    <h1>내 아이디: {{user.userId}}</h1>
    <h1>내 이름: {{user.username}}</h1>
    <h1>내 전공: {{user.major}}</h1>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data: function () {
    return {
      user: this.$route.params,
    }
  }
}
</script>

<style>

</style>