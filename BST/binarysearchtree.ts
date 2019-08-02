class TreeNode {
    value: number;
    left: TreeNode;
    right: TreeNode;

    constructor (value: number) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    };
}

class BinarySearchTree {
    root: TreeNode;

    constructor(nodes: number[]) {
        this.initialization(nodes);
    };

    initialization(nodes: number[]): void {
        nodes.forEach(node => this.add(node));
    };

    add(node: number): void {
        if (!this.root) {
            this.root = new TreeNode(node);
            return;
        }

        let current: TreeNode = this.root;
        while(true) {
            if (node < current.value) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = new TreeNode(node);
                    break;
                }
            } else if (node > current.value) {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = new TreeNode(node);
                    break;
                }
            } else break;
        };
    };
}