let students = ['Bailey', 'Chris', 'Clever', 'Dalton', 'Daniel', 'Hunter', 'Ian', 'Jake', 'Jared', 'Kent', 'Kyle', 'Levi', 'Luke'];

function makeGroups(numOfGroups){
    //duplicate students so we don't empty the total students
    let studentsDupe = [...students];

    //fisher-yates shuffle algorithm. source: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    for(let i = studentsDupe.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = studentsDupe[i];
        studentsDupe[i] = studentsDupe[j];
        studentsDupe[j] = temp;
    }

    let groups = [];
    // add numOfGroups arrays to groups
    for(let i = 0; i < numOfGroups; i++){
        groups.push([]);
    }
    
    // assign all students in the array into one of the groups
    let totalStudents = studentsDupe.length;
    for(let i = 0; i < totalStudents; i++){
        groups[i % numOfGroups].push(studentsDupe.pop());
    }

    console.log(groups);
    //get and empty container div
    let container = $('.container');
    container.empty();

    // output groups to DOM
    for(let i in groups){
        container.append(`<h2>Group ${1 + parseInt(i)}</h2>`);
        let listEl = $('<ul></ul>');
        for(let student of groups[i]){
            listEl.append(`<li>${student}</li>`);
        }
        container.append(listEl);
    }
}

function onReady(){
    $('#buttonMakeGroups').on('click', function(){
        let numOfGroups = parseInt($('#inputNumberOfGroups').val());
        makeGroups(numOfGroups);
    });
}

$('document').ready(onReady);

