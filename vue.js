var UsersTable = {
  template: '#table',
  props: {
    title: {
      type: String,
      default: 'Значение по умолчанию',
    },
    users: {
      type: Array,
      required: true,
    }
  },
  methods: { 
    removeItem: function(user) {
      this.$emit('remove', user.id);
    },
    fullName: function(user){
      return user.lastName + ' ' + user.firstName + ' ' + user.patronymic;
    },
  }
};

var vm = new Vue({
  el: '#app',
  components: {
    'users-table': UsersTable

  },
  data: function(){
    return {
      message: 'Hello Vue.js!',
      tooltip: 'Показать \/ скрыть список',
      users: [],
      showTable: true,
    }
  },
  
  computed: {
    usersCount: function(){
      return this.users.length;
    },
    buttonText: function() {
      return this.showTable ? 'Скрыть' : 'Показать';
    },
    activeUsers: function () {
      return this.users.filter(function (item) { 
        return item.isActive === true;
      })
    }
  },
  filters: {
    upperCase: function(value){
      if (!value) return '';
      value = value.toString();
      return value.toUpperCase();
    }
  },
  watch: {
      usersCount: 'usersChanged'
  },
  mounted: function () {
    this.loadUsers();
  },
  methods: {
    change: function () {
      this.showTable = !this.showTable;
    },
    fullName: function(user){
      return user.lastName + ' ' + user.firstName + ' ' + user.patronymic;
    },
    usersChanged: function () {
      console.log('User count changed');
    },
    loadUsers: function () {
      this.users =[
            {
              id: "1",
              isActive: true,
              firstName: 'Иван',
              lastName: 'Петров',
              patronymic: 'Сергеевич',
              img: 'https://via.placeholder.com/50x50'
            },
            {
              id: "2",
              isActive: true,
              firstName: 'Сергей',
              lastName: 'Петров',
              patronymic: 'Иванович',
            },
            {
              id: "3",
              isActive: true,
              firstName: 'Петр',
              lastName: 'Иванов',
              patronymic: 'Сергеевич',
              img: 'https://via.placeholder.com/50x50'
            },
            {
              id: "4",
              isActive: true,
              firstName: 'Иван',
              lastName: 'Сергеев',
              patronymic: 'Петрович',
              img: 'https://via.placeholder.com/50x50'
            },
            {
              id: "5",
              isActive: true,
              firstName: 'Иван',
              lastName: 'Петров',
              patronymic: 'Иванович',
            },
            {
              id: "6",
              isActive: false,
              firstName: 'Иван',
              lastName: 'Петров',
              patronymic: 'Иванович',
            }
          ]
    },
    removeUser: function (id) {
      console.log('user removed', id)
      this.users = this.users.filter(function (item) {
        return item.id !== id 
      })
    }
  },
});
  
