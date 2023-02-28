import {StyleSheet} from 'react-native';

import {COLORS} from '../../../theme';
import {OnboardingVerificationTemplateStyles} from './OnboardingVerificationTemplate.types';

export const baseStyles: OnboardingVerificationTemplateStyles =
  StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
      paddingRight: 18,
      paddingBottom: 60,
      paddingLeft: 18,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      height: 465,
      width: '100%',
      padding: 18,
      backgroundColor: COLORS.WHITE,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      // shadow
      shadowColor: COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 3.84,
      elevation: 5,
    },
    svgContainer: {
      height: 123,
      width: 118,
      marginBottom: 17,
    },
    headingContainer: {
      textAlign: 'center',
      marginBottom: 17,
    },
    infoContainer: {
      textAlign: 'center',
      marginBottom: 17,
    },
    emailContainer: {
      textAlign: 'center',
      marginBottom: 17,
    },
    codeContainer: {
      marginBottom: 17,
    },
    linkContainer: {
      textAlign: 'center',
    },
  });
