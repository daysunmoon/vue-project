<template>
    <div>
        <MzBanner></MzBanner>
        <MzTabs></MzTabs>
        <router-view></router-view>
    </div>
</template>

<script>
import MzBanner from '@/components/MzBanner/Index.vue'
import MzTabs from '@/components/MzTabs/Index.vue'
export default {
  components: {
    MzBanner,
    MzTabs
  }
}
</script>
