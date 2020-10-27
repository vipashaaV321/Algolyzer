import React from 'react'

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, CardImg, Table, } from "reactstrap";
import Highlight from 'react-highlight'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const Greedy = () => {
    return (
        <>
            <PanelHeader size="sm" />

            <div className="content" >
                <Row>
                    <Col md={12} >
                        <Card style={{ padding: "5px" }}>
                            <CardHeader>
                                <h2 className="title">Greedy Algorithm </h2>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} >
                        <Card style={{ padding: "5px" }}>
                            <CardHeader>
                                <h5 className="title">
                                    Greedy Algorithm Introduction
                  </h5>
                            </CardHeader>
                            <CardBody className="all-icons" >
                                <Row>
                                    <ul>
                                        <li>
                                            Among all the algorithmic approaches, the simplest and straightforward approach is the Greedy method. In this approach, the decision is taken on the basis of current available information without worrying about the effect of the current decision in future.
                       </li>
                                        <li>
                                            In this method, we have to find out the best method/option out of many present ways.<br />

In this approach/method we focus on the first stage and decide the output, don't think about the future.
                       </li>
                                        <li>
                                            Greedy algorithms build a solution part by part, choosing the next part in such a way, that it gives an immediate benefit. This approach never reconsiders the choices taken previously. This approach is mainly used to solve optimization problems. Greedy method is easy to implement and quite efficient in most of the cases.
                       </li>
                                        <li>
                                            greedy algorithm may provide a solution that is close to optimal. A greedy algorithm works if a problem exhibits the following two properties:
                       <ol>
                                                <li>
                                                    Greedy Choice Property: A globally optimal solution can be reached at by creating a locally optimal solution. In other words, an optimal solution can be obtained by creating "greedy" choices.
                           </li>
                                                <li>
                                                    Optimal substructure: Optimal solutions contain optimal subsolutions. In other words, answers to subproblems of an optimal solution are optimal.

                           </li>
                                            </ol>
                                        </li>
                                        <li>
                                            Components of Greedy Algorithm<br />
                                            <ol>
                                                <li>
                                                    A candidate set − A solution is created from this set.
                               </li>
                                                <li>
                                                    A selection function − Used to choose the best candidate to be added to the solution.
                               </li>
                                                <li>

                                                    A feasibility function − Used to determine whether a candidate can be used to contribute to the solution.
                               </li>
                                                <li>
                                                    An objective function − Used to assign a value to a solution or a partial solution.
                               </li>
                                                <li>

                                                    A solution function − Used to indicate whether a complete solution has been reached.
                               </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <strong>Steps for achieving a Greedy Algorithm are:</strong><br />
                       Feasible: Here we check whether it satisfies all possible constraints or not, to obtain at least one solution to our problems.<br />
Local Optimal Choice: In this, the choice should be the optimum which is selected from the currently available<br />
Unalterable: Once the decision is made, at any subsequence step that option is not altered.<br />
                                        </li>
                                    </ul>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>

                    <Col xs={12}>
                        <Card className="" style={{ padding: "5px" }}>
                            <CardHeader>
                                <h5 className="title">
                                    Differentiate between Dynamic Programming and Greedy Method
                </h5>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    {/* <thead className="text-primary"> */}
                                    <tr>
                                        <td>
                                            <h5 className="title">
                                                Dynamic Programming
                       </h5>
                                        </td>
                                        <td>
                                            <h5 className="title">
                                                Greedy Method
                       </h5>
                                        </td>
                                    </tr>
                                    {/* </thead>
                    <tbody> */}

                                    <tr>
                                        <td>
                                            Dynamic Programming is used to obtain the optimal solution.
                            </td>
                                        <td>
                                            Greedy Method is also used to get the optimal solution
                            </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            In Dynamic Programming, we choose at each step, but the choice may depend on the solution to sub-problems.
                              </td>
                                        <td>
                                            In a greedy Algorithm, we make whatever choice seems best at the moment and then solve the sub-problems arising after the choice is made.
                              </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Less efficient as compared to a greedy approach
                              </td>
                                        <td>
                                            More efficient as compared to a greedy approach
                              </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            It is guaranteed that Dynamic Programming will generate an optimal solution using Principle of Optimality.
                              </td>
                                        <td>
                                            In Greedy Method, there is no such guarantee of getting Optimal Solution.
                              </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Example: 0/1 Knapsack
                              </td>
                                        <td>
                                            Example: Fractional Knapsack
                              </td>
                                    </tr>
                                    {/* </tbody> */}
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} >
                        <Card style={{ padding: "5px" }}>
                            <CardHeader>
                                <h5 className="title">Making Change Problem</h5>
                            </CardHeader>
                            <CardBody className="all-icons" >
                                <Row>
                                    <ul>
                                        <li>
                                            Making Change problem is used to minimum number of coins (of certain denominations) that add up to a given amount of money(Total money).
                       </li>
                                        <li>
                                            For some type of coin system a greedy approach works. The values of coins will be like {1, 5, 10, 25, 50}.
                       </li>
                                        <li>
                                            In our algorithm we always choose the biggest denomination, subtract the all possible values and going to the next denomination.<br />
