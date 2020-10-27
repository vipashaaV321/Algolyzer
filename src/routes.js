
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import HomePage from "layouts/HomePage";
import Analysis from "views/Analysis";
import Asymptotic from "views/Asymtotic";
import Recurrence from "views/Recurrence";
import Sorting from "views/Sorting";
import Heap from "views/Heap";
import DC from "views/d&c";
import MaxMin from "views/max-min";
import Dynamic from "views/Dynamic";
import Knapsack from "views/Knapsack";
import MatrixChain from "views/MatrixChain";
import LCS from "views/LCS";
import Greedy from "views/Greedy";
import Huffman from "views/Huffman";
import Spanning from "views/Spanning";
import Graph from "views/Graph";
import BackTracking from "views/BackTracking";
import StringA from "views/String";
import NP from "views/NP";

var dashRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "design_app",
  //   component: Dashboard,
  //   layout: "/admin",
  // },

  {
    path: "/Basics_Algorithms",
    name: "Basics Of Algorithms",
    icon: "design-2_ruler-pencil",
    component: Icons,
    layout: "/Algolyzer",
  },
  {
    path: "/analysis",
    name: "Analysis Of Algorithms",
    icon: "design-2_ruler-pencil",
    component: Analysis,
    layout: "/Algolyzer",
  },
  {
    path: "/Asymptotic_Notations",
    name: "Asymptotic Notations",
    icon: "design-2_ruler-pencil",
    component: Asymptotic,
    layout: "/Algolyzer",
  },
  {
    path: "/Recurrence_Relations",
    name: "Recurrence Relations",
    icon: "design-2_ruler-pencil",
    component: Recurrence,
    layout: "/Algolyzer",
  },
  {
    path: "/Sorting_Algorithms",
    name: "Sorting Algorithms",
    icon: "design-2_ruler-pencil",
    component: Sorting,
    layout: "/Algolyzer",
  },
  {
    path: "/Heap_Sort_Algorithms",
    name: "Heap Sort Algorithms",
    icon: "design-2_ruler-pencil",
    component: Heap,
    layout: "/Algolyzer",
  },
  {
    path: "/Divide&Conquer_Algorithm",
    name: "Divide & Conquer_Algorithm",
    icon: "design-2_ruler-pencil",
    component: DC,
    layout: "/Algolyzer",
  },
  {
    path: "/Max-Min Problem",
    name: "Max-Min Problem",
    icon: "design-2_ruler-pencil",
    component: MaxMin,
    layout: "/Algolyzer",
  },
  {
    path: "/Dynamic_Programming",
    name: "Dynamic Programming",
    icon: "design-2_ruler-pencil",
    component:Dynamic,
    layout: "/Algolyzer",
  },
  {
    path: "/Knapsack_Problem",
    name: "Knapsack Problem",
    icon: "design-2_ruler-pencil",
    component:Knapsack,
    layout: "/Algolyzer",
  },
  {
    path: "/Matrix_Chain_Multiplication",
    name: "Matrix Chain Multiplication",
    icon: "design-2_ruler-pencil",
    component:MatrixChain,
    layout: "/Algolyzer",
  },
  {
    path: "/Longest_Common_Subsequence ",
    name: "LCS",
    icon: "design-2_ruler-pencil",
    component:LCS,
    layout: "/Algolyzer",
  },
  {
    path: "/Greedy-Algorithm",
    name: "Greedy-Algorithm",
    icon: "design-2_ruler-pencil",
    component:Greedy,
    layout: "/Algolyzer",
  },
  {
    path: "/Huffman-Algorithm",
    name: "Huffman-Algorithm",
    icon: "design-2_ruler-pencil",
    component:Huffman,
    layout: "/Algolyzer",
  },
  {
    path: "/Spanning-Tree",
    name: "Spanning Tree",
    icon: "design-2_ruler-pencil",
    component:Spanning,
    layout: "/Algolyzer",
  },
  {
    path: "/Graphs",
    name: "Graphs",
    icon: "design-2_ruler-pencil",
    component:Graph,
    layout: "/Algolyzer",
  },
  {
    path: "/BackTracking-Algorithms",
    name: "BackTracking-Algorithms",
    icon: "design-2_ruler-pencil",
    component:BackTracking,
    layout: "/Algolyzer",
  },
  {
    path: "/StringMatching-Algorithms",
    name: "StringMatching-Algorithms",
    icon: "design-2_ruler-pencil",
    component:StringA,
    layout: "/Algolyzer",
  },
  {
    path: "/NP_Completeness-Algorithms",
    name: "NP_Completeness-Algorithms",
    icon: "design-2_ruler-pencil",
    component:NP,
    layout: "/Algolyzer",
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "location_map-big",
  //   component: Maps,
  //   layout: "/Algolyzer",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: Notifications,
  //   layout: "/Algolyzer",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "users_single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/extended-tables",
  //   name: "Table List",
  //   icon: "files_paper",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography,
  //   layout: "/admin",
  // },
 
];
export default dashRoutes;
