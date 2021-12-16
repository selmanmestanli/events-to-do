export const namespaced = true

export const state = {
  Notifications: [],
}

let nextId = 1

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++,
    })
  },
  DELETE(state, notificationToRemove) {
    state.notifiation = state.notification.filter(
      (notification) => notification.id !== notificationToRemove.id
    )
  },
}

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  },
}