so,we will use greedy algorithm to give the least amount of coins.<br />
suppose a customer wants change of 41 Rs
                       </li>
                                        <li>
                                            41–25=16 {"->"}  [25] so,take coin of 25.<br />
16–10=6 {"->"} [25][10]<br />
6–5=1 {"->"} [25][10][5]<br />
1–1=0 {"->"} [25][10][5][1]<br />
so here,is the optimal solution of 41 Rs change is 25,10,5,1=41 Rs.
                       </li>
                                        <li>
                                            But always That is not the case.<br />
Ex:-2<br />
The values of coins will be like {4, 10, 25}.<br />
41–25=16 {"=>"}[25]<br />
16–10=6 {"=>"}[25][10]<br />
6–4=2 {"=>"}[25][10][4]<br />
2- ??<br />
so here is the problem,or error message.<br />
So here is the optimal solution is [25][4][4][4][4] =41 Rs.
                       </li>
                                        <br />
                                        <li>
                                            Algorithm<br />
                                            <code>
                                                <ol>
                                                    <li>
                                                        Sort the array of coins in decreasing order.

                               </li>
                                                    <li>
                                                        Initialize result as empty.

                               </li>
                                                    <li>
                                                        Find the largest denomination that is smaller than current amount.

                               </li>
                                                    <li>
                                                        Add found denomination to result. Subtract value of found denomination from amount.

                               </li>
                                                    <li>
                                                        If amount becomes 0, then print result.

                               </li>
                                                    <li>
                                                        Else repeat steps 3 and 4 for new value of V.
                               </li>
                                                </ol>
                                            </code>
                                        </li>
                                        <br />
                                        <li>
                                            <Highlight>
                                                int coins[COINS] = <br />
                                                {"{"} 1, 2, 5, 10, 20,
  50, 100, 200, 2000 {"}"}; <br />

void findMin(int cost) <br />
                                                {"{"}
    int coinList[MAX] = {"{"} 0 {"}"}; <br />
    int i, k = 0; <br />

    for (i = COINS - 1; i {">"}= 0; i--) {"{ "}<br />
        while (cost {">"}= coins[i]) {"{ "}<br />
            cost -= coins[i]; <br />
            coinList[k++] = coins[i];<br />
                                                {"}"} <br />
                                                {"}"}

    for (i = 0; i {"<"} k; i++) {"{ "}<br />
        printf("%d ", coinList[i]); <br />
                                                {"}"} <br />
    return; <br />
                                                {"}"} <br />
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
                                <h5 className="title">An Activity Selection Problem</h5>
                            </CardHeader>
                            <CardBody className="all-icons" >
                                <Row>
                                    <ul>
                                        <li>
                                            The activity selection problem is a mathematical optimization problem. Our first illustration is the problem of scheduling a resource among several challenge activities. We find a greedy algorithm provides a well designed and simple method for selecting a maximum- size set of manually compatible activities.
                       </li>
                                        <li>
                                            Suppose S = {"{"}1, 2....n{"}"} is the set of n proposed activities. The activities share resources which can be used by only one activity at a time, e.g., Tennis Court, Lecture Hall, etc. Each Activity "i" has start time si and a finish time fi, where si ≤fi.<br />
                        If selected activity "i" take place meanwhile the half-open time interval [si,fi).<br />
                         Activities i and j are compatible if the intervals (si, fi) and [si, fi) do not overlap (i.e. i and j are compatible if si ≥fi or si ≥fi). <br />
                         The activity-selection problem chosen the maximum- size set of mutually consistent activities.<br />
                                        </li>
                                        <li>
                                            <code>
                                                GREEDY- ACTIVITY SELECTOR (s, f)<br />
1. n ← length [s]<br />
2. A ← {"{1}"}<br />
3. j ← 1.<br />
4. for i ← 2 to n<br />
5. do if si ≥ fi<br />
6. then A ← A ∪ {"{i}"}<br />
7. j ← i<br />
8. return A<br />
                                            </code>
                                        </li>
                                        <li>
                                            <strong>
                                                Example 1 :

                           </strong><br />
                       Consider the following 3 activities sorted by
