//import liraries
import React, { Component, useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import OwnJobItem from '../components/UI/OwnJobItem'
import * as jobActions from '../Redux/Actions/jobActions'

// create a component
const UserJobScreen = (props) => {

    const [isRefreshing, setIsRefreshing] = useState(false)

    const dispatch = useDispatch()
    const userOwnJobs = useSelector(state => state.job.userOwnJobs)

    const loadOwnJobs = useCallback(async () => {
        setIsRefreshing(true)
        try {
            await dispatch(jobActions.fetchAllJobs())
        } catch (err) {

        }
        setIsRefreshing(false)
    }, [dispatch, userOwnJobs])

    const deleteJob = (jobId) => {

        Alert.alert('Are you sure', 'Do you want to delete?',
            [
                {
                    text: "No",
                    style: "default"
                },
                {
                    text: "Yes",
                    style: 'destructive',
                    onPress: () => {
                        dispatch(jobActions.deleteJob(jobId))
                    }
                }
            ])

    }


    useEffect(() => {
        loadOwnJobs()
    }, [])


    const editJob = (id) => {
        props.navigation.navigate("EditMode", { id: id })
    }


    return (
        <View style={styles.container}>
            <FlatList style={{ flex: 1 }} data={userOwnJobs} onRefresh={loadOwnJobs} refreshing={isRefreshing} keyExtractor={item => item.id}
                renderItem={itemData => <OwnJobItem
                    description={itemData.item.description}
                    bgColor={itemData.item.bgColor}
                    deleteJob={() => deleteJob(itemData.item.id)}
                    editJob={() => editJob(itemData.item.id)}
                />}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});


//make this component available to the app
export default UserJobScreen;
