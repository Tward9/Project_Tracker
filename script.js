$( function() {
    $( "#datePicker" ).datepicker();
    $( "#type" ).selectmenu();
});

function displayRow(projectInput, typeInput, datePickerInput, projectRate){
    console.log("display row");
    console.log(projectInput, typeInput, datePickerInput, projectRate);
    $(`<tr><td>${projectInput}</td><td>${typeInput}</td><td>${datePickerInput}</td><td>${projectRate}</td><td><button>Delete</button></td></tr>`).appendTo(`tbody`);
}

function hideRow()

$('#submitBtn').on('click', function(event){
    event.preventDefault();
    var projectInput = $('#projectName').val();
    var typeInput = $('#type').val();
    var datePickerInput = $('#datePicker').val();
    var projectRate = $('#projectRate').val();
    console.log(projectInput, typeInput, datePickerInput);
    var formOutput = [projectInput, typeInput, datePickerInput, projectRate];
    // $('#formOutput').text(formOutput.join(' '));
    displayRow(projectInput, typeInput, datePickerInput, projectRate);
})

