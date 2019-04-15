tui.util.defineNamespace("fedoc.content", {});
fedoc.content["factory_errorMessage.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @author NHN Ent. FE Development Team &lt;dl_javascript@nhnent.com>\n * @fileoverview Error-message factory\n */\n'use strict';\n\nvar keyMirror = require('../util').keyMirror;\n\nvar types = keyMirror(\n    'UN_IMPLEMENTATION',\n    'NO_COMPONENT_NAME'\n);\n\nvar messages = {\n    UN_IMPLEMENTATION: 'Should implement a method: ',\n    NO_COMPONENT_NAME: 'Should set a component name'\n};\n\nvar map = {\n    UN_IMPLEMENTATION: function(methodName) {\n        return messages.UN_IMPLEMENTATION + methodName;\n    },\n    NO_COMPONENT_NAME: function() {\n        return messages.NO_COMPONENT_NAME;\n    }\n};\n\nmodule.exports = {\n    types: tui.util.extend({}, types),\n\n    create: function(type) {\n        var func;\n\n        type = type.toLowerCase();\n        func = map[type];\n        Array.prototype.shift.apply(arguments);\n\n        return func.apply(null, arguments);\n    }\n};\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"