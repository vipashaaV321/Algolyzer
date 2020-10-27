import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const MatrixChain = () => {
    return (
        <>
        <PanelHeader size="sm" />
        <div className="content" >
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h2 className="title"> Matrix Chain Multiplication</h2>
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
                       If a chain of matrices is given, we have to find the minimum number of the correct sequence of matrices to multiply.



                       </li>
                       <li>
                       Given a sequence of matrices, find the most efficient way to multiply these matrices together. The problem is not actually to perform the multiplications, but merely to decide in which order to perform the multiplications.
We have many options to multiply a chain of matrices because matrix multiplication is associative. In other words, no matter how we parenthesize the product, the result will be the same. For example, if we had four matrices A, B, C, and D, we would have:


                       </li>
                       <li>
                       Time Complexity: O(n3 )<br/>
Auxiliary Space: O(n2)


                       </li>
                       <li>
                       If A = ⌊aij⌋ is a p x q matrix <br/>
   B = ⌊bij⌋ is a q x r matrix<br/>
   C = ⌊cij⌋ is a p x r matrix

                       </li>
                       <li>
                           
(ABC)D = (AB)(CD) = A(BCD) = ....<br/>
However, the order in which we parenthesize the product affects the number of simple arithmetic operations needed to compute the product, or the efficiency. For example, suppose A is a 10 × 30 matrix, B is a 30 × 5 matrix, and C is a 5 × 60 matrix. Then,  

(AB)C = (10×30×5) + (10×5×60) = 1500 + 3000 = 4500 operations<br/>
A(BC) = (30×5×60) + (10×30×60) = 9000 + 18000 = 27000 operations.
                       </li>
                       <li>
                       when we used the Dynamic programming technique we shall follow some steps.<br/>
Characterize the structure of an optimal solution.<br/>
Recursively deﬁne the value of an optimal solution.<br/>
Compute the value of an optimal solution.<br/>
Construct an optimal solution from computed information.
                       </li>
                       <li>
                       Multiplying an i×j and a j×k matrix requires ijk multiplications<br/>

Each element of the product requires j multiplications, and there are ik elements
                       </li>
                       <li>
                       we have matrices of any of order. our goal is find optimal cost multiplication of matrices.when we solve the this kind of problem using DP step 2 we can get<br/>
m[i , j] = min {"{"} m[i , k] + m[i+k , j] + pi-1*pk*pj {"}"} if i {"<"} j…<br/>
. where p is dimension of matrix , i ≤ k {"<"} j …..
                       </li>
                       <li>
                           <code>
                           Algorithm<br/>
matOrder(array, n)<br/>
Input − List of matrices, the number of matrices in the list.<br/>

Output − Minimum number of matrix multiplication.<br/>

Begin<br/>
   define table minMul of size n x n, <br/>
   initially fill with all 0s<br/>
   for length := 2 to n, do<br/>
      fir i:=1 to n-length, do<br/>
         j := i + length – 1<br/>
         minMul[i, j] := ∞<br/>
         for k := i to j-1, do<br/>
            q := minMul[i, k] + minMul[k+1, j] + array[i-1]*array[k]*array[j]<br/>
            if q {"<"} minMul[i, j], then minMul[i, j] := q<br/>
         done<br/>
      done<br/>
   done<br/>
   return minMul[1, n-1]<br/>
End
                           </code>
                       </li>
                       <li>
                       <pre>{`
Let M[i,j] = the number of multiplications 
required for matrix product Ai×⋯×Aj
For 1≤i≤j < n
M[i,i]=0 since no product is required
The optimal solution of Ai×Aj..
must break at some point, k, with i≤k{"<"}j
Thus, M[i,j]=M[i,k]+M[k+1,j]+di−1dkdj
Thus, M[i,j]= 
{0 min i≤k < j {M [i,k] + M[k+1,j]+di−1dkdj} 
if i=j 
if i < j
This is a recursive function 
(with exponential complexity)


Complexity:
P(1) = 1
P(n) = Sum (k=1, n-1) P(k)P(n-k)
P(n) = Ω(fn/n32)
`}</pre>
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

export default MatrixChain
