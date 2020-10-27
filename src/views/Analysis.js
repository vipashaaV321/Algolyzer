import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Analysis = () => {

    
    return (
      <>
        <PanelHeader size="sm" />

        <div className="content" >
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h2 className="title"> Analysis of Algorithms</h2>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Introduction</h5>
                  {/* <p className="category">
                    Handcrafted by our friends from{" "}
                    <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                  </p> */}
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                    {/* {icons.map((prop, key) => {
                      return (
                        <Col
                          lg={2}
                          md={3}
                          sm={4}
                          xs={6}
                          className="font-icon-list"
                          key={key}
                        >
                          <div className="font-icon-detail">
                            <i className={"now-ui-icons " + prop} />
                            <p>{prop}</p>
                          </div>
                        </Col>
                      );
                    })} */}
               <ul><li>
                 
               Algorithm analysis is an important part of computational complexity theory, which provides theoretical estimation for the required resources of an algorithm to solve a specific computational problem. Most algorithms are designed to work with inputs of arbitrary length. Analysis of algorithms is the determination of the amount of time and space resources required to execute it.

Usually, the efficiency or running time of an algorithm is stated as a function relating the input length to the number of steps, known as time complexity, or volume of memory, known as space complexit
                 </li></ul>

                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Needs</h5>
                  {/* <p className="category">
                    Handcrafted by our friends from{" "}
                    <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                  </p> */}
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
<ul>
  <li>
    
  Algorithms are often quite different from one another, though the objective of these algorithms are the same. For example, we know that a set of numbers can be sorted using different algorithms. Number of comparisons performed by one algorithm may vary with others for the same input. Hence, time complexity of those algorithms may differ. At the same time, we need to calculate the memory space required by each algorithm.

Analysis of algorithm is the process of analyzing the problem-solving capability of the algorithm in terms of the time and size required (the size of memory for storage while implementation). However, the main concern of analysis of algorithms is the required time or performance. 
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
                  <h5 className="title">Types Of Analysis</h5>
                  {/* <p className="category">
                    Handcrafted by our friends from{" "}
                    <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                  </p> */}
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <Col md={8} >
                    <ul>
                      <li>
                      Worst-case − The maximum number of steps taken on any instance of size a.
                      <br/>For 'n' input size, the worst-case time complexity can be defined as the maximum amount of time needed by an algorithm to complete its execution. Thus, it is nothing but a function defined by the maximum number of steps performed on an instance having an input size of n.</li>
                     
                      <li>
                      Average case − An average number of steps taken on any instance of size a.
                      <br/>Average case time complexity is For 'n' input size, the average-case time complexity can be defined as the average amount of time needed by an algorithm to complete its execution. Thus, it is nothing but a function defined by the average number of steps performed on an instance having an input size of n.

</li>
                      <li>

                      Best case time complexity: For 'n' input size, the best-case time complexity can be defined as the minimum amount of time needed by an algorithm to complete its execution. Thus, it is nothing but a function defined by the minimum number of steps performed on an instance having an input size of n.

</li>

                      

                    </ul>
                    </Col>
                    <Col md={4} >
                    <img src="https://static.javatpoint.com/tutorial/daa/images/daa-tutorial.png" style={{width:"300px",height:"300px"}} className="mx-auto my-2"/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Let's understand More
</h5>
                  {/* <p className="category">
                    Handcrafted by our friends from{" "}
                    <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                  </p> */}
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
<ul>
    <li>

    there is a problem P1, then it may have many solutions, such that each of these solutions is regarded as an algorithm. So, there may be many algorithms such as A1, A2, A3, …, An.<br/>
<br/>
Before you implement any algorithm as a program, it is better to find out which among these algorithms are good in terms of time and memory.<br/>
<br/>
It would be best to analyze every algorithm in terms of Time that relates to which one could execute faster and Memory corresponding to which one will take less memory.<br/>
<br/>
So, the Design and Analysis of Algorithm talks about how to design various algorithms and how to analyze them. After designing and analyzing, choose the best algorithm that takes the least time and the least memory and then implement it as a program in C.<br/>
<br/>
In this course, we will be focusing more on time rather than space because time is instead a more limiting parameter in terms of the hardware. It is not easy to take a computer and change its speed. So, if we are running an algorithm on a particular platform, we are more or less stuck with the performance that platform can give us in terms of speed.<br/>
<br/>
However, on the other hand, memory is relatively more flexible. We can increase the memory as when required by simply adding a memory card. So, we will focus on time than that of the space.<br/>
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
                  <h5 className="title">Methodology</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
<ul>
  <li>
 <strong> Asymptotic Analysis: </strong>
The asymptotic behavior of a function f(n) refers to the growth of f(n) as n gets large.

We typically ignore small values of n, since we are usually interested in estimating how slow the program will be on large inputs.

A good rule of thumb is that the slower the asymptotic growth rate, the better the algorithm. Though it’s not always true.

For example, a linear algorithm f(n)=d∗n+k is always asymptotically better than a quadratic one, f(n)=c.n2+q.
  </li>
  <br/>
  <li>
    <strong>Solving Recurrence Equations : </strong>
    A recurrence is an equation or inequality that describes a function in terms of its value on smaller inputs. Recurrences are generally used in divide-and-conquer paradigm.

Let us consider T(n) to be the running time on a problem of size n.

If the problem size is small enough, say n {"<"} c where c is a constant {","} the straightforward solution takes constant time, which is written as θ(1). If the division of the problem yields a number of sub-problems with size nb.

To solve the problem, the required time is a.T(n/b). If we consider the time required for division is D(n) and the time required for combining the results of sub-problems is C(n), the recurrence relation can be represented as −

{" T(n)={θ(1)aT(nb)+D(n)+C(n)ifn⩽c "}otherwise
  </li>
  <br/>
  <li>
    <strong>Amortized Analysis :</strong>
    Amortized analysis is generally used for certain algorithms where a sequence of similar operations are performed.
    <ul>
<li>
Amortized analysis provides a bound on the actual cost of the entire sequence, instead of bounding the cost of sequence of operations separately.

</li>
<li>
Amortized analysis differs from average-case analysis; probability is not involved in amortized analysis. Amortized analysis guarantees the average performance of each operation in the worst case.

</li>
<li>
It is not just a tool for analysis, it’s a way of thinking about the design, since designing and analysis are closely related

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
                  <h5 className="title">Different Methods Of Amortized Analysis</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                    <ul>
                      <li>
                      Aggregate Method
The aggregate method gives a global view of a problem. In this method, if n operations takes worst-case time T(n) in total. Then the amortized cost of each operation is T(n)/n. Though different operations may take different time, in this method varying cost is neglected.
                      </li>
                      <li>
                      Accounting Method
In this method, different charges are assigned to different operations according to their actual cost. If the amortized cost of an operation exceeds its actual cost, the difference is assigned to the object as credit. This credit helps to pay for later operations for which the amortized cost less than actual cost
                      </li>
                      <li>
                      If the actual cost and the amortized cost of ith operation are ci and cl^, then

∑i=1ncl^⩾∑i=1nci<br/>
Potential Method<br/>
This method represents the prepaid work as potential energy, instead of considering prepaid work as credit. This energy can be released to pay for future operations.
                      </li>
                      <li>
                      If we perform n operations starting with an initial data structure D0. Let us consider, ci as the actual cost and Di as data structure of ith operation. The potential function Ф maps to a real number Ф(Di), the associated potential of Di. The amortized cost cl^ can be defined by

                      </li>
                      <li>
                      cl^=ci+Φ(Di)−Φ(Di−1)<br/>
Hence, the total amortized cost is<br/>

∑i=1ncl^=∑i=1n(ci+Φ(Di)−Φ(Di−1))=∑i=1nci+Φ(Dn)−Φ(D0)
                      </li>
                      <li>
                      Dynamic Table<br/>
If the allocated space for the table is not enough, we must copy the table into larger size table. Similarly, if large number of members are erased from the table, it is a good idea to reallocate the table with a smaller size.
<br/>
Using amortized analysis, we can show that the amortized cost of insertion and deletion is constant and unused space in a dynamic table never exceeds a constant fraction of the total space.
                      </li>
                    </ul>
                

                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        {/*  <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Example of Algorithm</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
<code>
Algorithm: Insertion-Sort <br/>
Input: A list L of integers of length n  <br/>
Output: A sorted list L1 containing those integers present in L <br/>
Step 1: Keep a sorted list L1 which starts off empty  <br/>
Step 2: Perform Step 3 for each element in the original list L <br/> 
Step 3: Insert it into the correct position in the sorted list L1. <br/> 
Step 4: Return the sorted list <br/>
Step 5: Stop
</code>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Example Of Pseudocode</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <Highlight >
                  <code>
                  
  
        
                  for i {" <-"} 1 to length(A) <br/>
   x {" <-"} A[i] <br/>
   j {" <-"} i <br/>
   while j {" >"} 0 and A[j-1] {" >"} x <br/>
      A[j] {" <-"} A[j-1] <br/>
      j {" <-"}j - 1 <br/>
   A[j] {" <-"} x<br/>
                

                 
                 </code>
                 </Highlight>  
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </div>
      </>
    );
  }

export default Analysis;
