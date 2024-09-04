type TreeNode<T> = {
  value: T;
  children?: TreeNode<T>[];
};

type TreeValues<T> = T extends TreeNode<infer U> ? U | TreeValues<U> : never;

class Tree<T> {
  private root: TreeNode<T>;

  constructor(value: T) {
    this.root = { value };
  }

  addChild(parentValue: T, childValue: T): boolean {
    const node = this.findNode(parentValue);
    if (node) {
      node.children = node.children || [];
      node.children.push({ value: childValue });
      return true;
    }
    return false;
  }

  private findNode(value: T, node: TreeNode<T> = this.root): TreeNode<T> | null {
    if (node.value === value) return node;
    if (!node.children) return null;

    for (let child of node.children) {
      const result = this.findNode(value, child);
      if (result) return result;
    }

    return null;
  }

  traverseDFS(node: TreeNode<T> = this.root, result: T[] = []): T[] {
    result.push(node.value);

    if (node.children) {
      for (let child of node.children) {
        this.traverseDFS(child, result);
      }
    }

    return result;
  }

  traverseBFS(): T[] {
    const result: T[] = [];
    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      if (node) {
        result.push(node.value);
        if (node.children) queue.push(...node.children);
      }
    }

    return result;
  }

  getHeight(node: TreeNode<T> = this.root): number {
    if (!node.children || node.children.length === 0) {
      return 1;
    }
    const heights = node.children.map((child) => this.getHeight(child));
    return 1 + Math.max(...heights);
  }

  contains(value: T): boolean {
    return !!this.findNode(value);
  }

  getAllValues(): TreeValues<T>[] {
    return this.traverseDFS();
  }
}

function isTreeNode<T>(obj: any): obj is TreeNode<T> {
  return typeof obj === 'object' && 'value' in obj;
}

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
