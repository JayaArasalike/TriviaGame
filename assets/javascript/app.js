	var number = 100;
  var intervalId;
    
	function run() {
      intervalId = setInterval(decrement, 1000);
    }

  function stop() {
      clearInterval(intervalId);
    }

  $("#stop").on("click", stop);
  $("#start").on("click", run);
    
  //  The decrement function.
  function decrement() {
      number = number-1;
      $("#time_left").html("<h2>" + number + "</h2>");
        if (number === 0) {
          stop();
          alert("Time Up!");
      }
    }


  function handlePage2Click() {         
      var amountCorrect = 0;
      var amountWrong = 0;
      var unanswered = 0;        
        for(var i = 1; i <= 10; i++) {
          var radios = document.getElementsByName('group'+i);
           var noneChecked = true;
            for(var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if (radio.checked)
                {
                  noneChecked = false;
                  if(radio.value == "correct") {
                    amountCorrect++;
                  }
                  else if (radio.value == "wrong") {
                    amountWrong++;
                  }
                }
            }
            if (noneChecked) unanswered++;
        }  
        stop();                  

      var page1 = document.getElementById('page1');
      page1.style.visibility = "hidden";
      var page2 = document.getElementById('page2');
      page2.style.visibility = "hidden";
      var page2 = document.getElementById('page3');
      page3.style.visibility = "visible";
      document.getElementById('correctAns').innerHTML = "Correct Responses: " + amountCorrect ;
      document.getElementById('wrongAns').innerHTML = "Incorrect Responses: " + amountWrong ;
      document.getElementById('unAns').innerHTML = "Unanswered: " + unanswered;
    }

  function handlePage1Click() {
      var page1 = document.getElementById('page1');
      page1.style.visibility = "hidden";
      var page2 = document.getElementById('page2');
      page2.style.visibility = "visible";
      run();
    }

     
  