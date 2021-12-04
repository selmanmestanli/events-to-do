<template>
  <div>
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
    <span>{{ event.attendees.length }} attending</span>
  </div>
      <BaseIcon name="users" />
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Beach Cleanup',
        date: 'Tues Aug 19, 2021',
        time: '6:00',
        attendees: [
          { id: 'abc123', name: 'Adam Jahr' },
          { id: 'def456', name: 'Gregg Pollack' },
        ],
      },
    }
  },
}
</script>

<style scoped>
h4 {
  color: green;
}
</style>
