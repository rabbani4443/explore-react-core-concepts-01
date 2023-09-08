export default function Singers({singer}){
    return(
        <div className='student'> 
            <h3> Singer Name : {singer.name}</h3>
            <h4> Singer Age : {singer.age}</h4>
        </div>
    )
}