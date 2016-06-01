const noop = () => {};
const r = String.raw;

describe('BinarySearchTree', () => {
  var tree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  describe('Constructor', () => {
    it('should create instance with null root', () => {
      expect(tree.root).toBeNull();
    });

    it('should create instance with null left', () => {
      expect(tree.left).toBeNull();
    });

    it('should create instance with null right', () => {
      expect(tree.right).toBeNull();
    });

    it('should create instance with size 0', () => {
      expect(tree.size).toBe(0);
    });
  });

  describe('#insert', () => {
    describe('when tree is empty', () => {
      it('should insert element as root', () => {
        tree.insert(1);
        expect(tree.root.element).toBe(1);
      });
    });

    describe('when tree has root', () => {
      beforeEach(() => {
        tree.root = new Node(5);
        tree.size = 1;
      });

      describe('with no children', () => {
        describe('and inserted element is less than root element', () => {
          it('should insert element as left', () => {
            tree.insert(0);
            expect(tree.root.left.element).toBe(0);
          });
        });

        describe('and inserted element is larger than root element', () => {
          it('should insert element as right', () => {
            tree.insert(10);
            expect(tree.root.right.element).toBe(10);
          });
        });

        describe('and inserted element is equal to root element', () => {
          it('should insert element as right', () => {
            tree.insert(5);
            expect(tree.root.right.element).toBe(5);
          });
        });
      });
    });

    it('should increment size', () => {
      tree.insert(1);
      expect(tree.size).toBe(1);
    });

    describe('when inserting 5, 10, 3, 1, 4, 7, 6, 15, 1, 15, 8 into an empty tree', () => {
      beforeEach(() => {
        tree.insert(5);
        tree.insert(10);
        tree.insert(3);
        tree.insert(1);
        tree.insert(4);
        tree.insert(7);
        tree.insert(6);
        tree.insert(15);
        tree.insert(1);
        tree.insert(15);
        tree.insert(8);
      });

      it('should have root (5)', () => {
        expect(tree.root.element).toBe(5);
      });

      it('should have root.right (10)', () => {
        expect(tree.root.right.element).toBe(10);
      });

      it('should have root.left (3)', () => {
        expect(tree.root.left.element).toBe(3);
      });

      it('should have root.left.left (1)', () => {
        expect(tree.root.left.left.element).toBe(1);
      });

      it('should have root.left.right (4)', () => {
        expect(tree.root.left.right.element).toBe(4);
      });

      it('should have root.right.left (7)', () => {
        expect(tree.root.right.left.element).toBe(7);
      });

      it('should have root.right.left.left (6)', () => {
        expect(tree.root.right.left.left.element).toBe(6);
      });

      it('should have root.right.right (15)', () => {
        expect(tree.root.right.right.element).toBe(15);
      });

      it('should have root.left.left.right (1)', () => {
        expect(tree.root.left.left.right.element).toBe(1);
      });

      it('should have root.right.right.right (15)', () => {
        expect(tree.root.right.right.right.element).toBe(15);
      });

      it('should have root.right.left.right (8)', () => {
        expect(tree.root.right.left.right.element).toBe(8);
      });
      xdescribe(r`............( 5)................`, noop);
      xdescribe(r`......../..........\............`, noop);
      xdescribe(r`....( 3)............(10)........`, noop);
      xdescribe(r`.../....\........../....\.......`, noop);
      xdescribe(r`( 1)....( 4)....( 7)....(15)....`, noop);
      xdescribe(r`...\............/..\.......\....`, noop);
      xdescribe(r`....( 1)....( 6)....( 8)....(15)`, noop);

      it('should have have size 11', () => {
        expect(tree.size).toBe(11);
      });
    });
  });

  describe('#remove', () => {
    describe('when tree is empty', () => {
      it('should be false', () => {
        expect(tree.remove(1)).toBe(false);
      });

      it('should not change size', () => {
        tree.remove(1);
        expect(tree.size).toBe(0);
      });
    });

    describe('when removing a root node (5)', () => {
      beforeEach(() => {
        tree.root = new Node(5);
        tree.size = 1;
      });

      describe('with no children', () => {
        xdescribe(r`'(5)`, noop);
        it('should be true', () => {
          expect(tree.remove(5)).toBe(true);
        });

        it('should remove root', () => {
          tree.remove(5);
          expect(tree.root).toBeNull();
        });

        it('should decrement size', () => {
          tree.remove(5);
          expect(tree.size).toBe(0);
        });
      });

      describe('with only a left node (3)', () => {
        xdescribe(r`...(5)`, noop);
        xdescribe(r`../...`, noop);
        xdescribe(r`(3)...`, noop);

        beforeEach(() => {
          tree.root.left = new Node(3);
          tree.size = 2;
        });

        it('should be true', () => {
          expect(tree.remove(5)).toBe(true);
        });

        it('should have root (3)', () => {
          tree.remove(5);
          expect(tree.root.element).toBe(3);
        });

        it('should have root with no children', () => {
          tree.remove(5);
          expect(tree.root.left).toBeNull();
          expect(tree.root.right).toBeNull();
        });

        it('should decrement size', () => {
          tree.remove(5);
          expect(tree.size).toBe(1);
        });
      });

      describe('with only a right node (7)', () => {
        xdescribe(r`(5)...`, noop);
        xdescribe(r`...\..`, noop);
        xdescribe(r`...(7)`, noop);

        beforeEach(() => {
          tree.root.right = new Node(7);
          tree.size = 2;
        });

        it('should be true', () => {
          expect(tree.remove(5)).toBe(true);
        });

        it('should have root (7)', () => {
          tree.remove(5);
          expect(tree.root.element).toBe(7);
        });

        it('should have root with no children', () => {
          tree.remove(5);
          expect(tree.root.left).toBeNull();
          expect(tree.root.right).toBeNull();
        });

        it('should decrement size', () => {
          tree.remove(5);
          expect(tree.size).toBe(1);
        });
      });

      describe('with left node (3) and right node (7)', () => {
        xdescribe(r`...(5)...`, noop);
        xdescribe(r`../...\..`, noop);
        xdescribe(r`(3)...(7)`, noop);

        beforeEach(() => {
          tree.root.right = new Node(7);
          tree.size = 2;
        });

        it('should be true', () => {
          expect(tree.remove(5)).toBe(true);
        });

        it('should have root (7)', () => {
          tree.remove(5);
          expect(tree.root.element).toBe(7);
        });

        it('should have root with no children', () => {
          tree.remove(5);
          expect(tree.root.left).toBeNull();
          expect(tree.root.right).toBeNull();
        });

        it('should decrement size', () => {
          tree.remove(5);
          expect(tree.size).toBe(1);
        });
      });
    });

    describe('when removing a leaf node', () => {
      xdescribe(r`...(5)...`, noop);
      xdescribe(r`../...\..`, noop);
      xdescribe(r`(3)...(7)`, noop);

      beforeEach(() => {
        tree.root = new Node(5);
        tree.root.right = new Node(7);
        tree.root.left = new Node(3);
        tree.size = 3;
      });

      describe('smaller than parent', () => {
        it('should be true', () => {
          expect(tree.remove(3)).toBe(true);
        });

        it('should set parent.left to null', () => {
          var parent = tree.root;
          tree.remove(3);
          expect(parent.left).toBeNull();
        });

        it('should decrement size', () => {
          tree.remove(3);
          expect(tree.size).toBe(2);
        });
      });

      describe('larger than parent', () => {
        it('should be true', () => {
          expect(tree.remove(7)).toBe(true);
        });

        it('should set parent.right to null', () => {
          var parent = tree.root;
          tree.remove(7);
          expect(parent.right).toBeNull();
        });

        it('should decrement size', () => {
          tree.remove(7);
          expect(tree.size).toBe(2);
        });
      });
    });

    describe('when removing internal nodes', () => {
      describe('with only left node', () => {
        beforeEach(() => {
          tree.root = new Node(5);
          tree.root.left = new Node(3);
          tree.root.left.right = new Node(4);
          tree.root.left.right.left = new Node(3);
          tree.root.left.right.left.right = new Node(3);
          tree.size = 5;
        });

        describe('and is root', () => {
          xdescribe(r`..(5) <- removing`, noop);
          xdescribe(r`../..            `, noop);
          xdescribe(r`(3).. <- left    `, noop);
          xdescribe(r`..\..            `, noop);
          xdescribe(r`..(4)            `, noop);
          xdescribe(r`../..            `, noop);
          xdescribe(r`(3)..            `, noop);
          xdescribe(r`..\..            `, noop);
          xdescribe(r`..(3)            `, noop);

          it('should replace root with left node', () => {
            var left = tree.root.left;
            expect(tree.remove(5)).toBe(true);
            expect(tree.root).toBe(left);
          });

          it('should decrement size', () => {
            tree.remove(5);
            expect(tree.size).toBe(4);
          });
        });

        describe('and not root', () => {
          xdescribe(r`..(5)            `, noop);
          xdescribe(r`../..            `, noop);
          xdescribe(r`(3).. <- parent  `, noop);
          xdescribe(r`..\..            `, noop);
          xdescribe(r`..(4) <- removing`, noop);
          xdescribe(r`../..            `, noop);
          xdescribe(r`(3).. <- left    `, noop);
          xdescribe(r`..\..            `, noop);
          xdescribe(r`..(3)            `, noop);

          it('should replace parent.right with removed node\'s left', () => {
            var parent = tree.root.left;
            var left = tree.root.left.right.left;
            expect(tree.remove(4)).toBe(true);
            expect(parent.right).toBe(left);
          });

          it('should decrement size', () => {
            tree.remove(4);
            expect(tree.size).toBe(4);
          });
        });
      });

      describe('with only right node', () => {
        beforeEach(() => {
          tree.root = new Node(5);
          tree.root.right = new Node(9);
          tree.root.right.left = new Node(6);
          tree.root.right.left.right = new Node(7);
          tree.root.right.left.right.left = new Node(6);
          tree.size = 5;
        });

        describe('and is root', () => {
          xdescribe(r`(5).. <- removing`, noop);
          xdescribe(r`..\..            `, noop);
          xdescribe(r`..(9) <- right   `, noop);
          xdescribe(r`../..            `, noop);
          xdescribe(r`(6)..            `, noop);
          xdescribe(r`..\..            `, noop);
          xdescribe(r`..(7)            `, noop);
          xdescribe(r`../..            `, noop);
          xdescribe(r`(6)..            `, noop);

          it('should replace root with right node', () => {
            var right = tree.root.right;
            expect(tree.remove(5)).toBe(true);
            expect(tree.root).toBe(right);
          });

          it('should decrement size', () => {
            tree.remove(5);
            expect(tree.size).toBe(4);
          });
        });

        describe('and not root', () => {
          xdescribe(r`(5)..            `, noop);
          xdescribe(r`..\..            `, noop);
          xdescribe(r`..(9) <- parent  `, noop);
          xdescribe(r`../..            `, noop);
          xdescribe(r`(6).. <- removing`, noop);
          xdescribe(r`..\..            `, noop);
          xdescribe(r`..(7) <- right   `, noop);
          xdescribe(r`../..            `, noop);
          xdescribe(r`(6)..            `, noop);

          it('should replace parent.left with removed node\'s right', () => {
            var parent = tree.root.right;
            var right = tree.root.right.left.right;
            expect(tree.remove(6)).toBe(true);
            expect(parent.left).toBe(right);
          });

          it('should decrement size', () => {
            tree.remove(6);
            expect(tree.size).toBe(4);
          });
        });
      });

      describe('with both left and right children', () => {
        xdescribe(r`The successor is the left most node of the removed node\'s right subtree`, noop);
        describe('and successor node is not a leaf node', () => {
          xdescribe(r`....(5)...... <- removing        `, noop);
          xdescribe(r`../.....\....                    `, noop);
          xdescribe(r`(3)......(10) <- successor parent`, noop);
          xdescribe(r`........./...                    `, noop);
          xdescribe(r`.......(7)... <- successor       `, noop);
          xdescribe(r`.........\...                    `, noop);
          xdescribe(r`.........(8).                    `, noop);

          beforeEach(() => {
            tree.root = new Node(5);
            tree.root.left = new Node(3);
            tree.root.right = new Node(10);
            tree.root.right.left = new Node(7);
            tree.root.right.left.right = new Node(8);
          });

          it('should replace node element with successor element', () => {
            var successor = tree.root.right.left;
            expect(tree.remove(5)).toBe(true);
            expect(tree.root.element).toBe(successor.element);
          });

          it('should assign successor\'s parent.left to successor.right', () => {
            var successorParent = tree.root.right;
            var successor = tree.root.right.left;
            expect(tree.remove(5)).toBe(true);
            expect(tree.root.right.left.element).toBe(8);
            expect(successorParent.left).toBe(successor.right);
          });
          xdescribe(r`The successor by definition cannot have a left child node`, noop);
        });
      });
    });
  });

  describe('traversals', () => {
    xdescribe(r`.........(F).........`, noop);
    xdescribe(r`....../.......\......`, noop);
    xdescribe(r`...(B).........(G)...`, noop);
    xdescribe(r`.../.\...........\...`, noop);
    xdescribe(r`(A)...(D).........(I)`, noop);
    xdescribe(r`....../.\........./..`, noop);
    xdescribe(r`...(C)...(E)...(H)...`, noop);

    beforeEach(() => {
      tree.insert('F');
      tree.insert('B');
      tree.insert('A');
      tree.insert('D');
      tree.insert('C');
      tree.insert('E');
      tree.insert('G');
      tree.insert('I');
      tree.insert('H');
    });

    describe('#inorder', () => {
      xdescribe(`'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'`, noop);
      it('should traverse the tree in order', () => {
        var results = [];
        tree.inOrder((element) => results.push(element));
        expect(results).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
      });
    });

    describe('#preorder', () => {
      xdescribe(`'F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H'`, noop);
      it('should traverse the tree pre order', () => {
        var results = [];
        tree.preOrder((element) => results.push(element));
        expect(results).toEqual(['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H']);
      });
    });

    describe('#postorder', () => {
      xdescribe(`'A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F'`, noop);
      it('should traverse the tree post order', () => {
        var results = [];
        tree.postOrder((element) => results.push(element));
        expect(results).toEqual(['A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F']);
      });
    });
  });

  describe('#isBST', () => {
    describe('when tree is empty', () => {
      it('should be true', () => {
        expect(tree.isBST()).toBe(true);
      });
    });

    describe('when tree has a single node', () => {
      it('should be true', () => {
        tree.root = new Node(0);
        expect(tree.isBST()).toBe(true);
      });
    });

    it('should be false when any node has a right node that is less than parent', () => {
      tree.root = new Node(3);
      tree.root.right = new Node(1);
      expect(tree.isBST()).toBe(false);
    });

    it('should be false when any node has a left node that is greater than parent', () => {
      tree.root = new Node(3);
      tree.root.left = new Node(4);
      expect(tree.isBST()).toBe(false);
    });

    it('should be false when any node has a left node that is equal to parent', () => {
      tree.root = new Node(3);
      tree.root.left = new Node(3);
      expect(tree.isBST()).toBe(false);
    });
  });

  describe('#depth', () => {
    describe('when tree is empty', () => {
      it('should be 0', () => {
        expect(tree.depth()).toBe(0);
      });
    });

    describe('when tree has a single node', () => {
      it('should be 1', () => {
        tree.insert(0);
        expect(tree.depth()).toBe(1);
      });
    });

    describe('when the left and right subtrees are same depth', () => {
      it('should be max depth of tree', () => {
        tree.insert(5);
        tree.insert(4);
        tree.insert(3);
        tree.insert(6);
        tree.insert(7);
        expect(tree.depth()).toBe(3);
      });
    });

    describe('when the left and right subtrees are different depths', () => {
      it('should be max depth of tree', () => {
        tree.insert(5);
        tree.insert(4);
        tree.insert(3);
        tree.insert(6);
        expect(tree.depth()).toBe(3);
      });
    });
  });

  describe('#contains', () => {
    describe('when tree is empty', () => {
      it('should be false', () => {
        expect(tree.contains(0)).toBe(false);
        expect(tree.contains(2)).toBe(false);
        expect(tree.contains(-1)).toBe(false);
        expect(tree.contains(null)).toBe(false);
        expect(tree.contains(undefined)).toBe(false);
      });
    });

    describe('when tree has nodes', () => {
      beforeEach(() => {
        tree.insert(5);
        tree.insert(-3);
        tree.insert(2);
        tree.insert(11);
        tree.insert(9);
      });

      describe('and element is in the tree', () => {
        it('should be true', () => {
          expect(tree.contains(5)).toBe(true);
          expect(tree.contains(-3)).toBe(true);
          expect(tree.contains(2)).toBe(true);
          expect(tree.contains(11)).toBe(true);
          expect(tree.contains(9)).toBe(true);
        });
      });

      describe('and element is not in the tree', () => {
        it('should be false', () => {
          expect(tree.contains(0)).toBe(false);
          expect(tree.contains(3)).toBe(false);
          expect(tree.contains(-1)).toBe(false);
          expect(tree.contains(null)).toBe(false);
          expect(tree.contains(undefined)).toBe(false);
        });
      });
    });
  });
});
