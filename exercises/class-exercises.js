// isUnique = (arr) => {
//     const breadcrumbs = {};
//     let result = true;
    
//     for (let i = 0; i < arr.length; i++) {
//       console.log(`~~~~ LOOP ~~~~ i === ${i}`);
//     //   console.log(breadcrumbs[arr[i]]);
//       if (breadcrumbs[arr[i]]) {
//         result = false;
//       } 
//       else {
//         breadcrumbs[arr[i]] = true;
//       }
//     }
//     console.log(breadcrumbs)
//     return result;
//   };
  
// console.log(isUnique([1,1,3,4,5]) === true);
//   // console.log(isUnique([1,1,3]) === false);


const Transmissions = {manual: [2, 4, 6, 8], automatic: "CVT"}
const Cars = {wheels: 4, transmission: Transmissions, physics: "Newtonian"}

console.log(Cars.transmission.manual.values(3));
