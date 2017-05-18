var Poloniex = require('poloniex.js');
var jsnx = require('jsnetworkx');

var polo = new Poloniex();


var G = new jsnx.Graph();
G.addNode([1,2], {data: 'foo'});
console.log(G.node.get([1,2]).data); // because [1,2].toString() === "1, 2"

G.addNodesFrom([2, 3]);
G.addNodesFrom(new Set('foo', 'bar'));
var H = jsnx.completeGraph(10);
G.addNodesFrom(H);
console.log(G);


/*
let count = 0;
setInterval(function () {
  polo.returnTicker((err, data) => {

    if (err) {
      throw new Error('data request messed up...')
    }

    console.log(data['BTC_ETH']);
    count++
    console.log(count);


  });
}, 3000);
*/
