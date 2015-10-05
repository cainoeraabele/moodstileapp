
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  var prova = itTime();
  response.success(prova);
});
function itTime(){
  var GameScore = Parse.Object.extend("CinemaToday");
  var query = new Parse.Query(GameScore);
  query.equalTo("GenereMovie", "Horror");
  //query.equalTo("dsadasd",  {nome: 'cinemauno');
  query.find({
    success: function(results) {
      console.log("Successfully retrieved " + results.length + " scoressss.");
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        //var a = fruits.indexOf("Apple");
        var provaarray1 =object.get('cinemaOjc');
        //console.log(provaarray1);
        var cinemasala = provaarray1["cinema"];
        //console.log(provaarray1["cinema"].length)
        for (var n = 0; n < cinemasala.length; n++) {
          var objectbis = cinemasala[n];
          //console.log(object.id + ' - ' + object.get('cinemaOjc'));
          //var a = fruits.indexOf("Apple");
          //var objectbis = object.get('cinemaOjc');
          //console.log(objectbis);
          //console.log(objectbis["orario"]);
          var boh = objectbis["orario"];
          for (var uiu in boh){
            //console.log(uiu);
            if (boh[uiu] >  "10" ){
              //console.log('Il Film Consigliato per te e: ' + object.get('Namemovie'));
              //console.log("ok qui c'è" );
              //console.log(cinemasala[n]);
              results(cinemasala[n])
            }else{
              // console.log("qui no!");
            }


          }
          //console.log(boh[0]);
          //console.log(typeof objectbis);
          /* for (var numero = 0; numero < objectbis["orario"].length; numero++) {
           var data = objectbis["orario"][numero];
           console.log(data);
           }*/



        }
      }
    },
    error: function(error) {
      console.log("Error: " + error.code + " " + error.message);
    }
  });
}