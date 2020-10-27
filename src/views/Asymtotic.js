import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Asymptotic = () => {

    
    return (
      <>
        <PanelHeader size="sm" />

        <div className="content" >
          <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h2 className="title"> Asymptotic Notations and Apriori Analysis</h2>
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
                 
               complexity analysis of an algorithm is an essential aspect. Mainly, algorithmic complexity is concerned about its performance, how fast or slow it works.
<br/>
The complexity of an algorithm describes the efficiency of the algorithm in terms of the amount of the memory required to process the data and the processing time.
<br/>
Complexity of an algorithm is analyzed in two perspectives: Time and Space.
                 </li>
                 <li>

                 The term algorithm complexity measures how many steps are required by the algorithm to solve the given problem. It evaluates the order of count of operations executed by an algorithm as a function of input data size.
<br/>
To assess the complexity, the order (approximation) of the count of operation is always considered instead of counting the exact steps.
<br/>
O(f) notation represents the complexity of an algorithm, which is also termed as an Asymptotic notation or "Big O" notation. Here the f corresponds to the function whose size is the same as that of the input data. The complexity of the asymptotic computation O(f) determines in which order the resources such as CPU time, memory, etc. are consumed by the algorithm that is articulated as a function of the size of the input data.
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
                  <h5 className="title">Typical Complexities of an Algorithm</h5>
                  {/* <p className="category">
                    Handcrafted by our friends from{" "}
                    <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
                  </p> */}
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
<ul>
  <li>
    
  Constant Complexity:
It imposes a complexity of O(1). It undergoes an execution of a constant number of steps like 1, 5, 10, etc. for solving a given problem. The count of operations is independent of the input data size.


</li>
<li>
Logarithmic Complexity:
It imposes a complexity of O(log(N)). It undergoes the execution of the order of log(N) steps. To perform operations on N elements, it often takes the logarithmic base as 2.
For N = 1,000,000, an algorithm that has a complexity of O(log(N)) would undergo 20 steps (with a constant precision). Here, the logarithmic base does not hold a necessary consequence for the operation count order, so it is usually omitted.</li>
<li>
Linear Complexity:
It imposes a complexity of O(N). It encompasses the same number of steps as that of the total number of elements to implement an operation on N elements.
For example, if there exist 500 elements, then it will take about 500 steps. Basically, in linear complexity, the number of elements linearly depends on the number of steps. For example, the number of steps for N elements can be N/2 or 3*N.
It also imposes a run time of O(n*log(n)). It undergoes the execution of the order N*log(N) on N number of elements to solve the given problem.
For a given 1000 elements, the linear complexity will execute 10,000 steps for solving a given problem.
</li>
<li>
Quadratic Complexity: It imposes a complexity of O(n2). For N input data size, it undergoes the order of N2 count of operations on N number of elements for solving a given problem.
If N = 100, it will endure 10,000 steps. In other words, whenever the order of operation tends to have a quadratic relation with the input data size, it results in quadratic complexity. For example, for N number of elements, the steps are found to be in the order of 3*N2/2.
Cubic Complexity: It imposes a complexity of O(n3). For N input data size, it executes the order of N3 steps on N elements to solve a given problem.
For example, if there exist 100 elements, it is going to execute 1,000,000 steps.
</li><li>
Exponential Complexity: It imposes a complexity of O(2n), O(N!), O(nk), …. For N elements, it will execute the order of count of operations that is exponentially dependable on the input data size.
For example, if N = 10, then the exponential function 2N will result in 1024. Similarly, if N = 20, it will result in 1048 576, and if N = 100, it will result in a number having 30 digits. The exponential function N! grows even faster; for example, if N = 5 will result in 120. Likewise, if N = 10, it will result in 3,628,800 and so on.
Since the constants do not hold a significant effect on the order of count of operation, so it is better to ignore them. Thus, to consider an algorithm to be linear and equally efficient, it must undergo N, N/2 or 3*N count of operation, respectively, on the same number of elements to solve a particular problem.
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
                  <h5 className="title">Types Of Complexities</h5>
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
                   <strong>   Time Complexity</strong><br/>
It’s a function describing the amount of time required to run an algorithm in terms of the size of the input. "Time" can mean the number of memory accesses performed, the number of comparisons between integers, the number of times some inner loop is executed, or some other natural unit related to the amount of real time the algorithm will take.
</li>           
<br/>           
<li>
              <strong>        Space Complexity</strong><br/>
It’s a function describing the amount of memory an algorithm takes in terms of the size of input to the algorithm. We often speak of "extra" memory needed, not counting the memory needed to store the input itself. Again, we use natural (but fixed-length) units to measure this.

Space complexity is sometimes ignored because the space used is minimal and/or obvious, however sometimes it becomes as important an issue as time.
</li>

                    </ul>
                    </Col>
                    <Col md={4} >
                    <img src="https://i.pinimg.com/474x/54/30/4b/54304beac68bbed7fc5b376dfd8e006a.jpg" style={{width:"300px",height:"300px"}} className="mx-auto my-2"/>
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

    <p>Execution time of an algorithm depends on the instruction set, processor speed, disk I/O speed, etc. Hence, we estimate the efficiency of an algorithm asymptotically.</p>
<p>Time function of an algorithm is represented by <b>T(n)</b>, where <b>n</b> is the input size.</p>
<p>Different types of asymptotic notations are used to represent the complexity of an algorithm. Following asymptotic notations are used to calculate the running time complexity of an algorithm.</p>
<ul className="list">
<li><p><b>O</b> &minus; Big Oh</p></li>
<li><p><b>&Omega;</b> &minus; Big omega</p></li>
<li><p><b>&theta;</b> &minus; Big theta</p></li>
<li><p><b>o</b> &minus; Little Oh</p></li>
<li><p><b>&omega;</b> &minus; Little omega</p></li>
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
                  <h5 className="title">Asymptotic Analysis of algorithms (Growth of function)</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                    <ul>
                      <li>
                      <p>Resources for an algorithm are usually expressed as a function regarding input. Often this function is messy and complicated to work. To study Function growth efficiently, we reduce the function down to the important part.</p>
<div class="codeblock"><pre>
  Let f (n) = an<sup>2</sup>+bn+c
</pre></div>		<br/>
<p>In this function, the n<sup>2</sup> term dominates the function that is when n gets sufficiently large.</p>
<p>Dominate terms are what we are interested in reducing a function, in this; we ignore all constants and coefficient and look at the highest order term concerning n.</p>
                      </li>
                    </ul>
              
<ul>
  <li>
  <h6>Asymptotic notation:</h6>
<p>The word <strong>Asymptotic</strong> means approaching a value or curve arbitrarily closely (i.e., as some sort of limit is taken).</p>
  </li>
  <li>
  <h6 >Asymptotic analysis</h6>
<p>It is a technique of representing limiting behavior. The methodology has the applications across science. It can be used to analyze the performance of an algorithm for some large data set. </p>
<p>1. In computer science in the analysis of algorithms, considering the performance of algorithms when applied to very large input datasets </p>
<p>The simplest example is a function <em>&fnof; (n) = n<sup>2</sup>+3n</em>, the term 3n becomes insignificant compared to <em>n<sup>2</sup></em> when n is very large. The function "<em>&fnof; (n)</em> is said to be <strong>asymptotically equivalent</strong> to <em>n<sup>2</sup></em> as <em>n &rarr; &infin;</em>", and here is written symbolically as <em>&fnof; (n) ~ n<sup>2</sup></em>.</p>
  </li>
  <li>
  <p><strong>Asymptotic notations</strong> are used to write fastest and slowest possible running time for an algorithm. These are also referred to as 'best case' and 'worst case' scenarios respectively. </p>
<p>"In asymptotic notations, we derive the complexity concerning the size of the input. (Example in terms of n)"</p>
<p>"These notations are important because without expanding the cost of running the algorithm, we can estimate the complexity of the algorithms."</p>
  </li>
  <li>
    <h6>Why is Asymptotic Notation Important?</h6>
  <p>1. They give simple characteristics of an algorithm's efficiency.</p>
<p>2. They allow the comparisons of the performances of various algorithms.</p>
<h2 class="h2">Asymptotic Notations: </h2>
<p>Asymptotic Notation is a way of comparing function that ignores constant factors and small input sizes. Three notations are used to calculate the running time complexity of an algorithm:</p>
<p><strong>1. Big-oh notation:</strong> Big-oh is the formal method of expressing the upper bound of an algorithm's running time. It is the measure of the longest amount of time. The function <strong>f (n) = O (g (n))</strong> [read as "f of n is big-oh of g of n"] if and only if exist positive constant c and  such that</p>
<div class="codeblock">
                f (n) &#10877; k.g (n)f(n)&#10877;k.g(n) for n{">"}n0n{">"}n0 in all case 
</div>
<p>Hence, function g (n) is an upper bound for function f (n), as g (n) grows faster than f (n)</p>
  </li>
  <li>
    <img src="https://static.javatpoint.com/tutorial/daa/images/daa-asymptotic-analysis-of-algorithm.png" alt="DAA Asymptotic Analysis of algorithms" className="mx-auto img-fluid"/>
  </li>
  <li>
    <h6>Example</h6>
  <div class="codeblock">
 1. 3n+2=O(n) as 3n+2&le;4n for all n&ge;2
 2. 3n+3=O(n) as 3n+3&le;4n for all n&ge;3
</div>
<p>Hence, the complexity of <strong>f(n)</strong> can be represented as O (g (n))</p>
<p><strong>2. Omega () Notation:</strong> The function f (n) = &#8486; (g (n)) [read as "f of n is omega of g of n"] if and only if there exists positive constant c and n<sub>0</sub> such that </p>
<div class="codeblock"><pre>
F (n) &ge; k* g (n) for all n, n&ge; n<sub>0</sub>
</pre></div>
  </li>
  <li>
  <img className="mx-auto img-fluid" src="https://static.javatpoint.com/tutorial/daa/images/daa-asymptotic-analysis-of-algorithm2.png" alt="DAA Asymptotic Analysis of algorithms"/>
  </li>
  <li>
  <div class="codeblock"><pre>
  f (n) =8n<sup>2</sup>+2n-3&ge;8n<sup>2</sup>-3
        =7n<sup>2</sup>+(n<sup>2</sup>-3)&ge;7n<sup>2</sup> (g(n))
Thus, k<sub>1</sub>=7
</pre></div>
  </li>
  <li>
  <p>Hence, the complexity of <strong>f (n)</strong> can be represented as &#8486; (g (n))</p>
<p><strong>3. Theta (&theta;):</strong> The function f (n) = &theta; (g (n)) [read as "f is the theta of g of n"] if and only if there exists positive constant k<sub>1</sub>, k<sub>2</sub> and k<sub>0</sub> such that</p>
<div class="codeblock"><pre>
  k<sub>1</sub> * g (n) &le; f(n)&le; k<sub>2</sub> g(n)for all n, n&ge; n<sub>0</sub>
</pre></div>
  </li>
  <li>
  <img className="mx-auto img-fluid" src="https://static.javatpoint.com/tutorial/daa/images/daa-asymptotic-analysis-of-algorithm3.png" alt="DAA Asymptotic Analysis of algorithms"/>
  </li>
  <li>
  <div class="codeblock"><pre>
3n+2= &theta; (n) as 3n+2&ge;3n and 3n+2&le; 4n, for n
    k<sub>1</sub>=3,k<sub>2</sub>=4, and n<sub>0</sub>=2
</pre></div>
<p>Hence, the complexity of f (n) can be represented as &theta; (g(n)).</p>
<p>The Theta Notation is more precise than both the big-oh and Omega notation. The function f (n) = &theta; (g (n)) if g(n)  is both an upper and lower bound.</p>
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
Algorithm: Insertion-Sort <br//>
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

export default Asymptotic;
