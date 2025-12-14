mongoose  =  require('mongoose'); 
//app  =  express(); 
// const  MONGO_URI  =  'mongodb://localhost:27017/Week8'; 
const  MONGO_URI  =  'mongodb+srv://fuad-user:Lagos1905@cluster0.yrnjxqr.mongodb.net'; 
mongoose.connect(MONGO_URI,  {useUnifiedTopology:  true,useNewUrlParser:  true})
 ; const  db  =  mongoose.connection; 
 
db.on('error',  function(err) 
 
{console.log("Error  occured  during  connection"+err) 
} 
); 
 
db.once('connected',  function()    { 
console.log(`Connected  to  ${MONGO_URI}`); 
}); 
 
// creating the scheme 
const  PersonScheme  =  new mongoose.Schema({ name: { 
type:  String, required:  true 
}, 
age:  Number, Gender:String, Salary:Number 
}); 
 
//  creating  model  named  as  modelname  with  collection  named  as  personCollection  
const  person_doc  =  mongoose.model('modelname',  PersonScheme,'personCollection'); 
// creating a single document 
// const  doc1  =  new  person_doc(
//     // {  name:  'Jacky',age:362,Gender:"Male",Salary:3456 } 
//     {name: 'Yousuf',age:44,Gender:"Male",Salary:3456}
 
// ); 
// //  adding  one  document  in  the  collection  
 
// doc1 
//     .save() 
//     .then((doc1) => { 
//         console.log("New Article Has been Added Into Your DataBase.",doc1); 
//     }) 
//     .catch((err) => { 
//         console.error(err);  
//     });

// task 2 adding many documents in the collection


//     const manyPersons = [
//     { name: 'Simon', age: 42, Gender: "Male", Salary: 3456 },
//     { name: 'Neesha', age: 23, Gender: "Female", Salary: 1000 },
//     { name: 'Mary', age: 27, Gender: "Female", Salary: 5402 },
//     { name: 'Mike', age: 40, Gender: "Male", Salary: 4519 }
// ];

// person_doc.insertMany(manyPersons)
//     .then(() => {
//         console.log("Data inserted");
//     })
//     .catch((error) => {
//         console.log(error);
//     });

    // TASK 3 - Return all documents and limit to 5
// person_doc.find({})
//     .limit(5)
//     .exec()
//     .then((docs) => {
//         console.log("TASK 3 - Showing first 5 documents:");
//         docs.forEach(doc => {
//             console.log(doc.name, doc.age, doc.Gender, doc.Salary);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//     // TASK 4 - Filter documents by Gender = Female and age > givenAge
// const givenAge = 25;   // you will change this number later

// person_doc.find({ Gender: "Female", age: { $gt: givenAge } })
//     .exec()
//     .then((docs) => {
//         console.log(`\nTASK 4 - Female records with age > ${givenAge}:`);
//         docs.forEach((doc) => {
//             console.log(doc.name, doc.age, doc.Salary);
//         });
//         console.log("Total returned:", docs.length);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
//     // TASK 6 - Count all documents in the collection
// person_doc.countDocuments().exec()
//     .then((count) => {
//         console.log("\nTASK 5 - Total documents count:", count);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// // TASK 6 - Delete documents where age >= 25
// person_doc.deleteMany({ age: { $gte: 25 } })
//     .exec()
//     .then((result) => {
//         console.log("\nTASK 6 - Deleted documents result:");
//         console.log("Deleted count:", result.deletedCount);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


    // TASK 7 - Update all Female records by setting Salary = 5555
person_doc.updateMany(
    { Gender: "Female" },      // filter
    { $set: { Salary: 5555 } } // update
)
.exec()
.then((result) => {
    console.log("\nTASK 7 - Updated documents result:");
    console.log("Matched:", result.matchedCount);
    console.log("Modified:", result.modifiedCount);
})
.catch((error) => {
    console.log(error);
});