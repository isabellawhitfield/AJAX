console.log('HIIIIII');

$(document).ready(function(){
    $('body').click(function(){
     $(this).css('color','blue');
    });
  

// var friends = [ 
//     {
//       name : "Sebastian",
//       age : 28,
//       interest1 : "Baking",
//       interest2 : "Drawing",
//       interest3 : "Bowser",
//       favouriteColour : "Leopard Print",
//       favouriteAnimal :  "Sun Bear"
    
//     },
//     {
//       name : "Lizzy",
//       age : 27,
//       interest1 : "Cartoons",
//       interest2 : "Traveling",
//       interest3 : "Dunegons and Dragons",
//       favouriteColour : "Yellow",
//       favouriteAnimal : "Wolf"  
      
//     }
// ];

// console.log(friends);
// var i;
// for(i=0; i<friends.length; i++){
// document.getElementById('result').innerHTML +=
// '<h1>' + friends[i].name + ' is ' + '</h1>' +
// '<h2>' + friends[i].age + ' years old</h2>';
// };

// var jsonData = [ 
//     {
//       "name" : "Sebastian",
//       "age" : 28,
//       "interest1" : "Baking",
//       "interest2" : "Drawing",
//       "interest3" : "Bowser",
//       "favouriteColour" : "Leopard Print",
//       "favouriteAnimal" :  "Sun Bear"
    
//     },
//     {
//       "name" : "Lizzy",
//       "age" : 27,
//       "interest1" : "Cartoons",
//       "interest2" : "Traveling",
//       "interest3" : "Dunegons and Dragons",
//       "favouriteColour" : "Yellow",
//       "favouriteAnimal" : "Wolf"  
      
//     }
// ];

// var j;
// for(j=0; j<jsonData.length; j++){
// document.getElementById('result').innerHTML +=
// '<h1>' + jsonData[j].name + ' is ' + '</h1>' +
// '<h2>' + jsonData[j].age + ' years old</h2>';
// };

// var person = JSON.parse(myData);
// console.log(person);

// var k;
// for(k=0; k<person.length; k++){
// document.getElementById('result').innerHTML +=
// '<h1>' + person[k].name + ' is ' + '</h1>' +
// '<h2>' + person[k].ages + ' years old</h2>';
// };

$.ajax({
    url:'js/MOCK_DATA.json',
    type:'GET',
    data:'json',
    success: function(data){
        console.log(data)
        var i;
        for (i=0; i<data.length; i++){
            document.getElementById('result').innerHTML +=
            '<div class="col col-sm-6 col-md-6 col-lg-4 mx-2 my-5">' +
            '<h1>' + data[i].first_name + '</h1>' +
            '<h2>' + data[i].gender + '</h2>' +
            '<img class="img-thumbnail" src="' + data[i].avatar + '" alt="AVATAR">' +
            


            '</div>';
        }


    },
    error:function(){
        console.log('error')
    }
});

});
