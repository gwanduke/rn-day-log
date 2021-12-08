import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  Platform,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const bodyRef = useRef();
  const [imageRes, setImageRes] = useState();

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android', // Google Photo를 사용하는 경우 권한 오류가 발생할 수 있으므로, base64 인코딩된 결과값을 사용해 업로드 진행
      },
      res => {
        if (res.didCancel) {
          return;
        }

        setImageRes(res);
      },
    );
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder="당신의 오늘을 기록해보세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
      <Image style={styles.image} source={{uri: imageRes?.assets[0]?.uri}} />
      <Pressable
        style={({pressed}) => [
          styles.button,
          Platform.OS === 'ios' &&
            pressed && {
              backgroundColor: '#efefef',
            },
        ]}
        onPress={onSelectImage}>
        <Text>이미지 첨부</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, padding: 16},
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
  button: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default WriteEditor;
