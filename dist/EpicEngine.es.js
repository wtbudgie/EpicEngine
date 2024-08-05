var M = 1e-6, g = typeof Float32Array < "u" ? Float32Array : Array, z = Math.random;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, r = arguments.length; r--; )
    e += arguments[r] * arguments[r];
  return Math.sqrt(e);
});
function T() {
  var e = new g(16);
  return g != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function W(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Z(e, r, t) {
  var n = t[0], i = t[1], a = t[2], s, c, h, o, f, v, l, p, m, u, d, x;
  return r === e ? (e[12] = r[0] * n + r[4] * i + r[8] * a + r[12], e[13] = r[1] * n + r[5] * i + r[9] * a + r[13], e[14] = r[2] * n + r[6] * i + r[10] * a + r[14], e[15] = r[3] * n + r[7] * i + r[11] * a + r[15]) : (s = r[0], c = r[1], h = r[2], o = r[3], f = r[4], v = r[5], l = r[6], p = r[7], m = r[8], u = r[9], d = r[10], x = r[11], e[0] = s, e[1] = c, e[2] = h, e[3] = o, e[4] = f, e[5] = v, e[6] = l, e[7] = p, e[8] = m, e[9] = u, e[10] = d, e[11] = x, e[12] = s * n + f * i + m * a + r[12], e[13] = c * n + v * i + u * a + r[13], e[14] = h * n + l * i + d * a + r[14], e[15] = o * n + p * i + x * a + r[15]), e;
}
function k(e, r, t) {
  var n = Math.sin(t), i = Math.cos(t), a = r[0], s = r[1], c = r[2], h = r[3], o = r[4], f = r[5], v = r[6], l = r[7];
  return r !== e && (e[8] = r[8], e[9] = r[9], e[10] = r[10], e[11] = r[11], e[12] = r[12], e[13] = r[13], e[14] = r[14], e[15] = r[15]), e[0] = a * i + o * n, e[1] = s * i + f * n, e[2] = c * i + v * n, e[3] = h * i + l * n, e[4] = o * i - a * n, e[5] = f * i - s * n, e[6] = v * i - c * n, e[7] = l * i - h * n, e;
}
function J(e, r, t, n, i) {
  var a = 1 / Math.tan(r / 2), s;
  return e[0] = a / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== 1 / 0 ? (s = 1 / (n - i), e[10] = (i + n) * s, e[14] = 2 * i * n * s) : (e[10] = -1, e[14] = -2 * n), e;
}
var K = J;
function ee(e, r, t, n) {
  var i, a, s, c, h, o, f, v, l, p, m = r[0], u = r[1], d = r[2], x = n[0], A = n[1], $ = n[2], P = t[0], E = t[1], q = t[2];
  return Math.abs(m - P) < M && Math.abs(u - E) < M && Math.abs(d - q) < M ? W(e) : (f = m - P, v = u - E, l = d - q, p = 1 / Math.hypot(f, v, l), f *= p, v *= p, l *= p, i = A * l - $ * v, a = $ * f - x * l, s = x * v - A * f, p = Math.hypot(i, a, s), p ? (p = 1 / p, i *= p, a *= p, s *= p) : (i = 0, a = 0, s = 0), c = v * s - l * a, h = l * i - f * s, o = f * a - v * i, p = Math.hypot(c, h, o), p ? (p = 1 / p, c *= p, h *= p, o *= p) : (c = 0, h = 0, o = 0), e[0] = i, e[1] = c, e[2] = f, e[3] = 0, e[4] = a, e[5] = h, e[6] = v, e[7] = 0, e[8] = s, e[9] = o, e[10] = l, e[11] = 0, e[12] = -(i * m + a * u + s * d), e[13] = -(c * m + h * u + o * d), e[14] = -(f * m + v * u + l * d), e[15] = 1, e);
}
function y() {
  var e = new g(3);
  return g != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function re(e) {
  var r = new g(3);
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r;
}
function D(e) {
  var r = e[0], t = e[1], n = e[2];
  return Math.hypot(r, t, n);
}
function te(e, r, t) {
  var n = new g(3);
  return n[0] = e, n[1] = r, n[2] = t, n;
}
function ne(e, r) {
  return e[0] = r[0], e[1] = r[1], e[2] = r[2], e;
}
function ie(e, r, t, n) {
  return e[0] = r, e[1] = t, e[2] = n, e;
}
function U(e, r, t) {
  return e[0] = r[0] + t[0], e[1] = r[1] + t[1], e[2] = r[2] + t[2], e;
}
function G(e, r, t) {
  return e[0] = r[0] - t[0], e[1] = r[1] - t[1], e[2] = r[2] - t[2], e;
}
function O(e, r, t) {
  return e[0] = r[0] * t[0], e[1] = r[1] * t[1], e[2] = r[2] * t[2], e;
}
function j(e, r, t) {
  return e[0] = r[0] / t[0], e[1] = r[1] / t[1], e[2] = r[2] / t[2], e;
}
function ae(e, r) {
  return e[0] = Math.ceil(r[0]), e[1] = Math.ceil(r[1]), e[2] = Math.ceil(r[2]), e;
}
function se(e, r) {
  return e[0] = Math.floor(r[0]), e[1] = Math.floor(r[1]), e[2] = Math.floor(r[2]), e;
}
function ce(e, r, t) {
  return e[0] = Math.min(r[0], t[0]), e[1] = Math.min(r[1], t[1]), e[2] = Math.min(r[2], t[2]), e;
}
function he(e, r, t) {
  return e[0] = Math.max(r[0], t[0]), e[1] = Math.max(r[1], t[1]), e[2] = Math.max(r[2], t[2]), e;
}
function oe(e, r) {
  return e[0] = Math.round(r[0]), e[1] = Math.round(r[1]), e[2] = Math.round(r[2]), e;
}
function fe(e, r, t) {
  return e[0] = r[0] * t, e[1] = r[1] * t, e[2] = r[2] * t, e;
}
function ve(e, r, t, n) {
  return e[0] = r[0] + t[0] * n, e[1] = r[1] + t[1] * n, e[2] = r[2] + t[2] * n, e;
}
function L(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2];
  return Math.hypot(t, n, i);
}
function b(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2];
  return t * t + n * n + i * i;
}
function F(e) {
  var r = e[0], t = e[1], n = e[2];
  return r * r + t * t + n * n;
}
function le(e, r) {
  return e[0] = -r[0], e[1] = -r[1], e[2] = -r[2], e;
}
function pe(e, r) {
  return e[0] = 1 / r[0], e[1] = 1 / r[1], e[2] = 1 / r[2], e;
}
function de(e, r) {
  var t = r[0], n = r[1], i = r[2], a = t * t + n * n + i * i;
  return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = r[0] * a, e[1] = r[1] * a, e[2] = r[2] * a, e;
}
function R(e, r) {
  return e[0] * r[0] + e[1] * r[1] + e[2] * r[2];
}
function C(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = t[0], c = t[1], h = t[2];
  return e[0] = i * h - a * c, e[1] = a * s - n * h, e[2] = n * c - i * s, e;
}
function me(e, r, t, n) {
  var i = r[0], a = r[1], s = r[2];
  return e[0] = i + n * (t[0] - i), e[1] = a + n * (t[1] - a), e[2] = s + n * (t[2] - s), e;
}
function ue(e, r, t, n, i, a) {
  var s = a * a, c = s * (2 * a - 3) + 1, h = s * (a - 2) + a, o = s * (a - 1), f = s * (3 - 2 * a);
  return e[0] = r[0] * c + t[0] * h + n[0] * o + i[0] * f, e[1] = r[1] * c + t[1] * h + n[1] * o + i[1] * f, e[2] = r[2] * c + t[2] * h + n[2] * o + i[2] * f, e;
}
function Me(e, r, t, n, i, a) {
  var s = 1 - a, c = s * s, h = a * a, o = c * s, f = 3 * a * c, v = 3 * h * s, l = h * a;
  return e[0] = r[0] * o + t[0] * f + n[0] * v + i[0] * l, e[1] = r[1] * o + t[1] * f + n[1] * v + i[1] * l, e[2] = r[2] * o + t[2] * f + n[2] * v + i[2] * l, e;
}
function ge(e, r) {
  r = r || 1;
  var t = z() * 2 * Math.PI, n = z() * 2 - 1, i = Math.sqrt(1 - n * n) * r;
  return e[0] = Math.cos(t) * i, e[1] = Math.sin(t) * i, e[2] = n * r, e;
}
function ye(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = t[3] * n + t[7] * i + t[11] * a + t[15];
  return s = s || 1, e[0] = (t[0] * n + t[4] * i + t[8] * a + t[12]) / s, e[1] = (t[1] * n + t[5] * i + t[9] * a + t[13]) / s, e[2] = (t[2] * n + t[6] * i + t[10] * a + t[14]) / s, e;
}
function xe(e, r, t) {
  var n = r[0], i = r[1], a = r[2];
  return e[0] = n * t[0] + i * t[3] + a * t[6], e[1] = n * t[1] + i * t[4] + a * t[7], e[2] = n * t[2] + i * t[5] + a * t[8], e;
}
function we(e, r, t) {
  var n = t[0], i = t[1], a = t[2], s = t[3], c = r[0], h = r[1], o = r[2], f = i * o - a * h, v = a * c - n * o, l = n * h - i * c, p = i * l - a * v, m = a * f - n * l, u = n * v - i * f, d = s * 2;
  return f *= d, v *= d, l *= d, p *= 2, m *= 2, u *= 2, e[0] = c + f + p, e[1] = h + v + m, e[2] = o + l + u, e;
}
function ze(e, r, t, n) {
  var i = [], a = [];
  return i[0] = r[0] - t[0], i[1] = r[1] - t[1], i[2] = r[2] - t[2], a[0] = i[0], a[1] = i[1] * Math.cos(n) - i[2] * Math.sin(n), a[2] = i[1] * Math.sin(n) + i[2] * Math.cos(n), e[0] = a[0] + t[0], e[1] = a[1] + t[1], e[2] = a[2] + t[2], e;
}
function Ce(e, r, t, n) {
  var i = [], a = [];
  return i[0] = r[0] - t[0], i[1] = r[1] - t[1], i[2] = r[2] - t[2], a[0] = i[2] * Math.sin(n) + i[0] * Math.cos(n), a[1] = i[1], a[2] = i[2] * Math.cos(n) - i[0] * Math.sin(n), e[0] = a[0] + t[0], e[1] = a[1] + t[1], e[2] = a[2] + t[2], e;
}
function Te(e, r, t, n) {
  var i = [], a = [];
  return i[0] = r[0] - t[0], i[1] = r[1] - t[1], i[2] = r[2] - t[2], a[0] = i[0] * Math.cos(n) - i[1] * Math.sin(n), a[1] = i[0] * Math.sin(n) + i[1] * Math.cos(n), a[2] = i[2], e[0] = a[0] + t[0], e[1] = a[1] + t[1], e[2] = a[2] + t[2], e;
}
function Se(e, r) {
  var t = e[0], n = e[1], i = e[2], a = r[0], s = r[1], c = r[2], h = Math.sqrt(t * t + n * n + i * i), o = Math.sqrt(a * a + s * s + c * c), f = h * o, v = f && R(e, r) / f;
  return Math.acos(Math.min(Math.max(v, -1), 1));
}
function Ae(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e;
}
function $e(e) {
  return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
}
function Pe(e, r) {
  return e[0] === r[0] && e[1] === r[1] && e[2] === r[2];
}
function Ee(e, r) {
  var t = e[0], n = e[1], i = e[2], a = r[0], s = r[1], c = r[2];
  return Math.abs(t - a) <= M * Math.max(1, Math.abs(t), Math.abs(a)) && Math.abs(n - s) <= M * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - c) <= M * Math.max(1, Math.abs(i), Math.abs(c));
}
var qe = G, Be = O, De = j, Ue = L, Ge = b, Oe = D, je = F, Le = function() {
  var e = y();
  return function(r, t, n, i, a, s) {
    var c, h;
    for (t || (t = 3), n || (n = 0), i ? h = Math.min(i * t + n, r.length) : h = r.length, c = n; c < h; c += t)
      e[0] = r[c], e[1] = r[c + 1], e[2] = r[c + 2], a(e, e, s), r[c] = e[0], r[c + 1] = e[1], r[c + 2] = e[2];
    return r;
  };
}();
const Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: U,
  angle: Se,
  bezier: Me,
  ceil: ae,
  clone: re,
  copy: ne,
  create: y,
  cross: C,
  dist: Ue,
  distance: L,
  div: De,
  divide: j,
  dot: R,
  equals: Ee,
  exactEquals: Pe,
  floor: se,
  forEach: Le,
  fromValues: te,
  hermite: ue,
  inverse: pe,
  len: Oe,
  length: D,
  lerp: me,
  max: he,
  min: ce,
  mul: Be,
  multiply: O,
  negate: le,
  normalize: de,
  random: ge,
  rotateX: ze,
  rotateY: Ce,
  rotateZ: Te,
  round: oe,
  scale: fe,
  scaleAndAdd: ve,
  set: ie,
  sqrDist: Ge,
  sqrLen: je,
  squaredDistance: b,
  squaredLength: F,
  str: $e,
  sub: qe,
  subtract: G,
  transformMat3: xe,
  transformMat4: ye,
  transformQuat: we,
  zero: Ae
}, Symbol.toStringTag, { value: "Module" }));
function _() {
  var e = new g(4);
  return g != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e;
}
function be(e) {
  var r = new g(4);
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r;
}
function Fe(e, r, t, n) {
  var i = new g(4);
  return i[0] = e, i[1] = r, i[2] = t, i[3] = n, i;
}
function Re(e, r) {
  return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e;
}
function _e(e, r, t, n, i) {
  return e[0] = r, e[1] = t, e[2] = n, e[3] = i, e;
}
function Ve(e, r, t) {
  return e[0] = r[0] + t[0], e[1] = r[1] + t[1], e[2] = r[2] + t[2], e[3] = r[3] + t[3], e;
}
function V(e, r, t) {
  return e[0] = r[0] - t[0], e[1] = r[1] - t[1], e[2] = r[2] - t[2], e[3] = r[3] - t[3], e;
}
function I(e, r, t) {
  return e[0] = r[0] * t[0], e[1] = r[1] * t[1], e[2] = r[2] * t[2], e[3] = r[3] * t[3], e;
}
function N(e, r, t) {
  return e[0] = r[0] / t[0], e[1] = r[1] / t[1], e[2] = r[2] / t[2], e[3] = r[3] / t[3], e;
}
function Ie(e, r) {
  return e[0] = Math.ceil(r[0]), e[1] = Math.ceil(r[1]), e[2] = Math.ceil(r[2]), e[3] = Math.ceil(r[3]), e;
}
function Ne(e, r) {
  return e[0] = Math.floor(r[0]), e[1] = Math.floor(r[1]), e[2] = Math.floor(r[2]), e[3] = Math.floor(r[3]), e;
}
function Ye(e, r, t) {
  return e[0] = Math.min(r[0], t[0]), e[1] = Math.min(r[1], t[1]), e[2] = Math.min(r[2], t[2]), e[3] = Math.min(r[3], t[3]), e;
}
function Xe(e, r, t) {
  return e[0] = Math.max(r[0], t[0]), e[1] = Math.max(r[1], t[1]), e[2] = Math.max(r[2], t[2]), e[3] = Math.max(r[3], t[3]), e;
}
function He(e, r) {
  return e[0] = Math.round(r[0]), e[1] = Math.round(r[1]), e[2] = Math.round(r[2]), e[3] = Math.round(r[3]), e;
}
function Qe(e, r, t) {
  return e[0] = r[0] * t, e[1] = r[1] * t, e[2] = r[2] * t, e[3] = r[3] * t, e;
}
function We(e, r, t, n) {
  return e[0] = r[0] + t[0] * n, e[1] = r[1] + t[1] * n, e[2] = r[2] + t[2] * n, e[3] = r[3] + t[3] * n, e;
}
function Y(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2], a = r[3] - e[3];
  return Math.hypot(t, n, i, a);
}
function X(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2], a = r[3] - e[3];
  return t * t + n * n + i * i + a * a;
}
function H(e) {
  var r = e[0], t = e[1], n = e[2], i = e[3];
  return Math.hypot(r, t, n, i);
}
function Q(e) {
  var r = e[0], t = e[1], n = e[2], i = e[3];
  return r * r + t * t + n * n + i * i;
}
function Ze(e, r) {
  return e[0] = -r[0], e[1] = -r[1], e[2] = -r[2], e[3] = -r[3], e;
}
function ke(e, r) {
  return e[0] = 1 / r[0], e[1] = 1 / r[1], e[2] = 1 / r[2], e[3] = 1 / r[3], e;
}
function Je(e, r) {
  var t = r[0], n = r[1], i = r[2], a = r[3], s = t * t + n * n + i * i + a * a;
  return s > 0 && (s = 1 / Math.sqrt(s)), e[0] = t * s, e[1] = n * s, e[2] = i * s, e[3] = a * s, e;
}
function Ke(e, r) {
  return e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3];
}
function er(e, r, t, n) {
  var i = t[0] * n[1] - t[1] * n[0], a = t[0] * n[2] - t[2] * n[0], s = t[0] * n[3] - t[3] * n[0], c = t[1] * n[2] - t[2] * n[1], h = t[1] * n[3] - t[3] * n[1], o = t[2] * n[3] - t[3] * n[2], f = r[0], v = r[1], l = r[2], p = r[3];
  return e[0] = v * o - l * h + p * c, e[1] = -(f * o) + l * s - p * a, e[2] = f * h - v * s + p * i, e[3] = -(f * c) + v * a - l * i, e;
}
function rr(e, r, t, n) {
  var i = r[0], a = r[1], s = r[2], c = r[3];
  return e[0] = i + n * (t[0] - i), e[1] = a + n * (t[1] - a), e[2] = s + n * (t[2] - s), e[3] = c + n * (t[3] - c), e;
}
function tr(e, r) {
  r = r || 1;
  var t, n, i, a, s, c;
  do
    t = z() * 2 - 1, n = z() * 2 - 1, s = t * t + n * n;
  while (s >= 1);
  do
    i = z() * 2 - 1, a = z() * 2 - 1, c = i * i + a * a;
  while (c >= 1);
  var h = Math.sqrt((1 - s) / c);
  return e[0] = r * t, e[1] = r * n, e[2] = r * i * h, e[3] = r * a * h, e;
}
function nr(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = r[3];
  return e[0] = t[0] * n + t[4] * i + t[8] * a + t[12] * s, e[1] = t[1] * n + t[5] * i + t[9] * a + t[13] * s, e[2] = t[2] * n + t[6] * i + t[10] * a + t[14] * s, e[3] = t[3] * n + t[7] * i + t[11] * a + t[15] * s, e;
}
function ir(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = t[0], c = t[1], h = t[2], o = t[3], f = o * n + c * a - h * i, v = o * i + h * n - s * a, l = o * a + s * i - c * n, p = -s * n - c * i - h * a;
  return e[0] = f * o + p * -s + v * -h - l * -c, e[1] = v * o + p * -c + l * -s - f * -h, e[2] = l * o + p * -h + f * -c - v * -s, e[3] = r[3], e;
}
function ar(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e;
}
function sr(e) {
  return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
}
function cr(e, r) {
  return e[0] === r[0] && e[1] === r[1] && e[2] === r[2] && e[3] === r[3];
}
function hr(e, r) {
  var t = e[0], n = e[1], i = e[2], a = e[3], s = r[0], c = r[1], h = r[2], o = r[3];
  return Math.abs(t - s) <= M * Math.max(1, Math.abs(t), Math.abs(s)) && Math.abs(n - c) <= M * Math.max(1, Math.abs(n), Math.abs(c)) && Math.abs(i - h) <= M * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(a - o) <= M * Math.max(1, Math.abs(a), Math.abs(o));
}
var or = V, fr = I, vr = N, lr = Y, pr = X, dr = H, mr = Q, ur = function() {
  var e = _();
  return function(r, t, n, i, a, s) {
    var c, h;
    for (t || (t = 4), n || (n = 0), i ? h = Math.min(i * t + n, r.length) : h = r.length, c = n; c < h; c += t)
      e[0] = r[c], e[1] = r[c + 1], e[2] = r[c + 2], e[3] = r[c + 3], a(e, e, s), r[c] = e[0], r[c + 1] = e[1], r[c + 2] = e[2], r[c + 3] = e[3];
    return r;
  };
}();
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Ve,
  ceil: Ie,
  clone: be,
  copy: Re,
  create: _,
  cross: er,
  dist: lr,
  distance: Y,
  div: vr,
  divide: N,
  dot: Ke,
  equals: hr,
  exactEquals: cr,
  floor: Ne,
  forEach: ur,
  fromValues: Fe,
  inverse: ke,
  len: dr,
  length: H,
  lerp: rr,
  max: Xe,
  min: Ye,
  mul: fr,
  multiply: I,
  negate: Ze,
  normalize: Je,
  random: tr,
  round: He,
  scale: Qe,
  scaleAndAdd: We,
  set: _e,
  sqrDist: pr,
  sqrLen: mr,
  squaredDistance: X,
  squaredLength: Q,
  str: sr,
  sub: or,
  subtract: V,
  transformMat4: nr,
  transformQuat: ir,
  zero: ar
}, Symbol.toStringTag, { value: "Module" }));
class S {
  constructor(r, t) {
    this.update = () => {
    }, this.name = r, this.parent = t;
  }
}
const w = (e) => e * Math.PI / 180, Mr = (e) => {
  const r = Math.pow(10, e - 1), t = Math.pow(10, e) - 1;
  return Math.floor(Math.random() * (t - r + 1)) + r;
};
class gr extends S {
  constructor(r) {
    super("CameraComponent", r), this.update = () => {
      this.forwards = [
        Math.cos(w(this.parent.transformComponent.eulers[2])) * Math.cos(w(this.parent.transformComponent.eulers[1])),
        Math.sin(w(this.parent.transformComponent.eulers[2])) * Math.cos(w(this.parent.transformComponent.eulers[1])),
        Math.sin(w(this.parent.transformComponent.eulers[1]))
      ], C(this.right, this.forwards, [0, 0, 1]), C(this.up, this.right, this.forwards);
      let t = y();
      U(
        t,
        new Float32Array(this.parent.transformComponent.position),
        this.forwards
      ), ee(
        this.view,
        new Float32Array(this.parent.transformComponent.position),
        t,
        this.up
      );
    }, this.getView = () => this.view, this.view = T(), this.forwards = y(), this.right = y(), this.up = y();
  }
}
class yr extends S {
  constructor(r, t, n) {
    super("TriangleComponent", r), this.update = () => {
      this.parent.transformComponent.eulers[2] += 1, this.parent.transformComponent.eulers[2] %= 360, this.model = T(), Z(this.model, this.model, this.parent.transformComponent.position), k(this.model, this.model, w(this.parent.transformComponent.eulers[2]));
    }, this.getModel = () => this.model;
  }
}
class Ar {
  constructor(r) {
    this.update = () => {
      let n = 0;
      this.gameObjects.forEach((i) => {
        i.components.forEach((a) => {
          if (a instanceof yr) {
            a.update();
            const s = a.getModel();
            for (let c = 0; c < 16; c++)
              this.objectData[16 * n + c] = s.at(c);
            n++;
          } else
            a.update();
        });
      }), this.camera.update();
    }, this.addObject = (n) => {
      this.gameObjects.push(n), this.objectCount++;
    }, this.getCamera = () => this.camera, this.getTriangles = () => this.objectData;
    const t = r.getComponent(gr);
    if (!t)
      throw new Error(
        "Camera component not found within gameobject specified."
      );
    this.camera = t, this.gameObjects = [], this.objectData = new Float32Array(16 * 1024), this.objectCount = 0, this.gameObjects.push(r);
  }
}
class xr {
  constructor() {
    this.initialize = async (r, t) => {
      const i = await (await fetch(t)).blob(), a = await createImageBitmap(i);
      await this.loadImageBitmap(r, a);
      const s = {
        format: "rgba8unorm",
        dimension: "2d",
        aspect: "all",
        baseMipLevel: 0,
        mipLevelCount: 1,
        baseArrayLayer: 0,
        arrayLayerCount: 1
      };
      this.view = this.texture.createView(s);
      const c = {
        addressModeU: "repeat",
        addressModeV: "repeat",
        magFilter: "linear",
        minFilter: "nearest",
        mipmapFilter: "nearest",
        maxAnisotropy: 1
      };
      this.sampler = r.createSampler(c);
    }, this.loadImageBitmap = async (r, t) => {
      const n = {
        size: { width: t.width, height: t.height },
        format: "rgba8unorm",
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
      };
      this.texture = r.createTexture(n), r.queue.copyExternalImageToTexture(
        { source: t },
        { texture: this.texture },
        n.size
      );
    };
  }
}
class wr {
  constructor(r) {
    const t = new Float32Array([
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      -0.5,
      -0.5,
      0,
      1,
      0,
      0.5,
      -0.5,
      1,
      1
    ]), n = GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST, i = {
      size: t.byteLength,
      usage: n,
      mappedAtCreation: !0
    };
    this.buffer = r.createBuffer(i), new Float32Array(this.buffer.getMappedRange()).set(t), this.buffer.unmap(), this.bufferLayout = {
      arrayStride: 20,
      attributes: [
        {
          shaderLocation: 0,
          format: "float32x3",
          offset: 0
        },
        {
          shaderLocation: 1,
          format: "float32x2",
          offset: 12
        }
      ]
    };
  }
}
const B = `struct TransformData {
    view: mat4x4<f32>,
    projection: mat4x4<f32>
};

struct ObjectData {
    model: array<mat4x4<f32>>,
};

@binding(0) @group(0) var<uniform> transformUBO: TransformData;
@binding(1) @group(0) var myTexture: texture_2d<f32>;
@binding(2) @group(0) var mySampler: sampler;
@binding(3) @group(0) var<storage, read> objects: ObjectData;

struct Fragment {
    @builtin(position) Position : vec4<f32>,
    @location(0) TexCoord: vec2<f32>
};

@vertex
fn vs_main(
    @builtin(instance_index) id: u32, 
    @location(0) vertexPosition: vec3<f32>, 
    @location(1) vertexTexCoord: vec2<f32>) -> Fragment {

    var output : Fragment;
    output.Position = transformUBO.projection * transformUBO.view * objects.model[id] * vec4<f32>(vertexPosition, 1.0);
    output.TexCoord = vertexTexCoord;
    return output;
};

@fragment
fn fs_main(@location(0) TexCoord : vec2<f32>) -> @location(0) vec4<f32> {
    return textureSample(myTexture, mySampler, TexCoord);
};`;
class zr {
  constructor(r) {
    this.initialize = async () => {
      await this.setupDevice(), await this.createAssets(), await this.createDepthBufferResources(), await this.createPipeline();
    }, this.setupDevice = async () => {
      this.adapter = await navigator.gpu.requestAdapter(), this.device = await this.adapter.requestDevice(), this.context = this.canvas.getContext("webgpu"), this.format = "bgra8unorm", this.context.configure({
        device: this.device,
        format: this.format,
        alphaMode: "opaque"
      });
    }, this.createAssets = async () => {
      this.triangleMesh = new wr(this.device), this.material = new xr();
      const t = {
        size: 64 * 2048,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
      };
      this.objectBuffer = this.device.createBuffer(t), await this.material.initialize(this.device, "miot.jpg");
    }, this.createDepthBufferResources = async () => {
      this.depthStencilState = {
        format: "depth24plus-stencil8",
        depthWriteEnabled: !0,
        depthCompare: "less-equal"
      };
      const n = {
        size: {
          width: this.canvas.width,
          height: this.canvas.height,
          depthOrArrayLayers: 1
        },
        format: "depth24plus-stencil8",
        usage: GPUTextureUsage.RENDER_ATTACHMENT
      };
      this.depthStencilBuffer = this.device.createTexture(n);
      const i = {
        format: "depth24plus-stencil8",
        dimension: "2d",
        aspect: "all"
      };
      this.depthStencilView = this.depthStencilBuffer.createView(i), this.depthStencilAttachment = {
        view: this.depthStencilView,
        depthClearValue: 1,
        depthLoadOp: "clear",
        depthStoreOp: "store",
        stencilLoadOp: "clear",
        stencilStoreOp: "discard"
      };
    }, this.createPipeline = async () => {
      this.uniformBuffer = this.device.createBuffer({
        size: 64 * 2,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      });
      const t = this.device.createBindGroupLayout({
        entries: [
          {
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {}
          },
          {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {}
          },
          {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {}
          },
          {
            binding: 3,
            visibility: GPUShaderStage.VERTEX,
            buffer: { type: "read-only-storage", hasDynamicOffset: !1 }
          }
        ]
      });
      this.bindGroup = this.device.createBindGroup({
        layout: t,
        entries: [
          {
            binding: 0,
            resource: {
              buffer: this.uniformBuffer
            }
          },
          {
            binding: 1,
            resource: this.material.view
          },
          {
            binding: 2,
            resource: this.material.sampler
          },
          {
            binding: 3,
            resource: { buffer: this.objectBuffer }
          }
        ]
      });
      const n = this.device.createPipelineLayout({
        bindGroupLayouts: [t]
      });
      this.pipeline = this.device.createRenderPipeline({
        vertex: {
          module: this.device.createShaderModule({ code: B }),
          entryPoint: "vs_main",
          buffers: [this.triangleMesh.bufferLayout]
        },
        fragment: {
          module: this.device.createShaderModule({
            code: B
          }),
          entryPoint: "fs_main",
          targets: [{ format: this.format }]
        },
        primitive: {
          topology: "triangle-list"
        },
        layout: n,
        depthStencil: this.depthStencilState
      });
    }, this.startRender = async (t, n, i) => {
      if (!this.device)
        throw new Error("GPUDevice is not initialized.");
      const a = T();
      K(a, Math.PI / 4, 800 / 600, 0.1, 1e3);
      const s = t.getView();
      this.device.queue.writeBuffer(this.objectBuffer, 0, n, 0, n.length), this.device.queue.writeBuffer(this.uniformBuffer, 0, new Float32Array(s)), this.device.queue.writeBuffer(this.uniformBuffer, 64, new Float32Array(a));
      const c = this.device.createCommandEncoder(), h = this.context.getCurrentTexture().createView(), o = c.beginRenderPass({
        colorAttachments: [
          {
            view: h,
            clearValue: { r: 0.5, g: 0, b: 0.25, a: 1 },
            loadOp: "clear",
            storeOp: "store"
          }
        ],
        depthStencilAttachment: this.depthStencilAttachment
      });
      o.setPipeline(this.pipeline), o.setVertexBuffer(0, this.triangleMesh.buffer), o.setBindGroup(0, this.bindGroup), o.draw(3, i, 0, 0), o.end(), this.device.queue.submit([c.finish()]);
    }, this.canvas = r;
  }
}
class $r {
  constructor(r) {
    if (this.validateActiveScene = () => !0, this.startRenderProcess = async () => {
      await this.renderer.initialize(), requestAnimationFrame(this.gameLoop);
    }, this.gameLoop = async () => {
      if (!this.activeScene)
        throw new Error("No current active scene was set.");
      this.activeScene.update(), this.renderer.startRender(
        this.activeScene.getCamera(),
        this.activeScene.getTriangles(),
        this.activeScene.objectCount
      ), requestAnimationFrame(this.gameLoop);
    }, !r) throw new Error("Improper canvas specificed in initializing engine.");
    if (this.canvas = r, navigator.gpu) console.log("WebGPU supported, started to run engine.");
    else throw new Error("WebGPU is not supported on this browser.");
    this.renderer = new zr(r);
  }
  get activeScene() {
    return this._activeScene;
  }
  set activeScene(r) {
    this._activeScene = r;
  }
}
class Cr extends S {
  constructor(r) {
    super("TransformComponent", r), this.position = [0, 0, 0], this.eulers = y(), this.eulers[2] = 0;
  }
}
class Pr {
  constructor(r) {
    this.name = r, this.instanceId = Mr(10), this.components = [], this.transformComponent = new Cr(this);
  }
  getComponent(r) {
    for (const t of this.components)
      if (t instanceof r)
        return t;
    return null;
  }
  addComponent(r) {
    for (const t of this.components)
      if (t.name == r.name)
        return console.error("Trying to add duplicate component with same name."), null;
    return this.components.push(r), r;
  }
}
export {
  S as BaseComponent,
  gr as CameraComponent,
  w as Deg2Rad,
  $r as EpicEngine,
  Pr as GameObject,
  xr as Material,
  zr as Renderer,
  Ar as Scene,
  Cr as TransformComponent,
  yr as TriangleComponent,
  wr as TriangleMesh,
  Mr as generateId,
  Tr as vec3,
  Sr as vec4
};
