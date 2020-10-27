
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import icons from "variables/icons";

class Icons extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />

        <div className="content" >
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h2 className="title"> Basics Of Algorithm and Mathematics</h2>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={8} >
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
                    <ul>
                      <li>
                      An Algorithm is a sequence of steps to solve a problem.

                      </li>
                      <li>
                      Design and Analysis of Algorithm is very important for designing algorithm to solve different types of problems in the branch of computer science and information technology.
                      fundamental concepts ..Complexity analysis of Algorithms, followed by problems on Graph Theory and Sorting methods.
                      </li>
                    </ul>
                   
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  {/* <h5 className="title">Example Of Pseudocode</h5> */}
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhGIr-NSJh7jkPA9fqGw9XWlWJGr1oi86bOQ&usqp=CAU" className="mx-auto img-fluid"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Algorithm Design</h5>
                  {/* <p className="category">
                    Handcrafted by our friends from{" "}
                    <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                  </p> */}
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
<ul>
  <li>
  The important aspects of algorithm design include creating an efficient algorithm to solve a problem in an efficient way using minimum time and space.

  </li>
  <li>
  To solve a problem, different approaches can be followed. Some of them can be efficient with respect to time consumption, whereas other approaches may be memory efficient. However, one has to keep in mind that both time consumption and memory usage cannot be optimized simultaneously. If we require an algorithm to run in lesser time, we have to invest in more memory and if we require an algorithm to run with lesser memory, we need to have more time.

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
                  <h5 className="title">Problem Development Steps</h5>
                  {/* <p className="category">
                    Handcrafted by our friends from{" "}
                    <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                  </p> */}
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                    <ul>
                      <li>
                        Problem definition</li>
                      <li>Development of a model</li>
                      <li>
                        Specification of an Algorithm

</li>
                      <li>

                        Designing an Algorithm

</li>

                      <li>

                        Checking the correctness of an Algorithm
</li>
                      <li>

                        Analysis of an Algorithm

</li>

                      <li>
                        Implementation of an Algorithm

</li>
                      <li>
                        Program testing

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
                  <h5 className="title">Characteristics of Algorithms
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

                    Algorithms must have a unique name

                    </li>
<li>
Algorithms should have explicitly defined set of inputs and outputs

</li>
<li>
Algorithms are well-ordered with unambiguous operations

</li>
<li>
Algorithms halt in a finite amount of time. Algorithms should not run for infinity, i.e., an algorithm must end at some point
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
                  <h5 className="title">Pseudocode</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                    <ul>
                      <li>
Pseudocode gives a high-level description of an algorithm without the ambiguity associated with plain text but also without the need to know the syntax of a particular programming language.

                      </li>
                      <li>
                      The running time can be estimated in a more general manner by using Pseudocode to represent the algorithm as a set of fundamental operations which can then be counted.

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
                  <h5 className="title">Difference between Algorithm and Pseudocode</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                    <ul>
                      <li>
                      An algorithm is a formal definition with some specific characteristics that describes a process, which could be executed by a Turing-complete computer machine to perform a specific task. Generally, the word "algorithm" can be used to describe any high level task in computer science.

                      </li>
                      <li>
                      On the other hand, pseudocode is an informal and (often rudimentary) human readable description of an algorithm leaving many granular details of it. Writing a pseudocode has no restriction of styles and its only objective is to describe the high level steps of algorithm in a much realistic manner in natural language.

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
                  <h5 className="title">Example of Algorithm</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <code>
                    <ul>
                      <li>
                      Algorithm: Insertion-Sort <br/>

                      </li>
                      <li>
                      Input: A list L of integers of length n  <br/>

                      </li>
                      <li>
                      Output: A sorted list L1 containing those integers present in L <br/>

                      </li>
                      <li>
                      Step 1: Keep a sorted list L1 which starts off empty  <br/>

                      </li>
                      <li>
                      Step 2: Perform Step 3 for each element in the original list L <br/> 

                      </li>
                      <li>
                      Step 3: Insert it into the correct position in the sorted list L1. <br/> 

                      </li>
                      <li>
                      Step 4: Return the sorted list <br/>

                      </li>
                      <li>
                      Step 5: Stop

                      </li>
                    </ul>

</code>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row >
            <Col md={12}>
              <Card style={{ padding: "5px"}} >
                <CardHeader>
                  <h5 className="title">Example Of Pseudocode</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <code>
                           <ul>
                             <li>
                             for i {" <-"} 1 to length(A) <br/>

                             </li>
                             <li>
                             x {" <-"} A[i] <br/>

                             </li>
                             <li>
                             j {" <-"} i <br/>

                             </li>
                             <li>
                             while j {" >"} 0 and A[j-1] {" >"} x <br/>

                             </li>
                             <li>
                             A[j] {" <-"} A[j-1] <br/>

                             </li>
                             <li>
      A[j] {" <-"} A[j-1] <br/>

                             </li>
                             <li>
      j {" <-"}j - 1 <br/>

                             </li>
                             <li>
   A[j] {" <-"} x<br/>

                             </li>
                             </ul>       
                
                 </code>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Icons;
