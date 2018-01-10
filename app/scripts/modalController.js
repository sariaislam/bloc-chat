(function() {
    function modalCtrl($scope, Room) {
        //this.rooms .;

        this.newRoomName = '';

        this.createRoom = function () {
            Room.add(this.newRoomName);
            $scope.$close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', 'Room', modalCtrl]);
})();
