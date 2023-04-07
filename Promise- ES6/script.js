console.log("Hello");

const One = () => {
   return new Promise((resolve, reject) => {
      resolve("One is done!");
   });
};
const Two = () => {
   return new Promise((resolve, reject) => {
      resolve("Two is done!");
   });
};
const Three = () => {
   return new Promise((resolve, reject) => {
      resolve("Three is done!");
   });
};
const Four = () => {
   return new Promise((resolve, reject) => {
      reject("Four is not done!");
   });
};
const Five = () => {
   return new Promise((resolve, reject) => {
      resolve("Five is done!");
   });
};

// One()
//    .then((res) => {
//       console.log(res);
//    })
//    .then(Two)
//    .then((res) => {
//       console.log(res);
//    })
//    .then(Three)
//    .then((res) => {
//       console.log(res);
//    })
//    .then(Four)
//    .then((res) => {
//       console.log(res);
//    })
//    .then(Five)
//    .then((res) => {
//       console.log(res);
//    })
//    .catch((err) => { console.log(err); })


const callAllNumbers = async () => {
   try {
      const n1 = await One();
      console.log(n1);
      const n2 = await Two();
      console.log(n2);
      const n3 = await Three();
      console.log(n3);
      const n4 = await Four();
      console.log(n4);
      const n5 = await Five();
      console.log(n5);
   }
   catch (err) {
      console.log(err);
   }
}
callAllNumbers();
console.log("Bye");
