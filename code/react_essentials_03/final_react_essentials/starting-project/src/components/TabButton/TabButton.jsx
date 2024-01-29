// export default function TabButton(props){
//     return(
//         <button>{props.children}</button>
//     )
// }

export default function TabButton({children,onSelect}){
    return(
        <button onClick={onSelect}>{children}</button>
    )
}