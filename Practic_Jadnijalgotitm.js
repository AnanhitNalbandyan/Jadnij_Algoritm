
class Subject {
    constructor(price, weight){
        this.price=price
        this.weight= weight
        this.coef=price/weight

    }
}

class Rucksak{
    constructor(subjects,volume){
        this.subjects = subjects 
        this.volume = volume

    }

    sortingTheSubjects = (subjects)=>{

        return subjects.sort((a, b) => b.coef.localeCompare(a.coef))
    }

    selectSubjects = ()=>{

        const sortedSubjects = sortingTheSubjects(this.subjects)
        let weightOfSelectedSubjecs = 0
        let selectedSubjects = []
        for (let i = 0; i < sortedSubjects.length; i++) {
            if(sortedSubjects[i].weight <= this.volume - weightOfSelectedSubjecs){
                selectedSubjects.push(sortedSubjects[i])
                weightOfSelectedSubjecs += sortedSubjects[i].weight
            } else if(this.volume - weightOfSelectedSubjecs > 0) {
                selectedSubjects.push(new Subject(sortedSubjects[i].coef * (this.volume-weightOfSelectedSubjecs),this.volume-weightOfSelectedSubjecs))
            } else{
                break
            }
        
        }
    
        return selectedSubjects
    }


}


///


function collectBackpack(items, capacity) {
    // Сортировка предметов по убыванию их удельной стоимости (стоимость / вес)
    items.sort((a, b) => (b.price / b.weight) - (a.price / a.weight));
  
    let totalprice = 0;
    let remainingCapacity = capacity;
  
    for (const item of items) {
      if (remainingCapacity <= 0) {
        break;
      }
  
      const fraction = Math.min(1, remainingCapacity / item.weight);
      
      //const fraction = remainingCapacity / item.weight;
  console.log(item, fraction)
      // Обновление общей стоимости и оставшейся вместимости рюкзака
      totalprice += item.price * fraction;
      console.log(totalprice)
      remainingCapacity -= item.weight * fraction;
      console.log(remainingCapacity)
    }
  
    return totalprice;
  }
// Пример использования функции
  const items = [{
      weight: 10,//масса
      price: 60//цена
    },
    {
      weight: 20,
      price: 100
    },
    {
      weight: 30,
      price: 120
    },
  ];
  
  const capacity = 50;
  
  console.log(collectBackpack(items, capacity)); // Выведет 240