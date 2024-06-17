let searchId = document.getElementById("search-id")


$("#search-button-linq").click(()=>{
    $.ajax({
        url: 'https://rogusapipractice.azurewebsites.net/api/Person/GetPersonDataLinq?id=' + searchId.value,
        method: 'GET',
        success:(data)=>{
            console.log(data)
            
        },
        error: (error)=>{
            console.error(error)
        } 
        
    })

})

$("#search-button-sqlCommnad").click(()=>{
    $.ajax({
        url: 'https://rogusapipractice.azurewebsites.net/api/Person/GetPersonDataSqlCommand?id=' + searchId.value,
        method: 'GET',
        success: function (data) {
            console.log(data)
        },
        error: (error) =>{
            console.error(error)
        } 
        
    })
})

