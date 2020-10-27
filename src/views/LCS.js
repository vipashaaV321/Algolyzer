import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,CardImg } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const LCS = () => {
    return (
        <>
        <PanelHeader size="sm" />

        <div className="content" >
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h2 className="title">Longest Common Subsequence</h2>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Solutions</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                   <li>
                    LCS Problem Statement: Given two sequences, find the length of longest subsequence present in both of them. A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”.

               </li>
                <li>
                    In order to find out the complexity of brute force approach, we need to first know the number of possible different subsequences of a string with length n, i.e., find the number of subsequences with lengths ranging from 1,2,..n-1. Recall from theory of permutation and combination that number of combinations with 1 element are nC1. Number of combinations with 2 elements are nC2 and so forth and so on. We know that nC0 + nC1 + nC2 + … nCn = 2n. So a string of length n has 2n-1 different possible subsequences since we do not consider the subsequence with length 0. This implies that the time complexity of the brute force approach will be O(n * 2n). Note that it takes O(n) time to check if a subsequence is common to both the strings. This time complexity can be improved using dynamic programming.
               </li>
                <li>
                    The naive solution for this problem is to generate all subsequences of both given sequences and find the longest matching subsequence. This solution is exponential in term of time complexity. Let us see how this problem possesses both important properties of a Dynamic Programming (DP) Problem.
               </li>
                <li>
                   <strong> 1) Optimal Substructure:</strong><br/>
                    Let the input sequences be X[0..m-1] and Y[0..n-1] of lengths m and n respectively. And let L(X[0..m-1], Y[0..n-1]) be the length of LCS of the two sequences X and Y. Following is the recursive definition of L(X[0..m-1], Y[0..n-1]).
               </li>
                <li>
                    If last characters of both sequences match (or X[m-1] == Y[n-1]) then<br/>
                    L(X[0..m-1], Y[0..n-1]) = 1 + L(X[0..m-2], Y[0..n-2])
               </li>
                <li>
                    If last characters of both sequences do not match (or X[m-1] != Y[n-1]) then<br/>
                    L(X[0..m-1], Y[0..n-1]) = MAX ( L(X[0..m-2], Y[0..n-1]), L(X[0..m-1], Y[0..n-2]) )
               </li>
               <li>
               <strong>Examples:</strong><br/>
                1) Consider the input strings “AGGTAB” and “GXTXAYB”. Last characters match for the strings. So length of LCS can be written as:<br/>
                L(“AGGTAB”, “GXTXAYB”) = 1 + L(“AGGTA”, “GXTXAY”)<br/>
               </li>
               <li>
                   <strong>2) Overlapping Subproblems:</strong><br/>
Following is simple recursive implementation of the LCS problem. The implementation simply follows the recursive structure mentioned above.
               </li>
               <li>
               Time complexity of the above naive recursive approach is O(2^n) in worst case and worst case happens when all characters of X and Y mismatch i.e., length of LCS is 0.
Considering the above implementation, following is a partial recursion tree for input strings “ABCD” and “AYZX”
               </li>
               <li>
                   <img src="https://miro.medium.com/max/1678/1*vUURQpHCEnJJbgU_u15TJQ.png" className="img-fluid mx-auto"/>
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
                  <h5 className="title">Dynamic Programming Approach</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       Let X = {"<"} x1, x2, x3,…, xm {">"} and Y = {"<"}y1, y2, y3,…, yn {">"} be the sequences. To compute the length of an element the following algorithm is used.

                       </li>
<li>
In this procedure, table C[m, n] is computed in row major order and another table B[m,n] is computed to construct optimal solution.
</li>
<li>
    <code>
    Algorithm: LCS-Length-Table-Formulation (X, Y)<br/>
m := length(X) <br/>
n := length(Y) <br/>
for i = 1 to m do <br/>
   C[i, 0] := 0 <br/>
for j = 1 to n do <br/>
   C[0, j] := 0 <br/>
for i = 1 to m do <br/>
   for j = 1 to n do <br/>
      if xi = yj <br/>
         C[i, j] := C[i - 1, j - 1] + 1 <br/>
         B[i, j] := ‘D’ <br/>
      else <br/>
         if C[i -1, j] ≥ C[i, j -1] <br/>
            C[i, j] := C[i - 1, j] + 1 <br/>
            B[i, j] := ‘U’ <br/>
         else <br/>
         C[i, j] := C[i, j - 1]<br/>
         B[i, j] := ‘L’ <br/>
return C and B<br/>
    </code>
</li>
<li>
    <code>
    Algorithm: Print-LCS (B, X, i, j)<br/>
if i = 0 and j = 0 <br/>
   return  <br/>
if B[i, j] = ‘D’ <br/>
   Print-LCS(B, X, i-1, j-1) <br/>
   Print(xi) <br/>
else if B[i, j] = ‘U’ <br/>
   Print-LCS(B, X, i-1, j) <br/>
else <br/>
   Print-LCS(B, X, i, j-1) <br/>
    </code>
</li>
<li>
To populate the table, the outer for loop iterates m times and the inner for loop iterates n times. Hence, the complexity of the algorithm is O(m, n), where m and n are the length of two strings.
</li>
<li>
<img src="https://i1.wp.com/algorithms.tutorialhorizon.com/files/2015/06/LCS-Printing-Result.png" className="img-fluid mx-auto" style={{height:"300px"}}/>

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

export default LCS
