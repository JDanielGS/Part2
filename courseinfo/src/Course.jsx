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
const Total = ({parts}) => {
    let sum = parts.reduce((acum, part) => acum + part.exercises, 0)
    console.log(sum)

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
            <Total parts={course.parts}/>
        </>
    )
}
export default Course