import React, {ReactElement} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Typography} from '../../atoms';
import {TextHeader} from '../../molecules';

import {IDownloadNDATemplateProps} from './DownloadNDATemplate.types';
import {useStyles} from './useStyles';

export const DownloadNDATemplate = ({
  onPressBack,
  onPressDownload,
  ndaText,
}: IDownloadNDATemplateProps): ReactElement => {
  const baseStyles = useStyles();

  return (
    <View style={baseStyles.container}>
      <TextHeader text="Download NDA" onPressBack={onPressBack}>
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          <View style={baseStyles.headingContainer}>
            <Typography text="Non-disclosure agreement" size="heading1" />
          </View>
          <View style={baseStyles.textContainer}>
            <Typography text={ndaText} size="small" />
          </View>
        </ScrollView>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <View style={baseStyles.topButtonContainer}>
          <Button text="Download" onPress={onPressDownload} icon="download" />
        </View>
        <Button text="Go back" onPress={onPressBack} variant="secondary" />
      </View>
    </View>
  );
};
