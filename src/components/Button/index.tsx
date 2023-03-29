import * as C from '../Button/style'

type Props = {
    label:string,
    icon?:any,
    onclick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({icon, label, onclick}: Props) => {
    return (
        <C.Container onClick={onclick}>
            {icon && 
                <C.iconArea>
                    <C.icon src={icon} />
                </C.iconArea>  
            }        
            <C.label>{label}</C.label>
        </C.Container>
    )
}
