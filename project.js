const phoneBook = {
    list:{
        "John": 123456789,
        "Jane Doe": 987654321,
        "Jim Smith": 111111111
    },
    add(name, number){
        this.list[name] = number;
       
    },
    rem(){
        delete phoneBook["Jim Smith"]; 
    }
};
phoneBook.add("GGGGG", 1233454);
phoneBook.rem();
console.log(phoneBook.list);