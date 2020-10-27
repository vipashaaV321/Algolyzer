import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const DC = () => {
  return (
    <>
      <PanelHeader size="sm" />

      <div className="content" >
        <Row>
          <Col md={12} >
            <Card style={{ padding: "5px" }}>
              <CardHeader>
                <h2 className="title"> Divide & Conquer Algorithm</h2>
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
                      Many algorithms are recursive in nature to solve a given problem recursively dealing with sub-problems.<br />

In divide and conquer approach, a problem is divided into smaller problems, then the smaller problems are solved independently, and finally the solutions of smaller problems are combined into a solution for the large problem.<br />


                    </li>
                    <li>
                      Generally, divide-and-conquer algorithms have three parts −
                <ul>
                        <li>
                          Divide the problem into a number of sub-problems that are smaller instances of the same problem.
                    </li>
                        <li>
                          Conquer the sub-problems by solving them recursively. If they are small enough, solve the sub-problems as base cases.
                    </li>
                        <li>
                          Combine the solutions to the sub-problems into the solution for the original problem.
                    </li>
                      </ul>
                    </li>
                    <li>

                      There are two fundamental of Divide & Conquer Strategy:<br />
                      <ol>
                        <li>
                          <strong><i> Relational Formula:</i></strong> It is the formula that we generate from the given technique. After generation of Formula we apply D&C Strategy, i.e. we break the problem recursively & solve the broken subproblems.

  </li>
                        <li>
                          <strong><i>Stopping Condition:</i></strong> When we break the problem using Divide & Conquer Strategy, then we need to know that for how much time, we need to apply divide & Conquer. So the condition where the need to stop our recursion steps of D&C is called as Stopping Condition.

  </li>
                      </ol>




                    </li>
                    <li>
                      <img src="https://www.studytonight.com/data-structures/images/divide-conquer.png" className="img-fluid mx-auto" />
                    </li>
                    <br />
                    <li>
                      <strong>Application of Divide and Conquer Approach:</strong><br />
                      <ul>
                        <li>
                          Finding the maximum and minimum of a sequence of numbers
                    </li>
                        <li>
                          Strassen’s matrix multiplication
                    </li>
                        <li>
                          Merge sort
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
                <h4 className="title">
                  Linear Search
          </h4>
              </CardHeader>
              <CardBody className="all-icons" >
                <Row>
                  <ul>
                    <li>
                      A simple approach is to do linear search, i.e

                      Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
                      If x matches with an element, return the index.
                      If x doesn’t match with any of elements, return -1.
  </li>
                    <li>
                      The time complexity of above algorithm is O(n).

                      Linear search is rarely used practically because other search algorithms such as the binary search algorithm and hash tables allow significantly faster searching comparison to Linear search.
  </li>
                    <li>
                      <code>
                        Input : arr[] = [10, 20, 80, 30, 60, 50,
                     110, 100, 130, 170]<br />
          x = 110;<br />
Output : 6<br />
Element x is present at index 6<br />

Input : arr[] = [10, 20, 80, 30, 60, 50,
                     110, 100, 130, 170]<br />
           x = 175;<br />
Output : -1<br />
Element x is not present in arr[].<br />
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
                <h4 className="title">
                  Binary Search
          </h4>
              </CardHeader>
              <CardBody className="all-icons" >
                <Row>
                  <ul>
                    <li>
                      Binary Search: Search a sorted array by repeatedly dividing the search interval in half.<br />
   Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. <br />
   Repeatedly check until the value is found or the interval is empty.<br />
                    </li>
                    <li>
                      The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).
  </li>
                    <li>
                      Linear search runs in O(n) time. Whereas binary search produces the result in O(log n) time<br />

Let T(n) be the number of comparisons in worst-case in an array of n elements.<br />

Hence,

T(n)= 0 if n=1<br />
T(n)=T(n2)+1 otherwise<br />
Using this recurrence relation T(n)=logn.<br />

Therefore, binary search uses O(logn) time.
  </li>
                    <li>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0cdaUewc5MinMP7jR9Y2yPdiMtxXq1VNt7A&usqp=CAU" className="mx-auto img-fluid" height="300" width="270" />
                    </li>
                    <br />
                    <li>

                      <Highlight>


                        int binarySearch<br />
      (int arr[], int l, int r, int x) <br />
                        {"{ "}<br />
    if (r {">"}= l)  {"{ "}<br />
        int mid = l + (r - l) / 2;<br />

        // If the element is present at the middle<br />
        // itself <br />
        if (arr[mid] == x)<br />
            return mid; <br />

        // If element is smaller than mid, then <br />
        // it can only be present in left subarray <br />
        if (arr[mid] {">"} x) <br />
            return binarySearch(arr, l, mid - 1, x);<br />

        // Else the element can only be present <br />
        // in right subarray <br />
        return binarySearch(arr, mid + 1, r, x); <br />
                        {"} "}

    // We reach here when element is not <br />
    // present in array <br />
    return -1; <br />
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
                <h4 className="title">
                  Quick Sort
          </h4>
              </CardHeader>
              <CardBody className="all-icons" >
                <Row>
                  <ul>
                    <li>
                      QuickSort is a Divide and Conquer algorithm.</li>
                    <li>
                      It picks an element as pivot and partitions the given array around the picked pivot.

  </li>
                    <li>
                      There are many different versions of quickSort that pick pivot in different ways.
  </li>
                    <li>
                      Always pick first element as pivot.
</li>
                    <li>
                      Always pick last element as pivot (implemented below)
</li>
                    <li>
                      Pick a random element as pivot.
</li>
                    <li>
                      Pick median as pivot.
</li>
                    <li>
                      The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.<br />
                    </li>
                    <li>
                      Quick sort works by partitioning a given array A[p ... r] into two non-empty sub array A[p ... q] and A[q+1 ... r] such that every key in A[p ... q] is less than or equal to every key in A[q+1 ... r].

</li>
                    <li>
                      Then, the two sub-arrays are sorted by recursive calls to Quick sort. The exact position of the partition depends on the given array and index q is computed as a part of the partitioning procedure.

</li>
                    <li>
                      <strong>
                        Analysis
    </strong><br />
The worst case complexity of Quick-Sort algorithm is O(n2). However using this technique, in average cases generally we get the output in O(n log n) time.
  </li>
                    <br />
                    <li>

                      <Highlight>



                        Algorithm: Quick-Sort (A, p, r) <br />
if p {"<"} r then <br />
   q Partition (A, p, r) <br />
   Quick-Sort (A, p, q) <br />
   Quick-Sort (A, q + r, r) <br />
                      </Highlight>
                    </li>
                    <li>
                      <strong>
                        Partitioning the Array : rearranges the sub-arrays in-place
  </strong>
                      <Highlight>
                        Function: Partition (A, p, r) <br />
x ← A[p] <br />
i ← p-1 <br />
j ← r+1 <br />
while TRUE do <br />
   Repeat j ← j - 1 <br />
   until A[j] ≤ x  <br />
   Repeat i← i+1 <br />
   until A[i] ≥ x  <br />
   if i{"<"} j then  <br />
      exchange A[i] ↔ A[j] <br />
   else  <br />
      return j
  </Highlight>
                    </li>
                    <li>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif" className="mx-auto img-fluid" />
                    </li>
                    <li>
                      <code>
                        arr[] = {10, 80, 30, 90, 40, 50, 70} <br />
Indexes:  0   1   2   3   4   5   6 <br />

low = 0, high =  6, pivot = arr[h] = 70<br />
Initialize index of smaller element, i = -1<br />

Traverse elements from j = low to high-1<br />
j = 0 : Since arr[j] {"<"}= pivot, do i++ and swap(arr[i], arr[j])<br />
i = 0
arr[] = {10, 80, 30, 90, 40, 50, 70} // No change as i and j <br />
                                     // are same<br />

j = 1 : Since arr[j] {">"} pivot, do nothing<br />
// No change in i and arr[]<br />

j = 2 : Since arr[j] {"<"}= pivot, do i++ and swap(arr[i], arr[j])<br />
i = 1<br />
arr[] = {10, 30, 80, 90, 40, 50, 70} // We swap 80 and 30 <br />

j = 3 : Since arr[j] {">"} pivot, do nothing<br />
// No change in i and arr[]<br />

j = 4 : Since arr[j] {"<"}= pivot, do i++ and swap(arr[i], arr[j])<br />
i = 2<br />
arr[] = {10, 30, 40, 90, 80, 50, 70} // 80 and 40 Swapped<br />
j = 5 : Since arr[j] {"<"}= pivot, do i++ and swap arr[i] with arr[j] <br />
i = 3 <br />
arr[] = {10, 30, 40, 50, 80, 90, 70} // 90 and 50 Swapped <br />

We come out of loop because j is now equal to high-1.<br />
Finally we place pivot at correct position by swapping<br />
arr[i+1] and arr[high] (or pivot) <br />
arr[] = {10, 30, 40, 50, 70, 90, 80} // 80 and 70 Swapped <br />

Now 70 is at its correct place. All elements smaller than<br />
70 are before it and all elements greater than 70 are after it. <br />
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
                <h5 className="title">Merge Sort</h5>
              </CardHeader>
              <CardBody className="all-icons" >
                <Row>
                  <ul>
                    <li>
                      Merge Sort works as follows:<br />
                      <ol>
                        <li>
                          Divide: Divide the unsorted list into two sublists of about half the size.

  </li>
                        <li>
                          Conquer: Sort each of the two sublists recursively until we have list sizes of length 1, in which case the list items are returned.

  </li>
                        <li>
                          Combine: Join the two sorted Sub lists back into one sorted list.
  </li>
                      </ol>
The Main purpose is to sort the unsorted list in nondecreasing order.
               </li>
                    <li>
                      Time Complexity: Sorting arrays on different machines. Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation.
<br />T(n) = 2T(n/2) + θ(n)


               </li>
                    <li>

                      The above recurrence can be solved either using Recurrence Tree method or Master method. It falls in case II of Master Method and solution of the recurrence is θ(nLogn). Time complexity of Merge Sort is  θ(nLogn) in all 3 cases (worst, average and best) as merge sort always divides the array into two halves and take linear time to merge two halves.

               </li>
                    <li>
                      Auxiliary Space: O(n)

               </li>
                    <li>
                      Algorithmic Paradigm: Divide and Conquer

               </li>
                    <li>
                      Sorting In Place: No in a typical implementation &
                      Stable: Yes
               </li>
                    <br />
                    <li>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPqEBf9jgK4cVV_T-oWCUGxA4vrddmCky-BA&usqp=CAU" className="img-fluid mx-auto" />
                    </li>
                    <li>
                      <code>
                        Algorithm: Merge-Sort (numbers[], p, r) <br />
if p {"<"} r then  <br />
q = ⌊(p + r) / 2⌋ <br />
Merge-Sort (numbers[], p, q) <br />
    Merge-Sort (numbers[], q + 1, r) <br />
    Merge (numbers[], p, q, r) <br />
                      </code>
                    </li>
                    <li>
                      <code>
                        Function: Merge (numbers[], p, q, r)<br />
n1 = q – p + 1 <br />
n2 = r – q <br />
declare leftnums[1…n1 + 1] and rightnums[1…n2 + 1] temporary arrays <br />
for i = 1 to n1 <br />
   leftnums[i] = numbers[p + i - 1] <br />
for j = 1 to n2 <br />
   rightnums[j] = numbers[q+ j] <br />
leftnums[n1 + 1] = ∞ <br />
rightnums[n2 + 1] = ∞ <br />
i = 1 <br />
j = 1 <br />
for k = p to r <br />
   if leftnums[i] ≤ rightnums[j] <br />
      numbers[k] = leftnums[i] <br />
      i = i + 1 <br />
   else<br />
      numbers[k] = rightnums[j] <br />
      j = j + 1 <br />
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
                  <h5 className="title">Karatsuba algorithm</h5>
                  <h6 className="title">Fast multiplication using Divide and Conquer algorithm</h6>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
   <ul>
     <li>
     Two binary strings that represent value of two integers, find the product of two strings. For example, if the first bit string is “1100” and second bit string is “1010”, output should be 120.
For simplicity, let the length of two strings be same and be n.

     </li>
     <li>
A Naive Approach is to follow the process we study in school. One by one take all bits of second number and multiply it with all bits of first number. Finally add all multiplications. This algorithm takes O(n^2) time.

     </li>
     <li>
     Using Divide and Conquer, we can multiply two integers in less time complexity. We divide the given numbers in two halves. Let the given numbers be X and Y.
     </li>
     <li>
       <img src="https://ds055uzetaobb.cloudfront.net/brioche/uploads/wmNBSCMBA1-multiplying.png?width=2400" className="img-fluid"/>
     </li>
     <li>
     Time Complexity: Time complexity of the above solution is O(nlog23) = O(n1.59).<br/>

Time complexity of multiplication can be further improved using another Divide and Conquer algorithm, fast Fourier transform. We will soon be discussing fast Fourier transform as a separate post.
     </li>
     <li>
 <code>
 Function karatsuba(X, Y){"{"}<br/>
	// base case<br/>
	If (X {"<"} 10 and Y {"<"} 10)<br/>
		return X*Y;<br/>

	// determine the size of numbers<br/>
	size = maximum(Length(string(X)), Length(string(Y)))<br/>


	// Split X and Y<br/>
n = ceil(size/2)<br/>
p = power(10,n) // equivalent to 10n<br/>
a = floor(X/p)<br/>
b = X%p<br/>
c = floor(Y/p)<br/>
d = Y%p<br/>

// Recur until base case<br/>
ac = karatsuba(a,c)<br/>
bd = karatsuba(b,d)<br/>
e = karatsuba(a+c, b+d) - ac - bd<br/>
	
	// Return the Multiplication<br/>
	return power(10,2*n)*ac + power(10,n)*e + b<br/>

{"}"}
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
                  <h5 className="title">Strassen’s Matrix Multiplication</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <ul>
                    <li>
                    Normal Matrix Algorithms take O(n^3) time to execute.. In this context, using Strassen’s Matrix multiplication algorithm, the time consumption can be improved a little bit.
                    </li>
                    <li>
                    Strassen’s Matrix multiplication can be performed only on square matrices where n is a power of 2. Order of both of the matrices are n × n.
                    </li>
                    <li>
                    Divide X, Y and Z into four (n/2)×(n/2) matrices
                    </li>
                    <li>
                    1) Divide matrices A and B in 4 sub-matrices of size N/2 x N/2 as shown in the below diagram.<br/>
