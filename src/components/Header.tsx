type TdCVprops = {
    name: string
}
export const Header = (props: TdCVprops) =>{
    return (
        <div>
            <h1>Elmehdi {props.name}</h1>
        </div>
    )
}