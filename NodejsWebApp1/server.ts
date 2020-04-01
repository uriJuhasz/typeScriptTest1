import http = require('http');
var port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

const message: string = 'hello world';
console.log(message);

type V = number;

class SLLNode {
    constructor(val: V) {
        this.m_next = null;
        this.m_val = val;
    }

    setNext(next: this | null) {
        if (next == this.m_next)
            return;
        next.setNext(this.m_next);
        this.m_next = next;
    }
    removeNext() {
        if (this.m_next) {
            this.m_next = this.m_next.m_next;
        }
    }
    protected m_next: this | null;
    m_val: number;
};

class DLLNode extends SLLNode {
    constructor(val: V) {
        super(val);
        this.m_prev = null;
    }
    setNext(next: this | null) {
        super.setNext(next);
        if (this.m_next)
            this.m_next.m_prev = this;
    }

    removePrev() {
        if (this.m_prev) {
            this.m_prev = this.m_prev.m_prev;
            this.m_prev.m_next = this;
        }
    }
    removeNext() {
        super.removeNext();
        if (this.m_next)
            this.m_next.m_prev = this;
    }
    m_prev: this | null;
};

function f() {
    var ns: SLLNode = new SLLNode(5);
    var nd: DLLNode = new DLLNode(6);
    ns.setNext(nd);
//    nd.setNext(ns);
    nd.setNext(nd);
}

class SLL {
    constructor() {
        this.m_head = null;
    }

    insertFirst(val: V) {
        let newNode = new SLLNode(val);
        newNode.setNext(this.m_head);
        this.m_head = newNode;
    }
    m_head: SLLNode | null;
};

class DLL extends SLL {

};

class A { };
class B extends A { };
abstract class C extends A { f(): void {};};
class D extends B implements C { f() { }; };