module.exports = function($http){
    this.getShipments = function(){
        return $http.get('../app/assets/data/data.json'); 
    }
};