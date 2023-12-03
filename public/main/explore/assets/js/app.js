
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
    
    class H {
        constructor(t) {
            (t = o(t)) && (this._element = t, M.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            M.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
                this[t] = null
            })
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i)
        }
        static getInstance(t) {
            return M.get(o(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.1.0"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }
    const B = (t, e = "hide") => {
        const n = "click.dismiss" + t.EVENT_KEY,
            s = t.NAME;
        P.on(document, n, `[data-bs-dismiss="${s}"]`, (function(n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), l(this)) return;
            const o = i(this) || this.closest("." + s);
            t.getOrCreateInstance(o)[e]()
        }))
    };
    class R extends H {
        static get NAME() {
            return "alert"
        }
        close() {
            if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t)
        }
        _destroyElement() {
            this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = R.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    B(R, "close"), m(R);
    class W extends H {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = W.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }

    function z(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function q(t) {
        return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
    }
    P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        W.getOrCreateInstance(e).toggle()
    }), m(W);
    const F = {
            setDataAttribute(t, e, i) {
                t.setAttribute("data-bs-" + q(e), i)
            },
            removeDataAttribute(t, e) {
                t.removeAttribute("data-bs-" + q(e))
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
                    let n = i.replace(/^bs/, "");
                    n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = z(t.dataset[i])
                }), e
            },
            getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + q(e))),
            offset(t) {
                const e = t.getBoundingClientRect();
                return {
                    top: e.top + window.pageYOffset,
                    left: e.left + window.pageXOffset
                }
            },
            position: t => ({
                top: t.offsetTop,
                left: t.offsetLeft
            })
        },
        U = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode;
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => t + ':not([tabindex^="-"])').join(", ");
                return this.find(e, t).filter(t => !l(t) && a(t))
            }
        },
        $ = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        V = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        K = "next",
        X = "prev",
        Y = "left",
        Q = "right",
        G = {
            ArrowLeft: Q,
            ArrowRight: Y
        };
    class Z extends H {
        constructor(t, e) {
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return $
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(K)
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }
        prev() {
            this._slide(X)
        }
        pause(t) {
            t || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (n(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = U.findOne(".active.carousel-item", this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) return void P.one(this._element, "slid.bs.carousel", () => this.to(t));
            if (e === t) return this.pause(), void this.cycle();
            const i = t > e ? K : X;
            this._slide(i, this._items[t])
        }
        _getConfig(t) {
            return t = { ...$,
                ...F.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, r("carousel", t, V), t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? Q : Y)
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), P.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t => {
                    !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
                },
                e = t => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                },
                i = t => {
                    !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
                };
            U.find(".carousel-item img", this._element).forEach(t => {
                P.on(t, "dragstart.bs.carousel", t => t.preventDefault())
            }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", e => t(e)), P.on(this._element, "pointerup.bs.carousel", t => i(t)), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", e => t(e)), P.on(this._element, "touchmove.bs.carousel", t => e(t)), P.on(this._element, "touchend.bs.carousel", t => i(t)))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = G[t.key];
            e && (t.preventDefault(), this._slide(e))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const i = t === K;
            return b(this._items, e, i, this._config.wrap)
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t),
                n = this._getItemIndex(U.findOne(".active.carousel-item", this._element));
            return P.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = U.findOne(".active", this._indicatorsElement);
                e.classList.remove("active"), e.removeAttribute("aria-current");
                const i = U.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < i.length; e++)
                    if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        i[e].classList.add("active"), i[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || U.findOne(".active.carousel-item", this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const i = this._directionToOrder(t),
                n = U.findOne(".active.carousel-item", this._element),
                s = this._getItemIndex(n),
                o = e || this._getItemByOrder(i, n),
                r = this._getItemIndex(o),
                a = Boolean(this._interval),
                l = i === K,
                c = l ? "carousel-item-start" : "carousel-item-end",
                h = l ? "carousel-item-next" : "carousel-item-prev",
                u = this._orderToDirection(i);
            if (o && o.classList.contains("active")) return void(this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, u).defaultPrevented) return;
            if (!n || !o) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
            const f = () => {
                P.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: o,
                    direction: u,
                    from: s,
                    to: r
                })
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h), d(o), n.classList.add(c), o.classList.add(c);
                const t = () => {
                    o.classList.remove(c, h), o.classList.add("active"), n.classList.remove("active", h, c), this._isSliding = !1, setTimeout(f, 0)
                };
                this._queueCallback(t, n, !0)
            } else n.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, f();
            a && this.cycle()
        }
        _directionToOrder(t) {
            return [Q, Y].includes(t) ? p() ? t === Y ? X : K : t === Y ? K : X : t
        }
        _orderToDirection(t) {
            return [K, X].includes(t) ? p() ? t === X ? Y : Q : t === X ? Q : Y : t
        }
        static carouselInterface(t, e) {
            const i = Z.getOrCreateInstance(t, e);
            let {
                _config: n
            } = i;
            "object" == typeof e && (n = { ...n,
                ...e
            });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                i[s]()
            } else n.interval && n.ride && (i.pause(), i.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                Z.carouselInterface(this, t)
            }))
        }
        static dataApiClickHandler(t) {
            const e = i(this);
            if (!e || !e.classList.contains("carousel")) return;
            const n = { ...F.getDataAttributes(e),
                    ...F.getDataAttributes(this)
                },
                s = this.getAttribute("data-bs-slide-to");
            s && (n.interval = !1), Z.carouselInterface(e, n), s && Z.getInstance(e).to(s), t.preventDefault()
        }
    }
    P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", () => {
        const t = U.find('[data-bs-ride="carousel"]');
        for (let e = 0, i = t.length; e < i; e++) Z.carouselInterface(t[e], Z.getInstance(t[e]))
    }), m(Z);
    const J = {
            toggle: !0,
            parent: null
        },
        tt = {
            toggle: "boolean",
            parent: "(null|element)"
        };
    class et extends H {
        constructor(t, i) {
            super(t), this._isTransitioning = !1, this._config = this._getConfig(i), this._triggerArray = [];
            const n = U.find('[data-bs-toggle="collapse"]');
            for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t],
                    s = e(i),
                    o = U.find(s).filter(t => t === this._element);
                null !== s && o.length && (this._selector = s, this._triggerArray.push(i))
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return J
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t, e = [];
            if (this._config.parent) {
                const t = U.find(".collapse .collapse", this._config.parent);
                e = U.find(".show, .collapsing", this._config.parent).filter(e => !t.includes(e))
            }
            const i = U.findOne(this._selector);
            if (e.length) {
                const n = e.find(t => i !== t);
                if (t = n ? et.getInstance(n) : null, t && t._isTransitioning) return
            }
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e.forEach(e => {
                i !== e && et.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(), t || M.set(e, "bs.collapse", null)
            });
            const n = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const s = "scroll" + (n[0].toUpperCase() + n.slice(1));
            this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n] = "", P.trigger(this._element, "shown.bs.collapse")
            }, this._element, !0), this._element.style[n] = this._element[s] + "px"
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", d(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t],
                    n = i(e);
                n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), P.trigger(this._element, "hidden.bs.collapse")
            }, this._element, !0)
        }
        _isShown(t = this._element) {
            return t.classList.contains("show")
        }
        _getConfig(t) {
            return (t = { ...J,
                ...F.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle), t.parent = o(t.parent), r("collapse", t, tt), t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = U.find(".collapse .collapse", this._config.parent);
            U.find('[data-bs-toggle="collapse"]', this._config.parent).filter(e => !t.includes(e)).forEach(t => {
                const e = i(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            })
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach(t => {
                e ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", e)
            })
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = et.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }))
        }
    }
    P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const i = e(this);
        U.find(i).forEach(t => {
            et.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        })
    })), m(et);
    var it = "top",
        nt = "bottom",
        st = "right",
        ot = "left",
        rt = [it, nt, st, ot],
        at = rt.reduce((function(t, e) {
            return t.concat([e + "-start", e + "-end"])
        }), []),
        lt = [].concat(rt, ["auto"]).reduce((function(t, e) {
            return t.concat([e, e + "-start", e + "-end"])
        }), []),
        ct = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function ht(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function dt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function ut(t) {
        return t instanceof dt(t).Element || t instanceof Element
    }

    function ft(t) {
        return t instanceof dt(t).HTMLElement || t instanceof HTMLElement
    }

    function pt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot)
    }
    var mt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                ft(s) && ht(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        },
        effect: function(t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function() {
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                                return t[e] = "", t
                            }), {});
                        ft(n) && ht(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                            n.removeAttribute(t)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function gt(t) {
        return t.split("-")[0]
    }
    var _t = Math.round;

    function bt(t, e) {
        void 0 === e && (e = !1);
        var i = t.getBoundingClientRect(),
            n = 1,
            s = 1;
        return ft(t) && e && (n = i.width / t.offsetWidth || 1, s = i.height / t.offsetHeight || 1), {
            width: _t(i.width / n),
            height: _t(i.height / s),
            top: _t(i.top / s),
            right: _t(i.right / n),
            bottom: _t(i.bottom / s),
            left: _t(i.left / n),
            x: _t(i.left / n),
            y: _t(i.top / s)
        }
    }

    function vt(t) {
        var e = bt(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function yt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && pt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function wt(t) {
        return dt(t).getComputedStyle(t)
    }

    function Et(t) {
        return ["table", "td", "th"].indexOf(ht(t)) >= 0
    }

    function At(t) {
        return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Tt(t) {
        return "html" === ht(t) ? t : t.assignedSlot || t.parentNode || (pt(t) ? t.host : null) || At(t)
    }

    function Ot(t) {
        return ft(t) && "fixed" !== wt(t).position ? t.offsetParent : null
    }

    function Ct(t) {
        for (var e = dt(t), i = Ot(t); i && Et(i) && "static" === wt(i).position;) i = Ot(i);
        return i && ("html" === ht(i) || "body" === ht(i) && "static" === wt(i).position) ? e : i || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && ft(t) && "fixed" === wt(t).position) return null;
            for (var i = Tt(t); ft(i) && ["html", "body"].indexOf(ht(i)) < 0;) {
                var n = wt(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function kt(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    var Lt = Math.max,
        xt = Math.min,
        Dt = Math.round;

    function St(t, e, i) {
        return Lt(t, xt(e, i))
    }

    function Nt(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }

    function It(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t, e
        }), {})
    }
    var Pt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e, i = t.state,
                    n = t.name,
                    s = t.options,
                    o = i.elements.arrow,
                    r = i.modifiersData.popperOffsets,
                    a = gt(i.placement),
                    l = kt(a),
                    c = [ot, st].indexOf(a) >= 0 ? "height" : "width";
                if (o && r) {
                    var h = function(t, e) {
                            return Nt("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                                placement: e.placement
                            })) : t) ? t : It(t, rt))
                        }(s.padding, i),
                        d = vt(o),
                        u = "y" === l ? it : ot,
                        f = "y" === l ? nt : st,
                        p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                        m = r[l] - i.rects.reference[l],
                        g = Ct(o),
                        _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                        b = p / 2 - m / 2,
                        v = h[u],
                        y = _ - d[c] - h[f],
                        w = _ / 2 - d[c] / 2 + b,
                        E = St(v, w, y),
                        A = l;
                    i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e)
                }
            },
            effect: function(t) {
                var e = t.state,
                    i = t.options.element,
                    n = void 0 === i ? "[data-popper-arrow]" : i;
                null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && yt(e.elements.popper, n) && (e.elements.arrow = n)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
        jt = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

    function Mt(t) {
        var e, i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.offsets,
            r = t.position,
            a = t.gpuAcceleration,
            l = t.adaptive,
            c = t.roundOffsets,
            h = !0 === c ? function(t) {
                var e = t.x,
                    i = t.y,
                    n = window.devicePixelRatio || 1;
                return {
                    x: Dt(Dt(e * n) / n) || 0,
                    y: Dt(Dt(i * n) / n) || 0
                }
            }(o) : "function" == typeof c ? c(o) : o,
            d = h.x,
            u = void 0 === d ? 0 : d,
            f = h.y,
            p = void 0 === f ? 0 : f,
            m = o.hasOwnProperty("x"),
            g = o.hasOwnProperty("y"),
            _ = ot,
            b = it,
            v = window;
        if (l) {
            var y = Ct(i),
                w = "clientHeight",
                E = "clientWidth";
            y === dt(i) && "static" !== wt(y = At(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === it && (b = nt, p -= y[w] - n.height, p *= a ? 1 : -1), s === ot && (_ = st, u -= y[E] - n.width, u *= a ? 1 : -1)
        }
        var A, T = Object.assign({
            position: r
        }, l && jt);
        return a ? Object.assign({}, T, ((A = {})[b] = g ? "0" : "", A[_] = m ? "0" : "", A.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", A)) : Object.assign({}, T, ((e = {})[b] = g ? p + "px" : "", e[_] = m ? u + "px" : "", e.transform = "", e))
    }
    var Ht = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = i.gpuAcceleration,
                    s = void 0 === n || n,
                    o = i.adaptive,
                    r = void 0 === o || o,
                    a = i.roundOffsets,
                    l = void 0 === a || a,
                    c = {
                        placement: gt(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: s
                    };
                null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Mt(Object.assign({}, c, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: r,
                    roundOffsets: l
                })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Mt(Object.assign({}, c, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement
                })
            },
            data: {}
        },
        Bt = {
            passive: !0
        },
        Rt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(t) {
                var e = t.state,
                    i = t.instance,
                    n = t.options,
                    s = n.scroll,
                    o = void 0 === s || s,
                    r = n.resize,
                    a = void 0 === r || r,
                    l = dt(e.elements.popper),
                    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                return o && c.forEach((function(t) {
                        t.addEventListener("scroll", i.update, Bt)
                    })), a && l.addEventListener("resize", i.update, Bt),
                    function() {
                        o && c.forEach((function(t) {
                            t.removeEventListener("scroll", i.update, Bt)
                        })), a && l.removeEventListener("resize", i.update, Bt)
                    }
            },
            data: {}
        },
        Wt = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function zt(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return Wt[t]
        }))
    }
    var qt = {
        start: "end",
        end: "start"
    };

    function Ft(t) {
        return t.replace(/start|end/g, (function(t) {
            return qt[t]
        }))
    }

    function Ut(t) {
        var e = dt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function $t(t) {
        return bt(At(t)).left + Ut(t).scrollLeft
    }

    function Vt(t) {
        var e = wt(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function Kt(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = function t(e) {
                return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : ft(e) && Vt(e) ? e : t(Tt(e))
            }(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = dt(n),
            r = s ? [o].concat(o.visualViewport || [], Vt(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Kt(Tt(r)))
    }

    function Xt(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Yt(t, e) {
        return "viewport" === e ? Xt(function(t) {
            var e = dt(t),
                i = At(t),
                n = e.visualViewport,
                s = i.clientWidth,
                o = i.clientHeight,
                r = 0,
                a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                width: s,
                height: o,
                x: r + $t(t),
                y: a
            }
        }(t)) : ft(e) ? function(t) {
            var e = bt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : Xt(function(t) {
            var e, i = At(t),
                n = Ut(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = Lt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = Lt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + $t(t),
                l = -n.scrollTop;
            return "rtl" === wt(s || i).direction && (a += Lt(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(At(t)))
    }

    function Qt(t) {
        return t.split("-")[1]
    }

    function Gt(t) {
        var e, i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? gt(s) : null,
            r = s ? Qt(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case it:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case nt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case st:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case ot:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var c = o ? kt(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case "start":
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case "end":
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }
}
))