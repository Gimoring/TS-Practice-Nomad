/*
class Human {
	//public 다른 곳에서 써도 쓸 수 있다. 밖에서도 쓸 수 있게하려면 이것을
	//private  클래스 내에서만 쓸 수 있다. 고정되기를 원한다면 이것을
	public name: string;
	public age: number;
	public gender: string;
	// constructor는 클래스로부터 객체를 만들 때 마다 생성된다.
	constructor(name: string, age: number, gender: string) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}
const junpil = new Human('Junpil', 27, 'male');

const sayHi = (person: Human): string => {
	return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(junpil));
*/

class Block {
	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timestamp: number;

	constructor(
		index: number,
		hash: string,
		previousHash: string,
		data: string,
		timestamp: number
	) {
		this.index = index;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.timestamp = timestamp;
	}
}

const genesisBlock: Block = new Block(0, '2012387', '', 'Hellow', 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