by finish time.<br />
     start[]  =  {"{10, 12, 20}"};<br />
     finish[] =  {"{20, 25, 30}"};<br />
A person can perform at most two activities. The <br />
maximum set of activities that can be executed
is {"{0, 2}"}  [ These are indexes in start[] and
finish[] ]
                       </li>
                       <li>
                           <strong>
                       Example 2 : 
<br/>
                           </strong>
                       Consider the following 6 activities 
sorted by by finish time.<br/>
     start[]  = {"{1, 3, 0, 5, 8, 5}"} ;<br/>
     finish[] = {"{2, 4, 6, 7, 9, 9}"} ;<br/>
A person can perform at most four activities. The 
maximum set of activities that can be executed 
is {"{0, 1, 3, 4}"} <br/>
 [ These are indexes in start[] and 
finish[] ]
                       </li>
                       <li>
                       1) Sort the activities according to their finishing time<br/>
2) Select the first activity from the sorted array and print it.<br/>
3) Do following for remaining activities in the sorted array.
 If the start time of this activity is greater than or equal to the finish time of previously selected activity then select this activity and print it.
                       </li>
                       <li>
                           <strong>Time Complexity :</strong> <br/>
                        It takes O(n log n) time if input activities may not be sorted. It takes O(n) time when it is given that input activities are always sorted.
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
                  <h5 className="title">Activity or Task Scheduling Problem</h5>
                </CardHeader>
                <CardBody className="all-icons" >
                  <Row>
                   <ul>
                       <li>
                       This is the dispute of optimally scheduling unit-time tasks on a single processor, where each job has a deadline and a penalty that necessary be paid if the deadline is missed.
                       </li>
                       <li>
                       A unit-time task is a job, such as a program to be rush on a computer that needed precisely one unit of time to complete.
                       </li>
                       <li>
                       Given a finite set S of unit-time tasks, a schedule for S is a permutation of S specifying the order in which to perform these tasks. The first task in the schedule starts at time 0 and ends at time 1; the second task begins at time 1 and finishes at time 2, and so on.
                       </li>
                       <li>
                       The dispute of scheduling unit-time tasks with deadlines and penalties for each processor has the following inputs:
                       <ul>
                           <li>
                           a set S = {"{"}1, 2, 3.....n{"}"} of n unit-time tasks.<br/>
a set of n integer deadlines d1 d2 d3...dn such that di satisfies 1≤ di ≤ n and task i is supposed to finish by time di and<br/>
a set of n non-negative weights or penalties w1 w2....wn such that we incur a penalty of wi if task i is not finished by time di, and we incurred no penalty if a task finishes by its deadline.
                           </li>
                       </ul>
                       </li>
                       <li>
                       A task is late in this schedule if it finished after its deadline. Otherwise, the task is early in the schedule. An arbitrary schedule can consistently be put into early-first form, in which the first tasks precede the late tasks, i.e., if some new task x follows some late task y, then we can switch the position of x and y without affecting x being early or y being late.


                       </li>
                       <li>
                       An arbitrary schedule can always be put into a canonical form in which first tasks precede the late tasks, and first tasks are scheduled in order of nondecreasing deadlines.


                       </li>
                       <li>
                       A set A of tasks is independent if there exists a schedule for the particular tasks such that no tasks are late. So the set of first tasks for a schedule forms an independent set of tasks 'l' denote the set of all independent set of tasks.

                       </li>
                       <li>
For any set of tasks A, A is independent if for t = 0, 1, 2.....n we have Nt(A) ≤ t where Nt(A) denotes the number of tasks in A whose deadline is t or prior, i.e. if the tasks in A are expected in order of monotonically growing deadlines, then no task is late.

                       </li>
                       <li>
                           <img src="https://iq.opengenus.org/content/images/2019/03/Example2-2.png" className="img-fluid mx-auto"/>
                       </li>
                       <li>
                           <code>
                           Activity-Selection(Activity, start, finish)<br/>
     Sort Activity by finish times stored in finish<br/>
     Selected ={"{Activity[1]}"} <br/>
     n = Activity.length<br/>
     j = 1<br/>
     for i = 2 to n:<br/>
         if start[i] ≥ finish[j]:<br/>
             Selected = Selected U {"{Activity[i]}"} <br/>
             j = i<br/>
 return Selected
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

export default Greedy


