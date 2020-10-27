import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
import img from './tsp.jpg'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const NP = () => {
    return (
        <>
        <PanelHeader size="sm" />

<div className="content" >
 <Row>
   <Col md={12} >
     <Card style={{ padding: "5px" }}>
       <CardHeader>
         <h2 className="title"> 
NP-Completeness</h2>
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
                  There are computational problems that can not be solved by algorithms even with unlimited time. For example Turing Halting problem (Given a program and an input, whether the program will eventually halt when run with that input, or will run forever). Alan Turing proved that general algorithm to solve the halting problem for all possible program-input pairs cannot exist. A key part of the proof is, Turing machine was used as a mathematical definition of a computer and program (Source Halting Problem).

                          </li>
                          <li>
                          P is set of problems that can be solved by a deterministic Turing machine in Polynomial time.
                          <br/>
                          The class P consists of those problems that are solvable in polynomial time, i.e. these problems can be solved in time O(nk) in worst-case, where k is constant.

These problems are called tractable, while others are called intractable or superpolynomial.<br/>

Formally, an algorithm is polynomial time algorithm, if there exists a polynomial p(n) such that the algorithm can solve any instance of size n in a time O(p(n)).<br/>

Problem requiring Ω(n50) time to solve are essentially intractable for large n. Most known polynomial time algorithm run in time O(nk) for fairly low value of k.<br/>

<br/>The advantages in considering the class of polynomial-time algorithms is that all reasonable deterministic single processor model of computation can be simulated on each other with at most a polynomial slow-d
                          </li>
                          <li>
                          NP is set of decision problems that can be solved by a Non-deterministic Turing Machine in Polynomial time. P is subset of NP (any problem that can be solved by deterministic machine in polynomial time can also be solved by non-deterministic machine in polynomial time).
Informally, NP is set of decision problems which can be solved by a polynomial time via a “Lucky Algorithm”, a magical algorithm that always makes a right guess among the given set of choices
                          <br/>The class NP consists of those problems that are verifiable in polynomial time. NP is the class of decision problems for which it is easy to check the correctness of a claimed answer, with the aid of a little extra information. Hence, we aren’t asking for a way to find a solution, but only to verify that an alleged solution really is correct.
<br/>
Every problem in this class can be solved in exponential time using exhaustive search.
                          </li>
                          <li>
                          P versus NP<br/>
Every decision problem that is solvable by a deterministic polynomial time algorithm is also solvable by a polynomial time non-deterministic algorithm.<br/>

All problems in P can be solved with polynomial time algorithms, whereas all problems in NP - P are intractable.<br/>

It is not known whether P = NP. However, many problems are known in NP with the property that if they belong to P, then it can be proved that P = NP.<br/>

If P ≠ NP, there are problems in NP that are neither in P nor in NP-Complete.<br/>

The problem belongs to class P if it’s easy to find a solution for the problem. The problem belongs to NP, if it’s easy to check a solution that may have been very tedious to find.<br/>
                          </li>
                          <li>
                          NP-complete problems are the hardest problems in NP set.  A decision problem L is NP-complete if:<br/>
1) L is in NP (Any given solution for NP-complete problems can be verified quickly, but there is no efficient known solution).<br/>
2) Every problem in NP is reducible to L in polynomial time (Reduction is defined below).<br/>

A problem is NP-Hard if it follows property 2 mentioned above, doesn’t need to follow property 1. Therefore, NP-Complete set is also a subset of NP-Hard set.<br/>
                          </li>
                          <li>
                          Decision vs Optimization Problems
NP-completeness applies to the realm of decision problems.  It was set up this way because it’s easier to compare the difficulty of decision problems than that of optimization problems.   In reality, though, being able to solve a decision problem in polynomial time will often permit us to solve the corresponding optimization problem in polynomial time (using a polynomial number of calls to the decision problem). So, discussing the difficulty of decision problems is often really equivalent to discussing the difficulty of optimization problems. (Source Ref 2).
For example, consider the vertex cover problem (Given a graph, find out the minimum sized vertex set that covers all edges). It is an optimization problem. Corresponding decision problem is, given undirected graph G and k, is there a vertex cover of size k?
                          </li>
