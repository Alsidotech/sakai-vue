<template>
  <div class="card mb-0">
    <div class="flex justify-content-between mb-3">
      <div>
        <span class="block text-500 font-medium mb-3">{{ title }}</span>
        <div class="text-900 font-medium text-xl">{{ stats }} <span>{{ statsInfo }}</span></div>
      </div>
      <div :class="`flex align-items-center justify-content-center bg-${color}-100 border-round icon-box`">
        <i :class="`pi ${icon} text-${color}-500 text-xl`"></i>
      </div>
    </div>
    <span class="text-green-500 font-medium">{{ periodicStats }}</span>
    <span class="text-500">&nbsp;{{ periodicStatsInfo }}</span>
  </div>
</template>

<script>
export default {
  name: "StatisticsCard",
  props: {
    title: {
      type: String,
      default: 'Title'
    },

    stats: {
      type: String,
      default: '0'
    },

    statsInfo: {
      type: String,
      default: '',
    },

    periodicStats: {
      type: String,
      default: '24 new',
    },

    periodicStatsInfo: {
      type: String,
      default: 'since last visit'
    },

    icon: {
      type: String,
      default: 'pi-users'
    },

    color: {
      type: String,
      default: 'blue'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.icon-box {
  width: 2.5rem;
  height: 2.5rem
}
</style>
