import React, {ReactElement} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';

import {COLORS} from '../../../theme';
import {Verify} from '../../../theme/svg';
import {LinearBackground, Link, Typography} from '../../atoms';
import {CodeInput, TextHeader} from '../../molecules';
import {baseStyles} from './OnboardingVerificationTemplate.styles';
import {IOnboardingVerificationTemplateProps} from './OnboardingVerificationTemplate.types';

export const OnboardingVerificationTemplate = ({
  header,
  email,
  codeInput,
  onPressResend,
}: IOnboardingVerificationTemplateProps): ReactElement => {
  return (
    <LinearBackground>
      <TextHeader {...header}>
        <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
          <View style={baseStyles.wrapper}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <View style={baseStyles.card}>
                <View style={baseStyles.svgContainer}>
                  <Verify />
                </View>
                <Text style={baseStyles.headingContainer}>
                  <Typography
                    text="Please verify your account"
                    size="heading3"
                  />
                </Text>
                <Text style={baseStyles.infoContainer}>
                  <Typography
                    text="We've just sent a 6-digit code to your inbox. Enter it below."
                    size="small"
                  />
                </Text>
                <Text style={baseStyles.emailContainer}>
                  <Typography
                    text={email}
                    size="small"
                    color={COLORS.GREY_DARK}
                  />
                </Text>
                <View style={baseStyles.codeContainer}>
                  <CodeInput {...codeInput} />
                </View>
                <Text style={baseStyles.linkContainer}>
                  <Link
                    text="Didn't receive code? Resend"
                    onPress={onPressResend}
                  />
                </Text>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Pressable>
      </TextHeader>
    </LinearBackground>
  );
};
