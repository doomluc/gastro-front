import Draggable from "react-native-draggable";


export const Table = ({ table, invokeModal }) => {

    console.log(table);
    return (
        <Draggable
            x={100}
            y={100}
            renderSize={60}
            imageSource={require('../../resources/icons/table-default.png')}
            onShortPressRelease={(table) => invokeModal(table.id)}
        />
    );
}