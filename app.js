class Student{
    constructor(first,last,subject){
        this.first = first;
        this.last = last;
        this.subject= subject;
    }


    getProfile(){
        return[
            this.first,
            this.last,
            this.subject
        ]
    }
}
class VipStudent extends Student{
    constructor(first,last,subject,status){
        super(first,last,subject);
        this.status = status;
    }
}
const student = new Student('Jonas','Jonaitis','JS');
console.log(student)
const vipStudent =  new VipStudent('Jonas','Jonaitis','JS','supervisor')
console.log(vipStudent.getProfile())