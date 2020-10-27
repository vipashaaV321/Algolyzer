import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Huffman = () => {
    return (
        <>
        <PanelHeader size="sm" />

<div className="content" >
 <Row>
   <Col md={12} >
     <Card style={{ padding: "5px" }}>
       <CardHeader>
         <h2 className="title"> HuffMan Coding (Greedy Approach)</h2>
       </CardHeader>
     </Card>
   </Col>
 </Row>
 
 <Row>
            <Col md={12} >
              <Card style={{ padding: "5px" }}>
                <CardHeader>
                  <h5 className="title">Huffman Codes</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                     <li>
                       (i) Data can be encoded efficiently using Huffman Codes.

                     </li>
                     <li>
                     (ii) It is a widely used and beneficial technique for compressing data.
(
                     </li>
                     <li>
                     iii) Huffman's greedy algorithm uses a table of the frequencies of occurrences of each character to build up an optimal way of representing each character as a binary string.
                     </li>
                     <li>
Suppose we have 105 characters in a data file. Normal Storage: 8 bits per character (ASCII) - 8 x 105 bits in a file. But we want to compress the file and save it compactly. Suppose only six characters appear in the file:

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
                  <h5 className="title">Introduction</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <ul>
                    <li>
                    Prefix Codes, means the codes (bit sequences) are assigned in such a way that the code assigned to one character is not the prefix of code assigned to any other character. This is how Huffman Coding makes sure that there is no ambiguity when decoding the generated bitstream.
Let us understand prefix codes with a counter example. Let there be four characters a, b, c and d, and their corresponding variable length codes be 00, 01, 0 and 1. This coding leads to ambiguity because code assigned to c is the prefix of codes assigned to a and b. If the compressed bit stream is 0001, the de-compressed output may be “cccd” or “ccb” or “acd” or “ab”.

                    </li>
                    <li>
                    Huffman Coding is generally useful to compress the data in which there are frequently occurring characters.
                    </li>
                    <li>
                      
There are mainly two major parts in Huffman Coding<br/>
1) Build a Huffman Tree from input characters.<br/>
2) Traverse the Huffman Tree and assign codes to characters.


                    </li>
                    <li>
                    Steps to build Huffman Tree<br/>
Input is an array of unique characters along with their frequency of occurrences and output is Huffman Tree.
<ul>
  <li>
    
1. Create a leaf node for each unique character and build a min heap of all leaf nodes (Min Heap is used as a priority queue. The value of frequency field is used to compare two nodes in min heap. Initially, the least frequent character is at root)

  </li>
  <li>
  2. Extract two nodes with the minimum frequency from the min heap.
  </li>
  <li>
    
3. Create a new internal node with a frequency equal to the sum of the two nodes frequencies. Make the first extracted node as its left child and the other extracted node as its right child. Add this node to the min heap.

  </li>
  <li>
    
4. Repeat steps#2 and #3 until the heap contains only one node. The remaining node is the root node and the tree is complete.
  </li>
<li>
<strong>Huffman Coding Complexity</strong><br/>
The time complexity for encoding each unique character based on its frequency is O(nlog n).<br/>

Extracting minimum frequency from the priority queue takes place 2*(n-1) times and its complexity is O(log n). Thus the overall complexity is O(nlog n).
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
                  <h5 className="title">Example</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                    <code>
<ul>
  <li>
  Input:<br/>
A string with different characters, say “ACCEBFFFFAAXXBLKE”

  </li>
  <li>
  Output:
Code for different characters:<br/>
Data: K, Frequency: 1, Code: 0000<br/>
Data: L, Frequency: 1, Code: 0001<br/>
Data: E, Frequency: 2, Code: 001<br/>
Data: F, Frequency: 4, Code: 01<br/>
Data: B, Frequency: 2, Code: 100<br/>
Data: C, Frequency: 2, Code: 101<br/>
Data: X, Frequency: 2, Code: 110<br/>
Data: A, Frequency: 3, Code: 111
  </li>
</ul>
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
                  <h5 className="title">Algorithm</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                    <code>
<ul>
  <li>
  Algorithm<br/>
huffmanCoding(string)



  </li>
  <li>
    
Input: A string with different characters.<br/>

Output: The codes for each individual characters.
  </li>
  <li>
  Begin<br/>
   define a node with character, frequency, left and right child of the node for Huffman tree.<br/>
   create a list ‘freq’ to store frequency of each character, initially, all are 0<br/>
   for each character c in the string do<br/>
      increase the frequency for character ch in freq list.<br/>
   done<br/>

   for all type of character ch do<br/>
      if the frequency of ch is non zero then<br/>
         add ch and its frequency as a node of priority queue Q.<br/>
   done<br/>

   while Q is not empty do<br/>
      remove item from Q and assign it to left child of node<br/>
      remove item from Q and assign to the right child of node<br/>
      traverse the node to find the assigned code<br/>
   done<br/>
End
  </li>
</ul>
<ul>
    <li>
    traverseNode(n: node, code)<br/>

Input: <br/>
The node n of the Huffman tree, and the code assigned from the previous call<br/>

Output: <br/>
Code assigned with each character<br/>

if a left child of node n ≠φ then<br/>
   traverseNode(leftChild(n), code+’0’)<br/>     
   traverseNode(rightChild(n), code+’1’)    <br/>
else<br/>
   display the character and data of current node.
    </li>
</ul>
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
                  <h5 className="title">Example</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <img src="data:image/png;base64,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" className="mx-auto img-fluid"/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
</div>
        </>
    )
}

export default Huffman
