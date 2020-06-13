(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor"],{

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/dom.js":
/*!****************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/dom.js ***!
  \****************************************************/
/*! exports provided: create, find, children, text, parents, prevAll, offset, filterLI, filterLIA, reClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLI", function() { return filterLI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLIA", function() { return filterLIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reClass", function() { return reClass; });
/**
 * Create an element with classname.
 *
 * @param 	{string}		selector	The nodeName and classnames for the element to create.
 * @return	{HTMLElement}				The created element.
 */
function create(selector) {
    var args = selector.split('.');
    var elem = document.createElement(args.shift());
    //  IE11:
    args.forEach(function (classname) {
        elem.classList.add(classname);
    });
    //  Better browsers:
    // elem.classList.add(...args);
    return elem;
}
/**
 * Find all elements matching the selector.
 * Basically the same as element.querySelectorAll() but it returns an actuall array.
 *
 * @param 	{HTMLElement} 	element Element to search in.
 * @param 	{string}		filter	The filter to match.
 * @return	{array}					Array of elements that match the filter.
 */
function find(element, filter) {
    return Array.prototype.slice.call(element.querySelectorAll(filter));
}
/**
 * Find all child elements matching the (optional) selector.
 *
 * @param 	{HTMLElement} 	element Element to search in.
 * @param 	{string}		filter	The filter to match.
 * @return	{array}					Array of child elements that match the filter.
 */
function children(element, filter) {
    var children = Array.prototype.slice.call(element.children);
    return filter
        ? children.filter(function (child) { return child.matches(filter); })
        : children;
}
/**
 * Find text excluding text from within child elements.
 * @param   {HTMLElement}   element Element to search in.
 * @return  {string}                The text.
 */
function text(element) {
    return Array.prototype.slice
        .call(element.childNodes)
        .filter(function (child) { return child.nodeType == 3; })
        .map(function (child) { return child.textContent; })
        .join(' ');
}
/**
 * Find all preceding elements matching the selector.
 *
 * @param 	{HTMLElement} 	element Element to start searching from.
 * @param 	{string}		filter	The filter to match.
 * @return	{array}					Array of preceding elements that match the selector.
 */
function parents(element, filter) {
    /** Array of preceding elements that match the selector. */
    var parents = [];
    /** Array of preceding elements that match the selector. */
    var parent = element.parentElement;
    while (parent) {
        parents.push(parent);
        parent = parent.parentElement;
    }
    return filter
        ? parents.filter(function (parent) { return parent.matches(filter); })
        : parents;
}
/**
 * Find all previous siblings matching the selecotr.
 *
 * @param 	{HTMLElement} 	element Element to start searching from.
 * @param 	{string}		filter	The filter to match.
 * @return	{array}					Array of previous siblings that match the selector.
 */
function prevAll(element, filter) {
    /** Array of previous siblings that match the selector. */
    var previous = [];
    /** Current element in the loop */
    var current = element.previousElementSibling;
    while (current) {
        if (!filter || current.matches(filter)) {
            previous.push(current);
        }
        current = current.previousElementSibling;
    }
    return previous;
}
/**
 * Get an element offset relative to the document.
 *
 * @param 	{HTMLElement}	 element 			Element to start measuring from.
 * @param 	{string}		 [direction=top] 	Offset top or left.
 * @return	{number}							The element offset relative to the document.
 */
function offset(element, direction) {
    return (element.getBoundingClientRect()[direction] +
        document.body[direction === 'left' ? 'scrollLeft' : 'scrollTop']);
}
/**
 * Filter out non-listitem listitems.
 * @param  {array} listitems 	Elements to filter.
 * @return {array}				The filtered set of listitems.
 */
function filterLI(listitems) {
    return listitems.filter(function (listitem) { return !listitem.matches('.mm-hidden'); });
}
/**
 * Find anchors in listitems (excluding anchor that open a sub-panel).
 * @param  {array} 	listitems 	Elements to filter.
 * @return {array}				The found set of anchors.
 */
function filterLIA(listitems) {
    var anchors = [];
    filterLI(listitems).forEach(function (listitem) {
        anchors.push.apply(anchors, children(listitem, 'a.mm-listitem__text'));
    });
    return anchors.filter(function (anchor) { return !anchor.matches('.mm-btn_next'); });
}
/**
 * Refactor a classname on multiple elements.
 * @param {HTMLElement} element 	Element to refactor.
 * @param {string}		oldClass 	Classname to remove.
 * @param {string}		newClass 	Classname to add.
 */
function reClass(element, oldClass, newClass) {
    if (element.matches('.' + oldClass)) {
        element.classList.remove(oldClass);
        element.classList.add(newClass);
    }
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/dragevents/_defaults.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/dragevents/_defaults.js ***!
  \*********************************************************************/
/*! exports provided: area, treshold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treshold", function() { return treshold; });
/** How far from the sides the gesture can start. */
var area = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
/** Tresholds for gestures. */
var treshold = {
    start: 15,
    swipe: 15
};


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/dragevents/_helpers.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/dragevents/_helpers.js ***!
  \********************************************************************/
/*! exports provided: percentage2number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentage2number", function() { return percentage2number; });
/**
 * Calculate a distance from a percentage.
 * @param  {string|number}   position   The percentage (e.g. "75%").
 * @param  {number}          size       The available width or height in pixels.
 * @return {number}                     The calculated distance.
 */
var percentage2number = function (position, size) {
    if (typeof position == 'string') {
        if (position.slice(-1) == '%') {
            position = parseInt(position.slice(0, -1), 10);
            position = size * (position / 100);
        }
    }
    return position;
};


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/dragevents/_settings.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/dragevents/_settings.js ***!
  \*********************************************************************/
/*! exports provided: directionNames, state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionNames", function() { return directionNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/** Names of the possible directions. */
var directionNames = {
    x: ['Right', 'Left'],
    y: ['Down', 'Up']
};
/** States for the gesture. */
var state = {
    inactive: 0,
    watching: 1,
    dragging: 2
};


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/dragevents/_support.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/dragevents/_support.js ***!
  \********************************************************************/
/*! exports provided: touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return touch; });
/** Whether or not touch gestures are supported by the browser. */
var touch = 'ontouchstart' in window ||
    (navigator.msMaxTouchPoints ? true : false) ||
    false;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/dragevents/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/dragevents/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_support */ "./node_modules/mmenu-js/dist/_modules/dragevents/_support.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_defaults */ "./node_modules/mmenu-js/dist/_modules/dragevents/_defaults.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_settings */ "./node_modules/mmenu-js/dist/_modules/dragevents/_settings.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers */ "./node_modules/mmenu-js/dist/_modules/dragevents/_helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





var DragEvents = /** @class */ (function () {
    /**
     * Create the gestures.
     * @param {HTMLElement} surface     The surface for the gesture.
     * @param {object}      area        Restriction where on the surface the gesture can be started.
     * @param {object}      treshold    Treshold for the gestures.
     */
    function DragEvents(surface, area, treshold) {
        this.surface = surface;
        this.area = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["extend"])(area, _defaults__WEBPACK_IMPORTED_MODULE_1__["area"]);
        this.treshold = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["extend"])(treshold, _defaults__WEBPACK_IMPORTED_MODULE_1__["treshold"]);
        //	Set the mouse/touch events.
        if (!this.surface['mmHasDragEvents']) {
            this.surface.addEventListener(_support__WEBPACK_IMPORTED_MODULE_0__["touch"] ? 'touchstart' : 'mousedown', this.start.bind(this));
            this.surface.addEventListener(_support__WEBPACK_IMPORTED_MODULE_0__["touch"] ? 'touchend' : 'mouseup', this.stop.bind(this));
            this.surface.addEventListener(_support__WEBPACK_IMPORTED_MODULE_0__["touch"] ? 'touchleave' : 'mouseleave', this.stop.bind(this));
            this.surface.addEventListener(_support__WEBPACK_IMPORTED_MODULE_0__["touch"] ? 'touchmove' : 'mousemove', this.move.bind(this));
        }
        this.surface['mmHasDragEvents'] = true;
    }
    /**
     * Starting the touch gesture.
     * @param {Event} event The touch event.
     */
    DragEvents.prototype.start = function (event) {
        this.currentPosition = {
            x: event.touches ? event.touches[0].pageX : event.pageX || 0,
            y: event.touches ? event.touches[0].pageY : event.pageY || 0
        };
        /** The widht of the surface. */
        var width = this.surface.clientWidth;
        /** The height of the surface. */
        var height = this.surface.clientHeight;
        //  Check if the gesture started below the area.top.
        var top = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["percentage2number"])(this.area.top, height);
        if (typeof top == 'number') {
            if (this.currentPosition.y < top) {
                return;
            }
        }
        //  Check if the gesture started before the area.right.
        var right = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["percentage2number"])(this.area.right, width);
        if (typeof right == 'number') {
            right = width - right;
            if (this.currentPosition.x > right) {
                return;
            }
        }
        //  Check if the gesture started above the area.bottom.
        var bottom = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["percentage2number"])(this.area.bottom, height);
        if (typeof bottom == 'number') {
            bottom = height - bottom;
            if (this.currentPosition.y > bottom) {
                return;
            }
        }
        //  Check if the gesture started after the area.left.
        var left = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["percentage2number"])(this.area.left, width);
        if (typeof left == 'number') {
            if (this.currentPosition.x < left) {
                return;
            }
        }
        //	Store the start x- and y-position.
        this.startPosition = {
            x: this.currentPosition.x,
            y: this.currentPosition.y
        };
        //	Set the state of the gesture to "watching".
        this.state = _settings__WEBPACK_IMPORTED_MODULE_2__["state"].watching;
    };
    /**
     * Stopping the touch gesture.
     * @param {Event} event The touch event.
     */
    DragEvents.prototype.stop = function (event) {
        //	Dispatch the "dragEnd" events.
        if (this.state == _settings__WEBPACK_IMPORTED_MODULE_2__["state"].dragging) {
            /** The direction. */
            var dragDirection = this._dragDirection();
            /** The event information. */
            var detail = this._eventDetail(dragDirection);
            this._dispatchEvents('drag*End', detail);
            //	Dispatch the "swipe" events.
            if (Math.abs(this.movement[this.axis]) > this.treshold.swipe) {
                /** The direction. */
                var swipeDirection = this._swipeDirection();
                detail.direction = swipeDirection;
                this._dispatchEvents('swipe*', detail);
            }
        }
        //	Set the state of the gesture to "inactive".
        this.state = _settings__WEBPACK_IMPORTED_MODULE_2__["state"].inactive;
    };
    /**
     * Doing the touch gesture.
     * @param {Event} event The touch event.
     */
    DragEvents.prototype.move = function (event) {
        switch (this.state) {
            case _settings__WEBPACK_IMPORTED_MODULE_2__["state"].watching:
            case _settings__WEBPACK_IMPORTED_MODULE_2__["state"].dragging:
                var position = {
                    x: event.changedTouches
                        ? event.touches[0].pageX
                        : event.pageX || 0,
                    y: event.changedTouches
                        ? event.touches[0].pageY
                        : event.pageY || 0
                };
                this.movement = {
                    x: position.x - this.currentPosition.x,
                    y: position.y - this.currentPosition.y
                };
                this.distance = {
                    x: position.x - this.startPosition.x,
                    y: position.y - this.startPosition.y
                };
                this.currentPosition = {
                    x: position.x,
                    y: position.y
                };
                this.axis =
                    Math.abs(this.distance.x) > Math.abs(this.distance.y)
                        ? 'x'
                        : 'y';
                /** The direction. */
                var dragDirection = this._dragDirection();
                /** The event information. */
                var detail = this._eventDetail(dragDirection);
                //	Watching for the gesture to go past the treshold.
                if (this.state == _settings__WEBPACK_IMPORTED_MODULE_2__["state"].watching) {
                    if (Math.abs(this.distance[this.axis]) > this.treshold.start) {
                        this._dispatchEvents('drag*Start', detail);
                        //	Set the state of the gesture to "inactive".
                        this.state = _settings__WEBPACK_IMPORTED_MODULE_2__["state"].dragging;
                    }
                }
                //	Dispatch the "drag" events.
                if (this.state == _settings__WEBPACK_IMPORTED_MODULE_2__["state"].dragging) {
                    this._dispatchEvents('drag*Move', detail);
                }
                break;
        }
    };
    /**
     * Get the event details.
     * @param {string}  direction   Direction for the event (up, right, down, left).
     * @return {object}             The event details.
     */
    DragEvents.prototype._eventDetail = function (direction) {
        var distX = this.distance.x;
        var distY = this.distance.y;
        if (this.axis == 'x') {
            distX -= distX > 0 ? this.treshold.start : 0 - this.treshold.start;
        }
        if (this.axis == 'y') {
            distY -= distY > 0 ? this.treshold.start : 0 - this.treshold.start;
        }
        return {
            axis: this.axis,
            direction: direction,
            movementX: this.movement.x,
            movementY: this.movement.y,
            distanceX: distX,
            distanceY: distY
        };
    };
    /**
     * Dispatch the events
     * @param {string} eventName    The name for the events to dispatch.
     * @param {object} detail       The event details.
     */
    DragEvents.prototype._dispatchEvents = function (eventName, detail) {
        /** General event, e.g. "drag" */
        var event = new CustomEvent(eventName.replace('*', ''), { detail: detail });
        this.surface.dispatchEvent(event);
        /** Axis event, e.g. "dragX" */
        var axis = new CustomEvent(eventName.replace('*', this.axis.toUpperCase()), { detail: detail });
        this.surface.dispatchEvent(axis);
        /** Direction event, e.g. "dragLeft" */
        var direction = new CustomEvent(eventName.replace('*', detail.direction), {
            detail: detail
        });
        this.surface.dispatchEvent(direction);
    };
    /**
     * Get the dragging direction.
     * @return {string} The direction in which the user is dragging.
     */
    DragEvents.prototype._dragDirection = function () {
        return _settings__WEBPACK_IMPORTED_MODULE_2__["directionNames"][this.axis][this.distance[this.axis] > 0 ? 0 : 1];
    };
    /**
     * Get the dragging direction.
     * @return {string} The direction in which the user is dragging.
     */
    DragEvents.prototype._swipeDirection = function () {
        return _settings__WEBPACK_IMPORTED_MODULE_2__["directionNames"][this.axis][this.movement[this.axis] > 0 ? 0 : 1];
    };
    return DragEvents;
}());
/* harmony default export */ __webpack_exports__["default"] = (DragEvents);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/eventlisteners.js":
/*!***************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/eventlisteners.js ***!
  \***************************************************************/
/*! exports provided: on, off, trigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/**
 * Make the first letter in a word uppercase.
 * @param {string} word The word.
 */
