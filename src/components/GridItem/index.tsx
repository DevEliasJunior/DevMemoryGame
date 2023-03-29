import { GriditemType } from '../../types/Griditem';
import * as C from './style';
import b7Icon from '../../svgs/b7.svg'
import { items } from '../../data/items';

type Props = {
    item: GriditemType,
    onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
    return (
        <C.Container 
        onClick={onClick}
        backgroundColor={item.permanentShown || item.shown}
        >
            {item.permanentShown === false && item.shown === false &&
                <C.Icon opacity={.1} src={b7Icon} alt="" />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="" />
            }
        </C.Container>
    )
}