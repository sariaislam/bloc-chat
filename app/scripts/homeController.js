(function() {
    function homeCtrl(Room) {
        this.rooms = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', homeCtrl]);
})();