function ucFirst(word) {
    if (!word) {
        return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}
/**
 * Bind an event listener to an element.
 * @param {HTMLElement} element     The element to bind the event listener to.
 * @param {string}      evnt        The event to listen to.
 * @param {funcion}     handler     The function to invoke.
 */
function on(element, evnt, handler) {
    //  Extract the event name and space from the event (the event can include a namespace (click.foo)).
    var evntParts = evnt.split('.');
    evnt = 'mmEvent' + ucFirst(evntParts[0]) + ucFirst(evntParts[1]);
    element[evnt] = element[evnt] || [];
    element[evnt].push(handler);
    element.addEventListener(evntParts[0], handler);
}
/**
 * Remove an event listener from an element.
 * @param {HTMLElement} element The element to remove the event listeners from.
 * @param {string}      evnt    The event to remove.
 */
function off(element, evnt) {
    //  Extract the event name and space from the event (the event can include a namespace (click.foo)).
    var evntParts = evnt.split('.');
    evnt = 'mmEvent' + ucFirst(evntParts[0]) + ucFirst(evntParts[1]);
    (element[evnt] || []).forEach(function (handler) {
        element.removeEventListener(evntParts[0], handler);
    });
}
/**
 * Trigger the bound event listeners on an element.
 * @param {HTMLElement} element     The element of which to trigger the event listeners from.
 * @param {string}      evnt        The event to trigger.
 * @param {object}      [options]   Options to pass to the handler.
 */
function trigger(element, evnt, options) {
    var evntParts = evnt.split('.');
    evnt = 'mmEvent' + ucFirst(evntParts[0]) + ucFirst(evntParts[1]);
    (element[evnt] || []).forEach(function (handler) {
        handler(options || {});
    });
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/helpers.js":
/*!********************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/helpers.js ***!
  \********************************************************/
/*! exports provided: extend, touchDirection, type, valueOrFn, transitionend, uniqueId, originalId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchDirection", function() { return touchDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueOrFn", function() { return valueOrFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionend", function() { return transitionend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originalId", function() { return originalId; });
/**
 * Deep extend an object with the given defaults.
 * Note that the extended object is not a clone, meaning the original object will also be updated.
 *
 * @param 	{object}	orignl	The object to extend to.
 * @param 	{object}	dfault	The object to extend from.
 * @return	{object}			The extended "orignl" object.
 */
function extend(orignl, dfault) {
    if (type(orignl) != 'object') {
        orignl = {};
    }
    if (type(dfault) != 'object') {
        dfault = {};
    }
    for (var k in dfault) {
        if (!dfault.hasOwnProperty(k)) {
            continue;
        }
        if (typeof orignl[k] == 'undefined') {
            orignl[k] = dfault[k];
        }
        else if (type(orignl[k]) == 'object') {
            extend(orignl[k], dfault[k]);
        }
    }
    return orignl;
}
/**
 * Detect the touch / dragging direction on a touch device.
 *
 * @param   {HTMLElement} surface   The element to monitor for touch events.
 * @return  {object}                Object with "get" function.
 */
function touchDirection(surface) {
    var direction = '';
    surface.addEventListener('touchmove', function (evnt) {
        direction = '';
        if (evnt.movementY > 0) {
            direction = 'down';
        }
        else if (evnt.movementY < 0) {
            direction = 'up';
        }
    });
    return {
        get: function () { return direction; }
    };
}
/**
 * Get the type of any given variable. Improvement of "typeof".
 *
 * @param 	{any}		variable	The variable.
 * @return	{string}				The type of the variable in lowercase.
 */
function type(variable) {
    return {}.toString
        .call(variable)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase();
}
/**
 * Find the value from an option or function.
 * @param 	{HTMLElement} 	element 	Scope for the function.
 * @param 	{any} 			[option] 	Value or function.
 * @param 	{any} 			[dfault] 	Default fallback value.
 * @return	{any}						The given evaluation of the given option, or the default fallback value.
 */
function valueOrFn(element, option, dfault) {
    if (typeof option == 'function') {
        var value = option.call(element);
        if (typeof value != 'undefined') {
            return value;
        }
    }
    if ((option === null ||
        typeof option == 'function' ||
        typeof option == 'undefined') &&
        typeof dfault != 'undefined') {
        return dfault;
    }
    return option;
}
/**
 * Set and invoke a (single) transition-end function with fallback.
 *
 * @param {HTMLElement} 	element 	Scope for the function.
 * @param {function}		func		Function to invoke.
 * @param {number}			duration	The duration of the animation (for the fallback).
 */
function transitionend(element, func, duration) {
    var _ended = false, _fn = function (evnt) {
        if (typeof evnt !== 'undefined') {
            if (evnt.target !== element) {
                return;
            }
        }
        if (!_ended) {
            element.removeEventListener('transitionend', _fn);
            element.removeEventListener('webkitTransitionEnd', _fn);
            func.call(element);
        }
        _ended = true;
    };
    element.addEventListener('transitionend', _fn);
    element.addEventListener('webkitTransitionEnd', _fn);
    setTimeout(_fn, duration * 1.1);
}
/**
 * Get a (page wide) unique ID.
 */
function uniqueId() {
    return 'mm-' + __id++;
}
var __id = 0;
/**
 * Get the original ID from a possibly prefixed ID.
 * @param id The possibly prefixed ID.
 */
function originalId(id) {
    if (id.slice(0, 3) == 'mm-') {
        return id.slice(3);
    }
    return id;
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/i18n.js":
/*!*****************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/i18n.js ***!
  \*****************************************************/
/*! exports provided: add, get, all */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");

var translations = {};
/**
 * Add translations to a language.
 * @param {object}  text        Object of key/value translations.
 * @param {string}  language    The translated language.
 */
function add(text, language) {
    if (typeof translations[language] == 'undefined') {
        translations[language] = {};
    }
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["extend"])(translations[language], text);
}
/**
 * Find a translated text in a language.
 * @param   {string} text       The text to find the translation for.
 * @param   {string} language   The language to search in.
 * @return  {string}            The translated text.
 */
function get(text, language) {
    if (typeof language == 'string' &&
        typeof translations[language] != 'undefined') {
        return translations[language][text] || text;
    }
    return text;
}
/**
 * Get all translated text in a language.
 * @param   {string} language   The language to search for.
 * @return  {object}            The translations.
 */
function all(language) {
    return translations;
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/matchmedia.js":
/*!***********************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/matchmedia.js ***!
  \***********************************************************/
/*! exports provided: add, watch, fire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
/** Collection of callback functions for media querys. */
var listeners = {};
/**
 * Bind functions to a matchMedia listener (subscriber).
 *
 * @param {string|number} 	query 	Media query to match or number for min-width.
 * @param {function} 		yes 	Function to invoke when the media query matches.
 * @param {function} 		no 		Function to invoke when the media query doesn't match.
 */
function add(query, yes, no) {
    if (typeof query == 'number') {
        query = '(min-width: ' + query + 'px)';
    }
    listeners[query] = listeners[query] || [];
    listeners[query].push({ yes: yes, no: no });
}
/**
 * Initialize the matchMedia listener.
 */
function watch() {
    var _loop_1 = function (query) {
        var mqlist = window.matchMedia(query);
        fire(query, mqlist);
        mqlist.onchange = function (evnt) {
            fire(query, mqlist);
        };
    };
    for (var query in listeners) {
        _loop_1(query);
    }
}
/**
 * Invoke the "yes" or "no" function for a matchMedia listener (publisher).
 *
 * @param {string} 			query 	Media query to check for.
 * @param {MediaQueryList} 	mqlist 	Media query list to check with.
 */
function fire(query, mqlist) {
    var fn = mqlist.matches ? 'yes' : 'no';
    for (var m = 0; m < listeners[query].length; m++) {
        listeners[query][m][fn]();
    }
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/_modules/support.js":
/*!********************************************************!*\
  !*** ./node_modules/mmenu-js/dist/_modules/support.js ***!
  \********************************************************/
/*! exports provided: touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return touch; });
/** Whether or not touch gestures are supported by the browser. */
var touch = 'ontouchstart' in window ||
    (navigator.msMaxTouchPoints ? true : false) ||
    false;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/autoheight/_options.js":
/*!******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/autoheight/_options.js ***!
  \******************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var opts = {
    height: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (opts);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean' && options) {
        options = {
            height: 'auto'
        };
    }
    if (typeof options == 'string') {
        options = {
            height: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/autoheight/mmenu.autoheight.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/autoheight/mmenu.autoheight.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/autoheight/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





//	Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.autoHeight = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.autoHeight);
    this.opts.autoHeight = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.autoHeight);
    if (options.height != 'auto' && options.height != 'highest') {
        return;
    }
    var setHeight = (function () {
        var getCurrent = function () {
            var panel = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel_opened')[0];
            if (panel) {
                panel = measurablePanel(panel);
            }
            //	Fallback, just to be sure we have a panel.
            if (!panel) {
                panel = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel')[0];
            }
            return panel.scrollHeight;
        };
        var getHighest = function () {
            var highest = 0;
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel').forEach(function (panel) {
                panel = measurablePanel(panel);
                highest = Math.max(highest, panel.scrollHeight);
            });
            return highest;
        };
        var measurablePanel = function (panel) {
            //	If it's a vertically expanding panel...
            if (panel.parentElement.matches('.mm-listitem_vertical')) {
                //	...find the first parent panel that isn't.
                panel = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["parents"](panel, '.mm-panel').filter(function (panel) {
                    return !panel.parentElement.matches('.mm-listitem_vertical');
                })[0];
            }
            return panel;
        };
        return function () {
            if (_this.opts.offCanvas && !_this.vars.opened) {
                return;
            }
            var _hgh = 0;
            var _dif = _this.node.menu.offsetHeight - _this.node.pnls.offsetHeight;
            //	The "measuring" classname undoes some CSS to be able to measure the height.
            _this.node.menu.classList.add('mm-menu_autoheight-measuring');
            //	Measure the height.
            if (options.height == 'auto') {
                _hgh = getCurrent();
            }
            else if (options.height == 'highest') {
                _hgh = getHighest();
            }
            //	Set the height.
            _this.node.menu.style.height = _hgh + _dif + 'px';
            //	Remove the "measuring" classname.
            _this.node.menu.classList.remove('mm-menu_autoheight-measuring');
        };
    })();
    //	Add the autoheight class to the menu.
    this.bind('initMenu:after', function () {
        _this.node.menu.classList.add('mm-menu_autoheight');
    });
    if (this.opts.offCanvas) {
        //	Measure the height when opening the off-canvas menu.
        this.bind('open:start', setHeight);
    }
    if (options.height == 'highest') {
        //	Measure the height when initiating panels.
        this.bind('initPanels:after', setHeight);
    }
    if (options.height == 'auto') {
        //	Measure the height when updating listviews.
        this.bind('updateListview', setHeight);
        //	Measure the height when opening a panel.
        this.bind('openPanel:start', setHeight);
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/backbutton/_options.js":
/*!******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/backbutton/_options.js ***!
  \******************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    close: false,
    open: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            close: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/backbutton/mmenu.backbutton.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/backbutton/mmenu.backbutton.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/backbutton/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





//	Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.backButton = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    if (!this.opts.offCanvas) {
        return;
    }
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.backButton);
    this.opts.backButton = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.backButton);
    var _menu = '#' + this.node.menu.id;
    //	Close menu
    if (options.close) {
        var states = [];
        var setStates = function () {
            states = [_menu];
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel_opened, .mm-panel_opened-parent').forEach(function (panel) {
                states.push('#' + panel.id);
            });
        };
        this.bind('open:finish', function () {
            history.pushState(null, document.title, _menu);
        });
        this.bind('open:finish', setStates);
        this.bind('openPanel:finish', setStates);
        this.bind('close:finish', function () {
            states = [];
            history.back();
            history.pushState(null, document.title, location.pathname + location.search);
        });
        window.addEventListener('popstate', function (evnt) {
            if (_this.vars.opened) {
                if (states.length) {
                    states = states.slice(0, -1);
                    var hash = states[states.length - 1];
                    if (hash == _menu) {
                        _this.close();
                    }
                    else {
                        _this.openPanel(_this.node.menu.querySelector(hash));
                        history.pushState(null, document.title, _menu);
                    }
                }
            }
        });
    }
    if (options.open) {
        window.addEventListener('popstate', function (evnt) {
            if (!_this.vars.opened && location.hash == _menu) {
                _this.open();
            }
        });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/columns/_options.js":
/*!***************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/columns/_options.js ***!
  \***************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    add: false,
    visible: {
        min: 1,
        max: 3
    }
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            add: options
        };
    }
    if (typeof options == 'number') {
        options = {
            add: true,
            visible: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    if (typeof options.visible == 'number') {
        options.visible = {
            min: options.visible,
            max: options.visible
        };
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/columns/mmenu.columns.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/columns/mmenu.columns.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/columns/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





//	Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.columns = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.columns);
    this.opts.columns = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.columns);
    //	Add the columns
    if (options.add) {
        options.visible.min = Math.max(1, Math.min(6, options.visible.min));
        options.visible.max = Math.max(options.visible.min, Math.min(6, options.visible.max));
        /** Columns related clasnames for the menu. */
        var colm = [];
        /** Columns related clasnames for the panels. */
        var colp = [];
        /** Classnames to remove from panels in favor of showing columns. */
        var rmvc = [
            'mm-panel_opened',
            'mm-panel_opened-parent',
            'mm-panel_highest',
        ];
        for (var i = 0; i <= options.visible.max; i++) {
            colm.push('mm-menu_columns-' + i);
            colp.push('mm-panel_columns-' + i);
        }
        rmvc.push.apply(rmvc, colp);
        //	Close all later opened panels
        this.bind('openPanel:before', function (panel) {
            /** The parent panel. */
            var parent;
            if (panel) {
                parent = panel['mmParent'];
            }
            if (!parent) {
                return;
            }
            if (parent.classList.contains('mm-listitem_vertical')) {
                return;
            }
            parent = parent.closest('.mm-panel');
            if (!parent) {
                return;
            }
            var classname = parent.className;
            if (!classname.length) {
                return;
            }
            classname = classname.split('mm-panel_columns-')[1];
            if (!classname) {
                return;
            }
            var colnr = parseInt(classname.split(' ')[0], 10) + 1;
            while (colnr > 0) {
                panel = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel_columns-' + colnr)[0];
                if (panel) {
                    colnr++;
                    panel.classList.add('mm-hidden');
                    //  IE11:
                    rmvc.forEach(function (classname) {
                        panel.classList.remove(classname);
                    });
                    //  Better browsers:
                    // panel.classList.remove(...rmvc);
                }
                else {
                    colnr = -1;
                    break;
                }
            }
        });
        this.bind('openPanel:start', function (panel) {
            if (panel) {
                /** The parent panel. */
                var parent_1 = panel['mmParent'];
                if (parent_1 &&
                    parent_1.classList.contains('mm-listitem_vertical')) {
                    return;
                }
            }
            var columns = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel_opened-parent').length;
            if (!panel.matches('.mm-panel_opened-parent')) {
                columns++;
            }
            columns = Math.min(options.visible.max, Math.max(options.visible.min, columns));
            //  IE11:
            colm.forEach(function (classname) {
                _this.node.menu.classList.remove(classname);
            });
            //  Better browsers:
            // this.node.menu.classList.remove(...colm);
            _this.node.menu.classList.add('mm-menu_columns-' + columns);
            var panels = [];
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel').forEach(function (panel) {
                //  IE11:
                colp.forEach(function (classname) {
                    panel.classList.remove(classname);
                });
                //  Better browsers:
                // panel.classList.remove(...colp);
                if (panel.matches('.mm-panel_opened-parent')) {
                    panels.push(panel);
                }
            });
            panels.push(panel);
            panels.slice(-options.visible.max).forEach(function (panel, p) {
                panel.classList.add('mm-panel_columns-' + p);
            });
        });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/counters/_options.js":
/*!****************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/counters/_options.js ***!
  \****************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    add: false,
    addTo: 'panels',
    count: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            add: options,
            addTo: 'panels',
            count: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    if (options.addTo == 'panels') {
        options.addTo = '.mm-listview';
    }
    return options;
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/counters/mmenu.counters.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/counters/mmenu.counters.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/counters/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





//	Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.counters = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
//	Add the classnames.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.classNames.counters = {
    counter: 'Counter'
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.counters);
    this.opts.counters = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.counters);
    //	Refactor counter class
    this.bind('initListview:after', function (listview) {
        var cntrclss = _this.conf.classNames.counters.counter, counters = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](listview, '.' + cntrclss);
        counters.forEach(function (counter) {
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["reClass"](counter, cntrclss, 'mm-counter');
        });
    });
    //	Add the counters after a listview is initiated.
    if (options.add) {
        this.bind('initListview:after', function (listview) {
            if (!listview.matches(options.addTo)) {
                return;
            }
            var parent = listview.closest('.mm-panel')['mmParent'];
            if (parent) {
                //	Check if no counter already excists.
                if (!_modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](parent, '.mm-counter').length) {
                    var btn = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](parent, '.mm-btn')[0];
                    if (btn) {
                        btn.prepend(_modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('span.mm-counter'));
                    }
                }
            }
        });
    }
    if (options.count) {
        var count = function (listview) {
            var panels = listview
                ? [listview.closest('.mm-panel')]
                : _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel');
            panels.forEach(function (panel) {
                var parent = panel['mmParent'];
                if (!parent) {
                    return;
                }
                var counter = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](parent, '.mm-counter')[0];
                if (!counter) {
                    return;
                }
                var listitems = [];
                _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](panel, '.mm-listview').forEach(function (listview) {
                    listitems.push.apply(listitems, _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](listview));
                });
                counter.innerHTML = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["filterLI"](listitems).length.toString();
            });
        };
        this.bind('initListview:after', count);
        this.bind('updateListview', count);
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/dividers/_options.js":
/*!****************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/dividers/_options.js ***!
  \****************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    add: false,
    addTo: 'panels'
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            add: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    if (options.addTo == 'panels') {
        options.addTo = '.mm-listview';
    }
    return options;
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/dividers/mmenu.dividers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/dividers/mmenu.dividers.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/dividers/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





//	Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.dividers = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
//  Add the classnames.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.classNames.divider = 'Divider';
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.dividers);
    this.opts.dividers = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.dividers);
    //	Refactor divider classname
    this.bind('initListview:after', function (listview) {
        _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](listview).forEach(function (listitem) {
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["reClass"](listitem, _this.conf.classNames.divider, 'mm-divider');
            if (listitem.matches('.mm-divider')) {
                listitem.classList.remove('mm-listitem');
            }
        });
    });
    //	Add dividers
    if (options.add) {
        this.bind('initListview:after', function (listview) {
            if (!listview.matches(options.addTo)) {
                return;
            }
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](listview, '.mm-divider').forEach(function (divider) {
                divider.remove();
            });
            var lastletter = '', listitems = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](listview);
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["filterLI"](listitems).forEach(function (listitem) {
                var letter = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](listitem, '.mm-listitem__text')[0]
                    .textContent.trim()
                    .toLowerCase()[0];
                if (letter.length && letter != lastletter) {
                    lastletter = letter;
                    var divider = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('li.mm-divider');
                    divider.textContent = letter;
                    listview.insertBefore(divider, listitem);
                }
            });
        });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/drag/_drag.open.js":
/*!**************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/drag/_drag.open.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dragevents_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_modules/dragevents/index */ "./node_modules/mmenu-js/dist/_modules/dragevents/index.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/eventlisteners */ "./node_modules/mmenu-js/dist/_modules/eventlisteners.js");
/* harmony import */ var _modules_matchmedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/matchmedia */ "./node_modules/mmenu-js/dist/_modules/matchmedia.js");




/** Instance of the DragEvents class. */
var dragInstance = null;
/** THe node that can be dragged. */
var dragNode = null;
/** How far the page (or menu) can be dragged. */
var maxDistance = 0;
/* harmony default export */ __webpack_exports__["default"] = (function (page) {
    var _this = this;
    /** Variables that vary for each menu position (top, right, bottom, left. front, back). */
    var vars = {};
    /** Whether or not the page or menu is actually being moved. */
    var moving = false;
    /**
     * Add the dragging events.
     */
    var addEvents = function () {
        if (dragNode) {
            //  Prepare the page or menu to be moved.
            _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_2__["on"](dragNode, 'dragStart', function (evnt) {
                if (evnt['detail'].direction == vars.direction) {
                    moving = true;
                    //  Class prevents interaction with the page.
                    _this.node.wrpr.classList.add('mm-wrapper_dragging');
                    //  Prepare the menu to be opened.
                    _this._openSetup();
                    _this.trigger('open:start');
                    //  Get the maximum distance to move out the page or menu.
                    maxDistance = _this.node.menu[vars.axis == 'x' ? 'clientWidth' : 'clientHeight'];
                }
            });
            //  Move the page or menu when dragging.
            _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_2__["on"](dragNode, 'dragMove', function (evnt) {
                if (evnt['detail'].axis == vars.axis) {
                    if (moving) {
                        var distance = evnt['detail']['distance' + vars.axis.toUpperCase()];
                        switch (vars.position) {
                            case 'right':
                            case 'bottom':
                                distance = Math.min(Math.max(distance, -maxDistance), 0);
                                break;
                            default:
                                distance = Math.max(Math.min(distance, maxDistance), 0);
                        }
                        //  Deviate for position front (the menu starts out of view).
                        if (vars.zposition == 'front') {
                            switch (vars.position) {
                                case 'right':
                                case 'bottom':
                                    distance += maxDistance;
                                    break;
                                default:
                                    distance -= maxDistance;
                                    break;
                            }
                        }
                        vars.slideOutNodes.forEach(function (node) {
                            node.style['transform'] =
                                'translate' +
                                    vars.axis.toUpperCase() +
                                    '(' +
                                    distance +
                                    'px)';
                        });
                    }
                }
            });
            //  Stop the page or menu from being moved.
            _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_2__["on"](dragNode, 'dragEnd', function (evnt) {
                if (evnt['detail'].axis == vars.axis) {
                    if (moving) {
                        moving = false;
                        _this.node.wrpr.classList.remove('mm-wrapper_dragging');
                        vars.slideOutNodes.forEach(function (node) {
                            node.style['transform'] = '';
                        });
                        //  Determine if the menu should open or close.
                        var open_1 = Math.abs(evnt['detail']['distance' + vars.axis.toUpperCase()]) >=
                            maxDistance * 0.75;
                        if (!open_1) {
                            var movement = evnt['detail']['movement' + vars.axis.toUpperCase()];
                            switch (vars.position) {
                                case 'right':
                                case 'bottom':
                                    open_1 = movement <= 0;
                                    break;
                                default:
                                    open_1 = movement >= 0;
                                    break;
                            }
                        }
                        if (open_1) {
                            _this._openStart();
                        }
                        else {
                            _this.close();
                        }
                    }
                }
            });
        }
    };
    /**
     * Remove the dragging events.
     */
    var removeEvents = function () {
        if (dragNode) {
            _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_2__["off"](dragNode, 'dragStart');
            _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_2__["off"](dragNode, 'dragMove');
            _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_2__["off"](dragNode, 'dragEnd');
        }
    };
    var addMatchMedia = function () {
        var queries = Object.keys(_this.opts.extensions);
        if (queries.length) {
            //  A media query that'll match if any of the other media query matches:
            //    set the defaults if it doesn't match.
            _modules_matchmedia__WEBPACK_IMPORTED_MODULE_3__["add"](queries.join(', '), function () { }, function () {
                vars = getPositionVars(vars, [], _this.node.menu);
            });
            //  The other media queries.
            queries.forEach(function (query) {
                _modules_matchmedia__WEBPACK_IMPORTED_MODULE_3__["add"](query, function () {
                    vars = getPositionVars(vars, _this.opts.extensions[query], _this.node.menu);
                }, function () { });
            });
            //  No extensions, just use the defaults.
        }
        else {
            vars = getPositionVars(vars, [], _this.node.menu);
        }
    };
    //  Remove events from previous "page"
    removeEvents();
    //  Store new "page"
    dragNode = page;
    //  Initialize the drag events.
    dragInstance = new _modules_dragevents_index__WEBPACK_IMPORTED_MODULE_0__["default"](dragNode);
    addMatchMedia();
    addMatchMedia = function () { };
    addEvents();
});
var getPositionVars = function (vars, extensions, menu) {
    //  Default position and z-position.
    vars.position = 'left';
    vars.zposition = 'back';
    //  Find position.
    ['right', 'top', 'bottom'].forEach(function (pos) {
        if (extensions.indexOf('position-' + pos) > -1) {
            vars.position = pos;
        }
    });
    //  Find z-position.
    ['front', 'top', 'bottom'].forEach(function (pos) {
        if (extensions.indexOf('position-' + pos) > -1) {
            vars.zposition = 'front';
        }
    });
    //  Set the area where the dragging can start.
    dragInstance.area = {
        top: vars.position == 'bottom' ? '75%' : 0,
        right: vars.position == 'left' ? '75%' : 0,
        bottom: vars.position == 'top' ? '75%' : 0,
        left: vars.position == 'right' ? '75%' : 0
    };
    //  What side of the menu to measure (width or height).
    //  What axis to drag the menu along (x or y).
    switch (vars.position) {
        case 'top':
        case 'bottom':
            vars.axis = 'y';
            break;
        default:
            vars.axis = 'x';
    }
    //  What direction to drag in.
    switch (vars.position) {
        case 'top':
            vars.direction = 'Down';
            break;
        case 'right':
            vars.direction = 'Left';
            break;
        case 'bottom':
            vars.direction = 'Up';
            break;
        default:
            vars.direction = 'Right';
    }
    //  What nodes to slide out while dragging.
    switch (vars.zposition) {
        case 'front':
            vars.slideOutNodes = [menu];
            break;
        default:
            vars.slideOutNodes = _modules_dom__WEBPACK_IMPORTED_MODULE_1__["find"](document.body, '.mm-slideout');
    }
    return vars;
};


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/drag/_options.js":
/*!************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/drag/_options.js ***!
  \************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    open: false,
    node: null
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            open: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/drag/mmenu.drag.js":
/*!**************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/drag/mmenu.drag.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/drag/_options.js");
/* harmony import */ var _drag_open__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_drag.open */ "./node_modules/mmenu-js/dist/addons/drag/_drag.open.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





//	Add the options and configs.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.drag = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    if (!this.opts.offCanvas) {
        return;
    }
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.drag);
    this.opts.drag = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.drag);
    //	Drag open the menu
    if (options.open) {
        this.bind('setPage:after', function (page) {
            _drag_open__WEBPACK_IMPORTED_MODULE_2__["default"].call(_this, options.node || page);
        });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/dropdown/_configs.js":
/*!****************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/dropdown/_configs.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var configs = {
    offset: {
        button: {
            x: -5,
            y: 5
        },
        viewport: {
            x: 20,
            y: 20
        }
    },
    height: {
        max: 880
    },
    width: {
        max: 440
    }
};
/* harmony default export */ __webpack_exports__["default"] = (configs);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/dropdown/_options.js":
/*!****************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/dropdown/_options.js ***!
  \****************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    drop: false,
    fitViewport: true,
    event: 'click',
    position: {},
    tip: true
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean' && options) {
        options = {
            drop: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    if (typeof options.position == 'string') {
        options.position = {
            of: options.position
        };
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/dropdown/mmenu.dropdown.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/dropdown/mmenu.dropdown.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/dropdown/_options.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_configs */ "./node_modules/mmenu-js/dist/addons/dropdown/_configs.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");






//	Add the options and configs.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.dropdown = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.dropdown = _configs__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    if (!this.opts.offCanvas) {
        return;
    }
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.dropdown);
    this.opts.dropdown = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.dropdown);
    var configs = this.conf.dropdown;
    if (!options.drop) {
        return;
    }
    var button;
    this.bind('initMenu:after', function () {
        _this.node.menu.classList.add('mm-menu_dropdown');
        if (typeof options.position.of != 'string') {
            var id = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_4__["originalId"])(_this.node.menu.id);
            if (id) {
                options.position.of = '[href="#' + id + '"]';
            }
        }
        if (typeof options.position.of != 'string') {
            return;
        }
        //	Get the button to put the menu next to
        button = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["find"](document.body, options.position.of)[0];
        //	Emulate hover effect
        var events = options.event.split(' ');
        if (events.length == 1) {
            events[1] = events[0];
        }
        if (events[0] == 'hover') {
            button.addEventListener('mouseenter', function () {
                _this.open();
            }, { passive: true });
        }
        if (events[1] == 'hover') {
            _this.node.menu.addEventListener('mouseleave', function () {
                _this.close();
            }, { passive: true });
        }
    });
    //	Add/remove classname and style when opening/closing the menu
    this.bind('open:start', function () {
        _this.node.menu['mmStyle'] = _this.node.menu.getAttribute('style');
        _this.node.wrpr.classList.add('mm-wrapper_dropdown');
    });
    this.bind('close:finish', function () {
        _this.node.menu.setAttribute('style', _this.node.menu['mmStyle']);
        _this.node.wrpr.classList.remove('mm-wrapper_dropdown');
    });
    /**
     * Find the position (x, y) and sizes (width, height) for the menu.
     *
     * @param  {string} dir The direction to measure ("x" for horizontal, "y" for vertical)
     * @param  {object} obj The object where (previously) measured values are stored.
     * @return {object}		The object where measered values are stored.
     */
    var getPosition = function (dir, obj) {
        var css = obj[0], cls = obj[1];
        var _outerSize = dir == 'x' ? 'offsetWidth' : 'offsetHeight', _startPos = dir == 'x' ? 'left' : 'top', _stopPos = dir == 'x' ? 'right' : 'bottom', _size = dir == 'x' ? 'width' : 'height', _winSize = dir == 'x' ? 'innerWidth' : 'innerHeight', _maxSize = dir == 'x' ? 'maxWidth' : 'maxHeight', _position = null;
        var startPos = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["offset"](button, _startPos), stopPos = startPos + button[_outerSize], windowSize = window[_winSize];
        /** Offset for the menu relative to the button. */
        var offs = configs.offset.button[dir] + configs.offset.viewport[dir];
        //	Position set in option
        if (options.position[dir]) {
            switch (options.position[dir]) {
                case 'left':
                case 'bottom':
                    _position = 'after';
                    break;
                case 'right':
                case 'top':
                    _position = 'before';
                    break;
            }
        }
        //	Position not set in option, find most space
        if (_position === null) {
            _position =
                startPos + (stopPos - startPos) / 2 < windowSize / 2
                    ? 'after'
                    : 'before';
        }
        //	Set position and max
        var val, max;
        if (_position == 'after') {
            val = dir == 'x' ? startPos : stopPos;
            max = windowSize - (val + offs);
            css[_startPos] = val + configs.offset.button[dir] + 'px';
            css[_stopPos] = 'auto';
            if (options.tip) {
                cls.push('mm-menu_tip-' + (dir == 'x' ? 'left' : 'top'));
            }
        }
        else {
            val = dir == 'x' ? stopPos : startPos;
            max = val - offs;
            css[_stopPos] =
                'calc( 100% - ' + (val - configs.offset.button[dir]) + 'px )';
            css[_startPos] = 'auto';
            if (options.tip) {
                cls.push('mm-menu_tip-' + (dir == 'x' ? 'right' : 'bottom'));
            }
        }
        if (options.fitViewport) {
            css[_maxSize] = Math.min(configs[_size].max, max) + 'px';
        }
        return [css, cls];
    };
    function position() {
        var _this = this;
        if (!this.vars.opened) {
            return;
        }
        this.node.menu.setAttribute('style', this.node.menu['mmStyle']);
        var obj = [{}, []];
        obj = getPosition.call(this, 'y', obj);
        obj = getPosition.call(this, 'x', obj);
        for (var s in obj[0]) {
            this.node.menu.style[s] = obj[0][s];
        }
        if (options.tip) {
            var classnames = [
                'mm-menu_tip-left',
                'mm-menu_tip-right',
                'mm-menu_tip-top',
                'mm-menu_tip-bottom'
            ];
            //  IE11:
            classnames.forEach(function (classname) {
                _this.node.menu.classList.remove(classname);
            });
            obj[1].forEach(function (classname) {
                _this.node.menu.classList.add(classname);
            });
            //  Better browsers:
            // this.node.menu.classList.remove(...classnames);
            // this.node.menu.classList.add(...obj[1]);
        }
    }
    this.bind('open:start', position);
    window.addEventListener('resize', function (evnt) {
        position.call(_this);
    }, { passive: true });
    if (!this.opts.offCanvas.blockUI) {
        window.addEventListener('scroll', function (evnt) {
            position.call(_this);
        }, { passive: true });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/fixedelements/_configs.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/fixedelements/_configs.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var configs = {
    insertMethod: 'append',
    insertSelector: 'body'
};
/* harmony default export */ __webpack_exports__["default"] = (configs);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/fixedelements/mmenu.fixedelements.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/fixedelements/mmenu.fixedelements.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_configs */ "./node_modules/mmenu-js/dist/addons/fixedelements/_configs.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");



