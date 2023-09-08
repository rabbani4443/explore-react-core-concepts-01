export default function Book({book}){
    const {name, price} =book;
    return(
        <div className="student">
        <h3> Book Name:  {name}</h3>
        <h4>Book Price : {price}</h4>
        </div>
    )
}