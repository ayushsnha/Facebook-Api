
 window.fbAsyncInit = function() {
    FB.init({
      appId      : '213601215953364',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.0'
    });
      
    
		FB.getLoginStatus(function(response) {
		    statusChangeCallback(response);
		});   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  	function statusChangeCallback(response){
  		if(response.status==='connected'){
  			console.log('Logged in and authenticated');
  			testAPI();
  		}else{
  			console.log('Not authenticated');
  		}
  	}	

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function testAPI(){
	FB.api('/me?fields=id,name,email',function(response){
		if(response && !response.error){
			console.log(response);
			buildProfile(response);
		}
	})
}

function buildProfile(user){
	let profile=`
	<h2>${'Hello '+user.name}</h1>
	<p>${'your email id:'+user.email}</p
	<p>Don't forget to logout and then refresh!!</p>
	`;
	document.getElementById('profile').innerHTML=profile;
}
