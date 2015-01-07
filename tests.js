QUnit.test(
    "dom-pool",
    function(assert) {
        assert.ok(
            typeof Pool !== "undefined",
            "Global definition in the absence of CommonJS support"
        );

        assert.throws(
            function() {
                new Pool;
            },
            /pass parameters/,
            "Parameters are required"
        );

        assert.throws(
            function() {
                new Pool({});
            },
            /specify a tagName/,
            "tagName parameter is required"
        );

        var divPool = new Pool({
            tagName: "div"
        });
        assert.ok(
            divPool,
            "Creating a div pool"
        );

        var element = divPool.pop();
        assert.ok(
            (
                element
                &&
                element.tagName === 'DIV'
                &&
                divPool.storage.length === 0
            ),
            "pop()"
        );

        divPool.push(element);
        assert.ok(
            (
                divPool.storage[0] === element
                &&
                divPool.storage.length === 1
            ),
            "push(element)"
        );

        divPool.allocate(100);
        assert.ok(
            (
                divPool.storage.length === 100
            ),
            "allocate(100)"
        );

        var circlePool = new Pool({
            namespace: 'http://www.w3.org/2000/svg',
            tagName: "circle"
        });
        assert.ok(
            circlePool,
            "Creating a circle pool (in the SVG namespace)"
        );

        var circle = circlePool.pop();
        assert.ok(
            (
                circle
                &&
                circle.tagName === 'circle'
                &&
                circlePool.storage.length === 0
            ),
            "pop()"
        );

        circlePool.push(circle);
        assert.ok(
            (
                circlePool.storage[0] === circle
                &&
                circlePool.storage.length === 1
            ),
            "push(circle)"
        );

        circlePool.allocate(100);
        assert.ok(
            (
                circlePool.storage.length === 100
            ),
            "allocate(100)"
        );
    }
);
