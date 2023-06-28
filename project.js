const phoneBook = {
    list:{
        "John": 123456789,
        "Jane Doe": 987654321,
        "Jim Smith": 111111111
    },
    rem(del){
         delete phoneBook.list[del]; 
    },
    add(name, number){
        this.list[name] = number;
       
    }    
};
phoneBook.add("GGGGG", 1233454);
phoneBook.rem("Jane Doe");
console.log(phoneBook.list);