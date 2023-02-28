import { memo, ReactElement, useCallback, useEffect, useState } from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";

import { Icon } from "../../../shared/components";
import { useLayoutStyles } from "./animations";
import { baseStyles } from "./Modal.styles";
import { IModalProps } from "./Modal.types";

export const Modal = memo(({
    open,
    children,
    onClose,
}: IModalProps): ReactElement => {
    const [showModal, setShowModal] = useState(false);
    const { layout } = useLayoutStyles({open});

    useEffect(() => {
        if(open) {
            setShowModal(true);
        } else {
            setTimeout(() => {
                setShowModal(false);
            }, 375);
        }
    }, [open]);
    
    return (
        <>
        {showModal && (
        <Animated.View style={[baseStyles.container, layout.container]}>
            <Animated.View style={[baseStyles.modalContainer, layout.modalContainer]}>
                <Animated.View style={[baseStyles.iconContainer]}>
                    <Pressable onPress={onClose}>
                        <Icon
                            name="cross"
                            iconStyles={baseStyles.icon}
                            testID="modal-cross-icon"
                        />
                    </Pressable>
                </Animated.View>
                {children}
            </Animated.View>
        </Animated.View>
        )}
        </>
    )
});
