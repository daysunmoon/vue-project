<template>
  <div>
    <router-view></router-view>
    <MzMenu></MzMenu>
  </div>
</template>
<script>
import MzMenu from '@/components/MzMenu/Index.vue'
export default {
  components: {
    MzMenu
  }
}
</script>
