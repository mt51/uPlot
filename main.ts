import uPlot from './src/uPlot';
import './src/uPlot.css';

const el = document.querySelector('#root');


const opts = {
	title: "Server Events",
	width: 900,
	height: 600,
	series: [
		{},
		{
			label: "CPU",
			value: (u, v: number) => v === null ? null : v.toFixed(1),
			stroke: "red",
			width: 1,
		},
		{
			label: "RAM",
			value: (u, v: number) => v === null ? null : v.toFixed(1),
			stroke: "red",
			width: 1,
		}
	]
}

const data = [
	[1566453600,1566453660,1566453720,1566453780,1566453840,1566453900,1566453960,1566454020,1566454080,1566454140],
	[0.54,0.15,0.16,0.15,0.19,0.26,0.32,0.15,0.15,0.28],
	[14.02,14.01,14.01,14.01,14.01,14.03,14.03,14.02,14.02,14.03],
	[0,0,0,0,0,0,0,0,0,0]];

debugger

// @ts-ignore
new uPlot(opts, data, el!)
