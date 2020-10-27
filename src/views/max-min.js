import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const MaxMin = () => {
    return (
        <>
        <PanelHeader size="sm" />

<div className="content" >
  <Row>
    <Col md={12} >
      <Card style={{ padding: "5px" }}>
        <CardHeader>
          <h2 className="title"> Max-Min Problem</h2>
        </CardHeader>
      </Card>
    </Col>
  </Row>
  <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title"></h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  
                <ul>
                    <li>
                  The Max-Min Problem in algorithm analysis is finding the maximum and minimum value in an array.
                        </li>
                        <li>
                        To find the maximum and minimum numbers in a given array numbers[] of size n, the following algorithm can be used. First we are representing the naive method and then we will present divide and conquer approach.
<br/>The number of comparison in Naive method is <strong><i> 2n - 2</i></strong>.
                        </li>
                        <br/>
                        <li>
                            <strong>
                                solving using Divide and Conquer Approach:<br/>
                            </strong>
                            In this approach, the array is divided into two halves. Then using recursive approach maximum and minimum numbers in each halves are found. Later, return the maximum of two maxima of each half and the minimum of two minima of each half.

                        </li>
                        <li>
                            
In this given problem, the number of elements in an array is y−x+1, where y is greater than or equal to x.

                        </li>
                        <li>
Max−Min(x,y) will return the maximum and minimum values of an array numbers[x...y].

                        </li>
                        <li>
                            <code>
                            Algorithm: Max - Min(x, y) <br/>
if y – x ≤ 1 then  <br/>
   return (max(numbers[x], numbers[y]), min((numbers[x], numbers[y])) <br/>
else <br/>
   (max1, min1):= maxmin(x, ⌊((x + y)/2)⌋) <br/>
   (max2, min2):= maxmin(⌊((x + y)/2) + 1)⌋,y) <br/>
return (max(max1, max2), min(min1, min2)) <br/>
                            </code>
                        </li>
                        <li>
                            <strong>Analysis</strong> <br/>
                        Let T(n) be the number of comparisons made by Max−Min(x,y), where the number of elements n=y−x+1.


                        </li>
                        <li>
                        If T(n) represents the numbers, then the recurrence relation can be represented a
                        <br/>
                        T(n)=T(⌊n/2⌋)+T(⌈n/2⌉)+2 for n{">"}2 <br/>
                        T(n)=1 for n=2 <br/>
                        T(n)=0 for n=1 

                        </li>
                        <li>
                        n is in the form of power of 2. Hence, n = 2k where k is height of the recursion tree.<br/>
                        T(n)=2.T(n/2)+2=2.(2.T(n/4)+2)+2.....=3n/2−2
                        </li>
                        <li>
                        Asymptotic notation is represented by O(n)
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

export default MaxMin
