import React from "react";
import { renderToString } from 'react-dom/server';

const margin = 20;
const width = 100;
const height = width * 0.87;
const font = "sans"

const svg = () => (
	<svg height={2 * margin + 4 * height} width={2 * margin + 4 * width} xmlns="http://www.w3.org/2000/svg">
		<path
			d={`M ${margin + 2 * width} ${margin + 4 * height} L ${margin + 2.5 * width} ${margin + 3 * height} L ${margin + 1.5 * width} ${margin + 3 * height} Z`}
			fill="#A5FF7F"
			strokeWidth="2"
			stroke="black" />
		<path
			d={`M ${margin + 1.5 * width} ${margin + 3 * height} L ${margin + 2.5 * width} ${margin + 3 * height} L ${margin + 3 * width} ${margin + 2 * height} L ${margin + width} ${margin + 2 * height} Z`}
			fill="#FFEB7F"
			strokeWidth="2"
			stroke="black" />
		<path
			d={`M ${margin + width} ${margin + 2 * height} L ${margin + 3 * width} ${margin + 2 * height} L ${margin + 3.5 * width} ${margin + height} L ${margin + 0.5 * width} ${margin + height} Z`}
			fill="#FFB47F"
			strokeWidth="2"
			stroke="black" />
		<path 
			d={`M ${margin + 0.5 * width} ${margin + height} L ${margin + 3.5 * width} ${margin + height} L ${margin + 4 * width} ${margin} L ${margin} ${margin} Z`}
			fill="#FF7F7F"
			strokeWidth="2" 
			stroke="black" />
		<text  x={margin + 180} y={margin + 3 * height + 25} fontFamily={font} fontSize="medium">
			<tspan dx="4">Unit</tspan>
			<tspan x={margin + 180} dy="20">Tests</tspan>
		</text>
		<text  x={margin + 154} y={margin + 2 * height + 39} fontFamily={font} fontSize="large">
			<tspan>Integration</tspan>
			<tspan x={margin + 154} dx="20" dy="23">Tests</tspan>
		</text>
		<text  x={margin + 124} y={margin + height + 51} fontFamily={font} fontSize="x-large">System Tests</text>
		<text  x={margin + 100} y={margin + 56} fontFamily={font} fontSize="xx-large">Manual Tests</text>
	</svg>);

console.log(renderToString(svg()));
