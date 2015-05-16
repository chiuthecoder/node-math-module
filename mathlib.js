module.exports = {
    add: function(num1, num2){
        console.log( num1 + num2);
    },
    multiply: function(num1, num2){
        console.log( num1 * num2);
    },
    square: function(num){
        console.log( num * num);
    },
    random: function(){
        var num = Math.ceil(Math.random()*35)
        console.log( num );
    }
}