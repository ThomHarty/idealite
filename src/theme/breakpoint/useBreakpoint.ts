import {useWindowDimensions} from 'react-native';

export const useBreakpoint = () => {
  const {height} = useWindowDimensions();

  const breakpoint = 600;
  const smallScreen = height < breakpoint;

  return {smallScreen};
};
