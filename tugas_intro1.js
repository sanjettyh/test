//TUGAS 1, NOMER 1
const biodata = {
    name: "ihsan",
    age: 17,
    hobbies: ["Playing Footbal", "Watching Film", "Swimming"],
    isMarried: false,
    schoolList: [
      {
        name: "TK AISYIYAH 22",
        yearIn: 2009,
        yearOut: 2010,
        major: "null",
      },
      {
        name: "SDN 244 Guruminda",
        yearIn: 2012,
        yearOut: 2018,
        major: "null",
      },
      {
        name: "SMP Muhammadiyah 9",
        yearIn: 2018,
        yearOut: 2021,
        major: null,
      },
      {
        name: "SMKN 13 Bandung",
        yearIn: 2021,
        yearOut: 2024,
        major: "Software Engineering",
      },
    ],
    skills: [
      {
        skillName: "HTML & CSS",
        level: "beginner",
      },
      {
        skillName: "Figma",
        level: "beginner",
      },
    ],
    interestInCoding: true,
  };
  
  // console.log(biodata);

  
  //TUGAS 1, NOMER 2
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
  console.log("Semua nilai harus diisi");
} else {
  const totalNilai = mtk + bahasaIndonesia + bahasaInggris + ipa;
  const rataRata = totalNilai / 4;

  let grade;
  if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
  } else if (rataRata >= 80 && rataRata < 90) {
    grade = "B";
  } else if (rataRata >= 70 && rataRata < 80) {
    grade = "C";
  } else if (rataRata >= 60 && rataRata < 70) {
    grade = "D";
  } else {
    grade = "E";
  }

  // console.log(`Rata-rata = ${rataRata}`);
  // console.log(`Grade = ${grade}`);
}

//TUGAS 1, NOMER 3
const printSegitiga = "enam";

if (typeof printSegitiga === 'number') {
  for (let i = printSegitiga; i >= 1; i--) {
    let output = '';
    for (let j = 1; j <= i; j++) {
      hasil += j + ' ';
    }
    console.log(hasil);
  }
} else {
  // console.log('Data harus number');
}

//TUGAS 1, NOMER 4
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Mengubah data menggunakan spread operator
const newData = {
  ...data,
  name: "Muhammad Ihsanuddin",
  email: "adeihsan985@gmail.com",
  hobby: "Playing Footbal",
};

console.log(newData);

// Mengambil data "street" dan "city" menggunakan destructuring
const {
  address: { street, city },
} = data;

console.log("Street:", street);
console.log("City:", city);


