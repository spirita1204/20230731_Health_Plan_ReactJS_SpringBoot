import React from 'react'
import { Fragment } from 'react'
import Post from '../common/components/Post'
import { View, ScrollView, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <Fragment>
            <ScrollView>
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
    )
}