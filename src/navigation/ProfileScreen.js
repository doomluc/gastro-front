import {StyleSheet, Text, View, TextInput} from "react-native";
import {TableConstructorModal} from "../visual-components/TableConstructorModal";
import {AddTable} from "../visual-components/AddTable";
import {Table} from "../visual-components/Table";
import { useState } from "react";

export const ProfileScreen = ({navigation, route}) => {
    const [tables, setTables] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState();

    const addTable = (title) => {
        const newTable = {
            id: Date.now().toString(),
            title: title,
        };

        setTables((prevTables) => {
            return [
                ...prevTables,
                newTable,
            ]
        });
    }

    const invokeModal = (table) => {
        setIndex(() => {
            console.log(tables.indexOf(table))
            return tables.indexOf(table);
        })
        setModalVisible(true);
    }

    return (
    <View style={styles.container}>
      <TableConstructorModal table={tables[index]} setModalVisible={setModalVisible} modalVisible={modalVisible} />
        <TextInput />
        <AddTable onSubmit={addTable}/>

        <View>
          {tables.map(table =>
                  (<Table
                      table={table}
                      key={table.id}
                      invokeModal={invokeModal}
                  />)
          )}
        </View>
    </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
    },
});