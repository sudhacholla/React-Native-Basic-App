import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button';

const AlbumDetails = (props) => {

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle}
                        source={{ uri: props.album.thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>
                        {props.album.title}
                    </Text>
                    <Text>
                        {props.album.artist}
                    </Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: props.album.image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(props.album.url)} buttonText = {'Buy Now'}/>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        mariginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 100,
        flex: 1,
        width: null
    }
}
export default AlbumDetails;