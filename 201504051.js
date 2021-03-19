module.exports = {
    ordenamientoBurbuja: function(arr){
        var len = arr.length;
    
        for (var i = 0; i < len ; i++) {
            for(var j = 0 ; j < len - i - 1; j++){
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },

    square: function(number) {
        return number * number;
    },

    SNK: function(mensaje){
        return '$$ MENSAJE: ' + mensaje + ' $$';
    },

    devolverValorAscii: function(caracter){
        return caracter.charCodeAt(0);
    },

    doPow: function(value1, value2){
        return Math.pow(value1, value2);
    }
}