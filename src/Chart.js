// import React from "react";
// import PropTypes from "prop-types";


// import { format } from "d3-format";
// import { timeFormat } from "d3-time-format";


// import { ChartCanvas, Chart } from "react-stockcharts";
// import {
//     BarSeries,
//     StraightLine,
//     CandlestickSeries,
//     LineSeries,
//     StochasticSeries,
// } from "react-stockcharts/lib/series";
// import { XAxis, YAxis } from "react-stockcharts/lib/axes";
// import {
//     CrossHairCursor,
//     EdgeIndicator,
//     CurrentCoordinate,
//     MouseCoordinateX,
//     MouseCoordinateY,
// } from "react-stockcharts/lib/coordinates";


// import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
// import {
//     OHLCTooltip,
//     MovingAverageTooltip,
//     StochasticTooltip,
// } from "react-stockcharts/lib/tooltip";
// import { ema, stochasticOscillator } from "react-stockcharts/lib/indicator";
// import { fitWidth } from "react-stockcharts/lib/helper";
// import { last } from "react-stockcharts/lib/utils";


// const stoAppearance = {
//     stroke: Object.assign({},
//         StochasticSeries.defaultProps.stroke)
// };


// class CandleStickChartWithFullStochasticsIndicator extends React.Component {
//     render() {
//         const height = 750;
//         const { type, data: initialData, width, ratio } = this.props;
//         const margin = { left: 0, right: 50, top: 0, bottom: 30 };


//         const gridHeight = height - margin.top - margin.bottom;
//         const gridWidth = width - margin.left - margin.right;


//         const showGrid = true;
//         const yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.1 } : {};
//         const xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.1 } : {};


//         const ema20 = ema()
//             .id(0)
//             .options({ windowSize: 20 })
//             .merge((d, c) => {d.ema20 = c;})
//             .accessor(d => d.ema20);


//         const ema50 = ema()
//             .id(2)
//             .options({ windowSize: 50 })
//             .merge((d, c) => {d.ema50 = c;})
//             .accessor(d => d.ema50);


//         const slowSTO = stochasticOscillator()
//             .options({ windowSize: 14, kWindowSize: 3 })
//             .merge((d, c) => {d.slowSTO = c;})
//             .accessor(d => d.slowSTO);
//         const fastSTO = stochasticOscillator()
//             .options({ windowSize: 14, kWindowSize: 1 })
//             .merge((d, c) => {d.fastSTO = c;})
//             .accessor(d => d.fastSTO);
//         const fullSTO = stochasticOscillator()
//             .options({ windowSize: 14, kWindowSize: 3, dWindowSize: 4 })
//             .merge((d, c) => {d.fullSTO = c;})
//             .accessor(d => d.fullSTO);


//         const calculatedData = ema20(ema50(slowSTO(fastSTO(fullSTO(initialData)))));
//         const xScaleProvider = discontinuousTimeScaleProvider
//             .inputDateAccessor(d => d.date);
//         const {
//             data,
//             xScale,
//             xAccessor,
//             displayXAccessor,
//         } = xScaleProvider(calculatedData);


//         const start = xAccessor(last(data));
//         const end = xAccessor(data[Math.max(0, data.length - 150)]);
//         const xExtents = [start, end];
//         return (
//             <ChartCanvas height={750}
//                 width={width}
//                 ratio={ratio}
//                 margin={margin}
//                 type={type}
//                 seriesName="MSFT"
//                 data={data}
//                 xScale={xScale}
//                 xAccessor={xAccessor}
//                 displayXAccessor={displayXAccessor}
//                 xExtents={xExtents}
//             >
//                 <Chart id={1} height={325}
//                     yExtents={d => [d.high, d.low]}
//                     padding={{ top: 10, bottom: 20 }}
//                 >
//                     <YAxis axisAt="right" orient="right" ticks={5} {...yGrid}/>
//                     <XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />


//                     <MouseCoordinateY
//                         at="right"
//                         orient="right"
//                         displayFormat={format(".2f")} />


//                     <CandlestickSeries />


//                     <LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()}/>
//                     <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()}/>


//                     <CurrentCoordinate yAccessor={ema20.accessor()} fill={ema20.stroke()} />
//                     <CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()} />


//                     <EdgeIndicator itemType="last" orient="right" edgeAt="right"
//                         yAccessor={d => d.close} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"}/>


//                     <StraightLine type="vertical" xValue={608} />;
//                     <StraightLine type="vertical" xValue={558} strokeDasharray="Dot" />;
//                     <StraightLine type="vertical" xValue={578} strokeDasharray="LongDash" />;


//                     <OHLCTooltip origin={[-40, -10]}/>
//                     <MovingAverageTooltip
//                         onClick={e => console.log(e)}
//                         origin={[-38, 5]}
//                         options={[
//                             {
//                                 yAccessor: ema20.accessor(),
//                                 type: ema20.type(),
//                                 stroke: ema20.stroke(),
//                                 windowSize: ema20.options().windowSize,
//                             },
//                             {
//                                 yAccessor: ema50.accessor(),
//                                 type: ema50.type(),
//                                 stroke: ema50.stroke(),
//                                 windowSize: ema50.options().windowSize,
//                             },
//                         ]}
//                     />
//                 </Chart>
//                 <Chart id={2}
//                     yExtents={d => d.volume}
//                     height={100} origin={(w, h) => [0, h - 475]}
//                 >
//                     <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")}/>


