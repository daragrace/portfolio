$( "#myform" ).validate({

});

function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("AdditionOperator").checked) {
            operator = document.getElementById("AdditionOperator").value;
        }
        if (document.getElementById("SubtractionOperator").checked) {
            operator = document.getElementById("SubtractionOperator").value;
        }
        if (document.getElementById("MultiplicationOperator").checked) {
            operator = document.getElementById("MultiplicationOperator").value;
        }
        if (document.getElementById("DivisionOperator").checked) {
            operator = document.getElementById("DivisionOperator").value;
        }

        var result;
        
        /* if the operator was "Addition" then set result to the minimum */
        if (operator == "Addition") {
           result = (operand1fp + operand2fp);
        }
 
        /* if the operator was "Max" then set result to the maximum */
        if (operator == "Subtraction") {
            result = (operand1fp - operand2fp);
        }

        /* if operator was "Avg" the calcualute the average of 3 operands */
        if (operator == "Multiplication") {
            result = (operand1fp * operand2fp);
        }

        if (operator == "Division") {
            result = (operand1fp / operand2fp);
        }
        
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    
    document.getElementById("AdditionOperator").checked = false;
    document.getElementById("SubtractionOperator").checked = false;
    document.getElementById("MultiplicationOperator").checked = false;
    document.getElementById("DivisionOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});