var vm= new Vue({
  el: "#app",
  data:{
    classes:[]
    
  }
//   ,
//   ready: function(){
    
//   }
  
});

$.ajax({
      url:"https://awiclass.monoame.com/api/command.php?type=get&name=hahowdata",
      success:function(res){
        // console.log(res)
        vm.classes=JSON.parse(res);
      }
    });