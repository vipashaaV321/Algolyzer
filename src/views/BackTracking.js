import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";


const BackTracking = () => {
    return (
        <>
        <PanelHeader size="sm" />

<div className="content" >
 <Row>
   <Col md={12} >
     <Card style={{ padding: "5px" }}>
       <CardHeader>
         <h2 className="title"> Backtracking Algorithms</h2>
       </CardHeader>
     </Card>
   </Col>
 </Row>
	 <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Introduction of Backtracking</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       The Backtracking is an algorithmic-method to solve a problem with an additional way. It uses a recursive approach to explain the problems. We can say that the backtracking is needed to find all possible combination to solve an optimization problem.

                       </li>
                       <li>
Backtracking is a systematic way of trying out different sequences of decisions until we find one that "works."

                       </li>
                       <li>
                       Backtracking algorithm determines the solution by systematically searching the solution space for the given problem. Backtracking is a depth-first search with any bounding function. All solution using backtracking is needed to satisfy a complex set of constraints. The constraints may be explicit or implicit.
                   </li>
                       <li>
Explicit Constraint is ruled, which restrict each vector element to be chosen from the given set.
                       </li>
                       <li>
Implicit Constraint is ruled, which determine which each of the tuples in the solution space, actually satisfy the criterion function.
                       </li>
                       <li>
                       Backtracking can understand of as searching a tree for a particular "goal" leaf node.

Backtracking is undoubtedly quite simple - we "explore" each node, as follows:
                       </li>
                       <li>
                           <code>
                           To "explore" node N: <br/>
 1. If N is a goal node, return "success"<br/>
 2. If N is a leaf node, return "failure"<br/>
 3. For each child C of N,<br/>
     Explore C<br/>
     If C was successful, return "success"<br/>
 4. Return "failure"<br/>
                           </code>
                       </li>
                       <li>
                           <img src="data:image/jpeg;base64,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" className="mx-auto img-fluid"/>
                       </li>
                     
                   </ul>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">All the possibilities</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                 
                   <img src="https://cdn.programiz.com/sites/tutorial2program/files/ba-possibilities.png" className="mx-auto img-fluid mb-10" />
               
                   <ul>
                     <li>
                    <strong> Problem:</strong> You want to find all the possible ways of arranging 2 boys and 1 girl on 3 benches. Constraint: Girl should not be on the middle bench.<br/><br/>
                     </li>
                     <li>
                    <strong>   Solution: </strong>There are a total of 3! = 6 possibilities. We will try all the possibilities and get the possible solutions. We recursively try all the possibilities.

                     </li>
                     <br/>
                     <li>
                     It uses a brute force approach for finding the desired output.

The Brute force approach tries out all the possible solutions and chooses the desired/best solutions.
                     </li>
                     <li>
                       Here algorithm propagates to an end to check if it is a solution or not, if it is then returns the solution otherwise backtracks to the point one step behind it to find track to the next point to find solution.
                     </li>
                   </ul>
                   
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">State Space Tree</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <img src="https://cdn.programiz.com/sites/tutorial2program/files/ba-state-state-tree-example.png" className="mx-auto img-fluid"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Branch And Bound</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     Branch and bound is an algorithm design paradigm which is generally used for solving combinatorial optimization problems. These problems are typically exponential in terms of time complexity and may require exploring all possible permutations in worst case. The Branch and Bound Algorithm technique solves these problems relatively quickly.
                     </li>
                     <li>
                     A branch-and-bound algorithm consists of a systematic enumeration of candidate solutions by means of state space search: the set of candidate solutions is thought of as forming a rooted tree with the full set at the root. The algorithm explores branches of this tree, which represent subsets of the solution set. Before enumerating the candidate solutions of a branch, the branch is checked against upper and lower estimated bounds on the optimal solution, and is discarded if it cannot produce a better solution than the best one found so far by the algorithm.

                     </li>
                     <li>
                    The algorithm depends on efficient estimation of the lower and upper bounds of regions/branches of the search space. If no bounds are available, the algorithm degenerates to an exhaustive search.
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
                  <h5 className="title">0/1 Knapsack problem with Branch And Bound </h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                       <strong>
                     Knapsack Problem:
                       </strong>
Given two arrays v[] and w[] that represent values and weights associated with n items respectively. Find out the maximum value subset(Maximum Profit) of v[] such that sum of the weights of this subset is smaller than or equal to Knapsack capacity Cap(W).
                     </li>
                     <li>
                     The backtracking based solution works better than brute force by ignoring infeasible solutions. To do better (than backtracking) if we know a bound on best possible solution subtree rooted with every node. If the best in subtree is worse than current best, we can simply ignore this node and its subtrees. So we compute bound (best solution) for every node and compare the bound with current best solution before exploring the node.
                     </li>
                     <li>
                     To find bound for every node for Knapsack:<br/>
To check if a particular node can give us a better solution or not, we compute the optimal solution (through the node) using Greedy method. If the solution computed by Greedy approach is more than the best until now , then we can’t get a better solution through the node.
                     </li>
                     <br/>
                     <li>
                       
                       <strong>Algorithm:</strong><br/>
                       Sort all items in decreasing order of V/W so that upper bound can be computed using Greedy Approach.(The nodes taken in the image are accordingly.)

                     </li>
                     <li>
                     Initialize profit, max = 0

                     </li>
                     <li>
                     Create an empty queue, Q.

                     </li>
                     <li>
                     Create a dummy node of decision tree and enqueue it to Q. Profit and weight of dummy node are 0.
                     </li><li>
Do while (Q is not empty).

                     </li>
                   </ul>
                   <ul>
                     <li>
                     Extract an item from Q. Let the item be x.

                     </li>
                     <li>
                     Compute profit of next level node. If the profit is more than max, then update max. (Profit from root to this node (include this node)).

                     </li>
                     <li>
                     Compute bound of next level node. If bound is more than max, then add next level node to Q.(Upper Bound of the maximum Profit in subtree of this node)
                     </li>
                     <li>
Consider the case when next level node is not considered as part of solution and add a node to queue with level as next, but weight and profit without considering next level nodes.

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
                {/* <CardHeader>
                  <h5 className="title">Example Of Pseudocode</h5>
                </CardHeader> */}
                <CardBody className="all-icons" >
                  <Row>
                   <img src="https://miro.medium.com/max/740/1*xVh3Q_gPeZIndK8AWrD2Og.png" className="mx-auto img-fluid"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Travelling Salseman Problem</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <ul>
                    <li>
                    Given a set of cities and distance between every pair of cities, the problem is to find the shortest possible tour that visits every city exactly once and returns to the starting point.
                    </li>
                    <li>
For example, consider the graph shown in figure on right side. A TSP tour in the graph is 0-1-3-2-0. The cost of the tour is 10+25+30+15 which is 80.

                    </li>
                    <li>
                    the cost through a node includes two costs.<br/>
1) Cost of reaching the node from the root (When we reach a node, we have this cost computed)<br/>
2) Cost of reaching an answer from current node to a leaf (We compute a bound on this cost to decide whether to ignore subtree with this node or not).<br/>


                    </li>
                    <li>
                    In cases of a maximization problem, an upper bound tells us the maximum possible solution if we follow the given node. For example in 0/1 knapsack we used Greedy approach to find an upper bound.<br/>
