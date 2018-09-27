$(document).ready(function() {

    let haveEmployeeSelected = false;

    $('.employee-list').on('click', function(e) {
        if(!haveEmployeeSelected) {
            haveEmployeeSelected = true;
            $('.row').toggleClass('row--show')
        }  
    })

});
