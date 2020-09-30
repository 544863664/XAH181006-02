<template>
	<div id="Map">
		<lbs-map :center="map.center" :zoom="map.zoom" :maptype="map.mapType" ref="lbsmap">
			<!-- 路径规划 -->
			<lbs-driving :start="driving.start" :end="driving.end" @result="result"></lbs-driving>
			<!-- 点标记 -->
			<lbs-marker :coord="marker.coord" color="green" label="" icon-image-url="" :angle="marker.angle" :visible="true" type="car"></lbs-marker>
		</lbs-map>
	</div>
</template>



<script>
	export default {
		name: "Map",
		data() {
			return {
				/* 地图属性 */
				/* 
				 zoom		Integer	地图显示的缩放级别范围，1-16
				 center		Array	地图中心点坐标值
				 maptype	String	设置地图类型支持google(默认) baidu gaode googleSat googleTerrain tianditu tiandituSat tiandituLabel tiandituSatLabel openStreetMap yandexMap bingMap等
				 lang		String	地图语言类型 默认：zh_cn，可选值：zh_cn：中文简体，en：英文，zh_en：中英文对照
				 */
				map: {
					center: [108.938538, 34.383802],
					zoom: 16,
					mapType: "google",
				},
				/* 路径规划 */
				driving: {
					start: [108.924586, 34.231101], // 起点坐标 [经度lng, 纬度lat]
					end: [108.945099, 34.381163], // 终点坐标 [经度lng, 纬度lat]
				},
				
				/* 点标记 */
				marker: {
					coord: [108.938538, 34.383802],
					angle: 74.00918628990713
				},

			};
		},
		mounted() {
			// 34.383150 108.935781, 34.383802 108.938538	上一次的坐标	当前坐标
			console.log(this.getAngle(108.935781, 34.383150, 108.938538, 34.383802));
		},
		methods: {
			/* 获取角度 */
			getAngle(lng_a, lat_a, lng_b, lat_b) {
				var a = (90 - lat_b) * Math.PI / 180;
				var b = (90 - lat_a) * Math.PI / 180;
				var AOC_BOC = (lng_b - lng_a) * Math.PI / 180;
				var cosc = Math.cos(a) * Math.cos(b) + Math.sin(a) * Math.sin(b) * Math.cos(AOC_BOC);
				var sinc = Math.sqrt(1 - cosc * cosc);
				var sinA = Math.sin(a) * Math.sin(AOC_BOC) / sinc;
				var A = Math.asin(sinA) * 180 / Math.PI;
				var res = 0;
				if (lng_b > lng_a && lat_b > lat_a) res = A;
				else if (lng_b > lng_a && lat_b < lat_a) res = 180 - A;
				else if (lng_b < lng_a && lat_b < lat_a) res = 180 - A;
				else if (lng_b < lng_a && lat_b > lat_a) res = 360 + A;
				else if (lng_b > lng_a && lat_b == lat_a) res = 90;
				else if (lng_b < lng_a && lat_b == lat_a) res = 270;
				else if (lng_b == lng_a && lat_b > lat_a) res = 0;
				else if (lng_b == lng_a && lat_b < lat_a) res = 180;
				return res;
			},
			/* 路径规划 */
			// 返回路径规划的坐标点、距离、评估所需时间
			result(res) {
				if (res.code == 0) {
					console.log(res)
					this.driving.distance = res.data.distance
					this.driving.duration = res.data.duration
					console.log(res.data.polyline)
				}
			},


		},
	};
</script>
