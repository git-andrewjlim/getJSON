var myInit = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        cache: 'default'
    };

let myRequest = new Request("./data_class.json", myInit);

fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data.class);
        console.log(data.students);
        console.log(data.date);
    })