In cases of a minimization problem, a lower bound tells us the minimum possible solution if we follow the given node. For example, in Job Assignment Problem, we get a lower bound by assigning least cost job to a worker.
                    </li>
                    <li>
                    Time Complexity: The worst case complexity of Branch and Bound remains same as that of the Brute Force clearly because in worst case, we may never get a chance to prune a node. Whereas, in practice it performs very well depending on the different instance of the TSP. The complexity also depends on the choice of the bounding function as they are the ones deciding how many nodes to be pruned.
                    </li>
                    <li>
{/* Node     Least cost edges   Total cost   <br/>
----------------------------------------   <br/>        
0        (0, 1), (0, 2)           25       <br/>
1        (0, 1), (1, 3)           35 <br/>
2        (0, 2), (2, 3)           45 <br/>
3        (0, 3), (1, 3)           45 <br/>

Thus a lower bound on the cost of any tour =  <br/>
         1/2(25 + 35 + 45 + 45)
       = 75  */}
       <Table responsive>
 <tr>
<th>
Node 
</th>
<th>
Least cost edges
</th>
<th>
Total cost 
</th>
</tr>
<tr>
<td>
0  
</td>
<td>
(0, 1), (0, 2)  
</td>
<td>
25
</td>
</tr>

<tr>
<td>
1    
</td>
<td>
    (0, 1), (1, 3)           
