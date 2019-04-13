// console.log("Hello TS");
// tsc --init
// let decimal: number = 10;
// let arr : number[] = [2,4,5];
// let arr03 : Array<number> = [2,3];
// let arr02 : (number|string)[] = [2,4,5,'sasa']
// let newArr: any;
// newArr = [3,4,6,'saa', true]
// // newArr
// enum Gender{ male = 1 , female = 4, other = 3 }
// const female: Gender = Gender.female
// console.log(female) //0
// function doSth<T>(age:T):T{
//     return age;
// }
// const age = doSth('aaaa')
// function doSth(){
//     for(let i=0; i<=5;i++){
//         console.log(i)
//     }
//     console.log('End: '+i)
// }
// doSth()
// 0 1 2 3 4 5 End 6
// interface label {label : string};
// function getName(name : label){
//     return name.label
// }
// interface person {
//     name: string,
//     age?: number
// }
// function getName(obj:person):person{
//     obj.age = 12;
//     // obj.name = 'name';
//     return obj;
// }
// const obj : person = {name:'nam'}
// const newObj = getName(obj);
// console.log(newObj)
// class Person{
//     private name: string;
//     public age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     get ten(){
//         return this.name;
//     }
// }
// const Teo = new Person('Teo', 20);
// console.log(Teo.ten);
/**
 * totalLike = 10
 * isSelected = true
 *
 * totalLike = 10-1=9
 * isSelected = false
 */
var Like = /** @class */ (function () {
    // private totalLike: number
    // private isSelected: boolean
    function Like(totalLike, isSelected) {
        this.totalLike = totalLike;
        this.isSelected = isSelected;
        this.isSelected = isSelected;
        this.totalLike = totalLike;
    }
    Like.prototype.onLick = function () {
        this.totalLike += this.isSelected ? -1 : 1;
        this.isSelected = !this.isSelected;
    };
    Object.defineProperty(Like.prototype, "likeNumber", {
        get: function () {
            return this.totalLike;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
var like = new Like(10, false);
like.onLick();
// like.totalLike = 30;
console.log(like); // 9,false
