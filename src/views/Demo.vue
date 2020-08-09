<template>
  <main class="wrapper style1">
    <div class="container">
      <header class="major">
        <h2>vuex-router-sync-demo</h2>
        <p>Counter in simple store: {{ counter }}</p>
        <p>Counter in router-synced store: {{ counter2 }}</p>
      </header>
      <p>
        Click below to increment counters: one is stored normally in vuex, the
        second one is synced with router (look at the url).
      </p>
      <ul class="actions">
        <li>
          <button @click="inc" class="button special big">
            Increment simple
          </button>
        </li>
        <li>
          <button @click="inc2" class="button big">
            Increment synced with router
          </button>
        </li>
      </ul>
      <p>Take a look at <code>/src/views/Demo.vue</code></p>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Demo',
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
