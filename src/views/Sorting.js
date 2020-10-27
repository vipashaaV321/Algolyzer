import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col,CardImg } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Sorting = () => {
    return (
       <>
       <PanelHeader size="sm" />

<div className="content" >
  <Row>
    <Col md={12} >
      <Card style={{ padding: "5px" }}>
        <CardHeader>
          <h2 className="title"> Sorting Algorithms</h2>
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
       A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure.
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
          <h5 className="title">Bubble Sort</h5>
         
        </CardHeader>
        <CardBody className="all-icons" >
          <Row>
              <ul>
                  <li>
                  Bubble Sort also known as Exchange Sort, is a simple sorting algorithm. It works by repeatedly stepping throughout the list to be sorted, comparing two items at a time and swapping them if they are in the wrong order. The pass through the list is duplicated until no swaps are desired, which means the list is sorted.
                  </li>
              </ul>
<Col md={6} className="mx-auto ml-auto" style={{padding:"20px"}}> 

<img src="https://www.opentechguides.com/images/howto/howto_5101.png" className="mx-auto"/>

</Col>
<Col md={6}>

<code>
Algorithm: Sequential-Bubble-Sort (A) <br/>
for i← 1 to length [A] do <br/>
for j ← length [A] down-to i +1 do <br/>
   if A[A] {"<"} A[j - 1] then <br/>
      Exchange A[j] ↔ A[j-1]
</code>
<br/>
<strong style={{margin:"10px"}}><u>Code</u></strong><br/>
<p>
  <Highlight>
  voidbubble(int numbers[],intarray_size) <br/>
  {"{"}<br/>
   int i, j, temp{";"}<br/>
   for (i = (array_size - 1); i {">"}= 0; i--){"{"} <br/>
   for (j = 1; j {"<"}= i; j++){"{"} <br/>
      if (numbers[j - 1] {">"} numbers[j]) {"{"} <br/>
         temp = numbers{"[j-1]"}{";"}<br/>
         numbers[j - 1] = numbers[j];<br/> 
         numbers[j] = temp; <br/>
      {"}"} {"}"} {"}"} {"}"}

  </Highlight>
</p>
</Col>
<ul>
    <br/>
    <li>
        
  <h6>  Analysis</h6><br/>
The number of comparisons are<br/></li>

<ul>
    <li>
    1 + 2 + 3 +...+ (n - 1) = n(n - 1)/2 = O(n<sup>2</sup>)<br/>

It shows the n<sup>2</sup> nature of the bubble sort.<br/>

In this algorithm, the number of comparison is irrespective of the data set, i.e. whether the provided input elements are in sorted order or in reverse order or at random.<br/>
    </li>
</ul>

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
          <h5 className="title">Insertion Sort
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
It is a very simple method to sort the number in an increasing or decreasing order.


</li>
<li>
It has various advantages:

</li>
<li>
It is simple to implement.

</li>
<li>
It is efficient on small datasets.

</li>
<li>
It is stable (does not change the relative order of elements with equal keys)

</li>
<li>
It is in-place (only requires a constant amount O (1) of extra memory space).

</li>
<li>
It is an online algorithm, in that it can sort a list as it receives it.
</li>
<li>
If the given numbers are sorted, this algorithm runs in O(n) time. If the given numbers are in reverse order, the algorithm runs in O(n2) time.
</li>



</ul>
<Col md={6}>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png" className="img-fluid mx-auto" style={{height:"300px",width:"300px"}}/>

</Col>
<Col md={6}>
<code style={{fontSize:"22px"}}>
Algorithm: Insertion-Sort(A) <br/>
for j = 2 to A.length <br/>
   key = A[j] <br/>
   i = j – 1 <br/>
   while i {">"} 0 and A[i] {">"} key <br/> 
      A[i + 1] = A[i] <br/>
      i = i -1 <br/>
   A[i + 1] = key <br/>
</code>
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
          <h5 className="title">Radix Sort</h5>
        </CardHeader>
        <CardBody className="all-icons" >
          <Row>
<ul>
<li>

Radix sort is a small method that many people intuitively use when alphabetizing a large list of names. Specifically, the list of names is first sorted according to the first letter of each name, that is, the names are arranged in 26 classes.
</li><li>
Intuitively, one might want to sort numbers on their most significant digit. However, Radix sort works counter-intuitively by sorting on the least significant digits first. On the first pass, all the numbers are sorted on the least significant digit and combined in an array. Then on the second pass, the entire numbers are sorted again on the second least significant digits and combined in an array and so on.
</li>
<li>
  <code>
Algorithm: Radix-Sort (list, n) <br/>
shift = 1  <br/>
for loop = 1 to keysize do  <br/>
   for entry = 1 to n do  <br/>
      bucketnumber = (list[entry].key / shift) mod 10  <br/>
      append (bucket[bucketnumber], list[entry])  <br/>
   list = combinebuckets()  <br/>
   shift = shift * 10  <br/>
   </code>
</li>
<li>
Analysis
<ul>
  <li>
  Each key is looked at once for each digit (or letter if the keys are alphabetic) of the longest key. Hence, if the longest key has m digits and there are n keys, radix sort has order O(m.n).

  </li>
  <li>
  However, if we look at these two values, the size of the keys will be relatively small when compared to the number of keys. For example, if we have six-digit keys, we could have a million different records.

  </li>
  <li>
  Here, we see that the size of the keys is not significant, and this algorithm is of linear complexity O(n).

  </li>

</ul>


</li>
<li>
  Original, unsorted list:
170, 45, 75, 90, 802, 24, 2, 66

Sorting by least significant digit (1s place) gives: 
[*Notice that we keep 802 before 2, because 802 occurred 
before 2 in the original list, and similarly for pairs 
170 & 90 and 45 & 75.]

Sorting by next digit (10s place) gives: 
[*Notice that 802 again comes before 2 as 802 comes before 
2 in the previous list.]

802, 2, 24, 45, 66, 170, 75, 90

Sorting by the most significant digit (100s place) gives:
2, 24, 45, 66, 75, 90, 170, 802
  </li>
<br/>
</ul>
<img src="https://www.codingeek.com/wp-content/uploads/2017/02/radix.png" className="img-fluid mx-auto" style={{width:"100%",height:"350px"}}/>

          </Row>
        </CardBody>
      </Card>
    </Col>
  </Row>
 
   <Row>
    <Col md={12} >
      <Card style={{ padding: "5px" }}>
        <CardHeader>
          <h5 className="title">
Counting Sort</h5>
        </CardHeader>
        <CardBody className="all-icons" >
          <Row>
        <ul>
          <li>
          It is a linear time sorting algorithm which works faster by not making a comparison. It assumes that the number to be sorted is in range 1 to k where k is small
          </li>
          <li>
          Basic idea is to determine the "rank" of each number in the final sorted array.
<ul>
Counting Sort uses three arrays:

  <li>
  A [1, n] holds initial input.

  </li>
  <li>
  B [1, n] holds sorted output.

  </li>
  <li>
  C [1, k] is the array of integer. C [x] is the rank of x in A where x ∈ [1, k]
  </li>
</ul>

          </li>
          <li>
          Firstly C [x] to be a number of elements of A [j] that is equal to x

<li>
  
Initialize C to zero

</li>
<li>
For each j from 1 to n increment C [A[j]] by 1

</li>
<li>
We set B[C [x]] =A[j]


</li>
<li>
If there are duplicates, we decrement C [i] after copying.
</li>
<li>
  <img src="https://4.bp.blogspot.com/-Vc4N7rlZ7xI/VR6h5JWeqyI/AAAAAAAAEPo/PTotACjg398/s1600/Counting%2BSort%2BAlgorithm.gif" className="mx-auto img-fluid"/>
</li>
<li>
<code>
For simplicity, consider the data in the range 0 to 9. <br/>
Input data: 1, 4, 1, 2, 7, 5, 2<br/>
  1) Take a count array to store the count of each unique object.<br/>
  Index:     0  1  2  3  4  5  6  7  8  9<br/>
  Count:     0  2  2  0   1  1  0  1  0  0<br/>

  2) Modify the count array such that each element at each index <br/>
  stores the sum of previous counts. <br/>
  Index:     0  1  2  3  4  5  6  7  8  9<br/>
  Count:     0  2  4  4  5  6  6  7  7  7<br/>

