import React from 'react'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const StringA = () => {
    return (
        <>
        <PanelHeader size="sm" />

<div className="content" >
 <Row>
   <Col md={12} >
     <Card style={{ padding: "5px" }}>
       <CardHeader>
         <h2 className="title"> String Matching Algorithms</h2>
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
                       String Matching Algorithm is also called "String Searching Algorithm." This is a vital class of string algorithm is declared as "this is the method to find a place where one is several strings are found within the larger string.
                       </li>
                       <li>
                       Given a text array, T [1.....n], of n character and a pattern array, P [1......m], of m characters. The problems are to find an integer s, called valid shift where 0 ≤ s {"<"} n-m and T [s+1......s+m] = P [1......m]. In other words, to find even if P in T, i.e., where P is a substring of T. The item of P and T are character drawn from some finite alphabet such as {"{0, 1} or {A, B .....Z, a, b..... z}.Given a string T [1......n], "} the substrings are represented as T [i......j] for some 0≤i ≤ j≤n-1, the string formed by the characters in T from index i to index j, inclusive. This process that a string is a substring of itself (take i = 0 and j =m).
                       </li>
                       <li>
                       The proper substring of string T [1......n] is T [1......j] for some {" 0<i ≤ j≤n-1. That is, we must have either i>0 or j < m-1."}
                       </li>
                       <li>
                           <ul>
                               <li>
                               Algorithms used for String Matching:<br/>
There are different types of method is used to finding the string


                               </li>
                               <li>
                               The Naive String Matching Algorithm

                               </li>
                               <li>
                               The Rabin-Karp-Algorithm

                               </li>
                               <li>
                               Finite Automata

                               </li>
                               <li>
                                   
                               The Knuth-Morris-Pratt Algorithm
                               </li>
                               <li>
                               The Boyer-Moore Algorithm
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
                  <h5 className="title">The Naive String Matching Algorithm</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       The naïve approach tests all the possible placement of Pattern P [1.......m] relative to text T [1......n]. We try shift s = 0, 1.......n-m, successively and for each shift s. Compare T [s+1.......s+m] to P [1......m].

                       </li>
                       <li>
The naïve algorithm finds all valid shifts using a loop that checks the condition P [1.......m] = T [s+1.......s+m] for each of the n - m +1 possible value of s.
                       </li>
                       <li>
                           <code>
                           NAIVE-STRING-MATCHER (T, P)<br/>
 1. n ← length [T]<br/>
 2. m ← length [P]<br/>
 3. for s ← 0 to n -m<br/>
 4. do if P [1.....m] = T [s + 1....s + m]<br/>
 5. then print "Pattern occurs with shift" s
                           </code>
                       </li>
                       <li>
                       Input:  txt[] = "THIS IS A TEST TEXT"<br/>
        pat[] = "TEST"<br/>
Output: Pattern found at index 10<br/>

Input:  txt[] =  "AABAACAADAABAABA"<br/>
        pat[] =  "AABA"<br/>
Output: Pattern found at index 0<br/>
        Pattern found at index 9<br/>
        Pattern found at index 12
                       </li>
                       <li>
                       The best case occurs when the first character of the pattern is not present in text at all.


txt[] = "AABCCAADDEE"; 
pat[] = "FAA";
The number of comparisons in best case is O(n).
                       </li>
                       <li>
                       The worst case of Naive Pattern Searching occurs in following scenarios.
1) When all characters of the text and pattern are same.

txt[] = "AAAAAAAAAAAAAAAAAA"; 
pat[] = "AAAAA";
                       </li>
                       <li>
                       Worst case also occurs when only the last character is different.

txt[] = "AAAAAAAAAAAAAAAAAB"; 
pat[] = "AAAAB";
                       </li>
                       <li>
                       The number of comparisons in the worst case is O(m*(n-m+1)). Although strings which have repeated characters are not likely to appear in English text, they may well occur in other applications (for example, in binary texts). The KMP matching algorithm improves the worst case to O(n).
                       </li>
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
                  <h5 className="title">Robin-Karp Algorithm</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       The Rabin-Karp string matching algorithm calculates a hash value for the pattern, as well as for each M-character subsequences of text to be compared. If the hash values are unequal, the algorithm will determine the hash value for next M-character sequence. 
                       </li>
                       <li>
                       If the hash values are equal, the algorithm will analyze the pattern and the M-character sequence. In this way, there is only one comparison per text subsequence, and character matching is only required when the hash values match.

                       </li>
                       <li>
                       Rabin Karp algorithm needs to calculate hash values for following strings.<br/>
1) Pattern itself. <br/>
2) All the substrings of the text of length m. 
                       </li>
                       <li>
                       we need to efficiently calculate hash values for all the substrings of size m of text, we must have a hash function which has the following property. <br/>
Hash at the next shift must be efficiently computable from the current hash value and next character in text or we can say hash(txt[s+1 .. s+m]) must be efficiently computable from hash(txt[s .. s+m-1]) and txt[s+m] i.e., hash(txt[s+1 .. s+m])= rehash(txt[s+m], hash(txt[s .. s+m-1])) and rehash must be O(1) operation.
<br/>The hash function suggested by Rabin and Karp calculates an integer value. The integer value for a string is the numeric value of a string. 
                       </li>
                       <li>
                       hash( txt[s+1 .. s+m] ) = ( d ( hash( txt[s .. s+m-1]) – txt[s]*h ) + txt[s + m] ) mod q <br/>
