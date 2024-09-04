# TypeScript Advanced Tree Structure

This repository contains a TypeScript implementation of a type-safe tree data structure, demonstrating recursive types, tree traversal (DFS and BFS), and type guards.

## Features

1. **Recursive Types**: The `TreeNode<T>` type models a node that can recursively contain children, forming a tree structure.
2. **Tree Operations**:
   - **Add Child**: Add a child node to a specific parent node in the tree.
   - **Tree Traversal**:
     - **Depth-First Search (DFS)**: Traverse the tree in a depth-first manner and return all node values.
     - **Breadth-First Search (BFS)**: Traverse the tree in a breadth-first manner and return all node values.
   - **Get Tree Height**: Calculate the height of the tree.
   - **Contains**: Check if a specific value exists in the tree.
3. **Type Safety**: The implementation is fully type-safe, leveraging TypeScript’s advanced type system with utility types like `TreeValues<T>`.
4. **Type Guard**: The `isTreeNode` function ensures that an object is a valid tree node.

## Installation

Clone the repository and install any dependencies:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

## Usage

The script demonstrates the usage of a tree data structure with integers as node values. You can easily modify the type parameter to use other types.

Example usage:

```ts
const tree = new Tree<number>(1);
tree.addChild(1, 2);
tree.addChild(1, 3);
tree.addChild(2, 4);
tree.addChild(2, 5);
tree.addChild(3, 6);
tree.addChild(3, 7);

console.log("DFS Traversal:", tree.traverseDFS());
console.log("BFS Traversal:", tree.traverseBFS());
console.log("Tree Height:", tree.getHeight());
console.log("Contains 5:", tree.contains(5));
console.log("Contains 10:", tree.contains(10));
console.log("All Values in Tree:", tree.getAllValues());
```

## Output

```bash
DFS Traversal: [ 1, 2, 4, 5, 3, 6, 7 ]
BFS Traversal: [ 1, 2, 3, 4, 5, 6, 7 ]
Tree Height: 3
Contains 5: true
Contains 10: false
All Values in Tree: [ 1, 2, 4, 5, 3, 6, 7 ]
```

## Concepts Demonstrated

- **Recursive types** for modeling tree nodes.
- **Breadth-First Search (BFS)** and **Depth-First Search (DFS)** traversal algorithms.
- **Type guards** using custom functions to ensure type safety.
- **Utility types** to extract all values from a tree node recursively.
