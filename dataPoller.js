var Poloniex = require('poloniex.js');
var polo = new Poloniex();

var jsnx = require('jsnetworkx'); // in Node

// a tree of height 4 with fan-out 2
var G = jsnx.balancedTree(2, 4);

G.draw()
// Compute the shortest path between node 2 and 7
var path = jsnx.bidirectionalShortestPath(G, 2, 7);
// [ 2, 0, 1, 3, 7 ]

// or asynchronously
jsnx.genBidirectionalShortestPath(G, 2, 7).then(function(path) {
  // path = [ 2, 0, 1, 3, 7 ]
  console.log(path);
});

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
