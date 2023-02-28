import { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { useDropdownLayout } from "./useDropdownLayout";
import { useIconLayout } from "./useIconLayout";
import { useLabelLayout } from "./useLabelLayout";

interface Props {
    hasSelected: boolean;
    isOpen: boolean;
}

export const useLayoutStyles = ({
    hasSelected,
    isOpen,
}: Props) => {
    const labelShared = useLabelLayout({hasSelected});
    const dropdownShared = useDropdownLayout({isOpen});
    const iconShared = useIconLayout({isOpen});

    const label = useAnimatedStyle(() => {
        return {
            top: withTiming(labelShared.value!.top, { 
                duration: 250,
            }),
            fontSize: withTiming(labelShared.value!.fontSize, { 
                duration: 250,
            }),
            marginBottom: withTiming(labelShared.value!.marginBottom, { 
                duration: 250,
            }),
        }
    });

    const dropdown = useAnimatedStyle(() => {
        return {
            opacity: withTiming(dropdownShared.value!.opacity, { 
                duration: 250,
            }),
            height: withTiming(dropdownShared.value!.height, { 
                duration: 250,
            }),
        }
    });

    const icon = useAnimatedStyle(() => {
        return {
          transform: [{rotateZ: `${iconShared.value}deg`}],
        };
      });

    return { layout: { label, dropdown, icon } };
};
