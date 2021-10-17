  document.getElementById("weatherSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        const value = document.getElementById("weatherInput").value;
        const url = "https://anime-facts-rest-api.herokuapp.com/api/v1/dragon_ball";
        fetch(url)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
            let results = "";
            if(value === "random")
            {
              results += "<center><h1>";
              min = Math.ceil(1);
              max = Math.floor(51);
            let fact =  Math.floor(Math.random() * (max - min) + min);
            results += json.data[fact].fact;
            results += "</center></h1>";

            document.getElementById("factResults").innerHTML = results;
            }
            else if(!isNaN(value) && (value < 51 && value > 0) )
            {
	      results += "<center><h1>";
              results += json.data[value].fact;
	      

              document.getElementById("factResults").innerHTML = results;
            }
            else {
              results += "<center><h1>";
              results += "Please enter a valid query.";
              results += "</center></h1>";

              document.getElementById("factResults").innerHTML = results;
            }
          });
});
