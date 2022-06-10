# Welcome to the Techolab Javascript course!

## Participants

1. Tamara
2. Jora Ghazaryan
3. Hovhannes
4. Davit Margaryan
5. Albert Zakhrabekyan
6. Karine

## Lesson 0 - Introduction

### Prerequisites

1. Development environment

   1. Install VS Code: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
   2. Install Node.js: [https://nodejs.org/en/](https://nodejs.org/en/)
   3. Run a sample Javascript console application: [https://github.com/sarustamyan/technolab/tree/master/lesson0/helloworld](https://github.com/sarustamyan/technolab/tree/master/lesson0/helloworld) (see [https://code.visualstudio.com/docs/editor/debugging](https://code.visualstudio.com/docs/editor/debugging) for help with the setup)

2. Git 

   1. Install git: [https://git-scm.com/download](https://git-scm.com/download)
   2. Create a GitHub account: [https://github.com/join](https://github.com/join)

### Long-term projects

1. Javascript Elevator Game: [https://play.elevatorsaga.com/](https://play.elevatorsaga.com/)
2. Create a bot for generals.io: [https://dev.generals.io/api](https://dev.generals.io/api)
3. Create a Lines game for the browser: [https://www.min2win.org/game/lines-98.html](https://www.min2win.org/game/lines-98.html)

### Home Assignments

**These problems are for skill assessment only! Don't feel bad if you can't solve them (yet):**

1. For the given a non-negative number `N`, return the `N`-th Fibonacci number (preferably using recursion) defined by the following formula: 
   - F(0) = 0
   - F(1) = 1
   - F(N) = F(N-1) + F(N-2) 
2. For the given positive number `N`, find the approximation of pi by Euler's formula: `1/6 * pi ~ 1/1 + 1/4 + 1/9 + ... + 1/N^2`. (side quest: watch a video on how  Newton found a different equation for pi: [https://www.youtube.com/watch?v=gMlf1ELvRzc](https://www.youtube.com/watch?v=gMlf1ELvRzc))  
3. For the given (NxN) martix return the numbers in the spiralling order, i.e. for the following input:
```
  1 2 3 4 
  5 6 7 8 
  9 10 11 12
  13 14 15 16
```
  The program should return the following array of numbers: `1, 2 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10`

## Lesson 1 - Git

### In Class

1. Add an ssh key to the GitHub account: [https://docs.github.com/en/authentication/connecting-to-github-with-ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
2. Create a repository for the long-term project.
3. Create a repository for ongoing projects.
4. Fork the repository [https://github.com/sarustamyan/technolab](https://github.com/sarustamyan/technolab) (see [https://docs.github.com/en/get-started/quickstart/fork-a-repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) for help)
5. Checkout the branch `gh-pages`
6. Add yourself to the list of participants
7. Create a pull request 

### Home Assignments

1. Create a personal website with GitHub pages: [https://simondosda.github.io/posts/2021-09-13-blog-github-pages-1-introduction.html](https://simondosda.github.io/posts/2021-09-13-blog-github-pages-1-introduction.html) (bonus points: setup a blog using Jekyll)
2. Submit a PR with Armenian translations to the following game: [https://github.com/Dysnomia-Studio/extortion-i18n](https://github.com/Dysnomia-Studio/extortion-i18n)
3. Read more about Git at [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)

## Lesson 2 - Arrays

### Prerequisites

1. Create an account in [https://leetcode.com](https://leetcode.com)

### In Class

1. Arrays, high-level overview.
2. String representations. ASCII vs Unicode.
3. Workshop: converting a string to lowercase: [https://leetcode.com/problems/to-lower-case/](https://leetcode.com/problems/to-lower-case/)
4. Individual coding challenge: [https://leetcode.com/problems/student-attendance-record-i/](https://leetcode.com/problems/student-attendance-record-i/)

### Home Assignments

1. [https://leetcode.com/problems/plus-one/](https://leetcode.com/problems/plus-one/)
2. [https://leetcode.com/problems/max-consecutive-ones/](https://leetcode.com/problems/max-consecutive-ones/)
3. [https://leetcode.com/problems/length-of-last-word/](https://leetcode.com/problems/length-of-last-word/)

## Lesson 3 - Sorting

1. Sorting algorithms, complexity ([https://en.wikipedia.org/wiki/Sorting_algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm))
2. `O(n^2)` sorting algorithms
   1. Selection Sort ([https://en.wikipedia.org/wiki/Selection_sort](https://en.wikipedia.org/wiki/Selection_sort))
   2. Buble Sort ([https://en.wikipedia.org/wiki/Bubble_sort](https://en.wikipedia.org/wiki/Bubble_sort))
3. `O(n * log(n))` sorting algorithms
   1. Merge Sort ([https://en.wikipedia.org/wiki/Merge_sort](https://en.wikipedia.org/wiki/Merge_sort))

### In Class

1. Workshop: implement Selection Sort
2. Individual coding challenge: calculate the median of an array: [https://en.wikipedia.org/wiki/Median](https://en.wikipedia.org/wiki/Median)
   
### Home Assignments

1. Implement Merge Sort


## Lesson 4 - Multidimensional Arrays

1. Instantiating a matrix: [https://www.w3docs.com/snippets/javascript/how-to-create-a-two-dimensional-array-in-javascript.html](https://www.w3docs.com/snippets/javascript/how-to-create-a-two-dimensional-array-in-javascript.html)

### In Class

1. Print the diagonal elements of a given (NxN) matrix 
2. Calculate the average of the elements of the upper triangular matrix of a given (NxN) matrix

### Home Assignments

1. Matrix Diagonal Sum: [https://leetcode.com/problems/matrix-diagonal-sum/](https://leetcode.com/problems/matrix-diagonal-sum/)
2. Convert 1D Array Into 2D Array: [https://leetcode.com/problems/convert-1d-array-into-2d-array/](https://leetcode.com/problems/convert-1d-array-into-2d-array/)
3. Lucky Numbers in a Matrix: [https://leetcode.com/problems/lucky-numbers-in-a-matrix/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/)
4. Sudoku validator: [https://leetcode.com/problems/valid-sudoku/](https://leetcode.com/problems/valid-sudoku/)
5. Sudoku solver: [https://leetcode.com/problems/sudoku-solver/](https://leetcode.com/problems/sudoku-solver/)

## Lesson 5 - Recap 

### In Class

1. Return all the permutations of a given array: [https://leetcode.com/problems/permutations/](https://leetcode.com/problems/permutations/)

### Home Assignments

1. Return all the subsets of a given array: [https://leetcode.com/problems/subsets/](https://leetcode.com/problems/subsets/)
2. Research about recursion
   1. **https://www.youtube.com/watch?v=AfBqVVKg4GE**

## Lesson 6 - Recursion 

### In Class

1. Determine if a word is a palindrome recursively

### Home Assignments

1. Read about Memoization: [https://dev.to/ionabrabender/memoization-and-recursion-228f](https://dev.to/ionabrabender/memoization-and-recursion-228f)
2. Chocolate and Wrapper: [https://www.geeksforgeeks.org/puzzle-22-maximum-chocolates/](https://www.geeksforgeeks.org/puzzle-22-maximum-chocolates/)
3. Climbing stairs: [https://leetcode.com/problems/climbing-stairs/](https://leetcode.com/problems/climbing-stairs/)

## Lesson 7 - HashSets / HashTables

### In Class

1. Theory behind hash tables: [https://en.wikipedia.org/wiki/Hash_table](https://dev.to/ionabrabender/memoization-and-recursion-228f)

### Home Assignments

1. DoS attack on web servers exploiting the hashing algorithm: [https://www.youtube.com/watch?v=R2Cq3CLI6H8](https://www.youtube.com/watch?v=R2Cq3CLI6H8)

## Lesson 8 - Trees

### In Class

1. Recursive traversal algorithms (inorder/preorder/postorder): [https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
2. Breadth-first/Depth-first traversal using a queue/stack: [https://www.geeksforgeeks.org/level-order-tree-traversal/](https://www.geeksforgeeks.org/level-order-tree-traversal/)
3. Binary search trees [https://en.wikipedia.org/wiki/Binary_search_tree](https://en.wikipedia.org/wiki/Binary_search_tree)

### Home Assignments

1. Searching in a binary search tree. 
2. Validate binary search tree: [https://leetcode.com/problems/validate-binary-search-tree/](https://leetcode.com/problems/validate-binary-search-tree/)
	

