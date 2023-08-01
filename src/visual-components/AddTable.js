import Draggable from "react-native-draggable";


export const AddTable = ({ onSubmit }) => {
    return (
        <Draggable x={50} y={50} shouldReverse onShortPressRelease={onSubmit}/>
        );
}