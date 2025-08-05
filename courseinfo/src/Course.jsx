const Header = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}
const Map = ({parts}) => {
    return(
        <>
            {parts.map(part => 
                <p key={part.id}>{part.name}: {part.exercises}</p>
            )}
        </>
    )
}
const Sum = ({parts}) => {
    let sum = 0
    parts.forEach(element => {
      sum+=element.exercises
    })

    return(
        <>
            <p>Total of: {sum} exercises</p>
        </>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header title={course.name} />
            <Map parts={course.parts}/>
            <Sum parts={course.parts}/>
        </>
    )
}
export default Course