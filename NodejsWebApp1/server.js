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
    removePrev() {
        if (this.m_prev) {
            this.m_prev = this.m_prev.m_prev;
        }
    }
}
;
class SLL {
    constructor() {
        this.m_head = null;
    }
    insertFirst(val) {
        var newNode = new SLLNode(val);
        newNode.m_next = this.m_head;
        this.m_head = newNode;
    }
}
;
class DLL extends SLL {
}
;
//# sourceMappingURL=server.js.map