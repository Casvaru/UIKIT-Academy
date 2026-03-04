var bt = Object.defineProperty;
var ft = (i, t, e) => t in i ? bt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var _ = (i, t, e) => ft(i, typeof t != "symbol" ? t + "" : t, e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = globalThis, W = N.ShadowRoot && (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, q = Symbol(), K = /* @__PURE__ */ new WeakMap();
let ct = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== q) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (W && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = K.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && K.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const _t = (i) => new ct(typeof i == "string" ? i : i + "", void 0, q), Y = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((r, s, o) => r + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[o + 1], i[0]);
  return new ct(e, i, q);
}, $t = (i, t) => {
  if (W) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), s = N.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, i.appendChild(r);
  }
}, Q = W ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return _t(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: mt, defineProperty: yt, getOwnPropertyDescriptor: wt, getOwnPropertyNames: At, getOwnPropertySymbols: xt, getPrototypeOf: St } = Object, f = globalThis, X = f.trustedTypes, Et = X ? X.emptyScript : "", z = f.reactiveElementPolyfillSupport, M = (i, t) => i, D = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Et : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, dt = (i, t) => !mt(i, t), tt = { attribute: !0, type: String, converter: D, reflect: !1, useDefault: !1, hasChanged: dt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), f.litPropertyMetadata ?? (f.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let S = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = tt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(t, r, e);
      s !== void 0 && yt(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: s, set: o } = wt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(a) {
      this[e] = a;
    } };
    return { get: s, set(a) {
      const l = s == null ? void 0 : s.call(this);
      o == null || o.call(this, a), this.requestUpdate(t, l, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? tt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(M("elementProperties"))) return;
    const t = St(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(M("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(M("properties"))) {
      const e = this.properties, r = [...At(e), ...xt(e)];
      for (const s of r) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, s] of e) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const s = this._$Eu(e, r);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const s of r) e.unshift(Q(s));
    } else t !== void 0 && e.push(Q(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return $t(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, r);
    if (s !== void 0 && r.reflect === !0) {
      const a = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : D).toAttribute(e, r.type);
      this._$Em = t, a == null ? this.removeAttribute(s) : this.setAttribute(s, a), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o, a;
    const r = this.constructor, s = r._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const l = r.getPropertyOptions(s), n = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((o = l.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? l.converter : D;
      this._$Em = s;
      const d = n.fromAttribute(e, l.type);
      this[s] = d ?? ((a = this._$Ej) == null ? void 0 : a.get(s)) ?? d, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, s = !1, o) {
    var a;
    if (t !== void 0) {
      const l = this.constructor;
      if (s === !1 && (o = this[t]), r ?? (r = l.getPropertyOptions(t)), !((r.hasChanged ?? dt)(o, e) || r.useDefault && r.reflect && o === ((a = this._$Ej) == null ? void 0 : a.get(t)) && !this.hasAttribute(l._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: s, wrapped: o }, a) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, a ?? e ?? this[t]), o !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, a] of this._$Ep) this[o] = a;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [o, a] of s) {
        const { wrapped: l } = a, n = this[o];
        l !== !0 || this._$AL.has(o) || n === void 0 || this.C(o, void 0, a, n);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((s) => {
        var o;
        return (o = s.hostUpdate) == null ? void 0 : o.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
S.elementStyles = [], S.shadowRootOptions = { mode: "open" }, S[M("elementProperties")] = /* @__PURE__ */ new Map(), S[M("finalized")] = /* @__PURE__ */ new Map(), z == null || z({ ReactiveElement: S }), (f.reactiveElementVersions ?? (f.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = globalThis, et = (i) => i, T = k.trustedTypes, rt = T ? T.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ht = "$lit$", b = `lit$${Math.random().toFixed(9).slice(2)}$`, ut = "?" + b, Ct = `<${ut}>`, A = document, P = () => A.createComment(""), Z = (i) => i === null || typeof i != "object" && typeof i != "function", J = Array.isArray, Mt = (i) => J(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", B = `[ 	
\f\r]`, C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, st = /-->/g, it = />/g, $ = RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ot = /'/g, at = /"/g, pt = /^(?:script|style|textarea|title)$/i, kt = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), p = kt(1), x = Symbol.for("lit-noChange"), h = Symbol.for("lit-nothing"), nt = /* @__PURE__ */ new WeakMap(), m = A.createTreeWalker(A, 129);
function vt(i, t) {
  if (!J(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return rt !== void 0 ? rt.createHTML(t) : t;
}
const Pt = (i, t) => {
  const e = i.length - 1, r = [];
  let s, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = C;
  for (let l = 0; l < e; l++) {
    const n = i[l];
    let d, u, c = -1, v = 0;
    for (; v < n.length && (a.lastIndex = v, u = a.exec(n), u !== null); ) v = a.lastIndex, a === C ? u[1] === "!--" ? a = st : u[1] !== void 0 ? a = it : u[2] !== void 0 ? (pt.test(u[2]) && (s = RegExp("</" + u[2], "g")), a = $) : u[3] !== void 0 && (a = $) : a === $ ? u[0] === ">" ? (a = s ?? C, c = -1) : u[1] === void 0 ? c = -2 : (c = a.lastIndex - u[2].length, d = u[1], a = u[3] === void 0 ? $ : u[3] === '"' ? at : ot) : a === at || a === ot ? a = $ : a === st || a === it ? a = C : (a = $, s = void 0);
    const g = a === $ && i[l + 1].startsWith("/>") ? " " : "";
    o += a === C ? n + Ct : c >= 0 ? (r.push(d), n.slice(0, c) + ht + n.slice(c) + b + g) : n + b + (c === -2 ? l : g);
  }
  return [vt(i, o + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class H {
  constructor({ strings: t, _$litType$: e }, r) {
    let s;
    this.parts = [];
    let o = 0, a = 0;
    const l = t.length - 1, n = this.parts, [d, u] = Pt(t, e);
    if (this.el = H.createElement(d, r), m.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (s = m.nextNode()) !== null && n.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const c of s.getAttributeNames()) if (c.endsWith(ht)) {
          const v = u[a++], g = s.getAttribute(c).split(b), O = /([.?@])?(.*)/.exec(v);
          n.push({ type: 1, index: o, name: O[2], strings: g, ctor: O[1] === "." ? Ht : O[1] === "?" ? Lt : O[1] === "@" ? Ot : U }), s.removeAttribute(c);
        } else c.startsWith(b) && (n.push({ type: 6, index: o }), s.removeAttribute(c));
        if (pt.test(s.tagName)) {
          const c = s.textContent.split(b), v = c.length - 1;
          if (v > 0) {
            s.textContent = T ? T.emptyScript : "";
            for (let g = 0; g < v; g++) s.append(c[g], P()), m.nextNode(), n.push({ type: 2, index: ++o });
            s.append(c[v], P());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ut) n.push({ type: 2, index: o });
      else {
        let c = -1;
        for (; (c = s.data.indexOf(b, c + 1)) !== -1; ) n.push({ type: 7, index: o }), c += b.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const r = A.createElement("template");
    return r.innerHTML = t, r;
  }
}
function E(i, t, e = i, r) {
  var a, l;
  if (t === x) return t;
  let s = r !== void 0 ? (a = e._$Co) == null ? void 0 : a[r] : e._$Cl;
  const o = Z(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== o && ((l = s == null ? void 0 : s._$AO) == null || l.call(s, !1), o === void 0 ? s = void 0 : (s = new o(i), s._$AT(i, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = s : e._$Cl = s), s !== void 0 && (t = E(i, s._$AS(i, t.values), s, r)), t;
}
class Zt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? A).importNode(e, !0);
    m.currentNode = s;
    let o = m.nextNode(), a = 0, l = 0, n = r[0];
    for (; n !== void 0; ) {
      if (a === n.index) {
        let d;
        n.type === 2 ? d = new L(o, o.nextSibling, this, t) : n.type === 1 ? d = new n.ctor(o, n.name, n.strings, this, t) : n.type === 6 && (d = new Nt(o, this, t)), this._$AV.push(d), n = r[++l];
      }
      a !== (n == null ? void 0 : n.index) && (o = m.nextNode(), a++);
    }
    return m.currentNode = A, s;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class L {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, s) {
    this.type = 2, this._$AH = h, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = E(this, t, e), Z(t) ? t === h || t == null || t === "" ? (this._$AH !== h && this._$AR(), this._$AH = h) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Mt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== h && Z(this._$AH) ? this._$AA.nextSibling.data = t : this.T(A.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: r } = t, s = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = H.createElement(vt(r.h, r.h[0]), this.options)), r);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === s) this._$AH.p(e);
    else {
      const a = new Zt(s, this), l = a.u(this.options);
      a.p(e), this.T(l), this._$AH = a;
    }
  }
  _$AC(t) {
    let e = nt.get(t.strings);
    return e === void 0 && nt.set(t.strings, e = new H(t)), e;
  }
  k(t) {
    J(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, s = 0;
    for (const o of t) s === e.length ? e.push(r = new L(this.O(P()), this.O(P()), this, this.options)) : r = e[s], r._$AI(o), s++;
    s < e.length && (this._$AR(r && r._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = et(t).nextSibling;
      et(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class U {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, s, o) {
    this.type = 1, this._$AH = h, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = h;
  }
  _$AI(t, e = this, r, s) {
    const o = this.strings;
    let a = !1;
    if (o === void 0) t = E(this, t, e, 0), a = !Z(t) || t !== this._$AH && t !== x, a && (this._$AH = t);
    else {
      const l = t;
      let n, d;
      for (t = o[0], n = 0; n < o.length - 1; n++) d = E(this, l[r + n], e, n), d === x && (d = this._$AH[n]), a || (a = !Z(d) || d !== this._$AH[n]), d === h ? t = h : t !== h && (t += (d ?? "") + o[n + 1]), this._$AH[n] = d;
    }
    a && !s && this.j(t);
  }
  j(t) {
    t === h ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ht extends U {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === h ? void 0 : t;
  }
}
class Lt extends U {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== h);
  }
}
class Ot extends U {
  constructor(t, e, r, s, o) {
    super(t, e, r, s, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = E(this, t, e, 0) ?? h) === x) return;
    const r = this._$AH, s = t === h && r !== h || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, o = t !== h && (r === h || s);
    s && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Nt {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const R = k.litHtmlPolyfillSupport;
R == null || R(H, L), (k.litHtmlVersions ?? (k.litHtmlVersions = [])).push("3.3.2");
const Tt = (i, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = r._$litPart$;
  if (s === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = s = new L(t.insertBefore(P(), o), o, void 0, e ?? {});
  }
  return s._$AI(i), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y = globalThis;
let w = class extends S {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Tt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return x;
  }
};
var lt;
w._$litElement$ = !0, w.finalized = !0, (lt = y.litElementHydrateSupport) == null || lt.call(y, { LitElement: w });
const V = y.litElementPolyfillSupport;
V == null || V({ LitElement: w });
(y.litElementVersions ?? (y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ut = { CHILD: 2 }, zt = (i) => (...t) => ({ _$litDirective$: i, values: t });
class Bt {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, r) {
    this._$Ct = t, this._$AM = e, this._$Ci = r;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class I extends Bt {
  constructor(t) {
    if (super(t), this.it = h, t.type !== Ut.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === h || t == null) return this._t = void 0, this.it = t;
    if (t === x) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const e = [t];
    return e.raw = e, this._t = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
I.directiveName = "unsafeHTML", I.resultType = 1;
const gt = zt(I), Rt = Y`
  :host {
    display: inline-block;
  }

  /* ═══════════════════════════════════════
     BASE BUTTON - All fallbacks defined inline
     ═══════════════════════════════════════ */
  .ac-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm, 8px);
    font-family: var(--body-font) !important;
    font-size: var(--font-size-sm, 14px);
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    border: var(--border-sm, 2px) solid transparent;
    border-radius: var(--button-rounded, var(--border-radius-sm, 8px));
    height: var(--button-height-base, 40px);
    padding: 0 var(--spacing-lg, 24px);
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
    user-select: none;
    white-space: nowrap;
    color: var(--button-text-color, #e7e7e7);
  }

  /* Size: small */
  .ac-button--small {
    height: var(--button-height-small, 36px);
    font-size: var(--font-size-sm, 14px);
    padding: 0 var(--spacing-lg, 24px);
  }

  /* ═══════════════════════════════════════
     PRIMARY variant - filled
     ═══════════════════════════════════════ */
  .ac-button--primary {
    background-color: var(--primary-button-primary-background, var(--color-primary-600, #0C41FF));
    color: var(--button-text-color, #e7e7e7);
    border-color: transparent;
  }

  .ac-button--primary:hover {
    background-color: var(--primary-button-primary-background-hover, var(--color-primary-500, #0071F7));
  }

  .ac-button--primary:active {
    background-color: var(--color-primary-700, #002CCC);
  }

  /* ═══════════════════════════════════════
     SECONDARY variant - no background
     ═══════════════════════════════════════ */
  .ac-button--secondary {
    background-color: transparent;
    color: var(--button-text-color, #e7e7e7);
    border-color: transparent;
  }

  .ac-button--secondary:hover {
    background-color: var(--secondary-button-secondary-background-hover, var(--color-black-light, #27292E));
  }

  .ac-button--secondary:active {
    background-color: transparent;
    border-color: transparent;
  }

  /* ═══════════════════════════════════════
     TERTIARY variant - outline
     ═══════════════════════════════════════ */
  .ac-button--tertiary {
    background-color: var(--tertiary-button-tertiary-background, var(--color-black-medium, #1F2024));
    color: var(--button-text-color, #e7e7e7);
    border-color: var(--tertiary-button-tertiary-border, var(--color-black-stroke, #40424A));
  }

  .ac-button--tertiary:hover {
    background-color: var(--tertiary-button-tertiary-background-hover, var(--color-black-light, #27292E));
    border-color: var(--tertiary-button-tertiary-border-hover, var(--color-black-stroke, #40424A));
  }

  .ac-button--tertiary:active {
    background-color: var(--tertiary-button-tertiary-background-active, rgba(0,0,0,0.95));
    border-color: var(--tertiary-button-tertiary-border-hover, var(--color-black-stroke, #40424A));
  }

  /* ═══════════════════════════════════════
     DISABLED state
     ═══════════════════════════════════════ */
  .ac-button--disabled,
  .ac-button--disabled:hover,
  .ac-button--disabled:active {
    background-color: var(--button-color-disable, var(--color-white-dark, #A4A4A4));
    color: var(--button-text-color-disable, var(--color-black-light, #27292E));
    border-color: transparent;
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
  }

  /* Focus styles for accessibility (WCAG) */
  .ac-button--primary:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--primary-button-focus-ring, var(--focus-ring-color, rgba(12,65,255,0.9)));
  }

  .ac-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--focus-ring-color, rgba(12,65,255,0.9));
  }

  .ac-button--icon-only:focus-visible {
    box-shadow: 0 0 0 3px var(--focus-ring-color, rgba(12,65,255,0.9));
  }

  /* Icon slot */
  .ac-button__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    line-height: 1;
  }

  .ac-button__icon ::slotted(*) {
    width: 1em;
    height: 1em;
  }

  .ac-button__icon svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    color: inherit;
  }

  /* Icon-only button */
  .ac-button--icon-only {
    padding: 0;
    width: var(--button-height-base, 40px);
    justify-content: center;
  }

  .ac-button--icon-only.ac-button--small {
    width: var(--button-height-small, 36px);
  }

  @media (max-width: 1024px) {
    :host {
      display: block;
      width: 100%;
    }

    .ac-button {
      width: 100%;
      display: flex;
    }
  }
`, Vt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/>
</svg>
`, Dt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd"/>
</svg>
`, It = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"/>
</svg>
`, jt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"/>
</svg>
`, Ft = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
</svg>
`, Gt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>
</svg>
`, Wt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
</svg>
`, qt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/>
</svg>
`, Yt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/>
</svg>
`, Jt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd"/>
</svg>
`, Kt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd"/>
</svg>
`, Qt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
</svg>
`, Xt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/>
</svg>
`, te = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd"/>
</svg>
`, ee = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
</svg>
`, re = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd"/>
</svg>
`;
class j extends w {
  constructor() {
    super(), this.variant = "primary", this.size = "base", this.disabled = !1, this.iconName = void 0, this.iconOnly = !1, this.ariaLabel = "", this.href = void 0, this.target = "_self";
  }
  connectedCallback() {
    super.connectedCallback(), this.iconOnly && (!this.ariaLabel || this.ariaLabel.trim() === "") && console.warn("ac-button: `icon-only` is set but no `aria-label` provided. This may be inaccessible.");
  }
  /** Get the SVG HTML for the icon from heroicons */
  _getIconSVG() {
    if (!this.iconName) return "";
    let e = {
      plus: Vt,
      trash: Dt,
      pencil: It,
      check: jt,
      x: Ft,
      "arrow-left": Gt,
      "arrow-right": Wt,
      download: qt,
      upload: Yt,
      settings: Jt,
      user: Kt,
      heart: Qt,
      star: Xt,
      search: te,
      menu: ee,
      bell: re
    }[this.iconName];
    if (!e) return "";
    try {
      const o = new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
      o && o.tagName.toLowerCase() === "svg" && (o.setAttribute("width", "1em"), o.setAttribute("height", "1em"), o.setAttribute("aria-hidden", "true"), o.setAttribute("fill", "currentColor"), e = o.outerHTML);
    } catch {
    }
    return e || "";
  }
  /** Build CSS class list from properties */
  _getClasses() {
    const t = ["ac-button", `ac-button--${this.variant}`];
    return this.iconOnly && t.push("ac-button--icon-only"), this.size === "small" && t.push("ac-button--small"), this.disabled && t.push("ac-button--disabled"), t.join(" ");
  }
  render() {
    const t = this._getIconSVG(), e = p`
      ${t ? p`<span class="ac-button__icon">${gt(t)}</span>` : p`<slot name="icon"></slot>`}

      ${this.iconOnly ? "" : p`<slot></slot>`}
    `, r = this._getClasses();
    return this.href ? p`
        <a
          part="button"
          class=${r}
          href=${this.href}
          target=${this.target}
          aria-label=${this.iconOnly && this.ariaLabel ? this.ariaLabel : void 0}
          ?disabled=${this.disabled}
        >
          ${e}
        </a>
      ` : p`
      <button
        part="button"
        class=${r}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled}
        aria-label=${this.iconOnly && this.ariaLabel ? this.ariaLabel : void 0}
      >
        ${e}
      </button>
    `;
  }
}
_(j, "styles", [Rt]), _(j, "properties", {
  variant: { type: String, reflect: !0 },
  size: { type: String, reflect: !0 },
  disabled: { type: Boolean, reflect: !0 },
  iconName: { type: String, reflect: !0, attribute: "icon-name" },
  iconOnly: { type: Boolean, reflect: !0, attribute: "icon-only" },
  ariaLabel: { type: String, attribute: "aria-label" },
  href: { type: String },
  target: { type: String }
});
customElements.define("ac-button", j);
const se = Y`
  :host {
    display: block;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--section-header-gap, 16px);
    padding: var(--section-header-padding, 24px);
  }

  .section-header__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs, 4px);
    flex: 1;
    min-width: 0;
  }

  .section-header__title {
    font-family: var(--section-header-title-font, 'Merriweather', sans-serif);
    font-size: var(--h5, 24px);
    font-weight: 700;
    color: var(--section-header-title-color, #e7e7e7);
    margin: 0;
    line-height: 1.2;
  }

  .section-header__description {
    font-family: var(--section-header-description-font, 'Lato', sans-serif);
    font-size: var(--font-size-body-base, 16px);
    color: var(--section-header-description-color, #A4A4A4);
    margin: 0;
    line-height: 1.5;
  }

  .section-header__actions {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .section-header {
      flex-direction: column;
      align-items: stretch;
      gap: var(--spacing-lg, 24px);
    }

    .section-header__title {
      font-size: var(--h5, 25px);
    }

    .section-header__actions {
      width: 100%;
    }

    .section-header__actions ::slotted(*) {
      width: 100%;
    }
  }
`;
class F extends w {
  constructor() {
    super(), this.heading = "", this.description = "";
  }
  render() {
    return p`
      <div class="section-header">
        <div class="section-header__content">
          ${this.heading ? p`<h4 class="section-header__title">${this.heading}</h4>` : ""}
          ${this.description ? p`<p class="section-header__description">${this.description}</p>` : ""}
        </div>
        <div class="section-header__actions">
          <slot name="button"></slot>
        </div>
      </div>
    `;
  }
}
_(F, "styles", [se]), _(F, "properties", {
  heading: { type: String },
  description: { type: String }
});
customElements.define("ac-section-header", F);
const ie = Y`
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .card-dashboard {
    background-color: var(--card-dashboard-bg, var(--color-black-medium, #1F2024));
    border-radius: var(--card-dashboard-radius, var(--border-radius-base, 16px));
    padding: var(--card-dashboard-padding, var(--spacing-lg, 24px));
    display: flex;
    flex-direction: column;
    gap: var(--card-dashboard-gap, var(--spacing-base, 16px));
    border: 1px solid var(--card-dashboard-border-color, transparent);
    box-shadow: var(--card-dashboard-shadow, none);
  }

  .card-dashboard__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .card-dashboard__icon-wrapper {
    width: var(--card-dashboard-icon-size, 48px);
    height: var(--card-dashboard-icon-size, 48px);
    border-radius: var(--card-dashboard-icon-radius, var(--border-radius-sm, 12px));
    background-color: var(--card-dashboard-icon-bg, rgba(0, 113, 247, 0.15));
    color: var(--card-dashboard-icon-color, var(--color-primary-500, #0071F7));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-dashboard__icon-wrapper svg,
  .card-dashboard__icon-wrapper ::slotted(svg) {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  .card-dashboard__trend {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    border-radius: 100px;
    font-size: var(--font-size-body-sm, 14px);
    font-weight: 600;
    font-family: var(--body-font, 'Lato', sans-serif);
    line-height: 1;
  }

  .card-dashboard__trend--success {
    background-color: var(--card-dashboard-trend-bg-success, rgba(74, 222, 128, 0.1));
    color: var(--card-dashboard-trend-color-success, var(--color-succes-400, #4ADE80));
  }

  .card-dashboard__trend--danger {
    background-color: var(--card-dashboard-trend-bg-danger, rgba(248, 113, 113, 0.1));
    color: var(--card-dashboard-trend-color-danger, #F87171);
  }

  .card-dashboard__trend--neutral {
    background-color: var(--card-dashboard-trend-bg-neutral, rgba(231, 231, 231, 0.1));
    color: var(--card-dashboard-trend-color-neutral, var(--color-white-medium, #CECECE));
  }

  .card-dashboard__body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm, 8px);
  }

  .card-dashboard__title {
    font-family: var(--body-font, 'Lato', sans-serif);
    font-size: var(--card-dashboard-title-size, var(--font-size-body-base, 16px));
    color: var(--card-dashboard-title-color, var(--color-white-dark, #A4A4A4));
    margin: 0;
    font-weight: 500;
  }

  .card-dashboard__value {
    font-family: var(--body-title, 'Merriweather', sans-serif);
    font-size: var(--card-dashboard-value-size, var(--h4, 30px));
    color: var(--card-dashboard-value-color, var(--color-white, #e7e7e7));
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
  }

  .card-dashboard__description {
    font-family: var(--body-font, 'Lato', sans-serif);
    font-size: var(--card-dashboard-description-size, var(--font-size-body-sm, 14px));
    color: var(--card-dashboard-description-color, var(--color-white-dark, #A4A4A4));
    margin: 0;
  }
`, oe = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"/>
</svg>
`, ae = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd"/>
  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"/>
</svg>
`, ne = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z"/>
</svg>
`, le = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z"/>
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd"/>
</svg>
`, ce = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"/>
</svg>
`, de = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"/>
  <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd"/>
</svg>
`;
class G extends w {
  constructor() {
    super(), this.heading = "", this.value = "", this.description = "", this.iconName = void 0, this.trendLabel = "", this.trendStatus = "success";
  }
  _getIconSVG() {
    if (!this.iconName) return "";
    let e = {
      users: oe,
      "user-group": ae,
      "chart-bar": ne,
      "currency-dollar": le,
      "book-open": ce,
      "light-bulb": de
    }[this.iconName];
    if (!e) return "";
    try {
      const o = new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
      o && o.tagName.toLowerCase() === "svg" && (o.setAttribute("width", "1em"), o.setAttribute("height", "1em"), o.setAttribute("aria-hidden", "true"), o.setAttribute("fill", "currentColor"), e = o.outerHTML);
    } catch {
    }
    return e || "";
  }
  render() {
    const t = this._getIconSVG(), e = `card-dashboard__trend--${this.trendStatus}`;
    return p`
      <div class="card-dashboard">
        <div class="card-dashboard__header">
          <div class="card-dashboard__icon-wrapper">
            ${t ? p`${gt(t)}` : p`<slot name="icon"></slot>`}
          </div>
          ${this.trendLabel ? p`<div class="card-dashboard__trend ${e}">${this.trendLabel}</div>` : ""}
        </div>
        <div class="card-dashboard__body">
          ${this.heading ? p`<h4 class="card-dashboard__title">${this.heading}</h4>` : ""}
          ${this.value ? p`<p class="card-dashboard__value">${this.value}</p>` : ""}
          ${this.description ? p`<p class="card-dashboard__description">${this.description}</p>` : ""}
        </div>
      </div>
    `;
  }
}
_(G, "styles", [ie]), _(G, "properties", {
  heading: { type: String },
  value: { type: String },
  description: { type: String },
  iconName: { type: String, attribute: "icon-name" },
  trendLabel: { type: String, attribute: "trend-label" },
  trendStatus: { type: String, attribute: "trend-status" }
});
customElements.define("ac-card-dashboard", G);
export {
  j as AcButton,
  G as AcCardDashboard,
  F as AcSectionHeader
};
