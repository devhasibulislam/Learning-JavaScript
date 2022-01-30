/* Basic about object in JS */
var iPhone = {
    model: "13 Max Pro",
    color: "Sierra Blue",
    resolution: "2778 x 1284",
    screen__size: "6.7 inch",
    price: "$1099 (regular)"
};

var student = {
    name: "Hasibul Islam",
    id: 1935202062,
    department: "CSE",
    batch: 52,
    semester: "7th",
    institute: "City University",
    contact__no: "+8801906-315901"
};

/* get object */
// print a whole object with it's properties
console.log(student);
// check object's type
console.log(typeof (student));
// check object's property type
console.log(typeof (student.id));
console.log(typeof (student.contact__no));
// print object's property
console.log(student.institute);
// put object's property in a local variable
studentName = student.name;
console.log(studentName);
console.log(typeof (studentName));

console.clear();

/* set or update object's property */
// method 1
console.log(iPhone.model);
iPhone.model = "12 Pro Max";
console.log(iPhone.model);
// method 2
iPhoneModel = iPhone.model;
iPhoneModel = "13 Pro";
console.log(iPhoneModel);
// method 3
console.log(iPhone.screen__size);
iPhoneScreenSize = iPhone["screen__size"];
iPhoneScreenSize = "6.1 inch";
console.log(iPhoneScreenSize);
// method 4
console.log(iPhone.price);
iPhone['price'] = "$999 (regular)";
console.log(iPhone.price);
// method 5
appleBestColor = 'color';
console.log(iPhone[appleBestColor]);
iPhone[appleBestColor] = "Space Gray";
console.log(iPhone.color);

/* update name of an object for instance */
appleProduct = iPhone;
console.log(appleProduct);
console.log(iPhone['model']);
