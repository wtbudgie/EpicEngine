var M = 1e-6, g = typeof Float32Array < "u" ? Float32Array : Array, T = Math.random;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, r = arguments.length; r--; )
    e += arguments[r] * arguments[r];
  return Math.sqrt(e);
});
function B() {
  var e = new g(16);
  return g != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function re(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function O(e, r, t) {
  var n = t[0], i = t[1], a = t[2], s, c, h, f, o, l, d, v, p, m, u, z;
  return r === e ? (e[12] = r[0] * n + r[4] * i + r[8] * a + r[12], e[13] = r[1] * n + r[5] * i + r[9] * a + r[13], e[14] = r[2] * n + r[6] * i + r[10] * a + r[14], e[15] = r[3] * n + r[7] * i + r[11] * a + r[15]) : (s = r[0], c = r[1], h = r[2], f = r[3], o = r[4], l = r[5], d = r[6], v = r[7], p = r[8], m = r[9], u = r[10], z = r[11], e[0] = s, e[1] = c, e[2] = h, e[3] = f, e[4] = o, e[5] = l, e[6] = d, e[7] = v, e[8] = p, e[9] = m, e[10] = u, e[11] = z, e[12] = s * n + o * i + p * a + r[12], e[13] = c * n + l * i + m * a + r[13], e[14] = h * n + d * i + u * a + r[14], e[15] = f * n + v * i + z * a + r[15]), e;
}
function te(e, r, t) {
  var n = Math.sin(t), i = Math.cos(t), a = r[0], s = r[1], c = r[2], h = r[3], f = r[4], o = r[5], l = r[6], d = r[7];
  return r !== e && (e[8] = r[8], e[9] = r[9], e[10] = r[10], e[11] = r[11], e[12] = r[12], e[13] = r[13], e[14] = r[14], e[15] = r[15]), e[0] = a * i + f * n, e[1] = s * i + o * n, e[2] = c * i + l * n, e[3] = h * i + d * n, e[4] = f * i - a * n, e[5] = o * i - s * n, e[6] = l * i - c * n, e[7] = d * i - h * n, e;
}
function ne(e, r, t, n, i) {
  var a = 1 / Math.tan(r / 2), s;
  return e[0] = a / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== 1 / 0 ? (s = 1 / (n - i), e[10] = (i + n) * s, e[14] = 2 * i * n * s) : (e[10] = -1, e[14] = -2 * n), e;
}
var ie = ne;
function ae(e, r, t, n) {
  var i, a, s, c, h, f, o, l, d, v, p = r[0], m = r[1], u = r[2], z = n[0], $ = n[1], L = n[2], D = t[0], U = t[1], q = t[2];
  return Math.abs(p - D) < M && Math.abs(m - U) < M && Math.abs(u - q) < M ? re(e) : (o = p - D, l = m - U, d = u - q, v = 1 / Math.hypot(o, l, d), o *= v, l *= v, d *= v, i = $ * d - L * l, a = L * o - z * d, s = z * l - $ * o, v = Math.hypot(i, a, s), v ? (v = 1 / v, i *= v, a *= v, s *= v) : (i = 0, a = 0, s = 0), c = l * s - d * a, h = d * i - o * s, f = o * a - l * i, v = Math.hypot(c, h, f), v ? (v = 1 / v, c *= v, h *= v, f *= v) : (c = 0, h = 0, f = 0), e[0] = i, e[1] = c, e[2] = o, e[3] = 0, e[4] = a, e[5] = h, e[6] = l, e[7] = 0, e[8] = s, e[9] = f, e[10] = d, e[11] = 0, e[12] = -(i * p + a * m + s * u), e[13] = -(c * p + h * m + f * u), e[14] = -(o * p + l * m + d * u), e[15] = 1, e);
}
function w() {
  var e = new g(3);
  return g != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function se(e) {
  var r = new g(3);
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r;
}
function I(e) {
  var r = e[0], t = e[1], n = e[2];
  return Math.hypot(r, t, n);
}
function ce(e, r, t) {
  var n = new g(3);
  return n[0] = e, n[1] = r, n[2] = t, n;
}
function he(e, r) {
  return e[0] = r[0], e[1] = r[1], e[2] = r[2], e;
}
function oe(e, r, t, n) {
  return e[0] = r, e[1] = t, e[2] = n, e;
}
function R(e, r, t) {
  return e[0] = r[0] + t[0], e[1] = r[1] + t[1], e[2] = r[2] + t[2], e;
}
function j(e, r, t) {
  return e[0] = r[0] - t[0], e[1] = r[1] - t[1], e[2] = r[2] - t[2], e;
}
function F(e, r, t) {
  return e[0] = r[0] * t[0], e[1] = r[1] * t[1], e[2] = r[2] * t[2], e;
}
function V(e, r, t) {
  return e[0] = r[0] / t[0], e[1] = r[1] / t[1], e[2] = r[2] / t[2], e;
}
function fe(e, r) {
  return e[0] = Math.ceil(r[0]), e[1] = Math.ceil(r[1]), e[2] = Math.ceil(r[2]), e;
}
function le(e, r) {
  return e[0] = Math.floor(r[0]), e[1] = Math.floor(r[1]), e[2] = Math.floor(r[2]), e;
}
function de(e, r, t) {
  return e[0] = Math.min(r[0], t[0]), e[1] = Math.min(r[1], t[1]), e[2] = Math.min(r[2], t[2]), e;
}
function ve(e, r, t) {
  return e[0] = Math.max(r[0], t[0]), e[1] = Math.max(r[1], t[1]), e[2] = Math.max(r[2], t[2]), e;
}
function ue(e, r) {
  return e[0] = Math.round(r[0]), e[1] = Math.round(r[1]), e[2] = Math.round(r[2]), e;
}
function pe(e, r, t) {
  return e[0] = r[0] * t, e[1] = r[1] * t, e[2] = r[2] * t, e;
}
function me(e, r, t, n) {
  return e[0] = r[0] + t[0] * n, e[1] = r[1] + t[1] * n, e[2] = r[2] + t[2] * n, e;
}
function N(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2];
  return Math.hypot(t, n, i);
}
function _(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2];
  return t * t + n * n + i * i;
}
function Q(e) {
  var r = e[0], t = e[1], n = e[2];
  return r * r + t * t + n * n;
}
function Me(e, r) {
  return e[0] = -r[0], e[1] = -r[1], e[2] = -r[2], e;
}
function ge(e, r) {
  return e[0] = 1 / r[0], e[1] = 1 / r[1], e[2] = 1 / r[2], e;
}
function ye(e, r) {
  var t = r[0], n = r[1], i = r[2], a = t * t + n * n + i * i;
  return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = r[0] * a, e[1] = r[1] * a, e[2] = r[2] * a, e;
}
function Y(e, r) {
  return e[0] * r[0] + e[1] * r[1] + e[2] * r[2];
}
function S(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = t[0], c = t[1], h = t[2];
  return e[0] = i * h - a * c, e[1] = a * s - n * h, e[2] = n * c - i * s, e;
}
function xe(e, r, t, n) {
  var i = r[0], a = r[1], s = r[2];
  return e[0] = i + n * (t[0] - i), e[1] = a + n * (t[1] - a), e[2] = s + n * (t[2] - s), e;
}
function we(e, r, t, n, i, a) {
  var s = a * a, c = s * (2 * a - 3) + 1, h = s * (a - 2) + a, f = s * (a - 1), o = s * (3 - 2 * a);
  return e[0] = r[0] * c + t[0] * h + n[0] * f + i[0] * o, e[1] = r[1] * c + t[1] * h + n[1] * f + i[1] * o, e[2] = r[2] * c + t[2] * h + n[2] * f + i[2] * o, e;
}
function ze(e, r, t, n, i, a) {
  var s = 1 - a, c = s * s, h = a * a, f = c * s, o = 3 * a * c, l = 3 * h * s, d = h * a;
  return e[0] = r[0] * f + t[0] * o + n[0] * l + i[0] * d, e[1] = r[1] * f + t[1] * o + n[1] * l + i[1] * d, e[2] = r[2] * f + t[2] * o + n[2] * l + i[2] * d, e;
}
function Ce(e, r) {
  r = r || 1;
  var t = T() * 2 * Math.PI, n = T() * 2 - 1, i = Math.sqrt(1 - n * n) * r;
  return e[0] = Math.cos(t) * i, e[1] = Math.sin(t) * i, e[2] = n * r, e;
}
function Te(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = t[3] * n + t[7] * i + t[11] * a + t[15];
  return s = s || 1, e[0] = (t[0] * n + t[4] * i + t[8] * a + t[12]) / s, e[1] = (t[1] * n + t[5] * i + t[9] * a + t[13]) / s, e[2] = (t[2] * n + t[6] * i + t[10] * a + t[14]) / s, e;
}
function Ge(e, r, t) {
  var n = r[0], i = r[1], a = r[2];
  return e[0] = n * t[0] + i * t[3] + a * t[6], e[1] = n * t[1] + i * t[4] + a * t[7], e[2] = n * t[2] + i * t[5] + a * t[8], e;
}
function Ae(e, r, t) {
  var n = t[0], i = t[1], a = t[2], s = t[3], c = r[0], h = r[1], f = r[2], o = i * f - a * h, l = a * c - n * f, d = n * h - i * c, v = i * d - a * l, p = a * o - n * d, m = n * l - i * o, u = s * 2;
  return o *= u, l *= u, d *= u, v *= 2, p *= 2, m *= 2, e[0] = c + o + v, e[1] = h + l + p, e[2] = f + d + m, e;
}
function Be(e, r, t, n) {
  var i = [], a = [];
  return i[0] = r[0] - t[0], i[1] = r[1] - t[1], i[2] = r[2] - t[2], a[0] = i[0], a[1] = i[1] * Math.cos(n) - i[2] * Math.sin(n), a[2] = i[1] * Math.sin(n) + i[2] * Math.cos(n), e[0] = a[0] + t[0], e[1] = a[1] + t[1], e[2] = a[2] + t[2], e;
}
function Ee(e, r, t, n) {
  var i = [], a = [];
  return i[0] = r[0] - t[0], i[1] = r[1] - t[1], i[2] = r[2] - t[2], a[0] = i[2] * Math.sin(n) + i[0] * Math.cos(n), a[1] = i[1], a[2] = i[2] * Math.cos(n) - i[0] * Math.sin(n), e[0] = a[0] + t[0], e[1] = a[1] + t[1], e[2] = a[2] + t[2], e;
}
function Se(e, r, t, n) {
  var i = [], a = [];
  return i[0] = r[0] - t[0], i[1] = r[1] - t[1], i[2] = r[2] - t[2], a[0] = i[0] * Math.cos(n) - i[1] * Math.sin(n), a[1] = i[0] * Math.sin(n) + i[1] * Math.cos(n), a[2] = i[2], e[0] = a[0] + t[0], e[1] = a[1] + t[1], e[2] = a[2] + t[2], e;
}
function Pe(e, r) {
  var t = e[0], n = e[1], i = e[2], a = r[0], s = r[1], c = r[2], h = Math.sqrt(t * t + n * n + i * i), f = Math.sqrt(a * a + s * s + c * c), o = h * f, l = o && Y(e, r) / o;
  return Math.acos(Math.min(Math.max(l, -1), 1));
}
function $e(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e;
}
function Le(e) {
  return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
}
function De(e, r) {
  return e[0] === r[0] && e[1] === r[1] && e[2] === r[2];
}
function Ue(e, r) {
  var t = e[0], n = e[1], i = e[2], a = r[0], s = r[1], c = r[2];
  return Math.abs(t - a) <= M * Math.max(1, Math.abs(t), Math.abs(a)) && Math.abs(n - s) <= M * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - c) <= M * Math.max(1, Math.abs(i), Math.abs(c));
}
var qe = j, be = F, Oe = V, Ie = N, Re = _, je = I, Fe = Q, Ve = function() {
  var e = w();
  return function(r, t, n, i, a, s) {
    var c, h;
    for (t || (t = 3), n || (n = 0), i ? h = Math.min(i * t + n, r.length) : h = r.length, c = n; c < h; c += t)
      e[0] = r[c], e[1] = r[c + 1], e[2] = r[c + 2], a(e, e, s), r[c] = e[0], r[c + 1] = e[1], r[c + 2] = e[2];
    return r;
  };
}();
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: R,
  angle: Pe,
  bezier: ze,
  ceil: fe,
  clone: se,
  copy: he,
  create: w,
  cross: S,
  dist: Ie,
  distance: N,
  div: Oe,
  divide: V,
  dot: Y,
  equals: Ue,
  exactEquals: De,
  floor: le,
  forEach: Ve,
  fromValues: ce,
  hermite: we,
  inverse: ge,
  len: je,
  length: I,
  lerp: xe,
  max: ve,
  min: de,
  mul: be,
  multiply: F,
  negate: Me,
  normalize: ye,
  random: Ce,
  rotateX: Be,
  rotateY: Ee,
  rotateZ: Se,
  round: ue,
  scale: pe,
  scaleAndAdd: me,
  set: oe,
  sqrDist: Re,
  sqrLen: Fe,
  squaredDistance: _,
  squaredLength: Q,
  str: Le,
  sub: qe,
  subtract: j,
  transformMat3: Ge,
  transformMat4: Te,
  transformQuat: Ae,
  zero: $e
}, Symbol.toStringTag, { value: "Module" }));
function X() {
  var e = new g(4);
  return g != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e;
}
function Ne(e) {
  var r = new g(4);
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r;
}
function _e(e, r, t, n) {
  var i = new g(4);
  return i[0] = e, i[1] = r, i[2] = t, i[3] = n, i;
}
function Qe(e, r) {
  return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e;
}
function Ye(e, r, t, n, i) {
  return e[0] = r, e[1] = t, e[2] = n, e[3] = i, e;
}
function Xe(e, r, t) {
  return e[0] = r[0] + t[0], e[1] = r[1] + t[1], e[2] = r[2] + t[2], e[3] = r[3] + t[3], e;
}
function k(e, r, t) {
  return e[0] = r[0] - t[0], e[1] = r[1] - t[1], e[2] = r[2] - t[2], e[3] = r[3] - t[3], e;
}
function H(e, r, t) {
  return e[0] = r[0] * t[0], e[1] = r[1] * t[1], e[2] = r[2] * t[2], e[3] = r[3] * t[3], e;
}
function W(e, r, t) {
  return e[0] = r[0] / t[0], e[1] = r[1] / t[1], e[2] = r[2] / t[2], e[3] = r[3] / t[3], e;
}
function ke(e, r) {
  return e[0] = Math.ceil(r[0]), e[1] = Math.ceil(r[1]), e[2] = Math.ceil(r[2]), e[3] = Math.ceil(r[3]), e;
}
function He(e, r) {
  return e[0] = Math.floor(r[0]), e[1] = Math.floor(r[1]), e[2] = Math.floor(r[2]), e[3] = Math.floor(r[3]), e;
}
function We(e, r, t) {
  return e[0] = Math.min(r[0], t[0]), e[1] = Math.min(r[1], t[1]), e[2] = Math.min(r[2], t[2]), e[3] = Math.min(r[3], t[3]), e;
}
function Ze(e, r, t) {
  return e[0] = Math.max(r[0], t[0]), e[1] = Math.max(r[1], t[1]), e[2] = Math.max(r[2], t[2]), e[3] = Math.max(r[3], t[3]), e;
}
function Je(e, r) {
  return e[0] = Math.round(r[0]), e[1] = Math.round(r[1]), e[2] = Math.round(r[2]), e[3] = Math.round(r[3]), e;
}
function Ke(e, r, t) {
  return e[0] = r[0] * t, e[1] = r[1] * t, e[2] = r[2] * t, e[3] = r[3] * t, e;
}
function er(e, r, t, n) {
  return e[0] = r[0] + t[0] * n, e[1] = r[1] + t[1] * n, e[2] = r[2] + t[2] * n, e[3] = r[3] + t[3] * n, e;
}
function Z(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2], a = r[3] - e[3];
  return Math.hypot(t, n, i, a);
}
function J(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2], a = r[3] - e[3];
  return t * t + n * n + i * i + a * a;
}
function K(e) {
  var r = e[0], t = e[1], n = e[2], i = e[3];
  return Math.hypot(r, t, n, i);
}
function ee(e) {
  var r = e[0], t = e[1], n = e[2], i = e[3];
  return r * r + t * t + n * n + i * i;
}
function rr(e, r) {
  return e[0] = -r[0], e[1] = -r[1], e[2] = -r[2], e[3] = -r[3], e;
}
function tr(e, r) {
  return e[0] = 1 / r[0], e[1] = 1 / r[1], e[2] = 1 / r[2], e[3] = 1 / r[3], e;
}
function nr(e, r) {
  var t = r[0], n = r[1], i = r[2], a = r[3], s = t * t + n * n + i * i + a * a;
  return s > 0 && (s = 1 / Math.sqrt(s)), e[0] = t * s, e[1] = n * s, e[2] = i * s, e[3] = a * s, e;
}
function ir(e, r) {
  return e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3];
}
function ar(e, r, t, n) {
  var i = t[0] * n[1] - t[1] * n[0], a = t[0] * n[2] - t[2] * n[0], s = t[0] * n[3] - t[3] * n[0], c = t[1] * n[2] - t[2] * n[1], h = t[1] * n[3] - t[3] * n[1], f = t[2] * n[3] - t[3] * n[2], o = r[0], l = r[1], d = r[2], v = r[3];
  return e[0] = l * f - d * h + v * c, e[1] = -(o * f) + d * s - v * a, e[2] = o * h - l * s + v * i, e[3] = -(o * c) + l * a - d * i, e;
}
function sr(e, r, t, n) {
  var i = r[0], a = r[1], s = r[2], c = r[3];
  return e[0] = i + n * (t[0] - i), e[1] = a + n * (t[1] - a), e[2] = s + n * (t[2] - s), e[3] = c + n * (t[3] - c), e;
}
function cr(e, r) {
  r = r || 1;
  var t, n, i, a, s, c;
  do
    t = T() * 2 - 1, n = T() * 2 - 1, s = t * t + n * n;
  while (s >= 1);
  do
    i = T() * 2 - 1, a = T() * 2 - 1, c = i * i + a * a;
  while (c >= 1);
  var h = Math.sqrt((1 - s) / c);
  return e[0] = r * t, e[1] = r * n, e[2] = r * i * h, e[3] = r * a * h, e;
}
function hr(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = r[3];
  return e[0] = t[0] * n + t[4] * i + t[8] * a + t[12] * s, e[1] = t[1] * n + t[5] * i + t[9] * a + t[13] * s, e[2] = t[2] * n + t[6] * i + t[10] * a + t[14] * s, e[3] = t[3] * n + t[7] * i + t[11] * a + t[15] * s, e;
}
function or(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = t[0], c = t[1], h = t[2], f = t[3], o = f * n + c * a - h * i, l = f * i + h * n - s * a, d = f * a + s * i - c * n, v = -s * n - c * i - h * a;
  return e[0] = o * f + v * -s + l * -h - d * -c, e[1] = l * f + v * -c + d * -s - o * -h, e[2] = d * f + v * -h + o * -c - l * -s, e[3] = r[3], e;
}
function fr(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e;
}
function lr(e) {
  return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
}
function dr(e, r) {
  return e[0] === r[0] && e[1] === r[1] && e[2] === r[2] && e[3] === r[3];
}
function vr(e, r) {
  var t = e[0], n = e[1], i = e[2], a = e[3], s = r[0], c = r[1], h = r[2], f = r[3];
  return Math.abs(t - s) <= M * Math.max(1, Math.abs(t), Math.abs(s)) && Math.abs(n - c) <= M * Math.max(1, Math.abs(n), Math.abs(c)) && Math.abs(i - h) <= M * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(a - f) <= M * Math.max(1, Math.abs(a), Math.abs(f));
}
var ur = k, pr = H, mr = W, Mr = Z, gr = J, yr = K, xr = ee, wr = function() {
  var e = X();
  return function(r, t, n, i, a, s) {
    var c, h;
    for (t || (t = 4), n || (n = 0), i ? h = Math.min(i * t + n, r.length) : h = r.length, c = n; c < h; c += t)
      e[0] = r[c], e[1] = r[c + 1], e[2] = r[c + 2], e[3] = r[c + 3], a(e, e, s), r[c] = e[0], r[c + 1] = e[1], r[c + 2] = e[2], r[c + 3] = e[3];
    return r;
  };
}();
const $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Xe,
  ceil: ke,
  clone: Ne,
  copy: Qe,
  create: X,
  cross: ar,
  dist: Mr,
  distance: Z,
  div: mr,
  divide: W,
  dot: ir,
  equals: vr,
  exactEquals: dr,
  floor: He,
  forEach: wr,
  fromValues: _e,
  inverse: tr,
  len: yr,
  length: K,
  lerp: sr,
  max: Ze,
  min: We,
  mul: pr,
  multiply: H,
  negate: rr,
  normalize: nr,
  random: cr,
  round: Je,
  scale: Ke,
  scaleAndAdd: er,
  set: Ye,
  sqrDist: gr,
  sqrLen: xr,
  squaredDistance: J,
  squaredLength: ee,
  str: lr,
  sub: ur,
  subtract: k,
  transformMat4: hr,
  transformQuat: or,
  zero: fr
}, Symbol.toStringTag, { value: "Module" }));
class E {
  constructor(r, t) {
    this.update = () => {
    }, this.name = r, this.parent = t;
  }
}
const C = (e) => e * Math.PI / 180, zr = (e) => {
  const r = Math.pow(10, e - 1), t = Math.pow(10, e) - 1;
  return Math.floor(Math.random() * (t - r + 1)) + r;
};
class Cr extends E {
  constructor(r) {
    super("CameraComponent", r), this.update = () => {
      this.forwards = [
        Math.cos(C(this.parent.transformComponent.eulers[2])) * Math.cos(C(this.parent.transformComponent.eulers[1])),
        Math.sin(C(this.parent.transformComponent.eulers[2])) * Math.cos(C(this.parent.transformComponent.eulers[1])),
        Math.sin(C(this.parent.transformComponent.eulers[1]))
      ], S(this.right, this.forwards, [0, 0, 1]), S(this.up, this.right, this.forwards);
      let t = w();
      R(
        t,
        new Float32Array(this.parent.transformComponent.position),
        this.forwards
      ), ae(
        this.view,
        new Float32Array(this.parent.transformComponent.position),
        t,
        this.up
      );
    }, this.getView = () => this.view, this.view = B(), this.forwards = w(), this.right = w(), this.up = w();
  }
}
class Tr extends E {
  constructor(r) {
    super("TriangleComponent", r), this.update = () => {
      this.parent.transformComponent.eulers[2] += 1, this.parent.transformComponent.eulers[2] %= 360, this.model = B(), O(
        this.model,
        this.model,
        this.parent.transformComponent.position
      ), te(
        this.model,
        this.model,
        C(this.parent.transformComponent.eulers[2])
      );
    }, this.getModel = () => this.model;
  }
}
class Gr extends E {
  constructor(r) {
    super("QuadComponent", r), this.update = () => {
      this.model = B(), O(
        this.model,
        this.model,
        this.parent.transformComponent.position
      );
    }, this.getModel = () => this.model;
  }
}
class Lr {
  constructor(r) {
    this.update = () => {
      let n = 0;
      this.gameObjects.forEach((i) => {
        i.components.forEach((a) => {
          if (a.update(), a instanceof Tr) {
            const s = a.getModel();
            for (let c = 0; c < 16; c++)
              this.objectData[16 * n + c] = s.at(c);
            n++;
          } else if (a instanceof Gr) {
            const s = a.getModel();
            for (let c = 0; c < 16; c++)
              this.objectData[16 * n + c] = s.at(c);
            n++;
          }
        });
      }), this.camera.update();
    }, this.getCamera = () => this.camera, this.getObjectData = () => ({
      viewTransform: this.camera.getView(),
      modelTransforms: this.objectData
    }), this.addGameObject = (n) => {
      this.gameObjects.push(n);
    }, this.getGameObjects = () => this.gameObjects;
    const t = r.getComponent(Cr);
    if (!t) throw new Error("Camera component not found within gameobject specified.");
    this.camera = t, this.gameObjects = [], this.objectData = new Float32Array(16 * 1024), this.gameObjects.push(r);
  }
}
const b = `struct TransformData {
    view: mat4x4<f32>,
    projection: mat4x4<f32>
};

struct ObjectData {
    model: array<mat4x4<f32>>,
};

@binding(0) @group(0) var<uniform> transformUBO: TransformData;
@binding(1) @group(0) var<storage, read> objects: ObjectData;

@binding(0) @group(1) var myTexture: texture_2d<f32>;
@binding(1) @group(1) var mySampler: sampler;

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
};`, x = class x {
  constructor() {
  }
  static async initialize(r) {
    if (x.instance) {
      console.warn("Renderer is already initialized.");
      return;
    }
    x.adapter = r, x.instance = await this.adapter.requestDevice();
  }
  static getInstance() {
    if (!x.instance)
      throw new Error("Device is not initialized. Call initialize() first.");
    return x.instance;
  }
};
x.instance = null;
let G = x;
class Ar {
  constructor(r) {
    this.addTexture = (t) => {
      this.materials.push(t);
    }, this.initialize = async () => {
      await this.setupDevice(), await this.createBindGroupLayouts(), await this.createAssets(), await this.createDepthBufferResources(), await this.createPipeline(), await this.createBindGroup();
    }, this.setupDevice = async () => {
      this.adapter = await navigator.gpu.requestAdapter(), await G.initialize(this.adapter), this.device = G.getInstance(), this.context = this.canvas.getContext("webgpu"), this.format = "bgra8unorm", this.context.configure({
        device: this.device,
        format: this.format,
        alphaMode: "opaque"
      });
    }, this.createBindGroupLayouts = async () => {
      this.frameGroupLayout = this.device.createBindGroupLayout({
        entries: [
          {
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {}
          },
          {
            binding: 1,
            visibility: GPUShaderStage.VERTEX,
            buffer: { type: "read-only-storage" }
          }
        ]
      }), this.materialGroupLayout = this.device.createBindGroupLayout({
        entries: [
          {
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {}
          },
          {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {}
          }
        ]
      });
    }, this.createAssets = async () => {
      for (let n of this.materials)
        await n.initialize(this.device, n.url, this.materialGroupLayout), console.log(`Initialized material: ${n.url}`);
      this.uniformBuffer = this.device.createBuffer({
        size: 64 * 2,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      });
      const t = {
        size: 64 * 2048,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
      };
      this.objectBuffer = this.device.createBuffer(t);
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
      const t = this.device.createPipelineLayout({
        bindGroupLayouts: [this.frameGroupLayout, this.materialGroupLayout]
      });
      this.pipeline = this.device.createRenderPipeline({
        vertex: {
          module: this.device.createShaderModule({ code: b }),
          entryPoint: "vs_main",
          buffers: [
            // hard-code buffer layout TO BE CHANGED!!!
            {
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
            }
          ]
        },
        fragment: {
          module: this.device.createShaderModule({
            code: b
          }),
          entryPoint: "fs_main",
          targets: [{ format: this.format }]
        },
        primitive: {
          topology: "triangle-list"
        },
        layout: t,
        depthStencil: this.depthStencilState
      });
    }, this.createBindGroup = async () => {
      this.frameBindGroup = this.device.createBindGroup({
        layout: this.frameGroupLayout,
        entries: [
          {
            binding: 0,
            resource: { buffer: this.uniformBuffer }
          },
          {
            binding: 1,
            resource: { buffer: this.objectBuffer }
          }
        ]
      });
    }, this.startRender = async (t) => {
      this.activeScene = t;
      const n = t.getObjectData();
      if (!this.device)
        throw new Error("GPUDevice is not initialized.");
      const i = B();
      ie(i, Math.PI / 4, 800 / 600, 0.1, 500);
      const a = n.viewTransform;
      this.device.queue.writeBuffer(
        this.objectBuffer,
        0,
        n.modelTransforms,
        0,
        n.modelTransforms.length
      ), this.device.queue.writeBuffer(this.uniformBuffer, 0, a), this.device.queue.writeBuffer(
        this.uniformBuffer,
        64,
        i
      );
      const s = this.device.createCommandEncoder(), c = this.context.getCurrentTexture().createView(), h = s.beginRenderPass({
        colorAttachments: [
          {
            view: c,
            clearValue: { r: 0.5, g: 0, b: 0.25, a: 1 },
            loadOp: "clear",
            storeOp: "store"
          }
        ],
        depthStencilAttachment: this.depthStencilAttachment
      });
      h.setPipeline(this.pipeline), h.setBindGroup(0, this.frameBindGroup);
      const f = t.getGameObjects();
      let o = 0;
      f.forEach((l) => {
        l.createMeshes(), h.setVertexBuffer(0, l.mesh.buffer), h.setBindGroup(1, l.material.bindGroup), h.draw(
          l.verticieCount,
          1,
          0,
          o * l.verticieCount
        ), o++;
      }), h.end(), this.device.queue.submit([s.finish()]);
    }, this.canvas = r, this.materials = [];
  }
}
const y = class y {
  constructor() {
  }
  static async initialize(r) {
    if (y.instance) {
      console.warn("Renderer is already initialized.");
      return;
    }
    y.canvas = r, y.instance = new Ar(r);
  }
  static getInstance() {
    if (!y.instance)
      throw new Error("Renderer is not initialized. Call initialize() first.");
    return y.instance;
  }
};
y.instance = null, y.canvas = null;
let A = y;
class Dr {
  constructor(r) {
    if (this.createRenderer = async () => {
      this.rendererInitialized = A.initialize(this.canvas), await this.rendererInitialized, this.renderer = A.getInstance();
    }, this.getRenderer = async () => (await this.rendererInitialized, this.renderer), this.validateActiveScene = () => !0, this.startRenderProcess = async () => {
      await this.rendererInitialized, await this.renderer.initialize(), requestAnimationFrame(this.gameLoop);
    }, this.gameLoop = async () => {
      if (!this.activeScene)
        throw new Error("No current active scene was set.");
      this.activeScene.update(), await this.rendererInitialized, this.renderer.startRender(this.activeScene), requestAnimationFrame(this.gameLoop);
    }, !r)
      throw new Error("Improper canvas specificed in initializing engine.");
    if (this.canvas = r, navigator.gpu)
      console.log("WebGPU supported, started to run engine.");
    else throw new Error("WebGPU is not supported on this browser.");
    this.createRenderer();
  }
  get activeScene() {
    return this._activeScene;
  }
  set activeScene(r) {
    this._activeScene = r;
  }
}
class Br extends E {
  constructor(r) {
    super("TransformComponent", r), this.position = [0, 0, 0], this.eulers = w(), this.eulers[2] = 0;
  }
}
class Er {
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
class Sr {
  constructor(r) {
    const t = new Float32Array([
      -0.5,
      -0.5,
      0,
      0,
      0,
      0.5,
      -0.5,
      0,
      1,
      0,
      0.5,
      0.5,
      0,
      1,
      1,
      0.5,
      0.5,
      0,
      1,
      1,
      -0.5,
      0.5,
      0,
      0,
      1,
      -0.5,
      -0.5,
      0,
      0,
      0
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
var P = /* @__PURE__ */ ((e) => (e[e.TRIANGLE = 0] = "TRIANGLE", e[e.QUAD = 1] = "QUAD", e))(P || {});
class Ur {
  constructor(r, t, n) {
    this.verticieCount = 3, this.setMaterial = (i) => {
      const s = A.getInstance().materials.filter((c) => c.url == i);
      if (s.length > 1)
        throw new Error(
          "Multiple instances of same material url found. Please remove duplicates."
        );
      console.log(s[0], this), this.material = s[0];
    }, this.createMeshes = () => {
      switch (this.meshType) {
        case P.QUAD:
          this.mesh = new Sr(G.getInstance()), this.verticieCount = 6;
          break;
        case P.TRIANGLE:
          this.mesh = new Er(G.getInstance()), this.verticieCount = 3;
          break;
        default:
          throw new Error("Mesh type specified is invalid.");
      }
    }, this.name = r, this.instanceId = zr(10), this.components = [], this.transformComponent = new Br(this), this.meshType = t, this.setMaterial(n.url);
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
class qr {
  constructor(r) {
    if (this.initialize = async (n, i, a) => {
      const c = await (await fetch(i)).blob(), h = await createImageBitmap(c);
      this.loadImageBitmap(n, h);
      const f = {
        format: "rgba8unorm",
        dimension: "2d",
        aspect: "all",
        baseMipLevel: 0,
        mipLevelCount: 1,
        baseArrayLayer: 0,
        arrayLayerCount: 1
      };
      this.view = this.texture.createView(f);
      const o = {
        addressModeU: "repeat",
        addressModeV: "repeat",
        magFilter: "linear",
        minFilter: "nearest",
        mipmapFilter: "nearest",
        maxAnisotropy: 1
      };
      this.sampler = n.createSampler(o);
      const l = n.createBindGroup({
        layout: a,
        entries: [
          {
            binding: 0,
            resource: this.view
          },
          {
            binding: 1,
            resource: this.sampler
          }
        ]
      });
      this.bindGroup = l;
    }, this.loadImageBitmap = async (n, i) => {
      const a = {
        size: { width: i.width, height: i.height },
        format: "rgba8unorm",
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
      };
      this.texture = n.createTexture(a), n.queue.copyExternalImageToTexture(
        { source: i },
        { texture: this.texture },
        a.size
      );
    }, this.url = r, A.getInstance().materials.filter(
      (n) => n.url == r
    ).length !== 0)
      throw new Error(
        "Material with image already found, please use existing material."
      );
  }
}
export {
  E as BaseComponent,
  Cr as CameraComponent,
  C as Deg2Rad,
  Dr as EpicEngine,
  Ur as GameObject,
  qr as Material,
  P as ObjectTypes,
  Gr as QuadComponent,
  Sr as QuadMesh,
  Ar as Renderer,
  Lr as Scene,
  Br as TransformComponent,
  Tr as TriangleComponent,
  Er as TriangleMesh,
  zr as generateId,
  Pr as vec3,
  $r as vec4
};
