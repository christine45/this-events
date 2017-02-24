//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var RestaurantList = document.getElementsByClassName("name");
for (var i = 0; i<RestaurantList.length; i++){
	RestaurantList[i].addEventListener("click", showMenu);

}

function showMenu(){
	var secretMenu = this.querySelectorAll(".menu")[0];
		if(secretMenu.style.display === "none"){
			secretMenu.style.display = "block";
		}else{
			secretMenu.style.display = "none";
		}
}