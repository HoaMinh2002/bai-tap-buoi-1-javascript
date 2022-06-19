//Bai 3
const diem1OfDol = 97;
const diem2OfDol = 112;
const diem3OfDol = 101;
const diem1OfKoa = 109;
const diem2OfKoa = 95;
const diem3OfKoa = 106;
const diemTBOfDol = (diem1OfDol + diem2OfDol + diem3OfDol) / 3;
console.log(`Diểm trung bình của Dolphins là ${diemTBOfDol} `);
const diemTBOfKoa = (diem1OfKoa + diem2OfKoa + diem3OfKoa) / 3;
console.log(`Diểm trung bình của Koalas là ${diemTBOfKoa} `);
if ((diemTBOfDol > diemTBOfKoa) && (diemTBOfDol >= 100 || diemTBOfKoa >= 100)) {
    console.log(`Đội chiến thắng trong cuộc thi là Dolphins`)
} else if ((diemTBOfDol < diemTBOfKoa) && (diemTBOfDol >= 100 || diemTBOfKoa >= 100)) {
    console.log(`Đội chiến thắng trong cuộc thi là Koalas`)
} else if ((diemTBOfDol == diemTBOfKoa) && (diemTBOfDol >= 100 && diemTBOfKoa >= 100)) {
    console.log(`Hai đội hòa nhau`)
} else {
    console.log(`Không đội nào giành được cup`)
}