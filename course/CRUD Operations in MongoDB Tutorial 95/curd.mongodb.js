use("CURD-DB");

db.createCollection("curdTopics")
// Create
// db.curdTopics.insertOne({
//     name:"Salman WEB DEV",
//     price:500,
//     assignment:12,
//     projects: 4
     
// })
//insertmany array of objects
// db.curdTopics.insertMany([
//     {
//     "name": "Salman WEB DEV",
//     "price": 500,
//     "assignment": 12,
//     "projects": 4
//   },
//   {
//     "name": "Ayesha Frontend",
//     "price": 450,
//     "assignment": 10,
//     "projects": 3
//   },
//   {
//     "name": "Usman Backend",
//     "price": 550,
//     "assignment": 13,
//     "projects": 5
//   },
//   {
//     "name": "Zara Full Stack",
//     "price": 600,
//     "assignment": 14,
//     "projects": 6
//   },
//   {
//     "name": "Ali JS DEV",
//     "price": 400,
//     "assignment": 9,
//     "projects": 2
//   },
//   {
//     "name": "Fatima UI/UX",
//     "price": 480,
//     "assignment": 11,
//     "projects": 4
//   },
//   {
//     "name": "Bilal Web Apps",
//     "price": 530,
//     "assignment": 12,
//     "projects": 5
//   },
//   {
//     "name": "Hiba HTML/CSS",
//     "price": 390,
//     "assignment": 8,
//     "projects": 2
//   },
//   {
//     "name": "Omar React DEV",
//     "price": 620,
//     "assignment": 15,
//     "projects": 6
//   },
//   {
//     "name": "Maria Node DEV",
//     "price": 570,
//     "assignment": 13,
//     "projects": 5
//   },
//   {
//     "name": "Tariq Angular",
//     "price": 510,
//     "assignment": 10,
//     "projects": 4
//   },
//   {
//     "name": "Sana PHP DEV",
//     "price": 430,
//     "assignment": 9,
//     "projects": 3
//   },
//   {
//     "name": "Rehan Laravel",
//     "price": 490,
//     "assignment": 11,
//     "projects": 3
//   },
//   {
//     "name": "Lubna Python Web",
//     "price": 560,
//     "assignment": 13,
//     "projects": 4
//   },
//   {
//     "name": "Daniyal MERN Stack",
//     "price": 650,
//     "assignment": 16,
//     "projects": 7
//   },
//   {
//     "name": "Iqra Vue DEV",
//     "price": 470,
//     "assignment": 10,
//     "projects": 3
//   },
//   {
//     "name": "Zeeshan WordPress",
//     "price": 420,
//     "assignment": 8,
//     "projects": 2
//   },
//   {
//     "name": "Noor Django",
//     "price": 590,
//     "assignment": 14,
//     "projects": 5
//   },
//   {
//     "name": "Ahmad ASP.NET",
//     "price": 610,
//     "assignment": 15,
//     "projects": 6
//   },
//   {
//     "name": "Hassan TypeScript",
//     "price": 540,
//     "assignment": 12,
//     "projects": 4
//   }
// ])
// READ
// let a = db.curdTopics.find({projects:4})
// // console.log(a);
// // console.log(a.count());
// console.log(a.toArray());
// // give first one
// let b = db.curdTopics.findOne({projects:4})
// console.log(b);

// Update
// db.curdTopics.updateOne({projects:4},{$set:{price:1000}})
// db.curdTopics.updateMany({projects:{$gt:4}},{$set:{price:500}})

//Delete
db.curdTopics.deleteMany({projects:{$lt:4}})