/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    y = function e(t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var b = "3.3.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.fn = w.prototype =
    {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || g(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                        : (o = n && w.isPlainObject(n) ? n : {}),
                      (a[t] = w.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = i(e)) ||
            ("function" ==
              typeof (n = f.call(t, "constructor") && t.constructor) &&
              p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (C(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(T, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (C(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
          (r = !t(e[o], o)) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (C(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !g(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  var E = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      y,
      v,
      m,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = ae(),
      k = ae(),
      S = ae(),
      D = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      A = [],
      j = A.pop,
      q = A.push,
      L = A.push,
      H = A.slice,
      O = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I =
        "\\[" +
        M +
        "*(" +
        R +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        M +
        "*\\]",
      W =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      F = new RegExp("^" + M + "*," + M + "*"),
      _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      X = new RegExp(W),
      U = new RegExp("^" + R + "$"),
      V = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      L.apply((A = H.call(w.childNodes)), w.childNodes),
        A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length
          ? function (e, t) {
              q.apply(e, H.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== T && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) (m = t), (v = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id"))
              ? (c = c.replace(te, ne))
              : t.setAttribute("id", (c = b)),
              (s = (h = a(e)).length);
            while (s--) h[s] = "#" + c + " " + ve(h[s]);
            (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
          }
          if (v)
            try {
              return L.apply(r, m.querySelectorAll(v)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return u(e.replace(B, "$1"), t, r, i);
    }
    function ae() {
      var e = [];
      function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      return t;
    }
    function se(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      var n = e.split("|"),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      return se(function (t) {
        return (
          (t = +t),
          se(function (n, r) {
            var i,
              o = e([], n.length, t),
              a = o.length;
            while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    (n = oe.support = {}),
      (o = oe.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (p = oe.setDocument =
        function (e) {
          var t,
            i,
            a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement
            ? ((d = a),
              (h = d.documentElement),
              (g = !o(d)),
              w !== d &&
                (i = d.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", re, !1)
                  : i.attachEvent && i.attachEvent("onunload", re)),
              (n.attributes = ue(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = ue(function (e) {
                return (
                  e.appendChild(d.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
              (n.getById = ue(function (e) {
                return (
                  (h.appendChild(e).id = b),
                  !d.getElementsByName || !d.getElementsByName(b).length
                );
              })),
              n.getById
                ? ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (y = []),
              (n.qsa = Q.test(d.querySelectorAll)) &&
                (ue(function (e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    b +
                    "'></a><select id='" +
                    b +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      y.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      y.push("\\[" + M + "*(?:value|" + P + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length ||
                      y.push("~="),
                    e.querySelectorAll(":checked").length || y.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length ||
                      y.push(".#.+[+~]");
                }),
                ue(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = d.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      y.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      y.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:");
                })),
              (n.matchesSelector = Q.test(
                (m =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                ue(function (e) {
                  (n.disconnectedMatch = m.call(e, "*")),
                    m.call(e, "[s!='']:x"),
                    v.push("!=", W);
                }),
              (y = y.length && new RegExp(y.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (x =
                t || Q.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (D = t
                ? function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === d || (e.ownerDocument === w && x(w, e))
                          ? -1
                          : t === d || (t.ownerDocument === w && x(w, t))
                          ? 1
                          : c
                          ? O(c, e) - O(c, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e === d
                        ? -1
                        : t === d
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : c
                        ? O(c, e) - O(c, t)
                        : 0;
                    if (i === o) return ce(e, t);
                    n = e;
                    while ((n = n.parentNode)) a.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r
                      ? ce(a[r], s[r])
                      : a[r] === w
                      ? -1
                      : s[r] === w
                      ? 1
                      : 0;
                  }),
              d)
            : d;
        }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== d && p(e),
          (t = t.replace(z, "='$1']")),
          n.matchesSelector &&
            g &&
            !S[t + " "] &&
            (!v || !v.test(t)) &&
            (!y || !y.test(t)))
        )
          try {
            var r = m.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return oe(t, d, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (
          ((f = !n.detectDuplicates),
          (c = !n.sortStable && e.slice(0)),
          e.sort(D),
          f)
        ) {
          while ((t = e[o++])) t === e[o] && (i = r.push(o));
          while (i--) e.splice(r[i], 1);
        }
        return (c = null), e;
      }),
      (i = oe.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else while ((t = e[r++])) n += i(t);
          return n;
        }),
      ((r = oe.selectors =
        {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(Z, ee)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return V.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = a(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(Z, ee).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = E[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  E(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = oe.attr(r, e);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && i.indexOf(n) > -1
                        : "$=" === t
                        ? n && i.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p,
                      d,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      y = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      m = !u && !s,
                      x = !1;
                    if (y) {
                      if (o) {
                        while (g) {
                          p = t;
                          while ((p = p[g]))
                            if (
                              s
                                ? p.nodeName.toLowerCase() === v
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                        (x =
                          (d =
                            (l =
                              (c =
                                (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]) && l[2]),
                          (p = d && y.childNodes[d]);
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (1 === p.nodeType && ++x && p === t) {
                            c[e] = [T, d, x];
                            break;
                          }
                      } else if (
                        (m &&
                          (x = d =
                            (l =
                              (c =
                                (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]),
                        !1 === x)
                      )
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (
                            (s
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType) &&
                            ++x &&
                            (m &&
                              ((c =
                                (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] = [T, x]),
                            p === t)
                          )
                            break;
                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  oe.error("unsupported pseudo: " + e);
              return i[b]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? se(function (e, n) {
                        var r,
                          o = i(e, t),
                          a = o.length;
                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: se(function (e) {
              var t = [],
                n = [],
                r = s(e.replace(B, "$1"));
              return r[b]
                ? se(function (e, t, n, i) {
                    var o,
                      a = r(e, null, i, []),
                      s = e.length;
                    while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: se(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: se(function (e) {
              return (
                (e = e.replace(Z, ee)),
                function (t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: se(function (e) {
              return (
                U.test(e || "") || oe.error("unsupported lang: " + e),
                (e = e.replace(Z, ee).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === d.activeElement &&
                (!d.hasFocus || d.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: de(!1),
            disabled: de(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !r.pseudos.empty(e);
            },
            header: function (e) {
              return Y.test(e.nodeName);
            },
            input: function (e) {
              return G.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: he(function () {
              return [0];
            }),
            last: he(function (e, t) {
              return [t - 1];
            }),
            eq: he(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: he(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: he(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ye() {}
    (ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (a = oe.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          (s = e), (u = []), (l = r.preFilter);
          while (s) {
            (n && !(i = F.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (n = !1),
              (i = _.exec(s)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(B, " ") }),
                (s = s.slice(n.length)));
            for (a in r.filter)
              !(i = V[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        });
    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
            while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [T, s];
            if (u) {
              while ((t = t[r]))
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[b] || (t[b] = {})),
                    (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s)
                      return (p[2] = l[2]);
                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return e.length > 1
        ? function (t, n, r) {
            var i = e.length;
            while (i--) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
      return n;
    }
    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = Te(r)),
        i && !i[b] && (i = Te(i, o)),
        se(function (o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!o && t) ? g : we(g, p, e, s, u),
            v = n ? (i || (o ? e : h || r) ? [] : a) : y;
          if ((n && n(y, v, s, u), r)) {
            (l = we(v, d)), r(l, [], s, u), (c = l.length);
            while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
          if (o) {
            if (i || e) {
              if (i) {
                (l = []), (c = v.length);
                while (c--) (f = v[c]) && l.push((y[c] = f));
                i(null, (v = []), l, u);
              }
              c = v.length;
              while (c--)
                (f = v[c]) &&
                  (l = i ? O(o, f) : p[c]) > -1 &&
                  (o[l] = !(a[l] = f));
            }
          } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          u = a ? 1 : 0,
          c = me(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = me(
            function (e) {
              return O(t, e) > -1;
            },
            s,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
            return Te(
              u > 1 && xe(p),
              u > 1 &&
                ve(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              u < i && Ce(e.slice(u, i)),
              i < o && Ce((e = e.slice(i))),
              i < o && ve(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    function Ee(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function (o, a, s, u, c) {
          var f,
            h,
            y,
            v = 0,
            m = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG("*", c)),
            E = (T += null == w ? 1 : Math.random() || 0.1),
            k = C.length;
          for (
            c && (l = a === d || a || c);
            m !== k && null != (f = C[m]);
            m++
          ) {
            if (i && f) {
              (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
              while ((y = e[h++]))
                if (y(f, a || d, s)) {
                  u.push(f);
                  break;
                }
              c && (T = E);
            }
            n && ((f = !y && f) && v--, o && x.push(f));
          }
          if (((v += m), n && m !== v)) {
            h = 0;
            while ((y = t[h++])) y(x, b, a, s);
            if (o) {
              if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
              b = we(b);
            }
            L.apply(u, b),
              c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
          }
          return c && ((T = E), (l = w)), x;
        };
      return n ? se(o) : o;
    }
    return (
      (s = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = S[e + " "];
          if (!o) {
            t || (t = a(e)), (n = t.length);
            while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
            (o = S(e, Ee(i, r))).selector = e;
          }
          return o;
        }),
      (u = oe.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && a((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (u = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            o = V.needsContext.test(e) ? 0 : u.length;
            while (o--) {
              if (((l = u[o]), r.relative[(c = l.type)])) break;
              if (
                (f = r.find[c]) &&
                (i = f(
                  l.matches[0].replace(Z, ee),
                  (K.test(u[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((u.splice(o, 1), !(e = i.length && ve(u))))
                  return L.apply(n, i), n;
                break;
              }
            }
          }
          return (
            (p || s(e, d))(
              i,
              t,
              !g,
              n,
              !t || (K.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(D).join("") === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        le(P, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      oe
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var k = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return g(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return u.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return r > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : L.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
          ),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (q = w(r));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? u.call(w(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  });
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  w.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return k(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return k(e, "parentNode", n);
      },
      next: function (e) {
        return P(e, "nextSibling");
      },
      prev: function (e) {
        return P(e, "previousSibling");
      },
      nextAll: function (e) {
        return k(e, "nextSibling");
      },
      prevAll: function (e) {
        return k(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return k(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return k(e, "previousSibling", n);
      },
      siblings: function (e) {
        return S((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return S(e.firstChild);
      },
      contents: function (e) {
        return N(e, "iframe")
          ? e.contentDocument
          : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes));
      },
    },
    function (e, t) {
      w.fn[e] = function (n, r) {
        var i = w.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = w.filter(r, i)),
          this.length > 1 &&
            (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
          this.pushStack(i)
        );
      };
    }
  );
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    var t = {};
    return (
      w.each(e.match(M) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function () {
        for (i = i || e.once, r = t = !0; a.length; s = -1) {
          n = a.shift();
          while (++s < o.length)
            !1 === o[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (n = !1));
        }
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                w.each(n, function (n, r) {
                  g(r)
                    ? (e.unique && l.has(r)) || o.push(r)
                    : r && r.length && "string" !== x(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              var n;
              while ((n = w.inArray(t, o, n)) > -1)
                o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = a = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = a = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  };
  function I(e) {
    return e;
  }
  function W(e) {
    throw e;
  }
  function $(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  w.extend({
    Deferred: function (t) {
      var n = [
          [
            "notify",
            "progress",
            w.Callbacks("memory"),
            w.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        r = "pending",
        i = {
          state: function () {
            return r;
          },
          always: function () {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return w
              .Deferred(function (t) {
                w.each(n, function (n, r) {
                  var i = g(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && g(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          then: function (t, r, i) {
            var o = 0;
            function a(t, n, r, i) {
              return function () {
                var s = this,
                  u = arguments,
                  l = function () {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = r.apply(s, u)) === n.promise())
                        throw new TypeError("Thenable self-resolution");
                      (l =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        g(l)
                          ? i
                            ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                            : (o++,
                              l.call(
                                e,
                                a(o, n, I, i),
                                a(o, n, W, i),
                                a(o, n, I, n.notifyWith)
                              ))
                          : (r !== I && ((s = void 0), (u = [e])),
                            (i || n.resolveWith)(s, u));
                    }
                  },
                  c = i
                    ? l
                    : function () {
                        try {
                          l();
                        } catch (e) {
                          w.Deferred.exceptionHook &&
                            w.Deferred.exceptionHook(e, c.stackTrace),
                            t + 1 >= o &&
                              (r !== W && ((s = void 0), (u = [e])),
                              n.rejectWith(s, u));
                        }
                      };
                t
                  ? c()
                  : (w.Deferred.getStackHook &&
                      (c.stackTrace = w.Deferred.getStackHook()),
                    e.setTimeout(c));
              };
            }
            return w
              .Deferred(function (e) {
                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                  n[1][3].add(a(0, e, g(t) ? t : I)),
                  n[2][3].add(a(0, e, g(r) ? r : W));
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? w.extend(e, i) : i;
          },
        },
        o = {};
      return (
        w.each(n, function (e, t) {
          var a = t[2],
            s = t[5];
          (i[t[1]] = a.add),
            s &&
              a.add(
                function () {
                  r = s;
                },
                n[3 - e][2].disable,
                n[3 - e][3].disable,
                n[0][2].lock,
                n[0][3].lock
              ),
            a.add(t[3].fire),
            (o[t[0]] = function () {
              return (
                o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              );
            }),
            (o[t[0] + "With"] = a.fireWith);
        }),
        i.promise(o),
        t && t.call(o, o),
        o
      );
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = o.call(arguments),
        a = w.Deferred(),
        s = function (e) {
          return function (n) {
            (r[e] = this),
              (i[e] = arguments.length > 1 ? o.call(arguments) : n),
              --t || a.resolveWith(r, i);
          };
        };
      if (
        t <= 1 &&
        ($(e, a.done(s(n)).resolve, a.reject, !t),
        "pending" === a.state() || g(i[n] && i[n].then))
      )
        return a.then();
      while (n--) $(i[n], s(n), a.reject);
      return a.promise();
    },
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      B.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = w.Deferred();
  (w.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
          (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
      },
    }),
    (w.ready.then = F.then);
  function _() {
    r.removeEventListener("DOMContentLoaded", _),
      e.removeEventListener("load", _),
      w.ready();
  }
  "complete" === r.readyState ||
  ("loading" !== r.readyState && !r.documentElement.doScroll)
    ? e.setTimeout(w.ready)
    : (r.addEventListener("DOMContentLoaded", _),
      e.addEventListener("load", _));
  var z = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) {
        i = !0;
        for (s in n) z(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        g(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(w(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    X = /^-ms-/,
    U = /-([a-z])/g;
  function V(e, t) {
    return t.toUpperCase();
  }
  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[G(t)] = n;
        else for (r in t) i[G(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][G(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(G)
              : (t = G(t)) in r
              ? [t]
              : t.match(M) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var J = new Q(),
    K = new Q(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;
  function te(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Z.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = te(n);
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function (e, t) {
      J.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
          ) {
            n = a.length;
            while (n--)
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                ((r = G(r.slice(5))), ne(o, r, i[r]));
            J.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              K.set(this, e);
            })
          : z(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = K.get(o, e))) return n;
                  if (void 0 !== (n = ne(o, e))) return n;
                } else
                  this.each(function () {
                    K.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = J.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = J.access(e, t, w.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function () {
            w.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          J.get(e, n) ||
          J.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              J.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = J.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          w.contains(e.ownerDocument, e) &&
          "none" === w.css(e, "display"))
      );
    },
    se = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    };
  function ue(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        w.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), w.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var le = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = w.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (le[r] = i),
      i)
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = J.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r)))
          : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && w.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = w.contains(o.ownerDocument, o)),
        (a = ye(f.appendChild(o), "script")),
        l && ve(a),
        n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  !(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
      t = r.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var be = r.documentElement,
    we = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) De(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  (w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.get(e);
      if (y) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && w.find.matchesSelector(be, i),
          n.guid || (n.guid = w.guid++),
          (u = y.events) || (u = y.events = {}),
          (a = y.handle) ||
            (a = y.handle =
              function (t) {
                return "undefined" != typeof w && w.event.triggered !== t.type
                  ? w.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
          (l = (t = (t || "").match(M) || [""]).length);
        while (l--)
          (d = g = (s = Ce.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.hasData(e) && J.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;
        while (l--)
          if (
            ((s = Ce.exec(t[l]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = w.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                w.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t = w.event.fix(e),
        n,
        r,
        i,
        o,
        a,
        s,
        u = new Array(arguments.length),
        l = (J.get(this, "events") || {})[t.type] || [],
        c = w.event.special[t.type] || {};
      for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
      if (
        ((t.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, t))
      ) {
        (s = w.event.handlers.call(this, t, l)), (n = 0);
        while ((o = s[n++]) && !t.isPropagationStopped()) {
          (t.currentTarget = o.elem), (r = 0);
          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
            (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
              ((t.handleObj = a),
              (t.data = a.data),
              void 0 !==
                (i = (
                  (w.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, u)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? w(i, this).index(l) > -1
                  : w.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return N(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || w.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, r) {
        return De(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return De(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? w(e).children("tbody")[0] || e
      : e;
  }
  function He(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Oe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        J.hasData(e) &&
        ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      }
      K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
    }
  }
  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      y = t[0],
      v = g(y);
    if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
      });
    if (
      p &&
      ((i = xe(t, e[0].ownerDocument, !1, e, r)),
      (o = i.firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
        (l = i),
          f !== d &&
            ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))),
          n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
          (l = s[f]),
            he.test(l.type || "") &&
              !J.access(l, "globalEval") &&
              w.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? w._evalUrl && w._evalUrl(l.src)
                : m(l.textContent.replace(qe, ""), c, l));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || w.cleanData(ye(r)),
        r.parentNode &&
          (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = w.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
          Me(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)
            Pe(o[r], a[r]);
        else Pe(e, s);
      return (
        (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if ((t = n[J.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[J.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return z(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Re(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Re(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return z(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Re(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ye(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              w(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
    $e = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Be = new RegExp(oe.join("|"), "i");
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (a = 36 === c.offsetWidth || "absolute"),
          be.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement("div"),
      c = r.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), a;
        },
      }));
  })();
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          w.contains(e.ownerDocument, e) ||
          (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          We.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ue = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" },
    Ge = ["Webkit", "Moz", "ms"],
    Ye = r.createElement("div").style;
  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
      n = Ge.length;
    while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }
  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }
  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n &&
              (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + oe[a], !0, i)),
            "padding" !== n
              ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
              : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
          )
        )),
      u
    );
  }
  function et(e, t, n) {
    var r = $e(e),
      i = Fe(e, t, r),
      o = "border-box" === w.css(e, "boxSizing", !1, r),
      a = o;
    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (a = a && (h.boxSizingReliable() || i === e.style[t])),
      ("auto" === i ||
        (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
        ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) +
        Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
        "px"
    );
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = G(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = ie.exec(n)) &&
          i[1] &&
          ((n = ue(e, t, i)), (o = "number")),
          null != n &&
            n === n &&
            ("number" === o &&
              (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = G(t);
      return (
        Xe.test(t) || (t = Je(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        "normal" === i && t in Ve && (i = Ve[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ze.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : se(e, Ue, function () {
                  return et(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
          return (
            a &&
              h.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ze(e, t, "border", !1, o) -
                  0.5
              )),
            s &&
              (i = ie.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ke(e, n, s)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              se(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function (e, t) {
        return z(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++)
                o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    });
  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }
  (w.Tween = tt),
    (tt.prototype = {
      constructor: tt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }),
    (tt.prototype.init.prototype = tt.prototype),
    (tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = tt.prototype.init),
    (w.fx.step = {});
  var nt,
    rt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function at() {
    rt &&
      (!1 === r.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
    for (
      var r,
        i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ct(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ae(e),
      y = J.get(e, "fxshow");
    n.queue ||
      (null == (a = w._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function () {
        p.always(function () {
          a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
        });
      }));
    for (r in t)
      if (((i = t[r]), it.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
        ) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }
        d[r] = (y && y[r]) || w.style(e, r);
      }
    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (l = y && y.display) && (l = J.get(e, "display")),
        "none" === (c = w.css(e, "display")) &&
          (l
            ? (c = l)
            : (fe([e], !0),
              (l = e.style.display || l),
              (c = w.css(e, "display")),
              fe([e]))),
        ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === w.css(e, "float") &&
          (u ||
            (p.done(function () {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          p.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (u = !1);
      for (r in d)
        u ||
          (y
            ? "hidden" in y && (g = y.hidden)
            : (y = J.access(e, "fxshow", { display: l })),
          o && (y.hidden = !g),
          g && fe([e], !0),
          p.done(function () {
            g || fe([e]), J.remove(e, "fxshow");
            for (r in d) w.style(e, r, d[r]);
          })),
          (u = lt(g ? y[r] : 0, r, p)),
          r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
    }
  }
  function ft(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = G(n)),
        (i = t[r]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = w.cssHooks[r]) && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function pt(e, t, n) {
    var r,
      i,
      o = 0,
      a = pt.prefilters.length,
      s = w.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = nt || st(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = w.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (ft(c, l.opts.specialEasing); o < a; o++)
      if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
        return (
          g(r.stop) &&
            (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      w.map(c, lt, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (w.Animation = w.extend(pt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ie.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (pt.tweeners[n] = pt.tweeners[n] || []),
          pt.tweeners[n].unshift(t);
    },
    prefilters: [ct],
    prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (g(e) && e),
              duration: e,
              easing: (n && t) || (t && !g(t) && t),
            };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in w.fx.speeds
              ? (r.duration = w.fx.speeds[r.duration])
              : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
            var t = pt(this, w.extend({}, e), o);
            (i || J.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = w.timers,
              a = J.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = w.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (nt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (nt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      rt || ((rt = !0), at());
    }),
    (w.fx.stop = function () {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = w.fx ? w.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var dt,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (i =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = ht[a]),
            (ht[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (ht[a] = o)),
          i
        );
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function (e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    );
  function vt(e) {
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }
  w.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).addClass(e.call(this, t, mt(this)));
        });
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).removeClass(e.call(this, t, mt(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++]))
              while (r.indexOf(" " + o + " ") > -1)
                r = r.replace(" " + o + " ", " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : g(e)
        ? this.each(function (n) {
            w(this).toggleClass(e.call(this, n, mt(this), t), t);
          })
        : this.each(function () {
            var t, i, o, a;
            if (r) {
              (i = 0), (o = w(this)), (a = xt(e));
              while ((t = a[i++]))
                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while ((n = this[r++]))
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
          return !0;
      return !1;
    },
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = g(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : Array.isArray(i) &&
                    (i = w.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  w.valHooks[this.type] ||
                  w.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (t =
            w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
            ? n.replace(bt, "")
            : null == n
            ? ""
            : n;
      }
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : vt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        v = [i || r],
        m = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !wt.test(m + w.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
          (c = m.indexOf(":") < 0 && "on" + m),
          (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !y(i)) {
          for (
            l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (u = s);
          u === (i.ownerDocument || r) &&
            v.push(u.defaultView || u.parentWindow || e);
        }
        a = 0;
        while ((s = v[a++]) && !t.isPropagationStopped())
          (h = s),
            (t.type = a > 1 ? l : d.bindType || m),
            (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) &&
              p.apply(s, n),
            (p = c && s[c]) &&
              p.apply &&
              Y(s) &&
              ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !Y(i) ||
            (c &&
              g(i[m]) &&
              !y(i) &&
              ((u = i[c]) && (i[c] = null),
              (w.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, Tt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Tt),
              (w.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t);
            i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t) - 1;
            i
              ? J.access(r, t, i)
              : (r.removeEventListener(e, n, !0), J.remove(r, t));
          },
        };
      });
  var Ct = e.location,
    Et = Date.now(),
    kt = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        w.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Dt = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : jt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== x(t)) r(e, t);
    else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              At.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    });
  var qt = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Bt = r.createElement("a");
  Bt.href = Ct.href;
  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        while ((r = o[i++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function _t(e, t, n, r) {
    var i = {},
      o = e === Wt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e;
  }
  function Xt(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.contents,
      u = e.dataTypes;
    while ("*" === u[0])
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function Ut(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
            for (i in l)
              if (
                (s = i.split(" "))[1] === o &&
                (a = l[u + " " + s[0]] || l["* " + s[0]])
              ) {
                !0 === a
                  ? (a = l[i])
                  : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function (t, n) {
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h = w.ajaxSetup({}, n),
        g = h.context || h,
        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
        v = w.Deferred(),
        m = w.Callbacks("once memory"),
        x = h.statusCode || {},
        b = {},
        T = {},
        C = "canceled",
        E = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) {
                s = {};
                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
              }
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (e, t) {
            return (
              null == c &&
                ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                (b[e] = t)),
              this
            );
          },
          overrideMimeType: function (e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (c) E.always(e[E.status]);
              else for (t in e) x[t] = [x[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || C;
            return i && i.abort(t), k(0, t), this;
          },
        };
      if (
        (v.promise(E),
        (h.url = ((t || h.url || Ct.href) + "").replace(
          Rt,
          Ct.protocol + "//"
        )),
        (h.type = n.method || n.type || h.method || h.type),
        (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
        null == h.crossDomain)
      ) {
        l = r.createElement("a");
        try {
          (l.href = h.url),
            (l.href = l.href),
            (h.crossDomain =
              Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
        } catch (e) {
          h.crossDomain = !0;
        }
      }
      if (
        (h.data &&
          h.processData &&
          "string" != typeof h.data &&
          (h.data = w.param(h.data, h.traditional)),
        _t(It, h, n, E),
        c)
      )
        return E;
      (f = w.event && h.global) &&
        0 == w.active++ &&
        w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Mt.test(h.type)),
        (o = h.url.replace(Lt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(qt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Ht, "$1")),
              (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] &&
            E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader("Content-Type", h.contentType),
        E.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : h.accepts["*"]
        );
      for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
        return E.abort();
      if (
        ((C = "abort"),
        m.add(h.complete),
        E.done(h.success),
        E.fail(h.error),
        (i = _t(Wt, h, n, E)))
      ) {
        if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
          return E;
        h.async &&
          h.timeout > 0 &&
          (u = e.setTimeout(function () {
            E.abort("timeout");
          }, h.timeout));
        try {
          (c = !1), i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");
      function k(t, n, r, s) {
        var l,
          p,
          d,
          b,
          T,
          C = n;
        c ||
          ((c = !0),
          u && e.clearTimeout(u),
          (i = void 0),
          (a = s || ""),
          (E.readyState = t > 0 ? 4 : 0),
          (l = (t >= 200 && t < 300) || 304 === t),
          r && (b = Xt(h, E, r)),
          (b = Ut(h, b, E, l)),
          l
            ? (h.ifModified &&
                ((T = E.getResponseHeader("Last-Modified")) &&
                  (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
              204 === t || "HEAD" === h.type
                ? (C = "nocontent")
                : 304 === t
                ? (C = "notmodified")
                : ((C = b.state), (p = b.data), (l = !(d = b.error))))
            : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
          (E.status = t),
          (E.statusText = (n || C) + ""),
          l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
          E.statusCode(x),
          (x = void 0),
          f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
          m.fireWith(g, [E, C]),
          f &&
            (y.trigger("ajaxComplete", [E, h]),
            --w.active || w.event.trigger("ajaxStop")));
      }
      return E;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    },
  }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (w._evalUrl = function (e) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Vt = { 0: 200, 1223: 204 },
    Gt = w.ajaxSettings.xhr();
  (h.cors = !!Gt && "withCredentials" in Gt),
    (h.ajax = Gt = !!Gt),
    w.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Gt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest");
            for (a in i) s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Vt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = w("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Qt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? w(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument = (function () {
      var e = r.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (w.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, o, a;
      return (
        t ||
          (h.createHTMLDocument
            ? (((i = (t =
                r.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = r.location.href),
              t.head.appendChild(i))
            : (t = r)),
        (o = A.exec(e)),
        (a = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = xe([e], t, a)),
            a && a.length && w(a).remove(),
            w.merge([], o.childNodes))
      );
    }),
    (w.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          w
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
        "static" === c && (e.style.position = "relative"),
          (s = f.offset()),
          (o = w.css(e, "top")),
          (u = w.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1)
            ? ((a = (r = f.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - w.css(r, "marginTop", !0),
            left: t.left - i.left - w.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === w.css(e, "position")) e = e.offsetParent;
          return e || be;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
          return z(
            this,
            function (e, r, i) {
              var o;
              if (
                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          w.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return z(
              this,
              function (t, n, i) {
                var o;
                return y(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? w.css(t, n, s)
                  : w.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          (i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }),
          (i.guid = e.guid = e.guid || w.guid++),
          i
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = g),
    (w.isWindow = y),
    (w.camelCase = G),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Jt = e.jQuery,
    Kt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.Popper = t());
})(this, function () {
  "use strict";
  function e(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o;
  }
  function o(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    return 11 === e ? re : 10 === e ? pe : re || pe;
  }
  function p(e) {
    if (!e) return document.documentElement;
    for (
      var o = r(10) ? document.body : null, n = e.offsetParent;
      n === o && e.nextElementSibling;

    )
      n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === t(n, "position")
        ? p(n)
        : n
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function s(e) {
    var t = e.nodeName;
    return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
  }
  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }
  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = o ? e : t,
      i = o ? t : e,
      r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }
  function l(e) {
    var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
      o = "top" === t ? "scrollTop" : "scrollLeft",
      n = e.nodeName;
    if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }
    return e[o];
  }
  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = l(t, "top"),
      i = l(t, "left"),
      r = o ? -1 : 1;
    return (
      (e.top += n * r),
      (e.bottom += n * r),
      (e.left += i * r),
      (e.right += i * r),
      e
    );
  }
  function m(e, t) {
    var o = "x" === t ? "Left" : "Top",
      n = "Left" == o ? "Right" : "Bottom";
    return (
      parseFloat(e["border" + o + "Width"], 10) +
      parseFloat(e["border" + n + "Width"], 10)
    );
  }
  function h(e, t, o, n) {
    return $(
      t["offset" + e],
      t["scroll" + e],
      o["client" + e],
      o["offset" + e],
      o["scroll" + e],
      r(10)
        ? o["offset" + e] +
            n["margin" + ("Height" === e ? "Top" : "Left")] +
            n["margin" + ("Height" === e ? "Bottom" : "Right")]
        : 0
    );
  }
  function c() {
    var e = document.body,
      t = document.documentElement,
      o = r(10) && getComputedStyle(t);
    return { height: h("Height", e, t, o), width: h("Width", e, t, o) };
  }
  function g(e) {
    return le({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function u(e) {
    var o = {};
    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, "top"),
          i = l(e, "left");
        (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
      } else o = e.getBoundingClientRect();
    } catch (t) {}
    var p = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top,
      },
      s = "HTML" === e.nodeName ? c() : {},
      d = s.width || e.clientWidth || p.right - p.left,
      a = s.height || e.clientHeight || p.bottom - p.top,
      f = e.offsetWidth - d,
      h = e.offsetHeight - a;
    if (f || h) {
      var u = t(e);
      (f -= m(u, "x")), (h -= m(u, "y")), (p.width -= f), (p.height -= h);
    }
    return g(p);
  }
  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      p = r(10),
      s = "HTML" === o.nodeName,
      d = u(e),
      a = u(o),
      l = n(e),
      m = t(o),
      h = parseFloat(m.borderTopWidth, 10),
      c = parseFloat(m.borderLeftWidth, 10);
    i &&
      "HTML" === o.nodeName &&
      ((a.top = $(a.top, 0)), (a.left = $(a.left, 0)));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height,
    });
    if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
      var y = parseFloat(m.marginTop, 10),
        w = parseFloat(m.marginLeft, 10);
      (b.top -= h - y),
        (b.bottom -= h - y),
        (b.left -= c - w),
        (b.right -= c - w),
        (b.marginTop = y),
        (b.marginLeft = w);
    }
    return (
      (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) &&
        (b = f(b, o)),
      b
    );
  }
  function y(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = e.ownerDocument.documentElement,
      n = b(e, o),
      i = $(o.clientWidth, window.innerWidth || 0),
      r = $(o.clientHeight, window.innerHeight || 0),
      p = t ? 0 : l(o),
      s = t ? 0 : l(o, "left"),
      d = {
        top: p - n.top + n.marginTop,
        left: s - n.left + n.marginLeft,
        width: i,
        height: r,
      };
    return g(d);
  }
  function w(e) {
    var n = e.nodeName;
    return "BODY" === n || "HTML" === n
      ? !1
      : "fixed" === t(e, "position") || w(o(e));
  }
  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;
    for (var o = e.parentElement; o && "none" === t(o, "transform"); )
      o = o.parentElement;
    return o || document.documentElement;
  }
  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      s = { top: 0, left: 0 },
      d = p ? E(e) : a(e, t);
    if ("viewport" === r) s = y(d, p);
    else {
      var l;
      "scrollParent" === r
        ? ((l = n(o(t))),
          "BODY" === l.nodeName && (l = e.ownerDocument.documentElement))
        : "window" === r
        ? (l = e.ownerDocument.documentElement)
        : (l = r);
      var f = b(l, d, p);
      if ("HTML" === l.nodeName && !w(d)) {
        var m = c(),
          h = m.height,
          g = m.width;
        (s.top += f.top - f.marginTop),
          (s.bottom = h + f.top),
          (s.left += f.left - f.marginLeft),
          (s.right = g + f.left);
      } else s = f;
    }
    return (s.left += i), (s.top += i), (s.right -= i), (s.bottom -= i), s;
  }
  function x(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var p = v(o, n, r, i),
      s = {
        top: { width: p.width, height: t.top - p.top },
        right: { width: p.right - t.right, height: p.height },
        bottom: { width: p.width, height: p.bottom - t.bottom },
        left: { width: t.left - p.left, height: p.height },
      },
      d = Object.keys(s)
        .map(function (e) {
          return le({ key: e }, s[e], { area: x(s[e]) });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      a = d.filter(function (e) {
        var t = e.width,
          n = e.height;
        return t >= o.clientWidth && n >= o.clientHeight;
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split("-")[1];
    return l + (f ? "-" + f : "");
  }
  function L(e, t, o) {
    var n =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      i = n ? E(t) : a(t, o);
    return b(o, i, n);
  }
  function S(e) {
    var t = getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      i = { width: e.offsetWidth + n, height: e.offsetHeight + o };
    return i;
  }
  function T(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function C(e, t, o) {
    o = o.split("-")[0];
    var n = S(e),
      i = { width: n.width, height: n.height },
      r = -1 !== ["right", "left"].indexOf(o),
      p = r ? "top" : "left",
      s = r ? "left" : "top",
      d = r ? "height" : "width",
      a = r ? "width" : "height";
    return (
      (i[p] = t[p] + t[d] / 2 - n[d] / 2),
      (i[s] = o === s ? t[s] - n[a] : t[T(s)]),
      i
    );
  }
  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function N(e, t, o) {
    if (Array.prototype.findIndex)
      return e.findIndex(function (e) {
        return e[t] === o;
      });
    var n = D(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(n);
  }
  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
    return (
      i.forEach(function (t) {
        t["function"] &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t["function"] || t.fn;
        t.enabled &&
          e(n) &&
          ((o.offsets.popper = g(o.offsets.popper)),
          (o.offsets.reference = g(o.offsets.reference)),
          (o = n(o, t)));
      }),
      o
    );
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (e.offsets.reference = L(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (e.placement = O(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.positionFixed = this.options.positionFixed),
        (e.offsets.popper = C(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (e = P(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
        n = e.enabled;
      return n && o === t;
    });
  }
  function B(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        o = e.charAt(0).toUpperCase() + e.slice(1),
        n = 0;
      n < t.length;
      n++
    ) {
      var i = t[n],
        r = i ? "" + i + o : e;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function H() {
    return (
      (this.state.isDestroyed = !0),
      W(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[B("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function M(e, t, o, i) {
    var r = "BODY" === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, { passive: !0 }),
      r || M(n(p.parentNode), t, o, i),
      i.push(p);
  }
  function I(e, t, o, i) {
    (o.updateBound = i),
      A(e).addEventListener("resize", o.updateBound, { passive: !0 });
    var r = n(e);
    return (
      M(r, "scroll", o.updateBound, o.scrollParents),
      (o.scrollElement = r),
      (o.eventsEnabled = !0),
      o
    );
  }
  function F() {
    this.state.eventsEnabled ||
      (this.state = I(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function R(e, t) {
    return (
      A(e).removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function (e) {
        e.removeEventListener("scroll", t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function U() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = R(this.reference, this.state)));
  }
  function Y(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) &&
        Y(t[o]) &&
        (n = "px"),
        (e.style[o] = t[o] + n);
    });
  }
  function K(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function q(e, t, o) {
    var n = D(e, function (e) {
        var o = e.name;
        return o === t;
      }),
      i =
        !!n &&
        e.some(function (e) {
          return e.name === o && e.enabled && e.order < n.order;
        });
    if (!i) {
      var r = "`" + t + "`";
      console.warn(
        "`" +
          o +
          "`" +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return i;
  }
  function G(e) {
    return "end" === e ? "start" : "start" === e ? "end" : e;
  }
  function z(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = me.indexOf(e),
      n = me.slice(o + 1).concat(me.slice(0, o));
    return t ? n.reverse() : n;
  }
  function V(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +i[1],
      p = i[2];
    if (!r) return e;
    if (0 === p.indexOf("%")) {
      var s;
      switch (p) {
        case "%p":
          s = o;
          break;
        case "%":
        case "%r":
        default:
          s = n;
      }
      var d = g(s);
      return (d[t] / 100) * r;
    }
    if ("vh" === p || "vw" === p) {
      var a;
      return (
        (a =
          "vh" === p
            ? $(document.documentElement.clientHeight, window.innerHeight || 0)
            : $(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      );
    }
    return r;
  }
  function _(e, t, o, n) {
    var i = [0, 0],
      r = -1 !== ["right", "left"].indexOf(n),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      s = p.indexOf(
        D(p, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    p[s] &&
      -1 === p[s].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var d = /\s*,\s*|\s+/,
      a =
        -1 === s
          ? [p]
          : [
              p.slice(0, s).concat([p[s].split(d)[0]]),
              [p[s].split(d)[1]].concat(p.slice(s + 1)),
            ];
    return (
      (a = a.map(function (e, n) {
        var i = (1 === n ? !r : r) ? "height" : "width",
          p = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return V(e, i, t, o);
          });
      })),
      a.forEach(function (e, t) {
        e.forEach(function (o, n) {
          Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
        });
      }),
      i
    );
  }
  function X(e, t) {
    var o,
      n = t.offset,
      i = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = i.split("-")[0];
    return (
      (o = Y(+n) ? [+n, 0] : _(n, p, s, d)),
      "left" === d
        ? ((p.top += o[0]), (p.left -= o[1]))
        : "right" === d
        ? ((p.top += o[0]), (p.left += o[1]))
        : "top" === d
        ? ((p.left += o[0]), (p.top -= o[1]))
        : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
      (e.popper = p),
      e
    );
  }
  for (
    var J = Math.min,
      Q = Math.round,
      Z = Math.floor,
      $ = Math.max,
      ee = "undefined" != typeof window && "undefined" != typeof document,
      te = ["Edge", "Trident", "Firefox"],
      oe = 0,
      ne = 0;
    ne < te.length;
    ne += 1
  )
    if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
      oe = 1;
      break;
    }
  var i = ee && window.Promise,
    ie = i
      ? function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                (t = !1), e();
              }));
          };
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, oe));
          };
        },
    re = ee && !!(window.MSInputMethodContext && document.documentMode),
    pe = ee && /MSIE 10/.test(navigator.userAgent),
    se = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    de = (function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++)
          (o = t[n]),
            (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
      }
      return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    })(),
    ae = function (e, t, o) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = o),
        e
      );
    },
    le =
      Object.assign ||
      function (e) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var n in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      },
    fe = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    me = fe.slice(3),
    he = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise",
    },
    ce = (function () {
      function t(o, n) {
        var i = this,
          r =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        se(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = ie(this.update.bind(this))),
          (this.options = le({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = o && o.jquery ? o[0] : o),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = le(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return le({ name: e }, i.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              e(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), (this.state.eventsEnabled = p);
      }
      return (
        de(t, [
          {
            key: "update",
            value: function () {
              return k.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return H.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return F.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return U.call(this);
            },
          },
        ]),
        t
      );
    })();
  return (
    (ce.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
    (ce.placements = fe),
    (ce.Defaults = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              n = t.split("-")[1];
            if (n) {
              var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ["bottom", "top"].indexOf(o),
                d = s ? "left" : "top",
                a = s ? "width" : "height",
                l = {
                  start: ae({}, d, r[d]),
                  end: ae({}, d, r[d] + r[a] - p[a]),
                };
              e.offsets.popper = le({}, p, l[n]);
            }
            return e;
          },
        },
        offset: { order: 200, enabled: !0, fn: X, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, t) {
            var o = t.boundariesElement || p(e.instance.popper);
            e.instance.reference === o && (o = p(o));
            var n = B("transform"),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];
            (i.top = ""), (i.left = ""), (i[n] = "");
            var a = v(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              o,
              e.positionFixed
            );
            (i.top = r), (i.left = s), (i[n] = d), (t.boundaries = a);
            var l = t.priority,
              f = e.offsets.popper,
              m = {
                primary: function (e) {
                  var o = f[e];
                  return (
                    f[e] < a[e] &&
                      !t.escapeWithReference &&
                      (o = $(f[e], a[e])),
                    ae({}, e, o)
                  );
                },
                secondary: function (e) {
                  var o = "right" === e ? "left" : "top",
                    n = f[o];
                  return (
                    f[e] > a[e] &&
                      !t.escapeWithReference &&
                      (n = J(
                        f[o],
                        a[e] - ("right" === e ? f.width : f.height)
                      )),
                    ae({}, o, n)
                  );
                },
              };
            return (
              l.forEach(function (e) {
                var t =
                  -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                f = le({}, f, m[t](e));
              }),
              (e.offsets.popper = f),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split("-")[0],
              r = Z,
              p = -1 !== ["top", "bottom"].indexOf(i),
              s = p ? "right" : "bottom",
              d = p ? "left" : "top",
              a = p ? "width" : "height";
            return (
              o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
              o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, o) {
            var n;
            if (!q(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var i = o.element;
            if ("string" == typeof i) {
              if (((i = e.instance.popper.querySelector(i)), !i)) return e;
            } else if (!e.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var r = e.placement.split("-")[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ["left", "right"].indexOf(r),
              l = a ? "height" : "width",
              f = a ? "Top" : "Left",
              m = f.toLowerCase(),
              h = a ? "left" : "top",
              c = a ? "bottom" : "right",
              u = S(i)[l];
            d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
              d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
              (e.offsets.popper = g(e.offsets.popper));
            var b = d[m] + d[l] / 2 - u / 2,
              y = t(e.instance.popper),
              w = parseFloat(y["margin" + f], 10),
              E = parseFloat(y["border" + f + "Width"], 10),
              v = b - e.offsets.popper[m] - w - E;
            return (
              (v = $(J(s[l] - u, v), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow = ((n = {}), ae(n, m, Q(v)), ae(n, h, ""), n)),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (e, t) {
            if (W(e.instance.modifiers, "inner")) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var o = v(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement,
                e.positionFixed
              ),
              n = e.placement.split("-")[0],
              i = T(n),
              r = e.placement.split("-")[1] || "",
              p = [];
            switch (t.behavior) {
              case he.FLIP:
                p = [n, i];
                break;
              case he.CLOCKWISE:
                p = z(n);
                break;
              case he.COUNTERCLOCKWISE:
                p = z(n, !0);
                break;
              default:
                p = t.behavior;
            }
            return (
              p.forEach(function (s, d) {
                if (n !== s || p.length === d + 1) return e;
                (n = e.placement.split("-")[0]), (i = T(n));
                var a = e.offsets.popper,
                  l = e.offsets.reference,
                  f = Z,
                  m =
                    ("left" === n && f(a.right) > f(l.left)) ||
                    ("right" === n && f(a.left) < f(l.right)) ||
                    ("top" === n && f(a.bottom) > f(l.top)) ||
                    ("bottom" === n && f(a.top) < f(l.bottom)),
                  h = f(a.left) < f(o.left),
                  c = f(a.right) > f(o.right),
                  g = f(a.top) < f(o.top),
                  u = f(a.bottom) > f(o.bottom),
                  b =
                    ("left" === n && h) ||
                    ("right" === n && c) ||
                    ("top" === n && g) ||
                    ("bottom" === n && u),
                  y = -1 !== ["top", "bottom"].indexOf(n),
                  w =
                    !!t.flipVariations &&
                    ((y && "start" === r && h) ||
                      (y && "end" === r && c) ||
                      (!y && "start" === r && g) ||
                      (!y && "end" === r && u));
                (m || b || w) &&
                  ((e.flipped = !0),
                  (m || b) && (n = p[d + 1]),
                  w && (r = G(r)),
                  (e.placement = n + (r ? "-" + r : "")),
                  (e.offsets.popper = le(
                    {},
                    e.offsets.popper,
                    C(e.instance.popper, e.offsets.reference, e.placement)
                  )),
                  (e = P(e.instance.modifiers, e, "flip")));
              }),
              e
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ["left", "right"].indexOf(o),
              s = -1 === ["top", "left"].indexOf(o);
            return (
              (i[p ? "left" : "top"] =
                r[o] - (s ? i[p ? "width" : "height"] : 0)),
              (e.placement = T(t)),
              (e.offsets.popper = g(i)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!q(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              o = D(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < o.top ||
              t.left > o.right ||
              t.top > o.bottom ||
              t.right < o.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = D(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = { position: i.position },
              h = {
                left: Z(i.left),
                top: Q(i.top),
                bottom: Q(i.bottom),
                right: Z(i.right),
              },
              c = "bottom" === o ? "top" : "bottom",
              g = "right" === n ? "left" : "right",
              b = B("transform");
            if (
              ((d = "bottom" == c ? -f.height + h.bottom : h.top),
              (s = "right" == g ? -f.width + h.right : h.left),
              a && b)
            )
              (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                (m[c] = 0),
                (m[g] = 0),
                (m.willChange = "transform");
            else {
              var y = "bottom" == c ? -1 : 1,
                w = "right" == g ? -1 : 1;
              (m[c] = d * y), (m[g] = s * w), (m.willChange = c + ", " + g);
            }
            var E = { "x-placement": e.placement };
            return (
              (e.attributes = le({}, E, e.attributes)),
              (e.styles = le({}, m, e.styles)),
              (e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              j(e.instance.popper, e.styles),
              K(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                j(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, o, n, i) {
            var r = L(i, t, e, o.positionFixed),
              p = O(
                o.placement,
                r,
                t,
                e,
                o.modifiers.flip.boundariesElement,
                o.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", p),
              j(t, { position: o.positionFixed ? "fixed" : "absolute" }),
              o
            );
          },
          gpuAcceleration: void 0,
        },
      },
    }),
    ce
  );
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, c) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(s);
      "function" == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(s).filter(function (t) {
            return Object.getOwnPropertyDescriptor(s, t).enumerable;
          })
        )),
        e.forEach(function (t) {
          var e, n, i;
          (e = r),
            (i = s[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i);
        });
    }
    return r;
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (c = c && c.hasOwnProperty("default") ? c.default : c);
  var r,
    n,
    s,
    a,
    l,
    u,
    f,
    d,
    _,
    g,
    m,
    p,
    v,
    E,
    y,
    T,
    C,
    I,
    A,
    D,
    b,
    S,
    w,
    N,
    O,
    k,
    P,
    L,
    j,
    R,
    H,
    W,
    M,
    x,
    U,
    K,
    F,
    V,
    Q,
    B,
    Y,
    G,
    q,
    z,
    X,
    J,
    Z,
    $,
    tt,
    et,
    nt,
    it,
    rt,
    st,
    ot,
    at,
    lt,
    ht,
    ct,
    ut,
    ft,
    dt,
    _t,
    gt,
    mt,
    pt,
    vt,
    Et,
    yt,
    Tt,
    Ct,
    It,
    At,
    Dt,
    bt,
    St,
    wt,
    Nt,
    Ot,
    kt,
    Pt,
    Lt,
    jt,
    Rt,
    Ht,
    Wt,
    Mt,
    xt,
    Ut,
    Kt,
    Ft,
    Vt,
    Qt,
    Bt,
    Yt,
    Gt,
    qt,
    zt,
    Xt,
    Jt,
    Zt,
    $t,
    te,
    ee,
    ne,
    ie,
    re,
    se,
    oe,
    ae,
    le,
    he,
    ce,
    ue,
    fe,
    de,
    _e,
    ge,
    me,
    pe,
    ve,
    Ee,
    ye,
    Te,
    Ce,
    Ie,
    Ae,
    De,
    be,
    Se,
    we,
    Ne,
    Oe,
    ke,
    Pe,
    Le,
    je,
    Re,
    He,
    We,
    Me,
    xe,
    Ue,
    Ke,
    Fe,
    Ve,
    Qe,
    Be,
    Ye,
    Ge,
    qe,
    ze,
    Xe,
    Je,
    Ze,
    $e,
    tn,
    en,
    nn,
    rn,
    sn,
    on,
    an,
    ln,
    hn,
    cn,
    un,
    fn,
    dn,
    _n,
    gn,
    mn,
    pn,
    vn,
    En,
    yn,
    Tn,
    Cn = (function (i) {
      var e = "transitionend";
      function t(t) {
        var e = this,
          n = !1;
        return (
          i(this).one(l.TRANSITION_END, function () {
            n = !0;
          }),
          setTimeout(function () {
            n || l.triggerTransitionEnd(e);
          }, t),
          this
        );
      }
      var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          (e && "#" !== e) || (e = t.getAttribute("href") || "");
          try {
            return 0 < i(document).find(e).length ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var e = i(t).css("transition-duration");
          return parseFloat(e)
            ? ((e = e.split(",")[0]), 1e3 * parseFloat(e))
            : 0;
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
          i(t).trigger(e);
        },
        supportsTransitionEnd: function () {
          return Boolean(e);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                s = e[i],
                o =
                  s && l.isElement(s)
                    ? "element"
                    : ((a = s),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(r).test(o))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    o +
                    '" but expected type "' +
                    r +
                    '".'
                );
            }
          var a;
        },
      };
      return (
        (i.fn.emulateTransitionEnd = t),
        (i.event.special[l.TRANSITION_END] = {
          bindType: e,
          delegateType: e,
          handle: function (t) {
            if (i(t.target).is(this))
              return t.handleObj.handler.apply(this, arguments);
          },
        }),
        l
      );
    })(e),
    In =
      ((n = "alert"),
      (a = "." + (s = "bs.alert")),
      (l = (r = e).fn[n]),
      (u = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api",
      }),
      (f = "alert"),
      (d = "fade"),
      (_ = "show"),
      (g = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
          }),
          (t.dispose = function () {
            r.removeData(this._element, s), (this._element = null);
          }),
          (t._getRootElement = function (t) {
            var e = Cn.getSelectorFromElement(t),
              n = !1;
            return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n;
          }),
          (t._triggerCloseEvent = function (t) {
            var e = r.Event(u.CLOSE);
            return r(t).trigger(e), e;
          }),
          (t._removeElement = function (e) {
            var n = this;
            if ((r(e).removeClass(_), r(e).hasClass(d))) {
              var t = Cn.getTransitionDurationFromElement(e);
              r(e)
                .one(Cn.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(t);
            } else this._destroyElement(e);
          }),
          (t._destroyElement = function (t) {
            r(t).detach().trigger(u.CLOSED).remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = r(this),
                e = t.data(s);
              e || ((e = new i(this)), t.data(s, e)),
                "close" === n && e[n](this);
            });
          }),
          (i._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
          ]),
          i
        );
      })()),
      r(document).on(
        u.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        g._handleDismiss(new g())
      ),
      (r.fn[n] = g._jQueryInterface),
      (r.fn[n].Constructor = g),
      (r.fn[n].noConflict = function () {
        return (r.fn[n] = l), g._jQueryInterface;
      }),
      g),
    An =
      ((p = "button"),
      (E = "." + (v = "bs.button")),
      (y = ".data-api"),
      (T = (m = e).fn[p]),
      (C = "active"),
      (I = "btn"),
      (D = '[data-toggle^="button"]'),
      (b = '[data-toggle="buttons"]'),
      (S = "input"),
      (w = ".active"),
      (N = ".btn"),
      (O = {
        CLICK_DATA_API: "click" + E + y,
        FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y,
      }),
      (k = (function () {
        function n(t) {
          this._element = t;
        }
        var t = n.prototype;
        return (
          (t.toggle = function () {
            var t = !0,
              e = !0,
              n = m(this._element).closest(b)[0];
            if (n) {
              var i = m(this._element).find(S)[0];
              if (i) {
                if ("radio" === i.type)
                  if (i.checked && m(this._element).hasClass(C)) t = !1;
                  else {
                    var r = m(n).find(w)[0];
                    r && m(r).removeClass(C);
                  }
                if (t) {
                  if (
                    i.hasAttribute("disabled") ||
                    n.hasAttribute("disabled") ||
                    i.classList.contains("disabled") ||
                    n.classList.contains("disabled")
                  )
                    return;
                  (i.checked = !m(this._element).hasClass(C)),
                    m(i).trigger("change");
                }
                i.focus(), (e = !1);
              }
            }
            e &&
              this._element.setAttribute(
                "aria-pressed",
                !m(this._element).hasClass(C)
              ),
              t && m(this._element).toggleClass(C);
          }),
          (t.dispose = function () {
            m.removeData(this._element, v), (this._element = null);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = m(this).data(v);
              t || ((t = new n(this)), m(this).data(v, t)),
                "toggle" === e && t[e]();
            });
          }),
          o(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
          ]),
          n
        );
      })()),
      m(document)
        .on(O.CLICK_DATA_API, D, function (t) {
          t.preventDefault();
          var e = t.target;
          m(e).hasClass(I) || (e = m(e).closest(N)),
            k._jQueryInterface.call(m(e), "toggle");
        })
        .on(O.FOCUS_BLUR_DATA_API, D, function (t) {
          var e = m(t.target).closest(N)[0];
          m(e).toggleClass(A, /^focus(in)?$/.test(t.type));
        }),
      (m.fn[p] = k._jQueryInterface),
      (m.fn[p].Constructor = k),
      (m.fn[p].noConflict = function () {
        return (m.fn[p] = T), k._jQueryInterface;
      }),
      k),
    Dn =
      ((L = "carousel"),
      (R = "." + (j = "bs.carousel")),
      (H = ".data-api"),
      (W = (P = e).fn[L]),
      (M = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
      }),
      (x = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
      }),
      (U = "next"),
      (K = "prev"),
      (F = "left"),
      (V = "right"),
      (Q = {
        SLIDE: "slide" + R,
        SLID: "slid" + R,
        KEYDOWN: "keydown" + R,
        MOUSEENTER: "mouseenter" + R,
        MOUSELEAVE: "mouseleave" + R,
        TOUCHEND: "touchend" + R,
        LOAD_DATA_API: "load" + R + H,
        CLICK_DATA_API: "click" + R + H,
      }),
      (B = "carousel"),
      (Y = "active"),
      (G = "slide"),
      (q = "carousel-item-right"),
      (z = "carousel-item-left"),
      (X = "carousel-item-next"),
      (J = "carousel-item-prev"),
      (Z = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]',
      }),
      ($ = (function () {
        function s(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._config = this._getConfig(e)),
            (this._element = P(t)[0]),
            (this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0]),
            this._addEventListeners();
        }
        var t = s.prototype;
        return (
          (t.next = function () {
            this._isSliding || this._slide(U);
          }),
          (t.nextWhenVisible = function () {
            !document.hidden &&
              P(this._element).is(":visible") &&
              "hidden" !== P(this._element).css("visibility") &&
              this.next();
          }),
          (t.prev = function () {
            this._isSliding || this._slide(K);
          }),
          (t.pause = function (t) {
            t || (this._isPaused = !0),
              P(this._element).find(Z.NEXT_PREV)[0] &&
                (Cn.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (t.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (t.to = function (t) {
            var e = this;
            this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                P(this._element).one(Q.SLID, function () {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? U : K;
                this._slide(i, this._items[t]);
              }
          }),
          (t.dispose = function () {
            P(this._element).off(R),
              P.removeData(this._element, j),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (t._getConfig = function (t) {
            return (t = h({}, M, t)), Cn.typeCheckConfig(L, t, x), t;
          }),
          (t._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              P(this._element).on(Q.KEYDOWN, function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                (P(this._element)
                  .on(Q.MOUSEENTER, function (t) {
                    return e.pause(t);
                  })
                  .on(Q.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                  }),
                "ontouchstart" in document.documentElement &&
                  P(this._element).on(Q.TOUCHEND, function () {
                    e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval));
                  }));
          }),
          (t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (t._getItemIndex = function (t) {
            return (
              (this._items = P.makeArray(P(t).parent().find(Z.ITEM))),
              this._items.indexOf(t)
            );
          }),
          (t._getItemByDirection = function (t, e) {
            var n = t === U,
              i = t === K,
              r = this._getItemIndex(e),
              s = this._items.length - 1;
            if (((i && 0 === r) || (n && r === s)) && !this._config.wrap)
              return e;
            var o = (r + (t === K ? -1 : 1)) % this._items.length;
            return -1 === o
              ? this._items[this._items.length - 1]
              : this._items[o];
          }),
          (t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
              r = P.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n,
              });
            return P(this._element).trigger(r), r;
          }),
          (t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
              var e = this._indicatorsElement.children[this._getItemIndex(t)];
              e && P(e).addClass(Y);
            }
          }),
          (t._slide = function (t, e) {
            var n,
              i,
              r,
              s = this,
              o = P(this._element).find(Z.ACTIVE_ITEM)[0],
              a = this._getItemIndex(o),
              l = e || (o && this._getItemByDirection(t, o)),
              h = this._getItemIndex(l),
              c = Boolean(this._interval);
            if (
              (t === U
                ? ((n = z), (i = X), (r = F))
                : ((n = q), (i = J), (r = V)),
              l && P(l).hasClass(Y))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
              o &&
              l
            ) {
              (this._isSliding = !0),
                c && this.pause(),
                this._setActiveIndicatorElement(l);
              var u = P.Event(Q.SLID, {
                relatedTarget: l,
                direction: r,
                from: a,
                to: h,
              });
              if (P(this._element).hasClass(G)) {
                P(l).addClass(i),
                  Cn.reflow(l),
                  P(o).addClass(n),
                  P(l).addClass(n);
                var f = Cn.getTransitionDurationFromElement(o);
                P(o)
                  .one(Cn.TRANSITION_END, function () {
                    P(l)
                      .removeClass(n + " " + i)
                      .addClass(Y),
                      P(o).removeClass(Y + " " + i + " " + n),
                      (s._isSliding = !1),
                      setTimeout(function () {
                        return P(s._element).trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(f);
              } else
                P(o).removeClass(Y),
                  P(l).addClass(Y),
                  (this._isSliding = !1),
                  P(this._element).trigger(u);
              c && this.cycle();
            }
          }),
          (s._jQueryInterface = function (i) {
            return this.each(function () {
              var t = P(this).data(j),
                e = h({}, M, P(this).data());
              "object" == typeof i && (e = h({}, e, i));
              var n = "string" == typeof i ? i : e.slide;
              if (
                (t || ((t = new s(this, e)), P(this).data(j, t)),
                "number" == typeof i)
              )
                t.to(i);
              else if ("string" == typeof n) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              } else e.interval && (t.pause(), t.cycle());
            });
          }),
          (s._dataApiClickHandler = function (t) {
            var e = Cn.getSelectorFromElement(this);
            if (e) {
              var n = P(e)[0];
              if (n && P(n).hasClass(B)) {
                var i = h({}, P(n).data(), P(this).data()),
                  r = this.getAttribute("data-slide-to");
                r && (i.interval = !1),
                  s._jQueryInterface.call(P(n), i),
                  r && P(n).data(j).to(r),
                  t.preventDefault();
              }
            }
          }),
          o(s, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return M;
              },
            },
          ]),
          s
        );
      })()),
      P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler),
      P(window).on(Q.LOAD_DATA_API, function () {
        P(Z.DATA_RIDE).each(function () {
          var t = P(this);
          $._jQueryInterface.call(t, t.data());
        });
      }),
      (P.fn[L] = $._jQueryInterface),
      (P.fn[L].Constructor = $),
      (P.fn[L].noConflict = function () {
        return (P.fn[L] = W), $._jQueryInterface;
      }),
      $),
    bn =
      ((et = "collapse"),
      (it = "." + (nt = "bs.collapse")),
      (rt = (tt = e).fn[et]),
      (st = { toggle: !0, parent: "" }),
      (ot = { toggle: "boolean", parent: "(string|element)" }),
      (at = {
        SHOW: "show" + it,
        SHOWN: "shown" + it,
        HIDE: "hide" + it,
        HIDDEN: "hidden" + it,
        CLICK_DATA_API: "click" + it + ".data-api",
      }),
      (lt = "show"),
      (ht = "collapse"),
      (ct = "collapsing"),
      (ut = "collapsed"),
      (ft = "width"),
      (dt = "height"),
      (_t = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]',
      }),
      (gt = (function () {
        function a(t, e) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = tt.makeArray(
              tt(
                '[data-toggle="collapse"][href="#' +
                  t.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  t.id +
                  '"]'
              )
            ));
          for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
            var r = n[i],
              s = Cn.getSelectorFromElement(r);
            null !== s &&
              0 < tt(s).filter(t).length &&
              ((this._selector = s), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var t = a.prototype;
        return (
          (t.toggle = function () {
            tt(this._element).hasClass(lt) ? this.hide() : this.show();
          }),
          (t.show = function () {
            var t,
              e,
              n = this;
            if (
              !this._isTransitioning &&
              !tt(this._element).hasClass(lt) &&
              (this._parent &&
                0 ===
                  (t = tt.makeArray(
                    tt(this._parent)
                      .find(_t.ACTIVES)
                      .filter('[data-parent="' + this._config.parent + '"]')
                  )).length &&
                (t = null),
              !(
                t &&
                (e = tt(t).not(this._selector).data(nt)) &&
                e._isTransitioning
              ))
            ) {
              var i = tt.Event(at.SHOW);
              if ((tt(this._element).trigger(i), !i.isDefaultPrevented())) {
                t &&
                  (a._jQueryInterface.call(tt(t).not(this._selector), "hide"),
                  e || tt(t).data(nt, null));
                var r = this._getDimension();
                tt(this._element).removeClass(ht).addClass(ct),
                  (this._element.style[r] = 0) < this._triggerArray.length &&
                    tt(this._triggerArray)
                      .removeClass(ut)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                  o = Cn.getTransitionDurationFromElement(this._element);
                tt(this._element)
                  .one(Cn.TRANSITION_END, function () {
                    tt(n._element).removeClass(ct).addClass(ht).addClass(lt),
                      (n._element.style[r] = ""),
                      n.setTransitioning(!1),
                      tt(n._element).trigger(at.SHOWN);
                  })
                  .emulateTransitionEnd(o),
                  (this._element.style[r] = this._element[s] + "px");
              }
            }
          }),
          (t.hide = function () {
            var t = this;
            if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
              var e = tt.Event(at.HIDE);
              if ((tt(this._element).trigger(e), !e.isDefaultPrevented())) {
                var n = this._getDimension();
                if (
                  ((this._element.style[n] =
                    this._element.getBoundingClientRect()[n] + "px"),
                  Cn.reflow(this._element),
                  tt(this._element)
                    .addClass(ct)
                    .removeClass(ht)
                    .removeClass(lt),
                  0 < this._triggerArray.length)
                )
                  for (var i = 0; i < this._triggerArray.length; i++) {
                    var r = this._triggerArray[i],
                      s = Cn.getSelectorFromElement(r);
                    if (null !== s)
                      tt(s).hasClass(lt) ||
                        tt(r).addClass(ut).attr("aria-expanded", !1);
                  }
                this.setTransitioning(!0);
                this._element.style[n] = "";
                var o = Cn.getTransitionDurationFromElement(this._element);
                tt(this._element)
                  .one(Cn.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      tt(t._element)
                        .removeClass(ct)
                        .addClass(ht)
                        .trigger(at.HIDDEN);
                  })
                  .emulateTransitionEnd(o);
              }
            }
          }),
          (t.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (t.dispose = function () {
            tt.removeData(this._element, nt),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (t._getConfig = function (t) {
            return (
              ((t = h({}, st, t)).toggle = Boolean(t.toggle)),
              Cn.typeCheckConfig(et, t, ot),
              t
            );
          }),
          (t._getDimension = function () {
            return tt(this._element).hasClass(ft) ? ft : dt;
          }),
          (t._getParent = function () {
            var n = this,
              t = null;
            Cn.isElement(this._config.parent)
              ? ((t = this._config.parent),
                "undefined" != typeof this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = tt(this._config.parent)[0]);
            var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]';
            return (
              tt(t)
                .find(e)
                .each(function (t, e) {
                  n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
                }),
              t
            );
          }),
          (t._addAriaAndCollapsedClass = function (t, e) {
            if (t) {
              var n = tt(t).hasClass(lt);
              0 < e.length &&
                tt(e).toggleClass(ut, !n).attr("aria-expanded", n);
            }
          }),
          (a._getTargetFromElement = function (t) {
            var e = Cn.getSelectorFromElement(t);
            return e ? tt(e)[0] : null;
          }),
          (a._jQueryInterface = function (i) {
            return this.each(function () {
              var t = tt(this),
                e = t.data(nt),
                n = h({}, st, t.data(), "object" == typeof i && i ? i : {});
              if (
                (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || ((e = new a(this, n)), t.data(nt, e)),
                "string" == typeof i)
              ) {
                if ("undefined" == typeof e[i])
                  throw new TypeError('No method named "' + i + '"');
                e[i]();
              }
            });
          }),
          o(a, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return st;
              },
            },
          ]),
          a
        );
      })()),
      tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = tt(this),
          e = Cn.getSelectorFromElement(this);
        tt(e).each(function () {
          var t = tt(this),
            e = t.data(nt) ? "toggle" : n.data();
          gt._jQueryInterface.call(t, e);
        });
      }),
      (tt.fn[et] = gt._jQueryInterface),
      (tt.fn[et].Constructor = gt),
      (tt.fn[et].noConflict = function () {
        return (tt.fn[et] = rt), gt._jQueryInterface;
      }),
      gt),
    Sn =
      ((pt = "dropdown"),
      (Et = "." + (vt = "bs.dropdown")),
      (yt = ".data-api"),
      (Tt = (mt = e).fn[pt]),
      (Ct = new RegExp("38|40|27")),
      (It = {
        HIDE: "hide" + Et,
        HIDDEN: "hidden" + Et,
        SHOW: "show" + Et,
        SHOWN: "shown" + Et,
        CLICK: "click" + Et,
        CLICK_DATA_API: "click" + Et + yt,
        KEYDOWN_DATA_API: "keydown" + Et + yt,
        KEYUP_DATA_API: "keyup" + Et + yt,
      }),
      (At = "disabled"),
      (Dt = "show"),
      (bt = "dropup"),
      (St = "dropright"),
      (wt = "dropleft"),
      (Nt = "dropdown-menu-right"),
      (Ot = "position-static"),
      (kt = '[data-toggle="dropdown"]'),
      (Pt = ".dropdown form"),
      (Lt = ".dropdown-menu"),
      (jt = ".navbar-nav"),
      (Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
      (Ht = "top-start"),
      (Wt = "top-end"),
      (Mt = "bottom-start"),
      (xt = "bottom-end"),
      (Ut = "right-start"),
      (Kt = "left-start"),
      (Ft = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
      }),
      (Vt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
      }),
      (Qt = (function () {
        function l(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = l.prototype;
        return (
          (t.toggle = function () {
            if (!this._element.disabled && !mt(this._element).hasClass(At)) {
              var t = l._getParentFromElement(this._element),
                e = mt(this._menu).hasClass(Dt);
              if ((l._clearMenus(), !e)) {
                var n = { relatedTarget: this._element },
                  i = mt.Event(It.SHOW, n);
                if ((mt(t).trigger(i), !i.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if ("undefined" == typeof c)
                      throw new TypeError(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                      );
                    var r = this._element;
                    "parent" === this._config.reference
                      ? (r = t)
                      : Cn.isElement(this._config.reference) &&
                        ((r = this._config.reference),
                        "undefined" != typeof this._config.reference.jquery &&
                          (r = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        mt(t).addClass(Ot),
                      (this._popper = new c(
                        r,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === mt(t).closest(jt).length &&
                    mt(document.body).children().on("mouseover", null, mt.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    mt(this._menu).toggleClass(Dt),
                    mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n));
                }
              }
            }
          }),
          (t.dispose = function () {
            mt.removeData(this._element, vt),
              mt(this._element).off(Et),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function () {
            var e = this;
            mt(this._element).on(It.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function (t) {
            return (
              (t = h(
                {},
                this.constructor.Default,
                mt(this._element).data(),
                t
              )),
              Cn.typeCheckConfig(pt, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getMenuElement = function () {
            if (!this._menu) {
              var t = l._getParentFromElement(this._element);
              this._menu = mt(t).find(Lt)[0];
            }
            return this._menu;
          }),
          (t._getPlacement = function () {
            var t = mt(this._element).parent(),
              e = Mt;
            return (
              t.hasClass(bt)
                ? ((e = Ht), mt(this._menu).hasClass(Nt) && (e = Wt))
                : t.hasClass(St)
                ? (e = Ut)
                : t.hasClass(wt)
                ? (e = Kt)
                : mt(this._menu).hasClass(Nt) && (e = xt),
              e
            );
          }),
          (t._detectNavbar = function () {
            return 0 < mt(this._element).closest(".navbar").length;
          }),
          (t._getPopperConfig = function () {
            var e = this,
              t = {};
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = h(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset);
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: t,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (n.modifiers.applyStyle = { enabled: !1 }),
              n
            );
          }),
          (l._jQueryInterface = function (e) {
            return this.each(function () {
              var t = mt(this).data(vt);
              if (
                (t ||
                  ((t = new l(this, "object" == typeof e ? e : null)),
                  mt(this).data(vt, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          (l._clearMenus = function (t) {
            if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
              for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
                var i = l._getParentFromElement(e[n]),
                  r = mt(e[n]).data(vt),
                  s = { relatedTarget: e[n] };
                if (r) {
                  var o = r._menu;
                  if (
                    mt(i).hasClass(Dt) &&
                    !(
                      t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && 9 === t.which)) &&
                      mt.contains(i, t.target)
                    )
                  ) {
                    var a = mt.Event(It.HIDE, s);
                    mt(i).trigger(a),
                      a.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          mt(document.body)
                            .children()
                            .off("mouseover", null, mt.noop),
                        e[n].setAttribute("aria-expanded", "false"),
                        mt(o).removeClass(Dt),
                        mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)));
                  }
                }
              }
          }),
          (l._getParentFromElement = function (t) {
            var e,
              n = Cn.getSelectorFromElement(t);
            return n && (e = mt(n)[0]), e || t.parentNode;
          }),
          (l._dataApiKeydownHandler = function (t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        mt(t.target).closest(Lt).length))
                  )
                : Ct.test(t.which)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !mt(this).hasClass(At))
            ) {
              var e = l._getParentFromElement(this),
                n = mt(e).hasClass(Dt);
              if (
                (n || (27 === t.which && 32 === t.which)) &&
                (!n || (27 !== t.which && 32 !== t.which))
              ) {
                var i = mt(e).find(Rt).get();
                if (0 !== i.length) {
                  var r = i.indexOf(t.target);
                  38 === t.which && 0 < r && r--,
                    40 === t.which && r < i.length - 1 && r++,
                    r < 0 && (r = 0),
                    i[r].focus();
                }
              } else {
                if (27 === t.which) {
                  var s = mt(e).find(kt)[0];
                  mt(s).trigger("focus");
                }
                mt(this).trigger("click");
              }
            }
          }),
          o(l, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ft;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Vt;
              },
            },
          ]),
          l
        );
      })()),
      mt(document)
        .on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler)
        .on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler)
        .on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus)
        .on(It.CLICK_DATA_API, kt, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            Qt._jQueryInterface.call(mt(this), "toggle");
        })
        .on(It.CLICK_DATA_API, Pt, function (t) {
          t.stopPropagation();
        }),
      (mt.fn[pt] = Qt._jQueryInterface),
      (mt.fn[pt].Constructor = Qt),
      (mt.fn[pt].noConflict = function () {
        return (mt.fn[pt] = Tt), Qt._jQueryInterface;
      }),
      Qt),
    wn =
      ((Yt = "modal"),
      (qt = "." + (Gt = "bs.modal")),
      (zt = (Bt = e).fn[Yt]),
      (Xt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (Jt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      }),
      (Zt = {
        HIDE: "hide" + qt,
        HIDDEN: "hidden" + qt,
        SHOW: "show" + qt,
        SHOWN: "shown" + qt,
        FOCUSIN: "focusin" + qt,
        RESIZE: "resize" + qt,
        CLICK_DISMISS: "click.dismiss" + qt,
        KEYDOWN_DISMISS: "keydown.dismiss" + qt,
        MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
        CLICK_DATA_API: "click" + qt + ".data-api",
      }),
      ($t = "modal-scrollbar-measure"),
      (te = "modal-backdrop"),
      (ee = "modal-open"),
      (ne = "fade"),
      (ie = "show"),
      (re = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler",
      }),
      (se = (function () {
        function r(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = Bt(t).find(re.DIALOG)[0]),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var t = r.prototype;
        return (
          (t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (t.show = function (t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
              Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
              var n = Bt.Event(Zt.SHOW, { relatedTarget: t });
              Bt(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  Bt(document.body).addClass(ee),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  Bt(this._element).on(
                    Zt.CLICK_DISMISS,
                    re.DATA_DISMISS,
                    function (t) {
                      return e.hide(t);
                    }
                  ),
                  Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
                    Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
                      Bt(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return e._showElement(t);
                  }));
            }
          }),
          (t.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(), !this._isTransitioning && this._isShown)
            ) {
              var n = Bt.Event(Zt.HIDE);
              if (
                (Bt(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = Bt(this._element).hasClass(ne);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  Bt(document).off(Zt.FOCUSIN),
                  Bt(this._element).removeClass(ie),
                  Bt(this._element).off(Zt.CLICK_DISMISS),
                  Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var r = Cn.getTransitionDurationFromElement(this._element);
                  Bt(this._element)
                    .one(Cn.TRANSITION_END, function (t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (t.dispose = function () {
            Bt.removeData(this._element, Gt),
              Bt(window, document, this._element, this._backdrop).off(qt),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function () {
            this._adjustDialog();
          }),
          (t._getConfig = function (t) {
            return (t = h({}, Xt, t)), Cn.typeCheckConfig(Yt, t, Jt), t;
          }),
          (t._showElement = function (t) {
            var e = this,
              n = Bt(this._element).hasClass(ne);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              (this._element.scrollTop = 0),
              n && Cn.reflow(this._element),
              Bt(this._element).addClass(ie),
              this._config.focus && this._enforceFocus();
            var i = Bt.Event(Zt.SHOWN, { relatedTarget: t }),
              r = function () {
                e._config.focus && e._element.focus(),
                  (e._isTransitioning = !1),
                  Bt(e._element).trigger(i);
              };
            if (n) {
              var s = Cn.getTransitionDurationFromElement(this._element);
              Bt(this._dialog)
                .one(Cn.TRANSITION_END, r)
                .emulateTransitionEnd(s);
            } else r();
          }),
          (t._enforceFocus = function () {
            var e = this;
            Bt(document)
              .off(Zt.FOCUSIN)
              .on(Zt.FOCUSIN, function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === Bt(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS);
          }),
          (t._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? Bt(window).on(Zt.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : Bt(window).off(Zt.RESIZE);
          }),
          (t._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                Bt(document.body).removeClass(ee),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  Bt(t._element).trigger(Zt.HIDDEN);
              });
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              (Bt(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function (t) {
            var e = this,
              n = Bt(this._element).hasClass(ne) ? ne : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = te),
                n && Bt(this._backdrop).addClass(n),
                Bt(this._backdrop).appendTo(document.body),
                Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._element.focus()
                        : e.hide());
                }),
                n && Cn.reflow(this._backdrop),
                Bt(this._backdrop).addClass(ie),
                !t)
              )
                return;
              if (!n) return void t();
              var i = Cn.getTransitionDurationFromElement(this._backdrop);
              Bt(this._backdrop)
                .one(Cn.TRANSITION_END, t)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              Bt(this._backdrop).removeClass(ie);
              var r = function () {
                e._removeBackdrop(), t && t();
              };
              if (Bt(this._element).hasClass(ne)) {
                var s = Cn.getTransitionDurationFromElement(this._backdrop);
                Bt(this._backdrop)
                  .one(Cn.TRANSITION_END, r)
                  .emulateTransitionEnd(s);
              } else r();
            } else t && t();
          }),
          (t._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (t._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function () {
            var r = this;
            if (this._isBodyOverflowing) {
              Bt(re.FIXED_CONTENT).each(function (t, e) {
                var n = Bt(e)[0].style.paddingRight,
                  i = Bt(e).css("padding-right");
                Bt(e)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + r._scrollbarWidth + "px"
                  );
              }),
                Bt(re.STICKY_CONTENT).each(function (t, e) {
                  var n = Bt(e)[0].style.marginRight,
                    i = Bt(e).css("margin-right");
                  Bt(e)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) - r._scrollbarWidth + "px"
                    );
                }),
                Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
                  var n = Bt(e)[0].style.marginRight,
                    i = Bt(e).css("margin-right");
                  Bt(e)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) + r._scrollbarWidth + "px"
                    );
                });
              var t = document.body.style.paddingRight,
                e = Bt(document.body).css("padding-right");
              Bt(document.body)
                .data("padding-right", t)
                .css(
                  "padding-right",
                  parseFloat(e) + this._scrollbarWidth + "px"
                );
            }
          }),
          (t._resetScrollbar = function () {
            Bt(re.FIXED_CONTENT).each(function (t, e) {
              var n = Bt(e).data("padding-right");
              "undefined" != typeof n &&
                Bt(e).css("padding-right", n).removeData("padding-right");
            }),
              Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (
                t,
                e
              ) {
                var n = Bt(e).data("margin-right");
                "undefined" != typeof n &&
                  Bt(e).css("margin-right", n).removeData("margin-right");
              });
            var t = Bt(document.body).data("padding-right");
            "undefined" != typeof t &&
              Bt(document.body)
                .css("padding-right", t)
                .removeData("padding-right");
          }),
          (t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = $t), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (r._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = Bt(this).data(Gt),
                e = h(
                  {},
                  Xt,
                  Bt(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (t || ((t = new r(this, e)), Bt(this).data(Gt, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](i);
              } else e.show && t.show(i);
            });
          }),
          o(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Xt;
              },
            },
          ]),
          r
        );
      })()),
      Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
        var e,
          n = this,
          i = Cn.getSelectorFromElement(this);
        i && (e = Bt(i)[0]);
        var r = Bt(e).data(Gt)
          ? "toggle"
          : h({}, Bt(e).data(), Bt(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var s = Bt(e).one(Zt.SHOW, function (t) {
          t.isDefaultPrevented() ||
            s.one(Zt.HIDDEN, function () {
              Bt(n).is(":visible") && n.focus();
            });
        });
        se._jQueryInterface.call(Bt(e), r, this);
      }),
      (Bt.fn[Yt] = se._jQueryInterface),
      (Bt.fn[Yt].Constructor = se),
      (Bt.fn[Yt].noConflict = function () {
        return (Bt.fn[Yt] = zt), se._jQueryInterface;
      }),
      se),
    Nn =
      ((ae = "tooltip"),
      (he = "." + (le = "bs.tooltip")),
      (ce = (oe = e).fn[ae]),
      (ue = "bs-tooltip"),
      (fe = new RegExp("(^|\\s)" + ue + "\\S+", "g")),
      (ge = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(_e = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        }),
        selector: !(de = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
      }),
      (pe = "out"),
      (ve = {
        HIDE: "hide" + he,
        HIDDEN: "hidden" + he,
        SHOW: (me = "show") + he,
        SHOWN: "shown" + he,
        INSERTED: "inserted" + he,
        CLICK: "click" + he,
        FOCUSIN: "focusin" + he,
        FOCUSOUT: "focusout" + he,
        MOUSEENTER: "mouseenter" + he,
        MOUSELEAVE: "mouseleave" + he,
      }),
      (Ee = "fade"),
      (ye = "show"),
      (Te = ".tooltip-inner"),
      (Ce = ".arrow"),
      (Ie = "hover"),
      (Ae = "focus"),
      (De = "click"),
      (be = "manual"),
      (Se = (function () {
        function i(t, e) {
          if ("undefined" == typeof c)
            throw new TypeError(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.enable = function () {
            this._isEnabled = !0;
          }),
          (t.disable = function () {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = oe(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  oe(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (oe(this.getTipElement()).hasClass(ye))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              oe.removeData(this.element, this.constructor.DATA_KEY),
              oe(this.element).off(this.constructor.EVENT_KEY),
              oe(this.element).closest(".modal").off("hide.bs.modal"),
              this.tip && oe(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function () {
            var e = this;
            if ("none" === oe(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t = oe.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              oe(this.element).trigger(t);
              var n = oe.contains(
                this.element.ownerDocument.documentElement,
                this.element
              );
              if (t.isDefaultPrevented() || !n) return;
              var i = this.getTipElement(),
                r = Cn.getUID(this.constructor.NAME);
              i.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && oe(i).addClass(Ee);
              var s =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement,
                o = this._getAttachment(s);
              this.addAttachmentClass(o);
              var a =
                !1 === this.config.container
                  ? document.body
                  : oe(this.config.container);
              oe(i).data(this.constructor.DATA_KEY, this),
                oe.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || oe(i).appendTo(a),
                oe(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new c(this.element, i, {
                  placement: o,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: Ce },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function (t) {
                    e._handlePopperPlacementChange(t);
                  },
                })),
                oe(i).addClass(ye),
                "ontouchstart" in document.documentElement &&
                  oe(document.body).children().on("mouseover", null, oe.noop);
              var l = function () {
                e.config.animation && e._fixTransition();
                var t = e._hoverState;
                (e._hoverState = null),
                  oe(e.element).trigger(e.constructor.Event.SHOWN),
                  t === pe && e._leave(null, e);
              };
              if (oe(this.tip).hasClass(Ee)) {
                var h = Cn.getTransitionDurationFromElement(this.tip);
                oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h);
              } else l();
            }
          }),
          (t.hide = function (t) {
            var e = this,
              n = this.getTipElement(),
              i = oe.Event(this.constructor.Event.HIDE),
              r = function () {
                e._hoverState !== me &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  e._cleanTipClass(),
                  e.element.removeAttribute("aria-describedby"),
                  oe(e.element).trigger(e.constructor.Event.HIDDEN),
                  null !== e._popper && e._popper.destroy(),
                  t && t();
              };
            if ((oe(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (oe(n).removeClass(ye),
                "ontouchstart" in document.documentElement &&
                  oe(document.body).children().off("mouseover", null, oe.noop),
                (this._activeTrigger[De] = !1),
                (this._activeTrigger[Ae] = !1),
                (this._activeTrigger[Ie] = !1),
                oe(this.tip).hasClass(Ee))
              ) {
                var s = Cn.getTransitionDurationFromElement(n);
                oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
              } else r();
              this._hoverState = "";
            }
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function (t) {
            oe(this.getTipElement()).addClass(ue + "-" + t);
          }),
          (t.getTipElement = function () {
            return (
              (this.tip = this.tip || oe(this.config.template)[0]), this.tip
            );
          }),
          (t.setContent = function () {
            var t = oe(this.getTipElement());
            this.setElementContent(t.find(Te), this.getTitle()),
              t.removeClass(Ee + " " + ye);
          }),
          (t.setElementContent = function (t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery)
              ? n
                ? oe(e).parent().is(t) || t.empty().append(e)
                : t.text(oe(e).text())
              : t[n ? "html" : "text"](e);
          }),
          (t.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return (
              t ||
                (t =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              t
            );
          }),
          (t._getAttachment = function (t) {
            return _e[t.toUpperCase()];
          }),
          (t._setListeners = function () {
            var i = this;
            this.config.trigger.split(" ").forEach(function (t) {
              if ("click" === t)
                oe(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function (t) {
                    return i.toggle(t);
                  }
                );
              else if (t !== be) {
                var e =
                    t === Ie
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    t === Ie
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT;
                oe(i.element)
                  .on(e, i.config.selector, function (t) {
                    return i._enter(t);
                  })
                  .on(n, i.config.selector, function (t) {
                    return i._leave(t);
                  });
              }
              oe(i.element)
                .closest(".modal")
                .on("hide.bs.modal", function () {
                  return i.hide();
                });
            }),
              this.config.selector
                ? (this.config = h({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || oe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              oe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0),
              oe(e.getTipElement()).hasClass(ye) || e._hoverState === me
                ? (e._hoverState = me)
                : (clearTimeout(e._timeout),
                  (e._hoverState = me),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === me && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || oe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              oe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = pe),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === pe && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (t._getConfig = function (t) {
            return (
              "number" ==
                typeof (t = h(
                  {},
                  this.constructor.Default,
                  oe(this.element).data(),
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              Cn.typeCheckConfig(ae, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (t._cleanTipClass = function () {
            var t = oe(this.getTipElement()),
              e = t.attr("class").match(fe);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (t._handlePopperPlacementChange = function (t) {
            this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (t._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (oe(t).removeClass(Ee),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = oe(this).data(le),
                e = "object" == typeof n && n;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), oe(this).data(le, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ge;
              },
            },
            {
              key: "NAME",
              get: function () {
                return ae;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return le;
              },
            },
            {
              key: "Event",
              get: function () {
                return ve;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return he;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return de;
              },
            },
          ]),
          i
        );
      })()),
      (oe.fn[ae] = Se._jQueryInterface),
      (oe.fn[ae].Constructor = Se),
      (oe.fn[ae].noConflict = function () {
        return (oe.fn[ae] = ce), Se._jQueryInterface;
      }),
      Se),
    On =
      ((Ne = "popover"),
      (ke = "." + (Oe = "bs.popover")),
      (Pe = (we = e).fn[Ne]),
      (Le = "bs-popover"),
      (je = new RegExp("(^|\\s)" + Le + "\\S+", "g")),
      (Re = h({}, Nn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })),
      (He = h({}, Nn.DefaultType, { content: "(string|element|function)" })),
      (We = "fade"),
      (xe = ".popover-header"),
      (Ue = ".popover-body"),
      (Ke = {
        HIDE: "hide" + ke,
        HIDDEN: "hidden" + ke,
        SHOW: (Me = "show") + ke,
        SHOWN: "shown" + ke,
        INSERTED: "inserted" + ke,
        CLICK: "click" + ke,
        FOCUSIN: "focusin" + ke,
        FOCUSOUT: "focusout" + ke,
        MOUSEENTER: "mouseenter" + ke,
        MOUSELEAVE: "mouseleave" + ke,
      }),
      (Fe = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          ((e.prototype.constructor = e).__proto__ = n);
        var r = i.prototype;
        return (
          (r.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (r.addAttachmentClass = function (t) {
            we(this.getTipElement()).addClass(Le + "-" + t);
          }),
          (r.getTipElement = function () {
            return (
              (this.tip = this.tip || we(this.config.template)[0]), this.tip
            );
          }),
          (r.setContent = function () {
            var t = we(this.getTipElement());
            this.setElementContent(t.find(xe), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(Ue), e),
              t.removeClass(We + " " + Me);
          }),
          (r._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (r._cleanTipClass = function () {
            var t = we(this.getTipElement()),
              e = t.attr("class").match(je);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = we(this).data(Oe),
                e = "object" == typeof n ? n : null;
              if (
                (t || !/destroy|hide/.test(n)) &&
                (t || ((t = new i(this, e)), we(this).data(Oe, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Re;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Ne;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Oe;
              },
            },
            {
              key: "Event",
              get: function () {
                return Ke;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ke;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return He;
              },
            },
          ]),
          i
        );
      })(Nn)),
      (we.fn[Ne] = Fe._jQueryInterface),
      (we.fn[Ne].Constructor = Fe),
      (we.fn[Ne].noConflict = function () {
        return (we.fn[Ne] = Pe), Fe._jQueryInterface;
      }),
      Fe),
    kn =
      ((Qe = "scrollspy"),
      (Ye = "." + (Be = "bs.scrollspy")),
      (Ge = (Ve = e).fn[Qe]),
      (qe = { offset: 10, method: "auto", target: "" }),
      (ze = { offset: "number", method: "string", target: "(string|element)" }),
      (Xe = {
        ACTIVATE: "activate" + Ye,
        SCROLL: "scroll" + Ye,
        LOAD_DATA_API: "load" + Ye + ".data-api",
      }),
      (Je = "dropdown-item"),
      (Ze = "active"),
      ($e = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle",
      }),
      (tn = "offset"),
      (en = "position"),
      (nn = (function () {
        function n(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              $e.NAV_LINKS +
              "," +
              this._config.target +
              " " +
              $e.LIST_ITEMS +
              "," +
              this._config.target +
              " " +
              $e.DROPDOWN_ITEMS),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var t = n.prototype;
        return (
          (t.refresh = function () {
            var e = this,
              t = this._scrollElement === this._scrollElement.window ? tn : en,
              r = "auto" === this._config.method ? t : this._config.method,
              s = r === en ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              Ve.makeArray(Ve(this._selector))
                .map(function (t) {
                  var e,
                    n = Cn.getSelectorFromElement(t);
                  if ((n && (e = Ve(n)[0]), e)) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [Ve(e)[r]().top + s, n];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function () {
            Ve.removeData(this._element, Be),
              Ve(this._scrollElement).off(Ye),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function (t) {
            if (
              "string" !=
              typeof (t = h({}, qe, "object" == typeof t && t ? t : {})).target
            ) {
              var e = Ve(t.target).attr("id");
              e || ((e = Cn.getUID(Qe)), Ve(t.target).attr("id", e)),
                (t.target = "#" + e);
            }
            return Cn.typeCheckConfig(Qe, t, ze), t;
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; ) {
                this._activeTarget !== this._targets[r] &&
                  t >= this._offsets[r] &&
                  ("undefined" == typeof this._offsets[r + 1] ||
                    t < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
              }
            }
          }),
          (t._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var t = this._selector.split(",");
            t = t.map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            });
            var n = Ve(t.join(","));
            n.hasClass(Je)
              ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze),
                n.addClass(Ze))
              : (n.addClass(Ze),
                n
                  .parents($e.NAV_LIST_GROUP)
                  .prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS)
                  .addClass(Ze),
                n
                  .parents($e.NAV_LIST_GROUP)
                  .prev($e.NAV_ITEMS)
                  .children($e.NAV_LINKS)
                  .addClass(Ze)),
              Ve(this._scrollElement).trigger(Xe.ACTIVATE, {
                relatedTarget: e,
              });
          }),
          (t._clear = function () {
            Ve(this._selector).filter($e.ACTIVE).removeClass(Ze);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = Ve(this).data(Be);
              if (
                (t ||
                  ((t = new n(this, "object" == typeof e && e)),
                  Ve(this).data(Be, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          o(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return qe;
              },
            },
          ]),
          n
        );
      })()),
      Ve(window).on(Xe.LOAD_DATA_API, function () {
        for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--; ) {
          var n = Ve(t[e]);
          nn._jQueryInterface.call(n, n.data());
        }
      }),
      (Ve.fn[Qe] = nn._jQueryInterface),
      (Ve.fn[Qe].Constructor = nn),
      (Ve.fn[Qe].noConflict = function () {
        return (Ve.fn[Qe] = Ge), nn._jQueryInterface;
      }),
      nn),
    Pn =
      ((on = "." + (sn = "bs.tab")),
      (an = (rn = e).fn.tab),
      (ln = {
        HIDE: "hide" + on,
        HIDDEN: "hidden" + on,
        SHOW: "show" + on,
        SHOWN: "shown" + on,
        CLICK_DATA_API: "click" + on + ".data-api",
      }),
      (hn = "dropdown-menu"),
      (cn = "active"),
      (un = "disabled"),
      (fn = "fade"),
      (dn = "show"),
      (_n = ".dropdown"),
      (gn = ".nav, .list-group"),
      (mn = ".active"),
      (pn = "> li > .active"),
      (vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
      (En = ".dropdown-toggle"),
      (yn = "> .dropdown-menu .active"),
      (Tn = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var n = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  rn(this._element).hasClass(cn)) ||
                rn(this._element).hasClass(un)
              )
            ) {
              var t,
                i,
                e = rn(this._element).closest(gn)[0],
                r = Cn.getSelectorFromElement(this._element);
              if (e) {
                var s = "UL" === e.nodeName ? pn : mn;
                i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1];
              }
              var o = rn.Event(ln.HIDE, { relatedTarget: this._element }),
                a = rn.Event(ln.SHOW, { relatedTarget: i });
              if (
                (i && rn(i).trigger(o),
                rn(this._element).trigger(a),
                !a.isDefaultPrevented() && !o.isDefaultPrevented())
              ) {
                r && (t = rn(r)[0]), this._activate(this._element, e);
                var l = function () {
                  var t = rn.Event(ln.HIDDEN, { relatedTarget: n._element }),
                    e = rn.Event(ln.SHOWN, { relatedTarget: i });
                  rn(i).trigger(t), rn(n._element).trigger(e);
                };
                t ? this._activate(t, t.parentNode, l) : l();
              }
            }
          }),
          (t.dispose = function () {
            rn.removeData(this._element, sn), (this._element = null);
          }),
          (t._activate = function (t, e, n) {
            var i = this,
              r = (
                "UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn)
              )[0],
              s = n && r && rn(r).hasClass(fn),
              o = function () {
                return i._transitionComplete(t, r, n);
              };
            if (r && s) {
              var a = Cn.getTransitionDurationFromElement(r);
              rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a);
            } else o();
          }),
          (t._transitionComplete = function (t, e, n) {
            if (e) {
              rn(e).removeClass(dn + " " + cn);
              var i = rn(e.parentNode).find(yn)[0];
              i && rn(i).removeClass(cn),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            if (
              (rn(t).addClass(cn),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              Cn.reflow(t),
              rn(t).addClass(dn),
              t.parentNode && rn(t.parentNode).hasClass(hn))
            ) {
              var r = rn(t).closest(_n)[0];
              r && rn(r).find(En).addClass(cn),
                t.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = rn(this),
                e = t.data(sn);
              if (
                (e || ((e = new i(this)), t.data(sn, e)), "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.1";
              },
            },
          ]),
          i
        );
      })()),
      rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
        t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show");
      }),
      (rn.fn.tab = Tn._jQueryInterface),
      (rn.fn.tab.Constructor = Tn),
      (rn.fn.tab.noConflict = function () {
        return (rn.fn.tab = an), Tn._jQueryInterface;
      }),
      Tn);
  !(function (t) {
    if ("undefined" == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      4 <= e[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = Cn),
    (t.Alert = In),
    (t.Button = An),
    (t.Carousel = Dn),
    (t.Collapse = bn),
    (t.Dropdown = Sn),
    (t.Modal = wn),
    (t.Popover = On),
    (t.Scrollspy = kn),
    (t.Tab = Pn),
    (t.Tooltip = Nn),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map;
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
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
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});

/*
 slick-animation.js

 Version: 0.3.3 Beta
 Author: Marvin Hübner
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */
!(function (a) {
  a.fn.slickAnimation = function () {
    function n(a, n, t, i, o) {
      (o = "undefined" != typeof o ? o : !1),
        1 == n.opacity
          ? (a.addClass(t), a.addClass(i))
          : (a.removeClass(t), a.removeClass(i)),
        o && a.css(n);
    }
    function t(a, n) {
      return a ? 1e3 * a + 1e3 : n ? 1e3 * n : a || n ? 1e3 * a + 1e3 * n : 1e3;
    }
    function i(a, n, t) {
      var i = [
          "animation-" + n,
          "-webkit-animation-" + n,
          "-moz-animation-" + n,
          "-o-animation-" + n,
          "-ms-animation-" + n,
        ],
        o = {};
      i.forEach(function (a) {
        o[a] = t + "s";
      }),
        a.css(o);
    }
    var o = a(this),
      e = o.find(".slick-list .slick-track > div"),
      s = o.find('[data-slick-index="0"]'),
      r = "animated",
      c = { opacity: "1" },
      d = { opacity: "0" };
    return (
      e.each(function () {
        var e = a(this);
        e.find("[data-animation-in]").each(function () {
          var u = a(this);
          u.css(d);
          var l = u.attr("data-animation-in"),
            f = u.attr("data-animation-out"),
            h = u.attr("data-delay-in"),
            m = u.attr("data-duration-in"),
            y = u.attr("data-delay-out"),
            C = u.attr("data-duration-out");
          f
            ? (s.length > 0 &&
                e.hasClass("slick-current") &&
                (n(u, c, l, r, !0),
                h && i(u, "delay", h),
                m && i(u, "duration", m),
                setTimeout(function () {
                  n(u, d, l, r),
                    n(u, c, f, r),
                    y && i(u, "delay", y),
                    C && i(u, "duration", C);
                }, t(h, m))),
              o.on("afterChange", function (a, o, s) {
                e.hasClass("slick-current") &&
                  (n(u, c, l, r, !0),
                  h && i(u, "delay", h),
                  m && i(u, "duration", m),
                  setTimeout(function () {
                    n(u, d, l, r),
                      n(u, c, f, r),
                      y && i(u, "delay", y),
                      C && i(u, "duration", C);
                  }, t(h, m)));
              }),
              o.on("beforeChange", function (a, t, i) {
                n(u, d, f, r, !0);
              }))
            : (s.length > 0 &&
                e.hasClass("slick-current") &&
                (n(u, c, l, r, !0),
                h && i(u, "delay", h),
                m && i(u, "duration", m)),
              o.on("afterChange", function (a, t, o) {
                e.hasClass("slick-current") &&
                  (n(u, c, l, r, !0),
                  h && i(u, "delay", h),
                  m && i(u, "duration", m));
              }),
              o.on("beforeChange", function (a, t, i) {
                n(u, d, l, r, !0);
              }));
        });
      }),
      this
    );
  };
})(jQuery);
/*!
 * VERSION: 1.20.3
 * DATE: 2017-10-02
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (a, b, c) {
      var d = function (a) {
          var b,
            c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        },
        e = function (a, b, c) {
          var d,
            e,
            f = a.cycle;
          for (d in f)
            (e = f[d]),
              (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
          delete a.cycle;
        },
        f = function (a, b, d) {
          c.call(this, a, b, d),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._repeat && this._uncache(!0),
            (this.render = f.prototype.render);
        },
        g = 1e-10,
        h = c._internals,
        i = h.isSelector,
        j = h.isArray,
        k = (f.prototype = c.to({}, 0.1, {})),
        l = [];
      (f.version = "1.20.3"),
        (k.constructor = f),
        (k.kill()._gc = !1),
        (f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf),
        (f.getTweensOf = c.getTweensOf),
        (f.lagSmoothing = c.lagSmoothing),
        (f.ticker = c.ticker),
        (f.render = c.render),
        (k.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._yoyoEase = null),
            this._uncache(!0),
            c.prototype.invalidate.call(this)
          );
        }),
        (k.updateTo = function (a, b) {
          var d,
            e = this.ratio,
            f = this.vars.immediateRender || a.immediateRender;
          b &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay));
          for (d in a) this.vars[d] = a[d];
          if (this._initted || f)
            if (b) (this._initted = !1), f && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                c._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var g = this._totalTime;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(g, !0, !1);
            } else if (
              ((this._initted = !1), this._init(), this._time > 0 || f)
            )
              for (var h, i = 1 / (1 - e), j = this._firstPT; j; )
                (h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next);
          return this;
        }),
        (k.render = function (a, b, d) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var e,
            f,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = this._dirty ? this.totalDuration() : this._totalDuration,
            q = this._time,
            r = this._totalTime,
            s = this._cycle,
            t = this._duration,
            u = this._rawPrevTime;
          if (
            (a >= p - 1e-7 && a >= 0
              ? ((this._totalTime = p),
                (this._cycle = this._repeat),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = t),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((e = !0),
                  (f = "onComplete"),
                  (d = d || this._timeline.autoRemoveChildren)),
                0 === t &&
                  (this._initted || !this.vars.lazy || d) &&
                  (this._startTime === this._timeline._duration && (a = 0),
                  (0 > u ||
                    (0 >= a && a >= -1e-7) ||
                    (u === g && "isPause" !== this.data)) &&
                    u !== a &&
                    ((d = !0), u > g && (f = "onReverseComplete")),
                  (this._rawPrevTime = n = !b || a || u === a ? a : g)))
              : 1e-7 > a
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== r || (0 === t && u > 0)) &&
                  ((f = "onReverseComplete"), (e = this._reversed)),
                0 > a &&
                  ((this._active = !1),
                  0 === t &&
                    (this._initted || !this.vars.lazy || d) &&
                    (u >= 0 && (d = !0),
                    (this._rawPrevTime = n = !b || a || u === a ? a : g))),
                this._initted || (d = !0))
              : ((this._totalTime = this._time = a),
                0 !== this._repeat &&
                  ((j = t + this._repeatDelay),
                  (this._cycle = (this._totalTime / j) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / j &&
                    a >= r &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * j),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    ((this._time = t - this._time),
                    (o = this._yoyoEase || this.vars.yoyoEase),
                    o &&
                      (this._yoyoEase ||
                        (o !== !0 || this._initted
                          ? (this._yoyoEase = o =
                              o === !0
                                ? this._ease
                                : o instanceof Ease
                                ? o
                                : Ease.map[o])
                          : ((o = this.vars.ease),
                            (this._yoyoEase = o =
                              o
                                ? o instanceof Ease
                                  ? o
                                  : "function" == typeof o
                                  ? new Ease(o, this.vars.easeParams)
                                  : Ease.map[o] || c.defaultEase
                                : c.defaultEase))),
                      (this.ratio = o
                        ? 1 - o.getRatio((t - this._time) / t)
                        : 0))),
                  this._time > t
                    ? (this._time = t)
                    : this._time < 0 && (this._time = 0)),
                this._easeType && !o
                  ? ((k = this._time / t),
                    (l = this._easeType),
                    (m = this._easePower),
                    (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                    3 === l && (k *= 2),
                    1 === m
                      ? (k *= k)
                      : 2 === m
                      ? (k *= k * k)
                      : 3 === m
                      ? (k *= k * k * k)
                      : 4 === m && (k *= k * k * k * k),
                    1 === l
                      ? (this.ratio = 1 - k)
                      : 2 === l
                      ? (this.ratio = k)
                      : this._time / t < 0.5
                      ? (this.ratio = k / 2)
                      : (this.ratio = 1 - k / 2))
                  : o || (this.ratio = this._ease.getRatio(this._time / t))),
            q === this._time && !d && s === this._cycle)
          )
            return void (
              r !== this._totalTime &&
              this._onUpdate &&
              (b || this._callback("onUpdate"))
            );
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !d &&
              this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = q),
                (this._totalTime = r),
                (this._rawPrevTime = u),
                (this._cycle = s),
                h.lazyTweens.push(this),
                void (this._lazy = [a, b])
              );
            !this._time || e || o
              ? e &&
                this._ease._calcEnd &&
                !o &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              : (this.ratio = this._ease.getRatio(this._time / t));
          }
          for (
            this._lazy !== !1 && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== q &&
                  a >= 0 &&
                  (this._active = !0)),
              0 === r &&
                (2 === this._initted && a > 0 && this._init(),
                this._startAt &&
                  (a >= 0
                    ? this._startAt.render(a, !0, d)
                    : f || (f = "_dummyGS")),
                this.vars.onStart &&
                  (0 !== this._totalTime || 0 === t) &&
                  (b || this._callback("onStart"))),
              i = this._firstPT;
            i;

          )
            i.f
              ? i.t[i.p](i.c * this.ratio + i.s)
              : (i.t[i.p] = i.c * this.ratio + i.s),
              (i = i._next);
          this._onUpdate &&
            (0 > a &&
              this._startAt &&
              this._startTime &&
              this._startAt.render(a, !0, d),
            b || ((this._totalTime !== r || f) && this._callback("onUpdate"))),
            this._cycle !== s &&
              (b ||
                this._gc ||
                (this.vars.onRepeat && this._callback("onRepeat"))),
            f &&
              (!this._gc || d) &&
              (0 > a &&
                this._startAt &&
                !this._onUpdate &&
                this._startTime &&
                this._startAt.render(a, !0, d),
              e &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !b && this.vars[f] && this._callback(f),
              0 === t &&
                this._rawPrevTime === g &&
                n !== g &&
                (this._rawPrevTime = 0));
        }),
        (f.to = function (a, b, c) {
          return new f(a, b, c);
        }),
        (f.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = 0 != c.immediateRender),
            new f(a, b, c)
          );
        }),
        (f.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              0 != d.immediateRender && 0 != c.immediateRender),
            new f(a, b, d)
          );
        }),
        (f.staggerTo = f.allTo =
          function (a, b, g, h, k, m, n) {
            h = h || 0;
            var o,
              p,
              q,
              r,
              s = 0,
              t = [],
              u = function () {
                g.onComplete &&
                  g.onComplete.apply(g.onCompleteScope || this, arguments),
                  k.apply(n || g.callbackScope || this, m || l);
              },
              v = g.cycle,
              w = g.startAt && g.startAt.cycle;
            for (
              j(a) ||
                ("string" == typeof a && (a = c.selector(a) || a),
                i(a) && (a = d(a))),
                a = a || [],
                0 > h && ((a = d(a)), a.reverse(), (h *= -1)),
                o = a.length - 1,
                q = 0;
              o >= q;
              q++
            ) {
              p = {};
              for (r in g) p[r] = g[r];
              if (
                (v &&
                  (e(p, a, q),
                  null != p.duration && ((b = p.duration), delete p.duration)),
                w)
              ) {
                w = p.startAt = {};
                for (r in g.startAt) w[r] = g.startAt[r];
                e(p.startAt, a, q);
              }
              (p.delay = s + (p.delay || 0)),
                q === o && k && (p.onComplete = u),
                (t[q] = new f(a[q], b, p)),
                (s += h);
            }
            return t;
          }),
        (f.staggerFrom = f.allFrom =
          function (a, b, c, d, e, g, h) {
            return (
              (c.runBackwards = !0),
              (c.immediateRender = 0 != c.immediateRender),
              f.staggerTo(a, b, c, d, e, g, h)
            );
          }),
        (f.staggerFromTo = f.allFromTo =
          function (a, b, c, d, e, g, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              f.staggerTo(a, b, d, e, g, h, i)
            );
          }),
        (f.delayedCall = function (a, b, c, d, e) {
          return new f(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0,
          });
        }),
        (f.set = function (a, b) {
          return new f(a, 0, b);
        }),
        (f.isTweening = function (a) {
          return c.getTweensOf(a, !0).length > 0;
        });
      var m = function (a, b) {
          for (var d = [], e = 0, f = a._first; f; )
            f instanceof c
              ? (d[e++] = f)
              : (b && (d[e++] = f), (d = d.concat(m(f, b))), (e = d.length)),
              (f = f._next);
          return d;
        },
        n = (f.getAllTweens = function (b) {
          return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
        });
      (f.killAll = function (a, c, d, e) {
        null == c && (c = !0), null == d && (d = !0);
        var f,
          g,
          h,
          i = n(0 != e),
          j = i.length,
          k = c && d && e;
        for (h = 0; j > h; h++)
          (g = i[h]),
            (k ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              (a
                ? g.totalTime(g._reversed ? 0 : g.totalDuration())
                : g._enabled(!1, !1));
      }),
        (f.killChildTweensOf = function (a, b) {
          if (null != a) {
            var e,
              g,
              k,
              l,
              m,
              n = h.tweenLookup;
            if (
              ("string" == typeof a && (a = c.selector(a) || a),
              i(a) && (a = d(a)),
              j(a))
            )
              for (l = a.length; --l > -1; ) f.killChildTweensOf(a[l], b);
            else {
              e = [];
              for (k in n)
                for (g = n[k].target.parentNode; g; )
                  g === a && (e = e.concat(n[k].tweens)), (g = g.parentNode);
              for (m = e.length, l = 0; m > l; l++)
                b && e[l].totalTime(e[l].totalDuration()),
                  e[l]._enabled(!1, !1);
            }
          }
        });
      var o = function (a, c, d, e) {
        (c = c !== !1), (d = d !== !1), (e = e !== !1);
        for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1; )
          (g = h[j]),
            (i ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              g.paused(a);
      };
      return (
        (f.pauseAll = function (a, b, c) {
          o(!0, a, b, c);
        }),
        (f.resumeAll = function (a, b, c) {
          o(!1, a, b, c);
        }),
        (f.globalTimeScale = function (b) {
          var d = a._rootTimeline,
            e = c.ticker.time;
          return arguments.length
            ? ((b = b || g),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d = a._rootFramesTimeline),
              (e = c.ticker.frame),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d._timeScale = a._rootTimeline._timeScale = b),
              b)
            : d._timeScale;
        }),
        (k.progress = function (a, b) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                  this._cycle * (this._duration + this._repeatDelay),
                b
              )
            : this._time / this.duration();
        }),
        (k.totalProgress = function (a, b) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * a, b)
            : this._totalTime / this.totalDuration();
        }),
        (k.time = function (a, b) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              a > this._duration && (a = this._duration),
              this._yoyo && 0 !== (1 & this._cycle)
                ? (a =
                    this._duration -
                    a +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (a += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(a, b))
            : this._time;
        }),
        (k.duration = function (b) {
          return arguments.length
            ? a.prototype.duration.call(this, b)
            : this._duration;
        }),
        (k.totalDuration = function (a) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (a - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (k.repeat = function (a) {
          return arguments.length
            ? ((this._repeat = a), this._uncache(!0))
            : this._repeat;
        }),
        (k.repeatDelay = function (a) {
          return arguments.length
            ? ((this._repeatDelay = a), this._uncache(!0))
            : this._repeatDelay;
        }),
        (k.yoyo = function (a) {
          return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
        }),
        f
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (a, b, c) {
        var d = function (a) {
            b.call(this, a),
              (this._labels = {}),
              (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
              (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var c,
              d,
              e = this.vars;
            for (d in e)
              (c = e[d]),
                i(c) &&
                  -1 !== c.join("").indexOf("{self}") &&
                  (e[d] = this._swapSelfInParams(c));
            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
          },
          e = 1e-10,
          f = c._internals,
          g = (d._internals = {}),
          h = f.isSelector,
          i = f.isArray,
          j = f.lazyTweens,
          k = f.lazyRender,
          l = _gsScope._gsDefine.globals,
          m = function (a) {
            var b,
              c = {};
            for (b in a) c[b] = a[b];
            return c;
          },
          n = function (a, b, c) {
            var d,
              e,
              f = a.cycle;
            for (d in f)
              (e = f[d]),
                (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
            delete a.cycle;
          },
          o = (g.pauseCallback = function () {}),
          p = function (a) {
            var b,
              c = [],
              d = a.length;
            for (b = 0; b !== d; c.push(a[b++]));
            return c;
          },
          q = (d.prototype = new b());
        return (
          (d.version = "1.20.3"),
          (q.constructor = d),
          (q.kill()._gc = q._forcingPlayhead = q._hasPause = !1),
          (q.to = function (a, b, d, e) {
            var f = (d.repeat && l.TweenMax) || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
          }),
          (q.from = function (a, b, d, e) {
            return this.add(((d.repeat && l.TweenMax) || c).from(a, b, d), e);
          }),
          (q.fromTo = function (a, b, d, e, f) {
            var g = (e.repeat && l.TweenMax) || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
          }),
          (q.staggerTo = function (a, b, e, f, g, i, j, k) {
            var l,
              o,
              q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming,
              }),
              r = e.cycle;
            for (
              "string" == typeof a && (a = c.selector(a) || a),
                a = a || [],
                h(a) && (a = p(a)),
                f = f || 0,
                0 > f && ((a = p(a)), a.reverse(), (f *= -1)),
                o = 0;
              o < a.length;
              o++
            )
              (l = m(e)),
                l.startAt &&
                  ((l.startAt = m(l.startAt)),
                  l.startAt.cycle && n(l.startAt, a, o)),
                r &&
                  (n(l, a, o),
                  null != l.duration && ((b = l.duration), delete l.duration)),
                q.to(a[o], b, l, o * f);
            return this.add(q, g);
          }),
          (q.staggerFrom = function (a, b, c, d, e, f, g, h) {
            return (
              (c.immediateRender = 0 != c.immediateRender),
              (c.runBackwards = !0),
              this.staggerTo(a, b, c, d, e, f, g, h)
            );
          }),
          (q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              this.staggerTo(a, b, d, e, f, g, h, i)
            );
          }),
          (q.call = function (a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
          }),
          (q.set = function (a, b, d) {
            return (
              (d = this._parseTimeOrLabel(d, 0, !0)),
              null == b.immediateRender &&
                (b.immediateRender = d === this._time && !this._paused),
              this.add(new c(a, 0, b), d)
            );
          }),
          (d.exportRoot = function (a, b) {
            (a = a || {}),
              null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e,
              f,
              g,
              h,
              i = new d(a),
              j = i._timeline;
            for (
              null == b && (b = !0),
                j._remove(i, !0),
                i._startTime = 0,
                i._rawPrevTime = i._time = i._totalTime = j._time,
                g = j._first;
              g;

            )
              (h = g._next),
                (b && g instanceof c && g.target === g.vars.onComplete) ||
                  ((f = g._startTime - g._delay),
                  0 > f && (e = 1),
                  i.add(g, f)),
                (g = h);
            return j.add(i, 0), e && i.totalDuration(), i;
          }),
          (q.add = function (e, f, g, h) {
            var j, k, l, m, n, o;
            if (
              ("number" != typeof f &&
                (f = this._parseTimeOrLabel(f, 0, !0, e)),
              !(e instanceof a))
            ) {
              if (e instanceof Array || (e && e.push && i(e))) {
                for (
                  g = g || "normal", h = h || 0, j = f, k = e.length, l = 0;
                  k > l;
                  l++
                )
                  i((m = e[l])) && (m = new d({ tweens: m })),
                    this.add(m, j),
                    "string" != typeof m &&
                      "function" != typeof m &&
                      ("sequence" === g
                        ? (j = m._startTime + m.totalDuration() / m._timeScale)
                        : "start" === g && (m._startTime -= m.delay())),
                    (j += h);
                return this._uncache(!0);
              }
              if ("string" == typeof e) return this.addLabel(e, f);
              if ("function" != typeof e)
                throw (
                  "Cannot add " +
                  e +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              e = c.delayedCall(0, e);
            }
            if (
              (b.prototype.add.call(this, e, f),
              e._time &&
                e.render(
                  (this.rawTime() - e._startTime) * e._timeScale,
                  !1,
                  !1
                ),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (n = this, o = n.rawTime() > e._startTime; n._timeline; )
                o && n._timeline.smoothChildTiming
                  ? n.totalTime(n._totalTime, !0)
                  : n._gc && n._enabled(!0, !1),
                  (n = n._timeline);
            return this;
          }),
          (q.remove = function (b) {
            if (b instanceof a) {
              this._remove(b, !1);
              var c = (b._timeline = b.vars.useFrames
                ? a._rootFramesTimeline
                : a._rootTimeline);
              return (
                (b._startTime =
                  (b._paused ? b._pauseTime : c._time) -
                  (b._reversed
                    ? b.totalDuration() - b._totalTime
                    : b._totalTime) /
                    b._timeScale),
                this
              );
            }
            if (b instanceof Array || (b && b.push && i(b))) {
              for (var d = b.length; --d > -1; ) this.remove(b[d]);
              return this;
            }
            return "string" == typeof b
              ? this.removeLabel(b)
              : this.kill(null, b);
          }),
          (q._remove = function (a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return (
              d
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (q.append = function (a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
          }),
          (q.insert = q.insertMultiple =
            function (a, b, c, d) {
              return this.add(a, b || 0, c, d);
            }),
          (q.appendMultiple = function (a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
          }),
          (q.addLabel = function (a, b) {
            return (this._labels[a] = this._parseTimeOrLabel(b)), this;
          }),
          (q.addPause = function (a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return (
              (f.vars.onComplete = f.vars.onReverseComplete = b),
              (f.data = "isPause"),
              (this._hasPause = !0),
              this.add(f, a)
            );
          }),
          (q.removeLabel = function (a) {
            return delete this._labels[a], this;
          }),
          (q.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1;
          }),
          (q._parseTimeOrLabel = function (b, c, d, e) {
            var f, g;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || (e.push && i(e))))
              for (g = e.length; --g > -1; )
                e[g] instanceof a &&
                  e[g].timeline === this &&
                  this.remove(e[g]);
            if (
              ((f =
                "number" != typeof b || c
                  ? this.duration() > 99999999999
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              "string" == typeof c)
            )
              return this._parseTimeOrLabel(
                c,
                d && "number" == typeof b && null == this._labels[c]
                  ? b - f
                  : 0,
                d
              );
            if (
              ((c = c || 0),
              "string" != typeof b || (!isNaN(b) && null == this._labels[b]))
            )
              null == b && (b = f);
            else {
              if (((g = b.indexOf("=")), -1 === g))
                return null == this._labels[b]
                  ? d
                    ? (this._labels[b] = f + c)
                    : c
                  : this._labels[b] + c;
              (c =
                parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1))),
                (b =
                  g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
            }
            return Number(b) + c;
          }),
          (q.seek = function (a, b) {
            return this.totalTime(
              "number" == typeof a ? a : this._parseTimeOrLabel(a),
              b !== !1
            );
          }),
          (q.stop = function () {
            return this.paused(!0);
          }),
          (q.gotoAndPlay = function (a, b) {
            return this.play(a, b);
          }),
          (q.gotoAndStop = function (a, b) {
            return this.pause(a, b);
          }),
          (q.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              g,
              h,
              i,
              l,
              m,
              n = this._time,
              o = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._startTime,
              q = this._timeScale,
              r = this._paused;
            if (
              (n !== this._time && (a += this._time - n),
              a >= o - 1e-7 && a >= 0)
            )
              (this._totalTime = this._time = o),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((f = !0),
                  (h = "onComplete"),
                  (i = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= a && a >= -1e-7) ||
                      this._rawPrevTime < 0 ||
                      this._rawPrevTime === e) &&
                    this._rawPrevTime !== a &&
                    this._first &&
                    ((i = !0),
                    this._rawPrevTime > e && (h = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !b || a || this._rawPrevTime === a ? a : e),
                (a = o + 1e-4);
            else if (1e-7 > a)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== n ||
                  (0 === this._duration &&
                    this._rawPrevTime !== e &&
                    (this._rawPrevTime > 0 ||
                      (0 > a && this._rawPrevTime >= 0)))) &&
                  ((h = "onReverseComplete"), (f = this._reversed)),
                0 > a)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((i = f = !0), (h = "onReverseComplete"))
                    : this._rawPrevTime >= 0 && this._first && (i = !0),
                  (this._rawPrevTime = a);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !b || a || this._rawPrevTime === a
                      ? a
                      : e),
                  0 === a && f)
                )
                  for (d = this._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), this._initted || (i = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !b) {
                if (a >= n)
                  for (d = this._first; d && d._startTime <= a && !l; )
                    d._duration ||
                      "isPause" !== d.data ||
                      d.ratio ||
                      (0 === d._startTime && 0 === this._rawPrevTime) ||
                      (l = d),
                      (d = d._next);
                else
                  for (d = this._last; d && d._startTime >= a && !l; )
                    d._duration ||
                      ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)),
                      (d = d._prev);
                l &&
                  ((this._time = a = l._startTime),
                  (this._totalTime =
                    a +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = a;
            }
            if ((this._time !== n && this._first) || c || i || l) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== n &&
                    a > 0 &&
                    (this._active = !0)),
                0 === n &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    b ||
                    this._callback("onStart")),
                (m = this._time),
                m >= n)
              )
                for (
                  d = this._first;
                  d &&
                  ((g = d._next), m === this._time && (!this._paused || r));

                )
                  (d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
                    (l === d && this.pause(),
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c)),
                    (d = g);
              else
                for (
                  d = this._last;
                  d &&
                  ((g = d._prev), m === this._time && (!this._paused || r));

                ) {
                  if (
                    d._active ||
                    (d._startTime <= n && !d._paused && !d._gc)
                  ) {
                    if (l === d) {
                      for (l = d._prev; l && l.endTime() > this._time; )
                        l.render(
                          l._reversed
                            ? l.totalDuration() -
                                (a - l._startTime) * l._timeScale
                            : (a - l._startTime) * l._timeScale,
                          b,
                          c
                        ),
                          (l = l._prev);
                      (l = null), this.pause();
                    }
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c);
                  }
                  d = g;
                }
              this._onUpdate &&
                (b || (j.length && k(), this._callback("onUpdate"))),
                h &&
                  (this._gc ||
                    ((p === this._startTime || q !== this._timeScale) &&
                      (0 === this._time || o >= this.totalDuration()) &&
                      (f &&
                        (j.length && k(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !b && this.vars[h] && this._callback(h))));
            }
          }),
          (q._hasPausedChild = function () {
            for (var a = this._first; a; ) {
              if (a._paused || (a instanceof d && a._hasPausedChild()))
                return !0;
              a = a._next;
            }
            return !1;
          }),
          (q.getChildren = function (a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; )
              g._startTime < e ||
                (g instanceof c
                  ? b !== !1 && (f[h++] = g)
                  : (d !== !1 && (f[h++] = g),
                    a !== !1 &&
                      ((f = f.concat(g.getChildren(!0, b, d))),
                      (h = f.length)))),
                (g = g._next);
            return f;
          }),
          (q.getTweensOf = function (a, b) {
            var d,
              e,
              f = this._gc,
              g = [],
              h = 0;
            for (
              f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length;
              --e > -1;

            )
              (d[e].timeline === this || (b && this._contains(d[e]))) &&
                (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
          }),
          (q.recent = function () {
            return this._recent;
          }),
          (q._contains = function (a) {
            for (var b = a.timeline; b; ) {
              if (b === this) return !0;
              b = b.timeline;
            }
            return !1;
          }),
          (q.shiftChildren = function (a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; )
              e._startTime >= c && (e._startTime += a), (e = e._next);
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
          }),
          (q._kill = function (a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (
              var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1),
                d = c.length,
                e = !1;
              --d > -1;

            )
              c[d]._kill(a, b) && (e = !0);
            return e;
          }),
          (q.clear = function (a) {
            var b = this.getChildren(!1, !0, !0),
              c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; )
              b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (q.invalidate = function () {
            for (var b = this._first; b; ) b.invalidate(), (b = b._next);
            return a.prototype.invalidate.call(this);
          }),
          (q._enabled = function (a, c) {
            if (a === this._gc)
              for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next);
            return b.prototype._enabled.call(this, a, c);
          }),
          (q.totalTime = function (b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (q.duration = function (a) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== a &&
                  this.timeScale(this._duration / a),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (q.totalDuration = function (a) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                  (b = e._prev),
                    e._dirty && e.totalDuration(),
                    e._startTime > f &&
                    this._sortChildren &&
                    !e._paused &&
                    !this._calculatingDuration
                      ? ((this._calculatingDuration = 1),
                        this.add(e, e._startTime - e._delay),
                        (this._calculatingDuration = 0))
                      : (f = e._startTime),
                    e._startTime < 0 &&
                      !e._paused &&
                      ((d -= e._startTime),
                      this._timeline.smoothChildTiming &&
                        ((this._startTime += e._startTime / this._timeScale),
                        (this._time -= e._startTime),
                        (this._totalTime -= e._startTime),
                        (this._rawPrevTime -= e._startTime)),
                      this.shiftChildren(-e._startTime, !1, -9999999999),
                      (f = 0)),
                    (c = e._startTime + e._totalDuration / e._timeScale),
                    c > d && (d = c),
                    (e = b);
                (this._duration = this._totalDuration = d), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return a && this.totalDuration()
              ? this.timeScale(this._totalDuration / a)
              : this;
          }),
          (q.paused = function (b) {
            if (!b)
              for (var c = this._first, d = this._time; c; )
                c._startTime === d &&
                  "isPause" === c.data &&
                  (c._rawPrevTime = 0),
                  (c = c._next);
            return a.prototype.paused.apply(this, arguments);
          }),
          (q.usesFrames = function () {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
          }),
          (q.rawTime = function (a) {
            return a &&
              (this._paused ||
                (this._repeat && this.time() > 0 && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
          }),
          d
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (a, b, c) {
        var d = function (b) {
            a.call(this, b),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = this.vars.yoyo === !0),
              (this._dirty = !0);
          },
          e = 1e-10,
          f = b._internals,
          g = f.lazyTweens,
          h = f.lazyRender,
          i = _gsScope._gsDefine.globals,
          j = new c(null, null, 1, 0),
          k = (d.prototype = new a());
        return (
          (k.constructor = d),
          (k.kill()._gc = !1),
          (d.version = "1.20.3"),
          (k.invalidate = function () {
            return (
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              a.prototype.invalidate.call(this)
            );
          }),
          (k.addCallback = function (a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
          }),
          (k.removeCallback = function (a, b) {
            if (a)
              if (null == b) this._kill(null, a);
              else
                for (
                  var c = this.getTweensOf(a, !1),
                    d = c.length,
                    e = this._parseTimeOrLabel(b);
                  --d > -1;

                )
                  c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
          }),
          (k.removePause = function (b) {
            return this.removeCallback(a._internals.pauseCallback, b);
          }),
          (k.tweenTo = function (a, c) {
            c = c || {};
            var d,
              e,
              f,
              g = {
                ease: j,
                useFrames: this.usesFrames(),
                immediateRender: !1,
              },
              h = (c.repeat && i.TweenMax) || b;
            for (e in c) g[e] = c[e];
            return (
              (g.time = this._parseTimeOrLabel(a)),
              (d =
                Math.abs(Number(g.time) - this._time) / this._timeScale ||
                0.001),
              (f = new h(this, d, g)),
              (g.onStart = function () {
                f.target.paused(!0),
                  f.vars.time !== f.target.time() &&
                    d === f.duration() &&
                    f.duration(
                      Math.abs(f.vars.time - f.target.time()) /
                        f.target._timeScale
                    ),
                  c.onStart &&
                    c.onStart.apply(
                      c.onStartScope || c.callbackScope || f,
                      c.onStartParams || []
                    );
              }),
              f
            );
          }),
          (k.tweenFromTo = function (a, b, c) {
            (c = c || {}),
              (a = this._parseTimeOrLabel(a)),
              (c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                callbackScope: this,
              }),
              (c.immediateRender = c.immediateRender !== !1);
            var d = this.tweenTo(b, c);
            return d.duration(
              Math.abs(d.vars.time - a) / this._timeScale || 0.001
            );
          }),
          (k.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              i,
              j,
              k,
              l,
              m,
              n,
              o = this._time,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              q = this._duration,
              r = this._totalTime,
              s = this._startTime,
              t = this._timeScale,
              u = this._rawPrevTime,
              v = this._paused,
              w = this._cycle;
            if (
              (o !== this._time && (a += this._time - o),
              a >= p - 1e-7 && a >= 0)
            )
              this._locked ||
                ((this._totalTime = p), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((f = !0),
                  (j = "onComplete"),
                  (k = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= a && a >= -1e-7) || 0 > u || u === e) &&
                    u !== a &&
                    this._first &&
                    ((k = !0), u > e && (j = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !b || a || this._rawPrevTime === a ? a : e),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (this._time = a = 0)
                  : ((this._time = q), (a = q + 1e-4));
            else if (1e-7 > a)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== o ||
                  (0 === q &&
                    u !== e &&
                    (u > 0 || (0 > a && u >= 0)) &&
                    !this._locked)) &&
                  ((j = "onReverseComplete"), (f = this._reversed)),
                0 > a)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((k = f = !0), (j = "onReverseComplete"))
                    : u >= 0 && this._first && (k = !0),
                  (this._rawPrevTime = a);
              else {
                if (
                  ((this._rawPrevTime =
                    q || !b || a || this._rawPrevTime === a ? a : e),
                  0 === a && f)
                )
                  for (d = this._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), this._initted || (k = !0);
              }
            else if (
              (0 === q && 0 > u && (k = !0),
              (this._time = this._rawPrevTime = a),
              this._locked ||
                ((this._totalTime = a),
                0 !== this._repeat &&
                  ((l = q + this._repeatDelay),
                  (this._cycle = (this._totalTime / l) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / l &&
                    a >= r &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * l),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    (this._time = q - this._time),
                  this._time > q
                    ? ((this._time = q), (a = q + 1e-4))
                    : this._time < 0
                    ? (this._time = a = 0)
                    : (a = this._time))),
              this._hasPause && !this._forcingPlayhead && !b)
            ) {
              if (
                ((a = this._time),
                a >= o || (this._repeat && w !== this._cycle))
              )
                for (d = this._first; d && d._startTime <= a && !m; )
                  d._duration ||
                    "isPause" !== d.data ||
                    d.ratio ||
                    (0 === d._startTime && 0 === this._rawPrevTime) ||
                    (m = d),
                    (d = d._next);
              else
                for (d = this._last; d && d._startTime >= a && !m; )
                  d._duration ||
                    ("isPause" === d.data && d._rawPrevTime > 0 && (m = d)),
                    (d = d._prev);
              m &&
                m._startTime < q &&
                ((this._time = a = m._startTime),
                (this._totalTime =
                  a + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== w && !this._locked) {
              var x = this._yoyo && 0 !== (1 & w),
                y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                z = this._totalTime,
                A = this._cycle,
                B = this._rawPrevTime,
                C = this._time;
              if (
                ((this._totalTime = w * q),
                this._cycle < w ? (x = !x) : (this._totalTime += q),
                (this._time = o),
                (this._rawPrevTime = 0 === q ? u - 1e-4 : u),
                (this._cycle = w),
                (this._locked = !0),
                (o = x ? 0 : q),
                this.render(o, b, 0 === q),
                b ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = A),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                o !== this._time)
              )
                return;
              if (
                (y &&
                  ((this._cycle = w),
                  (this._locked = !0),
                  (o = x ? q + 1e-4 : -1e-4),
                  this.render(o, !0, !1)),
                (this._locked = !1),
                this._paused && !v)
              )
                return;
              (this._time = C),
                (this._totalTime = z),
                (this._cycle = A),
                (this._rawPrevTime = B);
            }
            if (!((this._time !== o && this._first) || c || k || m))
              return void (
                r !== this._totalTime &&
                this._onUpdate &&
                (b || this._callback("onUpdate"))
              );
            if (
              (this._initted || (this._initted = !0),
              this._active ||
                (!this._paused &&
                  this._totalTime !== r &&
                  a > 0 &&
                  (this._active = !0)),
              0 === r &&
                this.vars.onStart &&
                ((0 === this._totalTime && this._totalDuration) ||
                  b ||
                  this._callback("onStart")),
              (n = this._time),
              n >= o)
            )
              for (
                d = this._first;
                d && ((i = d._next), n === this._time && (!this._paused || v));

              )
                (d._active ||
                  (d._startTime <= this._time && !d._paused && !d._gc)) &&
                  (m === d && this.pause(),
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c)),
                  (d = i);
            else
              for (
                d = this._last;
                d && ((i = d._prev), n === this._time && (!this._paused || v));

              ) {
                if (d._active || (d._startTime <= o && !d._paused && !d._gc)) {
                  if (m === d) {
                    for (m = d._prev; m && m.endTime() > this._time; )
                      m.render(
                        m._reversed
                          ? m.totalDuration() -
                              (a - m._startTime) * m._timeScale
                          : (a - m._startTime) * m._timeScale,
                        b,
                        c
                      ),
                        (m = m._prev);
                    (m = null), this.pause();
                  }
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c);
                }
                d = i;
              }
            this._onUpdate &&
              (b || (g.length && h(), this._callback("onUpdate"))),
              j &&
                (this._locked ||
                  this._gc ||
                  ((s === this._startTime || t !== this._timeScale) &&
                    (0 === this._time || p >= this.totalDuration()) &&
                    (f &&
                      (g.length && h(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !b && this.vars[j] && this._callback(j))));
          }),
          (k.getActive = function (a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
            var d,
              e,
              f = [],
              g = this.getChildren(a, b, c),
              h = 0,
              i = g.length;
            for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
            return f;
          }),
          (k.getLabelAfter = function (a) {
            a || (0 !== a && (a = this._time));
            var b,
              c = this.getLabelsArray(),
              d = c.length;
            for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
            return null;
          }),
          (k.getLabelBefore = function (a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1; )
              if (b[c].time < a) return b[c].name;
            return null;
          }),
          (k.getLabelsArray = function () {
            var a,
              b = [],
              c = 0;
            for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
            return (
              b.sort(function (a, b) {
                return a.time - b.time;
              }),
              b
            );
          }),
          (k.invalidate = function () {
            return (this._locked = !1), a.prototype.invalidate.call(this);
          }),
          (k.progress = function (a, b) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                    this._cycle * (this._duration + this._repeatDelay),
                  b
                )
              : this._time / this.duration() || 0;
          }),
          (k.totalProgress = function (a, b) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * a, b)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (k.totalDuration = function (b) {
            return arguments.length
              ? -1 !== this._repeat && b
                ? this.timeScale(this.totalDuration() / b)
                : this
              : (this._dirty &&
                  (a.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (k.time = function (a, b) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                a > this._duration && (a = this._duration),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (a =
                      this._duration -
                      a +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (a += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(a, b))
              : this._time;
          }),
          (k.repeat = function (a) {
            return arguments.length
              ? ((this._repeat = a), this._uncache(!0))
              : this._repeat;
          }),
          (k.repeatDelay = function (a) {
            return arguments.length
              ? ((this._repeatDelay = a), this._uncache(!0))
              : this._repeatDelay;
          }),
          (k.yoyo = function (a) {
            return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
          }),
          (k.currentLabel = function (a) {
            return arguments.length
              ? this.seek(a, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          d
        );
      },
      !0
    ),
    (function () {
      var a = 180 / Math.PI,
        b = [],
        c = [],
        d = [],
        e = {},
        f = _gsScope._gsDefine.globals,
        g = function (a, b, c, d) {
          c === d && (c = d - (d - b) / 1e6),
            a === b && (b = a + (c - a) / 1e6),
            (this.a = a),
            (this.b = b),
            (this.c = c),
            (this.d = d),
            (this.da = d - a),
            (this.ca = c - a),
            (this.ba = b - a);
        },
        h =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        i = function (a, b, c, d) {
          var e = { a: a },
            f = {},
            g = {},
            h = { c: d },
            i = (a + b) / 2,
            j = (b + c) / 2,
            k = (c + d) / 2,
            l = (i + j) / 2,
            m = (j + k) / 2,
            n = (m - l) / 8;
          return (
            (e.b = i + (a - i) / 4),
            (f.b = l + n),
            (e.c = f.a = (e.b + f.b) / 2),
            (f.c = g.a = (l + m) / 2),
            (g.b = m - n),
            (h.b = k + (d - k) / 4),
            (g.c = h.a = (g.b + h.b) / 2),
            [e, f, g, h]
          );
        },
        j = function (a, e, f, g, h) {
          var j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w = a.length - 1,
            x = 0,
            y = a[0].a;
          for (j = 0; w > j; j++)
            (n = a[x]),
              (k = n.a),
              (l = n.d),
              (m = a[x + 1].d),
              h
                ? ((t = b[j]),
                  (u = c[j]),
                  (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                  (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
                  (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
                  (q =
                    l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
                : ((o = l - (l - k) * e * 0.5),
                  (p = l + (m - l) * e * 0.5),
                  (q = l - (o + p) / 2)),
              (o += q),
              (p += q),
              (n.c = r = o),
              0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
              (n.da = l - k),
              (n.ca = r - k),
              (n.ba = y - k),
              f
                ? ((s = i(k, y, r, l)),
                  a.splice(x, 1, s[0], s[1], s[2], s[3]),
                  (x += 4))
                : x++,
              (y = p);
          (n = a[x]),
            (n.b = y),
            (n.c = y + 0.4 * (n.d - y)),
            (n.da = n.d - n.a),
            (n.ca = n.c - n.a),
            (n.ba = y - n.a),
            f &&
              ((s = i(n.a, y, n.c, n.d)),
              a.splice(x, 1, s[0], s[1], s[2], s[3]));
        },
        k = function (a, d, e, f) {
          var h,
            i,
            j,
            k,
            l,
            m,
            n = [];
          if (f)
            for (a = [f].concat(a), i = a.length; --i > -1; )
              "string" == typeof (m = a[i][d]) &&
                "=" === m.charAt(1) &&
                (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
          if (((h = a.length - 2), 0 > h))
            return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
          for (i = 0; h > i; i++)
            (j = a[i][d]),
              (k = a[i + 1][d]),
              (n[i] = new g(j, 0, 0, k)),
              e &&
                ((l = a[i + 2][d]),
                (b[i] = (b[i] || 0) + (k - j) * (k - j)),
                (c[i] = (c[i] || 0) + (l - k) * (l - k)));
          return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
        },
        l = function (a, f, g, i, l, m) {
          var n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v = {},
            w = [],
            x = m || a[0];
          (l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
          for (o in a[0]) w.push(o);
          if (a.length > 1) {
            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
              if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
                t = !1;
                break;
              }
            t &&
              ((a = a.concat()),
              m && a.unshift(m),
              a.push(a[1]),
              (m = a[a.length - 3]));
          }
          for (b.length = c.length = d.length = 0, n = w.length; --n > -1; )
            (o = w[n]),
              (e[o] = -1 !== l.indexOf("," + o + ",")),
              (v[o] = k(a, o, e[o], m));
          for (n = b.length; --n > -1; )
            (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
          if (!i) {
            for (n = w.length; --n > -1; )
              if (e[o])
                for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)
                  (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0),
                    (d[q] = (d[q] || 0) + r * r);
            for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
          }
          for (n = w.length, q = g ? 4 : 1; --n > -1; )
            (o = w[n]),
              (p = v[o]),
              j(p, f, g, i, e[o]),
              t && (p.splice(0, q), p.splice(p.length - q, q));
          return v;
        },
        m = function (a, b, c) {
          b = b || "soft";
          var d,
            e,
            f,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = {},
            q = "cubic" === b ? 3 : 2,
            r = "soft" === b,
            s = [];
          if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1))
            throw "invalid Bezier data";
          for (m in a[0]) s.push(m);
          for (j = s.length; --j > -1; ) {
            for (
              m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0;
              l > k;
              k++
            )
              (d =
                null == c
                  ? a[k][m]
                  : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1)
                  ? c[m] + Number(o.charAt(0) + o.substr(2))
                  : Number(o)),
                r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                (i[n++] = d);
            for (l = n - q + 1, n = 0, k = 0; l > k; k += q)
              (d = i[k]),
                (e = i[k + 1]),
                (f = i[k + 2]),
                (h = 2 === q ? 0 : i[k + 3]),
                (i[n++] = o =
                  3 === q
                    ? new g(d, e, f, h)
                    : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
            i.length = n;
          }
          return p;
        },
        n = function (a, b, c) {
          for (
            var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length;
            --p > -1;

          )
            for (
              m = a[p],
                f = m.a,
                g = m.d - f,
                h = m.c - f,
                i = m.b - f,
                d = e = 0,
                k = 1;
              c >= k;
              k++
            )
              (j = o * k),
                (l = 1 - j),
                (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)),
                (n = p * c + k - 1),
                (b[n] = (b[n] || 0) + d * d);
        },
        o = function (a, b) {
          b = b >> 0 || 6;
          var c,
            d,
            e,
            f,
            g = [],
            h = [],
            i = 0,
            j = 0,
            k = b - 1,
            l = [],
            m = [];
          for (c in a) n(a[c], g, b);
          for (e = g.length, d = 0; e > d; d++)
            (i += Math.sqrt(g[d])),
              (f = d % b),
              (m[f] = i),
              f === k &&
                ((j += i),
                (f = (d / b) >> 0),
                (l[f] = m),
                (h[f] = j),
                (i = 0),
                (m = []));
          return { length: j, lengths: h, segments: l };
        },
        p = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.8",
          API: 2,
          global: !0,
          init: function (a, b, c) {
            (this._target = a),
              b instanceof Array && (b = { values: b }),
              (this._func = {}),
              (this._mod = {}),
              (this._props = []),
              (this._timeRes =
                null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
            var d,
              e,
              f,
              g,
              h,
              i = b.values || [],
              j = {},
              k = i[0],
              n = b.autoRotate || c.vars.orientToBezier;
            this._autoRotate = n
              ? n instanceof Array
                ? n
                : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]
              : null;
            for (d in k) this._props.push(d);
            for (f = this._props.length; --f > -1; )
              (d = this._props[f]),
                this._overwriteProps.push(d),
                (e = this._func[d] = "function" == typeof a[d]),
                (j[d] = e
                  ? a[
                      d.indexOf("set") ||
                      "function" != typeof a["get" + d.substr(3)]
                        ? d
                        : "get" + d.substr(3)
                    ]()
                  : parseFloat(a[d])),
                h || (j[d] !== i[0][d] && (h = j));
            if (
              ((this._beziers =
                "cubic" !== b.type &&
                "quadratic" !== b.type &&
                "soft" !== b.type
                  ? l(
                      i,
                      isNaN(b.curviness) ? 1 : b.curviness,
                      !1,
                      "thruBasic" === b.type,
                      b.correlate,
                      h
                    )
                  : m(i, b.type, j)),
              (this._segCount = this._beziers[d].length),
              this._timeRes)
            ) {
              var p = o(this._beziers, this._timeRes);
              (this._length = p.length),
                (this._lengths = p.lengths),
                (this._segments = p.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((n = this._autoRotate))
              for (
                this._initialRotations = [],
                  n[0] instanceof Array || (this._autoRotate = n = [n]),
                  f = n.length;
                --f > -1;

              ) {
                for (g = 0; 3 > g; g++)
                  (d = n[f][g]),
                    (this._func[d] =
                      "function" == typeof a[d]
                        ? a[
                            d.indexOf("set") ||
                            "function" != typeof a["get" + d.substr(3)]
                              ? d
                              : "get" + d.substr(3)
                          ]
                        : !1);
                (d = n[f][2]),
                  (this._initialRotations[f] =
                    (this._func[d]
                      ? this._func[d].call(this._target)
                      : this._target[d]) || 0),
                  this._overwriteProps.push(d);
              }
            return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
          },
          set: function (b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m = this._segCount,
              n = this._func,
              o = this._target,
              p = b !== this._startRatio;
            if (this._timeRes) {
              if (
                ((k = this._lengths),
                (l = this._curSeg),
                (b *= this._length),
                (e = this._li),
                b > this._l2 && m - 1 > e)
              ) {
                for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; );
                (this._l1 = k[e - 1]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s2 = l[(this._s1 = this._si = 0)]);
              } else if (b < this._l1 && e > 0) {
                for (; e > 0 && (this._l1 = k[--e]) >= b; );
                0 === e && b < this._l1 ? (this._l1 = 0) : e++,
                  (this._l2 = k[e]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s1 = l[(this._si = l.length - 1) - 1] || 0),
                  (this._s2 = l[this._si]);
              }
              if (
                ((c = e),
                (b -= this._l1),
                (e = this._si),
                b > this._s2 && e < l.length - 1)
              ) {
                for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; );
                (this._s1 = l[e - 1]), (this._si = e);
              } else if (b < this._s1 && e > 0) {
                for (; e > 0 && (this._s1 = l[--e]) >= b; );
                0 === e && b < this._s1 ? (this._s1 = 0) : e++,
                  (this._s2 = l[e]),
                  (this._si = e);
              }
              h =
                (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
            } else
              (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0),
                (h = (b - c * (1 / m)) * m);
            for (d = 1 - h, e = this._props.length; --e > -1; )
              (f = this._props[e]),
                (g = this._beziers[f][c]),
                (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a),
                this._mod[f] && (i = this._mod[f](i, o)),
                n[f] ? o[f](i) : (o[f] = i);
            if (this._autoRotate) {
              var q,
                r,
                s,
                t,
                u,
                v,
                w,
                x = this._autoRotate;
              for (e = x.length; --e > -1; )
                (f = x[e][2]),
                  (v = x[e][3] || 0),
                  (w = x[e][4] === !0 ? 1 : a),
                  (g = this._beziers[x[e][0]]),
                  (q = this._beziers[x[e][1]]),
                  g &&
                    q &&
                    ((g = g[c]),
                    (q = q[c]),
                    (r = g.a + (g.b - g.a) * h),
                    (t = g.b + (g.c - g.b) * h),
                    (r += (t - r) * h),
                    (t += (g.c + (g.d - g.c) * h - t) * h),
                    (s = q.a + (q.b - q.a) * h),
                    (u = q.b + (q.c - q.b) * h),
                    (s += (u - s) * h),
                    (u += (q.c + (q.d - q.c) * h - u) * h),
                    (i = p
                      ? Math.atan2(u - s, t - r) * w + v
                      : this._initialRotations[e]),
                    this._mod[f] && (i = this._mod[f](i, o)),
                    n[f] ? o[f](i) : (o[f] = i));
            }
          },
        }),
        q = p.prototype;
      (p.bezierThrough = l),
        (p.cubicToQuadratic = i),
        (p._autoCSS = !0),
        (p.quadraticToCubic = function (a, b, c) {
          return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }),
        (p._cssRegister = function () {
          var a = f.CSSPlugin;
          if (a) {
            var b = a._internals,
              c = b._parseToProxy,
              d = b._setPluginRatio,
              e = b.CSSPropTween;
            b._registerComplexSpecialProp("bezier", {
              parser: function (a, b, f, g, h, i) {
                b instanceof Array && (b = { values: b }), (i = new p());
                var j,
                  k,
                  l,
                  m = b.values,
                  n = m.length - 1,
                  o = [],
                  q = {};
                if (0 > n) return h;
                for (j = 0; n >= j; j++)
                  (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
                for (k in b) q[k] = b[k];
                return (
                  (q.values = o),
                  (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                  (h.data = l),
                  (h.plugin = i),
                  (h.setRatio = d),
                  0 === q.autoRotate && (q.autoRotate = !0),
                  !q.autoRotate ||
                    q.autoRotate instanceof Array ||
                    ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)),
                    (q.autoRotate =
                      null != l.end.left
                        ? [["left", "top", "rotation", j, !1]]
                        : null != l.end.x
                        ? [["x", "y", "rotation", j, !1]]
                        : !1)),
                  q.autoRotate &&
                    (g._transform || g._enableTransforms(!1),
                    (l.autoRotate = g._target._gsTransform),
                    (l.proxy.rotation = l.autoRotate.rotation || 0),
                    g._overwriteProps.push("rotation")),
                  i._onInitTween(l.proxy, q, g._tween),
                  h
                );
              },
            });
          }
        }),
        (q._mod = function (a) {
          for (var b, c = this._overwriteProps, d = c.length; --d > -1; )
            (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
        }),
        (q._kill = function (a) {
          var b,
            c,
            d = this._props;
          for (b in this._beziers)
            if (b in a)
              for (
                delete this._beziers[b], delete this._func[b], c = d.length;
                --c > -1;

              )
                d[c] === b && d.splice(c, 1);
          if ((d = this._autoRotate))
            for (c = d.length; --c > -1; ) a[d[c][2]] && d.splice(c, 1);
          return this._super._kill.call(this, a);
        });
    })(),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (a, b) {
        var c,
          d,
          e,
          f,
          g = function () {
            a.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = g.prototype.setRatio);
          },
          h = _gsScope._gsDefine.globals,
          i = {},
          j = (g.prototype = new a("css"));
        (j.constructor = g),
          (g.version = "1.20.3"),
          (g.API = 2),
          (g.defaultTransformPerspective = 0),
          (g.defaultSkewType = "compensated"),
          (g.defaultSmoothOrigin = !0),
          (j = "px"),
          (g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: "",
          });
        var k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          w = /(?:\d|\-|\+|=|#|\.)*/g,
          x = /opacity *= *([^)]*)/i,
          y = /opacity:([^;]*)/i,
          z = /alpha\(opacity *=.+?\)/i,
          A = /^(rgb|hsl)/,
          B = /([A-Z])/g,
          C = /-([a-z])/gi,
          D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          E = function (a, b) {
            return b.toUpperCase();
          },
          F = /(?:Left|Right|Width)/i,
          G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          I = /,(?=[^\)]*(?:\(|$))/gi,
          J = /[\s,\(]/i,
          K = Math.PI / 180,
          L = 180 / Math.PI,
          M = {},
          N = { style: {} },
          O = _gsScope.document || {
            createElement: function () {
              return N;
            },
          },
          P = function (a, b) {
            return O.createElementNS
              ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a)
              : O.createElement(a);
          },
          Q = P("div"),
          R = P("img"),
          S = (g._internals = { _specialProps: i }),
          T = (_gsScope.navigator || {}).userAgent || "",
          U = (function () {
            var a = T.indexOf("Android"),
              b = P("a");
            return (
              (m =
                -1 !== T.indexOf("Safari") &&
                -1 === T.indexOf("Chrome") &&
                (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3)),
              (o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6),
              (n = -1 !== T.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) &&
                (p = parseFloat(RegExp.$1)),
              b
                ? ((b.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(b.style.opacity))
                : !1
            );
          })(),
          V = function (a) {
            return x.test(
              "string" == typeof a
                ? a
                : (a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          W = function (a) {
            _gsScope.console && console.log(a);
          },
          X = "",
          Y = "",
          Z = function (a, b) {
            b = b || Q;
            var c,
              d,
              e = b.style;
            if (void 0 !== e[a]) return a;
            for (
              a = a.charAt(0).toUpperCase() + a.substr(1),
                c = ["O", "Moz", "ms", "Ms", "Webkit"],
                d = 5;
              --d > -1 && void 0 === e[c[d] + a];

            );
            return d >= 0
              ? ((Y = 3 === d ? "ms" : c[d]),
                (X = "-" + Y.toLowerCase() + "-"),
                Y + a)
              : null;
          },
          $ = O.defaultView ? O.defaultView.getComputedStyle : function () {},
          _ = (g.getStyle = function (a, b, c, d, e) {
            var f;
            return U || "opacity" !== b
              ? (!d && a.style[b]
                  ? (f = a.style[b])
                  : (c = c || $(a))
                  ? (f =
                      c[b] ||
                      c.getPropertyValue(b) ||
                      c.getPropertyValue(b.replace(B, "-$1").toLowerCase()))
                  : a.currentStyle && (f = a.currentStyle[b]),
                null == e ||
                (f && "none" !== f && "auto" !== f && "auto auto" !== f)
                  ? f
                  : e)
              : V(a);
          }),
          aa = (S.convertToPixels = function (a, c, d, e, f) {
            if ("px" === e || (!e && "lineHeight" !== c)) return d;
            if ("auto" === e || !d) return 0;
            var h,
              i,
              j,
              k = F.test(c),
              l = a,
              m = Q.style,
              n = 0 > d,
              o = 1 === d;
            if ((n && (d = -d), o && (d *= 100), "lineHeight" !== c || e))
              if ("%" === e && -1 !== c.indexOf("border"))
                h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
              else {
                if (
                  ((m.cssText =
                    "border:0 solid red;position:" +
                    _(a, "position") +
                    ";line-height:0;"),
                  "%" !== e &&
                    l.appendChild &&
                    "v" !== e.charAt(0) &&
                    "rem" !== e)
                )
                  m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                else {
                  if (
                    ((l = a.parentNode || O.body),
                    -1 !== _(l, "display").indexOf("flex") &&
                      (m.position = "absolute"),
                    (i = l._gsCache),
                    (j = b.ticker.frame),
                    i && k && i.time === j)
                  )
                    return (i.width * d) / 100;
                  m[k ? "width" : "height"] = d + e;
                }
                l.appendChild(Q),
                  (h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"])),
                  l.removeChild(Q),
                  k &&
                    "%" === e &&
                    g.cacheWidths !== !1 &&
                    ((i = l._gsCache = l._gsCache || {}),
                    (i.time = j),
                    (i.width = (h / d) * 100)),
                  0 !== h || f || (h = aa(a, c, d, e, !0));
              }
            else
              (i = $(a).lineHeight),
                (a.style.lineHeight = d),
                (h = parseFloat($(a).lineHeight)),
                (a.style.lineHeight = i);
            return o && (h /= 100), n ? -h : h;
          }),
          ba = (S.calculateOffset = function (a, b, c) {
            if ("absolute" !== _(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top",
              e = _(a, "margin" + d, c);
            return (
              a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
            );
          }),
          ca = function (a, b) {
            var c,
              d,
              e,
              f = {};
            if ((b = b || $(a, null)))
              if ((c = b.length))
                for (; --c > -1; )
                  (e = b[c]),
                    (-1 === e.indexOf("-transform") || Da === e) &&
                      (f[e.replace(C, E)] = b.getPropertyValue(e));
              else
                for (c in b)
                  (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
            else if ((b = a.currentStyle || a.style))
              for (c in b)
                "string" == typeof c &&
                  void 0 === f[c] &&
                  (f[c.replace(C, E)] = b[c]);
            return (
              U || (f.opacity = V(a)),
              (d = Ra(a, b, !1)),
              (f.rotation = d.rotation),
              (f.skewX = d.skewX),
              (f.scaleX = d.scaleX),
              (f.scaleY = d.scaleY),
              (f.x = d.x),
              (f.y = d.y),
              Fa &&
                ((f.z = d.z),
                (f.rotationX = d.rotationX),
                (f.rotationY = d.rotationY),
                (f.scaleZ = d.scaleZ)),
              f.filters && delete f.filters,
              f
            );
          },
          da = function (a, b, c, d, e) {
            var f,
              g,
              h,
              i = {},
              j = a.style;
            for (g in c)
              "cssText" !== g &&
                "length" !== g &&
                isNaN(g) &&
                (b[g] !== (f = c[g]) || (e && e[g])) &&
                -1 === g.indexOf("Origin") &&
                ("number" == typeof f || "string" == typeof f) &&
                ((i[g] =
                  "auto" !== f || ("left" !== g && "top" !== g)
                    ? ("" !== f && "auto" !== f && "none" !== f) ||
                      "string" != typeof b[g] ||
                      "" === b[g].replace(v, "")
                      ? f
                      : 0
                    : ba(a, g)),
                void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
            if (d) for (g in d) "className" !== g && (i[g] = d[g]);
            return { difs: i, firstMPT: h };
          },
          ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ga = function (a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase())
              return (c || $(a))[b] || 0;
            if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
              e = ea[b],
              f = e.length;
            for (c = c || $(a, null); --f > -1; )
              (d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0),
                (d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0);
            return d;
          },
          ha = function (a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a)
              return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c,
              d = a.split(" "),
              e =
                -1 !== a.indexOf("left")
                  ? "0%"
                  : -1 !== a.indexOf("right")
                  ? "100%"
                  : d[0],
              f =
                -1 !== a.indexOf("top")
                  ? "0%"
                  : -1 !== a.indexOf("bottom")
                  ? "100%"
                  : d[1];
            if (d.length > 3 && !b) {
              for (
                d = a.split(", ").join(",").split(","), a = [], c = 0;
                c < d.length;
                c++
              )
                a.push(ha(d[c]));
              return a.join(",");
            }
            return (
              null == f
                ? (f = "center" === e ? "50%" : "0")
                : "center" === f && (f = "50%"),
              ("center" === e ||
                (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) &&
                (e = "50%"),
              (a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
              b &&
                ((b.oxp = -1 !== e.indexOf("%")),
                (b.oyp = -1 !== f.indexOf("%")),
                (b.oxr = "=" === e.charAt(1)),
                (b.oyr = "=" === f.charAt(1)),
                (b.ox = parseFloat(e.replace(v, ""))),
                (b.oy = parseFloat(f.replace(v, ""))),
                (b.v = a)),
              b || a
            );
          },
          ia = function (a, b) {
            return (
              "function" == typeof a && (a = a(r, q)),
              "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2))
                : parseFloat(a) - parseFloat(b) || 0
            );
          },
          ja = function (a, b) {
            return (
              "function" == typeof a && (a = a(r, q)),
              null == a
                ? b
                : "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b
                : parseFloat(a) || 0
            );
          },
          ka = function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              i,
              j = 1e-6;
            return (
              "function" == typeof a && (a = a(r, q)),
              null == a
                ? (h = b)
                : "number" == typeof a
                ? (h = a)
                : ((e = 360),
                  (f = a.split("_")),
                  (i = "=" === a.charAt(1)),
                  (g =
                    (i
                      ? parseInt(a.charAt(0) + "1", 10) *
                        parseFloat(f[0].substr(2))
                      : parseFloat(f[0])) *
                      (-1 === a.indexOf("rad") ? 1 : L) -
                    (i ? 0 : b)),
                  f.length &&
                    (d && (d[c] = b + g),
                    -1 !== a.indexOf("short") &&
                      ((g %= e),
                      g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                    -1 !== a.indexOf("_cw") && 0 > g
                      ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e)
                      : -1 !== a.indexOf("ccw") &&
                        g > 0 &&
                        (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                  (h = b + g)),
              j > h && h > -j && (h = 0),
              h
            );
          },
          la = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ma = function (a, b, c) {
            return (
              (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a),
              (255 *
                (1 > 6 * a
                  ? b + (c - b) * a * 6
                  : 0.5 > a
                  ? c
                  : 2 > 3 * a
                  ? b + (c - b) * (2 / 3 - a) * 6
                  : b) +
                0.5) |
                0
            );
          },
          na = (g.parseColor = function (a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
              if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
              else {
                if (
                  ("," === a.charAt(a.length - 1) &&
                    (a = a.substr(0, a.length - 1)),
                  la[a])
                )
                  c = la[a];
                else if ("#" === a.charAt(0))
                  4 === a.length &&
                    ((d = a.charAt(1)),
                    (e = a.charAt(2)),
                    (f = a.charAt(3)),
                    (a = "#" + d + d + e + e + f + f)),
                    (a = parseInt(a.substr(1), 16)),
                    (c = [a >> 16, (a >> 8) & 255, 255 & a]);
                else if ("hsl" === a.substr(0, 3))
                  if (((c = m = a.match(s)), b)) {
                    if (-1 !== a.indexOf("=")) return a.match(t);
                  } else
                    (g = (Number(c[0]) % 360) / 360),
                      (h = Number(c[1]) / 100),
                      (i = Number(c[2]) / 100),
                      (e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
                      (d = 2 * i - e),
                      c.length > 3 && (c[3] = Number(c[3])),
                      (c[0] = ma(g + 1 / 3, d, e)),
                      (c[1] = ma(g, d, e)),
                      (c[2] = ma(g - 1 / 3, d, e));
                else c = a.match(s) || la.transparent;
                (c[0] = Number(c[0])),
                  (c[1] = Number(c[1])),
                  (c[2] = Number(c[2])),
                  c.length > 3 && (c[3] = Number(c[3]));
              }
            else c = la.black;
            return (
              b &&
                !m &&
                ((d = c[0] / 255),
                (e = c[1] / 255),
                (f = c[2] / 255),
                (j = Math.max(d, e, f)),
                (k = Math.min(d, e, f)),
                (i = (j + k) / 2),
                j === k
                  ? (g = h = 0)
                  : ((l = j - k),
                    (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)),
                    (g =
                      j === d
                        ? (e - f) / l + (f > e ? 6 : 0)
                        : j === e
                        ? (f - d) / l + 2
                        : (d - e) / l + 4),
                    (g *= 60)),
                (c[0] = (g + 0.5) | 0),
                (c[1] = (100 * h + 0.5) | 0),
                (c[2] = (100 * i + 0.5) | 0)),
              c
            );
          }),
          oa = function (a, b) {
            var c,
              d,
              e,
              f = a.match(pa) || [],
              g = 0,
              h = "";
            if (!f.length) return a;
            for (c = 0; c < f.length; c++)
              (d = f[c]),
                (e = a.substr(g, a.indexOf(d, g) - g)),
                (g += e.length + d.length),
                (d = na(d, b)),
                3 === d.length && d.push(1),
                (h +=
                  e +
                  (b
                    ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                    : "rgba(" + d.join(",")) +
                  ")");
            return h + a.substr(g);
          },
          pa =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in la) pa += "|" + j + "\\b";
        (pa = new RegExp(pa + ")", "gi")),
          (g.colorStringFilter = function (a) {
            var b,
              c = a[0] + " " + a[1];
            pa.test(c) &&
              ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")),
              (a[0] = oa(a[0], b)),
              (a[1] = oa(a[1], b))),
              (pa.lastIndex = 0);
          }),
          b.defaultStringFilter ||
            (b.defaultStringFilter = g.colorStringFilter);
        var qa = function (a, b, c, d) {
            if (null == a)
              return function (a) {
                return a;
              };
            var e,
              f = b ? (a.match(pa) || [""])[0] : "",
              g = a.split(f).join("").match(u) || [],
              h = a.substr(0, a.indexOf(g[0])),
              i = ")" === a.charAt(a.length - 1) ? ")" : "",
              j = -1 !== a.indexOf(" ") ? " " : ",",
              k = g.length,
              l = k > 0 ? g[0].replace(s, "") : "";
            return k
              ? (e = b
                  ? function (a) {
                      var b, m, n, o;
                      if ("number" == typeof a) a += l;
                      else if (d && I.test(a)) {
                        for (
                          o = a.replace(I, "|").split("|"), n = 0;
                          n < o.length;
                          n++
                        )
                          o[n] = e(o[n]);
                        return o.join(",");
                      }
                      if (
                        ((b = (a.match(pa) || [f])[0]),
                        (m = a.split(b).join("").match(u) || []),
                        (n = m.length),
                        k > n--)
                      )
                        for (; ++n < k; )
                          m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                      return (
                        h +
                        m.join(j) +
                        j +
                        b +
                        i +
                        (-1 !== a.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (a) {
                      var b, f, m;
                      if ("number" == typeof a) a += l;
                      else if (d && I.test(a)) {
                        for (
                          f = a.replace(I, "|").split("|"), m = 0;
                          m < f.length;
                          m++
                        )
                          f[m] = e(f[m]);
                        return f.join(",");
                      }
                      if (((b = a.match(u) || []), (m = b.length), k > m--))
                        for (; ++m < k; )
                          b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                      return h + b.join(j) + i;
                    })
              : function (a) {
                  return a;
                };
          },
          ra = function (a) {
            return (
              (a = a.split(",")),
              function (b, c, d, e, f, g, h) {
                var i,
                  j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++)
                  h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
                return e.parse(b, h, f, g);
              }
            );
          },
          sa =
            ((S._setPluginRatio = function (a) {
              this.plugin.setRatio(a);
              for (
                var b,
                  c,
                  d,
                  e,
                  f,
                  g = this.data,
                  h = g.proxy,
                  i = g.firstMPT,
                  j = 1e-6;
                i;

              )
                (b = h[i.v]),
                  i.r ? (b = Math.round(b)) : j > b && b > -j && (b = 0),
                  (i.t[i.p] = b),
                  (i = i._next);
              if (
                (g.autoRotate &&
                  (g.autoRotate.rotation = g.mod
                    ? g.mod(h.rotation, this.t)
                    : h.rotation),
                1 === a || 0 === a)
              )
                for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                  if (((c = i.t), c.type)) {
                    if (1 === c.type) {
                      for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)
                        e += c["xn" + d] + c["xs" + (d + 1)];
                      c[f] = e;
                    }
                  } else c[f] = c.s + c.xs0;
                  i = i._next;
                }
            }),
            function (a, b, c, d, e) {
              (this.t = a),
                (this.p = b),
                (this.v = c),
                (this.r = e),
                d && ((d._prev = this), (this._next = d));
            }),
          ta =
            ((S._parseToProxy = function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j,
                k,
                l = d,
                m = {},
                n = {},
                o = c._transform,
                p = M;
              for (
                c._transform = null,
                  M = b,
                  d = k = c.parse(a, b, d, e),
                  M = p,
                  f &&
                    ((c._transform = o),
                    l && ((l._prev = null), l._prev && (l._prev._next = null)));
                d && d !== l;

              ) {
                if (
                  d.type <= 1 &&
                  ((h = d.p),
                  (n[h] = d.s + d.c),
                  (m[h] = d.s),
                  f || ((j = new sa(d, "s", h, j, d.r)), (d.c = 0)),
                  1 === d.type)
                )
                  for (g = d.l; --g > 0; )
                    (i = "xn" + g),
                      (h = d.p + "_" + i),
                      (n[h] = d.data[i]),
                      (m[h] = d[i]),
                      f || (j = new sa(d, i, h, j, d.rxp[i]));
                d = d._next;
              }
              return { proxy: m, end: n, firstMPT: j, pt: k };
            }),
            (S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
              (this.t = a),
                (this.p = b),
                (this.s = d),
                (this.c = e),
                (this.n = i || b),
                a instanceof ta || f.push(this.n),
                (this.r = j),
                (this.type = h || 0),
                k && ((this.pr = k), (c = !0)),
                (this.b = void 0 === l ? d : l),
                (this.e = void 0 === m ? d + e : m),
                g && ((this._next = g), (g._prev = this));
            })),
          ua = function (a, b, c, d, e, f) {
            var g = new ta(a, b, c, d - c, e, -1, f);
            return (g.b = c), (g.e = g.xs0 = d), g;
          },
          va = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
            (c = c || f || ""),
              "function" == typeof d && (d = d(r, q)),
              (h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
              (d += ""),
              e &&
                pa.test(d + c) &&
                ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
            var m,
              n,
              o,
              p,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C,
              D = c.split(", ").join(",").split(" "),
              E = d.split(", ").join(",").split(" "),
              F = D.length,
              G = k !== !1;
            for (
              (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
                (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl")
                  ? ((D = D.join(" ").replace(I, ", ").split(" ")),
                    (E = E.join(" ").replace(I, ", ").split(" ")))
                  : ((D = D.join(" ").split(",").join(", ").split(" ")),
                    (E = E.join(" ").split(",").join(", ").split(" "))),
                (F = D.length)),
                F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
                h.plugin = j,
                h.setRatio = l,
                pa.lastIndex = 0,
                m = 0;
              F > m;
              m++
            )
              if (((p = D[m]), (u = E[m]), (x = parseFloat(p)), x || 0 === x))
                h.appendXtra(
                  "",
                  x,
                  ia(u, x),
                  u.replace(t, ""),
                  G && -1 !== u.indexOf("px"),
                  !0
                );
              else if (e && pa.test(p))
                (B = u.indexOf(")") + 1),
                  (B = ")" + (B ? u.substr(B) : "")),
                  (C = -1 !== u.indexOf("hsl") && U),
                  (z = u),
                  (p = na(p, C)),
                  (u = na(u, C)),
                  (y = p.length + u.length > 6),
                  y && !U && 0 === u[3]
                    ? ((h["xs" + h.l] += h.l ? " transparent" : "transparent"),
                      (h.e = h.e.split(E[m]).join("transparent")))
                    : (U || (y = !1),
                      C
                        ? h
                            .appendXtra(
                              z.substr(0, z.indexOf("hsl")) +
                                (y ? "hsla(" : "hsl("),
                              p[0],
                              ia(u[0], p[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", p[1], ia(u[1], p[1]), "%,", !1)
                            .appendXtra(
                              "",
                              p[2],
                              ia(u[2], p[2]),
                              y ? "%," : "%" + B,
                              !1
                            )
                        : h
                            .appendXtra(
                              z.substr(0, z.indexOf("rgb")) +
                                (y ? "rgba(" : "rgb("),
                              p[0],
                              u[0] - p[0],
                              ",",
                              !0,
                              !0
                            )
                            .appendXtra("", p[1], u[1] - p[1], ",", !0)
                            .appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0),
                      y &&
                        ((p = p.length < 4 ? 1 : p[3]),
                        h.appendXtra(
                          "",
                          p,
                          (u.length < 4 ? 1 : u[3]) - p,
                          B,
                          !1
                        ))),
                  (pa.lastIndex = 0);
              else if ((v = p.match(s))) {
                if (((w = u.match(t)), !w || w.length !== v.length)) return h;
                for (o = 0, n = 0; n < v.length; n++)
                  (A = v[n]),
                    (z = p.indexOf(A, o)),
                    h.appendXtra(
                      p.substr(o, z - o),
                      Number(A),
                      ia(w[n], A),
                      "",
                      G && "px" === p.substr(z + A.length, 2),
                      0 === n
                    ),
                    (o = z + A.length);
                h["xs" + h.l] += p.substr(o);
              } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
              for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++)
                B += h["xs" + m] + h.data["xn" + m];
              h.e = B + h["xs" + m];
            }
            return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
          }),
          wa = 9;
        for (j = ta.prototype, j.l = j.pr = 0; --wa > 0; )
          (j["xn" + wa] = 0), (j["xs" + wa] = "");
        (j.xs0 = ""),
          (j._next =
            j._prev =
            j.xfirst =
            j.data =
            j.plugin =
            j.setRatio =
            j.rxp =
              null),
          (j.appendXtra = function (a, b, c, d, e, f) {
            var g = this,
              h = g.l;
            return (
              (g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
              c || 0 === h || g.plugin
                ? (g.l++,
                  (g.type = g.setRatio ? 2 : 1),
                  (g["xs" + g.l] = d || ""),
                  h > 0
                    ? ((g.data["xn" + h] = b + c),
                      (g.rxp["xn" + h] = e),
                      (g["xn" + h] = b),
                      g.plugin ||
                        ((g.xfirst = new ta(
                          g,
                          "xn" + h,
                          b,
                          c,
                          g.xfirst || g,
                          0,
                          g.n,
                          e,
                          g.pr
                        )),
                        (g.xfirst.xs0 = 0)),
                      g)
                    : ((g.data = { s: b + c }),
                      (g.rxp = {}),
                      (g.s = b),
                      (g.c = c),
                      (g.r = e),
                      g))
                : ((g["xs" + h] += b + (d || "")), g)
            );
          });
        var xa = function (a, b) {
            (b = b || {}),
              (this.p = b.prefix ? Z(a) || a : a),
              (i[a] = i[this.p] = this),
              (this.format =
                b.formatter ||
                qa(b.defaultValue, b.color, b.collapsible, b.multi)),
              b.parser && (this.parse = b.parser),
              (this.clrs = b.color),
              (this.multi = b.multi),
              (this.keyword = b.keyword),
              (this.dflt = b.defaultValue),
              (this.pr = b.priority || 0);
          },
          ya = (S._registerComplexSpecialProp = function (a, b, c) {
            "object" != typeof b && (b = { parser: c });
            var d,
              e,
              f = a.split(","),
              g = b.defaultValue;
            for (c = c || [g], d = 0; d < f.length; d++)
              (b.prefix = 0 === d && b.prefix),
                (b.defaultValue = c[d] || g),
                (e = new xa(f[d], b));
          }),
          za = (S._registerPluginProp = function (a) {
            if (!i[a]) {
              var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
              ya(a, {
                parser: function (a, c, d, e, f, g, j) {
                  var k = h.com.greensock.plugins[b];
                  return k
                    ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j))
                    : (W("Error: " + b + " js file not loaded."), f);
                },
              });
            }
          });
        (j = xa.prototype),
          (j.parseComplex = function (a, b, c, d, e, f) {
            var g,
              h,
              i,
              j,
              k,
              l,
              m = this.keyword;
            if (
              (this.multi &&
                (I.test(c) || I.test(b)
                  ? ((h = b.replace(I, "|").split("|")),
                    (i = c.replace(I, "|").split("|")))
                  : m && ((h = [b]), (i = [c]))),
              i)
            ) {
              for (
                j = i.length > h.length ? i.length : h.length, g = 0;
                j > g;
                g++
              )
                (b = h[g] = h[g] || this.dflt),
                  (c = i[g] = i[g] || this.dflt),
                  m &&
                    ((k = b.indexOf(m)),
                    (l = c.indexOf(m)),
                    k !== l &&
                      (-1 === l
                        ? (h[g] = h[g].split(m).join(""))
                        : -1 === k && (h[g] += " " + m)));
              (b = h.join(", ")), (c = i.join(", "));
            }
            return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
          }),
          (j.parse = function (a, b, c, d, f, g, h) {
            return this.parseComplex(
              a.style,
              this.format(_(a, this.p, e, !1, this.dflt)),
              this.format(b),
              f,
              g
            );
          }),
          (g.registerSpecialProp = function (a, b, c) {
            ya(a, {
              parser: function (a, d, e, f, g, h, i) {
                var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
              },
              priority: c,
            });
          }),
          (g.useSVGTransformAttr = !0);
        var Aa,
          Ba =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          Ca = Z("transform"),
          Da = X + "transform",
          Ea = Z("transformOrigin"),
          Fa = null !== Z("perspective"),
          Ga = (S.Transform = function () {
            (this.perspective = parseFloat(g.defaultTransformPerspective) || 0),
              (this.force3D =
                g.defaultForce3D !== !1 && Fa
                  ? g.defaultForce3D || "auto"
                  : !1);
          }),
          Ha = _gsScope.SVGElement,
          Ia = function (a, b, c) {
            var d,
              e = O.createElementNS("http://www.w3.org/2000/svg", a),
              f = /([a-z])([A-Z])/g;
            for (d in c)
              e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e;
          },
          Ja = O.documentElement || {},
          Ka = (function () {
            var a,
              b,
              c,
              d = p || (/Android/i.test(T) && !_gsScope.chrome);
            return (
              O.createElementNS &&
                !d &&
                ((a = Ia("svg", Ja)),
                (b = Ia("rect", a, { width: 100, height: 50, x: 100 })),
                (c = b.getBoundingClientRect().width),
                (b.style[Ea] = "50% 50%"),
                (b.style[Ca] = "scaleX(0.5)"),
                (d = c === b.getBoundingClientRect().width && !(n && Fa)),
                Ja.removeChild(a)),
              d
            );
          })(),
          La = function (a, b, c, d, e, f) {
            var h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v = a._gsTransform,
              w = Qa(a, !0);
            v && ((t = v.xOrigin), (u = v.yOrigin)),
              (!d || (h = d.split(" ")).length < 2) &&
                ((n = a.getBBox()),
                0 === n.x &&
                  0 === n.y &&
                  n.width + n.height === 0 &&
                  (n = {
                    x:
                      parseFloat(
                        a.hasAttribute("x")
                          ? a.getAttribute("x")
                          : a.hasAttribute("cx")
                          ? a.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        a.hasAttribute("y")
                          ? a.getAttribute("y")
                          : a.hasAttribute("cy")
                          ? a.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (b = ha(b).split(" ")),
                (h = [
                  (-1 !== b[0].indexOf("%")
                    ? (parseFloat(b[0]) / 100) * n.width
                    : parseFloat(b[0])) + n.x,
                  (-1 !== b[1].indexOf("%")
                    ? (parseFloat(b[1]) / 100) * n.height
                    : parseFloat(b[1])) + n.y,
                ])),
              (c.xOrigin = k = parseFloat(h[0])),
              (c.yOrigin = l = parseFloat(h[1])),
              d &&
                w !== Pa &&
                ((m = w[0]),
                (n = w[1]),
                (o = w[2]),
                (p = w[3]),
                (q = w[4]),
                (r = w[5]),
                (s = m * p - n * o),
                s &&
                  ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s),
                  (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s),
                  (k = c.xOrigin = h[0] = i),
                  (l = c.yOrigin = h[1] = j))),
              v &&
                (f &&
                  ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
                e || (e !== !1 && g.defaultSmoothOrigin !== !1)
                  ? ((i = k - t),
                    (j = l - u),
                    (v.xOffset += i * w[0] + j * w[2] - i),
                    (v.yOffset += i * w[1] + j * w[3] - j))
                  : (v.xOffset = v.yOffset = 0)),
              f || a.setAttribute("data-svg-origin", h.join(" "));
          },
          Ma = function (a) {
            var b,
              c = P(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              d = this.parentNode,
              e = this.nextSibling,
              f = this.style.cssText;
            if (
              (Ja.appendChild(c),
              c.appendChild(this),
              (this.style.display = "block"),
              a)
            )
              try {
                (b = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Ma);
              } catch (g) {}
            else this._originalGetBBox && (b = this._originalGetBBox());
            return (
              e ? d.insertBefore(this, e) : d.appendChild(this),
              Ja.removeChild(c),
              (this.style.cssText = f),
              b
            );
          },
          Na = function (a) {
            try {
              return a.getBBox();
            } catch (b) {
              return Ma.call(a, !0);
            }
          },
          Oa = function (a) {
            return !(
              !Ha ||
              !a.getCTM ||
              (a.parentNode && !a.ownerSVGElement) ||
              !Na(a)
            );
          },
          Pa = [1, 0, 0, 1, 0, 0],
          Qa = function (a, b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i = a._gsTransform || new Ga(),
              j = 1e5,
              k = a.style;
            if (
              (Ca
                ? (d = _(a, Da, null, !0))
                : a.currentStyle &&
                  ((d = a.currentStyle.filter.match(G)),
                  (d =
                    d && 4 === d.length
                      ? [
                          d[0].substr(4),
                          Number(d[2].substr(4)),
                          Number(d[1].substr(4)),
                          d[3].substr(4),
                          i.x || 0,
                          i.y || 0,
                        ].join(",")
                      : "")),
              (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
              !Ca ||
                (!(h = !$(a) || "none" === $(a).display) && a.parentNode) ||
                (h && ((f = k.display), (k.display = "block")),
                a.parentNode || ((g = 1), Ja.appendChild(a)),
                (d = _(a, Da, null, !0)),
                (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                f ? (k.display = f) : h && Va(k, "display"),
                g && Ja.removeChild(a)),
              (i.svg || (a.getCTM && Oa(a))) &&
                (c &&
                  -1 !== (k[Ca] + "").indexOf("matrix") &&
                  ((d = k[Ca]), (c = 0)),
                (e = a.getAttribute("transform")),
                c &&
                  e &&
                  (-1 !== e.indexOf("matrix")
                    ? ((d = e), (c = 0))
                    : -1 !== e.indexOf("translate") &&
                      ((d =
                        "matrix(1,0,0,1," +
                        e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") +
                        ")"),
                      (c = 0)))),
              c)
            )
              return Pa;
            for (e = (d || "").match(s) || [], wa = e.length; --wa > -1; )
              (f = Number(e[wa])),
                (e[wa] = (g = f - (f |= 0))
                  ? ((g * j + (0 > g ? -0.5 : 0.5)) | 0) / j + f
                  : f);
            return b && e.length > 6
              ? [e[0], e[1], e[4], e[5], e[12], e[13]]
              : e;
          },
          Ra = (S.getTransform = function (a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;
            var f,
              h,
              i,
              j,
              k,
              l,
              m = d ? a._gsTransform || new Ga() : new Ga(),
              n = m.scaleX < 0,
              o = 2e-5,
              p = 1e5,
              q = Fa
                ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) ||
                  m.zOrigin ||
                  0
                : 0,
              r = parseFloat(g.defaultTransformPerspective) || 0;
            if (
              ((m.svg = !(!a.getCTM || !Oa(a))),
              m.svg &&
                (La(
                  a,
                  _(a, Ea, c, !1, "50% 50%") + "",
                  m,
                  a.getAttribute("data-svg-origin")
                ),
                (Aa = g.useSVGTransformAttr || Ka)),
              (f = Qa(a)),
              f !== Pa)
            ) {
              if (16 === f.length) {
                var s,
                  t,
                  u,
                  v,
                  w,
                  x = f[0],
                  y = f[1],
                  z = f[2],
                  A = f[3],
                  B = f[4],
                  C = f[5],
                  D = f[6],
                  E = f[7],
                  F = f[8],
                  G = f[9],
                  H = f[10],
                  I = f[12],
                  J = f[13],
                  K = f[14],
                  M = f[11],
                  N = Math.atan2(D, H);
                m.zOrigin &&
                  ((K = -m.zOrigin),
                  (I = F * K - f[12]),
                  (J = G * K - f[13]),
                  (K = H * K + m.zOrigin - f[14])),
                  (m.rotationX = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = B * v + F * w),
                    (t = C * v + G * w),
                    (u = D * v + H * w),
                    (F = B * -w + F * v),
                    (G = C * -w + G * v),
                    (H = D * -w + H * v),
                    (M = E * -w + M * v),
                    (B = s),
                    (C = t),
                    (D = u)),
                  (N = Math.atan2(-z, H)),
                  (m.rotationY = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = x * v - F * w),
                    (t = y * v - G * w),
                    (u = z * v - H * w),
                    (G = y * w + G * v),
                    (H = z * w + H * v),
                    (M = A * w + M * v),
                    (x = s),
                    (y = t),
                    (z = u)),
                  (N = Math.atan2(y, x)),
                  (m.rotation = N * L),
                  N &&
                    ((v = Math.cos(N)),
                    (w = Math.sin(N)),
                    (s = x * v + y * w),
                    (t = B * v + C * w),
                    (u = F * v + G * w),
                    (y = y * v - x * w),
                    (C = C * v - B * w),
                    (G = G * v - F * w),
                    (x = s),
                    (B = t),
                    (F = u)),
                  m.rotationX &&
                    Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 &&
                    ((m.rotationX = m.rotation = 0),
                    (m.rotationY = 180 - m.rotationY)),
                  (N = Math.atan2(B, C)),
                  (m.scaleX =
                    ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
                  (m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
                  (m.scaleZ =
                    ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
                  (x /= m.scaleX),
                  (B /= m.scaleY),
                  (y /= m.scaleX),
                  (C /= m.scaleY),
                  Math.abs(N) > o
                    ? ((m.skewX = N * L),
                      (B = 0),
                      "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N)))
                    : (m.skewX = 0),
                  (m.perspective = M ? 1 / (0 > M ? -M : M) : 0),
                  (m.x = I),
                  (m.y = J),
                  (m.z = K),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)),
                    (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
              } else if (
                !Fa ||
                e ||
                !f.length ||
                m.x !== f[4] ||
                m.y !== f[5] ||
                (!m.rotationX && !m.rotationY)
              ) {
                var O = f.length >= 6,
                  P = O ? f[0] : 1,
                  Q = f[1] || 0,
                  R = f[2] || 0,
                  S = O ? f[3] : 1;
                (m.x = f[4] || 0),
                  (m.y = f[5] || 0),
                  (i = Math.sqrt(P * P + Q * Q)),
                  (j = Math.sqrt(S * S + R * R)),
                  (k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0),
                  (l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0),
                  (m.scaleX = i),
                  (m.scaleY = j),
                  (m.rotation = k),
                  (m.skewX = l),
                  Fa &&
                    ((m.rotationX = m.rotationY = m.z = 0),
                    (m.perspective = r),
                    (m.scaleZ = 1)),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)),
                    (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
              }
              Math.abs(m.skewX) > 90 &&
                Math.abs(m.skewX) < 270 &&
                (n
                  ? ((m.scaleX *= -1),
                    (m.skewX += m.rotation <= 0 ? 180 : -180),
                    (m.rotation += m.rotation <= 0 ? 180 : -180))
                  : ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
                (m.zOrigin = q);
              for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
            }
            return (
              d &&
                ((a._gsTransform = m),
                m.svg &&
                  (Aa && a.style[Ca]
                    ? b.delayedCall(0.001, function () {
                        Va(a.style, Ca);
                      })
                    : !Aa &&
                      a.getAttribute("transform") &&
                      b.delayedCall(0.001, function () {
                        a.removeAttribute("transform");
                      }))),
              m
            );
          }),
          Sa = function (a) {
            var b,
              c,
              d = this.data,
              e = -d.rotation * K,
              f = e + d.skewX * K,
              g = 1e5,
              h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
              i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
              j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
              k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
              l = this.t.style,
              m = this.t.currentStyle;
            if (m) {
              (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
              var n,
                o,
                q = this.t.offsetWidth,
                r = this.t.offsetHeight,
                s = "absolute" !== m.position,
                t =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  h +
                  ", M12=" +
                  i +
                  ", M21=" +
                  j +
                  ", M22=" +
                  k,
                u = d.x + (q * d.xPercent) / 100,
                v = d.y + (r * d.yPercent) / 100;
              if (
                (null != d.ox &&
                  ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2),
                  (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2),
                  (u += n - (n * h + o * i)),
                  (v += o - (n * j + o * k))),
                s
                  ? ((n = q / 2),
                    (o = r / 2),
                    (t +=
                      ", Dx=" +
                      (n - (n * h + o * i) + u) +
                      ", Dy=" +
                      (o - (n * j + o * k) + v) +
                      ")"))
                  : (t += ", sizingMethod='auto expand')"),
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (l.filter = b.replace(H, t))
                  : (l.filter = t + " " + b),
                (0 === a || 1 === a) &&
                  1 === h &&
                  0 === i &&
                  0 === j &&
                  1 === k &&
                  ((s && -1 === t.indexOf("Dx=0, Dy=0")) ||
                    (x.test(b) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === b.indexOf(b.indexOf("Alpha")) &&
                      l.removeAttribute("filter"))),
                !s)
              ) {
                var y,
                  z,
                  A,
                  B = 8 > p ? 1 : -1;
                for (
                  n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round(
                      (q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 +
                        u
                    ),
                    d.ieOffsetY = Math.round(
                      (r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 +
                        v
                    ),
                    wa = 0;
                  4 > wa;
                  wa++
                )
                  (z = fa[wa]),
                    (y = m[z]),
                    (c =
                      -1 !== y.indexOf("px")
                        ? parseFloat(y)
                        : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0),
                    (A =
                      c !== d[z]
                        ? 2 > wa
                          ? -d.ieOffsetX
                          : -d.ieOffsetY
                        : 2 > wa
                        ? n - d.ieOffsetX
                        : o - d.ieOffsetY),
                    (l[z] =
                      (d[z] = Math.round(
                        c - A * (0 === wa || 2 === wa ? 1 : B)
                      )) + "px");
              }
            }
          },
          Ta =
            (S.set3DTransformRatio =
            S.setTransformRatio =
              function (a) {
                var b,
                  c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  o,
                  p,
                  q,
                  r,
                  s,
                  t,
                  u,
                  v,
                  w,
                  x,
                  y,
                  z = this.data,
                  A = this.t.style,
                  B = z.rotation,
                  C = z.rotationX,
                  D = z.rotationY,
                  E = z.scaleX,
                  F = z.scaleY,
                  G = z.scaleZ,
                  H = z.x,
                  I = z.y,
                  J = z.z,
                  L = z.svg,
                  M = z.perspective,
                  N = z.force3D,
                  O = z.skewY,
                  P = z.skewX;
                if (
                  (O && ((P += O), (B += O)),
                  ((((1 === a || 0 === a) &&
                    "auto" === N &&
                    (this.tween._totalTime === this.tween._totalDuration ||
                      !this.tween._totalTime)) ||
                    !N) &&
                    !J &&
                    !M &&
                    !D &&
                    !C &&
                    1 === G) ||
                    (Aa && L) ||
                    !Fa)
                )
                  return void (B || P || L
                    ? ((B *= K),
                      (x = P * K),
                      (y = 1e5),
                      (c = Math.cos(B) * E),
                      (f = Math.sin(B) * E),
                      (d = Math.sin(B - x) * -F),
                      (g = Math.cos(B - x) * F),
                      x &&
                        "simple" === z.skewType &&
                        ((b = Math.tan(x - O * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (d *= b),
                        (g *= b),
                        O &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b))),
                      L &&
                        ((H +=
                          z.xOrigin -
                          (z.xOrigin * c + z.yOrigin * d) +
                          z.xOffset),
                        (I +=
                          z.yOrigin -
                          (z.xOrigin * f + z.yOrigin * g) +
                          z.yOffset),
                        Aa &&
                          (z.xPercent || z.yPercent) &&
                          ((q = this.t.getBBox()),
                          (H += 0.01 * z.xPercent * q.width),
                          (I += 0.01 * z.yPercent * q.height)),
                        (q = 1e-6),
                        q > H && H > -q && (H = 0),
                        q > I && I > -q && (I = 0)),
                      (u =
                        ((c * y) | 0) / y +
                        "," +
                        ((f * y) | 0) / y +
                        "," +
                        ((d * y) | 0) / y +
                        "," +
                        ((g * y) | 0) / y +
                        "," +
                        H +
                        "," +
                        I +
                        ")"),
                      L && Aa
                        ? this.t.setAttribute("transform", "matrix(" + u)
                        : (A[Ca] =
                            (z.xPercent || z.yPercent
                              ? "translate(" +
                                z.xPercent +
                                "%," +
                                z.yPercent +
                                "%) matrix("
                              : "matrix(") + u))
                    : (A[Ca] =
                        (z.xPercent || z.yPercent
                          ? "translate(" +
                            z.xPercent +
                            "%," +
                            z.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        E +
                        ",0,0," +
                        F +
                        "," +
                        H +
                        "," +
                        I +
                        ")"));
                if (
                  (n &&
                    ((q = 1e-4),
                    q > E && E > -q && (E = G = 2e-5),
                    q > F && F > -q && (F = G = 2e-5),
                    !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                  B || P)
                )
                  (B *= K),
                    (r = c = Math.cos(B)),
                    (s = f = Math.sin(B)),
                    P &&
                      ((B -= P * K),
                      (r = Math.cos(B)),
                      (s = Math.sin(B)),
                      "simple" === z.skewType &&
                        ((b = Math.tan((P - O) * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (r *= b),
                        (s *= b),
                        z.skewY &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b)))),
                    (d = -s),
                    (g = r);
                else {
                  if (!(D || C || 1 !== G || M || L))
                    return void (A[Ca] =
                      (z.xPercent || z.yPercent
                        ? "translate(" +
                          z.xPercent +
                          "%," +
                          z.yPercent +
                          "%) translate3d("
                        : "translate3d(") +
                      H +
                      "px," +
                      I +
                      "px," +
                      J +
                      "px)" +
                      (1 !== E || 1 !== F
                        ? " scale(" + E + "," + F + ")"
                        : ""));
                  (c = g = 1), (d = f = 0);
                }
                (k = 1),
                  (e = h = i = j = l = m = 0),
                  (o = M ? -1 / M : 0),
                  (p = z.zOrigin),
                  (q = 1e-6),
                  (v = ","),
                  (w = "0"),
                  (B = D * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (i = -s),
                    (l = o * -s),
                    (e = c * s),
                    (h = f * s),
                    (k = r),
                    (o *= r),
                    (c *= r),
                    (f *= r)),
                  (B = C * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (b = d * r + e * s),
                    (t = g * r + h * s),
                    (j = k * s),
                    (m = o * s),
                    (e = d * -s + e * r),
                    (h = g * -s + h * r),
                    (k *= r),
                    (o *= r),
                    (d = b),
                    (g = t)),
                  1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
                  1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
                  1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
                  (p || L) &&
                    (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                    L &&
                      ((H +=
                        z.xOrigin -
                        (z.xOrigin * c + z.yOrigin * d) +
                        z.xOffset),
                      (I +=
                        z.yOrigin -
                        (z.xOrigin * f + z.yOrigin * g) +
                        z.yOffset)),
                    q > H && H > -q && (H = w),
                    q > I && I > -q && (I = w),
                    q > J && J > -q && (J = 0)),
                  (u =
                    z.xPercent || z.yPercent
                      ? "translate(" +
                        z.xPercent +
                        "%," +
                        z.yPercent +
                        "%) matrix3d("
                      : "matrix3d("),
                  (u +=
                    (q > c && c > -q ? w : c) +
                    v +
                    (q > f && f > -q ? w : f) +
                    v +
                    (q > i && i > -q ? w : i)),
                  (u +=
                    v +
                    (q > l && l > -q ? w : l) +
                    v +
                    (q > d && d > -q ? w : d) +
                    v +
                    (q > g && g > -q ? w : g)),
                  C || D || 1 !== G
                    ? ((u +=
                        v +
                        (q > j && j > -q ? w : j) +
                        v +
                        (q > m && m > -q ? w : m) +
                        v +
                        (q > e && e > -q ? w : e)),
                      (u +=
                        v +
                        (q > h && h > -q ? w : h) +
                        v +
                        (q > k && k > -q ? w : k) +
                        v +
                        (q > o && o > -q ? w : o) +
                        v))
                    : (u += ",0,0,0,0,1,0,"),
                  (u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
                  (A[Ca] = u);
              });
        (j = Ga.prototype),
          (j.x =
            j.y =
            j.z =
            j.skewX =
            j.skewY =
            j.rotation =
            j.rotationX =
            j.rotationY =
            j.zOrigin =
            j.xPercent =
            j.yPercent =
            j.xOffset =
            j.yOffset =
              0),
          (j.scaleX = j.scaleY = j.scaleZ = 1),
          ya(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                var j,
                  k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                "function" == typeof i[c] && ((j = i[c]), (i[c] = b)),
                  k && (i.scale = k(r, a));
                var l,
                  m,
                  n,
                  o,
                  p,
                  s,
                  t,
                  u,
                  v,
                  w = a._gsTransform,
                  x = a.style,
                  y = 1e-6,
                  z = Ba.length,
                  A = i,
                  B = {},
                  C = "transformOrigin",
                  D = Ra(a, e, !0, A.parseTransform),
                  E =
                    A.transform &&
                    ("function" == typeof A.transform
                      ? A.transform(r, q)
                      : A.transform);
                if (
                  ((D.skewType = A.skewType || D.skewType || g.defaultSkewType),
                  (d._transform = D),
                  E && "string" == typeof E && Ca)
                )
                  (m = Q.style),
                    (m[Ca] = E),
                    (m.display = "block"),
                    (m.position = "absolute"),
                    O.body.appendChild(Q),
                    (l = Ra(Q, null, !1)),
                    "simple" === D.skewType &&
                      (l.scaleY *= Math.cos(l.skewX * K)),
                    D.svg &&
                      ((s = D.xOrigin),
                      (t = D.yOrigin),
                      (l.x -= D.xOffset),
                      (l.y -= D.yOffset),
                      (A.transformOrigin || A.svgOrigin) &&
                        ((E = {}),
                        La(
                          a,
                          ha(A.transformOrigin),
                          E,
                          A.svgOrigin,
                          A.smoothOrigin,
                          !0
                        ),
                        (s = E.xOrigin),
                        (t = E.yOrigin),
                        (l.x -= E.xOffset - D.xOffset),
                        (l.y -= E.yOffset - D.yOffset)),
                      (s || t) &&
                        ((u = Qa(Q, !0)),
                        (l.x -= s - (s * u[0] + t * u[2])),
                        (l.y -= t - (s * u[1] + t * u[3])))),
                    O.body.removeChild(Q),
                    l.perspective || (l.perspective = D.perspective),
                    null != A.xPercent &&
                      (l.xPercent = ja(A.xPercent, D.xPercent)),
                    null != A.yPercent &&
                      (l.yPercent = ja(A.yPercent, D.yPercent));
                else if ("object" == typeof A) {
                  if (
                    ((l = {
                      scaleX: ja(
                        null != A.scaleX ? A.scaleX : A.scale,
                        D.scaleX
                      ),
                      scaleY: ja(
                        null != A.scaleY ? A.scaleY : A.scale,
                        D.scaleY
                      ),
                      scaleZ: ja(A.scaleZ, D.scaleZ),
                      x: ja(A.x, D.x),
                      y: ja(A.y, D.y),
                      z: ja(A.z, D.z),
                      xPercent: ja(A.xPercent, D.xPercent),
                      yPercent: ja(A.yPercent, D.yPercent),
                      perspective: ja(A.transformPerspective, D.perspective),
                    }),
                    (p = A.directionalRotation),
                    null != p)
                  )
                    if ("object" == typeof p) for (m in p) A[m] = p[m];
                    else A.rotation = p;
                  "string" == typeof A.x &&
                    -1 !== A.x.indexOf("%") &&
                    ((l.x = 0), (l.xPercent = ja(A.x, D.xPercent))),
                    "string" == typeof A.y &&
                      -1 !== A.y.indexOf("%") &&
                      ((l.y = 0), (l.yPercent = ja(A.y, D.yPercent))),
                    (l.rotation = ka(
                      "rotation" in A
                        ? A.rotation
                        : "shortRotation" in A
                        ? A.shortRotation + "_short"
                        : "rotationZ" in A
                        ? A.rotationZ
                        : D.rotation,
                      D.rotation,
                      "rotation",
                      B
                    )),
                    Fa &&
                      ((l.rotationX = ka(
                        "rotationX" in A
                          ? A.rotationX
                          : "shortRotationX" in A
                          ? A.shortRotationX + "_short"
                          : D.rotationX || 0,
                        D.rotationX,
                        "rotationX",
                        B
                      )),
                      (l.rotationY = ka(
                        "rotationY" in A
                          ? A.rotationY
                          : "shortRotationY" in A
                          ? A.shortRotationY + "_short"
                          : D.rotationY || 0,
                        D.rotationY,
                        "rotationY",
                        B
                      ))),
                    (l.skewX = ka(A.skewX, D.skewX)),
                    (l.skewY = ka(A.skewY, D.skewY));
                }
                for (
                  Fa &&
                    null != A.force3D &&
                    ((D.force3D = A.force3D), (o = !0)),
                    n =
                      D.force3D ||
                      D.z ||
                      D.rotationX ||
                      D.rotationY ||
                      l.z ||
                      l.rotationX ||
                      l.rotationY ||
                      l.perspective,
                    n || null == A.scale || (l.scaleZ = 1);
                  --z > -1;

                )
                  (v = Ba[z]),
                    (E = l[v] - D[v]),
                    (E > y || -y > E || null != A[v] || null != M[v]) &&
                      ((o = !0),
                      (f = new ta(D, v, D[v], E, f)),
                      v in B && (f.e = B[v]),
                      (f.xs0 = 0),
                      (f.plugin = h),
                      d._overwriteProps.push(f.n));
                return (
                  (E = A.transformOrigin),
                  D.svg &&
                    (E || A.svgOrigin) &&
                    ((s = D.xOffset),
                    (t = D.yOffset),
                    La(a, ha(E), l, A.svgOrigin, A.smoothOrigin),
                    (f = ua(
                      D,
                      "xOrigin",
                      (w ? D : l).xOrigin,
                      l.xOrigin,
                      f,
                      C
                    )),
                    (f = ua(
                      D,
                      "yOrigin",
                      (w ? D : l).yOrigin,
                      l.yOrigin,
                      f,
                      C
                    )),
                    (s !== D.xOffset || t !== D.yOffset) &&
                      ((f = ua(
                        D,
                        "xOffset",
                        w ? s : D.xOffset,
                        D.xOffset,
                        f,
                        C
                      )),
                      (f = ua(
                        D,
                        "yOffset",
                        w ? t : D.yOffset,
                        D.yOffset,
                        f,
                        C
                      ))),
                    (E = "0px 0px")),
                  (E || (Fa && n && D.zOrigin)) &&
                    (Ca
                      ? ((o = !0),
                        (v = Ea),
                        (E = (E || _(a, v, e, !1, "50% 50%")) + ""),
                        (f = new ta(x, v, 0, 0, f, -1, C)),
                        (f.b = x[v]),
                        (f.plugin = h),
                        Fa
                          ? ((m = D.zOrigin),
                            (E = E.split(" ")),
                            (D.zOrigin =
                              (E.length > 2 && (0 === m || "0px" !== E[2])
                                ? parseFloat(E[2])
                                : m) || 0),
                            (f.xs0 = f.e =
                              E[0] + " " + (E[1] || "50%") + " 0px"),
                            (f = new ta(D, "zOrigin", 0, 0, f, -1, f.n)),
                            (f.b = m),
                            (f.xs0 = f.e = D.zOrigin))
                          : (f.xs0 = f.e = E))
                      : ha(E + "", D)),
                  o &&
                    (d._transformType =
                      (D.svg && Aa) || (!n && 3 !== this._transformType)
                        ? 2
                        : 3),
                  j && (i[c] = j),
                  k && (i.scale = k),
                  f
                );
              },
              prefix: !0,
            }
          ),
          ya("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          ya("borderRadius", {
            defaultValue: "0px",
            parser: function (a, b, c, f, g, h) {
              b = this.format(b);
              var i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                z = a.style;
              for (
                q = parseFloat(a.offsetWidth),
                  r = parseFloat(a.offsetHeight),
                  i = b.split(" "),
                  j = 0;
                j < y.length;
                j++
              )
                this.p.indexOf("border") && (y[j] = Z(y[j])),
                  (m = l = _(a, y[j], e, !1, "0px")),
                  -1 !== m.indexOf(" ") &&
                    ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                  (n = k = i[j]),
                  (o = parseFloat(m)),
                  (t = m.substr((o + "").length)),
                  (u = "=" === n.charAt(1)),
                  u
                    ? ((p = parseInt(n.charAt(0) + "1", 10)),
                      (n = n.substr(2)),
                      (p *= parseFloat(n)),
                      (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || ""))
                    : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                  "" === s && (s = d[c] || t),
                  s !== t &&
                    ((v = aa(a, "borderLeft", o, t)),
                    (w = aa(a, "borderTop", o, t)),
                    "%" === s
                      ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%"))
                      : "em" === s
                      ? ((x = aa(a, "borderLeft", 1, "em")),
                        (m = v / x + "em"),
                        (l = w / x + "em"))
                      : ((m = v + "px"), (l = w + "px")),
                    u &&
                      ((n = parseFloat(m) + p + s),
                      (k = parseFloat(l) + p + s))),
                  (g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
              return g;
            },
            prefix: !0,
            formatter: qa("0px 0px 0px 0px", !1, !0),
          }),
          ya(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (a, b, c, d, f, g) {
                return va(
                  a.style,
                  c,
                  this.format(_(a, c, e, !1, "0px 0px")),
                  this.format(b),
                  !1,
                  "0px",
                  f
                );
              },
              prefix: !0,
              formatter: qa("0px 0px", !1, !0),
            }
          ),
          ya("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (a, b, c, d, f, g) {
              var h,
                i,
                j,
                k,
                l,
                m,
                n = "background-position",
                o = e || $(a, null),
                q = this.format(
                  (o
                    ? p
                      ? o.getPropertyValue(n + "-x") +
                        " " +
                        o.getPropertyValue(n + "-y")
                      : o.getPropertyValue(n)
                    : a.currentStyle.backgroundPositionX +
                      " " +
                      a.currentStyle.backgroundPositionY) || "0 0"
                ),
                r = this.format(b);
              if (
                (-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) &&
                r.split(",").length < 2 &&
                ((m = _(a, "backgroundImage").replace(D, "")),
                m && "none" !== m)
              ) {
                for (
                  h = q.split(" "),
                    i = r.split(" "),
                    R.setAttribute("src", m),
                    j = 2;
                  --j > -1;

                )
                  (q = h[j]),
                    (k = -1 !== q.indexOf("%")),
                    k !== (-1 !== i[j].indexOf("%")) &&
                      ((l =
                        0 === j
                          ? a.offsetWidth - R.width
                          : a.offsetHeight - R.height),
                      (h[j] = k
                        ? (parseFloat(q) / 100) * l + "px"
                        : (parseFloat(q) / l) * 100 + "%"));
                q = h.join(" ");
              }
              return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: ha,
          }),
          ya("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (a) {
              return (a += ""), ha(-1 === a.indexOf(" ") ? a + " " + a : a);
            },
          }),
          ya("perspective", { defaultValue: "0px", prefix: !0 }),
          ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          ya("transformStyle", { prefix: !0 }),
          ya("backfaceVisibility", { prefix: !0 }),
          ya("userSelect", { prefix: !0 }),
          ya("margin", {
            parser: ra("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          ya("padding", {
            parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          ya("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (a, b, c, d, f, g) {
              var h, i, j;
              return (
                9 > p
                  ? ((i = a.currentStyle),
                    (j = 8 > p ? " " : ","),
                    (h =
                      "rect(" +
                      i.clipTop +
                      j +
                      i.clipRight +
                      j +
                      i.clipBottom +
                      j +
                      i.clipLeft +
                      ")"),
                    (b = this.format(b).split(",").join(j)))
                  : ((h = this.format(_(a, this.p, e, !1, this.dflt))),
                    (b = this.format(b))),
                this.parseComplex(a.style, h, b, f, g)
              );
            },
          }),
          ya("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          ya("autoRound,strictUnits", {
            parser: function (a, b, c, d, e) {
              return e;
            },
          }),
          ya("border", {
            defaultValue: "0px solid #000",
            parser: function (a, b, c, d, f, g) {
              var h = _(a, "borderTopWidth", e, !1, "0px"),
                i = this.format(b).split(" "),
                j = i[0].replace(w, "");
              return (
                "px" !== j &&
                  (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j),
                this.parseComplex(
                  a.style,
                  this.format(
                    h +
                      " " +
                      _(a, "borderTopStyle", e, !1, "solid") +
                      " " +
                      _(a, "borderTopColor", e, !1, "#000")
                  ),
                  i.join(" "),
                  f,
                  g
                )
              );
            },
            color: !0,
            formatter: function (a) {
              var b = a.split(" ");
              return (
                b[0] +
                " " +
                (b[1] || "solid") +
                " " +
                (a.match(pa) || ["#000"])[0]
              );
            },
          }),
          ya("borderWidth", {
            parser: ra(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          ya("float,cssFloat,styleFloat", {
            parser: function (a, b, c, d, e, f) {
              var g = a.style,
                h = "cssFloat" in g ? "cssFloat" : "styleFloat";
              return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            },
          });
        var Ua = function (a) {
          var b,
            c = this.t,
            d = c.filter || _(this.data, "filter") || "",
            e = (this.s + this.c * a) | 0;
          100 === e &&
            (-1 === d.indexOf("atrix(") &&
            -1 === d.indexOf("radient(") &&
            -1 === d.indexOf("oader(")
              ? (c.removeAttribute("filter"), (b = !_(this.data, "filter")))
              : ((c.filter = d.replace(z, "")), (b = !0))),
            b ||
              (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
              -1 === d.indexOf("pacity")
                ? (0 === e && this.xn1) ||
                  (c.filter = d + " alpha(opacity=" + e + ")")
                : (c.filter = d.replace(x, "opacity=" + e)));
        };
        ya("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (a, b, c, d, f, g) {
            var h = parseFloat(_(a, "opacity", e, !1, "1")),
              i = a.style,
              j = "autoAlpha" === c;
            return (
              "string" == typeof b &&
                "=" === b.charAt(1) &&
                (b =
                  ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
              j &&
                1 === h &&
                "hidden" === _(a, "visibility", e) &&
                0 !== b &&
                (h = 0),
              U
                ? (f = new ta(i, "opacity", h, b - h, f))
                : ((f = new ta(i, "opacity", 100 * h, 100 * (b - h), f)),
                  (f.xn1 = j ? 1 : 0),
                  (i.zoom = 1),
                  (f.type = 2),
                  (f.b = "alpha(opacity=" + f.s + ")"),
                  (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                  (f.data = a),
                  (f.plugin = g),
                  (f.setRatio = Ua)),
              j &&
                ((f = new ta(
                  i,
                  "visibility",
                  0,
                  0,
                  f,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== h ? "inherit" : "hidden",
                  0 === b ? "hidden" : "inherit"
                )),
                (f.xs0 = "inherit"),
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
              f
            );
          },
        });
        var Va = function (a, b) {
            b &&
              (a.removeProperty
                ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) &&
                    (b = "-" + b),
                  a.removeProperty(b.replace(B, "-$1").toLowerCase()))
                : a.removeAttribute(b));
          },
          Wa = function (a) {
            if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
              this.t.setAttribute("class", 0 === a ? this.b : this.e);
              for (var b = this.data, c = this.t.style; b; )
                b.v ? (c[b.p] = b.v) : Va(c, b.p), (b = b._next);
              1 === a &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        ya("className", {
          parser: function (a, b, d, f, g, h, i) {
            var j,
              k,
              l,
              m,
              n,
              o = a.getAttribute("class") || "",
              p = a.style.cssText;
            if (
              ((g = f._classNamePT = new ta(a, d, 0, 0, g, 2)),
              (g.setRatio = Wa),
              (g.pr = -11),
              (c = !0),
              (g.b = o),
              (k = ca(a, e)),
              (l = a._gsClassPT))
            ) {
              for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
              l.setRatio(1);
            }
            return (
              (a._gsClassPT = g),
              (g.e =
                "=" !== b.charAt(1)
                  ? b
                  : o.replace(
                      new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
              a.setAttribute("class", g.e),
              (j = da(a, k, ca(a), i, m)),
              a.setAttribute("class", o),
              (g.data = j.firstMPT),
              (a.style.cssText = p),
              (g = g.xfirst = f.parse(a, j.difs, g, h))
            );
          },
        });
        var Xa = function (a) {
          if (
            (1 === a || 0 === a) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var b,
              c,
              d,
              e,
              f,
              g = this.t.style,
              h = i.transform.parse;
            if ("all" === this.e) (g.cssText = ""), (e = !0);
            else
              for (
                b = this.e.split(" ").join("").split(","), d = b.length;
                --d > -1;

              )
                (c = b[d]),
                  i[c] &&
                    (i[c].parse === h
                      ? (e = !0)
                      : (c = "transformOrigin" === c ? Ea : i[c].p)),
                  Va(g, c);
            e &&
              (Va(g, Ca),
              (f = this.t._gsTransform),
              f &&
                (f.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          ya("clearProps", {
            parser: function (a, b, d, e, f) {
              return (
                (f = new ta(a, d, 0, 0, f, 2)),
                (f.setRatio = Xa),
                (f.e = b),
                (f.pr = -10),
                (f.data = e._tween),
                (c = !0),
                f
              );
            },
          }),
            j = "bezier,throwProps,physicsProps,physics2D".split(","),
            wa = j.length;
          wa--;

        )
          za(j[wa]);
        (j = g.prototype),
          (j._firstPT = j._lastParsedTransform = j._transform = null),
          (j._onInitTween = function (a, b, h, j) {
            if (!a.nodeType) return !1;
            (this._target = q = a),
              (this._tween = h),
              (this._vars = b),
              (r = j),
              (k = b.autoRound),
              (c = !1),
              (d = b.suffixMap || g.suffixMap),
              (e = $(a, "")),
              (f = this._overwriteProps);
            var n,
              p,
              s,
              t,
              u,
              v,
              w,
              x,
              z,
              A = a.style;
            if (
              (l &&
                "" === A.zIndex &&
                ((n = _(a, "zIndex", e)),
                ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
              "string" == typeof b &&
                ((t = A.cssText),
                (n = ca(a, e)),
                (A.cssText = t + ";" + b),
                (n = da(a, n, ca(a)).difs),
                !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)),
                (b = n),
                (A.cssText = t)),
              b.className
                ? (this._firstPT = p =
                    i.className.parse(
                      a,
                      b.className,
                      "className",
                      this,
                      null,
                      null,
                      b
                    ))
                : (this._firstPT = p = this.parse(a, b, null)),
              this._transformType)
            ) {
              for (
                z = 3 === this._transformType,
                  Ca
                    ? m &&
                      ((l = !0),
                      "" === A.zIndex &&
                        ((w = _(a, "zIndex", e)),
                        ("auto" === w || "" === w) &&
                          this._addLazySet(A, "zIndex", 0)),
                      o &&
                        this._addLazySet(
                          A,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (z ? "visible" : "hidden")
                        ))
                    : (A.zoom = 1),
                  s = p;
                s && s._next;

              )
                s = s._next;
              (x = new ta(a, "transform", 0, 0, null, 2)),
                this._linkCSSP(x, null, s),
                (x.setRatio = Ca ? Ta : Sa),
                (x.data = this._transform || Ra(a, e, !0)),
                (x.tween = h),
                (x.pr = -1),
                f.pop();
            }
            if (c) {
              for (; p; ) {
                for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p),
                  (p._next = s) ? (s._prev = p) : (u = p),
                  (p = v);
              }
              this._firstPT = t;
            }
            return !0;
          }),
          (j.parse = function (a, b, c, f) {
            var g,
              h,
              j,
              l,
              m,
              n,
              o,
              p,
              s,
              t,
              u = a.style;
            for (g in b) {
              if (
                ((n = b[g]),
                "function" == typeof n && (n = n(r, q)),
                (h = i[g]))
              )
                c = h.parse(a, n, g, this, c, f, b);
              else {
                if ("--" === g.substr(0, 2)) {
                  this._tween._propLookup[g] = this._addTween.call(
                    this._tween,
                    a.style,
                    "setProperty",
                    $(a).getPropertyValue(g) + "",
                    n + "",
                    g,
                    !1,
                    g
                  );
                  continue;
                }
                (m = _(a, g, e) + ""),
                  (s = "string" == typeof n),
                  "color" === g ||
                  "fill" === g ||
                  "stroke" === g ||
                  -1 !== g.indexOf("Color") ||
                  (s && A.test(n))
                    ? (s ||
                        ((n = na(n)),
                        (n =
                          (n.length > 3 ? "rgba(" : "rgb(") +
                          n.join(",") +
                          ")")),
                      (c = va(u, g, m, n, !0, "transparent", c, 0, f)))
                    : s && J.test(n)
                    ? (c = va(u, g, m, n, !0, null, c, 0, f))
                    : ((j = parseFloat(m)),
                      (o = j || 0 === j ? m.substr((j + "").length) : ""),
                      ("" === m || "auto" === m) &&
                        ("width" === g || "height" === g
                          ? ((j = ga(a, g, e)), (o = "px"))
                          : "left" === g || "top" === g
                          ? ((j = ba(a, g, e)), (o = "px"))
                          : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                      (t = s && "=" === n.charAt(1)),
                      t
                        ? ((l = parseInt(n.charAt(0) + "1", 10)),
                          (n = n.substr(2)),
                          (l *= parseFloat(n)),
                          (p = n.replace(w, "")))
                        : ((l = parseFloat(n)),
                          (p = s ? n.replace(w, "") : "")),
                      "" === p && (p = g in d ? d[g] : o),
                      (n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
                      o !== p &&
                        ("" !== p || "lineHeight" === g) &&
                        (l || 0 === l) &&
                        j &&
                        ((j = aa(a, g, j, o)),
                        "%" === p
                          ? ((j /= aa(a, g, 100, "%") / 100),
                            b.strictUnits !== !0 && (m = j + "%"))
                          : "em" === p ||
                            "rem" === p ||
                            "vw" === p ||
                            "vh" === p
                          ? (j /= aa(a, g, 1, p))
                          : "px" !== p && ((l = aa(a, g, l, p)), (p = "px")),
                        t && (l || 0 === l) && (n = l + j + p)),
                      t && (l += j),
                      (!j && 0 !== j) || (!l && 0 !== l)
                        ? void 0 !== u[g] &&
                          (n || (n + "" != "NaN" && null != n))
                          ? ((c = new ta(
                              u,
                              g,
                              l || j || 0,
                              0,
                              c,
                              -1,
                              g,
                              !1,
                              0,
                              m,
                              n
                            )),
                            (c.xs0 =
                              "none" !== n ||
                              ("display" !== g && -1 === g.indexOf("Style"))
                                ? n
                                : m))
                          : W("invalid " + g + " tween value: " + b[g])
                        : ((c = new ta(
                            u,
                            g,
                            j,
                            l - j,
                            c,
                            0,
                            g,
                            k !== !1 && ("px" === p || "zIndex" === g),
                            0,
                            m,
                            n
                          )),
                          (c.xs0 = p)));
              }
              f && c && !c.plugin && (c.plugin = f);
            }
            return c;
          }),
          (j.setRatio = function (a) {
            var b,
              c,
              d,
              e = this._firstPT,
              f = 1e-6;
            if (
              1 !== a ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                a ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; e; ) {
                  if (
                    ((b = e.c * a + e.s),
                    e.r ? (b = Math.round(b)) : f > b && b > -f && (b = 0),
                    e.type)
                  )
                    if (1 === e.type)
                      if (((d = e.l), 2 === d))
                        e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                      else if (3 === d)
                        e.t[e.p] =
                          e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                      else if (4 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4;
                      else if (5 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4 +
                          e.xn4 +
                          e.xs5;
                      else {
                        for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    else
                      -1 === e.type
                        ? (e.t[e.p] = e.xs0)
                        : e.setRatio && e.setRatio(a);
                  else e.t[e.p] = b + e.xs0;
                  e = e._next;
                }
              else
                for (; e; )
                  2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a),
                    (e = e._next);
            else
              for (; e; ) {
                if (2 !== e.type)
                  if (e.r && -1 !== e.type)
                    if (((b = Math.round(e.s + e.c)), e.type)) {
                      if (1 === e.type) {
                        for (
                          d = e.l, c = e.xs0 + b + e.xs1, d = 1;
                          d < e.l;
                          d++
                        )
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    } else e.t[e.p] = b + e.xs0;
                  else e.t[e.p] = e.e;
                else e.setRatio(a);
                e = e._next;
              }
          }),
          (j._enableTransforms = function (a) {
            (this._transform = this._transform || Ra(this._target, e, !0)),
              (this._transformType =
                (this._transform.svg && Aa) || (!a && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Ya = function (a) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (j._addLazySet = function (a, b, c) {
          var d = (this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2));
          (d.e = c), (d.setRatio = Ya), (d.data = this);
        }),
          (j._linkCSSP = function (a, b, c, d) {
            return (
              a &&
                (b && (b._prev = a),
                a._next && (a._next._prev = a._prev),
                a._prev
                  ? (a._prev._next = a._next)
                  : this._firstPT === a &&
                    ((this._firstPT = a._next), (d = !0)),
                c
                  ? (c._next = a)
                  : d || null !== this._firstPT || (this._firstPT = a),
                (a._next = b),
                (a._prev = c)),
              a
            );
          }),
          (j._mod = function (a) {
            for (var b = this._firstPT; b; )
              "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1),
                (b = b._next);
          }),
          (j._kill = function (b) {
            var c,
              d,
              e,
              f = b;
            if (b.autoAlpha || b.alpha) {
              f = {};
              for (d in b) f[d] = b[d];
              (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
            }
            for (
              b.className &&
                (c = this._classNamePT) &&
                ((e = c.xfirst),
                e && e._prev
                  ? this._linkCSSP(e._prev, c._next, e._prev._prev)
                  : e === this._firstPT && (this._firstPT = c._next),
                c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                (this._classNamePT = null)),
                c = this._firstPT;
              c;

            )
              c.plugin &&
                c.plugin !== d &&
                c.plugin._kill &&
                (c.plugin._kill(b), (d = c.plugin)),
                (c = c._next);
            return a.prototype._kill.call(this, f);
          });
        var Za = function (a, b, c) {
          var d, e, f, g;
          if (a.slice) for (e = a.length; --e > -1; ) Za(a[e], b, c);
          else
            for (d = a.childNodes, e = d.length; --e > -1; )
              (f = d[e]),
                (g = f.type),
                f.style && (b.push(ca(f)), c && c.push(f)),
                (1 !== g && 9 !== g && 11 !== g) ||
                  !f.childNodes.length ||
                  Za(f, b, c);
        };
        return (
          (g.cascadeTo = function (a, c, d) {
            var e,
              f,
              g,
              h,
              i = b.to(a, c, d),
              j = [i],
              k = [],
              l = [],
              m = [],
              n = b._internals.reservedProps;
            for (
              a = i._targets || i.target,
                Za(a, k, m),
                i.render(c, !0, !0),
                Za(a, l),
                i.render(0, !0, !0),
                i._enabled(!0),
                e = m.length;
              --e > -1;

            )
              if (((f = da(m[e], k[e], l[e])), f.firstMPT)) {
                f = f.difs;
                for (g in d) n[g] && (f[g] = d[g]);
                h = {};
                for (g in f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f));
              }
            return j;
          }),
          a.activate([g]),
          g
        );
      },
      !0
    ),
    (function () {
      var a = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.6.0",
          priority: -1,
          API: 2,
          init: function (a, b, c) {
            return (this._tween = c), !0;
          },
        }),
        b = function (a) {
          for (; a; ) a.f || a.blob || (a.m = Math.round), (a = a._next);
        },
        c = a.prototype;
      (c._onInitAllProps = function () {
        for (
          var a,
            c,
            d,
            e = this._tween,
            f = e.vars.roundProps.join
              ? e.vars.roundProps
              : e.vars.roundProps.split(","),
            g = f.length,
            h = {},
            i = e._propLookup.roundProps;
          --g > -1;

        )
          h[f[g]] = Math.round;
        for (g = f.length; --g > -1; )
          for (a = f[g], c = e._firstPT; c; )
            (d = c._next),
              c.pg
                ? c.t._mod(h)
                : c.n === a &&
                  (2 === c.f && c.t
                    ? b(c.t._firstPT)
                    : (this._add(c.t, a, c.s, c.c),
                      d && (d._prev = c._prev),
                      c._prev
                        ? (c._prev._next = d)
                        : e._firstPT === c && (e._firstPT = d),
                      (c._next = c._prev = null),
                      (e._propLookup[a] = i))),
              (c = d);
        return !1;
      }),
        (c._add = function (a, b, c, d) {
          this._addTween(a, b, c, c + d, b, Math.round),
            this._overwriteProps.push(b);
        });
    })(),
    (function () {
      _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function (a, b, c, d) {
          var e, f;
          if ("function" != typeof a.setAttribute) return !1;
          for (e in b)
            (f = b[e]),
              "function" == typeof f && (f = f(d, a)),
              this._addTween(
                a,
                "setAttribute",
                a.getAttribute(e) + "",
                f + "",
                e,
                !1,
                e
              ),
              this._overwriteProps.push(e);
          return !0;
        },
      });
    })(),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (a, b, c, d) {
        "object" != typeof b && (b = { rotation: b }), (this.finals = {});
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;
        for (e in b)
          "useRadians" !== e &&
            ((h = b[e]),
            "function" == typeof h && (h = h(d, a)),
            (j = (h + "").split("_")),
            (f = j[0]),
            (g = parseFloat(
              "function" != typeof a[e]
                ? a[e]
                : a[
                    e.indexOf("set") ||
                    "function" != typeof a["get" + e.substr(3)]
                      ? e
                      : "get" + e.substr(3)
                  ]()
            )),
            (h = this.finals[e] =
              "string" == typeof f && "=" === f.charAt(1)
                ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2))
                : Number(f) || 0),
            (i = h - g),
            j.length &&
              ((f = j.join("_")),
              -1 !== f.indexOf("short") &&
                ((i %= k), i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
              -1 !== f.indexOf("_cw") && 0 > i
                ? (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k)
                : -1 !== f.indexOf("ccw") &&
                  i > 0 &&
                  (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
            (i > l || -l > i) &&
              (this._addTween(a, e, g, g + i, e),
              this._overwriteProps.push(e)));
        return !0;
      },
      set: function (a) {
        var b;
        if (1 !== a) this._super.setRatio.call(this, a);
        else
          for (b = this._firstPT; b; )
            b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]),
              (b = b._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (a) {
        var b,
          c,
          d,
          e = _gsScope.GreenSockGlobals || _gsScope,
          f = e.com.greensock,
          g = 2 * Math.PI,
          h = Math.PI / 2,
          i = f._class,
          j = function (b, c) {
            var d = i("easing." + b, function () {}, !0),
              e = (d.prototype = new a());
            return (e.constructor = d), (e.getRatio = c), d;
          },
          k = a.register || function () {},
          l = function (a, b, c, d, e) {
            var f = i(
              "easing." + a,
              { easeOut: new b(), easeIn: new c(), easeInOut: new d() },
              !0
            );
            return k(f, a), f;
          },
          m = function (a, b, c) {
            (this.t = a),
              (this.v = b),
              c &&
                ((this.next = c),
                (c.prev = this),
                (this.c = c.v - b),
                (this.gap = c.t - a));
          },
          n = function (b, c) {
            var d = i(
                "easing." + b,
                function (a) {
                  (this._p1 = a || 0 === a ? a : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              e = (d.prototype = new a());
            return (
              (e.constructor = d),
              (e.getRatio = c),
              (e.config = function (a) {
                return new d(a);
              }),
              d
            );
          },
          o = l(
            "Back",
            n("BackOut", function (a) {
              return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
            }),
            n("BackIn", function (a) {
              return a * a * ((this._p1 + 1) * a - this._p1);
            }),
            n("BackInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2)
                : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
            })
          ),
          p = i(
            "easing.SlowMo",
            function (a, b, c) {
              (b = b || 0 === b ? b : 0.7),
                null == a ? (a = 0.7) : a > 1 && (a = 1),
                (this._p = 1 !== a ? b : 0),
                (this._p1 = (1 - a) / 2),
                (this._p2 = a),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = c === !0);
            },
            !0
          ),
          q = (p.prototype = new a());
        return (
          (q.constructor = p),
          (q.getRatio = function (a) {
            var b = a + (0.5 - a) * this._p;
            return a < this._p1
              ? this._calcEnd
                ? 1 - (a = 1 - a / this._p1) * a
                : b - (a = 1 - a / this._p1) * a * a * a * b
              : a > this._p3
              ? this._calcEnd
                ? 1 === a
                  ? 0
                  : 1 - (a = (a - this._p3) / this._p1) * a
                : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
              : this._calcEnd
              ? 1
              : b;
          }),
          (p.ease = new p(0.7, 0.7)),
          (q.config = p.config =
            function (a, b, c) {
              return new p(a, b, c);
            }),
          (b = i(
            "easing.SteppedEase",
            function (a, b) {
              (a = a || 1),
                (this._p1 = 1 / a),
                (this._p2 = a + (b ? 0 : 1)),
                (this._p3 = b ? 1 : 0);
            },
            !0
          )),
          (q = b.prototype = new a()),
          (q.constructor = b),
          (q.getRatio = function (a) {
            return (
              0 > a ? (a = 0) : a >= 1 && (a = 0.999999999),
              (((this._p2 * a) | 0) + this._p3) * this._p1
            );
          }),
          (q.config = b.config =
            function (a, c) {
              return new b(a, c);
            }),
          (c = i(
            "easing.RoughEase",
            function (b) {
              b = b || {};
              for (
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i = b.taper || "none",
                  j = [],
                  k = 0,
                  l = 0 | (b.points || 20),
                  n = l,
                  o = b.randomize !== !1,
                  p = b.clamp === !0,
                  q = b.template instanceof a ? b.template : null,
                  r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
                --n > -1;

              )
                (c = o ? Math.random() : (1 / l) * n),
                  (d = q ? q.getRatio(c) : c),
                  "none" === i
                    ? (e = r)
                    : "out" === i
                    ? ((f = 1 - c), (e = f * f * r))
                    : "in" === i
                    ? (e = c * c * r)
                    : 0.5 > c
                    ? ((f = 2 * c), (e = f * f * 0.5 * r))
                    : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                  o
                    ? (d += Math.random() * e - 0.5 * e)
                    : n % 2
                    ? (d += 0.5 * e)
                    : (d -= 0.5 * e),
                  p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
                  (j[k++] = { x: c, y: d });
              for (
                j.sort(function (a, b) {
                  return a.x - b.x;
                }),
                  h = new m(1, 1, null),
                  n = l;
                --n > -1;

              )
                (g = j[n]), (h = new m(g.x, g.y, h));
              this._prev = new m(0, 0, 0 !== h.t ? h : h.next);
            },
            !0
          )),
          (q = c.prototype = new a()),
          (q.constructor = c),
          (q.getRatio = function (a) {
            var b = this._prev;
            if (a > b.t) {
              for (; b.next && a >= b.t; ) b = b.next;
              b = b.prev;
            } else for (; b.prev && a <= b.t; ) b = b.prev;
            return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
          }),
          (q.config = function (a) {
            return new c(a);
          }),
          (c.ease = new c()),
          l(
            "Bounce",
            j("BounceOut", function (a) {
              return 1 / 2.75 > a
                ? 7.5625 * a * a
                : 2 / 2.75 > a
                ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                : 2.5 / 2.75 > a
                ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
            }),
            j("BounceIn", function (a) {
              return (a = 1 - a) < 1 / 2.75
                ? 1 - 7.5625 * a * a
                : 2 / 2.75 > a
                ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                : 2.5 / 2.75 > a
                ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
            }),
            j("BounceInOut", function (a) {
              var b = 0.5 > a;
              return (
                (a = b ? 1 - 2 * a : 2 * a - 1),
                (a =
                  1 / 2.75 > a
                    ? 7.5625 * a * a
                    : 2 / 2.75 > a
                    ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                    : 2.5 / 2.75 > a
                    ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                    : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                b ? 0.5 * (1 - a) : 0.5 * a + 0.5
              );
            })
          ),
          l(
            "Circ",
            j("CircOut", function (a) {
              return Math.sqrt(1 - (a -= 1) * a);
            }),
            j("CircIn", function (a) {
              return -(Math.sqrt(1 - a * a) - 1);
            }),
            j("CircInOut", function (a) {
              return (a *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - a * a) - 1)
                : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
            })
          ),
          (d = function (b, c, d) {
            var e = i(
                "easing." + b,
                function (a, b) {
                  (this._p1 = a >= 1 ? a : 1),
                    (this._p2 = (b || d) / (1 > a ? a : 1)),
                    (this._p3 =
                      (this._p2 / g) * (Math.asin(1 / this._p1) || 0)),
                    (this._p2 = g / this._p2);
                },
                !0
              ),
              f = (e.prototype = new a());
            return (
              (f.constructor = e),
              (f.getRatio = c),
              (f.config = function (a, b) {
                return new e(a, b);
              }),
              e
            );
          }),
          l(
            "Elastic",
            d(
              "ElasticOut",
              function (a) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * a) *
                    Math.sin((a - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            d(
              "ElasticIn",
              function (a) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (a -= 1)) *
                  Math.sin((a - this._p3) * this._p2)
                );
              },
              0.3
            ),
            d(
              "ElasticInOut",
              function (a) {
                return (a *= 2) < 1
                  ? -0.5 *
                      (this._p1 *
                        Math.pow(2, 10 * (a -= 1)) *
                        Math.sin((a - this._p3) * this._p2))
                  : this._p1 *
                      Math.pow(2, -10 * (a -= 1)) *
                      Math.sin((a - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          l(
            "Expo",
            j("ExpoOut", function (a) {
              return 1 - Math.pow(2, -10 * a);
            }),
            j("ExpoIn", function (a) {
              return Math.pow(2, 10 * (a - 1)) - 0.001;
            }),
            j("ExpoInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (a - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
            })
          ),
          l(
            "Sine",
            j("SineOut", function (a) {
              return Math.sin(a * h);
            }),
            j("SineIn", function (a) {
              return -Math.cos(a * h) + 1;
            }),
            j("SineInOut", function (a) {
              return -0.5 * (Math.cos(Math.PI * a) - 1);
            })
          ),
          i(
            "easing.EaseLookup",
            {
              find: function (b) {
                return a.map[b];
              },
            },
            !0
          ),
          k(e.SlowMo, "SlowMo", "ease,"),
          k(c, "RoughEase", "ease,"),
          k(b, "SteppedEase", "ease,"),
          o
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a, b) {
    "use strict";
    var c = {},
      d = a.document,
      e = (a.GreenSockGlobals = a.GreenSockGlobals || a);
    if (!e.TweenLite) {
      var f,
        g,
        h,
        i,
        j,
        k = function (a) {
          var b,
            c = a.split("."),
            d = e;
          for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
          return d;
        },
        l = k("com.greensock"),
        m = 1e-10,
        n = function (a) {
          var b,
            c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        },
        o = function () {},
        p = (function () {
          var a = Object.prototype.toString,
            b = a.call([]);
          return function (c) {
            return (
              null != c &&
              (c instanceof Array ||
                ("object" == typeof c && !!c.push && a.call(c) === b))
            );
          };
        })(),
        q = {},
        r = function (d, f, g, h) {
          (this.sc = q[d] ? q[d].sc : []),
            (q[d] = this),
            (this.gsClass = null),
            (this.func = g);
          var i = [];
          (this.check = function (j) {
            for (var l, m, n, o, p = f.length, s = p; --p > -1; )
              (l = q[f[p]] || new r(f[p], [])).gsClass
                ? ((i[p] = l.gsClass), s--)
                : j && l.sc.push(this);
            if (0 === s && g) {
              if (
                ((m = ("com.greensock." + d).split(".")),
                (n = m.pop()),
                (o = k(m.join("."))[n] = this.gsClass = g.apply(g, i)),
                h)
              )
                if (
                  ((e[n] = c[n] = o),
                  "undefined" != typeof module && module.exports)
                )
                  if (d === b) {
                    module.exports = c[b] = o;
                    for (p in c) o[p] = c[p];
                  } else c[b] && (c[b][n] = o);
                else
                  "function" == typeof define &&
                    define.amd &&
                    define(
                      (a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") +
                        d.split(".").pop(),
                      [],
                      function () {
                        return o;
                      }
                    );
              for (p = 0; p < this.sc.length; p++) this.sc[p].check();
            }
          }),
            this.check(!0);
        },
        s = (a._gsDefine = function (a, b, c, d) {
          return new r(a, b, c, d);
        }),
        t = (l._class = function (a, b, c) {
          return (
            (b = b || function () {}),
            s(
              a,
              [],
              function () {
                return b;
              },
              c
            ),
            b
          );
        });
      s.globals = e;
      var u = [0, 0, 1, 1],
        v = t(
          "easing.Ease",
          function (a, b, c, d) {
            (this._func = a),
              (this._type = c || 0),
              (this._power = d || 0),
              (this._params = b ? u.concat(b) : u);
          },
          !0
        ),
        w = (v.map = {}),
        x = (v.register = function (a, b, c, d) {
          for (
            var e,
              f,
              g,
              h,
              i = b.split(","),
              j = i.length,
              k = (c || "easeIn,easeOut,easeInOut").split(",");
            --j > -1;

          )
            for (
              f = i[j],
                e = d ? t("easing." + f, null, !0) : l.easing[f] || {},
                g = k.length;
              --g > -1;

            )
              (h = k[g]),
                (w[f + "." + h] =
                  w[h + f] =
                  e[h] =
                    a.getRatio ? a : a[h] || new a());
        });
      for (
        h = v.prototype,
          h._calcEnd = !1,
          h.getRatio = function (a) {
            if (this._func)
              return (
                (this._params[0] = a), this._func.apply(null, this._params)
              );
            var b = this._type,
              c = this._power,
              d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
            return (
              1 === c
                ? (d *= d)
                : 2 === c
                ? (d *= d * d)
                : 3 === c
                ? (d *= d * d * d)
                : 4 === c && (d *= d * d * d * d),
              1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
            );
          },
          f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          g = f.length;
        --g > -1;

      )
        (h = f[g] + ",Power" + g),
          x(new v(null, null, 1, g), h, "easeOut", !0),
          x(
            new v(null, null, 2, g),
            h,
            "easeIn" + (0 === g ? ",easeNone" : "")
          ),
          x(new v(null, null, 3, g), h, "easeInOut");
      (w.linear = l.easing.Linear.easeIn), (w.swing = l.easing.Quad.easeInOut);
      var y = t("events.EventDispatcher", function (a) {
        (this._listeners = {}), (this._eventTarget = a || this);
      });
      (h = y.prototype),
        (h.addEventListener = function (a, b, c, d, e) {
          e = e || 0;
          var f,
            g,
            h = this._listeners[a],
            k = 0;
          for (
            this !== i || j || i.wake(),
              null == h && (this._listeners[a] = h = []),
              g = h.length;
            --g > -1;

          )
            (f = h[g]),
              f.c === b && f.s === c
                ? h.splice(g, 1)
                : 0 === k && f.pr < e && (k = g + 1);
          h.splice(k, 0, { c: b, s: c, up: d, pr: e });
        }),
        (h.removeEventListener = function (a, b) {
          var c,
            d = this._listeners[a];
          if (d)
            for (c = d.length; --c > -1; )
              if (d[c].c === b) return void d.splice(c, 1);
        }),
        (h.dispatchEvent = function (a) {
          var b,
            c,
            d,
            e = this._listeners[a];
          if (e)
            for (
              b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget;
              --b > -1;

            )
              (d = e[b]),
                d &&
                  (d.up
                    ? d.c.call(d.s || c, { type: a, target: c })
                    : d.c.call(d.s || c));
        });
      var z = a.requestAnimationFrame,
        A = a.cancelAnimationFrame,
        B =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        C = B();
      for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z; )
        (z = a[f[g] + "RequestAnimationFrame"]),
          (A =
            a[f[g] + "CancelAnimationFrame"] ||
            a[f[g] + "CancelRequestAnimationFrame"]);
      t("Ticker", function (a, b) {
        var c,
          e,
          f,
          g,
          h,
          k = this,
          l = B(),
          n = b !== !1 && z ? "auto" : !1,
          p = 500,
          q = 33,
          r = "tick",
          s = function (a) {
            var b,
              d,
              i = B() - C;
            i > p && (l += i - q),
              (C += i),
              (k.time = (C - l) / 1e3),
              (b = k.time - h),
              (!c || b > 0 || a === !0) &&
                (k.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)),
              a !== !0 && (f = e(s)),
              d && k.dispatchEvent(r);
          };
        y.call(k),
          (k.time = k.frame = 0),
          (k.tick = function () {
            s(!0);
          }),
          (k.lagSmoothing = function (a, b) {
            return arguments.length
              ? ((p = a || 1 / m), void (q = Math.min(b, p, 0)))
              : 1 / m > p;
          }),
          (k.sleep = function () {
            null != f &&
              (n && A ? A(f) : clearTimeout(f),
              (e = o),
              (f = null),
              k === i && (j = !1));
          }),
          (k.wake = function (a) {
            null !== f
              ? k.sleep()
              : a
              ? (l += -C + (C = B()))
              : k.frame > 10 && (C = B() - p + 5),
              (e =
                0 === c
                  ? o
                  : n && z
                  ? z
                  : function (a) {
                      return setTimeout(a, (1e3 * (h - k.time) + 1) | 0);
                    }),
              k === i && (j = !0),
              s(2);
          }),
          (k.fps = function (a) {
            return arguments.length
              ? ((c = a),
                (g = 1 / (c || 60)),
                (h = this.time + g),
                void k.wake())
              : c;
          }),
          (k.useRAF = function (a) {
            return arguments.length ? (k.sleep(), (n = a), void k.fps(c)) : n;
          }),
          k.fps(a),
          setTimeout(function () {
            "auto" === n &&
              k.frame < 5 &&
              "hidden" !== d.visibilityState &&
              k.useRAF(!1);
          }, 1500);
      }),
        (h = l.Ticker.prototype = new l.events.EventDispatcher()),
        (h.constructor = l.Ticker);
      var D = t("core.Animation", function (a, b) {
        if (
          ((this.vars = b = b || {}),
          (this._duration = this._totalDuration = a || 0),
          (this._delay = Number(b.delay) || 0),
          (this._timeScale = 1),
          (this._active = b.immediateRender === !0),
          (this.data = b.data),
          (this._reversed = b.reversed === !0),
          X)
        ) {
          j || i.wake();
          var c = this.vars.useFrames ? W : X;
          c.add(this, c._time), this.vars.paused && this.paused(!0);
        }
      });
      (i = D.ticker = new l.Ticker()),
        (h = D.prototype),
        (h._dirty = h._gc = h._initted = h._paused = !1),
        (h._totalTime = h._time = 0),
        (h._rawPrevTime = -1),
        (h._next = h._last = h._onUpdate = h._timeline = h.timeline = null),
        (h._paused = !1);
      var E = function () {
        j &&
          B() - C > 2e3 &&
          ("hidden" !== d.visibilityState || !i.lagSmoothing()) &&
          i.wake();
        var a = setTimeout(E, 2e3);
        a.unref && a.unref();
      };
      E(),
        (h.play = function (a, b) {
          return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
        }),
        (h.pause = function (a, b) {
          return null != a && this.seek(a, b), this.paused(!0);
        }),
        (h.resume = function (a, b) {
          return null != a && this.seek(a, b), this.paused(!1);
        }),
        (h.seek = function (a, b) {
          return this.totalTime(Number(a), b !== !1);
        }),
        (h.restart = function (a, b) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(a ? -this._delay : 0, b !== !1, !0);
        }),
        (h.reverse = function (a, b) {
          return (
            null != a && this.seek(a || this.totalDuration(), b),
            this.reversed(!0).paused(!1)
          );
        }),
        (h.render = function (a, b, c) {}),
        (h.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (this._gc || !this.timeline) && this._enabled(!0),
            this
          );
        }),
        (h.isActive = function () {
          var a,
            b = this._timeline,
            c = this._startTime;
          return (
            !b ||
            (!this._gc &&
              !this._paused &&
              b.isActive() &&
              (a = b.rawTime(!0)) >= c &&
              a < c + this.totalDuration() / this._timeScale - 1e-7)
          );
        }),
        (h._enabled = function (a, b) {
          return (
            j || i.wake(),
            (this._gc = !a),
            (this._active = this.isActive()),
            b !== !0 &&
              (a && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !a && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (h._kill = function (a, b) {
          return this._enabled(!1, !1);
        }),
        (h.kill = function (a, b) {
          return this._kill(a, b), this;
        }),
        (h._uncache = function (a) {
          for (var b = a ? this : this.timeline; b; )
            (b._dirty = !0), (b = b.timeline);
          return this;
        }),
        (h._swapSelfInParams = function (a) {
          for (var b = a.length, c = a.concat(); --b > -1; )
            "{self}" === a[b] && (c[b] = this);
          return c;
        }),
        (h._callback = function (a) {
          var b = this.vars,
            c = b[a],
            d = b[a + "Params"],
            e = b[a + "Scope"] || b.callbackScope || this,
            f = d ? d.length : 0;
          switch (f) {
            case 0:
              c.call(e);
              break;
            case 1:
              c.call(e, d[0]);
              break;
            case 2:
              c.call(e, d[0], d[1]);
              break;
            default:
              c.apply(e, d);
          }
        }),
        (h.eventCallback = function (a, b, c, d) {
          if ("on" === (a || "").substr(0, 2)) {
            var e = this.vars;
            if (1 === arguments.length) return e[a];
            null == b
              ? delete e[a]
              : ((e[a] = b),
                (e[a + "Params"] =
                  p(c) && -1 !== c.join("").indexOf("{self}")
                    ? this._swapSelfInParams(c)
                    : c),
                (e[a + "Scope"] = d)),
              "onUpdate" === a && (this._onUpdate = b);
          }
          return this;
        }),
        (h.delay = function (a) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + a - this._delay),
              (this._delay = a),
              this)
            : this._delay;
        }),
        (h.duration = function (a) {
          return arguments.length
            ? ((this._duration = this._totalDuration = a),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== a &&
                this.totalTime(this._totalTime * (a / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (h.totalDuration = function (a) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(a) : this._totalDuration
          );
        }),
        (h.time = function (a, b) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(a > this._duration ? this._duration : a, b))
            : this._time;
        }),
        (h.totalTime = function (a, b, c) {
          if ((j || i.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (0 > a && !c && (a += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var d = this._totalDuration,
                e = this._timeline;
              if (
                (a > d && !c && (a = d),
                (this._startTime =
                  (this._paused ? this._pauseTime : e._time) -
                  (this._reversed ? d - a : a) / this._timeScale),
                e._dirty || this._uncache(!1),
                e._timeline)
              )
                for (; e._timeline; )
                  e._timeline._time !==
                    (e._startTime + e._totalTime) / e._timeScale &&
                    e.totalTime(e._totalTime, !0),
                    (e = e._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== a || 0 === this._duration) &&
                (J.length && Z(), this.render(a, b, !1), J.length && Z());
          }
          return this;
        }),
        (h.progress = h.totalProgress =
          function (a, b) {
            var c = this.duration();
            return arguments.length
              ? this.totalTime(c * a, b)
              : c
              ? this._time / c
              : this.ratio;
          }),
        (h.startTime = function (a) {
          return arguments.length
            ? (a !== this._startTime &&
                ((this._startTime = a),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, a - this._delay)),
              this)
            : this._startTime;
        }),
        (h.endTime = function (a) {
          return (
            this._startTime +
            (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (h.timeScale = function (a) {
          if (!arguments.length) return this._timeScale;
          var b, c;
          for (
            a = a || m,
              this._timeline &&
                this._timeline.smoothChildTiming &&
                ((b = this._pauseTime),
                (c = b || 0 === b ? b : this._timeline.totalTime()),
                (this._startTime =
                  c - ((c - this._startTime) * this._timeScale) / a)),
              this._timeScale = a,
              c = this.timeline;
            c && c.timeline;

          )
            (c._dirty = !0), c.totalDuration(), (c = c.timeline);
          return this;
        }),
        (h.reversed = function (a) {
          return arguments.length
            ? (a != this._reversed &&
                ((this._reversed = a),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (h.paused = function (a) {
          if (!arguments.length) return this._paused;
          var b,
            c,
            d = this._timeline;
          return (
            a != this._paused &&
              d &&
              (j || a || i.wake(),
              (b = d.rawTime()),
              (c = b - this._pauseTime),
              !a &&
                d.smoothChildTiming &&
                ((this._startTime += c), this._uncache(!1)),
              (this._pauseTime = a ? b : null),
              (this._paused = a),
              (this._active = this.isActive()),
              !a &&
                0 !== c &&
                this._initted &&
                this.duration() &&
                ((b = d.smoothChildTiming
                  ? this._totalTime
                  : (b - this._startTime) / this._timeScale),
                this.render(b, b === this._totalTime, !0))),
            this._gc && !a && this._enabled(!0, !1),
            this
          );
        });
      var F = t("core.SimpleTimeline", function (a) {
        D.call(this, 0, a),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      (h = F.prototype = new D()),
        (h.constructor = F),
        (h.kill()._gc = !1),
        (h._first = h._last = h._recent = null),
        (h._sortChildren = !1),
        (h.add = h.insert =
          function (a, b, c, d) {
            var e, f;
            if (
              ((a._startTime = Number(b || 0) + a._delay),
              a._paused &&
                this !== a._timeline &&
                (a._pauseTime =
                  a._startTime +
                  (this.rawTime() - a._startTime) / a._timeScale),
              a.timeline && a.timeline._remove(a, !0),
              (a.timeline = a._timeline = this),
              a._gc && a._enabled(!0, !0),
              (e = this._last),
              this._sortChildren)
            )
              for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
            return (
              e
                ? ((a._next = e._next), (e._next = a))
                : ((a._next = this._first), (this._first = a)),
              a._next ? (a._next._prev = a) : (this._last = a),
              (a._prev = e),
              (this._recent = a),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (h._remove = function (a, b) {
          return (
            a.timeline === this &&
              (b || a._enabled(!1, !0),
              a._prev
                ? (a._prev._next = a._next)
                : this._first === a && (this._first = a._next),
              a._next
                ? (a._next._prev = a._prev)
                : this._last === a && (this._last = a._prev),
              (a._next = a._prev = a.timeline = null),
              a === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (h.render = function (a, b, c) {
          var d,
            e = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = a; e; )
            (d = e._next),
              (e._active || (a >= e._startTime && !e._paused && !e._gc)) &&
                (e._reversed
                  ? e.render(
                      (e._dirty ? e.totalDuration() : e._totalDuration) -
                        (a - e._startTime) * e._timeScale,
                      b,
                      c
                    )
                  : e.render((a - e._startTime) * e._timeScale, b, c)),
              (e = d);
        }),
        (h.rawTime = function () {
          return j || i.wake(), this._totalTime;
        });
      var G = t(
          "TweenLite",
          function (b, c, d) {
            if (
              (D.call(this, c, d),
              (this.render = G.prototype.render),
              null == b)
            )
              throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : G.selector(b) || b;
            var e,
              f,
              g,
              h =
                b.jquery ||
                (b.length &&
                  b !== a &&
                  b[0] &&
                  (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
              i = this.vars.overwrite;
            if (
              ((this._overwrite = i =
                null == i
                  ? V[G.defaultOverwrite]
                  : "number" == typeof i
                  ? i >> 0
                  : V[i]),
              (h || b instanceof Array || (b.push && p(b))) &&
                "number" != typeof b[0])
            )
              for (
                this._targets = g = n(b),
                  this._propLookup = [],
                  this._siblings = [],
                  e = 0;
                e < g.length;
                e++
              )
                (f = g[e]),
                  f
                    ? "string" != typeof f
                      ? f.length &&
                        f !== a &&
                        f[0] &&
                        (f[0] === a ||
                          (f[0].nodeType && f[0].style && !f.nodeType))
                        ? (g.splice(e--, 1),
                          (this._targets = g = g.concat(n(f))))
                        : ((this._siblings[e] = $(f, this, !1)),
                          1 === i &&
                            this._siblings[e].length > 1 &&
                            aa(f, this, null, 1, this._siblings[e]))
                      : ((f = g[e--] = G.selector(f)),
                        "string" == typeof f && g.splice(e + 1, 1))
                    : g.splice(e--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = $(b, this, !1)),
                1 === i &&
                  this._siblings.length > 1 &&
                  aa(b, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === c &&
                0 === this._delay &&
                this.vars.immediateRender !== !1)) &&
              ((this._time = -m), this.render(Math.min(0, -this._delay)));
          },
          !0
        ),
        H = function (b) {
          return (
            b &&
            b.length &&
            b !== a &&
            b[0] &&
            (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))
          );
        },
        I = function (a, b) {
          var c,
            d = {};
          for (c in a)
            U[c] ||
              (c in b &&
                "transform" !== c &&
                "x" !== c &&
                "y" !== c &&
                "width" !== c &&
                "height" !== c &&
                "className" !== c &&
                "border" !== c) ||
              !(!R[c] || (R[c] && R[c]._autoCSS)) ||
              ((d[c] = a[c]), delete a[c]);
          a.css = d;
        };
      (h = G.prototype = new D()),
        (h.constructor = G),
        (h.kill()._gc = !1),
        (h.ratio = 0),
        (h._firstPT = h._targets = h._overwrittenProps = h._startAt = null),
        (h._notifyPluginsOfEnabled = h._lazy = !1),
        (G.version = "1.20.3"),
        (G.defaultEase = h._ease = new v(null, null, 1, 1)),
        (G.defaultOverwrite = "auto"),
        (G.ticker = i),
        (G.autoSleep = 120),
        (G.lagSmoothing = function (a, b) {
          i.lagSmoothing(a, b);
        }),
        (G.selector =
          a.$ ||
          a.jQuery ||
          function (b) {
            var c = a.$ || a.jQuery;
            return c
              ? ((G.selector = c), c(b))
              : "undefined" == typeof d
              ? b
              : d.querySelectorAll
              ? d.querySelectorAll(b)
              : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
          });
      var J = [],
        K = {},
        L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        M = /[\+-]=-?[\.\d]/,
        N = function (a) {
          for (var b, c = this._firstPT, d = 1e-6; c; )
            (b = c.blob
              ? 1 === a && null != this.end
                ? this.end
                : a
                ? this.join("")
                : this.start
              : c.c * a + c.s),
              c.m
                ? (b = c.m(b, this._target || c.t))
                : d > b && b > -d && !c.blob && (b = 0),
              c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
              (c = c._next);
        },
        O = function (a, b, c, d) {
          var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = [],
            m = 0,
            n = "",
            o = 0;
          for (
            l.start = a,
              l.end = b,
              a = l[0] = a + "",
              b = l[1] = b + "",
              c && (c(l), (a = l[0]), (b = l[1])),
              l.length = 0,
              e = a.match(L) || [],
              f = b.match(L) || [],
              d &&
                ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
              i = f.length,
              h = 0;
            i > h;
            h++
          )
            (k = f[h]),
              (j = b.substr(m, b.indexOf(k, m) - m)),
              (n += j || !h ? j : ","),
              (m += j.length),
              o ? (o = (o + 1) % 5) : "rgba(" === j.substr(-5) && (o = 1),
              k === e[h] || e.length <= h
                ? (n += k)
                : (n && (l.push(n), (n = "")),
                  (g = parseFloat(e[h])),
                  l.push(g),
                  (l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c:
                      ("=" === k.charAt(1)
                        ? parseInt(k.charAt(0) + "1", 10) *
                          parseFloat(k.substr(2))
                        : parseFloat(k) - g) || 0,
                    f: 0,
                    m: o && 4 > o ? Math.round : 0,
                  })),
              (m += k.length);
          return (
            (n += b.substr(m)),
            n && l.push(n),
            (l.setRatio = N),
            M.test(b) && (l.end = null),
            l
          );
        },
        P = function (a, b, c, d, e, f, g, h, i) {
          "function" == typeof d && (d = d(i || 0, a));
          var j,
            k = typeof a[b],
            l =
              "function" !== k
                ? ""
                : b.indexOf("set") ||
                  "function" != typeof a["get" + b.substr(3)]
                ? b
                : "get" + b.substr(3),
            m = "get" !== c ? c : l ? (g ? a[l](g) : a[l]()) : a[b],
            n = "string" == typeof d && "=" === d.charAt(1),
            o = {
              t: a,
              p: b,
              s: m,
              f: "function" === k,
              pg: 0,
              n: e || b,
              m: f ? ("function" == typeof f ? f : Math.round) : 0,
              pr: 0,
              c: n
                ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2))
                : parseFloat(d) - m || 0,
            };
          return (
            ("number" != typeof m || ("number" != typeof d && !n)) &&
              (g ||
              isNaN(m) ||
              (!n && isNaN(d)) ||
              "boolean" == typeof m ||
              "boolean" == typeof d
                ? ((o.fp = g),
                  (j = O(
                    m,
                    n ? parseFloat(o.s) + o.c : d,
                    h || G.defaultStringFilter,
                    o
                  )),
                  (o = {
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: e || b,
                    pr: 0,
                    m: 0,
                  }))
                : ((o.s = parseFloat(m)),
                  n || (o.c = parseFloat(d) - o.s || 0))),
            o.c
              ? ((o._next = this._firstPT) && (o._next._prev = o),
                (this._firstPT = o),
                o)
              : void 0
          );
        },
        Q = (G._internals = {
          isArray: p,
          isSelector: H,
          lazyTweens: J,
          blobDif: O,
        }),
        R = (G._plugins = {}),
        S = (Q.tweenLookup = {}),
        T = 0,
        U = (Q.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1,
          yoyoEase: 1,
        }),
        V = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        W = (D._rootFramesTimeline = new F()),
        X = (D._rootTimeline = new F()),
        Y = 30,
        Z = (Q.lazyRender = function () {
          var a,
            b = J.length;
          for (K = {}; --b > -1; )
            (a = J[b]),
              a &&
                a._lazy !== !1 &&
                (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1));
          J.length = 0;
        });
      (X._startTime = i.time),
        (W._startTime = i.frame),
        (X._active = W._active = !0),
        setTimeout(Z, 1),
        (D._updateRoot = G.render =
          function () {
            var a, b, c;
            if (
              (J.length && Z(),
              X.render((i.time - X._startTime) * X._timeScale, !1, !1),
              W.render((i.frame - W._startTime) * W._timeScale, !1, !1),
              J.length && Z(),
              i.frame >= Y)
            ) {
              Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
              for (c in S) {
                for (b = S[c].tweens, a = b.length; --a > -1; )
                  b[a]._gc && b.splice(a, 1);
                0 === b.length && delete S[c];
              }
              if (
                ((c = X._first),
                (!c || c._paused) &&
                  G.autoSleep &&
                  !W._first &&
                  1 === i._listeners.tick.length)
              ) {
                for (; c && c._paused; ) c = c._next;
                c || i.sleep();
              }
            }
          }),
        i.addEventListener("tick", D._updateRoot);
      var $ = function (a, b, c) {
          var d,
            e,
            f = a._gsTweenID;
          if (
            (S[f || (a._gsTweenID = f = "t" + T++)] ||
              (S[f] = { target: a, tweens: [] }),
            b && ((d = S[f].tweens), (d[(e = d.length)] = b), c))
          )
            for (; --e > -1; ) d[e] === b && d.splice(e, 1);
          return S[f].tweens;
        },
        _ = function (a, b, c, d) {
          var e,
            f,
            g = a.vars.onOverwrite;
          return (
            g && (e = g(a, b, c, d)),
            (g = G.onOverwrite),
            g && (f = g(a, b, c, d)),
            e !== !1 && f !== !1
          );
        },
        aa = function (a, b, c, d, e) {
          var f, g, h, i;
          if (1 === d || d >= 4) {
            for (i = e.length, f = 0; i > f; f++)
              if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
              else if (5 === d) break;
            return g;
          }
          var j,
            k = b._startTime + m,
            l = [],
            n = 0,
            o = 0 === b._duration;
          for (f = e.length; --f > -1; )
            (h = e[f]) === b ||
              h._gc ||
              h._paused ||
              (h._timeline !== b._timeline
                ? ((j = j || ba(b, 0, o)), 0 === ba(h, j, o) && (l[n++] = h))
                : h._startTime <= k &&
                  h._startTime + h.totalDuration() / h._timeScale > k &&
                  (((o || !h._initted) && k - h._startTime <= 2e-10) ||
                    (l[n++] = h)));
          for (f = n; --f > -1; )
            if (
              ((h = l[f]),
              2 === d && h._kill(c, a, b) && (g = !0),
              2 !== d || (!h._firstPT && h._initted))
            ) {
              if (2 !== d && !_(h, b)) continue;
              h._enabled(!1, !1) && (g = !0);
            }
          return g;
        },
        ba = function (a, b, c) {
          for (
            var d = a._timeline, e = d._timeScale, f = a._startTime;
            d._timeline;

          ) {
            if (((f += d._startTime), (e *= d._timeScale), d._paused))
              return -100;
            d = d._timeline;
          }
          return (
            (f /= e),
            f > b
              ? f - b
              : (c && f === b) || (!a._initted && 2 * m > f - b)
              ? m
              : (f += a.totalDuration() / a._timeScale / e) > b + m
              ? 0
              : f - b - m
          );
        };
      (h._init = function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = this.vars,
          h = this._overwrittenProps,
          i = this._duration,
          j = !!g.immediateRender,
          k = g.ease;
        if (g.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
            (e = {});
          for (d in g.startAt) e[d] = g.startAt[d];
          if (
            ((e.data = "isStart"),
            (e.overwrite = !1),
            (e.immediateRender = !0),
            (e.lazy = j && g.lazy !== !1),
            (e.startAt = e.delay = null),
            (e.onUpdate = g.onUpdate),
            (e.onUpdateParams = g.onUpdateParams),
            (e.onUpdateScope = g.onUpdateScope || g.callbackScope || this),
            (this._startAt = G.to(this.target, 0, e)),
            j)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== i) return;
        } else if (g.runBackwards && 0 !== i)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            0 !== this._time && (j = !1), (c = {});
            for (d in g) (U[d] && "autoCSS" !== d) || (c[d] = g[d]);
            if (
              ((c.overwrite = 0),
              (c.data = "isFromStart"),
              (c.lazy = j && g.lazy !== !1),
              (c.immediateRender = j),
              (this._startAt = G.to(this.target, 0, c)),
              j)
            ) {
              if (0 === this._time) return;
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = k =
            k
              ? k instanceof v
                ? k
                : "function" == typeof k
                ? new v(k, g.easeParams)
                : w[k] || G.defaultEase
              : G.defaultEase),
          g.easeParams instanceof Array &&
            k.config &&
            (this._ease = k.config.apply(k, g.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (f = this._targets.length, a = 0; f > a; a++)
            this._initProps(
              this._targets[a],
              (this._propLookup[a] = {}),
              this._siblings[a],
              h ? h[a] : null,
              a
            ) && (b = !0);
        else
          b = this._initProps(
            this.target,
            this._propLookup,
            this._siblings,
            h,
            0
          );
        if (
          (b && G._onPluginEvent("_onInitAllProps", this),
          h &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          g.runBackwards)
        )
          for (c = this._firstPT; c; )
            (c.s += c.c), (c.c = -c.c), (c = c._next);
        (this._onUpdate = g.onUpdate), (this._initted = !0);
      }),
        (h._initProps = function (b, c, d, e, f) {
          var g, h, i, j, k, l;
          if (null == b) return !1;
          K[b._gsTweenID] && Z(),
            this.vars.css ||
              (b.style &&
                b !== a &&
                b.nodeType &&
                R.css &&
                this.vars.autoCSS !== !1 &&
                I(this.vars, b));
          for (g in this.vars)
            if (((l = this.vars[g]), U[g]))
              l &&
                (l instanceof Array || (l.push && p(l))) &&
                -1 !== l.join("").indexOf("{self}") &&
                (this.vars[g] = l = this._swapSelfInParams(l, this));
            else if (
              R[g] &&
              (j = new R[g]())._onInitTween(b, this.vars[g], this, f)
            ) {
              for (
                this._firstPT = k =
                  {
                    _next: this._firstPT,
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: g,
                    pg: 1,
                    pr: j._priority,
                    m: 0,
                  },
                  h = j._overwriteProps.length;
                --h > -1;

              )
                c[j._overwriteProps[h]] = this._firstPT;
              (j._priority || j._onInitAllProps) && (i = !0),
                (j._onDisable || j._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0),
                k._next && (k._next._prev = k);
            } else
              c[g] = P.call(
                this,
                b,
                g,
                "get",
                l,
                g,
                0,
                null,
                this.vars.stringFilter,
                f
              );
          return e && this._kill(e, b)
            ? this._initProps(b, c, d, e, f)
            : this._overwrite > 1 &&
              this._firstPT &&
              d.length > 1 &&
              aa(b, this, c, this._overwrite, d)
            ? (this._kill(c, b), this._initProps(b, c, d, e, f))
            : (this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (K[b._gsTweenID] = !0),
              i);
        }),
        (h.render = function (a, b, c) {
          var d,
            e,
            f,
            g,
            h = this._time,
            i = this._duration,
            j = this._rawPrevTime;
          if (a >= i - 1e-7 && a >= 0)
            (this._totalTime = this._time = i),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((d = !0),
                (e = "onComplete"),
                (c = c || this._timeline.autoRemoveChildren)),
              0 === i &&
                (this._initted || !this.vars.lazy || c) &&
                (this._startTime === this._timeline._duration && (a = 0),
                (0 > j ||
                  (0 >= a && a >= -1e-7) ||
                  (j === m && "isPause" !== this.data)) &&
                  j !== a &&
                  ((c = !0), j > m && (e = "onReverseComplete")),
                (this._rawPrevTime = g = !b || a || j === a ? a : m));
          else if (1e-7 > a)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== h || (0 === i && j > 0)) &&
                ((e = "onReverseComplete"), (d = this._reversed)),
              0 > a &&
                ((this._active = !1),
                0 === i &&
                  (this._initted || !this.vars.lazy || c) &&
                  (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0),
                  (this._rawPrevTime = g = !b || a || j === a ? a : m))),
              (!this._initted || (this._startAt && this._startAt.progress())) &&
                (c = !0);
          else if (((this._totalTime = this._time = a), this._easeType)) {
            var k = a / i,
              l = this._easeType,
              n = this._easePower;
            (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
              3 === l && (k *= 2),
              1 === n
                ? (k *= k)
                : 2 === n
                ? (k *= k * k)
                : 3 === n
                ? (k *= k * k * k)
                : 4 === n && (k *= k * k * k * k),
              1 === l
                ? (this.ratio = 1 - k)
                : 2 === l
                ? (this.ratio = k)
                : 0.5 > a / i
                ? (this.ratio = k / 2)
                : (this.ratio = 1 - k / 2);
          } else this.ratio = this._ease.getRatio(a / i);
          if (this._time !== h || c) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !c &&
                this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = h),
                  (this._rawPrevTime = j),
                  J.push(this),
                  void (this._lazy = [a, b])
                );
              this._time && !d
                ? (this.ratio = this._ease.getRatio(this._time / i))
                : d &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._lazy !== !1 && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== h &&
                    a >= 0 &&
                    (this._active = !0)),
                0 === h &&
                  (this._startAt &&
                    (a >= 0
                      ? this._startAt.render(a, !0, c)
                      : e || (e = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._time || 0 === i) &&
                    (b || this._callback("onStart"))),
                f = this._firstPT;
              f;

            )
              f.f
                ? f.t[f.p](f.c * this.ratio + f.s)
                : (f.t[f.p] = f.c * this.ratio + f.s),
                (f = f._next);
            this._onUpdate &&
              (0 > a &&
                this._startAt &&
                a !== -1e-4 &&
                this._startAt.render(a, !0, c),
              b ||
                ((this._time !== h || d || c) && this._callback("onUpdate"))),
              e &&
                (!this._gc || c) &&
                (0 > a &&
                  this._startAt &&
                  !this._onUpdate &&
                  a !== -1e-4 &&
                  this._startAt.render(a, !0, c),
                d &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !b && this.vars[e] && this._callback(e),
                0 === i &&
                  this._rawPrevTime === m &&
                  g !== m &&
                  (this._rawPrevTime = 0));
          }
        }),
        (h._kill = function (a, b, c) {
          if (
            ("all" === a && (a = null),
            null == a && (null == b || b === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          b =
            "string" != typeof b
              ? b || this._targets || this.target
              : G.selector(b) || b;
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m =
              c &&
              this._time &&
              c._startTime === this._startTime &&
              this._timeline === c._timeline;
          if ((p(b) || H(b)) && "number" != typeof b[0])
            for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0);
          else {
            if (this._targets) {
              for (d = this._targets.length; --d > -1; )
                if (b === this._targets[d]) {
                  (h = this._propLookup[d] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (e = this._overwrittenProps[d] =
                      a ? this._overwrittenProps[d] || {} : "all");
                  break;
                }
            } else {
              if (b !== this.target) return !1;
              (h = this._propLookup),
                (e = this._overwrittenProps =
                  a ? this._overwrittenProps || {} : "all");
            }
            if (h) {
              if (
                ((j = a || h),
                (k =
                  a !== e &&
                  "all" !== e &&
                  a !== h &&
                  ("object" != typeof a || !a._tempKill)),
                c && (G.onOverwrite || this.vars.onOverwrite))
              ) {
                for (f in j) h[f] && (l || (l = []), l.push(f));
                if ((l || !a) && !_(this, c, b, l)) return !1;
              }
              for (f in j)
                (g = h[f]) &&
                  (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                  g.pg && g.t._kill(j) && (i = !0),
                  (g.pg && 0 !== g.t._overwriteProps.length) ||
                    (g._prev
                      ? (g._prev._next = g._next)
                      : g === this._firstPT && (this._firstPT = g._next),
                    g._next && (g._next._prev = g._prev),
                    (g._next = g._prev = null)),
                  delete h[f]),
                  k && (e[f] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return i;
        }),
        (h.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              G._onPluginEvent("_onDisable", this),
            (this._firstPT =
              this._overwrittenProps =
              this._startAt =
              this._onUpdate =
                null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            D.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -m), this.render(Math.min(0, -this._delay))),
            this
          );
        }),
        (h._enabled = function (a, b) {
          if ((j || i.wake(), a && this._gc)) {
            var c,
              d = this._targets;
            if (d)
              for (c = d.length; --c > -1; )
                this._siblings[c] = $(d[c], this, !0);
            else this._siblings = $(this.target, this, !0);
          }
          return (
            D.prototype._enabled.call(this, a, b),
            this._notifyPluginsOfEnabled && this._firstPT
              ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
              : !1
          );
        }),
        (G.to = function (a, b, c) {
          return new G(a, b, c);
        }),
        (G.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = 0 != c.immediateRender),
            new G(a, b, c)
          );
        }),
        (G.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              0 != d.immediateRender && 0 != c.immediateRender),
            new G(a, b, d)
          );
        }),
        (G.delayedCall = function (a, b, c, d, e) {
          return new G(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            lazy: !1,
            useFrames: e,
            overwrite: 0,
          });
        }),
        (G.set = function (a, b) {
          return new G(a, 0, b);
        }),
        (G.getTweensOf = function (a, b) {
          if (null == a) return [];
          a = "string" != typeof a ? a : G.selector(a) || a;
          var c, d, e, f;
          if ((p(a) || H(a)) && "number" != typeof a[0]) {
            for (c = a.length, d = []; --c > -1; )
              d = d.concat(G.getTweensOf(a[c], b));
            for (c = d.length; --c > -1; )
              for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1);
          } else if (a._gsTweenID)
            for (d = $(a).concat(), c = d.length; --c > -1; )
              (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
          return d || [];
        }),
        (G.killTweensOf = G.killDelayedCallsTo =
          function (a, b, c) {
            "object" == typeof b && ((c = b), (b = !1));
            for (var d = G.getTweensOf(a, b), e = d.length; --e > -1; )
              d[e]._kill(c, a);
          });
      var ca = t(
        "plugins.TweenPlugin",
        function (a, b) {
          (this._overwriteProps = (a || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = b || 0),
            (this._super = ca.prototype);
        },
        !0
      );
      if (
        ((h = ca.prototype),
        (ca.version = "1.19.0"),
        (ca.API = 2),
        (h._firstPT = null),
        (h._addTween = P),
        (h.setRatio = N),
        (h._kill = function (a) {
          var b,
            c = this._overwriteProps,
            d = this._firstPT;
          if (null != a[this._propName]) this._overwriteProps = [];
          else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1);
          for (; d; )
            null != a[d.n] &&
              (d._next && (d._next._prev = d._prev),
              d._prev
                ? ((d._prev._next = d._next), (d._prev = null))
                : this._firstPT === d && (this._firstPT = d._next)),
              (d = d._next);
          return !1;
        }),
        (h._mod = h._roundProps =
          function (a) {
            for (var b, c = this._firstPT; c; )
              (b =
                a[this._propName] ||
                (null != c.n && a[c.n.split(this._propName + "_").join("")])),
                b &&
                  "function" == typeof b &&
                  (2 === c.f ? (c.t._applyPT.m = b) : (c.m = b)),
                (c = c._next);
          }),
        (G._onPluginEvent = function (a, b) {
          var c,
            d,
            e,
            f,
            g,
            h = b._firstPT;
          if ("_onInitAllProps" === a) {
            for (; h; ) {
              for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
              (h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h),
                (h._next = d) ? (d._prev = h) : (f = h),
                (h = g);
            }
            h = b._firstPT = e;
          }
          for (; h; )
            h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
              (h = h._next);
          return c;
        }),
        (ca.activate = function (a) {
          for (var b = a.length; --b > -1; )
            a[b].API === ca.API && (R[new a[b]()._propName] = a[b]);
          return !0;
        }),
        (s.plugin = function (a) {
          if (!(a && a.propName && a.init && a.API))
            throw "illegal plugin definition.";
          var b,
            c = a.propName,
            d = a.priority || 0,
            e = a.overwriteProps,
            f = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_mod",
              mod: "_mod",
              initAll: "_onInitAllProps",
            },
            g = t(
              "plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
              function () {
                ca.call(this, c, d), (this._overwriteProps = e || []);
              },
              a.global === !0
            ),
            h = (g.prototype = new ca(c));
          (h.constructor = g), (g.API = a.API);
          for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
          return (g.version = a.version), ca.activate([g]), g;
        }),
        (f = a._gsQueue))
      ) {
        for (g = 0; g < f.length; g++) f[g]();
        for (h in q)
          q[h].func ||
            a.console.log("GSAP encountered missing dependency: " + h);
      }
      j = !1;
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  );
