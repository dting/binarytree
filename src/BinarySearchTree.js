function Node(element) {
  this.element = element;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.left = null;
  this.right = null;
  this.size = 0;
}

function _insert(root, node) {
  if (node.element < root.element) {
    if (!root.left) {
      root.left = node;
    } else {
      _insert(root.left, node);
    }
  } else {
    if (!root.right) {
      root.right = node;
    } else {
      _insert(root.right, node);
    }
  }
}

BinarySearchTree.prototype.insert = function(element) {
  var node = new Node(element);
  if (!this.root) {
    this.root = node;
  } else {
    _insert(this.root, node);
  }
  this.size++;
};

BinarySearchTree.prototype._replaceNode = function(node, parent, side) {
  if (node.left && node.right) {
    var current = node.right;
    if (current.left) {
      var prev = current;
      while (current.left) {
        prev = current;
        current = current.left;
      }
      prev.left = current.right;
    } else {
      node.right = current.right;
    }
    node.element = current.element;
  } else if (parent) {
    parent[side] = node.left || node.right;
  } else {
    this.root = node.left || node.right;
  }
};

BinarySearchTree.prototype.remove = function(element) {
  var prev = null;
  var side = null;
  var current = this.root;
  while (current) {
    if (current.element === element) {
      this._replaceNode(current, prev, side);
      this.size--;
      return true;
    } else {
      prev = current;
      side = current.element > element ? 'left' : 'right';
      current = current[side];
    }
  }
  return false;
};

function _inOrder(node, cb) {
  if (node) {
    _inOrder(node.left, cb);
    cb(node.element);
    _inOrder(node.right, cb);
  }
}

BinarySearchTree.prototype.inOrder = function(cb) {
  if (this.root) {
    _inOrder(this.root, cb);
  }
};

function _preOrder(node, cb) {
  if (node) {
    cb(node.element);
    _preOrder(node.left, cb);
    _preOrder(node.right, cb);
  }
}

BinarySearchTree.prototype.preOrder = function(cb) {
  if (this.root) {
    _preOrder(this.root, cb);
  }
};

function _postOrder(node, cb) {
  if (node) {
    _postOrder(node.left, cb);
    _postOrder(node.right, cb);
    cb(node.element);
  }
}

BinarySearchTree.prototype.postOrder = function(cb) {
  if (this.root) {
    _postOrder(this.root, cb);
  }
};

function _isBST(node) {
  if (!node) {
    return true;
  }
  if (node.left && node.left.element >= node.element) {
    return false;
  }
  if (node.right && node.right.element < node.element) {
    return false;
  }
  return _isBST(node.left) && _isBST(node.right);
}

BinarySearchTree.prototype.isBST = function() {
  return _isBST(this.root);
};

function _depth(node) {
  return node ? 1 + Math.max(_depth(node.left), _depth(node.right)) : 0;
}

BinarySearchTree.prototype.depth = function() {
  return _depth(this.root);
};

function _contains(node, element) {
  if (node) {
    if (node.element === element) {
      return true;
    }
    return _contains(node.element > element ? node.left : node.right, element);
  }
  return false;
}

BinarySearchTree.prototype.contains = function(element) {
  return _contains(this.root, element);
};


