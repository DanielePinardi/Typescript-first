interface IPerson {
    age: number;
    name: string;
    say(): string;
}

type PersonType = {
    age: number;
    name: string;
    say: () => string;
    say2?: () => string
}

let mike = {
    age: 25,
    name: 'mike',
    say: function(){
        return 'My name is ' + this.name + "and I'm " + this.age + 'years old';
    }
}

function sayIt (person: IPerson) {
    return person.say();
}

const sayIt2 = ({name, age}: PersonType) => {
    console.log(name);
    console.log(age);
};

const getArray = (): number[] | null => {
    return [1,2,3,4,5];
};

const arr = getArray();

arr?.map(x => console.log(x))

sayIt2(mike);