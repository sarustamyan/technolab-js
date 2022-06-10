var tree1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(5);

function preorderTraversal(root) {
    if (root === null) {
        return;
    }
    console.log(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}

preorderTraversal(tree1);
console.log("\r\n");
preorderTraversal(tree2);