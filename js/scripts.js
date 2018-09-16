$(document).ready(function () {
    $("#select_type").change( function () {
        var type = $(this).val();
        $.ajax({
            method: "POST",
            url: base_url + "ajax/get_specialites",
            data: {type: type},
            success: function(data){
                $('#list_specialites').html(data);
            }
        })
    }).change();
    
    $("#select_gouvernorat").change( function () {
        var state_id = $(this).val();
        $.ajax({
            method: "POST",
            url: base_url + "ajax/get_delegations",
            data: {state_id: state_id},
            success: function(data){
                $('#list_delegation').html(data);
            }
        })
    });
    
    $("#change_password").click( function (e) {
        e.preventDefault() ;
        $(this).parent().find("input[name='password']").removeAttr('disabled');
    });
});