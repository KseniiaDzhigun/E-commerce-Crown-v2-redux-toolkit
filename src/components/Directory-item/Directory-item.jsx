import {BackgroundImage, Body, DirectoryItemContainer} from './Directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;