//                     <MouseCoordinateY
//                         at="left"
//                         orient="left"
//                         displayFormat={format(".4s")} />


//                     <BarSeries yAccessor={d => d.volume} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"} />
//                 </Chart>
//                 <Chart id={3}
//                     yExtents={[0, 100]}
//                     height={125} origin={(w, h) => [0, h - 375]} padding={{ top: 10, bottom: 10 }}
//                 >
//                     <XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />
//                     <YAxis axisAt="right" orient="right"
//                         tickValues={[20, 50, 80]} />
//                     <MouseCoordinateY
//                         at="right"
//                         orient="right"
//                         displayFormat={format(".2f")} />


//                     <StochasticSeries
//                         yAccessor={d => d.fastSTO}
//                         {...stoAppearance} />
//                     <StochasticTooltip
//                         origin={[-38, 15]}
//                         yAccessor={d => d.slowSTO}
//                         options={slowSTO.options()}
//                         appearance={stoAppearance}
//                         label="Slow STO" />


//                 </Chart>
//                 <Chart id={4}
//                     yExtents={[0, 100]}
//                     height={125} origin={(w, h) => [0, h - 250]} padding={{ top: 10, bottom: 10 }}
//                 >
//                     <XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />
//                     <YAxis axisAt="right" orient="right"
//                         tickValues={[20, 50, 80]} />


//                     <MouseCoordinateY
//                         at="right"
//                         orient="right"
//                         displayFormat={format(".2f")} />


//                     <StochasticSeries
//                         yAccessor={d => d.slowSTO}
//                         {...stoAppearance} />


//                     <StochasticTooltip
//                         origin={[-38, 15]}
//                         yAccessor={d => d.fastSTO}
//                         options={fastSTO.options()}
//                         appearance={stoAppearance}
//                         label="Fast STO" />
//                 </Chart>
//                 <Chart id={5}
//                     yExtents={[0, 100]}
//                     height={125} origin={(w, h) => [0, h - 125]} padding={{ top: 10, bottom: 10 }}
//                 >
//                     <XAxis axisAt="bottom" orient="bottom" {...xGrid} />
//                     <YAxis axisAt="right" orient="right"
//                         tickValues={[20, 50, 80]} />


//                     <MouseCoordinateX
//                         at="bottom"
//                         orient="bottom"
//                         displayFormat={timeFormat("%Y-%m-%d")} />
//                     <MouseCoordinateY
//                         at="right"
//                         orient="right"
//                         displayFormat={format(".2f")} />
//                     <StochasticSeries
//                         yAccessor={d => d.fullSTO}
//                         {...stoAppearance} />


//                     <StochasticTooltip
//                         origin={[-38, 15]}
//                         yAccessor={d => d.fullSTO}
//                         options={fullSTO.options()}
//                         appearance={stoAppearance}
//                         label="Full STO" />
//                 </Chart>
//                 <CrossHairCursor />
//             </ChartCanvas>
//         );
//     }
// }
// CandleStickChartWithFullStochasticsIndicator.propTypes = {
//     data: PropTypes.array.isRequired,
//     width: PropTypes.number.isRequired,
//     ratio: PropTypes.number.isRequired,
//     type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
// };


// CandleStickChartWithFullStochasticsIndicator.defaultProps = {
//     type: "svg",
// };


// CandleStickChartWithFullStochasticsIndicator = fitWidth(CandleStickChartWithFullStochasticsIndicator);


// export default CandleStickChartWithFullStochasticsIndicator;

import React from "react";
import PropTypes from "prop-types";

import { scaleTime } from "d3-scale";
import { curveMonotoneX } from "d3-shape";

import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { createVerticalLinearGradient, hexToRGBA } from "react-stockcharts/lib/utils";

const canvasGradient = createVerticalLinearGradient([
	{ stop: 0, color: hexToRGBA("#b5d0ff", 0.2) },
	{ stop: 0.7, color: hexToRGBA("#6fa4fc", 0.4) },
	{ stop: 1, color: hexToRGBA("#4286f4", 0.8) },
]);

class AreaChart extends React.Component {
	render() {
		const { data, type, width, ratio } = this.props;
		return (
			<ChartCanvas ratio={ratio} width={width} height={400}
				margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
				seriesName="MSFT"
				data={data} type={type}
				xAccessor={d => d.date}
				xScale={scaleTime()}
				xExtents={[new Date(2011, 0, 1), new Date(2013, 0, 2)]}
			>
				<Chart id={0} yExtents={d => d.close}>
					<defs>
						<linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
							<stop offset="0%" stopColor="#b5d0ff" stopOpacity={0.2} />
							<stop offset="70%" stopColor="#6fa4fc" stopOpacity={0.4} />
							<stop offset="100%"  stopColor="#4286f4" stopOpacity={0.8} />
						</linearGradient>
					</defs>
					<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
					<YAxis axisAt="left" orient="left" />
					<AreaSeries
						yAccessor={d => d.close}
						fill="url(#MyGradient)"
						strokeWidth={2}
						interpolation={curveMonotoneX}
						canvasGradient={canvasGradient}
					/>
				</Chart>
			</ChartCanvas>
		);
	}
}


AreaChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

AreaChart.defaultProps = {
	type: "svg",
};
AreaChart = fitWidth(AreaChart);

export default AreaChart;