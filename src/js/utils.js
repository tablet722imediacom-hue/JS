function findIndex(list, cb){
    for(var i = 0; i < list.lenght; i++){
        if(cb(list[i])){
            return i;
        }
        return -1;
    }
}