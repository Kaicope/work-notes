import React from 'react';
import moment from 'moment';
import {SafeAreaView, Text, View} from 'react-native';
import {useTheme, Button} from 'react-native-paper';
import {useAppDispatch} from '../store';
import {deleteNote} from '../store/notes';

import {
  ContainerStyles,
  TextStyles,
  GlobalStyles,
  ButtonStyles,
} from '../styles';

const ViewNote = ({route, navigation}) => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  let {id, text, date} = route.params;
  const _delete = () => {
    dispatch(deleteNote(id));
    navigation.goBack();
  };
  return (
    <SafeAreaView
      style={[
        ContainerStyles.globalContainer,
        {backgroundColor: colors.background},
      ]}>
      <View
        style={[
          ContainerStyles.noteContainer,
          {backgroundColor: colors.background, borderColor: colors.background},
        ]}>
        <Text
          style={[
            TextStyles.title,
            {color: colors.primary, borderColor: colors.surfaceVariant},
          ]}>
          {moment(date).format('dddd, MMMM Do YYYY')}
        </Text>
        <Text
          style={[ContainerStyles.noteMainContent, {color: colors.primary}]}>
          {text}
        </Text>
      </View>
      <View style={[GlobalStyles.bottom]}>
        <Button
          color={colors.onSecondary}
          icon="delete"
          mode="contained"
          onPress={_delete}>
          Delete Note
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ViewNote;
