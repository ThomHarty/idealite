import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {Id} from '../../../theme/svg';

import {Button, Typography} from '../../atoms';
import {TextHeader} from '../../molecules';
import {IIdVerificationTemplateProps} from './IdVerificationTemplate.types';
import {useStyles} from './useStyles';

export const IdVerificationTemplate = ({
  onPressBack,
  onPressContinue,
}: IIdVerificationTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <View style={baseStyles.container}>
      <TextHeader onPressBack={onPressBack} text="Identity Verification">
        <View style={baseStyles.contentContainer}>
          <View style={baseStyles.svgContainer}>
            <Id />
          </View>
          <Text style={baseStyles.headingContainer}>
            <Typography text="We need to verify it's you" size="heading2" />
          </Text>
          <Text style={baseStyles.infoContainer}>
            <Typography
              text="Scan your ID and take a selfie to verify your identity"
              size="tiny"
            />
          </Text>
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <Button text="Continue" onPress={onPressContinue} />
      </View>
    </View>
  );
};