//	Add the configs.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.fixedElements = _configs__WEBPACK_IMPORTED_MODULE_1__["default"];
//	Add the classnames.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.classNames.fixedElements = {
    fixed: 'Fixed'
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    if (!this.opts.offCanvas) {
        return;
    }
    var configs = this.conf.fixedElements;
    var _fixd, fixed, wrppr;
    this.bind('setPage:after', function (page) {
        _fixd = _this.conf.classNames.fixedElements.fixed;
        wrppr = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](document, configs.insertSelector)[0];
        fixed = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](page, '.' + _fixd);
        fixed.forEach(function (fxd) {
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["reClass"](fxd, _fixd, 'mm-slideout');
            wrppr[configs.insertMethod](fxd);
        });
    });
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/iconbar/_options.js":
/*!***************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/iconbar/_options.js ***!
  \***************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");

var options = {
    use: false,
    top: [],
    bottom: [],
    position: 'left',
    type: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_0__["type"])(options) == 'array') {
        options = {
            use: true,
            top: options
        };
    }
    if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_0__["type"])(options) != 'object') {
        options = {};
    }
    if (typeof options.use == 'undefined') {
        options.use = true;
    }
    if (typeof options.use == 'boolean' && options.use) {
        options.use = true;
    }
    return options;
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/iconbar/mmenu.iconbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/iconbar/mmenu.iconbar.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/iconbar/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_matchmedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/matchmedia */ "./node_modules/mmenu-js/dist/_modules/matchmedia.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");






//  Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.iconbar = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.iconbar);
    this.opts.iconbar = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.iconbar);
    if (!options.use) {
        return;
    }
    var iconbar;
    ['top', 'bottom'].forEach(function (position, n) {
        var ctnt = options[position];
        //	Extend shorthand options
        if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_4__["type"])(ctnt) != 'array') {
            ctnt = [ctnt];
        }
        //	Create node
        var part = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('div.mm-iconbar__' + position);
        //	Add content
        for (var c = 0, l = ctnt.length; c < l; c++) {
            if (typeof ctnt[c] == 'string') {
                part.innerHTML += ctnt[c];
            }
            else {
                part.append(ctnt[c]);
            }
        }
        if (part.children.length) {
            if (!iconbar) {
                iconbar = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('div.mm-iconbar');
            }
            iconbar.append(part);
        }
    });
    //	Add to menu
    if (iconbar) {
        //	Add the iconbar.
        this.bind('initMenu:after', function () {
            _this.node.menu.prepend(iconbar);
        });
        //	En-/disable the iconbar.
        var classname_1 = 'mm-menu_iconbar-' + options.position;
        var enable = function () {
            _this.node.menu.classList.add(classname_1);
            _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(iconbar, 'hidden', false);
        };
        var disable = function () {
            _this.node.menu.classList.remove(classname_1);
            _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(iconbar, 'hidden', true);
        };
        if (typeof options.use == 'boolean') {
            this.bind('initMenu:after', enable);
        }
        else {
            _modules_matchmedia__WEBPACK_IMPORTED_MODULE_3__["add"](options.use, enable, disable);
        }
        //	Tabs
        if (options.type == 'tabs') {
            iconbar.classList.add('mm-iconbar_tabs');
            iconbar.addEventListener('click', function (evnt) {
                var anchor = evnt.target;
                if (!anchor.matches('a')) {
                    return;
                }
                if (anchor.matches('.mm-iconbar__tab_selected')) {
                    evnt.stopImmediatePropagation();
                    return;
                }
                try {
                    var panel = _this.node.menu.querySelector(anchor.getAttribute('href'))[0];
                    if (panel && panel.matches('.mm-panel')) {
                        evnt.preventDefault();
                        evnt.stopImmediatePropagation();
                        _this.openPanel(panel, false);
                    }
                }
                catch (err) { }
            });
            var selectTab_1 = function (panel) {
                _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](iconbar, 'a').forEach(function (anchor) {
                    anchor.classList.remove('mm-iconbar__tab_selected');
                });
                var anchor = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](iconbar, '[href="#' + panel.id + '"]')[0];
                if (anchor) {
                    anchor.classList.add('mm-iconbar__tab_selected');
                }
                else {
                    var parent_1 = panel['mmParent'];
                    if (parent_1) {
                        selectTab_1(parent_1.closest('.mm-panel'));
                    }
                }
            };
            this.bind('openPanel:start', selectTab_1);
        }
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/iconpanels/_options.js":
/*!******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/iconpanels/_options.js ***!
  \******************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    add: false,
    blockPanel: true,
    hideDivider: false,
    hideNavbar: true,
    visible: 3
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            add: options
        };
    }
    if (typeof options == 'number' ||
        typeof options == 'string') {
        options = {
            add: true,
            visible: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/iconpanels/mmenu.iconpanels.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/iconpanels/mmenu.iconpanels.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/iconpanels/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





//	Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.iconPanels = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.iconPanels);
    this.opts.iconPanels = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.iconPanels);
    var keepFirst = false;
    if (options.visible == 'first') {
        keepFirst = true;
        options.visible = 1;
    }
    options.visible = Math.min(3, Math.max(1, options.visible));
    options.visible++;
    //	Add the iconpanels
    if (options.add) {
        this.bind('initMenu:after', function () {
            var classnames = ['mm-menu_iconpanel'];
            if (options.hideNavbar) {
                classnames.push('mm-menu_hidenavbar');
            }
            if (options.hideDivider) {
                classnames.push('mm-menu_hidedivider');
            }
            //  IE11:
            classnames.forEach(function (classname) {
                _this.node.menu.classList.add(classname);
            });
            //  Better browsers:
            // this.node.menu.classList.add(...classnames);
        });
        var classnames_1 = [];
        if (!keepFirst) {
            for (var i = 0; i <= options.visible; i++) {
                classnames_1.push('mm-panel_iconpanel-' + i);
            }
        }
        this.bind('openPanel:start', function (panel) {
            var panels = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel');
            panel = panel || panels[0];
            if (panel.parentElement.matches('.mm-listitem_vertical')) {
                return;
            }
            if (keepFirst) {
                panels.forEach(function (panel, p) {
                    panel.classList[p == 0 ? 'add' : 'remove']('mm-panel_iconpanel-first');
                });
            }
            else {
                //	Remove the "iconpanel" classnames from all panels.
                panels.forEach(function (panel) {
                    //  IE11:
                    classnames_1.forEach(function (classname) {
                        panel.classList.remove(classname);
                    });
                    //  Better browsers:
                    // panel.classList.remove(...classnames);
                });
                //	Filter out panels that are not opened.
                panels = panels.filter(function (panel) {
                    return panel.matches('.mm-panel_opened-parent');
                });
                //	Add the current panel to the list.
                var panelAdded_1 = false;
                panels.forEach(function (elem) {
                    if (panel === elem) {
                        panelAdded_1 = true;
                    }
                });
                if (!panelAdded_1) {
                    panels.push(panel);
                }
                //	Remove the "hidden" classname from all opened panels.
                panels.forEach(function (panel) {
                    panel.classList.remove('mm-hidden');
                });
                //	Slice the opened panels to the max visible amount.
                panels = panels.slice(-options.visible);
                //	Add the "iconpanel" classnames.
                panels.forEach(function (panel, p) {
                    panel.classList.add('mm-panel_iconpanel-' + p);
                });
            }
        });
        this.bind('initPanel:after', function (panel) {
            if (options.blockPanel &&
                !panel.parentElement.matches('.mm-listitem_vertical') &&
                !_modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](panel, '.mm-panel__blocker')[0]) {
                var blocker = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('a.mm-panel__blocker');
                blocker.setAttribute('href', '#' + panel.closest('.mm-panel').id);
                panel.prepend(blocker);
            }
        });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/keyboardnavigation/_options.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/keyboardnavigation/_options.js ***!
  \**************************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    enable: false,
    enhance: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean' || typeof options == 'string') {
        options = {
            enable: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/keyboardnavigation/mmenu.keyboardnavigation.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/keyboardnavigation/mmenu.keyboardnavigation.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/keyboardnavigation/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/eventlisteners */ "./node_modules/mmenu-js/dist/_modules/eventlisteners.js");
/* harmony import */ var _modules_support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/support */ "./node_modules/mmenu-js/dist/_modules/support.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");







//  Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.keyboardNavigation = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    //	Keyboard navigation on touchscreens opens the virtual keyboard :/
    //	Lets prevent that.
    if (_modules_support__WEBPACK_IMPORTED_MODULE_4__["touch"]) {
        return;
    }
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.keyboardNavigation);
    this.opts.keyboardNavigation = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_5__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.keyboardNavigation);
    //	Enable keyboard navigation
    if (options.enable) {
        var menuStart_1 = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('button.mm-tabstart.mm-sronly'), menuEnd_1 = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('button.mm-tabend.mm-sronly'), blockerEnd_1 = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('button.mm-tabend.mm-sronly');
        this.bind('initMenu:after', function () {
            if (options.enhance) {
                _this.node.menu.classList.add('mm-menu_keyboardfocus');
            }
            initWindow.call(_this, options.enhance);
        });
        this.bind('initOpened:before', function () {
            _this.node.menu.prepend(menuStart_1);
            _this.node.menu.append(menuEnd_1);
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.menu, '.mm-navbars-top, .mm-navbars-bottom').forEach(function (navbars) {
                navbars.querySelectorAll('.mm-navbar__title').forEach(function (title) {
                    title.setAttribute('tabindex', '-1');
                });
            });
        });
        this.bind('initBlocker:after', function () {
            _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck.append(blockerEnd_1);
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck, 'a')[0].classList.add('mm-tabstart');
        });
        var focusable_1 = 'input, select, textarea, button, label, a[href]';
        var setFocus = function (panel) {
            panel =
                panel || _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel_opened')[0];
            var focus = null;
            //	Focus already is on an element in a navbar in this menu.
            var navbar = document.activeElement.closest('.mm-navbar');
            if (navbar) {
                if (navbar.closest('.mm-menu') == _this.node.menu) {
                    return;
                }
            }
            //	Set the focus to the first focusable element by default.
            if (options.enable == 'default') {
                //	First visible anchor in a listview in the current panel.
                focus = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](panel, '.mm-listview a[href]:not(.mm-hidden)')[0];
                //	First focusable and visible element in the current panel.
                if (!focus) {
                    focus = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](panel, focusable_1 + ':not(.mm-hidden)')[0];
                }
                //	First focusable and visible element in a navbar.
                if (!focus) {
                    var elements_1 = [];
                    _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.menu, '.mm-navbars_top, .mm-navbars_bottom').forEach(function (navbar) {
                        elements_1.push.apply(elements_1, _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](navbar, focusable_1 + ':not(.mm-hidden)'));
                    });
                    focus = elements_1[0];
                }
            }
            //	Default.
            if (!focus) {
                focus = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.menu, '.mm-tabstart')[0];
            }
            if (focus) {
                focus.focus();
            }
        };
        this.bind('open:finish', setFocus);
        this.bind('openPanel:finish', setFocus);
        //	Add screenreader / aria support.
        this.bind('initOpened:after:sr-aria', function () {
            [_this.node.menu, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck].forEach(function (element) {
                _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](element, '.mm-tabstart, .mm-tabend').forEach(function (tabber) {
                    _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(tabber, 'hidden', true);
                    _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_role(tabber, 'presentation');
                });
            });
        });
    }
});
/**
 * Initialize the window for keyboard navigation.
 * @param {boolean} enhance - Whether or not to also rich enhance the keyboard behavior.
 **/
var initWindow = function (enhance) {
    var _this = this;
    //	Re-enable tabbing in general
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_3__["off"](document.body, 'keydown.tabguard');
    //	Intersept the target when tabbing.
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_3__["off"](document.body, 'focusin.tabguard');
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_3__["on"](document.body, 'focusin.tabguard', function (evnt) {
        if (_this.node.wrpr.matches('.mm-wrapper_opened')) {
            var target = evnt.target;
            if (target.matches('.mm-tabend')) {
                var next = void 0;
                //	Jump from menu to blocker.
                if (target.parentElement.matches('.mm-menu')) {
                    if (_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck) {
                        next = _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck;
                    }
                }
                //	Jump to opened menu.
                if (target.parentElement.matches('.mm-wrapper__blocker')) {
                    next = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](document.body, '.mm-menu_offcanvas.mm-menu_opened')[0];
                }
                //	If no available element found, stay in current element.
                if (!next) {
                    next = target.parentElement;
                }
                if (next) {
                    _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](next, '.mm-tabstart')[0].focus();
                }
            }
        }
    });
    //	Add Additional keyboard behavior.
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_3__["off"](document.body, 'keydown.navigate');
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_3__["on"](document.body, 'keydown.navigate', function (evnt) {
        var target = evnt.target;
        var menu = target.closest('.mm-menu');
        if (menu) {
            var api = menu['mmApi'];
            if (!target.matches('input, textarea')) {
                switch (evnt.keyCode) {
                    //	press enter to toggle and check
                    case 13:
                        if (target.matches('.mm-toggle') ||
                            target.matches('.mm-check')) {
                            target.dispatchEvent(new Event('click'));
                        }
                        break;
                    //	prevent spacebar or arrows from scrolling the page
                    case 32: //	space
                    case 37: //	left
                    case 38: //	top
                    case 39: //	right
                    case 40: //	bottom
                        evnt.preventDefault();
                        break;
                }
            }
            if (enhance) {
                //	special case for input
                if (target.matches('input')) {
                    switch (evnt.keyCode) {
                        //	empty searchfield with esc
                        case 27:
                            target.value = '';
                            break;
                    }
                }
                else {
                    var api_1 = menu['mmApi'];
                    switch (evnt.keyCode) {
                        //	close submenu with backspace
                        case 8:
                            var parent_1 = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](menu, '.mm-panel_opened')[0]['mmParent'];
                            if (parent_1) {
                                api_1.openPanel(parent_1.closest('.mm-panel'));
                            }
                            break;
                        //	close menu with esc
                        case 27:
                            if (menu.matches('.mm-menu_offcanvas')) {
                                api_1.close();
                            }
                            break;
                    }
                }
            }
        }
    });
};


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/lazysubmenus/_options.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/lazysubmenus/_options.js ***!
  \********************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    load: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            load: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/lazysubmenus/mmenu.lazysubmenus.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/lazysubmenus/mmenu.lazysubmenus.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/lazysubmenus/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





//	Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.lazySubmenus = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.lazySubmenus);
    this.opts.lazySubmenus = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.lazySubmenus);
    if (options.load) {
        //	Prevent all sub panels from being initialized.
        this.bind('initPanels:before', function () {
            var panels = [];
            //	Find all potential subpanels.
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](_this.node.pnls, 'li').forEach(function (listitem) {
                panels.push.apply(panels, _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](listitem, _this.conf.panelNodetype.join(', ')));
            });
            //	Filter out all non-panels and add the lazyload classes
            panels
                .filter(function (panel) { return !panel.matches('.mm-listview_inset'); })
                .filter(function (panel) { return !panel.matches('.mm-nolistview'); })
                .filter(function (panel) { return !panel.matches('.mm-nopanel'); })
                .forEach(function (panel) {
                var classnames = [
                    'mm-panel_lazysubmenu',
                    'mm-nolistview',
                    'mm-nopanel',
                ];
                //  IE11:
                classnames.forEach(function (classname) {
                    panel.classList.add(classname);
                });
                //  Better browsers:
                // panel.classList.add(...classnames);
            });
        });
        //	re-enable the default opened panel to be initialized.
        this.bind('initPanels:before', function () {
            var panels = [];
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](_this.node.pnls, '.' + _this.conf.classNames.selected).forEach(function (listitem) {
                panels.push.apply(panels, _modules_dom__WEBPACK_IMPORTED_MODULE_2__["parents"](listitem, '.mm-panel_lazysubmenu'));
            });
            if (panels.length) {
                panels.forEach(function (panel) {
                    console.log(panel);
                    var classnames = [
                        'mm-panel_lazysubmenu',
                        'mm-nolistview',
                        'mm-nopanel',
                    ];
                    //  IE11:
                    classnames.forEach(function (classname) {
                        panel.classList.remove(classname);
                    });
                    //  Better browsers:
                    // panel.classList.remove(...classnames);
                });
            }
        });
        //	initPanel for current- and sub panels before openPanel
        this.bind('openPanel:before', function (panel) {
            var panels = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](panel, '.mm-panel_lazysubmenu').filter(function (panel) {
                return !panel.matches('.mm-panel_lazysubmenu .mm-panel_lazysubmenu');
            });
            if (panel.matches('.mm-panel_lazysubmenu')) {
                panels.unshift(panel);
            }
            panels.forEach(function (panel) {
                var classnames = [
                    'mm-panel_lazysubmenu',
                    'mm-nolistview',
                    'mm-nopanel',
                ];
                //  IE11:
                classnames.forEach(function (classname) {
                    panel.classList.remove(classname);
                });
                //  Better browsers:
                // child.classList.remove(...classnames);
                _this.initPanel(panel);
            });
        });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/navbars/_configs.js":
/*!***************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/navbars/_configs.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var configs = {
    breadcrumbs: {
        separator: '/',
        removeFirst: false
    }
};
/* harmony default export */ __webpack_exports__["default"] = (configs);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.breadcrumbs.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/navbars/_navbar.breadcrumbs.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");


