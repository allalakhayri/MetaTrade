

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e()
}(this, (function() {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var r, n, i, o = "object",
        s = function(t) {
            return t && t.Math == Math && t
        },
        a = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(),
        c = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        l = !c((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        u = {}.propertyIsEnumerable,
        f = Object.getOwnPropertyDescriptor,
        h = {
            f: f && !u.call({
                1: 2
            }, 1) ? function(t) {
                var e = f(this, t);
                return !!e && e.enumerable
            } : u
        },
        d = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        p = {}.toString,
        v = function(t) {
            return p.call(t).slice(8, -1)
        },
        g = "".split,
        y = c((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == v(t) ? g.call(t, "") : Object(t)
        } : Object,
        b = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        },
        m = function(t) {
            return y(b(t))
        },
        x = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        E = function(t, e) {
            if (!x(t)) return t;
            var r, n;
            if (e && "function" == typeof(r = t.toString) && !x(n = r.call(t))) return n;
            if ("function" == typeof(r = t.valueOf) && !x(n = r.call(t))) return n;
            if (!e && "function" == typeof(r = t.toString) && !x(n = r.call(t))) return n;
            throw TypeError("Can't convert object to primitive value")
        },
        w = {}.hasOwnProperty,
        O = function(t, e) {
            return w.call(t, e)
        },
        _ = a.document,
        S = x(_) && x(_.createElement),
        A = function(t) {
            return S ? _.createElement(t) : {}
        },
        k = !l && !c((function() {
            return 7 != Object.defineProperty(A("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        L = Object.getOwnPropertyDescriptor,
        M = {
            f: l ? L : function(t, e) {
                if (t = m(t), e = E(e, !0), k) try {
                    return L(t, e)
                } catch (t) {}
                if (O(t, e)) return d(!h.f.call(t, e), t[e])
            }
        },
        T = function(t) {
            if (!x(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        j = Object.defineProperty,
        R = {
            f: l ? j : function(t, e, r) {
                if (T(t), e = E(e, !0), T(r), k) try {
                    return j(t, e, r)
                } catch (t) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
                return "value" in r && (t[e] = r.value), t
            }
        },
        W = l ? function(t, e, r) {
            return R.f(t, e, d(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        z = function(t, e) {
            try {
                W(a, t, e)
            } catch (r) {
                a[t] = e
            }
            return e
        },
        C = e((function(t) {
            var e = a["__core-js_shared__"] || z("__core-js_shared__", {});
            (t.exports = function(t, r) {
                return e[t] || (e[t] = void 0 !== r ? r : {})
            })("versions", []).push({
                version: "3.2.1",
                mode: "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        })),
        N = C("native-function-to-string", Function.toString),
        I = a.WeakMap,
        D = "function" == typeof I && /native code/.test(N.call(I)),
        P = 0,
        V = Math.random(),
        F = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++P + V).toString(36)
        },
        B = C("keys"),
        H = function(t) {
            return B[t] || (B[t] = F(t))
        },
        q = {},
        $ = a.WeakMap;
    if (D) {
        var X = new $,
            Y = X.get,
            G = X.has,
            U = X.set;
        r = function(t, e) {
            return U.call(X, t, e), e
        }, n = function(t) {
            return Y.call(X, t) || {}
        }, i = function(t) {
            return G.call(X, t)
        }
    } else {
        var Q = H("state");
        q[Q] = !0, r = function(t, e) {
            return W(t, Q, e), e
        }, n = function(t) {
            return O(t, Q) ? t[Q] : {}
        }, i = function(t) {
            return O(t, Q)
        }
    }
    var K = {
            set: r,
            get: n,
            has: i,
            enforce: function(t) {
                return i(t) ? n(t) : r(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var r;
                    if (!x(e) || (r = n(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        },
        J = e((function(t) {
            var e = K.get,
                r = K.enforce,
                n = String(N).split("toString");
            C("inspectSource", (function(t) {
                return N.call(t)
            })), (t.exports = function(t, e, i, o) {
                var s = !!o && !!o.unsafe,
                    c = !!o && !!o.enumerable,
                    l = !!o && !!o.noTargetGet;
                "function" == typeof i && ("string" != typeof e || O(i, "name") || W(i, "name", e), r(i).source = n.join("string" == typeof e ? e : "")), t !== a ? (s ? !l && t[e] && (c = !0) : delete t[e], c ? t[e] = i : W(t, e, i)) : c ? t[e] = i : z(e, i)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && e(this).source || N.call(this)
            }))
        })),
        Z = a,
        tt = function(t) {
            return "function" == typeof t ? t : void 0
        },
        et = function(t, e) {
            return arguments.length < 2 ? tt(Z[t]) || tt(a[t]) : Z[t] && Z[t][e] || a[t] && a[t][e]
        },
        rt = Math.ceil,
        nt = Math.floor,
        it = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? nt : rt)(t)
        },
        ot = Math.min,
        st = function(t) {
            return t > 0 ? ot(it(t), 9007199254740991) : 0
        },
        at = Math.max,
        ct = Math.min,
        lt = function(t) {
            return function(e, r, n) {
                var i, o = m(e),
                    s = st(o.length),
                    a = function(t, e) {
                        var r = it(t);
                        return r < 0 ? at(r + e, 0) : ct(r, e)
                    }(n, s);
                if (t && r != r) {
                    for (; s > a;)
                        if ((i = o[a++]) != i) return !0
                } else
                    for (; s > a; a++)
                        if ((t || a in o) && o[a] === r) return t || a || 0;
                return !t && -1
            }
        },
        ut = {
            includes: lt(!0),
            indexOf: lt(!1)
        }.indexOf,
        ft = function(t, e) {
            var r, n = m(t),
                i = 0,
                o = [];
            for (r in n) !O(q, r) && O(n, r) && o.push(r);
            for (; e.length > i;) O(n, r = e[i++]) && (~ut(o, r) || o.push(r));
            return o
        },
        ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        dt = ht.concat("length", "prototype"),
        pt = {
            f: Object.getOwnPropertyNames || function(t) {
                return ft(t, dt)
            }
        },
        vt = {
            f: Object.getOwnPropertySymbols
        },
        gt = et("Reflect", "ownKeys") || function(t) {
            var e = pt.f(T(t)),
                r = vt.f;
            return r ? e.concat(r(t)) : e
        },
        yt = function(t, e) {
            for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) {
                var s = r[o];
                O(t, s) || n(t, s, i(e, s))
            }
        },
        bt = /#|\.prototype\./,
        mt = function(t, e) {
            var r = Et[xt(t)];
            return r == Ot || r != wt && ("function" == typeof e ? c(e) : !!e)
        },
        xt = mt.normalize = function(t) {
            return String(t).replace(bt, ".").toLowerCase()
        },
        Et = mt.data = {},
        wt = mt.NATIVE = "N",
        Ot = mt.POLYFILL = "P",
        _t = mt,
        St = M.f,
        At = function(t, e) {
            var r, n, i, o, s, c = t.target,
                l = t.global,
                u = t.stat;
            if (r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype)
                for (n in e) {
                    if (o = e[n], i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n], !_t(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i) {
                        if (typeof o == typeof i) continue;
                        yt(o, i)
                    }(t.sham || i && i.sham) && W(o, "sham", !0), J(r, n, o, t)
                }
        },
        kt = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        },
        Lt = function(t, e, r) {
            if (kt(t), void 0 === e) return t;
            switch (r) {
                case 0:
                    return function() {
                        return t.call(e)
                    };
                case 1:
                    return function(r) {
                        return t.call(e, r)
                    };
                case 2:
                    return function(r, n) {
                        return t.call(e, r, n)
                    };
                case 3:
                    return function(r, n, i) {
                        return t.call(e, r, n, i)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        Mt = function(t) {
            return Object(b(t))
        },
        Tt = Array.isArray || function(t) {
            return "Array" == v(t)
        },
        jt = !!Object.getOwnPropertySymbols && !c((function() {
            return !String(Symbol())
        })),
        Rt = a.Symbol,
        Wt = C("wks"),
        zt = function(t) {
            return Wt[t] || (Wt[t] = jt && Rt[t] || (jt ? Rt : F)("Symbol." + t))
        },
        Ct = zt("species"),
        Nt = function(t, e) {
            var r;
            return Tt(t) && ("function" != typeof(r = t.constructor) || r !== Array && !Tt(r.prototype) ? x(r) && null === (r = r[Ct]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
        },
        It = [].push,
        Dt = function(t) {
            var e = 1 == t,
                r = 2 == t,
                n = 3 == t,
                i = 4 == t,
                o = 6 == t,
                s = 5 == t || o;
            return function(a, c, l, u) {
                for (var f, h, d = Mt(a), p = y(d), v = Lt(c, l, 3), g = st(p.length), b = 0, m = u || Nt, x = e ? m(a, g) : r ? m(a, 0) : void 0; g > b; b++)
                    if ((s || b in p) && (h = v(f = p[b], b, d), t))
                        if (e) x[b] = h;
                        else if (h) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return b;
                    case 2:
                        It.call(x, f)
                } else if (i) return !1;
                return o ? -1 : n || i ? i : x
            }
        },
        Pt = {
            forEach: Dt(0),
            map: Dt(1),
            filter: Dt(2),
            some: Dt(3),
            every: Dt(4),
            find: Dt(5),
            findIndex: Dt(6)
        },
        Vt = function(t, e) {
            var r = [][t];
            return !r || !c((function() {
                r.call(null, e || function() {
                    throw 1
                }, 1)
            }))
        },
        Ft = Pt.forEach,
        Bt = Vt("forEach") ? function(t) {
            return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0)
        } : [].forEach;
    At({
        target: "Array",
        proto: !0,
        forced: [].forEach != Bt
    }, {
        forEach: Bt
    });
    var Ht = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var qt in Ht) {
        var $t = a[qt],
            Xt = $t && $t.prototype;
        if (Xt && Xt.forEach !== Bt) try {
            W(Xt, "forEach", Bt)
        } catch (t) {
            Xt.forEach = Bt
        }
    }
    var Yt = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Gt = zt("species"),
        Ut = Pt.filter;
    At({
        target: "Array",
        proto: !0,
        forced: ! function(t) {
            return !c((function() {
                var e = [];
                return (e.constructor = {})[Gt] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        }("filter")
    }, {
        filter: function(t) {
            return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Qt = Object.keys || function(t) {
            return ft(t, ht)
        },
        Kt = l ? Object.defineProperties : function(t, e) {
            T(t);
            for (var r, n = Qt(e), i = n.length, o = 0; i > o;) R.f(t, r = n[o++], e[r]);
            return t
        },
        Jt = et("document", "documentElement"),
        Zt = H("IE_PROTO"),
        te = function() {},
        ee = function() {
            var t, e = A("iframe"),
                r = ht.length;
            for (e.style.display = "none", Jt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), ee = t.F; r--;) delete ee.prototype[ht[r]];
            return ee()
        },
        re = Object.create || function(t, e) {
            var r;
            return null !== t ? (te.prototype = T(t), r = new te, te.prototype = null, r[Zt] = t) : r = ee(), void 0 === e ? r : Kt(r, e)
        };
    q[Zt] = !0;
    var ne = zt("unscopables"),
        ie = Array.prototype;
    null == ie[ne] && W(ie, ne, re(null));
    var oe, se, ae, ce = function(t) {
            ie[ne][t] = !0
        },
        le = {},
        ue = !c((function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        fe = H("IE_PROTO"),
        he = Object.prototype,
        de = ue ? Object.getPrototypeOf : function(t) {
            return t = Mt(t), O(t, fe) ? t[fe] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? he : null
        },
        pe = zt("iterator"),
        ve = !1;
    [].keys && ("next" in (ae = [].keys()) ? (se = de(de(ae))) !== Object.prototype && (oe = se) : ve = !0), null == oe && (oe = {}), O(oe, pe) || W(oe, pe, (function() {
        return this
    }));
    var ge = {
            IteratorPrototype: oe,
            BUGGY_SAFARI_ITERATORS: ve
        },
        ye = R.f,
        be = zt("toStringTag"),
        me = function(t, e, r) {
            t && !O(t = r ? t : t.prototype, be) && ye(t, be, {
                configurable: !0,
                value: e
            })
        },
        xe = ge.IteratorPrototype,
        Ee = function() {
            return this
        },
        we = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                r = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array
            } catch (t) {}
            return function(r, n) {
                return T(r),
                    function(t) {
                        if (!x(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                    }(n), e ? t.call(r, n) : r.__proto__ = n, r
            }
        }() : void 0),
        Oe = ge.IteratorPrototype,
        _e = ge.BUGGY_SAFARI_ITERATORS,
        Se = zt("iterator"),
        Ae = function() {
            return this
        },
        ke = function(t, e, r, n, i, o, s) {
            ! function(t, e, r) {
                var n = e + " Iterator";
                t.prototype = re(xe, {
                    next: d(1, r)
                }), me(t, n, !1), le[n] = Ee
            }(r, e, n);
            var a, c, l, u = function(t) {
                    if (t === i && g) return g;
                    if (!_e && t in p) return p[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() {
                                return new r(this, t)
                            }
                    }
                    return function() {
                        return new r(this)
                    }
                },
                f = e + " Iterator",
                h = !1,
                p = t.prototype,
                v = p[Se] || p["@@iterator"] || i && p[i],
                g = !_e && v || u(i),
                y = "Array" == e && p.entries || v;
            if (y && (a = de(y.call(new t)), Oe !== Object.prototype && a.next && (de(a) !== Oe && (we ? we(a, Oe) : "function" != typeof a[Se] && W(a, Se, Ae)), me(a, f, !0))), "values" == i && v && "values" !== v.name && (h = !0, g = function() {
                    return v.call(this)
                }), p[Se] !== g && W(p, Se, g), le[e] = g, i)
                if (c = {
                        values: u("values"),
                        keys: o ? g : u("keys"),
                        entries: u("entries")
                    }, s)
                    for (l in c) !_e && !h && l in p || J(p, l, c[l]);
                else At({
                    target: e,
                    proto: !0,
                    forced: _e || h
                }, c);
            return c
        },
        Le = K.set,
        Me = K.getterFor("Array Iterator"),
        Te = ke(Array, "Array", (function(t, e) {
            Le(this, {
                type: "Array Iterator",
                target: m(t),
                index: 0,
                kind: e
            })
        }), (function() {
            var t = Me(this),
                e = t.target,
                r = t.kind,
                n = t.index++;
            return !e || n >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {
                value: e[n],
                done: !1
            } : {
                value: [n, e[n]],
                done: !1
            }
        }), "values");
    le.Arguments = le.Array, ce("keys"), ce("values"), ce("entries");
    var je = Object.assign,
        Re = !je || c((function() {
            var t = {},
                e = {},
                r = Symbol();
            return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
                e[t] = t
            })), 7 != je({}, t)[r] || "abcdefghijklmnopqrst" != Qt(je({}, e)).join("")
        })) ? function(t, e) {
            for (var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f; n > i;)
                for (var a, c = y(arguments[i++]), u = o ? Qt(c).concat(o(c)) : Qt(c), f = u.length, d = 0; f > d;) a = u[d++], l && !s.call(c, a) || (r[a] = c[a]);
            return r
        } : je;
    At({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Re
    }, {
        assign: Re
    });
    var We = zt("toStringTag"),
        ze = "Arguments" == v(function() {
            return arguments
        }()),
        Ce = function(t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), We)) ? r : ze ? v(e) : "Object" == (n = v(e)) && "function" == typeof e.callee ? "Arguments" : n
        },
        Ne = {};
    Ne[zt("toStringTag")] = "z";
    var Ie = "[object z]" !== String(Ne) ? function() {
            return "[object " + Ce(this) + "]"
        } : Ne.toString,
        De = Object.prototype;
    Ie !== De.toString && J(De, "toString", Ie, {
        unsafe: !0
    });
    var Pe = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        Ve = "[" + Pe + "]",
        Fe = RegExp("^" + Ve + Ve + "*"),
        Be = RegExp(Ve + Ve + "*$"),
        He = function(t) {
            return function(e) {
                var r = String(b(e));
                return 1 & t && (r = r.replace(Fe, "")), 2 & t && (r = r.replace(Be, "")), r
            }
        },
        qe = {
            start: He(1),
            end: He(2),
            trim: He(3)
        }.trim,
        $e = a.parseInt,
        Xe = /^[+-]?0[Xx]/,
        Ye = 8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16") ? function(t, e) {
            var r = qe(String(t));
            return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10))
        } : $e;
    At({
        global: !0,
        forced: parseInt != Ye
    }, {
        parseInt: Ye
    });
    var Ge = function(t) {
            return function(e, r) {
                var n, i, o = String(b(e)),
                    s = it(r),
                    a = o.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? t ? o.charAt(s) : n : t ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
            }
        },
        Ue = {
            codeAt: Ge(!1),
            charAt: Ge(!0)
        },
        Qe = Ue.charAt,
        Ke = K.set,
        Je = K.getterFor("String Iterator");
    ke(String, "String", (function(t) {
        Ke(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = Je(this),
            r = e.string,
            n = e.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (t = Qe(r, n), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var Ze = function(t, e, r) {
            for (var n in e) J(t, n, e[n], r);
            return t
        },
        tr = !c((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        er = e((function(t) {
            var e = R.f,
                r = F("meta"),
                n = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                o = function(t) {
                    e(t, r, {
                        value: {
                            objectID: "O" + ++n,
                            weakData: {}
                        }
                    })
                },
                s = t.exports = {
                    REQUIRED: !1,
                    fastKey: function(t, e) {
                        if (!x(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!O(t, r)) {
                            if (!i(t)) return "F";
                            if (!e) return "E";
                            o(t)
                        }
                        return t[r].objectID
                    },
                    getWeakData: function(t, e) {
                        if (!O(t, r)) {
                            if (!i(t)) return !0;
                            if (!e) return !1;
                            o(t)
                        }
                        return t[r].weakData
                    },
                    onFreeze: function(t) {
                        return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t
                    }
                };
            q[r] = !0
        })),
        rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")),
        nr = Array.prototype,
        ir = zt("iterator"),
        or = function(t, e, r, n) {
            try {
                return n ? e(T(r)[0], r[1]) : e(r)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && T(i.call(t)), e
            }
        },
        sr = e((function(t) {
            var e = function(t, e) {
                this.stopped = t, this.result = e
            };
            (t.exports = function(t, r, n, i, o) {
                var s, a, c, l, u, f, h, d = Lt(r, n, i ? 2 : 1);
                if (o) s = t;
                else {
                    if ("function" != typeof(a = function(t) {
                            if (null != t) return t[ir] || t["@@iterator"] || le[Ce(t)]
                        }(t))) throw TypeError("Target is not iterable");
                    if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) {
                        for (c = 0, l = st(t.length); l > c; c++)
                            if ((u = i ? d(T(f = t[c])[0], f[1]) : d(t[c])) && u instanceof e) return u;
                        return new e(!1)
                    }
                    s = a.call(t)
                }
                for (; !(f = s.next()).done;)
                    if ((u = or(s, d, f.value, i)) && u instanceof e) return u;
                return new e(!1)
            }).stop = function(t) {
                return new e(!0, t)
            }
        })),
        ar = function(t, e, r) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return t
        },
        cr = zt("iterator"),
        lr = !1;
    try {
        var ur = 0,
            fr = {
                next: function() {
                    return {
                        done: !!ur++
                    }
                },
                return: function() {
                    lr = !0
                }
            };
        fr[cr] = function() {
            return this
        }, Array.from(fr, (function() {
            throw 2
        }))
    } catch (t) {}
    var hr = function(t, e, r, n, i) {
            var o = a[t],
                s = o && o.prototype,
                l = o,
                u = n ? "set" : "add",
                f = {},
                h = function(t) {
                    var e = s[t];
                    J(s, t, "add" == t ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this
                    } : "delete" == t ? function(t) {
                        return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function(t) {
                        return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function(t) {
                        return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t)
                    } : function(t, r) {
                        return e.call(this, 0 === t ? 0 : t, r), this
                    })
                };
            if (_t(t, "function" != typeof o || !(i || s.forEach && !c((function() {
                    (new o).entries().next()
                }))))) l = r.getConstructor(e, t, n, u), er.REQUIRED = !0;
            else if (_t(t, !0)) {
                var d = new l,
                    p = d[u](i ? {} : -0, 1) != d,
                    v = c((function() {
                        d.has(1)
                    })),
                    g = function(t, e) {
                        if (!e && !lr) return !1;
                        var r = !1;
                        try {
                            var n = {};
                            n[cr] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: r = !0
                                        }
                                    }
                                }
                            }, t(n)
                        } catch (t) {}
                        return r
                    }((function(t) {
                        new o(t)
                    })),
                    y = !i && c((function() {
                        for (var t = new o, e = 5; e--;) t[u](e, e);
                        return !t.has(-0)
                    }));
                g || ((l = e((function(e, r) {
                    ar(e, l, t);
                    var i = function(t, e, r) {
                        var n, i;
                        return we && "function" == typeof(n = e.constructor) && n !== r && x(i = n.prototype) && i !== r.prototype && we(t, i), t
                    }(new o, e, l);
                    return null != r && sr(r, i[u], i, n), i
                }))).prototype = s, s.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(u), i && s.clear && delete s.clear
            }
            return f[t] = l, At({
                global: !0,
                forced: l != o
            }, f), me(l, t), i || r.setStrong(l, t, n), l
        },
        dr = er.getWeakData,
        pr = K.set,
        vr = K.getterFor,
        gr = Pt.find,
        yr = Pt.findIndex,
        br = 0,
        mr = function(t) {
            return t.frozen || (t.frozen = new xr)
        },
        xr = function() {
            this.entries = []
        },
        Er = function(t, e) {
            return gr(t.entries, (function(t) {
                return t[0] === e
            }))
        };
    xr.prototype = {
        get: function(t) {
            var e = Er(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!Er(this, t)
        },
        set: function(t, e) {
            var r = Er(this, t);
            r ? r[1] = e : this.entries.push([t, e])
        },
        delete: function(t) {
            var e = yr(this.entries, (function(e) {
                return e[0] === t
            }));
            return ~e && this.entries.splice(e, 1), !!~e
        }
    };
    var wr = {
            getConstructor: function(t, e, r, n) {
                var i = t((function(t, o) {
                        ar(t, i, e), pr(t, {
                            type: e,
                            id: br++,
                            frozen: void 0
                        }), null != o && sr(o, t[n], t, r)
                    })),
                    o = vr(e),
                    s = function(t, e, r) {
                        var n = o(t),
                            i = dr(T(e), !0);
                        return !0 === i ? mr(n).set(e, r) : i[n.id] = r, t
                    };
                return Ze(i.prototype, {
                    delete: function(t) {
                        var e = o(this);
                        if (!x(t)) return !1;
                        var r = dr(t);
                        return !0 === r ? mr(e).delete(t) : r && O(r, e.id) && delete r[e.id]
                    },
                    has: function(t) {
                        var e = o(this);
                        if (!x(t)) return !1;
                        var r = dr(t);
                        return !0 === r ? mr(e).has(t) : r && O(r, e.id)
                    }
                }), Ze(i.prototype, r ? {
                    get: function(t) {
                        var e = o(this);
                        if (x(t)) {
                            var r = dr(t);
                            return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0
                        }
                    },
                    set: function(t, e) {
                        return s(this, t, e)
                    }
                } : {
                    add: function(t) {
                        return s(this, t, !0)
                    }
                }), i
            }
        },
        Or = (e((function(t) {
            var e, r = K.enforce,
                n = !a.ActiveXObject && "ActiveXObject" in a,
                i = Object.isExtensible,
                o = function(t) {
                    return function() {
                        return t(this, arguments.length ? arguments[0] : void 0)
                    }
                },
                s = t.exports = hr("WeakMap", o, wr, !0, !0);
            if (D && n) {
                e = wr.getConstructor(o, "WeakMap", !0), er.REQUIRED = !0;
                var c = s.prototype,
                    l = c.delete,
                    u = c.has,
                    f = c.get,
                    h = c.set;
                Ze(c, {
                    delete: function(t) {
                        if (x(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), l.call(this, t) || n.frozen.delete(t)
                        }
                        return l.call(this, t)
                    },
                    has: function(t) {
                        if (x(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), u.call(this, t) || n.frozen.has(t)
                        }
                        return u.call(this, t)
                    },
                    get: function(t) {
                        if (x(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), u.call(this, t) ? f.call(this, t) : n.frozen.get(t)
                        }
                        return f.call(this, t)
                    },
                    set: function(t, n) {
                        if (x(t) && !i(t)) {
                            var o = r(this);
                            o.frozen || (o.frozen = new e), u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n)
                        } else h.call(this, t, n);
                        return this
                    }
                })
            }
        })), zt("iterator")),
        _r = zt("toStringTag"),
        Sr = Te.values;
    for (var Ar in Ht) {
        var kr = a[Ar],
            Lr = kr && kr.prototype;
        if (Lr) {
            if (Lr[Or] !== Sr) try {
                W(Lr, Or, Sr)
            } catch (t) {
                Lr[Or] = Sr
            }
            if (Lr[_r] || W(Lr, _r, Ar), Ht[Ar])
                for (var Mr in Te)
                    if (Lr[Mr] !== Te[Mr]) try {
                        W(Lr, Mr, Te[Mr])
                    } catch (t) {
                        Lr[Mr] = Te[Mr]
                    }
        }
    }
    var Tr = "Expected a function",
        jr = NaN,
        Rr = "[object Symbol]",
        Wr = /^\s+|\s+$/g,
        zr = /^[-+]0x[0-9a-f]+$/i,
        Cr = /^0b[01]+$/i,
        Nr = /^0o[0-7]+$/i,
        Ir = parseInt,
        Dr = "object" == typeof t && t && t.Object === Object && t,
        Pr = "object" == typeof self && self && self.Object === Object && self,
        Vr = Dr || Pr || Function("return this")(),
        Fr = Object.prototype.toString,
        Br = Math.max,
        Hr = Math.min,
        qr = function() {
            return Vr.Date.now()
        };

    function $r(t, e, r) {
        var n, i, o, s, a, c, l = 0,
            u = !1,
            f = !1,
            h = !0;
        if ("function" != typeof t) throw new TypeError(Tr);

        function d(e) {
            var r = n,
                o = i;
            return n = i = void 0, l = e, s = t.apply(o, r)
        }

        function p(t) {
            var r = t - c;
            return void 0 === c || r >= e || r < 0 || f && t - l >= o
        }

        function v() {
            var t = qr();
            if (p(t)) return g(t);
            a = setTimeout(v, function(t) {
                var r = e - (t - c);
                return f ? Hr(r, o - (t - l)) : r
            }(t))
        }

        function g(t) {
            return a = void 0, h && n ? d(t) : (n = i = void 0, s)
        }

        function y() {
            var t = qr(),
                r = p(t);
            if (n = arguments, i = this, c = t, r) {
                if (void 0 === a) return function(t) {
                    return l = t, a = setTimeout(v, e), u ? d(t) : s
                }(c);
                if (f) return a = setTimeout(v, e), d(c)
            }
            return void 0 === a && (a = setTimeout(v, e)), s
        }
        return e = Yr(e) || 0, Xr(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? Br(Yr(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
            void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
        }, y.flush = function() {
            return void 0 === a ? s : g(qr())
        }, y
    }

    function Xr(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function Yr(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && Fr.call(t) == Rr
            }(t)) return jr;
        if (Xr(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Xr(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Wr, "");
        var r = Cr.test(t);
        return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t
    }
    var Gr = function(t, e, r) {
            var n = !0,
                i = !0;
            if ("function" != typeof t) throw new TypeError(Tr);
            return Xr(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), $r(t, e, {
                leading: n,
                maxWait: e,
                trailing: i
            })
        },
        Ur = "Expected a function",
        Qr = NaN,
        Kr = "[object Symbol]",
        Jr = /^\s+|\s+$/g,
        Zr = /^[-+]0x[0-9a-f]+$/i,
        tn = /^0b[01]+$/i,
        en = /^0o[0-7]+$/i,
        rn = parseInt,
        nn = "object" == typeof t && t && t.Object === Object && t,
        on = "object" == typeof self && self && self.Object === Object && self,
        sn = nn || on || Function("return this")(),
        an = Object.prototype.toString,
        cn = Math.max,
        ln = Math.min,
        un = function() {
            return sn.Date.now()
        };

    function fn(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function hn(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && an.call(t) == Kr
            }(t)) return Qr;
        if (fn(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = fn(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Jr, "");
        var r = tn.test(t);
        return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t
    }
    var dn = function(t, e, r) {
            var n, i, o, s, a, c, l = 0,
                u = !1,
                f = !1,
                h = !0;
            if ("function" != typeof t) throw new TypeError(Ur);

            function d(e) {
                var r = n,
                    o = i;
                return n = i = void 0, l = e, s = t.apply(o, r)
            }

            function p(t) {
                var r = t - c;
                return void 0 === c || r >= e || r < 0 || f && t - l >= o
            }

            function v() {
                var t = un();
                if (p(t)) return g(t);
                a = setTimeout(v, function(t) {
                    var r = e - (t - c);
                    return f ? ln(r, o - (t - l)) : r
                }(t))
            }

            function g(t) {
                return a = void 0, h && n ? d(t) : (n = i = void 0, s)
            }

            function y() {
                var t = un(),
                    r = p(t);
                if (n = arguments, i = this, c = t, r) {
                    if (void 0 === a) return function(t) {
                        return l = t, a = setTimeout(v, e), u ? d(t) : s
                    }(c);
                    if (f) return a = setTimeout(v, e), d(c)
                }
                return void 0 === a && (a = setTimeout(v, e)), s
            }
            return e = hn(e) || 0, fn(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? cn(hn(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
                void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
            }, y.flush = function() {
                return void 0 === a ? s : g(un())
            }, y
        },
        pn = "Expected a function",
        vn = "__lodash_hash_undefined__",
        gn = "[object Function]",
        yn = "[object GeneratorFunction]",
        bn = /^\[object .+?Constructor\]$/,
        mn = "object" == typeof t && t && t.Object === Object && t,
        xn = "object" == typeof self && self && self.Object === Object && self,
        En = mn || xn || Function("return this")();
    var wn = Array.prototype,
        On = Function.prototype,
        _n = Object.prototype,
        Sn = En["__core-js_shared__"],
        An = function() {
            var t = /[^.]+$/.exec(Sn && Sn.keys && Sn.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(),
        kn = On.toString,
        Ln = _n.hasOwnProperty,
        Mn = _n.toString,
        Tn = RegExp("^" + kn.call(Ln).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        jn = wn.splice,
        Rn = Vn(En, "Map"),
        Wn = Vn(Object, "create");

    function zn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Cn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Nn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function In(t, e) {
        for (var r, n, i = t.length; i--;)
            if ((r = t[i][0]) === (n = e) || r != r && n != n) return i;
        return -1
    }

    function Dn(t) {
        return !(!Bn(t) || (e = t, An && An in e)) && (function(t) {
            var e = Bn(t) ? Mn.call(t) : "";
            return e == gn || e == yn
        }(t) || function(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
                e = !!(t + "")
            } catch (t) {}
            return e
        }(t) ? Tn : bn).test(function(t) {
            if (null != t) {
                try {
                    return kn.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }(t));
        var e
    }

    function Pn(t, e) {
        var r, n, i = t.__data__;
        return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
    }

    function Vn(t, e) {
        var r = function(t, e) {
            return null == t ? void 0 : t[e]
        }(t, e);
        return Dn(r) ? r : void 0
    }

    function Fn(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(pn);
        var r = function() {
            var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, n);
            return r.cache = o.set(i, s), s
        };
        return r.cache = new(Fn.Cache || Nn), r
    }

    function Bn(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    zn.prototype.clear = function() {
        this.__data__ = Wn ? Wn(null) : {}
    }, zn.prototype.delete = function(t) {
        return this.has(t) && delete this.__data__[t]
    }, zn.prototype.get = function(t) {
        var e = this.__data__;
        if (Wn) {
            var r = e[t];
            return r === vn ? void 0 : r
        }
        return Ln.call(e, t) ? e[t] : void 0
    }, zn.prototype.has = function(t) {
        var e = this.__data__;
        return Wn ? void 0 !== e[t] : Ln.call(e, t)
    }, zn.prototype.set = function(t, e) {
        return this.__data__[t] = Wn && void 0 === e ? vn : e, this
    }, Cn.prototype.clear = function() {
        this.__data__ = []
    }, Cn.prototype.delete = function(t) {
        var e = this.__data__,
            r = In(e, t);
        return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0)
    }, Cn.prototype.get = function(t) {
        var e = this.__data__,
            r = In(e, t);
        return r < 0 ? void 0 : e[r][1]
    }, Cn.prototype.has = function(t) {
        return In(this.__data__, t) > -1
    }, Cn.prototype.set = function(t, e) {
        var r = this.__data__,
            n = In(r, t);
        return n < 0 ? r.push([t, e]) : r[n][1] = e, this
    }, Nn.prototype.clear = function() {
        this.__data__ = {
            hash: new zn,
            map: new(Rn || Cn),
            string: new zn
        }
    }, Nn.prototype.delete = function(t) {
        return Pn(this, t).delete(t)
    }, Nn.prototype.get = function(t) {
        return Pn(this, t).get(t)
    }, Nn.prototype.has = function(t) {
        return Pn(this, t).has(t)
    }, Nn.prototype.set = function(t, e) {
        return Pn(this, t).set(t, e), this
    }, Fn.Cache = Nn;
    var Hn = Fn,
        qn = function() {
            if ("undefined" != typeof Map) return Map;

            function t(t, e) {
                var r = -1;
                return t.some((function(t, n) {
                    return t[0] === e && (r = n, !0)
                })), r
            }
            return function() {
                function e() {
                    this.__entries__ = []
                }
                return Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.get = function(e) {
                    var r = t(this.__entries__, e),
                        n = this.__entries__[r];
                    return n && n[1]
                }, e.prototype.set = function(e, r) {
                    var n = t(this.__entries__, e);
                    ~n ? this.__entries__[n][1] = r : this.__entries__.push([e, r])
                }, e.prototype.delete = function(e) {
                    var r = this.__entries__,
                        n = t(r, e);
                    ~n && r.splice(n, 1)
                }, e.prototype.has = function(e) {
                    return !!~t(this.__entries__, e)
                }, e.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, e.prototype.forEach = function(t, e) {
                    void 0 === e && (e = null);
                    for (var r = 0, n = this.__entries__; r < n.length; r++) {
                        var i = n[r];
                        t.call(e, i[1], i[0])
                    }
                }, e
            }()
        }(),
        $n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        Xn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        Yn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Xn) : function(t) {
            return setTimeout((function() {
                return t(Date.now())
            }), 1e3 / 60)
        },
        Gn = 2;
    var Un = 20,
        Qn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        Kn = "undefined" != typeof MutationObserver,
     
    }