function Pool(params) {
    this.storage = [];
    this.tagName = params.tagName;
    this.namespace = params.namespace;
}

Pool.prototype.push = function(el) {
    if (el.tagName !== this.tagName) {
        return;
    }
    
    this.storage.push(el);
}

Pool.prototype.pop = function(argument) {
    if (this.storage.length === 0) {
        return this.create();
    } else {
        return this.storage.pop();
    }
}

Pool.prototype.create = function() {
    if (this.namespace) {
        return document.createElementNS(this.namespace, this.tagName);
    } else {
        return document.createElement(this.tagName);
    }
}

Pool.prototype.allocate = function(size) {
    if (this.storage.length >= size) {
        return;
    }

    var difference = size - this.storage.length;
    for (var i = 0; i < difference; i++) {
        this.storage.push(this.create());
    }
}

module.exports = Pool;
