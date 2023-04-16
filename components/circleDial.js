import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import {cyan} from "./styles";

const CircleDial = ({ size = 100, strokeWidth = 10, fillPercentage = 0, children }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (circumference * fillPercentage) / 100;
    const strokeDashoffset = circumference - progress;

    return (
        <View>
            <Svg width={size} height={size}>
                <Path
                    stroke="#E4E4E4"
                    strokeWidth={strokeWidth}
                    fill="none"
                    d={`M ${strokeWidth / 2} ${size / 2} a ${radius} ${radius} 0 1 0 ${size - strokeWidth} 0 a ${radius} ${radius} 0 1 0 -${size - strokeWidth} 0`}
                />
                <Path
                    stroke={cyan}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    d={`M ${size / 2} ${strokeWidth / 2} a ${radius} ${radius} 0 0 1 0 ${size - strokeWidth} a ${radius} ${radius} 0 0 1 0 -${size - strokeWidth}`}
                />
            </Svg>
            <View style={{ position: 'absolute', top: 0, left: 0, width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
                {children}
            </View>
        </View>
    );
};

export default CircleDial;
