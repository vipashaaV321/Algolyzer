import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Dynamic = () => {
    return (
        <>
        <PanelHeader size="sm" />

        <div className="content" >
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h2 className="title"> Dynamic Programming</h2>
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
             Dynamic Programming is the most powerful design technique for solving optimization problems.
             </li>
             <li>
          Divide & Conquer algorithm partition the problem into disjoint subproblems solve the subproblems recursively and then combine their solution to solve the original problems.
             </li>
             <li>
         Dynamic Programming is used when the subproblems are not independent, e.g. when they share the same subproblems. In this case, divide and conquer may do more work than necessary, because it solves the same sub problem multiple times. 
             </li>
             <li>
             Dynamic Programming solves each subproblems just once and stores the result in a table so that it can be repeatedly retrieved if needed again.
             </li>
             <li>
             Dynamic Programming is a Bottom-up approach- we solve all possible small problems and then combine to obtain solutions for bigger problems.
             </li>
             <li>
             Dynamic Programming is a paradigm of algorithm design in which an optimization problem is solved by a combination of achieving sub-problem solutions and appearing to the "principle of optimality".
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
                  <h5 className="title">Elements of Dynamic Programming</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                 <ul>
                     <li>
                         <strong> three elements that characterize a dynamic programming algorithm:-</strong><br/>
                         <ol>
                             <li>
                         <img src="https://static.javatpoint.com/tutorial/daa/images/elements-of-dynamic-programming.png" className="mx-auto img-fluid m=3" style={{width:"300px",height:"300px",margin:"5px"}}/>

                             </li>
                             <li>
                             Substructure: Decompose the given problem into smaller subproblems. Express the solution of the original problem in terms of the solution for smaller problems.
                             </li>
                             <li>
Table Structure: After solving the sub-problems, store the results to the sub problems in a table. This is done because subproblem solutions are reused many times, and we do not want to repeatedly solve the same problem over and over again.

                             </li>
<li>
Bottom-up Computation: Using table, combine the solution of smaller subproblems to solve larger subproblems and eventually arrives at a solution to complete problem.
</li>
                         </ol>
                    
                     </li>
                     </ul>
                     <ul>
<li>
<strong>Characteristics of Dynamic Programming:</strong><br/>
  
</li>    
<li>
Optimal Substructure: If an optimal solution contains optimal sub solutions then a problem exhibits optimal substructure.

</li>
<li>
Overlapping subproblems: When a recursive algorithm would visit the same subproblems repeatedly, then a problem has overlapping subproblems.

</li>
<li>
If a problem has optimal substructure, then we can recursively define an optimal solution. If a problem has overlapping subproblems, then we can improve on a recursive implementation by computing each subproblem only once.

</li>
<li>
If a problem doesn't have optimal substructure, there is no basis for defining a recursive algorithm to find the optimal solutions. If a problem doesn't have overlapping sub problems, we don't have anything to gain by using dynamic programming.

</li>

If the space of subproblems is enough (i.e. polynomial in the size of the input), dynamic programming can be much more efficient than recursion.
  
                   
                    
                 </ul>
                 
                   <ol>
                     <li>
                     Stages: The problem can be divided into several subproblems, which are called stages. A stage is a small portion of a given problem. For example, in the shortest path problem, they were defined by the structure of the graph.
                     </li>
                     <li>
                     States: Each stage has several states associated with it. The states for the shortest path problem was the node reached.
                     </li>
                     <li>
                     Decision: At each stage, there can be multiple choices out of which one of the best decisions should be taken. The decision taken at every stage should be optimal; this is called a stage decision.
                     </li>
                     <li>
                     Optimal policy: It is a rule which determines the decision at each stage; a policy is called an optimal policy if it is globally optimal. This is known as Bellman principle of optimality.
                     </li>
                     <li>
                     Given the current state, the optimal choices for each of the remaining states does not depend on the previous states or decisions. In the shortest path problem, it was not necessary to know how we got a node only that we did.
There exist a recursive relationship that identify the optimal decisions for stage j, given that stage j+1, has already been solved.
The final stage must be solved by itself.
                     </li>
                   </ol>
                 <ul>
                   <li>
                 <h6>  Development of Dynamic Programming Algorithm: 4 Steps</h6>


Characterize the structure of an optimal solution.


                   </li>
                   <li>
                   Recursively defined the value of the optimal solution. Like Divide and Conquer, divide the problem into two or more optimal parts recursively. This helps to determine what the solution will look like.
                   </li>
                   <li>
                   Compute the value of the optimal solution from the bottom up (starting with the smallest subproblems)

                   </li>
                   <li>
                   Construct the optimal solution for the entire problem form the computed values of smaller subproblems.

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
                  <h5 className="title">Application</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
          <ol>
            <li>
            0/1 knapsack problem

            </li>
            <li>
            Mathematical optimization problem

            </li>
            <li>
            All pair Shortest path problem

            </li>
            <li>
            Reliability design problem

            </li>
            <li>
            Longest common subsequence (LCS)

            </li>
            <li>
            Flight control and robotics control
            </li>
            <li>
Time-sharing: It schedules the job to maximize CPU usage

            </li>
            </ol> 
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Principle of Optimality</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                    <ul>
                      <li>
                      Definition: A problem is said to satisfy the Principle of Optimality if the subsolutions of an optimal solution of the problem are themesleves optimal solutions for their subproblems.

                      </li>
                      <li>
                      Examples:<br/>
The shortest path problem satisfies the Principle of Optimality.
                      </li>
                      <li>
                      This is because if a,x1,x2,...,xn,b is a shortest path from node a to node b in a graph, then the portion of xi to xj on that path is a shortest path from xi to xj.

                      </li>
                      <li>
                      The longest path problem, on the other hand, does not satisfy the Principle of Optimality. Take for example the undirected graph G of nodes a, b, c, d, and e, and edges (a,b) (b,c) (c,d) (d,e) and (e,a). That is, G is a ring. The longest (noncyclic) path from a to d to a,b,c,d. The sub-path from b to c on that path is simply the edge b,c. But that is not the longest path from b to c. Rather, b,a,e,d,c is the longest path. Thus, the subpath on a longest path is not necessarily a longest path.

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
                  <h5 className="title">Binomial Coefficient</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <ul>
                    <li>A binomial coefficient C(n, k) can be defined as the coefficient of X^k in the expansion of (1 + X)^n.</li>
                    <li>A binomial coefficient C(n, k) also gives the number of ways, disregarding order, that k objects can be chosen from among n objects; more formally, the number of k-element subsets (or k-combinations) of an n-element set.</li>
                    <li>
                      <ol>
                        <li>
                       <strong> Optimal Substructure :</strong>
The value of C(n, k) can be recursively calculated using following standard formula for Binomial Coefficients.
<br/>
<code>   C(n, k) = C(n-1, k-1) + C(n-1, k)<br/>
   C(n, 0) = C(n, n) = 1</code>
                        </li>
 <li>
 <strong>Overlapping Subproblems : </strong> <br/>
It should be noted that the above function computes the same subproblems again and again. 
 </li>
 <li>
 Time Complexity: O(n*k)<br/>
Auxiliary Space: O(n*k)
 </li>
                      </ol>
                    </li>
                    <br/>
                    <li>
                      <Highlight>
                      Let's say we want to calculate C(4, 3), <br/>
i.e. n=4, k=3:<br/>

All elements of array C of size 4 (k+1)<br/>
are initialized to ZERO.<br/>

i.e.C[0]=C[1]=C[2]=C[3]=C[4]=0;<br/>
Then C[0] is set to 1<br/>

For i = 1:<br/>
C[1]=C[1] + C[0]=0 + 1=1={">"} C(1,1)=1<br/>

For i=2:<br/>
C[2]=C[2] + C[1]=0 + 1=1={">"} C(2,2)=1<br/>
C[1]=C[1] + C[0]=1 + 1=2={">"} C(2,2)=2<br/>

For i=3:<br/>
C[3]=C[3] + C[2]=0 + 1=1={">"} C(3,3)=1<br/>
C[2]=C[2] + C[1]=1 + 2=3={">"} C(3,2)=3<br/>
C[1]=C[1] + C[0]=2 + 1=3={">"} C(3,1)=3<br/>

For i=4:<br/>
C[4]=C[4] + C[3]=0 + 1=1={">"} C(4,4)=1<br/>
C[3]=C[3] + C[2]=1 + 3=4={">"} C(4,3)=4<br/>
C[2]=C[2] + C[1]=3 + 3=6={">"} C(4,2)=6<br/>
C[1]=C[1] + C[0]=3 + 1=4={">"} C(4,1)=4<br/>

C(4,3)= 4 is would be 
<br/>the answer in our example.
                      </Highlight>
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
                  <h5 className="title">Assembly Line Scheduling </h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <ul>
                    <li>
                    A car factory has two assembly lines, each with n stations. A station is denoted by Si,j where i is either 1 or 2 and indicates the assembly line the station is on, and j indicates the number of the station. <br/>
                    </li>
                    <li>
                    The time taken per station is denoted by ai,j. Each station is dedicated to some sort of work like engine fitting, body fitting, painting, and so on. So, a car chassis must pass through each of the n stations in order before exiting the factory.

                    </li>
<li>
The parallel stations of the two assembly lines perform the same task. After it passes through station Si,j, it will continue to station Si,j+1 unless it decides to transfer to the other line. <br/>

</li>
<li>
Continuing on the same line incurs no extra cost, but transferring from line i at station j – 1 to station j on the other line takes time ti,j. Each assembly line takes an entry time ei and exit time xi which may be different for the two lines. Give an algorithm for computing the minimum time it will take to build a car chassis.

</li>
<br/>
<li>
  <img src="data:image/jpeg;base64,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  iDnWdJT2lDaCCT7RFaRsfc         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" className="fluid-img mx-auto"/>
</li>
                  </ul>
<ul>

  <li>
  The following information can be extracted from the problem statement to make it simpler:&nbsp;
  </li>
<li>Two assembly lines, 1 and 2, each with stations from 1 to n.</li>
<li>A car chassis must pass through all stations from 1 to n in order(in any of the two assembly lines). i.e. it cannot jump from station i to station j if they are not at one move distance.</li>
<li>The car chassis can move one station forward in the same line, or one station diagonally in the other line. It incurs an extra cost ti, j to move to station j from line i. No cost is incurred for movement in same line.</li>
<li>The time taken in station j on line i is a<sub>i, j</sub>.</li>
<li>S<sub>i, j</sub> represents a station j on line i.</li>
</ul>
<ul>
  <strong></strong>
<li>
We can easily find the ith factorial if (i-1)th factorial is known. Can we apply the similar funda here? 

</li>
<li>
If the minimum time taken by the chassis to leave station Si, j-1 is known, the minimum time taken to leave station Si, j can be calculated quickly by combining ai, j and ti, j.

</li>
<li>
T1(j) indicates the minimum time taken by the car chassis to leave station j on assembly line 1.

</li>
<li>
T2(j) indicates the minimum time taken by the car chassis to leave station j on assembly line 2.
</li>

<li>
  <strong>
  Base cases: 

  </strong><br/>
  The entry time ei comes into picture only when the car chassis enters the car factory.
Time taken to leave the first station in line 1 is given by: 
</li>
<li>
T1(1) = Entry time in Line 1 + Time spent in station S1,1 <br/>
T1(1) = e1 + a1,1 

</li>
<li>
Similarly, time taken to leave the first station in line 2 is given by: <br/>
T2(1) = e2 + a2,1
</li>
<li>
The time complexity of the above dynamic programming implementation of the assembly line scheduling problem is O(n).

</li>
<li>
  <strong> Recursive Solution:</strong><br/>
 The chassis at station S[1,j] can come either from station S[1,j−1] or station S[2,j−1] (Since, the tasks done by S[1,j] and S[2,j] are same). But if the chassis comes from S[2,j−1], it additionally incurs the transfer cost to change the assembly line ( like t[2,j-1] ). Thus, the recursion to reach the station j in assembly line i are as follows:
</li>
<li>
  <img src="https://miro.medium.com/max/1002/1*Bn7g0Du3IABMzd_qz13G-A.png" className="mx-auto img-fluid"/>
</li>
<li>
If as discussed above we consider 2 assembly line. Then f1[1] and f2[1] is defined as algorithm by adding starting cost and first station cost.<br/>
Then applies our recursive solution for n station points.here l1[j] denotes from which assembly line chassis has come.

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
                  <h5 className="title">Fibonacci Sequence</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                 <ul>
                   <li>
                   Fibonacci sequence is the sequence of numbers in which every next item is the total of the previous two items. And each number of the Fibonacci sequence is called Fibonacci number.
<br/>
Example: 0 ,1,1,2,3,5,8,13,21,....................... is a Fibonacci sequence.
                   </li>
                   <li>
                     <div><pre>
                     F<sub>0</sub> = 0<br/>
F<sub>n</sub>=1<br/>
F<sub>n</sub>=F<sub>(n-1)</sub>+ F<sub>(n-2)</sub><br/>
</pre></div>
<br/>
<img src="https://static.javatpoint.com/tutorial/daa/images/fibonacci-sequence.png" className="img-fluid mx-auto mb-2"/>
<pre>
<strong>FIB (n) </strong><br/>
 1. If (n &lt; 2) <br/>
 2. then return n <br/>
 3. else return FIB (n - 1) + FIB (n - 2)
</pre>
                     </li>
                     <li>
                     <p>This algorithm clearly takes only O (n) time to compute Fn. By contrast, the original recursive algorithm takes
                       <br/> O (&#8709;<sup>n;</sup>),&#8709; = <img src="https://static.javatpoint.com/tutorial/daa/images/fibonacci-sequence2.png" style={{margin:"5px 4px -15px 0"}} alt="Fibonacci sequence"/>= 1.618. ITERFIB conclude an exponential speedup over the original recursive algorithm.</p>
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
                  <h5 className="title">Flyod warshall Algorithm</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     The all pair shortest path algorithm is also known as Floyd-Warshall algorithm is used to find all pair shortest path problem from a given weighted graph. As a result of this algorithm, it will generate a matrix, which will represent the minimum distance from any node to all other nodes in the graph.
                     </li>
                     <li>
                     At first the output matrix is same as given cost matrix of the graph. After that the output matrix will be updated with all vertices k as the intermediate vertex.
                     </li>
                     <li>
                     The time complexity of this algorithm is O(V3), here V is the number of vertices in the graph.
                     </li>
                     <li>Time Complexity: O(V^3)</li>
                    
<li>
<p><strong>Example:</strong></p>
<pre>
<strong>Input:</strong>
       graph[][] = {"{"} {"{"}0,   5,  INF, 10{"}"},<br/>
                    {"{"}INF,  0,  3,  INF {"}"},<br/>
                    {"{"}INF, INF, 0,   1{"}"},<br/>
                    {"{"}INF, INF, INF, 0{"}"}{"}"}<br/>
                    which represents the following graph<br/>
             10  <br/>
       (0)-------&gt;(3)<br/>
        |         /|\<br/>
      5 |          |<br/>
        |          | 1<br/>
       \|/         |<br/>
       (1)-------&gt;(2)<br/>
            3       <br/>
Note that the value of graph[i][j] is 0
<br/> if i is equal to j <br/>
And graph[i][j] is INF (infinite) <br/>
if there is no edge from vertex i to j.<br/>

<strong>Output:</strong><br/>
Shortest distance matrix<br/>
      0      5      8      9<br/>
    INF      0      3      4<br/>
    INF    INF      0      1<br/>
    INF    INF    INF      0 
</pre>
</li>
<li>
  <code>
  <strong>
floydWarshal(cost)</strong><br/>
Input − The cost matrix of given Graph.<br/>

Output − Matrix to for shortest path between any vertex to any vertex.<br/>

Begin<br/>
   for k := 0 to n, do<br/>
      for i := 0 to n, do<br/>
         for j := 0 to n, do<br/>
            if cost[i,k] + cost[k,j] {"<"} cost[i,j], then<br/>
               cost[i,j] := cost[i,k] + cost[k,j]<br/>
            done<br/>
         done<br/>
      done<br/>
      display the current cost matrix<br/>
End
</code>
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

export default Dynamic
