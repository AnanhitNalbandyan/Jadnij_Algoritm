    
    
    //!Написать программу, которая выведет информацию о том есть ли повторяющиеся значения в списке, 
    //!заданным так как в предыдущем сообщенииlet list = {
        /*
    const myFunc = (obj) => {
            const arrSet = new Set();
            let tempSize = 0;
            while (obj != null) {
                calcNumb++;
                arr.add(obj.value);
                obj = obj.next
                if (arrSet.siz !== tempSize) return false
        
            }
            return true;
        } 
        const ifSame = (status) => status ? 'No dublicate value' : 'Ter is dublicate value'

        console.log(ifSame(myFunc(list)));
*/
let list = {
value: 9,
    next: {
    value: 11,
        next: {
        value: 10,
            next: {
            value: 5,
                next: {
                value: 6,
                next: null
                }
            }
        }
    }
}
    let list1 = {};
    let hasDuplicates = false;

    let newList = list;
    while (newList) {
    if (list1[newList.value]) {
        hasDuplicates = true;
        break;
    } else {
        list1[newList.value] = true;
        newList= newList.next;
    }
    }

    if (hasDuplicates) {
    console.log("В списке есть повторяющиеся значения");
    } else {
    console.log("В списке нет повторяющихся значений");
    }
/*//!
const myFunc1 = (obj) => {
    const arr = new Set();
    let tempSize = 0;
    while (obj != null) {
        tempSize++;
        arr.add(obj.value);
        obj = obj.next
        if (arr.size !== tempSize) return false

    }
    return true;
}

let list2 = {
    value: 9,
    next: {
        value: 10,
        next: {
            value: 9,
            next: null
        }
    }
}

console.log(
    myFunc(list) ? "Нет одинаковых value" : "Есть одинаковые value"
);*/

/*
const myFunc = (obj) => {
    const arr = [];
    while (obj != null) {
        if (arr.includes(obj.value)) return false
        arr.add(obj.value);
        obj = obj.next

    }
    return true;
}

let list = {
    value: 9,
    next: {
        value: 10,
        next: {
            value: 9,
            next: null
        }
    }
}

console.log(
    myFunc(list) ? "Нет одинаковых value" : "Есть одинаковые value"
);
 */