2) Calculate following values recursively. ae + bg, af + bh, ce + dg and cf + dh.
                    </li>
                    <li>
                    Time Complexity of Strassen’s Method:<br/>
Addition and Subtraction of two matrices takes O(N2) time. So time complexity can be written as

T(N) = 7T(N/2) +  O(N2)
<br/>
From Master's Theorem, time complexity of above method is 
<strong><i>O(NLog7) which is approximately O(N2.8074)</i></strong>
                    </li>
                    <li>
                    Generally Strassen’s Method is not preferred for practical applications for following reasons.<br/>
1) The constants used in Strassen’s method are high and for a typical application Naive method works better.

                    </li>
                    <li>
                    2) For Sparse matrices, there are better methods especially designed for them.

                    </li>
                    <li>
                    3) The submatrices in recursion take extra space.
                    </li>
                    <li>
4) Because of the limited precision of computer arithmetic on noninteger values,

                    </li>
                    <br/>
                    <li>
                      <img src="data:image/png;base64,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" className="mx-auto img-fluid"/>
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
                  <h5 className="title">Exponentials using Divide & Conquer Approach</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <ul>
                    <li>
                   <strong> Linear Approach:</strong><br/>

The function given in question will take O(n), because the product will happen n times.


                    </li>
                    <li>
                    The result is derived in a linear fashion multiplying a, n times. So Product is computed as

