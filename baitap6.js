//Bai 6
const nameOfStudent = 'Bùi Minh Hòa';
const diem = 60;
if (diem >= 90 && diem <= 100) {
    console.log(`${nameOfStudent} xếp loại S `)
} else if (diem >= 80 && diem < 90) {
    console.log(`${nameOfStudent} xếp loại A `)
} else if (diem >= 70 && diem < 80) {
    console.log(`${nameOfStudent} xếp loại B `)
} else if (diem >= 60 && diem < 70) {
    console.log(`${nameOfStudent} xếp loại C `)
} else if (diem >= 50 && diem < 60) {
    console.log(`${nameOfStudent} xếp loại D `)
} else if (diem >= 40 && diem < 50) {
    console.log(`${nameOfStudent} xếp loại E `)
} else {
    console.log(`Bạn không được lên lớp`)
}