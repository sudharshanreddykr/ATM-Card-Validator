       /* name validator */
       function nameValidate() {
           var
           let = /^[a-zA-Z]+$/;
           var x = document.getElementById("pName");

           if (x.value.match(let)) {
               //    alert("Input is Accepted")
               return true;
           } else {
               alert("only charecters are allowed");
               x.value = '';
               return false;
           }
       }

       /* Email validator */
       function validateEmail() {
           let y = document.getElementById("myEmail");
           let pat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})+$/;

           if (pat.test(y.value) === false)
               if (y.value.match(pat)) {
                   //    alert("valid Email id");
                   return true;
               } else {
                   alert('invalid Email id');

                   return false;
               }
       }

       /* card no. validator */
       function validateCard() {
           var z = document.getElementById("num").value;
           var master = /^(?:5[1-5][0-9]{14})+$/;
           var visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)+$/;

           if (z.match(master)) {
               //   alert("MASTER Card");
               return true;
           } else if (z.match(visa)) {
               //    alert('VISA Card');
               return true;
           } else {
               alert('Invalid Card Input (Re-Enter)');
               return false();
           }
       }

       /* phone no. validator */
       function validatePhone() {
           var w = document.getElementById("myPhone").value;
           var myPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

           if (w.match(myPhone)) {
               return true;
           } else {
               alert("Please check the number");
               return false();
           }
       }

       /* exp. date validator */
       function validateMonth() {
           var v = document.getElementById("expMonth").value;
           var myMonth = /^\(?([0-9]{2}))$/;

           if (v.value(expMonth)) {
               return true;
           } else {
               alert("Enter the valid month");
               return false();
           }
       }

       function validateYear() {
           var u = document.getElementById("expYear").value;
           var myYear = /^\(?([0-9]{2}))$/;

           if (u.value(expYear)) {
               return true;
           } else {
               alert("Enter the valid month");
               return false();
           }
       }

       function subHandler(e) {
           e.preventDefault();
           validateCard();
           nameValidate();
           validateEmail();
           validatePhone();
           validateMonth();
           validateYear();
       }

       function clearHandler(event) {
           event.preventDefault();
           validateCard();
           nameValidate();
           validateEmail();
           validatePhone();
           validateMonth();
           validateYear();
       }