/* harmony default export */ __webpack_exports__["default"] = (function (navbar) {
    var _this = this;
    //	Add content
    var breadcrumbs = _modules_dom__WEBPACK_IMPORTED_MODULE_1__["create"]('div.mm-navbar__breadcrumbs');
    navbar.append(breadcrumbs);
    this.bind('initNavbar:after', function (panel) {
        if (panel.querySelector('.mm-navbar__breadcrumbs')) {
            return;
        }
        _modules_dom__WEBPACK_IMPORTED_MODULE_1__["children"](panel, '.mm-navbar')[0].classList.add('mm-hidden');
        var crumbs = [], breadcrumbs = _modules_dom__WEBPACK_IMPORTED_MODULE_1__["create"]('span.mm-navbar__breadcrumbs'), current = panel, first = true;
        while (current) {
            current = current.closest('.mm-panel');
            if (!current.parentElement.matches('.mm-listitem_vertical')) {
                var title = _modules_dom__WEBPACK_IMPORTED_MODULE_1__["find"](current, '.mm-navbar__title span')[0];
                if (title) {
                    var text = title.textContent;
                    if (text.length) {
                        crumbs.unshift(first
                            ? '<span>' + text + '</span>'
                            : '<a href="#' +
                                current.id +
                                '">' +
                                text +
                                '</a>');
                    }
                }
                first = false;
            }
            current = current['mmParent'];
        }
        if (_this.conf.navbars.breadcrumbs.removeFirst) {
            crumbs.shift();
        }
        breadcrumbs.innerHTML = crumbs.join('<span class="mm-separator">' +
            _this.conf.navbars.breadcrumbs.separator +
            '</span>');
        _modules_dom__WEBPACK_IMPORTED_MODULE_1__["children"](panel, '.mm-navbar')[0].append(breadcrumbs);
    });
    //	Update for to opened panel
    this.bind('openPanel:start', function (panel) {
        var crumbs = panel.querySelector('.mm-navbar__breadcrumbs');
        breadcrumbs.innerHTML = crumbs ? crumbs.innerHTML : '';
    });
    //	Add screenreader / aria support
    this.bind('initNavbar:after:sr-aria', function (panel) {
        _modules_dom__WEBPACK_IMPORTED_MODULE_1__["find"](panel, '.mm-breadcrumbs a').forEach(function (anchor) {
            _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(anchor, 'owns', anchor.getAttribute('href').slice(1));
        });
    });
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.close.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/navbars/_navbar.close.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");


/* harmony default export */ __webpack_exports__["default"] = (function (navbar) {
    var _this = this;
    //	Add content
    var close = _modules_dom__WEBPACK_IMPORTED_MODULE_1__["create"]('a.mm-btn.mm-btn_close.mm-navbar__btn');
    navbar.append(close);
    //	Update to page node
    this.bind('setPage:after', function (page) {
        close.setAttribute('href', '#' + page.id);
    });
    //	Add screenreader / text support
    this.bind('setPage:after:sr-text', function () {
        close.innerHTML = _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_text(_this.i18n(_this.conf.screenReader.text.closeMenu));
        _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(close, 'owns', close.getAttribute('href').slice(1));
    });
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.prev.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/navbars/_navbar.prev.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");


/* harmony default export */ __webpack_exports__["default"] = (function (navbar) {
    var _this = this;
    //	Add content.
    var prev = _modules_dom__WEBPACK_IMPORTED_MODULE_1__["create"]('a.mm-btn.mm-btn_prev.mm-navbar__btn');
    navbar.append(prev);
    this.bind('initNavbar:after', function (panel) {
        _modules_dom__WEBPACK_IMPORTED_MODULE_1__["children"](panel, '.mm-navbar')[0].classList.add('mm-hidden');
    });
    //	Update to opened panel.
    var org;
    var _url, _txt;
    this.bind('openPanel:start', function (panel) {
        if (panel.parentElement.matches('.mm-listitem_vertical')) {
            return;
        }
        org = panel.querySelector('.' + _this.conf.classNames.navbars.panelPrev);
        if (!org) {
            org = panel.querySelector('.mm-navbar__btn.mm-btn_prev');
        }
        _url = org ? org.getAttribute('href') : '';
        _txt = org ? org.innerHTML : '';
        if (_url) {
            prev.setAttribute('href', _url);
        }
        else {
            prev.removeAttribute('href');
        }
        prev.classList[_url || _txt ? 'remove' : 'add']('mm-hidden');
        prev.innerHTML = _txt;
    });
    //	Add screenreader / aria support
    this.bind('initNavbar:after:sr-aria', function (panel) {
        _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(panel.querySelector('.mm-navbar'), 'hidden', true);
    });
    this.bind('openPanel:start:sr-aria', function (panel) {
        _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(prev, 'hidden', prev.matches('.mm-hidden'));
        _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(prev, 'owns', (prev.getAttribute('href') || '').slice(1));
    });
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.searchfield.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/navbars/_navbar.searchfield.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");


/* harmony default export */ __webpack_exports__["default"] = (function (navbar) {
    if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_1__["type"])(this.opts.searchfield) != 'object') {
        this.opts.searchfield = {};
    }
    var searchfield = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["create"]('div.mm-navbar__searchfield');
    navbar.append(searchfield);
    this.opts.searchfield.add = true;
    this.opts.searchfield.addTo = [searchfield];
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.tabs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/navbars/_navbar.tabs.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");

/* harmony default export */ __webpack_exports__["default"] = (function (navbar) {
    var _this = this;
    navbar.classList.add('mm-navbar_tabs');
    navbar.parentElement.classList.add('mm-navbars_has-tabs');
    var anchors = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["children"](navbar, 'a');
    navbar.addEventListener('click', function (evnt) {
        var anchor = evnt.target;
        if (!anchor.matches('a')) {
            return;
        }
        if (anchor.matches('.mm-navbar__tab_selected')) {
            evnt.stopImmediatePropagation();
            return;
        }
        try {
            _this.openPanel(_this.node.menu.querySelector(anchor.getAttribute('href')), false);
            evnt.stopImmediatePropagation();
        }
        catch (err) { }
    });
    function selectTab(panel) {
        anchors.forEach(function (anchor) {
            anchor.classList.remove('mm-navbar__tab_selected');
        });
        var anchor = anchors.filter(function (anchor) {
            return anchor.matches('[href="#' + panel.id + '"]');
        })[0];
        if (anchor) {
            anchor.classList.add('mm-navbar__tab_selected');
        }
        else {
            var parent = panel['mmParent'];
            if (parent) {
                selectTab.call(this, parent.closest('.mm-panel'));
            }
        }
    }
    this.bind('openPanel:start', selectTab);
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.title.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/navbars/_navbar.title.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");


/* harmony default export */ __webpack_exports__["default"] = (function (navbar) {
    var _this = this;
    //	Add content to the navbar.
    var title = _modules_dom__WEBPACK_IMPORTED_MODULE_1__["create"]('a.mm-navbar__title');
    var titleText = _modules_dom__WEBPACK_IMPORTED_MODULE_1__["create"]('span');
    title.append(titleText);
    navbar.append(title);
    //	Update the title to the opened panel.
    var _url, _txt;
    var original;
    this.bind('openPanel:start', function (panel) {
        //	Do nothing in a vertically expanding panel.
        if (panel.parentElement.matches('.mm-listitem_vertical')) {
            return;
        }
        //	Find the original title in the opened panel.
        original = panel.querySelector('.' + _this.conf.classNames.navbars.panelTitle);
        if (!original) {
            original = panel.querySelector('.mm-navbar__title span');
        }
        //	Get the URL for the title.
        _url =
            original && original.closest('a')
                ? original.closest('a').getAttribute('href')
                : '';
        if (_url) {
            title.setAttribute('href', _url);
        }
        else {
            title.removeAttribute('href');
        }
        //	Get the text for the title.
        _txt = original ? original.innerHTML : '';
        titleText.innerHTML = _txt;
    });
    //	Add screenreader / aria support
    var prev;
    this.bind('openPanel:start:sr-aria', function (panel) {
        if (_this.opts.screenReader.text) {
            if (!prev) {
                var navbars = _modules_dom__WEBPACK_IMPORTED_MODULE_1__["children"](_this.node.menu, '.mm-navbars_top, .mm-navbars_bottom');
                navbars.forEach(function (navbar) {
                    var btn = navbar.querySelector('.mm-btn_prev');
                    if (btn) {
                        prev = btn;
                    }
                });
            }
            if (prev) {
                var hidden = true;
                if (_this.opts.navbar.titleLink == 'parent') {
                    hidden = !prev.matches('.mm-hidden');
                }
                _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(title, 'hidden', hidden);
            }
        }
    });
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/navbars/_options.js":
/*!***************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/navbars/_options.js ***!
  \***************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = [];
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean' && options) {
        options = {};
    }
    if (typeof options != 'object') {
        options = {};
    }
    if (typeof options.content == 'undefined') {
        options.content = ['prev', 'title'];
    }
    if (!(options.content instanceof Array)) {
        options.content = [options.content];
    }
    if (typeof options.use == 'undefined') {
        options.use = true;
    }
    if (typeof options.use == 'boolean' && options.use) {
        options.use = true;
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/navbars/mmenu.navbars.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/navbars/mmenu.navbars.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbars; });
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/navbars/_options.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_configs */ "./node_modules/mmenu-js/dist/addons/navbars/_configs.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_matchmedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/matchmedia */ "./node_modules/mmenu-js/dist/_modules/matchmedia.js");
/* harmony import */ var _navbar_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_navbar.breadcrumbs */ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.breadcrumbs.js");
/* harmony import */ var _navbar_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_navbar.close */ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.close.js");
/* harmony import */ var _navbar_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_navbar.prev */ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.prev.js");
/* harmony import */ var _navbar_searchfield__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_navbar.searchfield */ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.searchfield.js");
/* harmony import */ var _navbar_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_navbar.title */ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.title.js");
/* harmony import */ var _navbar_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_navbar.tabs */ "./node_modules/mmenu-js/dist/addons/navbars/_navbar.tabs.js");






//  Add the options and configs.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.navbars = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.navbars = _configs__WEBPACK_IMPORTED_MODULE_2__["default"];
//  Add the classnames.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.classNames.navbars = {
    panelPrev: 'Prev',
    panelTitle: 'Title'
};





Navbars.navbarContents = {
    breadcrumbs: _navbar_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__["default"],
    close: _navbar_close__WEBPACK_IMPORTED_MODULE_6__["default"],
    prev: _navbar_prev__WEBPACK_IMPORTED_MODULE_7__["default"],
    searchfield: _navbar_searchfield__WEBPACK_IMPORTED_MODULE_8__["default"],
    title: _navbar_title__WEBPACK_IMPORTED_MODULE_9__["default"]
};

Navbars.navbarTypes = {
    tabs: _navbar_tabs__WEBPACK_IMPORTED_MODULE_10__["default"]
};
function Navbars() {
    var _this = this;
    var navs = this.opts.navbars;
    if (typeof navs == 'undefined') {
        return;
    }
    if (!(navs instanceof Array)) {
        navs = [navs];
    }
    var navbars = {};
    if (!navs.length) {
        return;
    }
    navs.forEach(function (options) {
        options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(options);
        if (!options.use) {
            return false;
        }
        //	Create the navbar element.
        var navbar = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["create"]('div.mm-navbar');
        //	Get the position for the navbar.
        var position = options.position;
        //	Restrict the position to either "bottom" or "top" (default).
        if (position !== 'bottom') {
            position = 'top';
        }
        //	Create the wrapper for the navbar position.
        if (!navbars[position]) {
            navbars[position] = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["create"]('div.mm-navbars_' + position);
        }
        navbars[position].append(navbar);
        //	Add content to the navbar.
        for (var c = 0, l = options.content.length; c < l; c++) {
            var ctnt = options.content[c];
            //	The content is a string.
            if (typeof ctnt == 'string') {
                var func = Navbars.navbarContents[ctnt];
                //	The content refers to one of the navbar-presets ("prev", "title", etc).
                if (typeof func == 'function') {
                    //	Call the preset function.
                    func.call(_this, navbar);
                    //	The content is just HTML.
                }
                else {
                    //	Add the HTML.
                    //  Wrap the HTML in a single node
                    var node = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["create"]('span');
                    node.innerHTML = ctnt;
                    //  If there was only a single node, use that.
                    var children = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["children"](node);
                    if (children.length == 1) {
                        node = children[0];
                    }
                    navbar.append(node);
                }
                //	The content is not a string, it must be an element.
            }
            else {
                navbar.append(ctnt);
            }
        }
        //	The type option is set.
        if (typeof options.type == 'string') {
            //	The function refers to one of the navbar-presets ("tabs").
            var func = Navbars.navbarTypes[options.type];
            if (typeof func == 'function') {
                //	Call the preset function.
                func.call(_this, navbar);
            }
        }
        //	En-/disable the navbar.
        var enable = function () {
            navbar.classList.remove('mm-hidden');
            _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(navbar, 'hidden', false);
        };
        var disable = function () {
            navbar.classList.add('mm-hidden');
            _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(navbar, 'hidden', true);
        };
        if (typeof options.use != 'boolean') {
            _modules_matchmedia__WEBPACK_IMPORTED_MODULE_4__["add"](options.use, enable, disable);
        }
    });
    //	Add to menu.
    this.bind('initMenu:after', function () {
        for (var position in navbars) {
            _this.node.menu[position == 'bottom' ? 'append' : 'prepend'](navbars[position]);
        }
    });
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/pagescroll/_configs.js":
/*!******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/pagescroll/_configs.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var configs = {
    scrollOffset: 0,
    updateOffset: 50
};
/* harmony default export */ __webpack_exports__["default"] = (configs);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/pagescroll/_options.js":
/*!******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/pagescroll/_options.js ***!
  \******************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    scroll: false,
    update: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            scroll: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/pagescroll/mmenu.pagescroll.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/pagescroll/mmenu.pagescroll.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/pagescroll/_options.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_configs */ "./node_modules/mmenu-js/dist/addons/pagescroll/_configs.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");






//	Add the options and configs.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.pageScroll = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.pageScroll = _configs__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.pageScroll);
    this.opts.pageScroll = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.pageScroll);
    var configs = this.conf.pageScroll;
    /** The currently "active" section */
    var section;
    function scrollTo() {
        if (section) {
            // section.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: section.getBoundingClientRect().top +
                    document.scrollingElement.scrollTop -
                    configs.scrollOffset,
                behavior: 'smooth'
            });
        }
        section = null;
    }
    function anchorInPage(href) {
        try {
            if (href != '#' && href.slice(0, 1) == '#') {
                return _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page.querySelector(href);
            }
            return null;
        }
        catch (err) {
            return null;
        }
    }
    //	Scroll to section after clicking menu item.
    if (options.scroll) {
        this.bind('close:finish', function () {
            scrollTo();
        });
    }
    //	Add click behavior.
    //	Prevents default behavior when clicking an anchor.
    if (this.opts.offCanvas && options.scroll) {
        this.clck.push(function (anchor, args) {
            section = null;
            //	Don't continue if the clicked anchor is not in the menu.
            if (!args.inMenu) {
                return;
            }
            //	Don't continue if the targeted section is not on the page.
            var href = anchor.getAttribute('href');
            section = anchorInPage(href);
            if (!section) {
                return;
            }
            //	If the sidebar add-on is "expanded"...
            if (_this.node.menu.matches('.mm-menu_sidebar-expanded') &&
                _this.node.wrpr.matches('.mm-wrapper_sidebar-expanded')) {
                //	... scroll the page to the section.
                scrollTo();
                //	... otherwise...
            }
            else {
                //	... close the menu.
                return {
                    close: true
                };
            }
        });
    }
    //	Update selected menu item after scrolling.
    if (options.update) {
        var scts_1 = [];
        this.bind('initListview:after', function (listview) {
            var listitems = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["children"](listview, '.mm-listitem');
            _modules_dom__WEBPACK_IMPORTED_MODULE_3__["filterLIA"](listitems).forEach(function (anchor) {
                var href = anchor.getAttribute('href');
                var section = anchorInPage(href);
                if (section) {
                    scts_1.unshift(section);
                }
            });
        });
        var _selected_1 = -1;
        window.addEventListener('scroll', function (evnt) {
            var scrollTop = window.scrollY;
            for (var s = 0; s < scts_1.length; s++) {
                if (scts_1[s].offsetTop < scrollTop + configs.updateOffset) {
                    if (_selected_1 !== s) {
                        _selected_1 = s;
                        var panel = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["children"](_this.node.pnls, '.mm-panel_opened')[0];
                        var listitems = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["find"](panel, '.mm-listitem');
                        var anchors = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["filterLIA"](listitems);
                        anchors = anchors.filter(function (anchor) {
                            return anchor.matches('[href="#' + scts_1[s].id + '"]');
                        });
                        if (anchors.length) {
                            _this.setSelected(anchors[0].parentElement);
                        }
                    }
                    break;
                }
            }
        });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/searchfield/_configs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/searchfield/_configs.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var configs = {
    clear: false,
    form: false,
    input: false,
    submit: false
};
/* harmony default export */ __webpack_exports__["default"] = (configs);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/searchfield/_options.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/searchfield/_options.js ***!
  \*******************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    add: false,
    addTo: 'panels',
    cancel: false,
    noResults: 'No results found.',
    placeholder: 'Search',
    panel: {
        add: false,
        dividers: true,
        fx: 'none',
        id: null,
        splash: null,
        title: 'Search'
    },
    search: true,
    showTextItems: false,
    showSubPanels: true
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            add: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    if (typeof options.panel == 'boolean') {
        options.panel = {
            add: options.panel
        };
    }
    if (typeof options.panel != 'object') {
        options.panel = {};
    }
    //	Extend logical options.
    if (options.addTo == 'panel') {
        options.panel.add = true;
    }
    if (options.panel.add) {
        options.showSubPanels = false;
        if (options.panel.splash) {
            options.cancel = true;
        }
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/searchfield/mmenu.searchfield.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/searchfield/mmenu.searchfield.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/searchfield/_options.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_configs */ "./node_modules/mmenu-js/dist/addons/searchfield/_configs.js");
/* harmony import */ var _translations_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/translate */ "./node_modules/mmenu-js/dist/addons/searchfield/translations/translate.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_modules/eventlisteners */ "./node_modules/mmenu-js/dist/_modules/eventlisteners.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};








//  Add the translations.
Object(_translations_translate__WEBPACK_IMPORTED_MODULE_3__["default"])();
//  Add the options and configs.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.searchfield = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.searchfield = _configs__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.searchfield);
    this.opts.searchfield = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_6__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.searchfield);
    var configs = this.conf.searchfield;
    if (!options.add) {
        return;
    }
    //	Blur searchfield
    this.bind('close:start', function () {
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](_this.node.menu, '.mm-searchfield').forEach(function (input) {
            input.blur();
        });
    });
    this.bind('initPanel:after', function (panel) {
        var searchpanel = null;
        //	Add the search panel
        if (options.panel.add) {
            searchpanel = initSearchPanel.call(_this);
        }
        //	Add the searchfield
        var addTo = null;
        switch (options.addTo) {
            case 'panels':
                addTo = [panel];
                break;
            case 'panel':
                addTo = [searchpanel];
                break;
            default:
                if (typeof options.addTo == 'string') {
                    addTo = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](_this.node.menu, options.addTo);
                }
                else if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_6__["type"])(options.addTo) == 'array') {
                    addTo = options.addTo;
                }
                break;
        }
        addTo.forEach(function (form) {
            form = initSearchfield.call(_this, form);
            if (options.search && form) {
                initSearching.call(_this, form);
            }
        });
        //	Add the no-results message
        if (options.noResults) {
            initNoResultsMsg.call(_this, options.panel.add ? searchpanel : panel);
        }
    });
    //	Add click behavior.
    //	Prevents default behavior when clicking an anchor
    this.clck.push(function (anchor, args) {
        if (args.inMenu) {
            if (anchor.matches('.mm-searchfield__btn')) {
                //	Clicking the clear button
                if (anchor.matches('.mm-btn_close')) {
                    var form = anchor.closest('.mm-searchfield'), input = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](form, 'input')[0];
                    input.value = '';
                    _this.search(input);
                    return true;
                }
                //	Clicking the submit button
                if (anchor.matches('.mm-btn_next')) {
                    var form = anchor.closest('form');
                    if (form) {
                        form.submit();
                    }
                    return true;
                }
            }
        }
    });
});
var initSearchPanel = function () {
    var options = this.opts.searchfield, configs = this.conf.searchfield;
    var searchpanel = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel_search')[0];
    //	Only once
    if (searchpanel) {
        return searchpanel;
    }
    searchpanel = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('div.mm-panel.mm-panel_search.mm-hidden');
    if (options.panel.id) {
        searchpanel.id = options.panel.id;
    }
    if (options.panel.title) {
        searchpanel.setAttribute('data-mm-title', options.panel.title);
        // searchpanel.dataset.mmTitle = options.panel.title; // IE10 has no dataset :(
    }
    var listview = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('ul');
    searchpanel.append(listview);
    this.node.pnls.append(searchpanel);
    this.initListview(listview);
    this._initNavbar(searchpanel);
    switch (options.panel.fx) {
        case false:
            break;
        case 'none':
            searchpanel.classList.add('mm-panel_noanimation');
            break;
        default:
            searchpanel.classList.add('mm-panel_fx-' + options.panel.fx);
            break;
    }
    //	Add splash content
    if (options.panel.splash) {
        var splash = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('div.mm-panel__content');
        splash.innerHTML = options.panel.splash;
        searchpanel.append(splash);
    }
    searchpanel.classList.add('mm-panel');
    searchpanel.classList.add('mm-hidden');
    this.node.pnls.append(searchpanel);
    return searchpanel;
};
var initSearchfield = function (wrapper) {
    var options = this.opts.searchfield, configs = this.conf.searchfield;
    //	No searchfield in vertical submenus
    if (wrapper.parentElement.matches('.mm-listitem_vertical')) {
        return null;
    }
    //	Only one searchfield per panel
    var form = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](wrapper, '.mm-searchfield')[0];
    if (form) {
        return form;
    }
    function addAttributes(element, attr) {
        if (attr) {
            for (var a in attr) {
                element.setAttribute(a, attr[a]);
            }
        }
    }
    var form = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]((configs.form ? 'form' : 'div') + '.mm-searchfield'), field = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('div.mm-searchfield__input'), input = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('input');
    input.type = 'text';
    input.autocomplete = 'off';
    input.placeholder = this.i18n(options.placeholder);
    field.append(input);
    form.append(field);
    wrapper.prepend(form);
    //	Add attributes to the input
    addAttributes(input, configs.input);
    //	Add the clear button
    if (configs.clear) {
        var anchor = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('a.mm-btn.mm-btn_close.mm-searchfield__btn');
        anchor.setAttribute('href', '#');
        field.append(anchor);
    }
    //	Add attributes and submit to the form
    addAttributes(form, configs.form);
    if (configs.form && configs.submit && !configs.clear) {
        var anchor = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('a.mm-btn.mm-btn_next.mm-searchfield__btn');
        anchor.setAttribute('href', '#');
        field.append(anchor);
    }
    if (options.cancel) {
        var anchor = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('a.mm-searchfield__cancel');
        anchor.setAttribute('href', '#');
        anchor.textContent = this.i18n('cancel');
        form.append(anchor);
    }
    return form;
};
var initSearching = function (form) {
    var _this = this;
    var options = this.opts.searchfield, configs = this.conf.searchfield;
    var data = {};
    //	In the searchpanel.
    if (form.closest('.mm-panel_search')) {
        data.panels = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](this.node.pnls, '.mm-panel');
        data.noresults = [form.closest('.mm-panel')];
        //	In a panel
    }
    else if (form.closest('.mm-panel')) {
        data.panels = [form.closest('.mm-panel')];
        data.noresults = data.panels;
        //	Not in a panel, global
    }
    else {
        data.panels = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](this.node.pnls, '.mm-panel');
        data.noresults = [this.node.menu];
    }
    //	Filter out search panel
    data.panels = data.panels.filter(function (panel) { return !panel.matches('.mm-panel_search'); });
    //	Filter out vertical submenus
    data.panels = data.panels.filter(function (panel) { return !panel.parentElement.matches('.mm-listitem_vertical'); });
    //  Find listitems and dividers.
    data.listitems = [];
    data.dividers = [];
    data.panels.forEach(function (panel) {
        var _a, _b;
        (_a = data.listitems).push.apply(_a, _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-listitem'));
        (_b = data.dividers).push.apply(_b, _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-divider'));
    });
    var searchpanel = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel_search')[0], input = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](form, 'input')[0], cancel = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](form, '.mm-searchfield__cancel')[0];
    input['mmSearchfield'] = data;
    //	Open the splash panel when focussing the input.
    if (options.panel.add && options.panel.splash) {
        _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_5__["off"](input, 'focus.splash');
        _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_5__["on"](input, 'focus.splash', function (evnt) {
            _this.openPanel(searchpanel);
        });
    }
    if (options.cancel) {
        //	Show the cancel button when focussing the input.
        _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_5__["off"](input, 'focus.cancel');
        _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_5__["on"](input, 'focus.cancel', function (evnt) {
            cancel.classList.add('mm-searchfield__cancel-active');
        });
        //	Close the splash panel when clicking the cancel button.
        _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_5__["off"](cancel, 'click.splash');
        _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_5__["on"](cancel, 'click.splash', function (evnt) {
            evnt.preventDefault();
            cancel.classList.remove('mm-searchfield__cancel-active');
            if (searchpanel.matches('.mm-panel_opened')) {
                var parents = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](_this.node.pnls, '.mm-panel_opened-parent');
                if (parents.length) {
                    _this.openPanel(parents[parents.length - 1]);
                }
            }
        });
    }
    //	Focus the input in the searchpanel when opening the searchpanel.
    if (options.panel.add && options.addTo == 'panel') {
        this.bind('openPanel:finish', function (panel) {
            if (panel === searchpanel) {
                input.focus();
            }
        });
    }
    //	Search while typing.
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_5__["off"](input, 'input.search');
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_5__["on"](input, 'input.search', function (evnt) {
        switch (evnt.keyCode) {
            case 9: //	tab
            case 16: //	shift
            case 17: //	control
            case 18: //	alt
            case 37: //	left
            case 38: //	top
            case 39: //	right
            case 40: //	bottom
                break;
            default:
                _this.search(input);
                break;
        }
    });
    //	Search initially.
    this.search(input);
};
var initNoResultsMsg = function (wrapper) {
    if (!wrapper) {
        return;
    }
    var options = this.opts.searchfield, configs = this.conf.searchfield;
    //	Not in a panel
    if (!wrapper.closest('.mm-panel')) {
        wrapper = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel')[0];
    }
    //	Only once
    if (_modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](wrapper, '.mm-panel__noresultsmsg').length) {
        return;
    }
    //	Add no-results message
    var message = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('div.mm-panel__noresultsmsg.mm-hidden');
    message.innerHTML = this.i18n(options.noResults);
    wrapper.append(message);
};
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.search = function (input, query) {
    var _a;
    var _this = this;
    var options = this.opts.searchfield, configs = this.conf.searchfield;
    query = query || '' + input.value;
    query = query.toLowerCase().trim();
    var data = input['mmSearchfield'];
    var form = input.closest('.mm-searchfield'), buttons = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](form, '.mm-btn'), searchpanel = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel_search')[0];
    /** The panels. */
    var panels = data.panels;
    /** The "no results" messages in a cloned array. */
    var noresults = data.noresults;
    /** The listitems in a cloned array. */
    var listitems = data.listitems;
    /** Tje dividers in a cloned array. */
    var dividers = data.dividers;
    //	Reset previous results
    listitems.forEach(function (listitem) {
        listitem.classList.remove('mm-listitem_nosubitems');
        listitem.classList.remove('mm-listitem_onlysubitems');
        listitem.classList.remove('mm-hidden');
    });
    if (searchpanel) {
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](searchpanel, '.mm-listview')[0].innerHTML = '';
    }
    panels.forEach(function (panel) {
        panel.scrollTop = 0;
    });
    //	Search
    if (query.length) {
        //	Initially hide all dividers.
        dividers.forEach(function (divider) {
            divider.classList.add('mm-hidden');
        });
        //	Hide listitems that do not match.
        listitems.forEach(function (listitem) {
            var text = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](listitem, '.mm-listitem__text')[0];
            var add = false;
            //  The listitem should be shown if:
            //          1) The text matches the query and
            //          2a) The text is a open-button and
            //          2b) the option showSubPanels is set to true.
            //      or  3a) The text is not an anchor and
            //          3b) the option showTextItems is set to true.
            //      or  4)  The text is an anchor.
            //  1
            if (text &&
                _modules_dom__WEBPACK_IMPORTED_MODULE_4__["text"](text)
                    .toLowerCase()
                    .indexOf(query) > -1) {
                //  2a
                if (text.matches('.mm-listitem__btn')) {
                    //  2b
                    if (options.showSubPanels) {
                        add = true;
                    }
                }
                //  3a
                else if (!text.matches('a')) {
                    //  3b
                    if (options.showTextItems) {
                        add = true;
                    }
                }
                // 4
                else {
                    add = true;
                }
            }
            if (!add) {
                listitem.classList.add('mm-hidden');
            }
        });
        /** Whether or not the query yielded results. */
        var hasResults = listitems.filter(function (listitem) { return !listitem.matches('.mm-hidden'); }).length;
        //	Show all mached listitems in the search panel
        if (options.panel.add) {
            //	Clone all matched listitems into the search panel
            var allitems_1 = [];
            panels.forEach(function (panel) {
                var listitems = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["filterLI"](_modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-listitem'));
                listitems = listitems.filter(function (listitem) { return !listitem.matches('.mm-hidden'); });
                if (listitems.length) {
                    //  Add a divider to indicate in what panel the listitems were.
                    if (options.panel.dividers) {
                        var divider = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('li.mm-divider');
                        var title = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-navbar__title')[0];
                        if (title) {
                            divider.innerHTML = title.innerHTML;
                            allitems_1.push(divider);
                        }
                    }
                    listitems.forEach(function (listitem) {
                        allitems_1.push(listitem.cloneNode(true));
                    });
                }
            });
            //	Remove toggles and checks.
            allitems_1.forEach(function (listitem) {
                listitem
                    .querySelectorAll('.mm-toggle, .mm-check')
                    .forEach(function (element) {
                    element.remove();
                });
            });
            //	Add to the search panel.
            (_a = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](searchpanel, '.mm-listview')[0]).append.apply(_a, allitems_1);
            //	Open the search panel.
            this.openPanel(searchpanel);
        }
        else {
            //	Also show listitems in sub-panels for matched listitems
            if (options.showSubPanels) {
                panels.forEach(function (panel) {
                    var listitems = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-listitem');
                    _modules_dom__WEBPACK_IMPORTED_MODULE_4__["filterLI"](listitems).forEach(function (listitem) {
                        var child = listitem['mmChild'];
                        if (child) {
                            _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](child, '.mm-listitem').forEach(function (listitem) {
                                listitem.classList.remove('mm-hidden');
                            });
                        }
                    });
                });
            }
            //	Update parent for sub-panel
            //  .reverse() mutates the original array, therefor we "clone" it first using [...panels].
            __spreadArrays(panels).reverse().forEach(function (panel, p) {
                var parent = panel['mmParent'];
                if (parent) {
                    //	The current panel has mached listitems
                    var listitems_1 = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-listitem');
                    if (_modules_dom__WEBPACK_IMPORTED_MODULE_4__["filterLI"](listitems_1).length) {
                        //	Show parent
                        if (parent.matches('.mm-hidden')) {
                            parent.classList.remove('mm-hidden');
                        }
                        parent.classList.add('mm-listitem_onlysubitems');
                    }
                    else if (!input.closest('.mm-panel')) {
                        if (panel.matches('.mm-panel_opened') ||
                            panel.matches('.mm-panel_opened-parent')) {
                            //	Compensate the timeout for the opening animation
                            setTimeout(function () {
                                _this.openPanel(parent.closest('.mm-panel'));
                            }, (p + 1) * (_this.conf.openingInterval * 1.5));
                        }
                        parent.classList.add('mm-listitem_nosubitems');
                    }
                }
            });
            //	Show parent panels of vertical submenus
            panels.forEach(function (panel) {
                var listitems = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-listitem');
                _modules_dom__WEBPACK_IMPORTED_MODULE_4__["filterLI"](listitems).forEach(function (listitem) {
                    _modules_dom__WEBPACK_IMPORTED_MODULE_4__["parents"](listitem, '.mm-listitem_vertical').forEach(function (parent) {
                        if (parent.matches('.mm-hidden')) {
                            parent.classList.remove('mm-hidden');
                            parent.classList.add('mm-listitem_onlysubitems');
                        }
                    });
                });
            });
            //	Show first preceeding divider of parent
            panels.forEach(function (panel) {
                var listitems = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-listitem');
                _modules_dom__WEBPACK_IMPORTED_MODULE_4__["filterLI"](listitems).forEach(function (listitem) {
                    var divider = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["prevAll"](listitem, '.mm-divider')[0];
                    if (divider) {
                        divider.classList.remove('mm-hidden');
                    }
                });
            });
        }
        //	Show submit / clear button
        buttons.forEach(function (button) { return button.classList.remove('mm-hidden'); });
        //	Show/hide no results message
        noresults.forEach(function (wrapper) {
            _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](wrapper, '.mm-panel__noresultsmsg').forEach(function (message) {
                return message.classList[hasResults ? 'add' : 'remove']('mm-hidden');
            });
        });
        if (options.panel.add) {
            //	Hide splash
            if (options.panel.splash) {
                _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](searchpanel, '.mm-panel__content').forEach(function (splash) {
                    return splash.classList.add('mm-hidden');
                });
            }
            //	Re-show original listitems when in search panel
            listitems.forEach(function (listitem) {
                return listitem.classList.remove('mm-hidden');
            });
            dividers.forEach(function (divider) { return divider.classList.remove('mm-hidden'); });
        }
        //	Don't search
    }
    else {
        //	Show all items
        listitems.forEach(function (listitem) { return listitem.classList.remove('mm-hidden'); });
        dividers.forEach(function (divider) { return divider.classList.remove('mm-hidden'); });
        //	Hide submit / clear button
        buttons.forEach(function (button) { return button.classList.add('mm-hidden'); });
        //	Hide no results message
        noresults.forEach(function (wrapper) {
            _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](wrapper, '.mm-panel__noresultsmsg').forEach(function (message) {
                return message.classList.add('mm-hidden');
            });
        });
        if (options.panel.add) {
            //	Show splash
            if (options.panel.splash) {
                _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](searchpanel, '.mm-panel__content').forEach(function (splash) {
                    return splash.classList.remove('mm-hidden');
                });
                //	Close panel
            }
            else if (!input.closest('.mm-panel_search')) {
                var opened = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel_opened-parent');
                this.openPanel(opened.slice(-1)[0]);
            }
        }
    }
    //	Update for other addons
    this.trigger('updateListview');
};


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/searchfield/translations/de.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/searchfield/translations/de.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    Search: 'Suche',
    'No results found.': 'Keine Ergebnisse gefunden.',
    cancel: 'beenden'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/searchfield/translations/fa.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/searchfield/translations/fa.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    Search: 'جستجو',
    'No results found.': 'نتیجه‌ای یافت نشد.',
    cancel: 'انصراف'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/searchfield/translations/nl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/searchfield/translations/nl.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    Search: 'Zoeken',
    'No results found.': 'Geen resultaten gevonden.',
    cancel: 'annuleren'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/searchfield/translations/ru.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/searchfield/translations/ru.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    Search: 'Найти',
    'No results found.': 'Ничего не найдено.',
    cancel: 'отменить'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/searchfield/translations/translate.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/searchfield/translations/translate.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_modules/i18n */ "./node_modules/mmenu-js/dist/_modules/i18n.js");
