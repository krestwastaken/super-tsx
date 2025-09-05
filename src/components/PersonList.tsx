type Persons = {
    names: {
        first: string,
        last: string
    }[]
}

export default function PersonList (props: Persons) {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}