hash( txt[s .. s+m-1] ) : Hash value at shift s. <br/>
hash( txt[s+1 .. s+m] ) : Hash value at next shift (or shift s+1) <br/>
d: Number of characters in the alphabet <br/>
q: A prime number <br/>
h: d^(m-1)
                       </li>
                       <li>
                       Time Complexity:<br/>
The average and best-case running time of the Rabin-Karp algorithm is O(n+m), but its worst-case time is O(nm).<br/>
 Worst case of Rabin-Karp algorithm occurs when all characters of pattern and text are same as the hash values of all the substrings of txt[] match with hash value of pat[]. For example pat[] = “AAA” and txt[] = “AAAAAAA”.
                       </li>
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
                  <h5 className="title">
String Matching with Finite Automata</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                  <ul class="points">
                  A finite automaton <strong>M</strong> is a 5-tuple <strong>(Q, q<sub>0</sub>,A,&#8721;<sub>&delta;</sub>)</strong>, where
<li>Q is a finite set of <strong>states</strong>,</li>
<li>q<sub>0</sub> &#8712; Q is the <strong>start state</strong>,</li>
<li>A &#8838; Q is a notable set of <strong>accepting states</strong>,</li>
<li>&#8721; is a <strong>finite input alphabet</strong>,</li>
<li>&delta; is a function from <strong>Q x &#8721;</strong> into <strong>Q</strong> called the <strong>transition function</strong> of <strong>M</strong>.</li>
<li>The finite automaton starts in state <strong>q<sub>0</sub></strong> and reads the characters of its input string one at a time. If the automaton is in state q and reads input character a, it moves from state q to state &delta; (q, a). Whenever its current state q is a member of A, the machine M has accepted the string read so far. An input that is not allowed is <strong>rejected</strong>.
A finite automaton M induces a function &#8709; called the called the <strong>final-state function</strong>, from &#8721;* to Q such that &#8709;(w) is the state M ends up in after scanning the string w. Thus, M accepts a string w if and only if &#8709;(w) &#8712; A.</li>
<li>
The function f is defined as<br/>
<pre>
&#8709; (&#8712;)=q<sub>0</sub><br/>
&#8709; (wa) = &delta; ((&#8709; (w), a) for w &#8712; &#8721;*,a&#8712; &#8721;)
</pre>
</li>
<li>
The primary loop structure of FINITE- AUTOMATON-MATCHER implies that its running time on a text string of length n is O (n).
</li>
<li>
    <img src="data:image/png;base64,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" className="mx-auto img-fluid"/>
</li>
<li>
Simulating this on the string "banananona", we get the sequence of states empty, empty, empty, "n", "na", "nan", "na", "nan", "nano", "nano", "nano". Since we end in state "nano", this string contains "nano" in it somewhere. By paying more careful attention to when we first entered state "nano", we can tell exactly where it occurs; it is also possible to modify the machine slightly and find all occurrences of the substring rather than just the first occurrence.
</li>
<li>
This Algorithm that takes something like O(m^3 + n) time: O(m^3) to build the state table described above, and O(n) to simulate it on the input file. There are two tricky points to the KMP algorithm. First, it uses an alternate representation of the state table which takes only O(m) space (the one above could take O(m^2)). And second, it uses a complicated loop to build the whole thing in O(m) time. 
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
                  <h5 className="title">The Knuth-Morris-Pratt (KMP)Algorithm</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       Knuth-Morris and Pratt introduce a linear time algorithm for the string matching problem. A matching time of O (n) is achieved by avoiding comparison with an element of 'S' that have previously been involved in comparison with some element of the pattern 'p' to be matched. i.e., backtracking on the string 'S' never occurs
                       </li>
                       <li>
                       Knuth Morris Pratt (KMP) is an algorithm, which checks the characters from left to right. When a pattern has a sub-pattern appears more than one in the sub-pattern, it uses that property to improve the time complexity, also for in the worst case.
<br/>
The time complexity of KMP is O(n).
                       </li>
                       <li>
                       Components of KMP Algorithm:<br/>
                       <ul>
                           <li>
                           1. The Prefix Function (Π): The Prefix Function, Π for a pattern encapsulates knowledge about how the pattern matches against the shift of itself. This information can be used to avoid a useless shift of the pattern 'p.' In other words, this enables avoiding backtracking of the string 'S.'

                           </li>
                           <li>
                           2. The KMP Matcher: With string 'S,' pattern 'p' and prefix function 'Π' as inputs, find the occurrence of 'p' in 'S' and returns the number of shifts of 'p' after which occurrences are found.

                           </li>
                       </ul>

                       </li>
                       <li>
                       The Prefix Function (Π)<br/>
Following pseudo code compute the prefix function, Π:<br/>

<code>
COMPUTE- PREFIX- FUNCTION (P)<br/>
 1. m ←length [P]		<br/>
 2. Π [1] ← 0<br/>
 3. k ← 0<br/>
 4. for q ← 2 to m<br/>
 5. do while k {">"} 0 and P [k + 1] ≠ P [q]<br/>
 6. do k ← Π [k]<br/>
 7. If P [k + 1] = P [q]<br/>
 8. then k← k + 1<br/>
 9. Π [q] ← k<br/>
 10. Return Π<br/>
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

export default StringA
