import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, CardImg, Table, } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Spanning = () => {
    return (
        <>
        <PanelHeader size="sm" />

<div className="content" >
 <Row>
   <Col md={12} >
     <Card style={{ padding: "5px" }}>
       <CardHeader>
         <h2 className="title"> Spanning Tree </h2>
       </CardHeader>
     </Card>
   </Col>
 </Row>
 <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Spanning Tree Introduction</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                 <li>
                 A spanning tree is a subset of an undirected Graph that has all the vertices connected by minimum number of edges.


                 </li>
                 <li>
                 If all the vertices are connected in a graph, then there exists at least one spanning tree. In a graph, there may exist more than one spanning tree.


                 </li>
                 <li>

               <strong>  Properties</strong><br/>
A spanning tree does not have any cycle.<br/>
Any vertex can be reached from any other vertex.
                 </li>

                   </ul>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Example Of Spanning Tree</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9WFP_wkIojhvMJ-ND5aeOk3sX46A8LtE31Q&usqp=CAU" className="mx-auto img-fluid"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Minimum Spanning Tree</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       Given a connected and undirected graph, a spanning tree of that graph is a subgraph that is a tree and connects all the vertices together. A single graph can have many different spanning trees. A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, connected and undirected graph is a spanning tree with weight less than or equal to the weight of every other spanning tree. The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.

                       </li>
                       <li>
                       How many edges does a minimum spanning tree has? 

                       </li>
                       <li>
                       A minimum spanning tree has (V – 1) edges where V is the number of vertices in the given graph.
                       </li>
                       <li>
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJk8OJrJSWQ1hx3rvCLyHv86Ys2YkGCcoNBw&usqp=CAU" className="mx-auto img-fluid"/>
                       </li>
                       <li>
                       Application of Minimum Spanning Tree
                       <ul>
                         <li>
                         Consider n stations are to be linked using a communication network & laying of communication links between any two stations involves a cost.

                         </li>
                         <li>
                         The ideal solution would be to extract a subgraph termed as minimum cost spanning tree.
            </li>
            <li>
            Suppose you want to construct highways or railroads spanning several cities then we can use the concept of minimum spanning trees.

             
            </li>
            <li>
            Designing Local Area Networks.

            </li>
            <li>
            Laying pipelines connecting offshore drilling sites, refineries and consumer markets.
Suppose you want to apply a set of houses with
<ul>
  <li>
  Electric Power

  </li>
  <li>
  Water

  </li>
  <li>
  Telephone lines

  </li>
  <li>
  Sewage lines
  </li>
</ul>
            </li>
                       </ul>
                       </li>
                   </ul>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">algorithms for finding the Minimum Spanning Tree</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>

                   <ul>
                     <h5>  Kruskal’s Algorithm</h5>
                       <li>
Kruskal’s Algorithm builds the spanning tree by adding edges one by one into a growing spanning tree. Kruskal's algorithm follows greedy approach as in each iteration it finds an edge which has least weight and add it to the growing spanning tree.

                       </li>
                       <li>
                       An algorithm to construct a Minimum Spanning Tree for a connected weighted graph. It is a Greedy Algorithm. The Greedy Choice is to put the smallest weight edge that does not because a cycle in the MST constructed so far.
                       </li>
                       <li>
                       Steps for finding MST using Kruskal's Algorithm:

<ol>
<li>
Arrange the edge of G in order of increasing weight.

</li>
<li>
Starting only with the vertices of G and proceeding sequentially add each edge which does not result in a cycle, until (n - 1) edges are used.

</li>
<li>
EXIT.
</li>
</ol>
                       </li>
                       <li>
                         <code>
                         MST- KRUSKAL (G, w)<br/>
 1. A ← ∅<br/>
 2. for each vertex v ∈ V [G]<br/>
 3. do MAKE - SET (v)<br/>
 4. sort the edges of E into non decreasing order by weight w<br/>
 5. for each edge (u, v) ∈ E, taken in non decreasing order by weight<br/>
 6. do if FIND-SET (μ) ≠ if FIND-SET (v)<br/>
 7. then A  ←  A ∪ {"{(u, v)}"}<br/>
 8. UNION (u, v)<br/>
 9. return A<br/>
                         </code>
                       </li>
                       <br/>
                       <li>
                      <strong> Analysis:</strong><br/>
                        Where E is the number of edges in the graph and V is the number of vertices, Kruskal's Algorithm can be shown to run in O (E log E) time, or simply, O (E log V) time, all with simple data structures. These running times are equivalent because:

 
                       </li>
                       <li>
                       E is at most V2 and log V2= 2 x log V is O (log V).<br/>
If we ignore isolated vertices, which will each their components of the minimum spanning tree, V ≤ 2 E, so log V is O (log E).

                       </li>
                       <li>
                       Thus the total time is

<strong><i>O (E log E) = O (E log V). </i></strong>
                       </li>
                   </ul>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Example:</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStGjJLnm_AxolpuQkzWbeJ2CXYJ9AuygmY6A&usqp=CAU" className="mx-auto img-fluid"/> */}
                   <img src="https://aquarchitect.github.io/swift-algorithm-club/Minimum%20Spanning%20Tree/Images/kruskal.png" className="mx-auto img-fluid" />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Prims Algorithm</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     Prim’s Algorithm also use Greedy approach to find the minimum spanning tree. In Prim’s Algorithm we grow the spanning tree from a starting position. Unlike an edge in Kruskal's, we add vertex to the growing spanning tree in Prim's.
                     </li>
                     <li>
                     It is a greedy algorithm. It starts with an empty spanning tree. The idea is to maintain two sets of vertices:
                     Contain vertices already included in MST.<br/>
Contain vertices not yet included.<br/>
                     </li>
                     <li>
                     At every step, it considers all the edges and picks the minimum weight edge. After picking the edge, it moves the other endpoint of edge to set containing MST.
                     </li>
                     <li>
                     A group of edges that connects two set of vertices in a graph is called cut in graph theory. So, at every step of Prim’s algorithm, we find a cut (of two sets, one contains the vertices already included in MST and other contains rest of the vertices), pick the minimum weight edge from the cut and include this vertex to MST Set (the set that contains already included vertices).
                     </li>
                     <li>
                     The idea behind Prim’s algorithm is simple, a spanning tree means all vertices must be connected. So the two disjoint subsets (discussed above) of vertices must be connected to make a Spanning Tree. And they must be connected with the minimum weight edge to make it a Minimum Spanning Tree.
                     </li>

                     <li>
                     Algorithm 
<ul>
  <li>
  1) Create a set mstSet that keeps track of vertices already included in MST. 

  </li>
  <li>
  2) Assign a key value to all vertices in the input graph. Initialize all key values as INFINITE. Assign key value as 0 for the first vertex so that it is picked first. 

  </li>
  <li>
  3) While mstSet doesn’t include all vertices 
  <ul>
    <li>
    .a) Pick a vertex u which is not there in mstSet and has minimum key value. 
    </li>
    <li>
    .b) Include u to mstSet. 
    </li>
    <li>
    c) Update key value of all adjacent vertices of u. To update the key values, iterate through all adjacent vertices. For every adjacent vertex v, if weight of edge u-v is less than the previous key value of v, update the key value as weight of u-v
