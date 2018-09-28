$(document).ready(function() {

    let haveEmployeeSelected = false;
    const users=[];
    const userJson= {
        "emp1" : {
            name:"Michael Scott",
            description:"Manager"
        },
        "emp2" : {
            name:"Jim Halpert",
            description:"Paper Salesman"
        },
        "emp3" : {
            name:"Dwight Shrute",
            description:"Assistant to the Manager"
        },
        "emp4" : {
            name:"Pam Beesly",
            description:"Receptionist"
        },
        "emp5" : {
            name:"Angela Martin",
            description:"Accountant"
        },
        "emp6" : {
            name:"Kevin Malone",
            description:"Accountant"
        },
        "emp7" : {
            name:"Kelly Kapoor",
            description:"Customer Service Rep"
        },
        "emp8" : {
            name:"Ryan Howard",
            description:"Intern"
        },
        "emp9" : {
            name:"Stanley Hudson",
            description:"Salesman"
        },
        "emp10" : {
            name:"Andy Bernard",
            description:"Salesman"
        },
        "emp11" : {
            name:"Meredith Palmer",
            description:"Supplier Relations"
        },
        "emp12" : {
            name:"Oscar Martinez",
            description:"Accountant"
        },

    }


    $('.employee-list').on('click', function(e) {
        if(!haveEmployeeSelected) {
            haveEmployeeSelected = true;
            $('.row').toggleClass('row--show')
        }  
    })

});
