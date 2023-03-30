let courses = [

    {

        title: 'SMM',

        howLong: 3

    },

    {

        title: 'Dev',

        howLong: 6

    },

    {

        title: 'Graph',

        howLong: 4

    },

]

let earnings = {

    total: 0,

    max: 0,

    min: 0

}

let m = 0

let w = 0

let average_age = 0

let smm = 0

let dev = 0

let graph = 0

let students = [

    {

        sex: 'm',

        age: 14,

        payment: 1220000,

        course: {

            title: 'SMM',

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 1883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 16,

        payment: 2190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 19,

        payment: 718000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 15,

        payment: 2195000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 460000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 14,

        payment: 560000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 22,

        payment: 160000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 26,

        payment: 883000,

        course: {

           title: 'SMM' 

        }

    },

    {

        sex: 'w',

        age: 26,

        payment: 750000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 23,

        payment: 212000,

        course: {

            title: 'Graph',

        }

    },

    {

        sex: 'w',

        age: 24,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 27,

        payment: 190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 19,

        payment: 210000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 770000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 18,

        payment: 1200000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 51,

        payment: 880000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'm',

        age: 51,

        payment: 2430000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 33,

        payment: 1277000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 2750000,

        course: {

            title: 'Dev'

        }

    },

]


let me = []
let we = []
let babki = []
let dev1 = []
let smm1 = []
let graph1 = []
let year = []

for (let item of students){
if(item.course.title == 'Dev'){//задание 1
    item.course.howLong = 6
    dev1.push(item)//задание 6
    dev = dev1.length//задание 6
}
if(item.course.title == 'Graph'){
    item.course.howLong = 4
    graph1.push(item)//задание 6
    graph = graph1.length//задание 6
}
if(item.course.title == 'SMM'){
    item.course.howLong = 3
    smm1.push(item)//задание 6
    smm = smm1.length//задание 6
}// конец заданий 1

if(item.sex == 'm'){//задание 2
    me.push(item)
}
if(item.sex == 'w'){
    we.push(item)
}//задание 2


year.push(item.age)

babki.push(item.payment)//задание 3



}
let let1 = year.reduce(( a, b)=>  a + b)//задание 7
average_age = let1 / students.length//задание 7


babki=babki.sort(((a, b) => a - b))//задание 4
let t = babki.slice(babki.length-1)//задание 4
earnings.max = t//задание 4

let tr = babki.slice(0,1)//задание5
earnings.min = tr//задание 5

earnings.total =babki.reduce(( a, b)=>  a + b) // задание 3


m = me.length//задание 2
w = we.length//задание 2



console.log(m);//задание 2
console.log(w);//задание 2


console.log(earnings);//задание 3, 4, 5
console.log(dev);//задание 6
console.log(graph);//задание 6
console.log(smm);//задание 6
console.log(average_age);//задание 7
console.log(students);//задание 1 и весь масив


    // В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*
    
    // 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*
    
    // 2. Сохранить количество девочек и мальчиков внутри переменных m и w*
    
    // 3. Сохранить заработок учебного центра в earning.total*
    
    // 4. Узнать кто больше всех платит за обучение в earning.max*
    
    // 5. Узнать кто меньше всех платит за обучение в earning.min*
    
    // 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*
    
// 7. Посчитать средний возраст студентов в average_age*