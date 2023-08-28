function course(lectures){
    return {
        lectures: lectures,
        section: 3,
        title: 'javascript',
        notes: {
            instroduction: 'welcome to js course'
        },
        check(){
            console.log("helllo");
        },
    }
}
var a = {a : 5};
var b = a;
a.a = 15;
console.log(b)