$(document).ready(function(){

 $('.handle').on('click',function(){
          $('nav ul').toggleClass('showing');
      });
      //$('.parallax-window').parallax({imageSrc: 'C:\Users\ashee\Desktop\jqueryExample\UHD.jpg'});
      $("#box").animate({
      width: "400px"
    }, {
      duration: 5000,
      easing: "linear",
      step: function(x) {
        $("#demo").text(Math.round(x * 100 / 400)  + "%");  
      }
    });
  
  $('#popular').click(function(){
      $( '#firstSection' ).empty();
  $.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2016&sort_by=popularity.desc',function(data,status){
      //console.log(data);
      $.each(data['results'],function(key,value){
          $('#firstSection').append('<div id="movie"><p id="SPC1">'+value['title']+'</p><br><img src="'+ "https://image.tmdb.org/t/p/w370_and_h556_bestv2"+ value['poster_path'] +'" Width="90%" Height="350px;"/><br><p id ="SPC2">'+value['overview']+'</p><br><p id ="SPC3">'+value['vote_average']+'</p></div>');
      });
      
  });
  });
    $('#TopRated').click(function(){
        $( '#firstSection' ).empty();
  $.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2016&sort_by=toprated.desc',function(data,status){
      //console.log(data);
      $.each(data['results'],function(key,value){
          $('#firstSection').append('<div id="movie"><p id="SPC1">'+value['title']+'</p><br><img src="'+ "https://image.tmdb.org/t/p/w370_and_h556_bestv2"+ value['poster_path'] +'" Width="90%" Height="350px;"/><br><p id ="SPC2">'+value['overview']+'</p><br><p id ="SPC3">'+value['vote_average']+'</p></div>');
      });
      
  });
  });
    $('#Upcoming').click(function(){
        $( '#firstSection' ).empty();
  $.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2016&sort_by=upcoming.desc',function(data,status){
      //console.log(data);
      $.each(data['results'],function(key,value){
          $('#firstSection').append('<div id="movie"><p id="SPC1">'+value['title']+'</p><br><img src="'+ "https://image.tmdb.org/t/p/w370_and_h556_bestv2"+ value['poster_path'] +'" Width="90%" Height="350px;"/><br><p id ="SPC2">'+value['overview']+'</p><br><p id ="SPC3">'+value['vote_average']+'</p></div>');
      });
      
  });
  });
      $('#NowPlaying').click(function(){
          $( '#firstSection' ).empty();
  $.get('https://api.themoviedb.org/3/discover/movie?api_key=c94431cab6597dab45a1c126e000512f&year=2016&sort_by=nowplaying.desc',function(data,status){
      //console.log(data);
      $.each(data['results'],function(key,value){
          $('#firstSection').append('<div id="movie"><p id="SPC1">'+value['title']+'</p><br><img src="'+ "https://image.tmdb.org/t/p/w370_and_h556_bestv2"+ value['poster_path'] +'" Width="90%" Height="350px;"/><br><p id ="SPC2">'+value['overview']+'</p><br><p id ="SPC3">'+value['vote_average']+'</p></div>');
      });
      
  });
  });
});