</td>
<td>
35 
</td>
</tr>
<tr>
<td>
2       
</td>
<td>
 (0, 2), (2, 3)          
</td>
<td>
 45
</td>
</tr>

<tr>
<td>
3       
</td>
<td>

(0, 3), (1, 3)         
</td>
<td>
45
</td>
</tr>
</Table>
       
                    </li>
                    <li>
                      <code>
                      Cost of a tour T = (1/2) * ∑ (Sum of cost of two edges
                              adjacent to u and in the
                              tour T) <br/>
                   where u ∈ V<br/>
For every vertex u, if we consider two edges through it in T,
and sum their costs.  The overall sum for all vertices would
be twice of cost of tour T (We have considered every edge 
twice.)<br/>

(Sum of two tour edges adjacent to u) {">="} (sum of minimum weight
                                          two edges adjacent to
                                          u)<br/>

Cost of any tour {">="}  1/2) * ∑ (Sum of cost of two minimum
                              weight edges adjacent to u) <br/>
                   where u ∈ V
                      </code>
                    </li>
                   <li>
  <img src="http://lcm.csa.iisc.ernet.in/dsa/img445.gif" className="mx-auto img-fluid"/>
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
                  <h5 className="title">8 Queen Problem Chessboard</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <img src="data:image/png;base64,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" className="mx-auto img-fluid mb-3"/>
                  <ul>
                    <li>
                    Let the chessboard squares is numbered as the indices of the two dimensional array a [1:n, 1:n], then every element on the same diagonal that runs from the upper left to lower right has the same row- column value.


                    </li>
                    <li>
                    Also every element on the same diagonal that goes from the upper right to lower left has the same row + column value.

                    </li>
<li>
Suppose two queen are placed at positions (i, j) and (k, l), then by the above they are on the same diagonal only if i - j=k-l or i + j=k + l.

</li>
<li>
The first equation implies j - l=i - k

</li>
<li>
The second equation implies j-l=k - i
</li>
<li>
Therefore two queens lie on the same diagonal if and only if j-l=i-k.

</li>
<li>
Algorithm1: (Can a new queen be placed?)<br/>
<code>
Algorithm Place(k, i)<br/>
//Returns true if a queen can be placed in kth row and ith column otherwise it // returns //false. x [] is a global array whose first (k-1) value have been set.<br/>
//Abs(r) returns the absolute value of r.<br/>
{"{"}<br/>
For j:= 1 to k-1 do<br/>
If(x[j]=i) //Two in the same column<br/>
Or (Abs x[j]-i) = Abs(j-k))<br/>
//or in the same diagonal<br/>
Then return false;<br/>
Return true;<br/>
{"}"}<br/>

</code>
</li>
<li>
Above algorithm palce (k,i) returns a Boolean value that is true if the kth queen can be placed in column i.<br/>
It tests both whether I is distinct from all previous values x [1]……..x[k-1] and whether there is no other queen on the same diagonal.<br/>
It computing time O (k-1).<br/>
The array x[] is a global<br/>
The algorithm is invoked by N Queen (1, n).
</li>

                  </ul>
                  <ul>
  <li>
    <strong>Algorithm2: All solutions to the n-queen problems.</strong><br/>
  </li>
  <li>
    <code>
    Algorithm N Queens(k, n)<br/>
