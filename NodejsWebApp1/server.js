"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
const message = 'hello world';
console.log(message);
class SLLNode {
    constructor(val) {
        this.m_next = null;
        this.m_val = val;
    }
    setNext(next) {
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
}
;
class DLLNode extends SLLNode {
    constructor(val) {
        super(val);
        this.m_prev = null;
    }
    setNext(next) {
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
}
;
function f() {
    var ns = new SLLNode(5);
    var nd = new DLLNode(6);
    ns.setNext(nd);
    //    nd.setNext(ns);
    nd.setNext(nd);
}
class SLL {
    constructor() {
        this.m_head = null;
    }
    insertFirst(val) {
        let newNode = new SLLNode(val);
        newNode.setNext(this.m_head);
        this.m_head = newNode;
    }
}
;
class DLL extends SLL {
}
;
//# sourceMappingURL=server.js.map