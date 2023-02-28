import React, {ReactElement, useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import {Button, Typography} from '../../atoms';
import {BorderedSvg, TextHeader} from '../../molecules';
import {ISelectIdTypeTemplateProps} from './SelectIdTypeTemplate.types';
import {useStyles} from './useStyles';

export const SelectIdTypeTemplate = ({
  onPressBack,
  onPressContinue,
  selected,
  onPressType,
}: ISelectIdTypeTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (selected) {
      setDisabled(false);
    }
  }, [selected]);

  return (
    <View style={baseStyles.container}>
      <TextHeader onPressBack={onPressBack} text="Identity Verification">
        <View style={baseStyles.contentContainer}>
          <View style={baseStyles.svgContainer}>
            <Pressable
              style={baseStyles.svg}
              onPress={() => onPressType('passport')}>
              <BorderedSvg
                svg="passport"
                size="large"
                active={selected === 'passport'}
              />
            </Pressable>
            <Pressable
              style={baseStyles.svg}
              onPress={() => onPressType('license')}>
              <BorderedSvg
                svg="license"
                size="large"
                active={selected === 'license'}
              />
            </Pressable>
          </View>
          <Text style={baseStyles.headingContainer}>
            <Typography
              text="Choose which document you wish to scan"
              size="heading2"
            />
          </Text>
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <Button text="Continue" onPress={onPressContinue} disabled={disabled} />
      </View>
    </View>
  );
};
