import React, { ReactElement, useState } from "react";
import { useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { LinearBackground, Typography } from "../../atoms";
import { CTACard, LogoHeader } from "../../molecules";

const items = [
    { name: "Jim", order: 1 },
    { name: "John", order: 2 },
    { name: "Jess", order: 3 },
];

export const BasicCard = ({

}): ReactElement => {
    const { width } = useWindowDimensions();
    const parentX = useSharedValue(0);
    const parentY = useSharedValue(0);
    const parentSnapPoints = [-width - 100, 0, width + 100];
    const [activeItems, setActiveItems] = useState(items);

    // const childX = useSharedValue(0);
    // const childY = useSharedValue(0);
    // const childSnapPoints = [10, 0, 1000];

    const handleActive = (velX: number, transX: number) => {
        console.log("velocity: ", velX);
        console.log("translation: ", transX);
    };

    const handleChild = () => {
        setTimeout(() => {
            const copy = [...activeItems];
            // copy.shift();
            if(copy[0]) copy[0].order = 0;
            if(copy[1]) copy[1].order = 1;
            if(copy[2]) copy[2].order = 2;
            setActiveItems(copy);
        }, 1000);
    };

    console.log(activeItems.length);

    return (
        <LinearBackground>
            <LogoHeader>
                {activeItems.map((item, i) => {
                    return (
                        <CTACard
                            key={i}
                            onSwipedLeft={handleChild}
                            onSwipedRight={handleChild}
                            x={parentX}
                            y={parentY}
                            snapPoints={parentSnapPoints}
                            handleActive={handleActive}
                            order={item.order}
                        >
                            <Typography text={item.name} />
                        </CTACard>
                    );
                })}
            </LogoHeader>
        </LinearBackground>
    );
};
