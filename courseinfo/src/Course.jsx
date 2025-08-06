const Body = ({parts}) => {
    return(<>
    {parts.map(course =>(
            <div key={course.id}>
                <h1 key={course.id}>{course.name}</h1>
                {course.parts.map(part =>
                    <p key={part.id}>{part.name}: {part.exercises}</p>
                )}
                <p><strong>Total of {course.parts.reduce((sum, exer) =>
                sum + exer.exercises, 0)} exercises</strong></p>
            </div>
        ))}
    </>)
}

const Course = ({ courses }) => {
    return (
        <>
            <Body parts={courses}/>
        </>
    )
}
export default Course