/* harmony import */ var _nl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nl */ "./node_modules/mmenu-js/dist/addons/searchfield/translations/nl.js");
/* harmony import */ var _fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fa */ "./node_modules/mmenu-js/dist/addons/searchfield/translations/fa.js");
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./de */ "./node_modules/mmenu-js/dist/addons/searchfield/translations/de.js");
/* harmony import */ var _ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ru */ "./node_modules/mmenu-js/dist/addons/searchfield/translations/ru.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_nl__WEBPACK_IMPORTED_MODULE_1__["default"], 'nl');
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_fa__WEBPACK_IMPORTED_MODULE_2__["default"], 'fa');
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_de__WEBPACK_IMPORTED_MODULE_3__["default"], 'de');
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_ru__WEBPACK_IMPORTED_MODULE_4__["default"], 'ru');
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/sectionindexer/_options.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/sectionindexer/_options.js ***!
  \**********************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    add: false,
    addTo: 'panels'
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            add: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/sectionindexer/mmenu.sectionindexer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/sectionindexer/mmenu.sectionindexer.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/sectionindexer/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/support */ "./node_modules/mmenu-js/dist/_modules/support.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");






//  Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.sectionIndexer = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.sectionIndexer);
    this.opts.sectionIndexer = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.sectionIndexer);
    if (!options.add) {
        return;
    }
    this.bind('initPanels:after', function () {
        //	Add the indexer, only if it does not allready excists
        if (!_this.node.indx) {
            var buttons_1 = '';
            'abcdefghijklmnopqrstuvwxyz'.split('').forEach(function (letter) {
                buttons_1 += '<a href="#">' + letter + '</a>';
            });
            var indexer = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('div.mm-sectionindexer');
            indexer.innerHTML = buttons_1;
            _this.node.pnls.prepend(indexer);
            _this.node.indx = indexer;
            //	Prevent default behavior when clicking an anchor
            _this.node.indx.addEventListener('click', function (evnt) {
                var anchor = evnt.target;
                if (anchor.matches('a')) {
                    evnt.preventDefault();
                }
            });
            //	Scroll onMouseOver / onTouchStart
            var mouseOverEvent = function (evnt) {
                if (!evnt.target.matches('a')) {
                    return;
                }
                var letter = evnt.target.textContent, panel = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel_opened')[0];
                var newTop = -1, oldTop = panel.scrollTop;
                panel.scrollTop = 0;
                _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](panel, '.mm-divider')
                    .filter(function (divider) { return !divider.matches('.mm-hidden'); })
                    .forEach(function (divider) {
                    if (newTop < 0 &&
                        letter ==
                            divider.textContent
                                .trim()
                                .slice(0, 1)
                                .toLowerCase()) {
                        newTop = divider.offsetTop;
                    }
                });
                panel.scrollTop = newTop > -1 ? newTop : oldTop;
            };
            if (_modules_support__WEBPACK_IMPORTED_MODULE_3__["touch"]) {
                _this.node.indx.addEventListener('touchstart', mouseOverEvent);
                _this.node.indx.addEventListener('touchmove', mouseOverEvent);
            }
            else {
                _this.node.indx.addEventListener('mouseover', mouseOverEvent);
            }
        }
        //	Show or hide the indexer
        _this.bind('openPanel:start', function (panel) {
            var active = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](panel, '.mm-divider').filter(function (divider) { return !divider.matches('.mm-hidden'); }).length;
            _this.node.indx.classList[active ? 'add' : 'remove']('mm-sectionindexer_active');
        });
    });
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/setselected/_options.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/setselected/_options.js ***!
  \*******************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    current: true,
    hover: false,
    parent: false
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            hover: options,
            parent: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/setselected/mmenu.setselected.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/setselected/mmenu.setselected.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/setselected/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");





//	Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.setSelected = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.setSelected);
    this.opts.setSelected = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_3__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.setSelected);
    //	Find current by URL
    if (options.current == 'detect') {
        var findCurrent_1 = function (url) {
            url = url.split('?')[0].split('#')[0];
            var anchor = _this.node.menu.querySelector('a[href="' + url + '"], a[href="' + url + '/"]');
            if (anchor) {
                _this.setSelected(anchor.parentElement);
            }
            else {
                var arr = url.split('/').slice(0, -1);
                if (arr.length) {
                    findCurrent_1(arr.join('/'));
                }
            }
        };
        this.bind('initMenu:after', function () {
            findCurrent_1.call(_this, window.location.href);
        });
        //	Remove current selected item
    }
    else if (!options.current) {
        this.bind('initListview:after', function (listview) {
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](listview, '.mm-listitem_selected').forEach(function (listitem) {
                listitem.classList.remove('mm-listitem_selected');
            });
        });
    }
    //	Add :hover effect on items
    if (options.hover) {
        this.bind('initMenu:after', function () {
            _this.node.menu.classList.add('mm-menu_selected-hover');
        });
    }
    //	Set parent item selected for submenus
    if (options.parent) {
        this.bind('openPanel:finish', function (panel) {
            //	Remove all
            _modules_dom__WEBPACK_IMPORTED_MODULE_2__["find"](_this.node.pnls, '.mm-listitem_selected-parent').forEach(function (listitem) {
                listitem.classList.remove('mm-listitem_selected-parent');
            });
            //	Move up the DOM tree
            var parent = panel['mmParent'];
            while (parent) {
                if (!parent.matches('.mm-listitem_vertical')) {
                    parent.classList.add('mm-listitem_selected-parent');
                }
                parent = parent.closest('.mm-panel');
                parent = parent['mmParent'];
            }
        });
        this.bind('initMenu:after', function () {
            _this.node.menu.classList.add('mm-menu_selected-parent');
        });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/sidebar/_options.js":
/*!***************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/sidebar/_options.js ***!
  \***************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    collapsed: {
        use: false,
        blockMenu: true,
        hideDivider: false,
        hideNavbar: true
    },
    expanded: {
        use: false,
        initial: 'open'
    }
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'string' ||
        (typeof options == 'boolean' && options) ||
        typeof options == 'number') {
        options = {
            expanded: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    //	Extend collapsed shorthand options.
    if (typeof options.collapsed == 'boolean' && options.collapsed) {
        options.collapsed = {
            use: true
        };
    }
    if (typeof options.collapsed == 'string' ||
        typeof options.collapsed == 'number') {
        options.collapsed = {
            use: options.collapsed
        };
    }
    if (typeof options.collapsed != 'object') {
        options.collapsed = {};
    }
    //	Extend expanded shorthand options.
    if (typeof options.expanded == 'boolean' && options.expanded) {
        options.expanded = {
            use: true
        };
    }
    if (typeof options.expanded == 'string' ||
        typeof options.expanded == 'number') {
        options.expanded = {
            use: options.expanded
        };
    }
    if (typeof options.expanded != 'object') {
        options.expanded = {};
    }
    return options;
}


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/sidebar/mmenu.sidebar.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/sidebar/mmenu.sidebar.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/addons/sidebar/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_matchmedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/matchmedia */ "./node_modules/mmenu-js/dist/_modules/matchmedia.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");






//  Add the options.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.sidebar = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    if (!this.opts.offCanvas) {
        return;
    }
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.sidebar);
    this.opts.sidebar = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.sidebar);
    //	Collapsed
    if (options.collapsed.use) {
        //	Make the menu collapsable.
        this.bind('initMenu:after', function () {
            _this.node.menu.classList.add('mm-menu_sidebar-collapsed');
            if (options.collapsed.blockMenu &&
                _this.opts.offCanvas &&
                !_modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.menu, '.mm-menu__blocker')[0]) {
                var anchor = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["create"]('a.mm-menu__blocker');
                anchor.setAttribute('href', '#' + _this.node.menu.id);
                _this.node.menu.prepend(anchor);
            }
            if (options.collapsed.hideNavbar) {
                _this.node.menu.classList.add('mm-menu_hidenavbar');
            }
            if (options.collapsed.hideDivider) {
                _this.node.menu.classList.add('mm-menu_hidedivider');
            }
        });
        //	En-/disable the collapsed sidebar.
        var enable = function () {
            _this.node.wrpr.classList.add('mm-wrapper_sidebar-collapsed');
        };
        var disable = function () {
            _this.node.wrpr.classList.remove('mm-wrapper_sidebar-collapsed');
        };
        if (typeof options.collapsed.use == 'boolean') {
            this.bind('initMenu:after', enable);
        }
        else {
            _modules_matchmedia__WEBPACK_IMPORTED_MODULE_3__["add"](options.collapsed.use, enable, disable);
        }
    }
    //	Expanded
    if (options.expanded.use) {
        //	Make the menu expandable
        this.bind('initMenu:after', function () {
            _this.node.menu.classList.add('mm-menu_sidebar-expanded');
        });
        //	En-/disable the expanded sidebar.
        var enable = function () {
            _this.node.wrpr.classList.add('mm-wrapper_sidebar-expanded');
            if (!_this.node.wrpr.matches('.mm-wrapper_sidebar-closed')) {
                _this.open();
            }
        };
        var disable = function () {
            _this.node.wrpr.classList.remove('mm-wrapper_sidebar-expanded');
            _this.close();
        };
        if (typeof options.expanded.use == 'boolean') {
            this.bind('initMenu:after', enable);
        }
        else {
            _modules_matchmedia__WEBPACK_IMPORTED_MODULE_3__["add"](options.expanded.use, enable, disable);
        }
        //  Manually en-/disable the expanded sidebar (open / close the menu)
        this.bind('close:start', function () {
            if (_this.node.wrpr.matches('.mm-wrapper_sidebar-expanded')) {
                _this.node.wrpr.classList.add('mm-wrapper_sidebar-closed');
                if (options.expanded.initial == 'remember') {
                    window.localStorage.setItem('mmenuExpandedState', 'closed');
                }
            }
        });
        this.bind('open:start', function () {
            if (_this.node.wrpr.matches('.mm-wrapper_sidebar-expanded')) {
                _this.node.wrpr.classList.remove('mm-wrapper_sidebar-closed');
                if (options.expanded.initial == 'remember') {
                    window.localStorage.setItem('mmenuExpandedState', 'open');
                }
            }
        });
        //  Set the initial state
        var initialState = options.expanded.initial;
        if (options.expanded.initial == 'remember') {
            var state = window.localStorage.getItem('mmenuExpandedState');
            switch (state) {
                case 'open':
                case 'closed':
                    initialState = state;
                    break;
            }
        }
        if (initialState == 'closed') {
            this.bind('initMenu:after', function () {
                _this.node.wrpr.classList.add('mm-wrapper_sidebar-closed');
            });
        }
        //	Add click behavior.
        //	Prevents default behavior when clicking an anchor
        this.clck.push(function (anchor, args) {
            if (args.inMenu && args.inListview) {
                if (_this.node.wrpr.matches('.mm-wrapper_sidebar-expanded')) {
                    return {
                        close: options.expanded.initial == 'closed'
                    };
                }
            }
        });
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/addons/toggles/mmenu.toggles.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/addons/toggles/mmenu.toggles.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");


//	Add the classnames.
_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.classNames.toggles = {
    toggle: 'Toggle',
    check: 'Check'
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    this.bind('initPanel:after', function (panel) {
        //	Refactor toggle classes
        _modules_dom__WEBPACK_IMPORTED_MODULE_1__["find"](panel, 'input').forEach(function (input) {
            _modules_dom__WEBPACK_IMPORTED_MODULE_1__["reClass"](input, _this.conf.classNames.toggles.toggle, 'mm-toggle');
            _modules_dom__WEBPACK_IMPORTED_MODULE_1__["reClass"](input, _this.conf.classNames.toggles.check, 'mm-check');
        });
    });
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/offcanvas/_configs.js":
/*!***************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/offcanvas/_configs.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var configs = {
    clone: false,
    menu: {
        insertMethod: 'prepend',
        insertSelector: 'body'
    },
    page: {
        nodetype: 'div',
        selector: null,
        noSelector: []
    }
};
/* harmony default export */ __webpack_exports__["default"] = (configs);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/offcanvas/_options.js":
/*!***************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/offcanvas/_options.js ***!
  \***************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    blockUI: true,
    moveBackground: true
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/offcanvas/mmenu.offcanvas.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/offcanvas/mmenu.offcanvas.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/core/offcanvas/_options.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_configs */ "./node_modules/mmenu-js/dist/core/offcanvas/_configs.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/eventlisteners */ "./node_modules/mmenu-js/dist/_modules/eventlisteners.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");







//  Add the options and configs.
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.offCanvas = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.offCanvas = _configs__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    if (!this.opts.offCanvas) {
        return;
    }
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.offCanvas);
    this.opts.offCanvas = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_5__["extend"])(options, _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.offCanvas);
    var configs = this.conf.offCanvas;
    //	Add methods to the API.
    this._api.push('open', 'close', 'setPage');
    //	Setup the menu.
    this.vars.opened = false;
    //	Add off-canvas behavior.
    this.bind('initMenu:before', function () {
        //	Clone if needed.
        if (configs.clone) {
            //	Clone the original menu and store it.
            _this.node.menu = _this.node.menu.cloneNode(true);
            //	Prefix all ID's in the cloned menu.
            if (_this.node.menu.id) {
                _this.node.menu.id = 'mm-' + _this.node.menu.id;
            }
            _modules_dom__WEBPACK_IMPORTED_MODULE_3__["find"](_this.node.menu, '[id]').forEach(function (elem) {
                elem.id = 'mm-' + elem.id;
            });
        }
        _this.node.wrpr = document.body;
        //	Prepend to the <body>
        document
            .querySelector(configs.menu.insertSelector)[configs.menu.insertMethod](_this.node.menu);
    });
    this.bind('initMenu:after', function () {
        //	Setup the UI blocker.
        initBlocker.call(_this);
        //	Setup the page.
        _this.setPage(_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page);
        //	Setup window events.
        initWindow.call(_this);
        //	Setup the menu.
        _this.node.menu.classList.add('mm-menu_offcanvas');
        //	Open if url hash equals menu id (usefull when user clicks the hamburger icon before the menu is created)
        var hash = window.location.hash;
        if (hash) {
            var id = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_5__["originalId"])(_this.node.menu.id);
            if (id && id == hash.slice(1)) {
                setTimeout(function () {
                    _this.open();
                }, 1000);
            }
        }
    });
    //	Sync the blocker to target the page.
    this.bind('setPage:after', function (page) {
        if (_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck) {
            _modules_dom__WEBPACK_IMPORTED_MODULE_3__["children"](_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck, 'a').forEach(function (anchor) {
                anchor.setAttribute('href', '#' + page.id);
            });
        }
    });
    //	Add screenreader / aria support
    this.bind('open:start:sr-aria', function () {
        _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(_this.node.menu, 'hidden', false);
    });
    this.bind('close:finish:sr-aria', function () {
        _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(_this.node.menu, 'hidden', true);
    });
    this.bind('initMenu:after:sr-aria', function () {
        _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(_this.node.menu, 'hidden', true);
    });
    //	Add screenreader / text support
    this.bind('initBlocker:after:sr-text', function () {
        _modules_dom__WEBPACK_IMPORTED_MODULE_3__["children"](_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck, 'a').forEach(function (anchor) {
            anchor.innerHTML = _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_text(_this.i18n(_this.conf.screenReader.text.closeMenu));
        });
    });
    //	Add click behavior.
    //	Prevents default behavior when clicking an anchor
    this.clck.push(function (anchor, args) {
        //	Open menu if the clicked anchor links to the menu
        var id = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_5__["originalId"])(_this.node.menu.id);
        if (id) {
            if (anchor.matches('[href="#' + id + '"]')) {
                //	Opening this menu from within this menu
                //		-> Open menu
                if (args.inMenu) {
                    _this.open();
                    return true;
                }
                //	Opening this menu from within a second menu
                //		-> Close the second menu before opening this menu
                var menu = anchor.closest('.mm-menu');
                if (menu) {
                    var api = menu['mmApi'];
                    if (api && api.close) {
                        api.close();
                        Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_5__["transitionend"])(menu, function () {
                            _this.open();
                        }, _this.conf.transitionDuration);
                        return true;
                    }
                }
                //	Opening this menu
                _this.open();
                return true;
            }
        }
        //	Close menu
        id = _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page.id;
        if (id) {
            if (anchor.matches('[href="#' + id + '"]')) {
                _this.close();
                return true;
            }
        }
        return;
    });
});
/**
 * Open the menu.
 */
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.open = function () {
    var _this = this;
    //	Invoke "before" hook.
    this.trigger('open:before');
    if (this.vars.opened) {
        return;
    }
    this._openSetup();
    //	Without the timeout, the animation won't work because the menu had display: none;
    setTimeout(function () {
        _this._openStart();
    }, this.conf.openingInterval);
    //	Invoke "after" hook.
    this.trigger('open:after');
};
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._openSetup = function () {
    var _this = this;
    var options = this.opts.offCanvas;
    //	Close other menus
    this.closeAllOthers();
    //	Store style and position
    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page['mmStyle'] = _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page.getAttribute('style') || '';
    //	Trigger window-resize to measure height
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_4__["trigger"](window, 'resize.page', { force: true });
    var clsn = ['mm-wrapper_opened'];
    //	Add options
    if (options.blockUI) {
        clsn.push('mm-wrapper_blocking');
    }
    if (options.blockUI == 'modal') {
        clsn.push('mm-wrapper_modal');
    }
    if (options.moveBackground) {
        clsn.push('mm-wrapper_background');
    }
    //  IE11:
    clsn.forEach(function (classname) {
        _this.node.wrpr.classList.add(classname);
    });
    //  Better browsers:
    // this.node.wrpr.classList.add(...clsn);
    //	Open
    //	Without the timeout, the animation won't work because the menu had display: none;
    setTimeout(function () {
        _this.vars.opened = true;
    }, this.conf.openingInterval);
    this.node.menu.classList.add('mm-menu_opened');
};
/**
 * Finish opening the menu.
 */
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._openStart = function () {
    var _this = this;
    //	Callback when the page finishes opening.
    Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_5__["transitionend"])(_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page, function () {
        _this.trigger('open:finish');
    }, this.conf.transitionDuration);
    //	Opening
    this.trigger('open:start');
    this.node.wrpr.classList.add('mm-wrapper_opening');
};
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.close = function () {
    var _this = this;
    //	Invoke "before" hook.
    this.trigger('close:before');
    if (!this.vars.opened) {
        return;
    }
    //	Callback when the page finishes closing.
    Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_5__["transitionend"])(_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page, function () {
        _this.node.menu.classList.remove('mm-menu_opened');
        var classnames = [
            'mm-wrapper_opened',
            'mm-wrapper_blocking',
            'mm-wrapper_modal',
            'mm-wrapper_background'
        ];
        //  IE11:
        classnames.forEach(function (classname) {
            _this.node.wrpr.classList.remove(classname);
        });
        //  Better browsers:
        // this.node.wrpr.classList.remove(...classnames);
        //	Restore style and position
        _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page.setAttribute('style', _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page['mmStyle']);
        _this.vars.opened = false;
        _this.trigger('close:finish');
    }, this.conf.transitionDuration);
    //	Closing
    this.trigger('close:start');
    this.node.wrpr.classList.remove('mm-wrapper_opening');
    //	Invoke "after" hook.
    this.trigger('close:after');
};
/**
 * Close all other menus.
 */
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closeAllOthers = function () {
    var _this = this;
    _modules_dom__WEBPACK_IMPORTED_MODULE_3__["find"](document.body, '.mm-menu_offcanvas').forEach(function (menu) {
        if (menu !== _this.node.menu) {
            var api = menu['mmApi'];
            if (api && api.close) {
                api.close();
            }
        }
    });
};
/**
 * Set the "page" node.
 *
 * @param {HTMLElement} page Element to set as the page.
 */
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setPage = function (page) {
    //	Invoke "before" hook.
    this.trigger('setPage:before', [page]);
    var configs = this.conf.offCanvas;
    //	If no page was specified, find it.
    if (!page) {
        /** Array of elements that are / could be "the page". */
        var pages = typeof configs.page.selector == 'string'
            ? _modules_dom__WEBPACK_IMPORTED_MODULE_3__["find"](document.body, configs.page.selector)
            : _modules_dom__WEBPACK_IMPORTED_MODULE_3__["children"](document.body, configs.page.nodetype);
        //	Filter out elements that are absolutely not "the page".
        pages = pages.filter(function (page) { return !page.matches('.mm-menu, .mm-wrapper__blocker'); });
        //	Filter out elements that are configured to not be "the page".
        if (configs.page.noSelector.length) {
            pages = pages.filter(function (page) { return !page.matches(configs.page.noSelector.join(', ')); });
        }
        //	Wrap multiple pages in a single element.
        if (pages.length > 1) {
            var wrapper_1 = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["create"]('div');
            pages[0].before(wrapper_1);
            pages.forEach(function (page) {
                wrapper_1.append(page);
            });
            pages = [wrapper_1];
        }
        page = pages[0];
    }
    page.classList.add('mm-page');
    page.classList.add('mm-slideout');
    page.id = page.id || Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_5__["uniqueId"])();
    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.page = page;
    //	Invoke "after" hook.
    this.trigger('setPage:after', [page]);
};
/**
 * Initialize the window.
 */
