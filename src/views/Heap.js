import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

const Heap = () => {
    return (
        <>
         <PanelHeader size="sm" />

<div className="content" >
  <Row>
    <Col md={12} >
      <Card style={{ padding: "5px" }}>
        <CardHeader>
          <h2 className="title"> Heap Sort Algorithms</h2>
        </CardHeader>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col md={12} >
      <Card style={{ padding: "5px" }}>
        <CardHeader>
          <h5 className="title">Binary Heap</h5>

        </CardHeader>
        <CardBody className="all-icons" >
          <Row>
       <ol>
       A Binary Heap is a Binary Tree with following properties.
<li>
It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible). This property of Binary Heap makes them suitable to be stored in an array.

    </li>
    <li>
A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to MinHeap.

    </li>
    <li>
    How is Binary Heap represented?<br/>
A Binary Heap is a Complete Binary Tree. A binary heap is typically represented as an array.<br/>

The root element will be at Arr[0].<br/>
Below table shows indexes of other nodes for the ith node, i.e., Arr[i]:<br/>
Arr[(i-1)/2]	Returns the parent node<br/>
Arr[(2*i)+1]	Returns the left child node<br/>
Arr[(2*i)+2]	Returns the right child node<br/>
The traversal method use to achieve Array representation is Level Order
    </li>
    <li>
      <strong> Analysis:</strong>
   <br/> Build max-heap takes O (n) running time. The Heap Sort algorithm makes a call to 'Build Max-Heap' which we take O (n) time & each of the (n-1) calls to Max-heap to fix up a new heap. We know 'Max-Heapify' takes time O (log n)
<br/>
The total running time of Heap-Sort is O (n log n).
    </li>
    <li>
    It is an array object can be viewed as Complete Binary Tree. Each node of the Binary Tree corresponds to an element in an array.Length [A],number of elements in array
Heap-Size[A], number of elements in a heap stored within array A.<br/>
The root of tree A [1] and gives index 'i' of a node that indices of its parents, left child, and the right child can be computed.
<br/>
<code>
PARENT (i)  <br/>
    Return floor (i/2)  <br/>
LEFT (i)  <br/>
    Return 2i  <br/>
RIGHT (i)  <br/>
    Return 2i+1  
    </code>
    </li>
    <li>
      <img src="https://static.javatpoint.com/tutorial/daa/images/daa-binary-heap.png" className="img-fluid mx-auto"/>
    </li>
    
       </ol>
       <ul>
         <li>
         Heap sort is an in-place algorithm.


Time Complexity: Time complexity of heapify is O(Logn). Time complexity of createAndBuildHeap() is O(n) and overall time complexity of Heap Sort is O(nLogn).



         </li>
         <li>
Heap sort algorithm has limited uses because Quicksort and Mergesort are better in practice. Nevertheless, the Heap data structure itself is enormously used.

         </li>
         <li>
         Applications of HeapSort
1. Sort a nearly sorted (or K sorted) array
2. k largest(or smallest) elements in an array
         </li>
         <li>
       <strong>  Max-Heap</strong><br/>
In this heap, the key value of a node is greater than or equal to the key value of the highest child.<br/>
<strong> H[Parent(i)] ≥ H[i]</strong>
         </li>
         <li>
     <strong>    Min-Heap</strong><br/>
In mean-heap, the key value of a node is lesser than or equal to the key value of the lowest child.

<br/><strong>H[Parent(i)] ≤ H[i]</strong>
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
                  <h5 className="title">Array Representation</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                <ul>
                <li>
                  A complete binary tree can be represented by an array, storing its elements using level order traversal.<br/>

Let us consider a heap (as shown below) which will be represented by an array H.<br/>
Considering the starting index as 0, using level order traversal, the elements are being kept in an array


                  </li>
                  <li className="mx-auto">
                    <img src="https://www.tutorialspoint.com/design_and_analysis_of_algorithms/images/array_representation.jpg" className="img-fluid mx-auto" style={{width:"300px",height:"300px"}}/>
                  </li>
                  <br/>
                  <br/>
                
                  <li>
                  To find the index of the parent of an element at index i, this algorithm Parent (numbers[], i) is used.<br/>
                  <code>
                  Algorithm: Parent (numbers[], i) <br/>
if i == 1 <br/>
   return NULL <br/>
else <br/>
   [i / 2]<br/>
                  </code>
                  </li>
                  <li>
                  The index of the left child of an element at index i can be found using the following algorithm, <b><i>Left-Child (numbers[], i).</i></b>
                  <br/>
                  <code>
                  Algorithm: Left-Child (numbers[], i) <br/>
If 2 * i ≤ heapsize <br/>

   return [2 * i] <br/>
else 
   return NULL 
                  </code>
                  </li>
                  <li>
                  <p>The index of the right child of an element at index <b>i</b> can be found using the following algorithm, <b><i>Right-Child(numbers[], i)</i></b>.</p>

  <code>
<b>Algorithm: Right-Child (numbers[], i)</b> <br/>
if 2 * i &lt; heapsize <br/>
   return [2 * i + 1] <br/>
else <br/>
   return NULL <br/>
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
                  <h5 className="title">Insert Method</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                <ul>
                  <li>
                  To insert an element in a heap, the new element is initially appended to the end of the heap as the last element of the array.


                  </li>
                  <li>
After inserting this element, heap property may be violated, hence the heap property is repaired by comparing the added element with its parent and moving the added element up a level, swapping positions with the parent. This process is called percolation up.

                  </li>
                  <li>
The comparison is repeated until the parent is larger than or equal to the percolating element.

                  </li>
                  <li>
                    <code>
                    Algorithm: Max-Heap-Insert (numbers[], key) <br/>
heapsize = heapsize + 1 <br/>
numbers[heapsize] = -∞ <br/>
i = heapsize <br/>
numbers[i] = key <br/>
while i {">"} 1 and numbers[Parent(numbers[], i)] {"<"} numbers[i] <br/>
   exchange(numbers[i], numbers[Parent(numbers[], i)]) <br/>
   i = Parent (numbers[], i) <br/>
                    </code>
                  </li>
                  <br/>
                  <li>
                    
                 <strong> Analysis</strong><br/>
An element is being added at the end of the array. If it violates the heap property, the element is exchanged with its parent. The height of the tree is log n. Maximum log n number of operations needs to be performed.
<br/>
Hence, the complexity of this function is O(log n).
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
                  <h5 className="title">Heapify Method</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                <ul>
                  <li>
                  Heapify method rearranges the elements of an array where the left and right sub-tree of ith element obeys the heap property.
                  </li>
                  <li>
                    <code>
                    Algorithm: Max-Heapify(numbers[], i) <br/>
leftchild := numbers[2i] <br/>
rightchild := numbers [2i + 1] <br/>
if leftchild ≤ numbers[].size and numbers[leftchild] {">"} numbers[i] <br/> 
   largest := leftchild <br/>
else <br/>
   largest := i <br/> 
if rightchild ≤ numbers[].size and numbers[rightchild] {">"} numbers[largest] <br/> 
   largest := rightchild <br/>
if largest ≠ i <br/>
   swap numbers[i] with numbers[largest] <br/> 
   Max-Heapify(numbers, largest) <br/>
                    </code>
                  </li>
                  <li>
                    <img src="https://www.codesdope.com/staticroot/images/algorithm/heapsort2.gif" className="mx-auto img-fluid"/>
                  </li>
                  <br/>
                  <li>
                    <strong>Building a Heap:</strong>
                    <code>
                  BUILDHEAP (array A, int n)<br/>
 1 for i ← n/2 down to 1<br/>
 2 do<br/>
 3 HEAPIFY (A, i, n)<br/>
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
                  <h5 className="title">Extract Method</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                <ul>
                  <li>
                  Extract method is used to extract the root element of a Heap. Following is the algorithm.
                  </li>
                  <li>
                    <code>
                    Algorithm: Heap-Extract-Max (numbers[])  <br/>
max = numbers[1]  <br/>
numbers[1] = numbers[heapsize]  <br/> 
heapsize = heapsize – 1  <br/>
Max-Heapify (numbers[], 1)  <br/>
return max 
                    </code>
                  </li>
                  <li>
                    <strong>HEAP-SORT ALGORITHM:</strong><br/>
                    <code>

                    HEAP-SORT (A)<br/>
 1. BUILD-MAX-HEAP (A)<br/>
 2. For I ← length[A] down to Z<br/>
 3. Do exchange A [1] ←→ A [i]<br/>
 4. Heap-size [A] ← heap-size [A]-1<br/>
 5. MAX-HEAPIFY (A,1)
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

export default Heap
