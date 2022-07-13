/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  //in directed graph we dont have to do the below line
  var graph = createGraph(prerequisites);
  var visited = new Set();
  var visiting = new Set();
  for (let node in graph) {
    if (detectCycle(graph, node, visited, visiting)) {
      return false;
    }
  }
  return true;
};
const detectCycle = (graph, node, visited, visiting) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;

  visiting.add(node);
  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor, visited, visiting)) {
      return true;
    }
  }
  visiting.delete(node);
  visited.add(node);
  return false;
};

var createGraph = (prerequisites) => {
  var adjList = {};
  for (let item of prerequisites) {
    const [src, dest] = item;
    if (!adjList[src]) adjList[src] = [];
    if (!adjList[dest]) adjList[dest] = [];
    adjList[src].push(dest);
  }
  return adjList;
};
