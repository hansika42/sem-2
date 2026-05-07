/*function StudentCard(props){
    return(
        <div>
            <h2>Name: {Props.name}</h2>
            <p>Marks: {Props.marks}</p>
            <p>Grade: {Props.grade}</p>
        </div>
    );
}
export default StudentCard;
*/
function StudentCard({name, marks, grade}){
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Marks: {marks}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}
export default StudentCard;