var initWindow = function () {
    var _this = this;
    //	Prevent tabbing
    //	Because when tabbing outside the menu, the element that gains focus will be centered on the screen.
    //	In other words: The menu would move out of view.
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_4__["off"](document.body, 'keydown.tabguard');
    _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_4__["on"](document.body, 'keydown.tabguard', function (evnt) {
        if (evnt.keyCode == 9) {
            if (_this.node.wrpr.matches('.mm-wrapper_opened')) {
                evnt.preventDefault();
            }
        }
    });
};
/**
 * Initialize "blocker" node
 */
var initBlocker = function () {
    var _this = this;
    //	Invoke "before" hook.
    this.trigger('initBlocker:before');
    var options = this.opts.offCanvas, configs = this.conf.offCanvas;
    if (!options.blockUI) {
        return;
    }
    //	Create the blocker node.
    if (!_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck) {
        var blck = _modules_dom__WEBPACK_IMPORTED_MODULE_3__["create"]('div.mm-wrapper__blocker.mm-slideout');
        blck.innerHTML = '<a></a>';
        //	Append the blocker node to the body.
        document.querySelector(configs.menu.insertSelector).append(blck);
        //	Store the blocker node.
        _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck = blck;
    }
    //	Close the menu when
    //		1) clicking,
    //		2) touching or
    //		3) dragging the blocker node.
    var closeMenu = function (evnt) {
        evnt.preventDefault();
        evnt.stopPropagation();
        if (!_this.node.wrpr.matches('.mm-wrapper_modal')) {
            _this.close();
        }
    };
    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck.addEventListener('mousedown', closeMenu); // 1
    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck.addEventListener('touchstart', closeMenu); // 2
    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].node.blck.addEventListener('touchmove', closeMenu); // 3
    //	Invoke "after" hook.
    this.trigger('initBlocker:after');
};


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/oncanvas/_configs.js":
/*!**************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/oncanvas/_configs.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var configs = {
    classNames: {
        inset: 'Inset',
        nolistview: 'NoListview',
        nopanel: 'NoPanel',
        panel: 'Panel',
        selected: 'Selected',
        vertical: 'Vertical'
    },
    language: null,
    openingInterval: 25,
    panelNodetype: ['ul', 'ol', 'div'],
    transitionDuration: 400
};
/* harmony default export */ __webpack_exports__["default"] = (configs);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/oncanvas/_options.js":
/*!**************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/oncanvas/_options.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
    hooks: {},
    extensions: [],
    wrappers: [],
    navbar: {
        add: true,
        sticky: true,
        title: 'Menu',
        titleLink: 'parent'
    },
    onClick: {
        close: null,
        preventDefault: null,
        setSelected: true
    },
    slidingSubmenus: true
};
/* harmony default export */ __webpack_exports__["default"] = (options);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js":
/*!********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../package.json */ "./node_modules/mmenu-js/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "./node_modules/mmenu-js/package.json", 1);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/core/oncanvas/_options.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_configs */ "./node_modules/mmenu-js/dist/core/oncanvas/_configs.js");
/* harmony import */ var _translations_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/translate */ "./node_modules/mmenu-js/dist/core/oncanvas/translations/translate.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_modules/i18n */ "./node_modules/mmenu-js/dist/_modules/i18n.js");
/* harmony import */ var _modules_matchmedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_modules/matchmedia */ "./node_modules/mmenu-js/dist/_modules/matchmedia.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");








//  Add the translations.
Object(_translations_translate__WEBPACK_IMPORTED_MODULE_3__["default"])();
/**
 * Class for a mobile menu.
 */
