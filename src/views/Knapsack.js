import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Knapsack = () => {
    return (
        <>
        <PanelHeader size="sm" />
        <div className="content" >
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h2 className="title"> Knapsack Problem</h2>
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
                     Knapsack is basically means bag. A bag of given capacity.<br/>

We want to pack n items in your luggage.


                     </li>
                     <li>
                     The ith item is worth vi dollars and weight wi pounds.<br/>
Take as valuable a load as possible, but cannot exceed W pounds.<br/>
vi wi W are integers.
                     </li>
                     <li>
                         <strong>
                         W ≤ capacity  <br/>
Value ← Max 
                         </strong>
                     </li>
                     <li>
                     Time Complexity: O(2^n).<br/>
As there are redundant subproblems.<br/>
Auxiliary Space :O(1).<br/>
As no extra data structure has been used for storing values.
                     </li>
                     <li>
                         <strong>Input:</strong> <br/>
                         Knapsack of capacity<br/>
List (Array) of weight and their corresponding value.
                     </li>
                     <li>
                   <strong>  Output: </strong>To maximize profit and minimize weight in capacity.<br/>

The knapsack problem where we have to pack the knapsack with maximum value in such a manner that the total weight of the items should not be greater than the capacity of the knapsack.
                     </li>
                     <li>
                     Knapsack problem can be further divided into two parts: <br/>

1. Fractional Knapsack: Fractional knapsack problem can be solved by Greedy Strategy where as 0 /1 problem is not
                     </li>
                 </ul>
                 <ul>
                     <li>
                     0/1 Knapsack Problem:<br/>
In this item cannot be broken which means thief should take the item as a whole or should leave it. That's why it is called 0/1 knapsack Problem.

                     </li>
              <li>
              Each item is taken or not taken.<br/>
Cannot take a fractional amount of an item taken or take an item more than once.<br/>
It cannot be solved by the Greedy Approach because it is enable to fill the knapsack to capacity.<br/>
Greedy Approach doesn't ensure an Optimal Solution.<br/>
              </li>

                 </ul>
                 <ul>
                     <li>
                         <code>
                         KNAPSACK (n, W)<br/>
  for w = 0, W<br/>
  do V [0,w] ← 0<br/>
  for i=0, n<br/>
  do V [i, 0] ← 0<br/>  
  for w = 0, W<br/>
  do if (wi≤ w & vi + V [i-1, w -  wi]{">"} V [i -1,W])<br/>
  then V [i, W] ← vi + V [i - 1, w - wi]<br/>
  else V [i, W] ← V [i - 1, w]<br/>
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
                  <h5 className="title">0-1 Knapsack Problem</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     In this item cannot be broken which means thief should take the item as a whole or should leave it. That's why it is called 0/1 knapsack Problem.


                     </li>
                     <li>
                     Each item is taken or not taken.

                     </li>
                     <li>
                     Cannot take a fractional amount of an item taken or take an item more than once.

                     </li>
                     <li>
                     It cannot be solved by the Greedy Approach because it is enable to fill the knapsack to capacity. in case of 0-1 Knapsack, the value of xi can be either 0 or 1, where other constraints remain the same.
                     </li>
                     <li>
Greedy Approach doesn't ensure an Optimal Solution. In many instances, Greedy approach may give an optimal solution.

                     </li>
                     <li>
                     Items	 |A	   B	  C	  D <br/>
                    Profit	|24	  18	 18	 10<br/>
                    Weight	|24	  10	 10	  7<br/>
                     </li>
                     <strong><li>capacity of the knapsack is W = 25</li></strong>
                     <li>Without considering the profit per unit weight (pi/wi), if we apply Greedy approach to solve this problem, first item A will be selected as it will contribute maximum profit among all the elements.</li>
                     <li>After selecting item A, no more item will be selected. Hence, for this given set of items total profit is 24. Whereas, the optimal solution can be achieved by selecting items, B and C, where the total profit is 18 + 18 = 36.</li>
                    <li>
                      <strong>Dynamic-Programming Approach</strong>
                    </li>
                    <li>Let i be the highest-numbered item in an optimal solution S for W dollars. Then S' = S - [i] is an optimal solution for W - wi dollars and the value to the solution S is Vi plus the value of the sub-problem.</li>
                  <li>We can express this fact in the following formula: define c[i, w] to be the solution for items 1,2, … , i and the maximum weight w.</li>
                   <li>
                     <ul>
                       Inputs
                       <li>
                       The maximum weight W

                       </li>
<li>
The number of items n

</li>
<li>
The two sequences v = {"<"}v1, v2, …, vn{">"} and w = {"<"}w1, w2, …, wn{">"}

</li>
                     </ul>
                   </li>
                   <li>
                   The set of items to take can be deduced from the table, starting at c[n, w] and tracing backwards where the optimal values came from.<br/>

If c[i, w] = c[i-1, w], then item i is not part of the solution, and we continue tracing with c[i-1, w]. Otherwise, item i is part of the solution, and we continue tracing with c[i-1, w-W].<br/>
                   </li>
                   <li>
                     <code>
                   Dynamic-0-1-knapsack (v, w, n, W) <br/>
for w = 0 to W do <br/>
   c[0, w] = 0 <br/>
for i = 1 to n do <br/>
   c[i, 0] = 0 <br/>
   for w = 1 to W do <br/>
      if wi ≤ w then <br/>
         if vi + c[i-1, w-wi] then <br/>
            c[i, w] = vi + c[i-1, w-wi] <br/>
         else c[i, w] = c[i-1, w] <br/>
      else <br/>
         c[i, w] = c[i-1, w] <br/>
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
                  <h5 className="title">Fractional Knapsack</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                     In this case, items can be broken into smaller pieces, hence the thief can select fractions of items.
                     </li>
                     <li><p>There are <b>n</b> items in the store</p></li>
<li><p>Weight of <b>i<sup>th</sup></b> item w<sub>i</sub> {">"} 0</p></li>
<li><p>Profit for <b>i<sup>th</sup></b> item p<sub>i</sub> {">"} 0 and</p></li>
<li><p>Capacity of the Knapsack is <b>W</b></p></li>
<li>
In this version of Knapsack problem, items can be broken into smaller pieces. So, the thief may take only a fraction xi of ith item.
<br/>
<strong>0⩽xi⩽1</strong><br/>
The ith item contributes the weight xi.wi to the total weight in the knapsack and profit xi.pi to the total profit.
</li>
<li>
objective of this algorithm is to
<br/>
maximize∑n=1n(xi.pi)<br/>
subject to constraint,
<br/>
∑n=1n(xi.wi)⩽W
</li>
<li>
It is clear that an optimal solution must fill the knapsack exactly, otherwise we could add a fraction of one of the remaining items and increase the overall profit.
<br/>
Thus, an optimal solution can be obtained by
<br/>
∑n=1n(xi.wi)=W
In this context, first we need to sort those items according to the value of piwi, so that pi+1wi+1 ≤ piwi . Here, x is an array to store the fraction of items.
</li>
<li>
  <code>
  Algorithm: Greedy-Fractional-Knapsack (w[1..n], p[1..n], W) <br/>
for i = 1 to n <br/>
   do x[i] = 0 <br/>
weight = 0 <br/>
for i = 1 to n <br/>
   if weight + w[i] ≤ W then  <br/>
      x[i] = 1 <br/>
      weight = weight + w[i] <br/>
   else <br/>
      x[i] = (W - weight) / w[i] <br/>
      weight = W <br/>
      break <br/>
return x
  </code>
</li>
<li>
If the provided items are already sorted into a decreasing order of piwi, then the whileloop takes a time in O(n); Therefore, the total time including the sort is in O(n logn).
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

export default Knapsack
