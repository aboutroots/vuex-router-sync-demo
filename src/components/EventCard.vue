<template>
  <router-link
    class="event-link"
    :to="{
      name: 'event-show',
      params: {
        id: event.id
      }
    }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <BaseIcon name="users" />
      <span>{{ event.attendees.length }} attending</span>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      // normally this comes from backend API!! this is just for text
      event: {
        id: 1,
        date: 'Aug 19, 2018',
        time: '6:00',
        title: 'Click me',
        attendees: [
          {
            id: 'asdf',
            name: 'Adam'
          },
          {
            id: 'basdf',
            name: 'Eva'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
