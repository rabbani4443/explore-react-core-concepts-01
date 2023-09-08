// export default function Todo({task}){
//     return(
//         <h4> Task : {task} </h4>
//     )
// }  


// Conditional Rendering Option 01
//===========================================
// export default function Todo({task, isDone}){
//     if(isDone===true){
//         return <h4> Finished : {task} </h4>
//     }else{
//         return <h4> Work on : {task} </h4>
//     }
// };


// Conditional Rendering Option 02
//===========================================
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <h4> Finished  : {task} </h4>
//     } return <h4> Work on : {task} </h4>
// };


// Conditional Rendering Option 03; Ternary Most important
//==========================================================
// export default function Todo({task, isDone}){
//     return(
//         <h4> {isDone ? 'Finished : ' : 'Work On : '} { task} </h4>
//     )
// };


// Conditional Rendering Option 04
//==========================================================
// export default function Todo({task, isDone}){
//     return(
//         <h4> {isDone && "Done :"} { task} </h4>
//     )
// };

// Conditional Rendering Option 05
//==========================================================
// export default function Todo({task, isDone}){
//     return(
//         <h4> {isDone || "Do It :" } { task} </h4>
//     )
// };


// Conditional Rendering Option 06
//===========================================
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <h4> Finished  : {task} </h4>
    } else{
        listItem = <h4> Work on : {task} </h4>
    }
    return listItem;
};
