var expect = require("chai").expect;
var veridUtil = require("../verid_utils.js");

var base64 = "vXdMfL05VVC9OVVQvLICkj2DQRa9aKcCPWinAr2zIv69t6SuvcUpvL2DQRa+cIn1PjOzND2uoU+9YVRFPDRDar1GSig8EDXvPbwmXb1GSii9MyL+PNBt872YGOI9A9FMvWinArzQbfM8NENqu5A17z0s8K09IIwLvPEaK737PfY9g0EWPJ26/b0zIv47EDXvvdcwejwiPKy9/7+lPhHmkL0PFYO8xkoovQlzZz2TlzI8nbr9Pa6hTzxGSii927IpPSa+XLyduv29IIwLvSa+XD0PFYO9pZ3wvbekrj2DQRY+H2ufvg+luTyTlzI7WFDmvYcykD05VVA9hzKQPWinAr1v+b+7EDXvPNqRvr1+nzk9P4ehPbekrrqQNe88alekO1hQ5j0D0Uw9U882O7RDaj1+nzm9MyL+POXV9L23pK49P4ehPYskCbtYUOY9d0x8vNBt87xGSig8vCZdvNBt8zxqV6Q72FDmvJ26/bwiPKy8sgKSvPEaKz2YGOI8vCZdPU0Mr70D0Uw9TQyvvTlVUD23pK672FDmvOXV9Dx+nzk90q7LvcUpvL4I4zE9LPCtvZgY4r2uoU+9aKcCPdKuyz1+nzm99rxGPIlzZ7y8Jl09nJqRPBA1770Ut567kDXvPVPPNjy8Jl29Glm5vLwmXTzakb69j12eO7RDaj1GSii9RkooPjX0DL3tuOe9fp85PYNBFr4CIKo+COMxvPxeYTz8XmE+Kq/VPIlzZz3yOpc8fp85Pa6hTz2DQRa9Jr5cvgRhgrvYUOa8EDXvvCI8rL2zIv4+NfQMvdKuy705VVA9fp85vTMi/j1v+b+8/F5hPZgY4jyJc2c9xSm8PFhQ5jyTlzI9g0EWPeAz2Tyn3si85dX0vZyakb5KO6K90q7LveS1iD0mvly9mBjivVqRvj1Tzza9k5cyvUZKKDyn3si+Q3kavSzwrb3yOpc9MyL+PU0Mrz1hVEU9WpG+PNBt870mvlw9d0x8vfI6lz2TlzI91zB6vQPRTL2qH5+9qh+fvSzwrTx+nzm80G3zvTMi/jvYUOY80G3z";
var floats = [-0.060375675559043884,-0.04524737596511841,-0.04524737596511841,-0.021729741245508194,0.06408898532390594,-0.05679989606142044,0.05679989606142044,-0.08746908605098724,-0.08966957032680511,-0.09627100825309753,-0.06408898532390594,-0.23490126430988312,0.17548829317092896,0.08526860922574997,-0.05501200631260872,0.011002400889992714,-0.048410564661026,0.008801921270787716,0.09187004715204239,-0.048410564661026,-0.04373454302549362,0.025443052873015404,-0.0742662101984024,0.03218202292919159,-0.05679989606142044,-0.025443052873015404,0.011002400889992714,-0.004400960635393858,0.042221713811159134,0.03919605538249016,-0.029431423172354698,-0.1226767748594284,0.06408898532390594,0.019254202023148537,-0.04373454302549362,0.002200480317696929,-0.10507293045520782,0.009902160614728928,-0.12487725168466568,0.14248108863830566,-0.03493262454867363,-0.024205282330513,-0.03355732187628746,0.07206572592258453,0.019254202023148537,0.08526860922574997,0.0121026411652565,-0.1072734072804451,0.040708884596824646,-0.019254202023148537,-0.03919605538249016,-0.040708884596824646,0.03493262454867363,-0.08086764812469482,-0.08966957032680511,0.06408898532390594,0.1556839793920517,-0.140280619263649,0.018016431480646133,0.0033007203601300716,-0.06601440906524658,0.04524737596511841,0.06601440906524658,0.05679989606142044,-0.05858778581023216,-0.002200480317696929,0.026680823415517807,-0.062163565307855606,0.046760205179452896,0.08966957032680511,-0.0011002401588484645,0.014303121715784073,0.0033007203601300716,0.03218202292919159,0.05171128362417221,0.005501200444996357,0.062163565307855606,-0.04373454302549362,0.028056122362613678,-0.08966957032680511,0.046760205179452896,0.06793982535600662,-0.0033007203601300716,0.060375675559043884,-0.025443052873015404,-0.0121026411652565,0.022967511788010597,-0.025443052873015404,0.014303121715784073,0.006601440720260143,-0.019254202023148537,-0.009902160614728928,-0.021729741245508194,-0.029431423172354698,0.0742662101984024,0.022967511788010597,0.050060924142599106,-0.03218202292919159,0.050060924142599106,-0.04524737596511841,0.08966957032680511,-0.006601440720260143,-0.028056122362613678,0.015540891326963902,0.10287245362997055,-0.09627100825309753,-0.13367916643619537,0.042221713811159134,-0.0742662101984024,-0.08526860922574997,-0.05679989606142044,0.10287245362997055,0.062163565307855606,-0.12047629058361053,0.01677866093814373,-0.022967511788010597,0.07646668702363968,0.008801921270787716,-0.0363079234957695,-0.004400960635393858,0.05171128362417221,0.022967511788010597,-0.03768322244286537,-0.022967511788010597,0.026680823415517807,-0.07000277936458588,0.005501200444996357,0.048410564661026,-0.048410564661026,0.17768877744674683,-0.11607532948255539,-0.062163565307855606,0.06408898532390594,-0.12707772850990295,0.13367916643619537,-0.03080672211945057,0.03080672211945057,0.16668637096881866,0.01677866093814373,0.11827581375837326,0.015540891326963902,0.08526860922574997,0.06408898532390594,-0.040708884596824646,-0.12927821278572083,-0.006601440720260143,-0.008801921270787716,-0.009902160614728928,-0.08746908605098724,0.17768877744674683,-0.10287245362997055,-0.04524737596511841,0.062163565307855606,-0.04373454302549362,0.05858778581023216,-0.03080672211945057,0.0742662101984024,0.01677866093814373,0.09627100825309753,0.013202881440520287,0.018016431480646133,0.06408898532390594,0.10947389155626297,0.02049197256565094,-0.028056122362613678,-0.07646668702363968,-0.19749310612678528,-0.10287245362997055,-0.11167436838150024,0.040708884596824646,-0.0742662101984024,-0.053361646831035614,0.05171128362417221,-0.07206572592258453,-0.048410564661026,0.02049197256565094,-0.19089165329933167,-0.042221713811159134,-0.11827581375837326,0.04373454302549362,0.050060924142599106,0.05501200631260872,0.053361646831035614,0.025443052873015404,-0.040708884596824646,0.060375675559043884,-0.11827581375837326,0.07206572592258453,0.10507293045520782,-0.03218202292919159,-0.0830681249499321,-0.0830681249499321,-0.042221713811159134,0.015540891326963902,-0.025443052873015404,-0.04373454302549362,0.006601440720260143,0.025443052873015404];

describe("Test Ver-ID utilities", function() {
	it("Converts a float32 array to a base 64 string", function() {
		var calculated = veridUtil.float32ArrayToBase64(floats);
		expect(calculated).to.equal(base64);
	});
	it("Converts a base 64 string to an array of float32s", function() {
		var calculated =veridUtil.base64ToFloat32Array(base64);
		expect(calculated).to.deep.equal(floats);
	});
	it("Compares same face templates", function() {
		var score = veridUtil.compareFaceTemplates(floats, floats);
		expect(Math.round(score*1000)).to.be.above(5000);
	});
	it("Compares different face templates", function() {
		var floatsRev = floats.slice();
		floatsRev.reverse();
		var score = veridUtil.compareFaceTemplates(floats, floatsRev);
		expect(Math.round(score*1000)).to.be.below(4000);
	});
	it("Tests that template 'norm' calculation is 1", function() {
		var norm = veridUtil.getNorm(floats);
		expect(Math.round(norm*100)).to.equal(100);
	});
});