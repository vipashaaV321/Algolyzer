import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,CardImg } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Graph = () => {
    return (
        <>
        <PanelHeader size="sm" />

        <div className="content" >
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h2 className="title">Graph Data Structure And Algorithms</h2>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Introduction</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as,
                       </li>
                       <li>
                        A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.
                       </li>
                       <li>
                       Graphs are used to solve many real-life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender, locale etc.
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
                  <h5 className="title">Directed and Undirected Graphs</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       Undirected graphs have edges that do not have a direction. The edges indicate a two-way relationship, in that each edge can be traversed in both directions. This figure shows a simple undirected graph with three nodes and three edges.
                       </li>
                       <li>
                       Directed graphs have edges with direction. The edges indicate a one-way relationship, in that each edge can only be traversed in a single direction. This figure shows a simple directed graph with three nodes and two edges.
                       </li>
                       <li>
                           <img src="data:image/png;base64,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" className="mx-auto img-fluid"/>
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
                  <h5 className="title">Graph traversal</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       Traversing a graph simply means to follow it from one point to another in a structured format. There are a number of algorithms that allow us to perfom this in the most efficient way possible, but the most basic way to visit all the vertices in a graph is breadth and depth first traversal.
                       </li>
                      <li>
                      Inorder traversal <br/>
First, visit all the nodes in the left subtree <br/>
Then the root node <br/>
Visit all the nodes in the right subtree <br/>
<code>
inorder(root-{">"}left) <br/>
display(root-{">"}data) <br/>
inorder(root-{">"}right)
</code>
                      </li>
                      <li>
                      Preorder traversal<br/>
Visit root node<br/>
Visit all the nodes in the left subtree<br/>
Visit all the nodes in the right subtree<br/>
<code>
display(root-{">"}data)<br/>
preorder(root-{">"}left)<br/>
preorder(root-{">"}right)<br/>
</code>
                      </li>
                      <li>
                      Postorder traversal<br/>
Visit all the nodes in the left subtree<br/>
Visit all the nodes in the right subtree<br/>
Visit the root node<br/>
<code>
postorder(root{"->"}left)<br/>
postorder(root{"->"}right)<br/>
display(root{"->"}data)<br/>
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
                   <img src="https://acm.cs.nthu.edu.tw/media/uploads/2016/03/01/treeorder_0bS4zvh.jpg" className="img-fluid mx-auto"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">DFS & BFS</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       DFS traversal of a graph produces a spanning tree as final result. Spanning Tree is a graph without loops. We use Stack data structure with maximum size of total number of vertices in the graph to implement DFS traversal.
                       </li>
                       <li>
                       Step 1 - Define a Stack of size total number of vertices in the graph.<br/>
Step 2 - Select any vertex as starting point for traversal. Visit that vertex and push it on to the Stack.<br/>
Step 3 - Visit any one of the non-visited adjacent vertices of a vertex which is at the top of stack and push it on to the stack.<br/>
Step 4 - Repeat step 3 until there is no new vertex to be visited from the vertex which is at the top of the stack.<br/>
Step 5 - When there is no new vertex to visit then use back tracking and pop one vertex from the stack.<br/>
Step 6 - Repeat steps 3, 4 and 5 until stack becomes Empty.<br/>
Step 7 - When stack becomes Empty, then produce final spanning tree by removing unused edges from the graph
                       </li>
                   </ul>
                   <ul>
                       <li>
                       BFS traversal of a graph produces a spanning tree as final result. Spanning Tree is a graph without loops. We use Queue data structure with maximum size of total number of vertices in the graph to implement BFS traversal.
                       </li>
                       <li>
                       Step 1 - Define a Queue of size total number of vertices in the graph. <br/>
Step 2 - Select any vertex as starting point for traversal. Visit that vertex and insert it into the Queue.<br/>
Step 3 - Visit all the non-visited adjacent vertices of the vertex which is at front of the Queue and insert them into the Queue.<br/>
Step 4 - When there is no new vertex to be visited from the vertex which is at front of the Queue then delete that vertex.<br/>
Step 5 - Repeat steps 3 and 4 until queue becomes empty.<br/>
Step 6 - When queue becomes empty, then produce final spanning tree by removing unused edges from the graph
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
                  <h5 className="title">Example</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <img src="data:image/png;base64,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" className="mx-auto img-fluid"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Topological Search</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u v, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.

                       </li>
                       <li>
For example, a topological sorting of the following graph is “5 4 2 3 1 0”. There can be more than one topological sorting for a graph. For example, another topological sorting of the following graph is “4 5 2 3 1 0”. The first vertex in topological sorting is always a vertex with in-degree as 0 (a vertex with no incoming edges).

                       </li>
                       <li>
                           In topological sorting, we use a temporary stack. We don’t print the vertex immediately, we first recursively call topological sorting for all its adjacent vertices, then push it to a stack. Finally, print contents of the stack. Note that a vertex is pushed to stack only when all of its adjacent vertices (and their adjacent vertices and so on) are already in the stack. 
                       </li>
                       <li>
                       Complexity Analysis: <br/>

Time Complexity: O(V+E). 
The above algorithm is simply DFS with an extra stack. So time complexity is the same as DFS which is.<br/>
Auxiliary space: O(V). 
The extra space is needed for the stack.
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
                  <h5 className="title">Example ::</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <img src="data:image/png;base64,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"
                  className="mx-auto img-fluid"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Articulation Point</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     A vertex in an undirected connected graph is an articulation point (or cut vertex) iff removing it (and edges through it) disconnects the graph. Articulation points represent vulnerabilities in a connected network – single points whose failure would split the network into 2 or more components. They are useful for designing reliable networks.
                     </li>
                     <li>
For a disconnected undirected graph, an articulation point is a vertex removing which increases number of connected components.
                     </li>
                     <li>
                     These are those points in the graph whose removal leaves the graph disconnected. It is also called separation point. An articulation point is a vertex v of graph G, such that deletion of v, together with all its edges will disconnect the graph and results in G'.where G'should have at least two components Example
                     </li>
                     <li>
                     These are those points in the graph whose removal leaves the graph disconnected. It is also called separation point. An articulation point is a vertex v of graph G, such that deletion of v, together with all its edges will disconnect the graph and results in G'.where G'should have at least two components Example
                     </li>
                     <li>
                       <img src="https://www.techgig.com/files/nicUploads/666856491255457.png" className="mx-auto img-fluid"/>
                     </li>
                     <li>
                     Here in above diagram B is the articulation point. Removal of B and its edges results in graph G with 4 disconnected components A,C,D,E.
                     </li>
                     <li>
                     The above function is simple DFS with additional arrays. So time complexity is same as DFS which is O(V+E) for adjacency list representation of graph.
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
                  <h5 className="title">connected components</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     A connected component or simply component of an undirected graph is a subgraph in which each pair of nodes is connected with each other via a path.
                     </li>
                     <li>
                     A set of nodes forms a connected component in an undirected graph if any node from the set of nodes can reach any other node by traversing edges. The main point here is reachability.
<br/>
In connected components, all the nodes are always reachable from each other.
                     </li>
                     <li><img src="https://www.baeldung.com/wp-content/uploads/sites/4/2020/05/1-component-1.png" className="mx-auto img-fluid"/>
                     
                     </li>
<li>
graph G1(V, E). Here V = {"{V1, V2, V3, V4, V5, V6}"} denotes the vertex set and E = {"{E1, E2, E3, E4, E5, E6, E7}"} denotes the edge set of G1. The graph G1 has one connected component, let’s name it C1, which contains all the vertices of G1. Now let’s check whether the set C1 holds to the definition or not.
</li>
<li>
According to the definition, the vertices in the set C1 should reach one another via a path. We’re choosing two random vertices V1 and V6:
</li>
<li>
V6 is reachable to V1 via: E4rightarrow E7 or E3rightarrow E5rightarrow E7 orE1rightarrow E2rightarrow E6rightarrow E7<br/>
V1 is reachable to V6 via: E7rightarrow E4 or E7rightarrow E5rightarrow E3 orE7rightarrow E6\rightarrow E2rightarrow E1
</li>
<li>
The vertices V1 and V6 satisfied the definition, and we could do the same with other vertex pairs in C1 as well
</li>
<li>

Algorithm for finding connected components in a given undirected graph uses the DFS search and counts the number of calls to the DFS function. If the graph is represented by the adjacency list, then the DFS search visits all the vertices once and each edge twice in case of an undirected graph. The checking of the vertex status takes O(1) time. Thus in total, our algorithm will take {"O(V+E)}"} time.
<br/>
In case the graph is represented by the adjacency matrix, the DFS search takes O(V^2) time as it needs to traverse the entire row to evaluate the neighbor vertices. The checking of the vertex status again takes O(1) time. Thus giving us a total of {"{O(V^2)}"} time.
</li>

                   </ul>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          </div>
        </>
    )
}

export default Graph



