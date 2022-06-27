import React,{useEffect,useState} from 'react';
import {

  Box,

  NativeBaseProvider,

  Button,
  TextArea,

  View
} from 'native-base';

import { SafeAreaView,Image,StyleSheet} from 'react-native';
import TakePhotoButton from '../TakePhoto/TakePhotoButton';

import { useNavigation } from '@react-navigation/native';
import TextAreaComponent from '../TextArea/TextAreaComponent';
import { propsFlattener } from 'native-base/lib/typescript/hooks/useThemeProps/propsFlattener';

const TakePhotoComment = (props) => {
    const navigation = useNavigation(); 
   

    const [comment,setComment] = useState();

  const saveData = () => {
    const data = {uri: props.route.params.uri,comment: comment};

    props.route.params.func(data,"add")

    navigation.pop(3)
  }
   
  return (




 <NativeBaseProvider>
 <SafeAreaView>

    <Box
     marginTop={20}
     maxW="100%"
     h="50%"
     marginX={20}

     _contentContainerStyle={{
       minW: '100%',
     }}>



<Image
       style={styles.tinyLogo}
        source={{
          uri:props.route.params.uri

        }}
      />

    <TextArea 
            marginBottom={30}
            w="100%"
            value={comment}
            onChangeText={text => {
              setComment(text)
            }}
      />

      <Button onPress={saveData}>Kaydet</Button>




    </Box>
      
   
  

 </SafeAreaView>
</NativeBaseProvider>
       

       
  

  );
};

export default TakePhotoComment;

const styles = StyleSheet.create({

  tinyLogo: {
    width: 230,
    height: 230,
    borderRadius: 10,
    marginBottom: 30
  },
});