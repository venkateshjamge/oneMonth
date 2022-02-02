        /* 1. Grab the input value */

        var js = document.querySelector(".js-go");

        js.addEventListener('click', function() {
            var input = document.querySelector("input").value;
            var query = input.split(' ').join('+');
            javaS(query);
        });

        var js_userinput = document.querySelector(".js-userinput");

        js_userinput.addEventListener('keyup', function(e) {

            if (e.key == "Enter") {
                var input = document.querySelector("input").value;
                var query = (input.split(' ')).join('+');
                javaS(query);

            }
        });



        /* 2. do the data stuff with the API */
        function javaS(url2) {
            var url1 = "https://api.giphy.com/v1/gifs/search?q=";

            var url3 = "&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h";

            var url = url1 + url2 + url3;
            // AJAX Request
            var GiphyAJAXCall = new XMLHttpRequest();
            GiphyAJAXCall.open('GET', url);
            GiphyAJAXCall.send();

            GiphyAJAXCall.addEventListener('load', function(e) {

                var data = e.target.response;
                //console.log(data);
                fun(data);
                //console.log(data);
                //var v = document.querySelector(".js-container");
                //v.innerHTML = data;
            });
        }



        /* 3. Show me the GIFs */

        function fun(input) {


            var collectedData = JSON.parse(input);
            console.log(collectedData);
            var v = document.querySelector(".js-container");
            v.innerHTML = "";
            //console.log(collectedData.data.length)
            var imageURL = collectedData.data;
            imageURL.forEach(element => {
                //console.log(element.images.fixed_height.url);
                var img = element.images.fixed_height.url;

                v.innerHTML += "<img src=\"" + img + "\" class=\"container-img\"> ";
            });







            var js = document.querySelector(".js-go");

            js.addEventListener('click', function() {

                var input = document.querySelector("input").value;
                javaS(input);
            });

            var js_userinput = document.querySelector(".js-userinput");

            js_userinput.addEventListener('keyup', function(e) {
                if (e.key == "Enter") {
                    var input = document.querySelector("input").value;
                    console.log(input);
                    javaS(input);

                }
            });


            //console.log(imageURL);
            //v.innerHTML = "<img src=\"" + imageURL + "\" > ";
        } //console.log(imageURL);
        //v.innerHTML = "<img src=\"" + imageURL + "\" > ";