The modified count array indicates the position of each object in 
the output sequence.<br/>
 
  3) Output each object from the input sequence followed by 
  decreasing its count by 1.<br/>
  Process the input data: 1, 4, 1, 2, 7, 5, 2. Position of 1 is 2.<br/>
  Put data 1 at index 2 in output. Decrease count by 1 to place <br/>
  next data 1 at an index 1 smaller than this index.<br/>
</code>
</li>
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
          <h5 className="title">Bucket Sort</h5>
        </CardHeader>
        <CardBody className="all-icons" >
          <Row>
<ul>
  <li>
  Bucket Sort runs in linear time on average. Like Counting Sort, bucket Sort is fast because it considers something about the input. Bucket Sort considers that the input is generated by a random process that distributes elements uniformly over the intervalμ=[0,1].


  </li>
  <li>
  To sort n input numbers, Bucket Sort
    <ul>
      <li>
      Partition μ into n non-overlapping intervals called buckets.

      </li>
      <li>
      Puts each input number into its buckets

      </li>
      <li>
      Sort each bucket using a simple algorithm, e.g. Insertion Sort and then

      </li>
      <li>
      Concatenates the sorted lists.
      </li>
    </ul>
  </li>
  <li>
    Bucket Sort considers that the input is an n element array A and that each element A [i] in the array satisfies 0≤A [i] {"<"} 1. The code depends upon an auxiliary array B [0....n-1] of linked lists (buckets) and considers that there is a mechanism for maintaining such lists.
  </li>
  <li>
    <code>
    BUCKET-SORT (A)<br/>
 1. n ← length [A]<br/>
 2. for i ← 1 to n<br/>
 3. do insert A [i] into list B [n A[i]]<br/>
 4. for i ← 0 to n-1<br/>
 5. do sort list B [i] with insertion sort.<br/>
 6. Concatenate the lists B [0], B [1] ...B [n-1] together in order.<br/>
    </code>
  </li>
  <li>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/BucketSort.png" className="mx-auto img-fluid"/>
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
          <h5 className="title">Selection Sort</h5>
        </CardHeader>
        <CardBody className="all-icons" >
          <Row>
          <ul>
            <li>
            Selection Sort works by repeatedly sorting elements. It works as follows: first find the smallest in the array and exchange it with the element in the first position, then find the second smallest element and exchange it with the element in the second position, and continue in this way until the entire array is sorted.</li>
            <li>
            Selection sort is among the simplest of sorting techniques and it works very well for small files. It has a quite important application as each item is actually moved at the most once.
            </li>
            <li>