var Mmenu = /** @class */ (function () {
    /**
     * Create a mobile menu.
     * @param {HTMLElement|string} 	menu						The menu node.
     * @param {object} 				[options=Mmenu.options]		Options for the menu.
     * @param {object} 				[configs=Mmenu.configs]		Configuration options for the menu.
     */
    function Mmenu(menu, options, configs) {
        //	Extend options and configuration from defaults.
        this.opts = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["extend"])(options, Mmenu.options);
        this.conf = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["extend"])(configs, Mmenu.configs);
        //	Methods to expose in the API.
        this._api = [
            'bind',
            'initPanel',
            'initListview',
            'openPanel',
            'closePanel',
            'closeAllPanels',
            'setSelected',
        ];
        //	Storage objects for nodes, variables, hooks and click handlers.
        this.node = {};
        this.vars = {};
        this.hook = {};
        this.clck = [];
        //	Get menu node from string or element.
        this.node.menu =
            typeof menu == 'string' ? document.querySelector(menu) : menu;
        if (typeof this._deprecatedWarnings == 'function') {
            this._deprecatedWarnings();
        }
        this._initWrappers();
        this._initAddons();
        this._initExtensions();
        this._initHooks();
        this._initAPI();
        this._initMenu();
        this._initPanels();
        this._initOpened();
        this._initAnchors();
        _modules_matchmedia__WEBPACK_IMPORTED_MODULE_6__["watch"]();
        return this;
    }
    /**
     * Open a panel.
     * @param {HTMLElement} panel				Panel to open.
     * @param {boolean}		[animation=true]	Whether or not to open the panel with an animation.
     */
    Mmenu.prototype.openPanel = function (panel, animation) {
        var _this = this;
        //	Invoke "before" hook.
        this.trigger('openPanel:before', [panel]);
        //	Find panel.
        if (!panel) {
            return;
        }
        if (!panel.matches('.mm-panel')) {
            panel = panel.closest('.mm-panel');
        }
        if (!panel) {
            return;
        }
        //	/Find panel.
        if (typeof animation != 'boolean') {
            animation = true;
        }
        //	Open a "vertical" panel.
        if (panel.parentElement.matches('.mm-listitem_vertical')) {
            //	Open current and all vertical parent panels.
            _modules_dom__WEBPACK_IMPORTED_MODULE_4__["parents"](panel, '.mm-listitem_vertical').forEach(function (listitem) {
                listitem.classList.add('mm-listitem_opened');
                _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](listitem, '.mm-panel').forEach(function (panel) {
                    panel.classList.remove('mm-hidden');
                });
            });
            //	Open first non-vertical parent panel.
            var parents = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["parents"](panel, '.mm-panel').filter(function (panel) { return !panel.parentElement.matches('.mm-listitem_vertical'); });
            this.trigger('openPanel:start', [panel]);
            if (parents.length) {
                this.openPanel(parents[0]);
            }
            this.trigger('openPanel:finish', [panel]);
            //	Open a "horizontal" panel.
        }
        else {
            if (panel.matches('.mm-panel_opened')) {
                return;
            }
            var panels = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel'), current_1 = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel_opened')[0];
            //	Close all child panels.
            panels
                .filter(function (parent) { return parent !== panel; })
                .forEach(function (parent) {
                parent.classList.remove('mm-panel_opened-parent');
            });
            //	Open all parent panels.
            var parent_1 = panel['mmParent'];
            while (parent_1) {
                parent_1 = parent_1.closest('.mm-panel');
                if (parent_1) {
                    if (!parent_1.parentElement.matches('.mm-listitem_vertical')) {
                        parent_1.classList.add('mm-panel_opened-parent');
                    }
                    parent_1 = parent_1['mmParent'];
                }
            }
            //	Add classes for animation.
            panels.forEach(function (panel) {
                panel.classList.remove('mm-panel_highest');
            });
            panels
                .filter(function (hidden) { return hidden !== current_1; })
                .filter(function (hidden) { return hidden !== panel; })
                .forEach(function (hidden) {
                hidden.classList.add('mm-hidden');
            });
            panel.classList.remove('mm-hidden');
            /**	Start opening the panel. */
            var openPanelStart_1 = function () {
                if (current_1) {
                    current_1.classList.remove('mm-panel_opened');
                }
                panel.classList.add('mm-panel_opened');
                if (panel.matches('.mm-panel_opened-parent')) {
                    if (current_1) {
                        current_1.classList.add('mm-panel_highest');
                    }
                    panel.classList.remove('mm-panel_opened-parent');
                }
                else {
                    if (current_1) {
                        current_1.classList.add('mm-panel_opened-parent');
                    }
                    panel.classList.add('mm-panel_highest');
                }
                //	Invoke "start" hook.
                _this.trigger('openPanel:start', [panel]);
            };
            /**	Finish opening the panel. */
            var openPanelFinish_1 = function () {
                if (current_1) {
                    current_1.classList.remove('mm-panel_highest');
                    current_1.classList.add('mm-hidden');
                }
                panel.classList.remove('mm-panel_highest');
                //	Invoke "finish" hook.
                _this.trigger('openPanel:finish', [panel]);
            };
            if (animation && !panel.matches('.mm-panel_noanimation')) {
                //	Without the timeout the animation will not work because the element had display: none;
                setTimeout(function () {
                    //	Callback
                    Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["transitionend"])(panel, function () {
                        openPanelFinish_1();
                    }, _this.conf.transitionDuration);
                    openPanelStart_1();
                }, this.conf.openingInterval);
            }
            else {
                openPanelStart_1();
                openPanelFinish_1();
            }
        }
        //	Invoke "after" hook.
        this.trigger('openPanel:after', [panel]);
    };
    /**
     * Close a panel.
     * @param {HTMLElement} panel Panel to close.
     */
    Mmenu.prototype.closePanel = function (panel) {
        //	Invoke "before" hook.
        this.trigger('closePanel:before', [panel]);
        var li = panel.parentElement;
        //	Only works for "vertical" panels.
        if (li.matches('.mm-listitem_vertical')) {
            li.classList.remove('mm-listitem_opened');
            panel.classList.add('mm-hidden');
            //	Invoke main hook.
            this.trigger('closePanel', [panel]);
        }
        //	Invoke "after" hook.
        this.trigger('closePanel:after', [panel]);
    };
    /**
     * Close all opened panels.
     * @param {HTMLElement} panel Panel to open after closing all other panels.
     */
    Mmenu.prototype.closeAllPanels = function (panel) {
        //	Invoke "before" hook.
        this.trigger('closeAllPanels:before');
        //	Close all "vertical" panels.
        var listitems = this.node.pnls.querySelectorAll('.mm-listitem');
        listitems.forEach(function (listitem) {
            listitem.classList.remove('mm-listitem_selected');
            listitem.classList.remove('mm-listitem_opened');
        });
        //	Close all "horizontal" panels.
        var panels = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel'), opened = panel ? panel : panels[0];
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel').forEach(function (panel) {
            if (panel !== opened) {
                panel.classList.remove('mm-panel_opened');
                panel.classList.remove('mm-panel_opened-parent');
                panel.classList.remove('mm-panel_highest');
                panel.classList.add('mm-hidden');
            }
        });
        //	Open first panel.
        this.openPanel(opened, false);
        //	Invoke "after" hook.
        this.trigger('closeAllPanels:after');
    };
    /**
     * Toggle a panel opened/closed.
     * @param {HTMLElement} panel Panel to open or close.
     */
    Mmenu.prototype.togglePanel = function (panel) {
        var listitem = panel.parentElement;
        //	Only works for "vertical" panels.
        if (listitem.matches('.mm-listitem_vertical')) {
            this[listitem.matches('.mm-listitem_opened')
                ? 'closePanel'
                : 'openPanel'](panel);
        }
    };
    /**
     * Display a listitem as being "selected".
     * @param {HTMLElement} listitem Listitem to mark.
     */
    Mmenu.prototype.setSelected = function (listitem) {
        //	Invoke "before" hook.
        this.trigger('setSelected:before', [listitem]);
        //	First, remove the selected class from all listitems.
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](this.node.menu, '.mm-listitem_selected').forEach(function (li) {
            li.classList.remove('mm-listitem_selected');
        });
        //	Next, add the selected class to the provided listitem.
        listitem.classList.add('mm-listitem_selected');
        //	Invoke "after" hook.
        this.trigger('setSelected:after', [listitem]);
    };
    /**
     * Bind functions to a hook (subscriber).
     * @param {string} 		hook The hook.
     * @param {function} 	func The function.
     */
    Mmenu.prototype.bind = function (hook, func) {
        //	Create an array for the hook if it does not yet excist.
        this.hook[hook] = this.hook[hook] || [];
        //	Push the function to the array.
        this.hook[hook].push(func);
    };
    /**
     * Invoke the functions bound to a hook (publisher).
     * @param {string} 	hook  	The hook.
     * @param {array}	[args] 	Arguments for the function.
     */
    Mmenu.prototype.trigger = function (hook, args) {
        if (this.hook[hook]) {
            for (var h = 0, l = this.hook[hook].length; h < l; h++) {
                this.hook[hook][h].apply(this, args);
            }
        }
    };
    /**
     * Create the API.
     */
    Mmenu.prototype._initAPI = function () {
        var _this = this;
        //	We need this=that because:
        //	1) the "arguments" object can not be referenced in an arrow function in ES3 and ES5.
        var that = this;
        this.API = {};
        this._api.forEach(function (fn) {
            _this.API[fn] = function () {
                var re = that[fn].apply(that, arguments); // 1)
                return typeof re == 'undefined' ? that.API : re;
            };
        });
        //	Store the API in the HTML node for external usage.
        this.node.menu['mmApi'] = this.API;
    };
    /**
     * Bind the hooks specified in the options (publisher).
     */
    Mmenu.prototype._initHooks = function () {
        for (var hook in this.opts.hooks) {
            this.bind(hook, this.opts.hooks[hook]);
        }
    };
    /**
     * Initialize the wrappers specified in the options.
     */
    Mmenu.prototype._initWrappers = function () {
        //	Invoke "before" hook.
        this.trigger('initWrappers:before');
        for (var w = 0; w < this.opts.wrappers.length; w++) {
            var wrpr = Mmenu.wrappers[this.opts.wrappers[w]];
            if (typeof wrpr == 'function') {
                wrpr.call(this);
            }
        }
        //	Invoke "after" hook.
        this.trigger('initWrappers:after');
    };
    /**
     * Initialize all available add-ons.
     */
    Mmenu.prototype._initAddons = function () {
        //	Invoke "before" hook.
        this.trigger('initAddons:before');
        for (var addon in Mmenu.addons) {
            Mmenu.addons[addon].call(this);
        }
        //	Invoke "after" hook.
        this.trigger('initAddons:after');
    };
    /**
     * Initialize the extensions specified in the options.
     */
    Mmenu.prototype._initExtensions = function () {
        var _this = this;
        //	Invoke "before" hook.
        this.trigger('initExtensions:before');
        //	Convert array to object with array.
        if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["type"])(this.opts.extensions) == 'array') {
            this.opts.extensions = {
                all: this.opts.extensions,
            };
        }
        //	Loop over object.
        Object.keys(this.opts.extensions).forEach(function (query) {
            var classnames = _this.opts.extensions[query].map(function (extension) { return 'mm-menu_' + extension; });
            if (classnames.length) {
                _modules_matchmedia__WEBPACK_IMPORTED_MODULE_6__["add"](query, function () {
                    //  IE11:
                    classnames.forEach(function (classname) {
                        _this.node.menu.classList.add(classname);
                    });
                    //  Better browsers:
                    // this.node.menu.classList.add(...classnames);
                }, function () {
                    //  IE11:
                    classnames.forEach(function (classname) {
                        _this.node.menu.classList.remove(classname);
                    });
                    //  Better browsers:
                    // this.node.menu.classList.remove(...classnames);
                });
            }
        });
        //	Invoke "after" hook.
        this.trigger('initExtensions:after');
    };
    /**
     * Initialize the menu.
     */
    Mmenu.prototype._initMenu = function () {
        var _this = this;
        //	Invoke "before" hook.
        this.trigger('initMenu:before');
        //	Add class to the wrapper.
        this.node.wrpr = this.node.wrpr || this.node.menu.parentElement;
        this.node.wrpr.classList.add('mm-wrapper');
        //	Add an ID to the menu if it does not yet have one.
        this.node.menu.id = this.node.menu.id || Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["uniqueId"])();
        //	Wrap the panels in a node.
        var panels = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('div.mm-panels');
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.menu).forEach(function (panel) {
            if (_this.conf.panelNodetype.indexOf(panel.nodeName.toLowerCase()) >
                -1) {
                panels.append(panel);
            }
        });
        this.node.menu.append(panels);
        this.node.pnls = panels;
        //	Add class to the menu.
        this.node.menu.classList.add('mm-menu');
        //	Invoke "after" hook.
        this.trigger('initMenu:after');
    };
    /**
     * Initialize panels.
     */
    Mmenu.prototype._initPanels = function () {
        var _this = this;
        //	Invoke "before" hook.
        this.trigger('initPanels:before');
        //	Open / close panels.
        this.clck.push(function (anchor, args) {
            if (args.inMenu) {
                var href = anchor.getAttribute('href');
                if (href && href.length > 1 && href.slice(0, 1) == '#') {
                    try {
                        var panel = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](_this.node.menu, href)[0];
                        if (panel && panel.matches('.mm-panel')) {
                            if (anchor.parentElement.matches('.mm-listitem_vertical')) {
                                _this.togglePanel(panel);
                            }
                            else {
                                _this.openPanel(panel);
                            }
                            return true;
                        }
                    }
                    catch (err) { }
                }
            }
        });
        /** The panels to initiate */
        var panels = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls);
        panels.forEach(function (panel) {
            _this.initPanel(panel);
        });
        //	Invoke "after" hook.
        this.trigger('initPanels:after');
    };
    /**
     * Initialize a single panel and its children.
     * @param {HTMLElement} panel The panel to initialize.
     */
    Mmenu.prototype.initPanel = function (panel) {
        var _this = this;
        /** Query selector for possible node-types for panels. */
        var panelNodetype = this.conf.panelNodetype.join(', ');
        if (panel.matches(panelNodetype)) {
            //  Only once
            if (!panel.matches('.mm-panel')) {
                panel = this._initPanel(panel);
            }
            if (panel) {
                /** The sub panels. */
                var children_1 = [];
                //	Find panel > panel
                children_1.push.apply(children_1, _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](panel, '.' + this.conf.classNames.panel));
                //	Find panel listitem > panel
                _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](panel, '.mm-listview').forEach(function (listview) {
                    _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](listview, '.mm-listitem').forEach(function (listitem) {
                        children_1.push.apply(children_1, _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](listitem, panelNodetype));
                    });
                });
                //  Initiate subpanel(s).
                children_1.forEach(function (child) {
                    _this.initPanel(child);
                });
            }
        }
    };
    /**
     * Initialize a single panel.
     * @param  {HTMLElement} 		panel 	Panel to initialize.
     * @return {HTMLElement|null} 			Initialized panel.
     */
    Mmenu.prototype._initPanel = function (panel) {
        var _this = this;
        //	Invoke "before" hook.
        this.trigger('initPanel:before', [panel]);
        //	Refactor panel classnames
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["reClass"](panel, this.conf.classNames.panel, 'mm-panel');
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["reClass"](panel, this.conf.classNames.nopanel, 'mm-nopanel');
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["reClass"](panel, this.conf.classNames.inset, 'mm-listview_inset');
        if (panel.matches('.mm-listview_inset')) {
            panel.classList.add('mm-nopanel');
        }
        //	Stop if not supposed to be a panel.
        if (panel.matches('.mm-nopanel')) {
            return null;
        }
        /** The original ID on the node. */
        var id = panel.id || Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["uniqueId"])();
        //  Vertical panel.
        var vertical = panel.matches('.' + this.conf.classNames.vertical) ||
            !this.opts.slidingSubmenus;
        panel.classList.remove(this.conf.classNames.vertical);
        //	Wrap UL/OL in DIV
        if (panel.matches('ul, ol')) {
            panel.removeAttribute('id');
            /** The panel. */
            var wrapper = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('div');
            //	Wrap the listview in the panel.
            panel.before(wrapper);
            wrapper.append(panel);
            panel = wrapper;
        }
        panel.id = id;
        panel.classList.add('mm-panel');
        panel.classList.add('mm-hidden');
        /** The parent listitem. */
        var parent = [panel.parentElement].filter(function (listitem) {
            return listitem.matches('li');
        })[0];
        if (vertical) {
            if (parent) {
                parent.classList.add('mm-listitem_vertical');
            }
        }
        else {
            this.node.pnls.append(panel);
        }
        if (parent) {
            //	Store parent/child relation.
            parent['mmChild'] = panel;
            panel['mmParent'] = parent;
            //	Add open link to parent listitem
            if (parent && parent.matches('.mm-listitem')) {
                if (!_modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](parent, '.mm-btn').length) {
                    /** The text node. */
                    var item = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](parent, '.mm-listitem__text')[0];
                    if (item) {
                        /** The open link. */
                        var button = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('a.mm-btn.mm-btn_next.mm-listitem__btn');
                        button.setAttribute('href', '#' + panel.id);
                        //  If the item has no link,
                        //      Replace the item with the open link.
                        if (item.matches('span')) {
                            button.classList.add('mm-listitem__text');
                            button.innerHTML = item.innerHTML;
                            parent.insertBefore(button, item.nextElementSibling);
                            item.remove();
                        }
                        //  Otherwise, insert the button after the text.
                        else {
                            parent.insertBefore(button, _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](parent, '.mm-panel')[0]);
                        }
                    }
                }
            }
        }
        this._initNavbar(panel);
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](panel, 'ul, ol').forEach(function (listview) {
            _this.initListview(listview);
        });
        //	Invoke "after" hook.
        this.trigger('initPanel:after', [panel]);
        return panel;
    };
    /**
     * Initialize a navbar.
     * @param {HTMLElement} panel Panel for the navbar.
     */
    Mmenu.prototype._initNavbar = function (panel) {
        //	Invoke "before" hook.
        this.trigger('initNavbar:before', [panel]);
        //	Only one navbar per panel.
        if (_modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](panel, '.mm-navbar').length) {
            return;
        }
        /** The parent listitem. */
        var parentListitem = null;
        /** The parent panel. */
        var parentPanel = null;
        //  The parent panel was specified in the data-mm-parent attribute.
        if (panel.getAttribute('data-mm-parent')) {
            parentPanel = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](this.node.pnls, panel.getAttribute('data-mm-parent'))[0];
        }
        // if (panel.dataset.mmParent) { // IE10 has no dataset
        // parentPanel = DOM.find(this.node.pnls, panel.dataset.mmParent)[0];
        // }
        //  The parent panel from a listitem.
        else {
            parentListitem = panel['mmParent'];
            if (parentListitem) {
                parentPanel = parentListitem.closest('.mm-panel');
            }
        }
        //  No navbar needed for vertical submenus.
        if (parentListitem && parentListitem.matches('.mm-listitem_vertical')) {
            return;
        }
        /** The navbar element. */
        var navbar = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('div.mm-navbar');
        //  Hide navbar if specified in options.
        if (!this.opts.navbar.add) {
            navbar.classList.add('mm-hidden');
        }
        //  Sticky navbars.
        else if (this.opts.navbar.sticky) {
            navbar.classList.add('mm-navbar_sticky');
        }
        //  Add the back button.
        if (parentPanel) {
            /** The back button. */
            var prev = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('a.mm-btn.mm-btn_prev.mm-navbar__btn');
            prev.setAttribute('href', '#' + parentPanel.id);
            navbar.append(prev);
        }
        /** The anchor that opens the panel. */
        var opener = null;
        //  The anchor is in a listitem.
        if (parentListitem) {
            opener = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](parentListitem, '.mm-listitem__text')[0];
        }
        //  The anchor is in a panel.
        else if (parentPanel) {
            opener = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](parentPanel, 'a[href="#' + panel.id + '"]')[0];
        }
        //  Add the title.
        var title = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('a.mm-navbar__title');
        var titleText = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["create"]('span');
        title.append(titleText);
        titleText.innerHTML =
            // panel.dataset.mmTitle || // IE10 has no dataset :(
            panel.getAttribute('data-mm-title') ||
                (opener ? opener.textContent : '') ||
                this.i18n(this.opts.navbar.title) ||
                this.i18n('Menu');
        switch (this.opts.navbar.titleLink) {
            case 'anchor':
                if (opener) {
                    title.setAttribute('href', opener.getAttribute('href'));
                }
                break;
            case 'parent':
                if (parentPanel) {
                    title.setAttribute('href', '#' + parentPanel.id);
                }
                break;
        }
        navbar.append(title);
        panel.prepend(navbar);
        //	Invoke "after" hook.
        this.trigger('initNavbar:after', [panel]);
    };
    /**
     * Initialize a listview.
     * @param {HTMLElement} listview Listview to initialize.
     */
    Mmenu.prototype.initListview = function (listview) {
        var _this = this;
        //	Invoke "before" hook.
        this.trigger('initListview:before', [listview]);
        _modules_dom__WEBPACK_IMPORTED_MODULE_4__["reClass"](listview, this.conf.classNames.nolistview, 'mm-nolistview');
        if (!listview.matches('.mm-nolistview')) {
            listview.classList.add('mm-listview');
            _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](listview).forEach(function (listitem) {
                listitem.classList.add('mm-listitem');
                _modules_dom__WEBPACK_IMPORTED_MODULE_4__["reClass"](listitem, _this.conf.classNames.selected, 'mm-listitem_selected');
                _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](listitem, 'a, span').forEach(function (item) {
                    if (!item.matches('.mm-btn')) {
                        item.classList.add('mm-listitem__text');
                    }
                });
            });
        }
        //	Invoke "after" hook.
        this.trigger('initListview:after', [listview]);
    };
    /**
     * Find and open the correct panel after creating the menu.
     */
    Mmenu.prototype._initOpened = function () {
        //	Invoke "before" hook.
        this.trigger('initOpened:before');
        /** The selected listitem(s). */
        var listitems = this.node.pnls.querySelectorAll('.mm-listitem_selected');
        /** The last selected listitem. */
        var lastitem = null;
        //	Deselect the listitems.
        listitems.forEach(function (listitem) {
            lastitem = listitem;
            listitem.classList.remove('mm-listitem_selected');
        });
        //	Re-select the last listitem.
        if (lastitem) {
            lastitem.classList.add('mm-listitem_selected');
        }
        /**	The current opened panel. */
        var current = lastitem
            ? lastitem.closest('.mm-panel')
            : _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](this.node.pnls, '.mm-panel')[0];
        //	Open the current opened panel.
        this.openPanel(current, false);
        //	Invoke "after" hook.
        this.trigger('initOpened:after');
    };
    /**
     * Initialize anchors in / for the menu.
     */
    Mmenu.prototype._initAnchors = function () {
        var _this = this;
        //	Invoke "before" hook.
        this.trigger('initAnchors:before');
        document.addEventListener('click', function (evnt) {
            /** The clicked element. */
            var target = evnt.target.closest('a[href]');
            if (!target) {
                return;
            }
            /** Arguments passed to the bound methods. */
            var args = {
                inMenu: target.closest('.mm-menu') === _this.node.menu,
                inListview: target.matches('.mm-listitem > a'),
                toExternal: target.matches('[rel="external"]') ||
                    target.matches('[target="_blank"]'),
            };
            var onClick = {
                close: null,
                setSelected: null,
                preventDefault: target.getAttribute('href').slice(0, 1) == '#',
            };
            //	Find hooked behavior.
            for (var c = 0; c < _this.clck.length; c++) {
                var click = _this.clck[c].call(_this, target, args);
                if (click) {
                    if (typeof click == 'boolean') {
                        evnt.preventDefault();
                        return;
                    }
                    if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["type"])(click) == 'object') {
                        onClick = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["extend"])(click, onClick);
                    }
                }
            }
            //	Default behavior for anchors in lists.
            if (args.inMenu && args.inListview && !args.toExternal) {
                //	Set selected item, Default: true
                if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["valueOrFn"])(target, _this.opts.onClick.setSelected, onClick.setSelected)) {
                    _this.setSelected(target.parentElement);
                }
                //	Prevent default / don't follow link. Default: false.
                if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["valueOrFn"])(target, _this.opts.onClick.preventDefault, onClick.preventDefault)) {
                    evnt.preventDefault();
                }
                //	Close menu. Default: false
                if (Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_7__["valueOrFn"])(target, _this.opts.onClick.close, onClick.close)) {
                    if (_this.opts.offCanvas &&
                        typeof _this.close == 'function') {
                        _this.close();
                    }
                }
            }
        }, true);
        //	Invoke "after" hook.
        this.trigger('initAnchors:after');
    };
    /**
     * Get the translation for a text.
     * @param  {string} text 	Text to translate.
     * @return {string}			The translated text.
     */
    Mmenu.prototype.i18n = function (text) {
        return _modules_i18n__WEBPACK_IMPORTED_MODULE_5__["get"](text, this.conf.language);
    };
    /**	Plugin version. */
    Mmenu.version = _package_json__WEBPACK_IMPORTED_MODULE_0__["version"];
    /**	Default options for menus. */
    Mmenu.options = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
    /**	Default configuration for menus. */
    Mmenu.configs = _configs__WEBPACK_IMPORTED_MODULE_2__["default"];
    /**	Available add-ons for the plugin. */
    Mmenu.addons = {};
    /** Available wrappers for the plugin. */
    Mmenu.wrappers = {};
    /**	Globally used HTML elements. */
    Mmenu.node = {};
    /** Globally used variables. */
    Mmenu.vars = {};
    return Mmenu;
}());
/* harmony default export */ __webpack_exports__["default"] = (Mmenu);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/oncanvas/translations/de.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/oncanvas/translations/de.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'Menu': 'Menü'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/oncanvas/translations/fa.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/oncanvas/translations/fa.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'Menu': 'منو'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/oncanvas/translations/nl.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/oncanvas/translations/nl.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'Menu': 'Menu'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/oncanvas/translations/ru.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/oncanvas/translations/ru.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'Menu': 'Меню'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/oncanvas/translations/translate.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/oncanvas/translations/translate.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_modules/i18n */ "./node_modules/mmenu-js/dist/_modules/i18n.js");
/* harmony import */ var _nl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nl */ "./node_modules/mmenu-js/dist/core/oncanvas/translations/nl.js");
/* harmony import */ var _fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fa */ "./node_modules/mmenu-js/dist/core/oncanvas/translations/fa.js");
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./de */ "./node_modules/mmenu-js/dist/core/oncanvas/translations/de.js");
/* harmony import */ var _ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ru */ "./node_modules/mmenu-js/dist/core/oncanvas/translations/ru.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_nl__WEBPACK_IMPORTED_MODULE_1__["default"], 'nl');
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_fa__WEBPACK_IMPORTED_MODULE_2__["default"], 'fa');
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_de__WEBPACK_IMPORTED_MODULE_3__["default"], 'de');
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_ru__WEBPACK_IMPORTED_MODULE_4__["default"], 'ru');
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/screenreader/_configs.js":
/*!******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/screenreader/_configs.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var configs = {
    text: {
        closeMenu: 'Close menu',
        closeSubmenu: 'Close submenu',
        openSubmenu: 'Open submenu',
        toggleSubmenu: 'Toggle submenu'
    }
};
/* harmony default export */ __webpack_exports__["default"] = (configs);


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/screenreader/_options.js":
/*!******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/screenreader/_options.js ***!
  \******************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    aria: true,
    text: true
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            aria: options,
            text: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/screenreader/mmenu.screenreader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/screenreader/mmenu.screenreader.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/core/screenreader/_options.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_configs */ "./node_modules/mmenu-js/dist/core/screenreader/_configs.js");
/* harmony import */ var _translations_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/translate */ "./node_modules/mmenu-js/dist/core/screenreader/translations/translate.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");







//  Add the translations.
Object(_translations_translate__WEBPACK_IMPORTED_MODULE_3__["default"])();
//  Add the options and configs.
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.screenReader = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].configs.screenReader = _configs__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    //	Extend options.
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.screenReader);
    this.opts.screenReader = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_5__["extend"])(options, _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.screenReader);
    //	Extend configs.
    var configs = this.conf.screenReader;
    //	Add Aria-* attributes
    if (options.aria) {
        //	Add screenreader / aria hooks for add-ons
        //	In orde to keep this list short, only extend hooks that are actually used by other add-ons.
        this.bind('initAddons:after', function () {
            _this.bind('initMenu:after', function () {
                this.trigger('initMenu:after:sr-aria', [].slice.call(arguments));
            });
            _this.bind('initNavbar:after', function () {
                this.trigger('initNavbar:after:sr-aria', [].slice.call(arguments));
            });
            _this.bind('openPanel:start', function () {
                this.trigger('openPanel:start:sr-aria', [].slice.call(arguments));
            });
            _this.bind('close:start', function () {
                this.trigger('close:start:sr-aria', [].slice.call(arguments));
            });
            _this.bind('close:finish', function () {
                this.trigger('close:finish:sr-aria', [].slice.call(arguments));
            });
            _this.bind('open:start', function () {
                this.trigger('open:start:sr-aria', [].slice.call(arguments));
            });
            _this.bind('initOpened:after', function () {
                this.trigger('initOpened:after:sr-aria', [].slice.call(arguments));
            });
        });
        //	Update aria-hidden for hidden / visible listitems
        this.bind('updateListview', function () {
            _this.node.pnls
                .querySelectorAll('.mm-listitem')
                .forEach(function (listitem) {
                _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(listitem, 'hidden', listitem.matches('.mm-hidden'));
            });
        });
        //	Update aria-hidden for the panels when opening and closing a panel.
        this.bind('openPanel:start', function (panel) {
            /** Panels that should be considered "hidden". */
            var hidden = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](_this.node.pnls, '.mm-panel')
                .filter(function (hide) { return hide !== panel; })
                .filter(function (hide) { return !hide.parentElement.matches('.mm-panel'); });
            /** Panels that should be considered "visible". */
            var visible = [panel];
            _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-listitem_vertical .mm-listitem_opened').forEach(function (listitem) {
                visible.push.apply(visible, _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](listitem, '.mm-panel'));
            });
            //	Set the panels to be considered "hidden" or "visible".
            hidden.forEach(function (panel) {
                _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(panel, 'hidden', true);
            });
            visible.forEach(function (panel) {
                _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(panel, 'hidden', false);
            });
        });
        this.bind('closePanel', function (panel) {
            _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(panel, 'hidden', true);
        });
        //	Add aria-haspopup and aria-owns to prev- and next buttons.
        this.bind('initPanel:after', function (panel) {
            _modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](panel, '.mm-btn').forEach(function (button) {
                _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(button, 'haspopup', true);
                var href = button.getAttribute('href');
                if (href) {
                    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(button, 'owns', href.replace('#', ''));
                }
            });
        });
        //	Add aria-hidden for navbars in panels.
        this.bind('initNavbar:after', function (panel) {
            /** The navbar in the panel. */
            var navbar = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](panel, '.mm-navbar')[0];
            /** Whether or not the navbar should be considered "hidden". */
            var hidden = navbar.matches('.mm-hidden');
            //	Set the navbar to be considered "hidden" or "visible".
            _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(navbar, 'hidden', hidden);
        });
        //	Text
        if (options.text) {
            //	Add aria-hidden to titles in navbars
            if (this.opts.navbar.titleLink == 'parent') {
                this.bind('initNavbar:after', function (panel) {
                    /** The navbar in the panel. */
                    var navbar = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](panel, '.mm-navbar')[0];
                    /** Whether or not the navbar should be considered "hidden". */
                    var hidden = navbar.querySelector('.mm-btn_prev')
                        ? true
                        : false;
                    //	Set the navbar-title to be considered "hidden" or "visible".
                    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria(_modules_dom__WEBPACK_IMPORTED_MODULE_4__["find"](navbar, '.mm-navbar__title')[0], 'hidden', hidden);
                });
            }
        }
    }
    //	Add screenreader text
    if (options.text) {
        //	Add screenreader / text hooks for add-ons
        //	In orde to keep this list short, only extend hooks that are actually used by other add-ons.
        this.bind('initAddons:after', function () {
            _this.bind('setPage:after', function () {
                this.trigger('setPage:after:sr-text', [].slice.call(arguments));
            });
            _this.bind('initBlocker:after', function () {
                this.trigger('initBlocker:after:sr-text', [].slice.call(arguments));
            });
        });
        //	Add text to the prev-buttons.
        this.bind('initNavbar:after', function (panel) {
            var navbar = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](panel, '.mm-navbar')[0];
            if (navbar) {
                var button = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](navbar, '.mm-btn_prev')[0];
                if (button) {
                    button.innerHTML = _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_text(_this.i18n(configs.text.closeSubmenu));
                }
            }
        });
        //	Add text to the next-buttons.
        this.bind('initListview:after', function (listview) {
            var parent = listview.closest('.mm-panel')['mmParent'];
            if (parent) {
                var next = _modules_dom__WEBPACK_IMPORTED_MODULE_4__["children"](parent, '.mm-btn_next')[0];
                if (next) {
                    var text = _this.i18n(configs.text[next.parentElement.matches('.mm-listitem_vertical')
                        ? 'toggleSubmenu'
                        : 'openSubmenu']);
                    next.innerHTML += _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_text(text);
                }
            }
        });
    }
});
//	Methods
(function () {
    var attr = function (element, attr, value) {
        element[attr] = value;
        if (value) {
            element.setAttribute(attr, value.toString());
        }
        else {
            element.removeAttribute(attr);
        }
    };
    /**
     * Add aria (property and) attribute to a HTML element.
     *
     * @param {HTMLElement} 	element	The node to add the attribute to.
     * @param {string}			name	The (non-aria-prefixed) attribute name.
     * @param {string|boolean}	value	The attribute value.
     */
    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_aria = function (element, name, value) {
        attr(element, 'aria-' + name, value);
    };
    /**
     * Add role attribute to a HTML element.
     *
     * @param {HTMLElement}		element	The node to add the attribute to.
     * @param {string|boolean}	value	The attribute value.
     */
    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_role = function (element, value) {
        attr(element, 'role', value);
    };
    /**
     * Wrap a text in a screen-reader-only node.
     *
     * @param 	{string} text	The text to wrap.
     * @return	{string}		The wrapped text.
     */
    _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].sr_text = function (text) {
        return '<span class="mm-sronly">' + text + '</span>';
    };
})();


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/screenreader/translations/de.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/screenreader/translations/de.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'Close menu': 'Menü schließen',
    'Close submenu': 'Untermenü schließen',
    'Open submenu': 'Untermenü öffnen',
    'Toggle submenu': 'Untermenü wechseln'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/screenreader/translations/fa.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/screenreader/translations/fa.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'Close menu': 'بستن منو',
    'Close submenu': 'بستن زیرمنو',
    'Open submenu': 'بازکردن زیرمنو',
    'Toggle submenu': 'سوییچ زیرمنو'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/screenreader/translations/nl.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/screenreader/translations/nl.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'Close menu': 'Menu sluiten',
    'Close submenu': 'Submenu sluiten',
    'Open submenu': 'Submenu openen',
    'Toggle submenu': 'Submenu wisselen'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/screenreader/translations/ru.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/screenreader/translations/ru.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'Close menu': 'Закрыть меню',
    'Close submenu': 'Закрыть подменю',
    'Open submenu': 'Открыть подменю',
    'Toggle submenu': 'Переключить подменю'
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/screenreader/translations/translate.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/screenreader/translations/translate.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_modules/i18n */ "./node_modules/mmenu-js/dist/_modules/i18n.js");
/* harmony import */ var _nl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nl */ "./node_modules/mmenu-js/dist/core/screenreader/translations/nl.js");
/* harmony import */ var _fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fa */ "./node_modules/mmenu-js/dist/core/screenreader/translations/fa.js");
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./de */ "./node_modules/mmenu-js/dist/core/screenreader/translations/de.js");
/* harmony import */ var _ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ru */ "./node_modules/mmenu-js/dist/core/screenreader/translations/ru.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_nl__WEBPACK_IMPORTED_MODULE_1__["default"], 'nl');
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_fa__WEBPACK_IMPORTED_MODULE_2__["default"], 'fa');
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_de__WEBPACK_IMPORTED_MODULE_3__["default"], 'de');
    Object(_modules_i18n__WEBPACK_IMPORTED_MODULE_0__["add"])(_ru__WEBPACK_IMPORTED_MODULE_4__["default"], 'ru');
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/scrollbugfix/_options.js":
/*!******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/scrollbugfix/_options.js ***!
  \******************************************************************/
