import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,CardImg } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Recurrence = () => {
  return (
    <>
      <PanelHeader size="sm" />

      <div className="content" >
        <Row>
          <Col md={12} >
            <Card style={{ padding: "5px" }}>
              <CardHeader>
                <h2 className="title"> Recurrence Relation</h2>
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
                      A recurrence is an equation or inequality that describes a function in terms of its values on smaller inputs. To solve a Recurrence Relation means to obtain a function defined on the natural numbers that satisfy the recurrence.
                      For Example, the Worst Case Running Time T(n) of the MERGE SORT Procedures is described by the recurrence.
                      T (n) = θ (1) if n=1
                       2T(n/2) Recurrence Relation + θ (n) if n{">"}1
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
                <h5 className="title">Four methods for solving Recurrence:</h5>

              </CardHeader>
              <CardBody className="all-icons" >
                <Row>

                  <ol>
                    <li>
                      <strong>
                    Substitution Method: </strong>
The Substitution Method Consists of two main steps:
<br/>

Use the mathematical induction to find the boundary condition and shows that the guess is correct.
For Example1 Solve the equation by Substitution Method.
<br/>
	T (n) = (n/2) Recurrence Relation + n
We have to show that it is asymptotically bound by O (log n).
<br/>
Solution:
<br/>
<code>For T (n) = O (log n)</code><br/>
We have to show that for some constant c <br/>
<code> T(n) ≤c logn. </code>
<br/>
Put this in given Recurrence Equation.
<code>
  <br/>
	T (n) ≤c log(n/2) Recurrence Relation+ 1<br/>
			≤c log(n/2) Recurrence Relation+ 1 = c logn-clog2 2+1<br/>
			≤c logn for c≥1<br/>
Thus T (n) =O logn.
</code>
                    </li>
                    <br/>
                    <li>
<strong>
Iteration Methods:

</strong><br/>
It means to expand the recurrence and express it as a summation of terms of n and initial condition.
<br/>
Example1: Consider the Recurrence
<Highlight>
T (n) = 1  if n=1  <br/>
T (n) = 2T (n-1) if n{">"}1  <br/>
Solution:

  
T (n) = 2T (n-1)<br/>
      = 2[2T (n-2)] = 2^2T (n-2)<br/>
      = 4[2T (n-3)] = 2^3T (n-3)<br/>
      = 8[2T (n-4)] = 2^4T (n-4)   (Eq.1)<br/>

Repeat the procedure for i times<br/>

T (n) = 2i T (n-i)<br/>
Put n-i=1 or i= n-1 in    (Eq.1)<br/>
T (n) = 2n-1 T (1)<br/>
      = 2n-1 .1    [T (1) =1 .....given]<br/>
      = 2n-1 <br/>
</Highlight>
                    </li>
                    <li>
                      <strong>

Recursion Tree Method</strong>
<br/>
<ol>
<li>Recursion Tree Method is a pictorial representation of an iteration method which is in the form of a tree where at each level nodes are expanded.
</li> 
<li>
In general, we consider the second term in recurrence as root.
  </li>
<li>
It is useful when the divide & Conquer algorithm is used.
</li>
<li>
It is sometimes difficult to come up with a good guess. In Recursion tree, each root and child represents the cost of a single subproblem
</li>
<li>
We sum the costs within each of the levels of the tree to obtain a set of pre-level costs and then sum all pre-level costs to determine the total cost of all levels of the recursion.
</li>
<li>
A Recursion Tree is best used to generate a good guess, which can be verified by the Substitution Method.
</li>

</ol>
<Row className="p-2">
          <Col md={7} >
          <img src="https://i.pinimg.com/474x/21/75/27/217527b19197de3d7cd5121d3bcbfd98.jpg" className="responsive"/>

          </Col>
          <Col md={5} >
            <br/>
            <br/>
          <img className="responsive" src="data:image/png;base64,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" className="responsive"/>

          </Col>
          </Row>
                    </li>
                    <li>
                      <strong>
                        
Master Method
                      </strong>
                      <br/>
                      The Master Method is used for solving the following types of recurrence

T (n) = a T(n/b) Master Method+ f (n) with a≥1 and b≥1 be constant & f(n) be a function and (n/b)  Master Methodcan be interpreted as

Let T (n) is defined on non-negative integers by the recurrence.
                    </li>
                    <p>In the function to the analysis of a recursive algorithm, the constants and function take on the following significance:</p>
<ul class="points">
<li>n is the size of the problem. </li>
<li>a is the number of subproblems in the recursion.  </li>
<li>n/b is the size of each subproblem. (Here it is assumed that all subproblems are essentially the same size.)</li>  
<li>f (n) is the sum of the work done outside the recursive calls, which includes the sum of dividing the problem and the sum of combining the solutions to the subproblems.</li>
<li>It is not possible always bound the function according to the requirement, so we make three cases which will tell us what kind of bound we can apply on the function.</li>
<li>
  <br/>
                  <img src="data:image/png;base64,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"/>

                  </li>
                  <br/>
                  <br/>
                  
                  <li>
                    <strong>
                      Example
                    </strong>
                    <br/>
                  <Highlight>
                    T(n) = 3T(n/2) + n2<br/>
Here,<br/>
a = 3<br/>
n/b = n/2<br/>
f(n) = n2<br/>

logb a = log2 3 ≈ 1.58 {"<"} 2<br/>

ie. f(n) {"<"} nlogb {"a+ϵ"} , where, ϵ is a constant.<br/>

Case 3 implies here.<br/>

Thus, T(n) = f(n) = Θ(n2) 
</Highlight>
                  </li>
</ul>
                  </ol>
                 

                   
                 
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Recurrence
