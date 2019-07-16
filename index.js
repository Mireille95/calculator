var inputLabel = document.getElementById("InputLabel");

 function pushBtn(obj)
 {
     var pushed = obj.innerHTML;

     if (pushed == 'm')
     {
         inputLabel.innerHTML = eval(inputLabel.innerHTML);
     }
     else if (pushed == 'AC')
     {
         inputLabel.innerHTML ='0';
     }
     else {
         if (inputLabel.innerHTML == '0')
         {
             inputLabel.innerHTML = pushed;

         }
         else {
             inputLabel.inner  += pushed;
         }
     }

 }
  