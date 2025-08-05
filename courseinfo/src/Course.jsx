const Header = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

const Content = ({ name, exercises }) => {
    return (
        <p>{name}: {exercises}</p>
    )
}
const Map = ({parts}) => {
    return(
        <>
            {parts.map(part => <Content key={part.id}
            name={part.name} exercises={part.exercises}/>)}
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