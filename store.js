import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fields: [
      { key: 'title', label: 'Title' },
      { key: 'description', lable: 'Description' },
      { key: 'contactdetails', label: 'Contact details' },
      { key: 'edit', label: 'Actions' },
    ],
    items: [
      {
        title: 'Battery',
        description: 'battery is not working',
        contactdetails: '9887654345',
        isEdit: false,
        isResolve: false,
      },
      {
        title: 'Maps',
        description: 'timeline',
        contactdetails: '9887654345',
        isEdit: false,
        isResolve: false,
      },
      {
        title: 'Steps',
        description: 'steps count',
        contactdetails: '9887654345',
        isEdit: false,
        isResolve: false,
      },
      {
        title: 'Oxymeter',
        description: 'Oxymeter',
        contactdetails: '9887654345',
        isEdit: false,
        isResolve: false,
      },
    ],
  },
  actions: {
    addTodo(context, index) {
      context.commit('addTodo', index);
    },
    deleteRowHandler(context, index) {
      context.commit('deleteRowHandler', index);
    },
    editRowHandler(context, index) {
      context.commit('editRowHandler', index);
    },
    resolveRowHandler(context, index) {
      context.commit('resolveRowHandler', index);
    },
  },
  mutations: {
    addTodo(state, index) {
      state.items.push(index);
    },
    deleteRowHandler(state, index) {
      state.items.splice(index, 1);
    },
    editRowHandler(state, index) {
      console.log(state);
      console.log(index);
      state.items[index].isEdit = !state.items[index].isEdit;
    },
    resolveRowHandler(state, index) {
      state.items[index].isResolve = !state.items[index].isResolve;
    },
  },
});

export default store;
