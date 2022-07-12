import Vue from 'vue';
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.css';
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
import store from './store';

new Vue({
  el: '#app',
  store,
  computed: {
    items() {
      return this.$store.state.items;
    },
    fields() {
      return this.$store.state.fields;
    },
  },
  data() {
    return {
      newTitle: '',
      newDescription: '',
      newContactDetails: '',
    };
  },

  template: `
  <div class="container">
  <b-table :items="items" :fields="fields">
  <template #cell(title)="data">
      <b-form-input v-if="items[data.index].isEdit" type="text" v-model="items[data.index].title"></b-form-input>
      <span v-else>{{data.value}}</span>
  </template>
  <template #cell(description)="data">
      <b-form-input v-if="items[data.index].isEdit" type="text" v-model="items[data.index].description"></b-form-input>
      <span v-else>{{data.value}}</span>
  </template>
  <template #cell(contactdetails)="data">
      <b-form-input v-if="items[data.index].isEdit" type="text" v-model="items[data.index].contactdetails"></b-form-input>
      <span v-else>{{data.value}}</span>
  </template>
  <template #cell(edit)="data">
  <div class="d-flex flex-column flex-lg-row align-items-center action">
    <a @click="editRowHandler(data)">
      <span v-if="!items[data.index].isEdit"><b-icon-pencil></b-icon-pencil></span>
      <span v-else><b-icon-check></b-icon-check></span>
    </a>
    <a @click="deleteRowHandler(data)">
      <span><b-icon-trash></b-icon-trash></span>
    </a>
    <a @click="resolveRowHandler(data)">
      <span><b-icon-check-circle></b-icon-check-circle></span>
    </a>
    </div>
  </template>
</b-table>
  <div class="d-flex flex-lg-row flex-column">
    <div class="p-2 d-flex">
      <label class="col-5" for="newTitle">Title:</label>
      <input class="col-7" id="newTitle" name="newTitle" type="text" v-model="newTitle" />
    </div>
    <div class="p-2 d-flex">
      <label class="col-5" for="newDescription">Description:</label>
      <input class="col-7" id="newDescription" name="newDescription" type="text" v-model="newDescription" />
    </div>
    <div class="p-2 d-flex">
      <label class="col-5" for="newContactDetails">Contact Details:</label>
      <input class="col-7" id="newContactDetails" name="newContactDetails" type="text" v-model="newContactDetails" />
    </div>
    <div class="p-2 d-flex justify-content-center button-div">
    <button @click="addTodo" type="button" class="btn btn-primary px-5">Add</button>
    </div>
    </div>
  </div>
  `,
  methods: {
    addTodo() {
      this.issue = {
        title: this.newTitle,
        description: this.newDescription,
        contactdetails: this.newContactDetails,
        isEdit: false,
        isResolve: false,
      };
      this.$store.dispatch('addTodo', this.issue);
    },
    editRowHandler(item) {
      this.$store.dispatch('editRowHandler', item.index);
    },
    deleteRowHandler(item) {
      this.$store.dispatch('deleteRowHandler', item);
    },
    resolveRowHandler(item) {
      this.$store.dispatch('resolveRowHandler', item.index);
    },
  },
});
