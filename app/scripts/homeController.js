(function() {
    function homeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.renderNewRoomModal = function() {
            $uibModal.open({
                controller:'ModalCtrl as modal',
                templateUrl:'/templates/addNewRoomModal.html'
            });
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', homeCtrl]);
})();