The idea of using key values is to pick the minimum weight edge from cut. The key values are used only for vertices which are not yet included in MST, the key value for these vertices indicate the minimum weight edges connecting them to the set of vertices included in MST. 
    </li>
  </ul>
  </li>
  <li>
  Prim's Algorithm pseudocode<br/>
The pseudocode for prim's algorithm shows how we create two sets of vertices U and V-U. U contains the list of vertices that have been visited and V-U the list of vertices that haven't. One by one, we move vertices from set V-U to set U by connecting the least weight edge.


  </li>
  <li>
    <code>
    T = ∅;<br/>
U = {"{ 1 }"};<br/>
while (U ≠ V)<br/>
    let (u, v) be the lowest cost edge such that u ∈ U and v ∈ V - U;<br/>
    T = T ∪ {"{(u, v)}"}<br/>
    U = U ∪ {"{v}"}<br/>
    </code>
  </li>
</ul>
                     </li>
                   </ul>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Example :</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <img src="https://aquarchitect.github.io/swift-algorithm-club/Minimum%20Spanning%20Tree/Images/prim.png" className="mx-auto img-fluid"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Dijkstra’s shortest path algorithm</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     Given a graph and a source vertex in the graph, find shortest paths from source to all vertices in the given graph.
                     </li>
                     <li>
