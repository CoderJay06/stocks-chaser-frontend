import React from "react";
import PropTypes from "prop-types";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import { scaleTime } from "d3-scale";
import { curveMonotoneX } from "d3-shape";

import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { createVerticalLinearGradient, hexToRGBA } from "react-stockcharts/lib/utils";
import { SingleValueTooltip } from "react-stockcharts/lib/tooltip";
import {
	CrossHairCursor,
	MouseCoordinateX,
	MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

const canvasGradient = createVerticalLinearGradient([
	{ stop: 0, color: hexToRGBA("#85bb65", 0.2) },
	{ stop: 0.7, color: hexToRGBA("#68a047", 0.4) },
	{ stop: 1, color: hexToRGBA("#add197", 0.8) },
]);

class AreaChart extends React.Component {
	render() {
		const { data, type, width, ratio, tickerSymbol } = this.props;

		return (
			<ChartCanvas ratio={ratio} width={width} height={400}
				margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
				seriesName={tickerSymbol}
				data={data} type={type}
				xAccessor={d => d.date}
				displayXAccessor={(d) => d.date}
				xScale={scaleTime()}
				xExtents={[new Date(data[0].date), new Date(data[99].date)]}
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

					<MouseCoordinateX
						at="bottom"
						orient="bottom"
						displayFormat={timeFormat("%Y-%m-%d")} />
					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />

               		<YAxis axisAt="right" orient="right" percentScale={true} tickFormat={format(".0%")}/>
					<AreaSeries
						yAccessor={d => d.close}
						fill="url(#MyGradient)"
						strokeWidth={2}
						interpolation={curveMonotoneX}
						canvasGradient={canvasGradient}
					/>
					<SingleValueTooltip
						xLabel="Date" /* xLabel is optional, absence will not show the x value */ yLabel="C"
						yAccessor={d => d.close}
						xDisplayFormat={timeFormat("%Y-%m-%d")} yDisplayFormat={format(".2f")}
						/* valueStroke="green" - optional prop */
						/* labelStroke="#4682B4" - optional prop */
						origin={[-40, 0]}/>
					<SingleValueTooltip
						yLabel="Volume" yAccessor={(d) => d.volume}
						origin={[-40, 20]}/>
						<MouseCoordinateY
						at="left"
						orient="left"
						displayFormat={format(".4s")} />
				</Chart>
				<CrossHairCursor />
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