<li>
NP-Hard: L is NP-hard if for all L' ϵ NP, L' ≤p L. Thus if we can solve L in polynomial time, we can solve all NP problems in polynomial time.
<br/>
NP-Complete L is NP-complete if<br/>

L ϵ NP and<br/>
L is NP-hard<br/>
If any NP-complete problem is solvable in polynomial time, then every NP-Complete problem is also solvable in polynomial time. Conversely, if we can prove that any NP-Complete problem cannot be solved in polynomial time, every NP-Complete problem cannot be solvable in polynomial time.
</li>
<li>
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/NP-Completeness-1.png" className="mx-auto img-fluid"/>
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
                  <h5 className="title">Hamilton Problem</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     To find a Hamiltonian cycle un graph "G' is not a decision problem but is graph G Hamiltonian is a decision problem


                     </li>
                     <li>
                       
In Hamiltonian problem graph G is accepted as input and it is asked to find a simple cycle in G that


                     </li>
<li>
visits each vertex of G exactly on and returns to its starting vertex. Such a cycle is called Hamiltonian


</li>
<li>
cycle. Let G= (V, E) be a connected graph with 'n' vertices. A HAMILTONIAN CYCLE is a round trip path along 'n' edges of G which every vertex once and returns to its starting position.

</li>
<li>
If the Hamiltonian cycle begins at some vertex V1 belongs to G and the vertex are visited in the order of V1,V2.Vn+1,then the edges are in E,1{"<=I<=n"} and the Vi are distinct except V1 and Vn+1 which are equal.

</li>
<li>
Find Hamiltonian cycle for any type of graph using The backtracking algorithm .
</li>
                   </ul>
                   <ul>
                   Procedure:<br/>

<li>
 Define a solution vector X(XI........Xn) where Xi represents the I visited vertex of the proposed

cycle.


</li>
<li>
  
Create a cost adjacency matrix for the given graph


</li>
<li>
 The solution array initialized to all zeros except X (1) =1, because the cycle should start at vertex '1'


</li>
<li>
4 Now we have to find the second vertex to be visited in the cycle 
 The vertex from 1 to n are included in the cycle one by one by checking 2 conditions,


</li>
<li>
I There should be a path from previous visited vertex to current vertex
 II The current vertex must be distinct and should not have been visited earlier


</li>
<li>
 When these two conditions are satisfied the current vertex is included in the cycle, else the next

</li>
<li>
  
vertex is tried. 7. When the nth vertex is visited we have to check, is there any path from nth vertex to first 8 vertex<br/>

If no path, the go back one step and after the previous visited node. 8. Repeat the above steps to generate possible Hamiltonian cycle
</li>
<li>
Let us assume that the graph G contains a hamiltonian path covering the V vertices of the graph starting at a random vertex say Vstart and ending at Vend, now since we connected all the vertices to an arbitrary new vertex Vnew in G’.
</li>
<li>
We extend the original Hamiltonian Path to a Hamiltonian Cycle by using the edges Vend to Vnew and Vnew to Vstart respectively. The graph G’ now contains the closed cycle traversing all vertices once.

</li>
<li>
We assume that the graph G’ has a Hamiltonian Cycle passing through all the vertices, inclusive of Vnew. Now to convert it to a Hamiltonian Path, we remove the edges corresponding to the vertex Vnew in the cycle. The resultant path will cover the vertices V of the graph and will cover them exactly once.

</li>
<li>
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200514160443/Copy-of-Untitled-Diagram-3-1.jpg" className="mx-auto img-fluid"/>
</li>
<li>
we can say that the graph G’ contains a Hamiltonian Cycle iff graph G contains a Hamiltonian Path. Therefore, any instance of the Hamiltonian Cycle problem can be reduced to an instance of the Hamiltonian Path problem. Thus, the Hamiltonian Cycle is NP-Hard.

</li>
<li>
Conclusion: Since, the Hamiltonian Cycle is both, a NP-Problem and NP-Hard. Therefore, it is a NP-Complete problem.

</li>
<li>
  <code>