/*! exports provided: default, extendShorthandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShorthandOptions", function() { return extendShorthandOptions; });
var options = {
    fix: true
};
/* harmony default export */ __webpack_exports__["default"] = (options);
/**
 * Extend shorthand options.
 *
 * @param  {object} options The options to extend.
 * @return {object}			The extended options.
 */
function extendShorthandOptions(options) {
    if (typeof options == 'boolean') {
        options = {
            fix: options
        };
    }
    if (typeof options != 'object') {
        options = {};
    }
    return options;
}
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/core/scrollbugfix/mmenu.scrollbugfix.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/core/scrollbugfix/mmenu.scrollbugfix.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_options */ "./node_modules/mmenu-js/dist/core/scrollbugfix/_options.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");
/* harmony import */ var _modules_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_modules/support */ "./node_modules/mmenu-js/dist/_modules/support.js");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_modules/helpers */ "./node_modules/mmenu-js/dist/_modules/helpers.js");






//  Add the options.
_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.scrollBugFix = _options__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    //	The scrollBugFix add-on fixes a scrolling bug
    //		1) on touch devices
    //		2) in an off-canvas menu
    //		3) that -when opened- blocks the UI from interaction
    if (!_modules_support__WEBPACK_IMPORTED_MODULE_3__["touch"] || // 1
        !this.opts.offCanvas || // 2
        !this.opts.offCanvas.blockUI // 3
    ) {
        return;
    }
    //	Extend options.
    var options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["extendShorthandOptions"])(this.opts.scrollBugFix);
    this.opts.scrollBugFix = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, _oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].options.scrollBugFix);
    if (!options.fix) {
        return;
    }
    var touchDir = Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_4__["touchDirection"])(this.node.menu);
    /**
     * Prevent an event from doing its default and stop its propagation.
     * @param {ScrollBehavior} evnt The event to stop.
     */
    function stop(evnt) {
        evnt.preventDefault();
        evnt.stopPropagation();
    }
    //  Prevent the page from scrolling when scrolling in the menu.
    this.node.menu.addEventListener('scroll', stop, {
        //  Make sure to tell the browser the event will be prevented.
        passive: false,
    });
    //  Prevent the page from scrolling when dragging in the menu.
    this.node.menu.addEventListener('touchmove', function (evnt) {
        var wrapper = evnt.target.closest('.mm-panel, .mm-iconbar__top, .mm-iconbar__bottom');
        if (wrapper && wrapper.closest('.mm-listitem_vertical')) {
            wrapper = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["parents"](wrapper, '.mm-panel').pop();
        }
        if (wrapper) {
            //  When dragging a non-scrollable panel,
            //      we can simple preventDefault and stopPropagation.
            if (wrapper.scrollHeight === wrapper.offsetHeight) {
                stop(evnt);
            }
            //  When dragging a scrollable panel,
            //      that is fully scrolled up (or down).
            //      It will not trigger the scroll event when dragging down (or up) (because you can't scroll up (or down)),
            //      so we need to match the dragging direction with the scroll position before preventDefault and stopPropagation,
            //      otherwise the panel would not scroll at all in any direction.
            else if (
            //  When scrolled up and dragging down
            (wrapper.scrollTop == 0 && touchDir.get() == 'down') ||
                //  When scrolled down and dragging up
                (wrapper.scrollHeight ==
                    wrapper.scrollTop + wrapper.offsetHeight &&
                    touchDir.get() == 'up')) {
                stop(evnt);
            }
            //  When dragging anything other than a panel.
        }
        else {
            stop(evnt);
        }
    }, {
        //  Make sure to tell the browser the event can be prevented.
        passive: false,
    });
    //  Some small additional improvements
    //	Scroll the current opened panel to the top when opening the menu.
    this.bind('open:start', function () {
        var panel = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel_opened')[0];
        if (panel) {
            panel.scrollTop = 0;
        }
    });
    //	Fix issue after device rotation change.
    window.addEventListener('orientationchange', function (evnt) {
        var panel = _modules_dom__WEBPACK_IMPORTED_MODULE_2__["children"](_this.node.pnls, '.mm-panel_opened')[0];
        if (panel) {
            panel.scrollTop = 0;
            //	Apparently, changing the overflow-scrolling property triggers some event :)
            panel.style['-webkit-overflow-scrolling'] = 'auto';
            panel.style['-webkit-overflow-scrolling'] = 'touch';
        }
    });
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/wrappers/angular/mmenu.angular.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/wrappers/angular/mmenu.angular.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
    this.opts.onClick = {
        close: true,
        preventDefault: false,
        setSelected: true
    };
});
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/wrappers/bootstrap/mmenu.bootstrap.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/wrappers/bootstrap/mmenu.bootstrap.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_modules/dom */ "./node_modules/mmenu-js/dist/_modules/dom.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _this = this;
    //	Create the menu
    if (this.node.menu.matches('.navbar-collapse')) {
        //	No need for cloning the menu...
        if (this.conf.offCanvas) {
            this.conf.offCanvas.clone = false;
        }
        //	... We'll create a new menu
        var nav = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["create"]('nav'), panel = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["create"]('div');
        nav.append(panel);
        _modules_dom__WEBPACK_IMPORTED_MODULE_0__["children"](this.node.menu).forEach(function (child) {
            switch (true) {
                case child.matches('.navbar-nav'):
                    panel.append(cloneNav(child));
                    break;
                case child.matches('.dropdown-menu'):
                    panel.append(cloneDropdown(child));
                    break;
                case child.matches('.form-inline'):
                    _this.conf.searchfield.form = {
                        action: child.getAttribute('action') || null,
                        method: child.getAttribute('method') || null
                    };
                    _this.conf.searchfield.input = {
                        name: child.querySelector('input').getAttribute('name') ||
                            null
                    };
                    _this.conf.searchfield.clear = false;
                    _this.conf.searchfield.submit = true;
                    break;
                default:
                    panel.append(child.cloneNode(true));
                    break;
            }
        });
        //	Set the menu
        this.bind('initMenu:before', function () {
            document.body.prepend(nav);
            _this.node.menu = nav;
        });
        //	Hijack the toggler.
        var parent_1 = this.node.menu.parentElement;
        if (parent_1) {
            var toggler = parent_1.querySelector('.navbar-toggler');
            if (toggler) {
                toggler.removeAttribute('data-target');
                // delete toggler.dataset.target; // IE10 has no dataset :(
                toggler.removeAttribute('aria-controls');
                //	Remove all bound events.
                toggler.outerHTML = toggler.outerHTML;
                toggler = parent_1.querySelector('.navbar-toggler');
                //  Open the menu on-click.
                toggler.addEventListener('click', function (evnt) {
                    evnt.preventDefault();
                    evnt.stopImmediatePropagation();
                    _this[_this.vars.opened ? 'close' : 'open']();
                });
            }
        }
    }
    function cloneLink(anchor) {
        var link = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["create"](anchor.matches('a') ? 'a' : 'span');
        //	Copy attributes
        var attr = ['href', 'title', 'target'];
        for (var a = 0; a < attr.length; a++) {
            if (typeof anchor.getAttribute(attr[a]) != 'undefined') {
                link.setAttribute(attr[a], anchor.getAttribute(attr[a]));
            }
        }
        //	Copy contents
        link.innerHTML = anchor.innerHTML;
        //	Remove Screen reader text.
        _modules_dom__WEBPACK_IMPORTED_MODULE_0__["find"](link, '.sr-only').forEach(function (sro) {
            sro.remove();
        });
        return link;
    }
    function cloneDropdown(dropdown) {
        var list = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["create"]('ul');
        _modules_dom__WEBPACK_IMPORTED_MODULE_0__["children"](dropdown).forEach(function (anchor) {
            var item = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["create"]('li');
            if (anchor.matches('.dropdown-divider')) {
                item.classList.add('Divider');
            }
            else if (anchor.matches('.dropdown-item')) {
                item.append(cloneLink(anchor));
            }
            list.append(item);
        });
        return list;
    }
    function cloneNav(nav) {
        var list = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["create"]('ul');
        _modules_dom__WEBPACK_IMPORTED_MODULE_0__["find"](nav, '.nav-item').forEach(function (anchor) {
            var item = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["create"]('li');
            if (anchor.matches('.active')) {
                item.classList.add('Selected');
            }
            if (!anchor.matches('.nav-link')) {
                var dropdown = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["children"](anchor, '.dropdown-menu')[0];
                if (dropdown) {
                    item.append(cloneDropdown(dropdown));
                }
                anchor = _modules_dom__WEBPACK_IMPORTED_MODULE_0__["children"](anchor, '.nav-link')[0];
            }
            item.prepend(cloneLink(anchor));
            list.append(item);
        });
        return list;
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/wrappers/olark/mmenu.olark.js":
/*!******************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/wrappers/olark/mmenu.olark.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
    this.conf.offCanvas.page.noSelector.push('#olark');
});
;


/***/ }),

/***/ "./node_modules/mmenu-js/dist/wrappers/turbolinks/mmenu.turbolinks.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/wrappers/turbolinks/mmenu.turbolinks.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
    var classnames;
    document.addEventListener('turbolinks:before-visit', function (evnt) {
        classnames = document
            .querySelector('.mm-wrapper')
            .className.split(' ')
            .filter(function (name) { return /mm-/.test(name); });
    });
    document.addEventListener('turbolinks:load', function (evnt) {
        if (typeof classnames === 'undefined') {
            return;
        }
        document.querySelector('.mm-wrapper').className = classnames;
    });
});


/***/ }),

/***/ "./node_modules/mmenu-js/dist/wrappers/wordpress/mmenu.wordpress.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mmenu-js/dist/wrappers/wordpress/mmenu.wordpress.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
    this.conf.classNames.selected = 'current-menu-item';
    var wpadminbar = document.getElementById('wpadminbar');
    if (wpadminbar) {
        wpadminbar.style.position = 'fixed';
        wpadminbar.classList.add('mm-slideout');
    }
});


/***/ }),

/***/ "./node_modules/mmenu-js/package.json":
/*!********************************************!*\
  !*** ./node_modules/mmenu-js/package.json ***!
  \********************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, homepage, keywords, license, main, module, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"mmenu-js\",\"_id\":\"mmenu-js@8.5.13\",\"_inBundle\":false,\"_integrity\":\"sha512-6xaXPY3NecSWqoSgzr+aRRUVBEA9A9j0gHkf4Re1jrkQ7nwrckhkDATmuLS1QOe/XPh2/+DBhO42x+xKIT0NGQ==\",\"_location\":\"/mmenu-js\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"mmenu-js\",\"name\":\"mmenu-js\",\"escapedName\":\"mmenu-js\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/mmenu-js/-/mmenu-js-8.5.13.tgz\",\"_shasum\":\"c22ba72b7a8443d08d8ba2e1d1f5941557835ff8\",\"_spec\":\"mmenu-js\",\"_where\":\"D:\\\\Sergey\\\\OSPanel\\\\domains\\\\leasepoint\",\"author\":{\"name\":\"Fred Heusschen\",\"email\":\"info@frebsite.nl\"},\"bugs\":{\"url\":\"https://github.com/FrDH/mmenu-js/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"The best javascript plugin for app look-alike on- and off-canvas menus with sliding submenus for your website and webapp.\",\"devDependencies\":{\"gulp\":\"^4.0.2\",\"gulp-autoprefixer\":\"^6.1.0\",\"gulp-clean-css\":\"^4.3.0\",\"gulp-concat\":\"^2.6.1\",\"gulp-sass\":\"^4.1.0\",\"gulp-typescript\":\"^5.0.1\",\"typescript\":\"^3.8.3\",\"webpack-stream\":\"^5.2.1\"},\"homepage\":\"https://github.com/FrDH/mmenu-js#readme\",\"keywords\":[\"app\",\"list\",\"listview\",\"megamenu\",\"menu\",\"mmenu\",\"mobile\",\"navigation\",\"off-canvas\",\"on-canvas\",\"curtain\",\"panels\",\"submenu\"],\"license\":\"CC-BY-NC-4.0\",\"main\":\"dist/mmenu.js\",\"module\":\"src/mmenu.js\",\"name\":\"mmenu-js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/FrDH/mmenu-js.git\"},\"scripts\":{\"build\":\"gulp default\"},\"version\":\"8.5.13\"}");

/***/ }),

/***/ "./node_modules/mmenu-js/src/mmenu.js":
/*!********************************************!*\
  !*** ./node_modules/mmenu-js/src/mmenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony import */ var _dist_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");
/* harmony import */ var _dist_core_offcanvas_mmenu_offcanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/core/offcanvas/mmenu.offcanvas */ "./node_modules/mmenu-js/dist/core/offcanvas/mmenu.offcanvas.js");
/* harmony import */ var _dist_core_screenreader_mmenu_screenreader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/core/screenreader/mmenu.screenreader */ "./node_modules/mmenu-js/dist/core/screenreader/mmenu.screenreader.js");
/* harmony import */ var _dist_core_scrollbugfix_mmenu_scrollbugfix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/core/scrollbugfix/mmenu.scrollbugfix */ "./node_modules/mmenu-js/dist/core/scrollbugfix/mmenu.scrollbugfix.js");
/* harmony import */ var _dist_addons_autoheight_mmenu_autoheight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/addons/autoheight/mmenu.autoheight */ "./node_modules/mmenu-js/dist/addons/autoheight/mmenu.autoheight.js");
/* harmony import */ var _dist_addons_backbutton_mmenu_backbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dist/addons/backbutton/mmenu.backbutton */ "./node_modules/mmenu-js/dist/addons/backbutton/mmenu.backbutton.js");
/* harmony import */ var _dist_addons_columns_mmenu_columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dist/addons/columns/mmenu.columns */ "./node_modules/mmenu-js/dist/addons/columns/mmenu.columns.js");
/* harmony import */ var _dist_addons_counters_mmenu_counters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dist/addons/counters/mmenu.counters */ "./node_modules/mmenu-js/dist/addons/counters/mmenu.counters.js");
/* harmony import */ var _dist_addons_dividers_mmenu_dividers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dist/addons/dividers/mmenu.dividers */ "./node_modules/mmenu-js/dist/addons/dividers/mmenu.dividers.js");
/* harmony import */ var _dist_addons_drag_mmenu_drag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dist/addons/drag/mmenu.drag */ "./node_modules/mmenu-js/dist/addons/drag/mmenu.drag.js");
/* harmony import */ var _dist_addons_dropdown_mmenu_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dist/addons/dropdown/mmenu.dropdown */ "./node_modules/mmenu-js/dist/addons/dropdown/mmenu.dropdown.js");
/* harmony import */ var _dist_addons_fixedelements_mmenu_fixedelements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dist/addons/fixedelements/mmenu.fixedelements */ "./node_modules/mmenu-js/dist/addons/fixedelements/mmenu.fixedelements.js");
/* harmony import */ var _dist_addons_iconbar_mmenu_iconbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dist/addons/iconbar/mmenu.iconbar */ "./node_modules/mmenu-js/dist/addons/iconbar/mmenu.iconbar.js");
/* harmony import */ var _dist_addons_iconpanels_mmenu_iconpanels__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dist/addons/iconpanels/mmenu.iconpanels */ "./node_modules/mmenu-js/dist/addons/iconpanels/mmenu.iconpanels.js");
/* harmony import */ var _dist_addons_keyboardnavigation_mmenu_keyboardnavigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dist/addons/keyboardnavigation/mmenu.keyboardnavigation */ "./node_modules/mmenu-js/dist/addons/keyboardnavigation/mmenu.keyboardnavigation.js");
/* harmony import */ var _dist_addons_lazysubmenus_mmenu_lazysubmenus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dist/addons/lazysubmenus/mmenu.lazysubmenus */ "./node_modules/mmenu-js/dist/addons/lazysubmenus/mmenu.lazysubmenus.js");
/* harmony import */ var _dist_addons_navbars_mmenu_navbars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dist/addons/navbars/mmenu.navbars */ "./node_modules/mmenu-js/dist/addons/navbars/mmenu.navbars.js");
/* harmony import */ var _dist_addons_pagescroll_mmenu_pagescroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../dist/addons/pagescroll/mmenu.pagescroll */ "./node_modules/mmenu-js/dist/addons/pagescroll/mmenu.pagescroll.js");
/* harmony import */ var _dist_addons_searchfield_mmenu_searchfield__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dist/addons/searchfield/mmenu.searchfield */ "./node_modules/mmenu-js/dist/addons/searchfield/mmenu.searchfield.js");
/* harmony import */ var _dist_addons_sectionindexer_mmenu_sectionindexer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../dist/addons/sectionindexer/mmenu.sectionindexer */ "./node_modules/mmenu-js/dist/addons/sectionindexer/mmenu.sectionindexer.js");
/* harmony import */ var _dist_addons_setselected_mmenu_setselected__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../dist/addons/setselected/mmenu.setselected */ "./node_modules/mmenu-js/dist/addons/setselected/mmenu.setselected.js");
/* harmony import */ var _dist_addons_sidebar_mmenu_sidebar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../dist/addons/sidebar/mmenu.sidebar */ "./node_modules/mmenu-js/dist/addons/sidebar/mmenu.sidebar.js");
/* harmony import */ var _dist_addons_toggles_mmenu_toggles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../dist/addons/toggles/mmenu.toggles */ "./node_modules/mmenu-js/dist/addons/toggles/mmenu.toggles.js");
/* harmony import */ var _dist_wrappers_angular_mmenu_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../dist/wrappers/angular/mmenu.angular */ "./node_modules/mmenu-js/dist/wrappers/angular/mmenu.angular.js");
/* harmony import */ var _dist_wrappers_bootstrap_mmenu_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../dist/wrappers/bootstrap/mmenu.bootstrap */ "./node_modules/mmenu-js/dist/wrappers/bootstrap/mmenu.bootstrap.js");
/* harmony import */ var _dist_wrappers_olark_mmenu_olark__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../dist/wrappers/olark/mmenu.olark */ "./node_modules/mmenu-js/dist/wrappers/olark/mmenu.olark.js");
/* harmony import */ var _dist_wrappers_turbolinks_mmenu_turbolinks__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../dist/wrappers/turbolinks/mmenu.turbolinks */ "./node_modules/mmenu-js/dist/wrappers/turbolinks/mmenu.turbolinks.js");
/* harmony import */ var _dist_wrappers_wordpress_mmenu_wordpress__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../dist/wrappers/wordpress/mmenu.wordpress */ "./node_modules/mmenu-js/dist/wrappers/wordpress/mmenu.wordpress.js");
/*!
 * mmenu.js
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */

//	Core


//	Core add-ons




//	Add-ons




















//	Wrappers






_dist_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].addons = {
    //	Core add-ons
    offcanvas: _dist_core_offcanvas_mmenu_offcanvas__WEBPACK_IMPORTED_MODULE_1__["default"],
    screenReader: _dist_core_screenreader_mmenu_screenreader__WEBPACK_IMPORTED_MODULE_2__["default"],
    scrollBugFix: _dist_core_scrollbugfix_mmenu_scrollbugfix__WEBPACK_IMPORTED_MODULE_3__["default"],

    //	Add-ons
    autoHeight: _dist_addons_autoheight_mmenu_autoheight__WEBPACK_IMPORTED_MODULE_4__["default"],
    backButton: _dist_addons_backbutton_mmenu_backbutton__WEBPACK_IMPORTED_MODULE_5__["default"],
    columns: _dist_addons_columns_mmenu_columns__WEBPACK_IMPORTED_MODULE_6__["default"],
    counters: _dist_addons_counters_mmenu_counters__WEBPACK_IMPORTED_MODULE_7__["default"],
    dividers: _dist_addons_dividers_mmenu_dividers__WEBPACK_IMPORTED_MODULE_8__["default"],
    drag: _dist_addons_drag_mmenu_drag__WEBPACK_IMPORTED_MODULE_9__["default"],
    dropdown: _dist_addons_dropdown_mmenu_dropdown__WEBPACK_IMPORTED_MODULE_10__["default"],
    fixedElements: _dist_addons_fixedelements_mmenu_fixedelements__WEBPACK_IMPORTED_MODULE_11__["default"],
    iconbar: _dist_addons_iconbar_mmenu_iconbar__WEBPACK_IMPORTED_MODULE_12__["default"],
    iconPanels: _dist_addons_iconpanels_mmenu_iconpanels__WEBPACK_IMPORTED_MODULE_13__["default"],
    keyboardNavigation: _dist_addons_keyboardnavigation_mmenu_keyboardnavigation__WEBPACK_IMPORTED_MODULE_14__["default"],
    lazySubmenus: _dist_addons_lazysubmenus_mmenu_lazysubmenus__WEBPACK_IMPORTED_MODULE_15__["default"],
    navbars: _dist_addons_navbars_mmenu_navbars__WEBPACK_IMPORTED_MODULE_16__["default"],
    pageScroll: _dist_addons_pagescroll_mmenu_pagescroll__WEBPACK_IMPORTED_MODULE_17__["default"],
    searchfield: _dist_addons_searchfield_mmenu_searchfield__WEBPACK_IMPORTED_MODULE_18__["default"],
    sectionIndexer: _dist_addons_sectionindexer_mmenu_sectionindexer__WEBPACK_IMPORTED_MODULE_19__["default"],
    setSelected: _dist_addons_setselected_mmenu_setselected__WEBPACK_IMPORTED_MODULE_20__["default"],
    sidebar: _dist_addons_sidebar_mmenu_sidebar__WEBPACK_IMPORTED_MODULE_21__["default"],
    toggles: _dist_addons_toggles_mmenu_toggles__WEBPACK_IMPORTED_MODULE_22__["default"]
};

//	Wrappers
_dist_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"].wrappers = {
    angular: _dist_wrappers_angular_mmenu_angular__WEBPACK_IMPORTED_MODULE_23__["default"],
    bootstrap: _dist_wrappers_bootstrap_mmenu_bootstrap__WEBPACK_IMPORTED_MODULE_24__["default"],
    olark: _dist_wrappers_olark_mmenu_olark__WEBPACK_IMPORTED_MODULE_25__["default"],
    turbolinks: _dist_wrappers_turbolinks_mmenu_turbolinks__WEBPACK_IMPORTED_MODULE_26__["default"],
    wordpress: _dist_wrappers_wordpress_mmenu_wordpress__WEBPACK_IMPORTED_MODULE_27__["default"]
};

//  Export module
/* harmony default export */ __webpack_exports__["default"] = (_dist_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"]);

//	Global namespace
if (window) {
    window.Mmenu = _dist_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"];
}

//	jQuery plugin
(function($) {
    if ($) {
        $.fn.mmenu = function(options, configs) {
            var $result = $();

            this.each(function(e, element) {
                //	Don't proceed if the element already is a mmenu.
                if (element.mmApi) {
                    return;
                }

                var menu = new _dist_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"](element, options, configs),
                    $menu = $(menu.node.menu);

                //	Store the API for backward compat.
                $menu.data('mmenu', menu.API);

                $result = $result.add($menu);
            });

            return $result;
        };
    }
})(__webpack_provided_window_dot_jQuery || window.Zepto || null);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ })

}]);
//# sourceMappingURL=vendor.js.map