Dijkstra’s algorithm is very similar to Prim’s algorithm for minimum spanning tree. Like Prim’s MST, we generate a SPT (shortest path tree) with given source as root. We maintain two sets, one set contains vertices included in shortest path tree, other set includes vertices not yet included in shortest path tree. At every step of the algorithm, we find a vertex which is in the other set (set of not yet included) and has a minimum distance from the source.

                     </li>
                     <li>
                     Below are the detailed steps used in Dijkstra’s algorithm to find the shortest path from a single source vertex to all other vertices in the given graph.
Algorithm
                     </li>
<li>
1) Create a set sptSet (shortest path tree set) that keeps track of vertices included in shortest path tree, i.e., whose minimum distance from source is calculated and finalized. Initially, this set is empty.<br/>
2) Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first.<br/>
3) While sptSet doesn’t include all vertices
<ul>
  <li>
  ….a) Pick a vertex u which is not there in sptSet and has minimum distance value.
  </li>
  <li>
  ….b) Include u to sptSet.
  </li>
  <li>
….c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v.

  </li>
</ul>
</li>
                   </ul>
                   <ul>
                     <li>
                     1) The code calculates shortest distance, but doesn’t calculate the path information. We can create a parent array, update the parent array when distance is updated (like prim’s implementation) and use it show the shortest path from source to different vertices.


                     </li>
                     <li>
                     2) The code is for undirected graph, same dijkstra function can be used for directed graphs also.

                     </li>
                     <li>
                       
3) The code finds shortest distances from source to all vertices. If we are interested only in shortest distance from the source to a single target, we can break the for the loop when the picked minimum distance vertex is equal to target (Step 3.a of the algorithm).

                     </li>
                     <li>
                       
4) Time Complexity of the implementation is O(V^2). If the input graph is represented using adjacency list, it can be reduced to O(E log V) with the help of binary heap. Please see
Dijkstra’s Algorithm for Adjacency List Representation for more details.

                     </li>
                     <li>
5) Dijkstra’s algorithm doesn’t work for graphs with negative weight cycles, it may give correct results for a graph with negative edges. For graphs with negative weight edges and cycles, Bellman–Ford algorithm can be used, we will soon be discussing it as a separate post.

                     </li>

                     <li>
                     <code>
function dijkstra(G, S) <br/>
    for each vertex V in G<br/>
        distance[V] {"<-"} infinite<br/>
        previous[V] {"<-"} NULL<br/>
        If V != S, add V to Priority Queue Q<br/>
    distance[S] {"<-"} 0<br/>
	
    while Q IS NOT EMPTY<br/>
        U {"<-"} Extract MIN from Q<br/>
        for each unvisited neighbour V of U<br/>
            tempDistance {"<-"} distance[U] + edge_weight(U, V)<br/>
            if tempDistance {"<"} distance[V]<br/>
                distance[V] {"<-"} tempDistance<br/>
                previous[V] {"<-"} U<br/>
    return distance[], previous[]
                       </code>
                     </li>
                   </ul>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Example </h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <img src="https://d2vlcm61l7u1fs.cloudfront.net/media%2Fdb8%2Fdb86637b-3405-4b94-ad2f-28780cd38e68%2FphpOVcfId.png" className="img-fluid mx-auto"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        </>
    )
}

export default Spanning
