import React from 'react';
import {View ,StyleSheet} from 'react-native';
import {DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export function DrawerContent(props) {

    const [isDarkTheme,setIsDarkTheme] =React.useState(false);

    const toggleTheme=()=>{
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                            source={{uri:'https://cdn.donmai.us/sample/55/8a/__goblin_slayer_goblin_slayer_drawn_by_ryuzaki_71__sample-558a721b58a0714215e1eebef3f0d7f6.jpg'}} 
                            size={50}
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Goblin Slayer</Title>
                                <Caption style={styles.caption}>@slayingoblins</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>4</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View>
                                <Paragraph style={[styles.paragraph,styles.caption]}>1B</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                icon={({color,size})=>(
                    <Icon name="home-outline"
                    color={color}
                    size={size}
                    />
                )}
                label="Home"
                onPress={()=> {props.navigation.navigate('Home')}}
                />
                <DrawerItem 
                icon={({color,size})=>(
                    <Icon name="account-outline"
                    color={color}
                    size={size}
                    />
                )}
                label="Profile"
                onPress={()=> {props.navigation.navigate('Profile')}}
                />
                <DrawerItem 
                icon={({color,size})=>(
                    <Icon name="bookmark-outline"
                    color={color}
                    size={size}
                    />
                )}
                label="Bookmarks"
                onPress={()=> {props.navigation.navigate('BookmarkScreen')}}
                />
                <DrawerItem 
                icon={({color,size})=>(
                    <Icon name="bookmark-outline"
                    color={color}
                    size={size}
                    />
                )}
                label="Settings"
                onPress={()=> {props.navigation.navigate('SettingsScreen')}}
                />
                <DrawerItem 
                icon={({color,size})=>(
                    <Icon name="account-check-outline"
                    color={color}
                    size={size}
                    />
                )}
                label="Support"
                onPress={()=> {props.navigation.navigate('SupportScreen')}}
                />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={()=>{toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                            <Switch value={isDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
            </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                icon={({color,size})=>(
                    <Icon name="exit-to-app"
                    color={color}
                    size={size}
                    />
                )}
                label="Sign Out"
                onPress={()=> {}}
                />


            </Drawer.Section>
            
        </View>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });