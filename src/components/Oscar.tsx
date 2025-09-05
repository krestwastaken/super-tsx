type OscarProps = {
    children: React.ReactNode
}

export default function (props: OscarProps) {
    return (
        <div>{props.children}</div>
    )
}