<strong><i>  Prod = a * a * a * … … n-times</i></strong>
                    </li>
                    <li>
                      <code>
                      long power(int a, int n)
    {"{"}
        if(n==0)
            return 1;
        else
            return a * power(a, n-1)
    {"}"}
                      </code>
                    </li>
                    <li>
                      <strong>Divide & Conquer Approach:</strong><br/>
                    If we use the divide & conquer approach the time complexity can be reduced to O(lg(n)). This way we can get the same difference which is there in the linear search and binary search.
                    </li>
                    <li>
              The Divide & Conquer approach square a each time, rather than multiplying it with a itself. i.e If we want to compute 2^8 we actually compute it like <code>  Prod = ( (a ^ 2) ^ 2) ^ 2</code>
              <br/>
              Hence the operation (of square) will be performed only 3 (lg(8)) times and not 8 times.
                    </li>
                    <br/>
                    <li>
                      <Highlight>
                      long power(int a, int n)<br/>
                      {"{"}<br/>
        if(n==0)<br/>
            return 0;<br/>
        if(a == 0)<br/>
            return 0;<br/>
        if(n%2 == 0) /* b is even */<br/>
            return power(a*a, b/2);<br/>
        else<br/>
            return a * power(a*a, b/2);<br/>
            {"}"}
                      </Highlight>
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

export default DC
