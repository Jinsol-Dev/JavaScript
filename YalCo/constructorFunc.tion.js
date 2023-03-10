// π‘ μμ±μ ν¨μμ νμμ±

// μμ½μΉν¨μ μ²΄μΈμ μ λνλ΄λ κ°μ²΄λ€

const chain1 = {
  name: "νκ΅",
  no: 3,
  introduce() {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  },
};

const chain2 = {
  name: "κ°λ¨",
  no: 17,
  introduce() {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  },
};

const chain3 = {
  name: "μ μ£Ό",
  no: 24,
  introduce() {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  },
};

// μ΄μ²λΌ κ°μ νμμ κ°μ²΄λ€μ λ€μ λ§λ€μ΄μΌ νλ€λ©΄?

// ----------------------------------------------------------------------

// μμ±μ ν¨μλ‘ κ°μ²΄ λ§λ€κΈ°

// μμ±μ ν¨μ
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  };
}

// μΈμ€ν΄μ€ μμ±
const chain1 = new YalcoChicken("νκ΅", 3);
const chain2 = new YalcoChicken("κ°λ¨", 17);
const chain3 = new YalcoChicken("μ μ£Ό", 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());

// μμ±μ ν¨μλͺμ μΌλ°μ μΌλ‘ λλ¬Έμλ‘ μμ - νμ€μΉΌ μΌμ΄μ€
// μμ±μ ν¨μλ‘ λ§λ€μ΄μ§ κ°μ²΄λ₯Ό μΈμ€ν΄μ€ instance λΌ λΆλ¦
// this.~λ‘ μμ±λ  μΈμ€ν΄μ€μ νλ‘νΌν°λ€ μ μ
// μμ±μ ν¨μλ new μ°μ°μμ ν¨κ» μ¬μ©
// μλ¬΅μ μΌλ‘ this λ°ν
// μμ±μ ν¨μμμλ λ©μλ μ μ λΆκ° - κ°μ²΄ λ¦¬ν°λ΄κ³Ό ν΄λμ€μμλ κ°λ₯

// β οΈ newλ₯Ό λΆμ΄μ§ μμΌλ©΄ undefined λ°ν
//   νΈμΆμ newλ₯Ό λΆμ΄λκ° μ¬λΆμ λ°λΌ νΈμΆ μλ¦¬κ° λ€λ¦
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  };
}

console.log(YalcoChicken("νλ", 30));

// π‘ "κ°μ²΄λ₯Ό λ°ννλ ν¨μλμ λ­κ° λ€λ₯΄μ§??"
function createYalcoChicken(name, no) {
  return {
    name,
    no,
    introduce() {
      return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
    },
  };
}

const chain1 = createYalcoChicken("νκ΅", 3);
const chain2 = createYalcoChicken("κ°λ¨", 17);
const chain3 = createYalcoChicken("μ μ£Ό", 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());

//----------------------------------------------------------------------

// μμ±μ ν¨μλ‘ λ§λ€μ΄μ§ κ°μ²΄
// νλ‘ν νμ prototype - μλ°μ€ν¬λ¦½νΈ κ°μ²΄μ§ν₯μ μ€μ¬
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  };
}

const chain1 = new YalcoChicken("νκ΅", 3);
console.log(chain1);

// λ³Έμ¬μμ μ μλ¬΄λ₯Ό μΆκ°
// νλ‘ν νμ: λ³Έμ¬μμ λ°°ν¬νλ λ©λ΄μΌμ΄λΌκ³  μ΄ν΄
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};

console.log(chain1.introEng());

console.log(new YalcoChicken("κ°λ¨", 17).introEng());

// ν μΈμ΄μ ν΄λμ€μλ λ€λ₯΄λ©° μ¬μ©νκΈ°μ λ°λΌ λ κ°λ ₯ν¨
// β οΈ μ¬μ€ introduceμ introEngμ μ’λ₯κ° λ€λ¦ (μΈμ€ν΄μ€ vs νλ‘ν νμ)

// μ΄ν νλ‘ν νμ μΉμμμ μμΈν λ°°μ°κ² λ  κ²

// --------------------------------------------------------------------------
// π‘ ν λ°©μμΌλ‘ λ§λ  κ°μ²΄μμ μ°¨μ΄
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  };
}

function createYalcoChicken(name, no) {
  return {
    name,
    no,
    introduce() {
      return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
    },
  };
}

// κ°μ²΄ λ¦¬ν°λ΄
const chain1 = {
  name: "νκ΅",
  no: 3,
  introduce: function () {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  },
};

// κ°μ²΄ λ°ν ν¨μ
const chain2 = createYalcoChicken("κ°λ¨", 17);

// μμ±μ ν¨μ
const chain3 = new YalcoChicken("μ μ£Ό", 24);

console.log(chain1, chain1 instanceof YalcoChicken);
console.log(chain2, chain2 instanceof YalcoChicken);
console.log(chain3, chain3 instanceof YalcoChicken);

// κ°μ²΄ μμ²΄μ λ‘κ·Έλ μμΈκ° λ€λ¦ μ μ μμ μμ±μ ν¨μλͺμ΄ λΆμ
// instanceof : κ°μ²΄κ° νΉμ  μμ±μ ν¨μμ μν΄ λ§λ€μ΄μ‘λμ§ μ¬λΆ λ°ν
// νλ‘ν νμμ constructorμ μ²΄μΈμ΄ ν΄λΉ μμ±μ ν¨μ ν¬ν¨νλμ§ μ¬λΆ

// μ½μμμ [[Prototype]] νΌμ³μ νμΈν΄λ³Ό κ²

//---------------------------------------------------------------------
// μμ±μ ν¨μ μμ²΄μ νλ‘νΌν°μ ν¨μ
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  };
}

// λ³Έμ¬μ μ λ³΄μ μλ¬΄
YalcoChicken.brand = "μμ½μΉν¨";
YalcoChicken.contact = function () {
  return `${this.brand}μλλ€. λ¬΄μμ λμλλ¦΄κΉμ?`;
};

const chain1 = new YalcoChicken("νκ΅", 3);

console.log(YalcoChicken.contact());

console.log(chain1.contact());

// -------------------------------------------------------------------------------------
// . π‘ new μλ΅ μ€μ λ°©μ§νκΈ°
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `μλνμΈμ, ${this.no}νΈ ${this.name}μ μλλ€!`;
  };

  if (!new.target) {
    // μ΄ λΆλΆμ μ§μ°κ³  λ€μ ν΄ λ³Ό κ²
    return new YalcoChicken(name, no);
  }
}

const chain1 = new YalcoChicken("νκ΅", 3);
const chain2 = YalcoChicken("κ°λ¨", 17);

console.log(chain1, chain2);

//   ν΄λΉ ν¨μκ° new μ°μ°μ μμ΄ νΈμΆλμμ κ²½μ° μ¬κ·νΈμΆμ ν΅ν΄ μμ±ν΄ λ΄λ³΄λ
// λ€μ κ°μ λ°°μΈ ν΄λμ€μμλ new μμ΄λ μ€λ₯κ° λ°μνλ―λ‘ νμμμ
