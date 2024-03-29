import React from 'react';
import { Fragment, useContext } from 'react';
import Post from '../common/components/Post';
import { View, ScrollView, StyleSheet } from 'react-native';
import { HomeContext } from '../common/contexts/HomeContext';

/**
 *  首頁
 * @returns 
 */
export default function Home() {

    // 交易畫面共用資料以及函數
    const {
        translate
    } = useContext(HomeContext);

    return (
        <Fragment>
            <ScrollView style={styles.container}>
                <Post
                    username={'daniel'}
                    text={'hello world!'}
                    imageSource={{ uri: 'https://wall.bahamut.com.tw/B/40/aimconlwzyspyqp3bg8avfxfqtg4itcyulhed9s3.JPG' }}
                ></Post>
                <Post
                    username={'daniel'}
                    text={'hello world!'}
                    imageSource={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6HRomJWKtFDvOelkYHwwjA-xe7Usq0JgWRkQDGWy&s' }}
                ></Post>
                <Post
                    username={'daniel'}
                    text={'hello world!'}
                    imageSource={{ uri: 'https://wall.bahamut.com.tw/B/40/aimconlwzyspyqp3bg8avfxfqtg4itcyulhed9s3.JPG' }}
                ></Post>
            </ScrollView>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10, // Add padding around the content
        backgroundColor: '#444444'
    },
});