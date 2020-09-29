class Candidate {
    constructor(ID, name, birthday, score) {
        this.id = ID;
        this.name = name;
        this.birthday = birthday;
        this.score = score;
    }
    showInfo(){
        return 'Mã thí sinh' + this.id + 'Tên thí sinh' + this.name + 'Ngày sinh' + this.birthday;
    }
    setScore(a, b, c,){
        this.score.push(a, b, c,);
    }
    getAverageScore(){
        return (this.score[0] + this.score[1] + this.score[2]) / 3;
    }
}