Section sort is a method of choice for sorting files with very large objects (records) and small keys. The worst case occurs if the array is already sorted in a descending order and we want to sort them in an ascending order.
</li><li>
Nonetheless, the time required by selection sort algorithm is not very sensitive to the original order of the array to be sorted: the test if A[j] {"<"} min x is executed exactly the same number of times in every case.
</li><li>
Selection sort spends most of its time trying to find the minimum element in the unsorted part of the array. It clearly shows the similarity between Selection sort and Bubble sort.
</li><li>
Bubble sort selects the maximum remaining elements at each stage, but wastes some effort imparting some order to an unsorted part of the array.
</li><li>
Selection sort is quadratic in both the worst and the average case, and requires no extra memory.
</li>
<li>
(n − 1) + (n − 2) + ...+ 2 + 1 = n(n − 1)/2 comparisons.
</li><li>
These observations hold, no matter what the input data is.
</li><li>
In the worst case, this could be quadratic, but in the average case, this quantity is O(n log n). It implies that the running time of Selection sort is quite insensitive to the input.
        </li>
        <li>
     <img src="https://i.pinimg.com/564x/79/7b/c7/797bc798ab6de4545ae7a013abe28117.jpg" className="img-fluid" style={{width:"300px",height:"auto"}}/>

       </li>   
<li>
  <code>
  Algorithm: Selection-Sort (A) <br/>
fori ← 1 to n-1 do <br/>
   min j ← i; <br/>
   min x ← A[i] <br/>
   for j ←i + 1 to n do <br/> 
      if A[j] {"<"} min x then <br/> 
         min j ← j <br/>
         min x ← A[j] <br/>
   A[min j] ← A [i] <br/>
   A[i] ← min x <br/>
  </code>
</li>
<li>
  <Highlight>
  Void Selection(int numbers[],int array_size)<br/>
  {"{"}<br/>
   int i, j; <br/>
   int min, temp;  <br/>
   for(i = 0; I {"<"}array_size-1; i++)
   <br/> {"{"}<br/>
      min = i; <br/>
      for (j = i+1; j {"<"} array_size; j++) <br/>
         if (numbers[j] {"<"} numbers[min]) <br/>
            min = j; <br/>
      temp = numbers[i]; <br/>
      numbers[i] = numbers[min]; <br/>
      numbers[min] = temp; <br/>
      {"}"}
      {"}"}
  </Highlight>
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
          <h5 className="title">Linear Time Sorting</h5>
        </CardHeader>
        <CardBody className="all-icons" >
          <Row>
         <ul>
           <li>
           We have sorting algorithms that can sort "n" numbers in O (n log n) time.


           </li>
           <li>
           Merge Sort and Heap Sort achieve this upper bound in the worst case, and Quick Sort achieves this on Average Case.

           </li>
           <li> 
           Merge Sort, Quick Sort and Heap Sort algorithm share an interesting property: the sorted order they determined is based only on comparisons between the input elements. We call such a sorting algorithm "Comparison Sort".

           </li>
           <li>
           There is some algorithm that runs faster and takes linear time such as Counting Sort, Radix Sort, and Bucket Sort but they require the special assumption about the input sequence to sort.
           </li>
           <li>
           Counting Sort and Radix Sort assumes that the input consists of an integer in a small range. Bucket Sort assumes that a random process that distributes elements uniformly over the interval generates the input.
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
          <h5 className="title">Shell Sort</h5>
        </CardHeader>
        <CardBody className="all-icons" >
          <Row>
<ul>
  <li>
  ShellSort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of shellSort is to allow exchange of far items. In shellSort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element is sorted.
  </li>
  <li>
    <strong>algorithm for shell sort.</strong><br/>
  Step 1 − Initialize the value of h<br/>
Step 2 − Divide the list into smaller sub-list of equal interval h<br/>
Step 3 − Sort these sub-lists using insertion sort<br/>
Step 3 − Repeat until complete list is sorted<br/>
  </li>
  <li>
    <img src="https://i.stack.imgur.com/WTd9p.jpg" className="mx-auto img-fluid" />
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

export default Sorting