Algorithm (Finding all Hamiltonian cycle) <br/>
  <strong>
  Algorithm Hamiltonian (k)<br/>
  </strong>
{"{"}<br/>
Loop
<br/>
Next value (k) If (x (k)-0) then return<br/>

If ken then<br/>
{"{"}<br/>
Print (*)

Else<br/>

Hamiltonian (k-1);<br/>

End If
{"}"}<br/>
Repeat<br/>
{"}"}
<br/>
<br/>
<strong>Algorithm Nextvalue (1)</strong><br/>
{"{"}
Repeat<br/>
{"{"}
(k]-(X []+1) mod (n+1): //next vertex If (X [k]-0) then return<br/>

If (G X (k 11 X (l 0) then<br/>
{"{"}
for 1 to k-1 do if (X[j]= x[k]) then break // Check for distinction <br/>
If (j==k)) then // If true then the vertex is distinct (ken) or (l )d GPX Ink X[] then return<br/>
if((k{"<"}n)or(k=n) and G[x[n],x[1]]!=0)) then return<br/>
{"}"}<br/>
{"}"}Until (false)<br/>
{"}"}
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
                  <h5 className="title">Travelling Salesman problem</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     For the partition problem, the sum of subset problem and the satisfiability problem there are either yes" or "no" They are called decision problems The minimal spanning tree problem and the traveling salesperson problem are called option problems

For an optimization problem, there always a decision problem componding • For instance, consider the minimal spanning tree problem we can define decision version of it
                     </li>
                     <li>
                     Given a graph G, determine whether there exists a spanning tree of G whose total length a len than Even constant This decision version of the minimal spanning tree can be solved are the n spenning tree problem, which is an optimization problem, is solved. m l • Suppose the total length of the minimal spanning tree sa fac the answer is "yes otherwise
<br/>
answer is no The decision version of this minimal spanning tree problems which ia an optimization problem is solved.
                     </li>
                     <li>

                     we can define the longest common subsequence decision problem as follows<br/>

Given two sequences determine whether there exists a common subsequence of them whome length is greater than a given constant e We again call this decision problem the longest common subsequence decision problem The decision venson problem will be solved a s the optimization problem is solved In general optimization problems are more difficult than decision problems
<br/>
To investigate whether an optimation problem is difficult to save its decision version is difficult or not. If the decision version is difficult already the options
                     </li>
<li>
  <img src={img} className="mx-auto img-fluid"/>
</li>
<li>
Given a set of cities and the distance between each pair of cities, the travelling salesman problem finds the path between these cities such that it is the shortest path and traverses every city once, returning back to the starting point.
</li>
<li>
Every instance of the Hamiltonian Cycle problem consists of a graph G =(V, E) as the input can be converted to a Travelling Salesman problem consisting of graph G’ = (V’, E’) and the maximum cost, K. We will construct the graph G’ in the following way:
For all the edges e belonging to E, add the cost of edge c(e)=1. Connect the remaining edges, e’ belonging to E’, that are not present in the original graph G, each with a cost c(e’)= 2.
And, set K = N.
</li>
<li>
The new graph G’ can be constructed in polynomial time by just converting G to a complete graph G’ and adding corresponding costs. This reduction can be proved by the following two claims:
</li>
<li>
Let us assume that the graph G contains a Hamiltonian Cycle, traversing all the vertices V of the graph. Now, these vertices form a TSP with cost = N Since it uses all the edges of the original graph having cost c(e)=1. And, since it is a cycle, therefore, it returns back to the original vertex.
</li>
<li>
We assume that the graph G’ contains a TSP with cost, K = N. The TSP traverses all the vertices of the graph returning to the original vertex. Now since none of the vertices are excluded from the graph and the cost sums to n, therefore, necessarily it uses all the edges of the graph present in E, with cost 1, hence forming a hamiltonian cycle with the graph G.

</li>
<li>
we can say that the graph G’ contains a TSP if graph G contains Hamiltonian Cycle. Therefore, any instance of the Travelling salesman problem can be reduced to an instance of the hamiltonian cycle problem. Thus, the TSP is NP-Hard.
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

export default NP
