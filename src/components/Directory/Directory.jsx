import {DirectoryContainer} from './Directory.styles.jsx';
import DirectoryItem from '../Directory-item/Directory-item';

const Directory = ({ categories }) => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory;