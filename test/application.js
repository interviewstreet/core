require([
    "underscore",
    "hr/hr",
    "hr/args",
    "tests",
    "benchmarks",

    "benchmark-events",
    "benchmark-underscore",
    
    "test-storage",
    "test-model"
], function(_, hr, args, tests, benchmarks) {
    // Configure hr
    hr.configure(args);

    // Define base application
    var Application = hr.Application.extend({
        name: "hr.js tests"
    });

    var app = new Application();
    app.run();

    tests.run().then(function() {
        return benchmarks.run();
    });
});