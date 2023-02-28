import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme';

import {ProfileHeaderStyles} from './ProfileHeader.types';

export const baseStyles: ProfileHeaderStyles = StyleSheet.create({
  container: {},
  gradientContainer: {
    height: 190,
    marginTop: -90,
  },
  avatarContainer: {
    marginTop: -41,
    borderWidth: 2,
    borderColor: COLORS.ACCENT_TWO,
    width: 86,
    height: 86,
    borderRadius: 43,
    alignSelf: 'center',
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
  bodyContainer: {
    backgroundColor: COLORS.WHITE,
    paddingBottom: 17,
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 7,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
  joinedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  icon: {
    color: COLORS.ACCENT_ONE,
    marginRight: 14,
  },
  iconSize: {
    fontSize: 18,
  },
});
