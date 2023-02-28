import React, {ReactElement} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Typography} from '../../atoms';
import {TextHeader} from '../../molecules';

import {IOpenNDATemplateProps} from './OpenNDATemplate.types';
import {useStyles} from './useStyles';

export const OpenNDATemplate = ({
  onPressBack,
  onPressAccept,
  onPressDecline,
  ndaText,
}: IOpenNDATemplateProps): ReactElement => {
  const baseStyles = useStyles();

  return (
    <View style={baseStyles.container}>
      <TextHeader text="Accept NDA" onPressBack={onPressBack}>
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
          <Button text="Accept" onPress={onPressAccept} icon="tick" />
        </View>
        <Button
          text="Decline"
          onPress={onPressDecline}
          variant="secondary"
          icon="cross"
        />
      </View>
    </View>
  );
};
