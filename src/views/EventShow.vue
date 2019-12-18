<template>
  <div>
    <h1>Showing event #{{ id }}</h1>

    <p>Not in route: counter: {{ counter }}</p>
    <p>In route: counter2: {{ counter2 }}</p>

    <button @click="inc">INC COUNTER NOT IN ROUTE</button>
    <button @click="inc2">INC COUNTER IN ROUTE</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapGetters(['counter', 'counter2'])
  },
  methods: {
    ...mapActions({
      inc: 'increment',
      inc2: 'increment2'
    })
  }
}
</script>

<style lang="scss" scoped></style>
