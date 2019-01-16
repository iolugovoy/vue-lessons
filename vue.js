var vm = new Vue({
	el: '#app',
	data: function(){
    return {
      message: 'Hello Vue.js!',
      tooltip: 'Показать \/ скрыть список',
      users: [
        {
          firstName: 'Иван',
          lastName: 'Петров',
          patronymic: 'Сергеевич',
          img: 'https://via.placeholder.com/50x50'
        },
        {
          firstName: 'Сергей',
          lastName: 'Петров',
          patronymic: 'Иванович',
        },
        {
          firstName: 'Петр',
          lastName: 'Иванов',
          patronymic: 'Сергеевич',
          img: 'https://via.placeholder.com/50x50'
        },
        {
          firstName: 'Иван',
          lastName: 'Сергеев',
          patronymic: 'Петрович',
          img: 'https://via.placeholder.com/50x50'
        },
        {
          firstName: 'Иван',
          lastName: 'Петров',
          patronymic: 'Иванович',
        }
      ],
      showTable: true,
		}
	},
  methods: {
  	toggleTable: function () {
      this.showTable = !this.showTable;
                                                                                                                  },
  computed: {
  	usersCount: function(){
    	return this.users.length;
    },
    buttonText: function() {
      return this.showTable ? 'Скрыть' : 'Пьказать';
    }
  },
  filters: {
  	upperCase: function(value){
    	if (!value) return '';
    	value = value.toString();
    	return value.toUpperCase();
    }
  }
});