//Using backtracking this procedure prints all possible placements of a queen on<br/>
//an n*n chessboard so that they are non-attacking<br/>
{"{"}
<br/>
for i:= 1 to n do<br/>
{"{"}<br/>

If(Place(k,i)) then<br/>

{"{"}<br/>
x[k] := i;<br/>

if(k=n) then write (x[1:n]);<br/>

else N Queen(k+1,n);<br/>

{"}"}

{"}"}
{"}"}
    </code>
  </li>
  <li>
    
  For an 8*8 chessboard there are (64/8) possible ways to place 8 pieces or approximate 4.4 billion 8-tuples to examine using brute force approach.
  </li>
  <li>
However by allowing only placements of queens on distinct rows and columns, we require the examination of almost 8! Or only 40, 320, 8 tuples.

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
                  <h5 className="title">Knapsack Problem</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     Given n positive weights wi, n positive profits pi , and a positive number M which is the knapsack capacity, the 0/1 knapsack problem calls for choosing a subset of the weights such that
                    <br/> Σ<sub>i = 1 to k </sub>  w<sub>i</sub>x<sub>i</sub> {"<="} M and 
                    <br/> Σ<sub>i = 1 to k </sub>  p<sub>i</sub>x<sub>i</sub> is Maximized

                     </li>
                     <li>
                     The x's constitute a zero-one valued vector.<br/>
The solution space for this problen consists of the 2n distinct ways to assign zero or one values to the x's.<br/>
Thus the solution space is the same as that for the sum of the subsets problem.


                     </li>
                     <li>
                     Bounding function is needed to help kill some live nodes without actually expanding them.<br/>
A good bounding function for this problem is obtained by using an upper bound on the value of the best feasible solution obtainable by expanding the given live node and any of its descendants. If this upper bound is not higher than the value of the best solution determined so far then that live node may be killed.


                     </li>
                     <li>
                     Here we use the fixed tuple size formulation.<br/>
If at node Z the values of xi , 1 {"<="} i {"<="} k have already been determined, then an upper bound for Z can be obtained by relaxing the requirement xi = 0 or 1 to 0 {"<="} xi {"<="} 1 for k+1 {"<="} i {"<="} n and use the greedy method to solve the relaxed problem.
                     </li>
                     <li>
                     Procedure Bound(p,w,k,M) determines an upper bound on the best solution obtainable by expanding any node Z at level k+1 of the state space tree
                     </li>
                     <li>
                       <code>
                     procedure BOUND(p,w,k,M) <br/>
// p: the current profit total<br/>
// w: the current weight total<br/>
// k : the index of the last removed item<br/>
// M : the knapsack size<br/>
// the return result is a new profit<br/>

global  n , P(1:n) , W(1:n)<br/>
integer k, i l real b,c,p,w, M<br/>
      b := p ;  c := w<br/>
      for  i := k+1 to n do <br/>
           c := c + W(i)<br/>
           if c {"<"} M then b := b + P(j)<br/>
                    else  return (b + (1 - (c - M)/W(i))*P(i))<br/>
           endif<br/>
      repeat<br/>
      return (b)<br/>
end BOUND
</code>
                     </li>
                     <li>
                       <img src="https://media.geeksforgeeks.org/wp-content/uploads/tree-weight.jpg" className="mx-auto img-fluid"/>
                     </li>
                     <li>
                     {"Item arr[] = {{2, 40}, {3.14, 50}, {1.98, 100},{5, 95}, {3, 30}};"}
                     <br/>Knapsack Capacity W = 10<br/>

Output:
The maximum possible profit = 235
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

export default BackTracking
