let P = document.getElementById('P');
let r = document.getElementById('r');
let n = document.getElementById('n');
let result = document.getElementById('A');
let profit = "";
function execute() {
            var select = document.getElementById("list");
            var value = select.value;

            if (value === "cp") {
                Compound();
            } else if(P.value == "", r.value == "", n.value == ""){
              alert("All Fields Are Required")
            }
            else{
                Simple();
            }
        }

        function Compound() {
            if(P.value == "", r.value == "", n.value == ""){
              alert("All Fields Are Required")
            }else{
            profit = P.value * Math.pow((1 + r.value /100), n.value);
            result.value = profit.toFixed(2);
            n.value = "";
            r.value = "";
            P.value = "";
              
            }
        }

        function Simple() {
            profit = P.value*(1+r.value/100*n.value).toFixed(2);
            n.value = "";
            r.value = "";
            P.value = "";
            result.value = profit.toFixed(2);
        }
