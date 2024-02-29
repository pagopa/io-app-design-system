import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconLightbulb = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      d="M17.6854 2.24044A8.81166 8.81166 0 0 0 3.07862 7.66058a8.7512 8.7512 0 0 0 .43835 4.13362 8.75197 8.75197 0 0 0 2.2962 3.465 6.13052 6.13052 0 0 1 1.51313 2.016 6.13156 6.13156 0 0 1 .57425 2.4544v.1576a3.61664 3.61664 0 0 0 1.0593 2.5535A3.61657 3.61657 0 0 0 11.5133 23.5h.607a3.61651 3.61651 0 0 0 2.5535-1.0593 3.61651 3.61651 0 0 0 1.0593-2.5535v-.5375c.0147-.7505.1913-1.489.5178-2.1649a5.21173 5.21173 0 0 1 1.3738-1.7514 8.80528 8.80528 0 0 0 2.2095-2.969 8.80513 8.80513 0 0 0 .7944-3.61476 8.80493 8.80493 0 0 0-.7611-3.6219 8.80592 8.80592 0 0 0-2.1821-2.98926v.00196ZM12.1203 21.5419h-.607a1.65722 1.65722 0 0 1-1.1694-.4852 1.6567 1.6567 0 0 1-.48521-1.1695s-.00685-.2545-.00783-.3035H13.775v.3035c-.0005.4387-.175.8593-.4852 1.1695a1.65746 1.65746 0 0 1-1.1695.4852Zm4.2101-7.579a7.50625 7.50625 0 0 0-2.3146 3.6627h-1.2199v-7.0337a2.9372 2.9372 0 0 0 1.4157-1.06844 2.93714 2.93714 0 0 0 .5424-1.68861.97905.97905 0 0 0-.2867-.6923.97912.97912 0 0 0-.6923-.28677.97914.97914 0 0 0-.9791.97907.97873.97873 0 0 1-.2868.69231.97899.97899 0 0 1-.6923.28677.97916.97916 0 0 1-.6923-.28677.97905.97905 0 0 1-.2867-.69231.97914.97914 0 0 0-.97911-.97907.97904.97904 0 0 0-.97907.97907 2.93723 2.93723 0 0 0 .54249 1.68861 2.93675 2.93675 0 0 0 1.41569 1.06844v7.0337H9.54343a8.45313 8.45313 0 0 0-2.39677-3.7998A6.85353 6.85353 0 0 1 11.015 2.00546a7.29681 7.29681 0 0 1 .8106-.04504 6.77618 6.77618 0 0 1 4.5547 1.74079 6.84577 6.84577 0 0 1 1.6976 2.32454 6.84533 6.84533 0 0 1 .5922 2.81688 6.84743 6.84743 0 0 1-.6179 2.81137 6.84806 6.84806 0 0 1-1.7189 2.3089h-.0029Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconLightbulb;
