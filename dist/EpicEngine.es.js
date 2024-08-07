var g = 1e-6, m = typeof Float32Array < "u" ? Float32Array : Array, w = Math.random;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, r = arguments.length; r--; )
    e += arguments[r] * arguments[r];
  return Math.sqrt(e);
});
function L() {
  var e = new m(16);
  return m != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function le(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function U(e, r, t) {
  var n = t[0], i = t[1], a = t[2], s, c, h, f, o, l, u, d, v, p, M, $;
  return r === e ? (e[12] = r[0] * n + r[4] * i + r[8] * a + r[12], e[13] = r[1] * n + r[5] * i + r[9] * a + r[13], e[14] = r[2] * n + r[6] * i + r[10] * a + r[14], e[15] = r[3] * n + r[7] * i + r[11] * a + r[15]) : (s = r[0], c = r[1], h = r[2], f = r[3], o = r[4], l = r[5], u = r[6], d = r[7], v = r[8], p = r[9], M = r[10], $ = r[11], e[0] = s, e[1] = c, e[2] = h, e[3] = f, e[4] = o, e[5] = l, e[6] = u, e[7] = d, e[8] = v, e[9] = p, e[10] = M, e[11] = $, e[12] = s * n + o * i + v * a + r[12], e[13] = c * n + l * i + p * a + r[13], e[14] = h * n + u * i + M * a + r[14], e[15] = f * n + d * i + $ * a + r[15]), e;
}
function de(e, r, t) {
  var n = Math.sin(t), i = Math.cos(t), a = r[0], s = r[1], c = r[2], h = r[3], f = r[4], o = r[5], l = r[6], u = r[7];
  return r !== e && (e[8] = r[8], e[9] = r[9], e[10] = r[10], e[11] = r[11], e[12] = r[12], e[13] = r[13], e[14] = r[14], e[15] = r[15]), e[0] = a * i + f * n, e[1] = s * i + o * n, e[2] = c * i + l * n, e[3] = h * i + u * n, e[4] = f * i - a * n, e[5] = o * i - s * n, e[6] = l * i - c * n, e[7] = u * i - h * n, e;
}
function ue(e, r, t, n, i) {
  var a = 1 / Math.tan(r / 2), s;
  return e[0] = a / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== 1 / 0 ? (s = 1 / (n - i), e[10] = (i + n) * s, e[14] = 2 * i * n * s) : (e[10] = -1, e[14] = -2 * n), e;
}
var ve = ue;
function pe(e, r, t, n) {
  var i, a, s, c, h, f, o, l, u, d, v = r[0], p = r[1], M = r[2], $ = n[0], G = n[1], S = n[2], D = t[0], P = t[1], O = t[2];
  return Math.abs(v - D) < g && Math.abs(p - P) < g && Math.abs(M - O) < g ? le(e) : (o = v - D, l = p - P, u = M - O, d = 1 / Math.hypot(o, l, u), o *= d, l *= d, u *= d, i = G * u - S * l, a = S * o - $ * u, s = $ * l - G * o, d = Math.hypot(i, a, s), d ? (d = 1 / d, i *= d, a *= d, s *= d) : (i = 0, a = 0, s = 0), c = l * s - u * a, h = u * i - o * s, f = o * a - l * i, d = Math.hypot(c, h, f), d ? (d = 1 / d, c *= d, h *= d, f *= d) : (c = 0, h = 0, f = 0), e[0] = i, e[1] = c, e[2] = o, e[3] = 0, e[4] = a, e[5] = h, e[6] = l, e[7] = 0, e[8] = s, e[9] = f, e[10] = u, e[11] = 0, e[12] = -(i * v + a * p + s * M), e[13] = -(c * v + h * p + f * M), e[14] = -(o * v + l * p + u * M), e[15] = 1, e);
}
function z() {
  var e = new m(3);
  return m != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function me(e) {
  var r = new m(3);
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r;
}
function j(e) {
  var r = e[0], t = e[1], n = e[2];
  return Math.hypot(r, t, n);
}
function Me(e, r, t) {
  var n = new m(3);
  return n[0] = e, n[1] = r, n[2] = t, n;
}
function ge(e, r) {
  return e[0] = r[0], e[1] = r[1], e[2] = r[2], e;
}
function ye(e, r, t, n) {
  return e[0] = r, e[1] = t, e[2] = n, e;
}
function I(e, r, t) {
  return e[0] = r[0] + t[0], e[1] = r[1] + t[1], e[2] = r[2] + t[2], e;
}
function R(e, r, t) {
  return e[0] = r[0] - t[0], e[1] = r[1] - t[1], e[2] = r[2] - t[2], e;
}
function V(e, r, t) {
  return e[0] = r[0] * t[0], e[1] = r[1] * t[1], e[2] = r[2] * t[2], e;
}
function N(e, r, t) {
  return e[0] = r[0] / t[0], e[1] = r[1] / t[1], e[2] = r[2] / t[2], e;
}
function xe(e, r) {
  return e[0] = Math.ceil(r[0]), e[1] = Math.ceil(r[1]), e[2] = Math.ceil(r[2]), e;
}
function we(e, r) {
  return e[0] = Math.floor(r[0]), e[1] = Math.floor(r[1]), e[2] = Math.floor(r[2]), e;
}
function ze(e, r, t) {
  return e[0] = Math.min(r[0], t[0]), e[1] = Math.min(r[1], t[1]), e[2] = Math.min(r[2], t[2]), e;
}
function $e(e, r, t) {
  return e[0] = Math.max(r[0], t[0]), e[1] = Math.max(r[1], t[1]), e[2] = Math.max(r[2], t[2]), e;
}
function Ce(e, r) {
  return e[0] = Math.round(r[0]), e[1] = Math.round(r[1]), e[2] = Math.round(r[2]), e;
}
function Te(e, r, t) {
  return e[0] = r[0] * t, e[1] = r[1] * t, e[2] = r[2] * t, e;
}
function Ee(e, r, t, n) {
  return e[0] = r[0] + t[0] * n, e[1] = r[1] + t[1] * n, e[2] = r[2] + t[2] * n, e;
}
function _(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2];
  return Math.hypot(t, n, i);
}
function k(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2];
  return t * t + n * n + i * i;
}
function Q(e) {
  var r = e[0], t = e[1], n = e[2];
  return r * r + t * t + n * n;
}
function Ae(e, r) {
  return e[0] = -r[0], e[1] = -r[1], e[2] = -r[2], e;
}
function Be(e, r) {
  return e[0] = 1 / r[0], e[1] = 1 / r[1], e[2] = 1 / r[2], e;
}
function qe(e, r) {
  var t = r[0], n = r[1], i = r[2], a = t * t + n * n + i * i;
  return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = r[0] * a, e[1] = r[1] * a, e[2] = r[2] * a, e;
}
function Y(e, r) {
  return e[0] * r[0] + e[1] * r[1] + e[2] * r[2];
}
function q(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = t[0], c = t[1], h = t[2];
  return e[0] = i * h - a * c, e[1] = a * s - n * h, e[2] = n * c - i * s, e;
}
function Le(e, r, t, n) {
  var i = r[0], a = r[1], s = r[2];
  return e[0] = i + n * (t[0] - i), e[1] = a + n * (t[1] - a), e[2] = s + n * (t[2] - s), e;
}
function be(e, r, t, n, i, a) {
  var s = a * a, c = s * (2 * a - 3) + 1, h = s * (a - 2) + a, f = s * (a - 1), o = s * (3 - 2 * a);
  return e[0] = r[0] * c + t[0] * h + n[0] * f + i[0] * o, e[1] = r[1] * c + t[1] * h + n[1] * f + i[1] * o, e[2] = r[2] * c + t[2] * h + n[2] * f + i[2] * o, e;
}
function Ge(e, r, t, n, i, a) {
  var s = 1 - a, c = s * s, h = a * a, f = c * s, o = 3 * a * c, l = 3 * h * s, u = h * a;
  return e[0] = r[0] * f + t[0] * o + n[0] * l + i[0] * u, e[1] = r[1] * f + t[1] * o + n[1] * l + i[1] * u, e[2] = r[2] * f + t[2] * o + n[2] * l + i[2] * u, e;
}
function Se(e, r) {
  r = r || 1;
  var t = w() * 2 * Math.PI, n = w() * 2 - 1, i = Math.sqrt(1 - n * n) * r;
  return e[0] = Math.cos(t) * i, e[1] = Math.sin(t) * i, e[2] = n * r, e;
}
function De(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = t[3] * n + t[7] * i + t[11] * a + t[15];
  return s = s || 1, e[0] = (t[0] * n + t[4] * i + t[8] * a + t[12]) / s, e[1] = (t[1] * n + t[5] * i + t[9] * a + t[13]) / s, e[2] = (t[2] * n + t[6] * i + t[10] * a + t[14]) / s, e;
}
function Pe(e, r, t) {
  var n = r[0], i = r[1], a = r[2];
  return e[0] = n * t[0] + i * t[3] + a * t[6], e[1] = n * t[1] + i * t[4] + a * t[7], e[2] = n * t[2] + i * t[5] + a * t[8], e;
}
function Oe(e, r, t) {
  var n = t[0], i = t[1], a = t[2], s = t[3], c = r[0], h = r[1], f = r[2], o = i * f - a * h, l = a * c - n * f, u = n * h - i * c, d = i * u - a * l, v = a * o - n * u, p = n * l - i * o, M = s * 2;
  return o *= M, l *= M, u *= M, d *= 2, v *= 2, p *= 2, e[0] = c + o + d, e[1] = h + l + v, e[2] = f + u + p, e;
}
function Ue(e, r, t, n) {
  var i = [], a = [];
  return i[0] = r[0] - t[0], i[1] = r[1] - t[1], i[2] = r[2] - t[2], a[0] = i[0], a[1] = i[1] * Math.cos(n) - i[2] * Math.sin(n), a[2] = i[1] * Math.sin(n) + i[2] * Math.cos(n), e[0] = a[0] + t[0], e[1] = a[1] + t[1], e[2] = a[2] + t[2], e;
}
function Fe(e, r, t, n) {
  var i = [], a = [];
  return i[0] = r[0] - t[0], i[1] = r[1] - t[1], i[2] = r[2] - t[2], a[0] = i[2] * Math.sin(n) + i[0] * Math.cos(n), a[1] = i[1], a[2] = i[2] * Math.cos(n) - i[0] * Math.sin(n), e[0] = a[0] + t[0], e[1] = a[1] + t[1], e[2] = a[2] + t[2], e;
}
function je(e, r, t, n) {
  var i = [], a = [];
  return i[0] = r[0] - t[0], i[1] = r[1] - t[1], i[2] = r[2] - t[2], a[0] = i[0] * Math.cos(n) - i[1] * Math.sin(n), a[1] = i[0] * Math.sin(n) + i[1] * Math.cos(n), a[2] = i[2], e[0] = a[0] + t[0], e[1] = a[1] + t[1], e[2] = a[2] + t[2], e;
}
function Ie(e, r) {
  var t = e[0], n = e[1], i = e[2], a = r[0], s = r[1], c = r[2], h = Math.sqrt(t * t + n * n + i * i), f = Math.sqrt(a * a + s * s + c * c), o = h * f, l = o && Y(e, r) / o;
  return Math.acos(Math.min(Math.max(l, -1), 1));
}
function Re(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e;
}
function Ve(e) {
  return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
}
function Ne(e, r) {
  return e[0] === r[0] && e[1] === r[1] && e[2] === r[2];
}
function _e(e, r) {
  var t = e[0], n = e[1], i = e[2], a = r[0], s = r[1], c = r[2];
  return Math.abs(t - a) <= g * Math.max(1, Math.abs(t), Math.abs(a)) && Math.abs(n - s) <= g * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - c) <= g * Math.max(1, Math.abs(i), Math.abs(c));
}
var ke = R, Qe = V, Ye = N, Xe = _, Je = k, He = j, We = Q, Ze = function() {
  var e = z();
  return function(r, t, n, i, a, s) {
    var c, h;
    for (t || (t = 3), n || (n = 0), i ? h = Math.min(i * t + n, r.length) : h = r.length, c = n; c < h; c += t)
      e[0] = r[c], e[1] = r[c + 1], e[2] = r[c + 2], a(e, e, s), r[c] = e[0], r[c + 1] = e[1], r[c + 2] = e[2];
    return r;
  };
}();
const $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: I,
  angle: Ie,
  bezier: Ge,
  ceil: xe,
  clone: me,
  copy: ge,
  create: z,
  cross: q,
  dist: Xe,
  distance: _,
  div: Ye,
  divide: N,
  dot: Y,
  equals: _e,
  exactEquals: Ne,
  floor: we,
  forEach: Ze,
  fromValues: Me,
  hermite: be,
  inverse: Be,
  len: He,
  length: j,
  lerp: Le,
  max: $e,
  min: ze,
  mul: Qe,
  multiply: V,
  negate: Ae,
  normalize: qe,
  random: Se,
  rotateX: Ue,
  rotateY: Fe,
  rotateZ: je,
  round: Ce,
  scale: Te,
  scaleAndAdd: Ee,
  set: ye,
  sqrDist: Je,
  sqrLen: We,
  squaredDistance: k,
  squaredLength: Q,
  str: Ve,
  sub: ke,
  subtract: R,
  transformMat3: Pe,
  transformMat4: De,
  transformQuat: Oe,
  zero: Re
}, Symbol.toStringTag, { value: "Module" }));
function X() {
  var e = new m(4);
  return m != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e;
}
function Ke(e) {
  var r = new m(4);
  return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r;
}
function er(e, r, t, n) {
  var i = new m(4);
  return i[0] = e, i[1] = r, i[2] = t, i[3] = n, i;
}
function rr(e, r) {
  return e[0] = r[0], e[1] = r[1], e[2] = r[2], e[3] = r[3], e;
}
function tr(e, r, t, n, i) {
  return e[0] = r, e[1] = t, e[2] = n, e[3] = i, e;
}
function nr(e, r, t) {
  return e[0] = r[0] + t[0], e[1] = r[1] + t[1], e[2] = r[2] + t[2], e[3] = r[3] + t[3], e;
}
function J(e, r, t) {
  return e[0] = r[0] - t[0], e[1] = r[1] - t[1], e[2] = r[2] - t[2], e[3] = r[3] - t[3], e;
}
function H(e, r, t) {
  return e[0] = r[0] * t[0], e[1] = r[1] * t[1], e[2] = r[2] * t[2], e[3] = r[3] * t[3], e;
}
function W(e, r, t) {
  return e[0] = r[0] / t[0], e[1] = r[1] / t[1], e[2] = r[2] / t[2], e[3] = r[3] / t[3], e;
}
function ir(e, r) {
  return e[0] = Math.ceil(r[0]), e[1] = Math.ceil(r[1]), e[2] = Math.ceil(r[2]), e[3] = Math.ceil(r[3]), e;
}
function ar(e, r) {
  return e[0] = Math.floor(r[0]), e[1] = Math.floor(r[1]), e[2] = Math.floor(r[2]), e[3] = Math.floor(r[3]), e;
}
function sr(e, r, t) {
  return e[0] = Math.min(r[0], t[0]), e[1] = Math.min(r[1], t[1]), e[2] = Math.min(r[2], t[2]), e[3] = Math.min(r[3], t[3]), e;
}
function cr(e, r, t) {
  return e[0] = Math.max(r[0], t[0]), e[1] = Math.max(r[1], t[1]), e[2] = Math.max(r[2], t[2]), e[3] = Math.max(r[3], t[3]), e;
}
function hr(e, r) {
  return e[0] = Math.round(r[0]), e[1] = Math.round(r[1]), e[2] = Math.round(r[2]), e[3] = Math.round(r[3]), e;
}
function or(e, r, t) {
  return e[0] = r[0] * t, e[1] = r[1] * t, e[2] = r[2] * t, e[3] = r[3] * t, e;
}
function fr(e, r, t, n) {
  return e[0] = r[0] + t[0] * n, e[1] = r[1] + t[1] * n, e[2] = r[2] + t[2] * n, e[3] = r[3] + t[3] * n, e;
}
function Z(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2], a = r[3] - e[3];
  return Math.hypot(t, n, i, a);
}
function K(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1], i = r[2] - e[2], a = r[3] - e[3];
  return t * t + n * n + i * i + a * a;
}
function ee(e) {
  var r = e[0], t = e[1], n = e[2], i = e[3];
  return Math.hypot(r, t, n, i);
}
function re(e) {
  var r = e[0], t = e[1], n = e[2], i = e[3];
  return r * r + t * t + n * n + i * i;
}
function lr(e, r) {
  return e[0] = -r[0], e[1] = -r[1], e[2] = -r[2], e[3] = -r[3], e;
}
function dr(e, r) {
  return e[0] = 1 / r[0], e[1] = 1 / r[1], e[2] = 1 / r[2], e[3] = 1 / r[3], e;
}
function ur(e, r) {
  var t = r[0], n = r[1], i = r[2], a = r[3], s = t * t + n * n + i * i + a * a;
  return s > 0 && (s = 1 / Math.sqrt(s)), e[0] = t * s, e[1] = n * s, e[2] = i * s, e[3] = a * s, e;
}
function vr(e, r) {
  return e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3];
}
function pr(e, r, t, n) {
  var i = t[0] * n[1] - t[1] * n[0], a = t[0] * n[2] - t[2] * n[0], s = t[0] * n[3] - t[3] * n[0], c = t[1] * n[2] - t[2] * n[1], h = t[1] * n[3] - t[3] * n[1], f = t[2] * n[3] - t[3] * n[2], o = r[0], l = r[1], u = r[2], d = r[3];
  return e[0] = l * f - u * h + d * c, e[1] = -(o * f) + u * s - d * a, e[2] = o * h - l * s + d * i, e[3] = -(o * c) + l * a - u * i, e;
}
function mr(e, r, t, n) {
  var i = r[0], a = r[1], s = r[2], c = r[3];
  return e[0] = i + n * (t[0] - i), e[1] = a + n * (t[1] - a), e[2] = s + n * (t[2] - s), e[3] = c + n * (t[3] - c), e;
}
function Mr(e, r) {
  r = r || 1;
  var t, n, i, a, s, c;
  do
    t = w() * 2 - 1, n = w() * 2 - 1, s = t * t + n * n;
  while (s >= 1);
  do
    i = w() * 2 - 1, a = w() * 2 - 1, c = i * i + a * a;
  while (c >= 1);
  var h = Math.sqrt((1 - s) / c);
  return e[0] = r * t, e[1] = r * n, e[2] = r * i * h, e[3] = r * a * h, e;
}
function gr(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = r[3];
  return e[0] = t[0] * n + t[4] * i + t[8] * a + t[12] * s, e[1] = t[1] * n + t[5] * i + t[9] * a + t[13] * s, e[2] = t[2] * n + t[6] * i + t[10] * a + t[14] * s, e[3] = t[3] * n + t[7] * i + t[11] * a + t[15] * s, e;
}
function yr(e, r, t) {
  var n = r[0], i = r[1], a = r[2], s = t[0], c = t[1], h = t[2], f = t[3], o = f * n + c * a - h * i, l = f * i + h * n - s * a, u = f * a + s * i - c * n, d = -s * n - c * i - h * a;
  return e[0] = o * f + d * -s + l * -h - u * -c, e[1] = l * f + d * -c + u * -s - o * -h, e[2] = u * f + d * -h + o * -c - l * -s, e[3] = r[3], e;
}
function xr(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e;
}
function wr(e) {
  return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
}
function zr(e, r) {
  return e[0] === r[0] && e[1] === r[1] && e[2] === r[2] && e[3] === r[3];
}
function $r(e, r) {
  var t = e[0], n = e[1], i = e[2], a = e[3], s = r[0], c = r[1], h = r[2], f = r[3];
  return Math.abs(t - s) <= g * Math.max(1, Math.abs(t), Math.abs(s)) && Math.abs(n - c) <= g * Math.max(1, Math.abs(n), Math.abs(c)) && Math.abs(i - h) <= g * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(a - f) <= g * Math.max(1, Math.abs(a), Math.abs(f));
}
var Cr = J, Tr = H, Er = W, Ar = Z, Br = K, qr = ee, Lr = re, br = function() {
  var e = X();
  return function(r, t, n, i, a, s) {
    var c, h;
    for (t || (t = 4), n || (n = 0), i ? h = Math.min(i * t + n, r.length) : h = r.length, c = n; c < h; c += t)
      e[0] = r[c], e[1] = r[c + 1], e[2] = r[c + 2], e[3] = r[c + 3], a(e, e, s), r[c] = e[0], r[c + 1] = e[1], r[c + 2] = e[2], r[c + 3] = e[3];
    return r;
  };
}();
const Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: nr,
  ceil: ir,
  clone: Ke,
  copy: rr,
  create: X,
  cross: pr,
  dist: Ar,
  distance: Z,
  div: Er,
  divide: W,
  dot: vr,
  equals: $r,
  exactEquals: zr,
  floor: ar,
  forEach: br,
  fromValues: er,
  inverse: dr,
  len: qr,
  length: ee,
  lerp: mr,
  max: cr,
  min: sr,
  mul: Tr,
  multiply: H,
  negate: lr,
  normalize: ur,
  random: Mr,
  round: hr,
  scale: or,
  scaleAndAdd: fr,
  set: tr,
  sqrDist: Br,
  sqrLen: Lr,
  squaredDistance: K,
  squaredLength: re,
  str: wr,
  sub: Cr,
  subtract: J,
  transformMat4: gr,
  transformQuat: yr,
  zero: xr
}, Symbol.toStringTag, { value: "Module" }));
function te() {
  var e = new m(2);
  return m != Float32Array && (e[0] = 0, e[1] = 0), e;
}
function Gr(e) {
  var r = new m(2);
  return r[0] = e[0], r[1] = e[1], r;
}
function Sr(e, r) {
  var t = new m(2);
  return t[0] = e, t[1] = r, t;
}
function Dr(e, r) {
  return e[0] = r[0], e[1] = r[1], e;
}
function Pr(e, r, t) {
  return e[0] = r, e[1] = t, e;
}
function Or(e, r, t) {
  return e[0] = r[0] + t[0], e[1] = r[1] + t[1], e;
}
function ne(e, r, t) {
  return e[0] = r[0] - t[0], e[1] = r[1] - t[1], e;
}
function ie(e, r, t) {
  return e[0] = r[0] * t[0], e[1] = r[1] * t[1], e;
}
function ae(e, r, t) {
  return e[0] = r[0] / t[0], e[1] = r[1] / t[1], e;
}
function Ur(e, r) {
  return e[0] = Math.ceil(r[0]), e[1] = Math.ceil(r[1]), e;
}
function Fr(e, r) {
  return e[0] = Math.floor(r[0]), e[1] = Math.floor(r[1]), e;
}
function jr(e, r, t) {
  return e[0] = Math.min(r[0], t[0]), e[1] = Math.min(r[1], t[1]), e;
}
function Ir(e, r, t) {
  return e[0] = Math.max(r[0], t[0]), e[1] = Math.max(r[1], t[1]), e;
}
function Rr(e, r) {
  return e[0] = Math.round(r[0]), e[1] = Math.round(r[1]), e;
}
function Vr(e, r, t) {
  return e[0] = r[0] * t, e[1] = r[1] * t, e;
}
function Nr(e, r, t, n) {
  return e[0] = r[0] + t[0] * n, e[1] = r[1] + t[1] * n, e;
}
function se(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1];
  return Math.hypot(t, n);
}
function ce(e, r) {
  var t = r[0] - e[0], n = r[1] - e[1];
  return t * t + n * n;
}
function he(e) {
  var r = e[0], t = e[1];
  return Math.hypot(r, t);
}
function oe(e) {
  var r = e[0], t = e[1];
  return r * r + t * t;
}
function _r(e, r) {
  return e[0] = -r[0], e[1] = -r[1], e;
}
function kr(e, r) {
  return e[0] = 1 / r[0], e[1] = 1 / r[1], e;
}
function Qr(e, r) {
  var t = r[0], n = r[1], i = t * t + n * n;
  return i > 0 && (i = 1 / Math.sqrt(i)), e[0] = r[0] * i, e[1] = r[1] * i, e;
}
function Yr(e, r) {
  return e[0] * r[0] + e[1] * r[1];
}
function Xr(e, r, t) {
  var n = r[0] * t[1] - r[1] * t[0];
  return e[0] = e[1] = 0, e[2] = n, e;
}
function Jr(e, r, t, n) {
  var i = r[0], a = r[1];
  return e[0] = i + n * (t[0] - i), e[1] = a + n * (t[1] - a), e;
}
function Hr(e, r) {
  r = r || 1;
  var t = w() * 2 * Math.PI;
  return e[0] = Math.cos(t) * r, e[1] = Math.sin(t) * r, e;
}
function Wr(e, r, t) {
  var n = r[0], i = r[1];
  return e[0] = t[0] * n + t[2] * i, e[1] = t[1] * n + t[3] * i, e;
}
function Zr(e, r, t) {
  var n = r[0], i = r[1];
  return e[0] = t[0] * n + t[2] * i + t[4], e[1] = t[1] * n + t[3] * i + t[5], e;
}
function Kr(e, r, t) {
  var n = r[0], i = r[1];
  return e[0] = t[0] * n + t[3] * i + t[6], e[1] = t[1] * n + t[4] * i + t[7], e;
}
function et(e, r, t) {
  var n = r[0], i = r[1];
  return e[0] = t[0] * n + t[4] * i + t[12], e[1] = t[1] * n + t[5] * i + t[13], e;
}
function rt(e, r, t, n) {
  var i = r[0] - t[0], a = r[1] - t[1], s = Math.sin(n), c = Math.cos(n);
  return e[0] = i * c - a * s + t[0], e[1] = i * s + a * c + t[1], e;
}
function tt(e, r) {
  var t = e[0], n = e[1], i = r[0], a = r[1], s = Math.sqrt(t * t + n * n) * Math.sqrt(i * i + a * a), c = s && (t * i + n * a) / s;
  return Math.acos(Math.min(Math.max(c, -1), 1));
}
function nt(e) {
  return e[0] = 0, e[1] = 0, e;
}
function it(e) {
  return "vec2(" + e[0] + ", " + e[1] + ")";
}
function at(e, r) {
  return e[0] === r[0] && e[1] === r[1];
}
function st(e, r) {
  var t = e[0], n = e[1], i = r[0], a = r[1];
  return Math.abs(t - i) <= g * Math.max(1, Math.abs(t), Math.abs(i)) && Math.abs(n - a) <= g * Math.max(1, Math.abs(n), Math.abs(a));
}
var ct = he, ht = ne, ot = ie, ft = ae, lt = se, dt = ce, ut = oe, vt = function() {
  var e = te();
  return function(r, t, n, i, a, s) {
    var c, h;
    for (t || (t = 2), n || (n = 0), i ? h = Math.min(i * t + n, r.length) : h = r.length, c = n; c < h; c += t)
      e[0] = r[c], e[1] = r[c + 1], a(e, e, s), r[c] = e[0], r[c + 1] = e[1];
    return r;
  };
}();
const Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Or,
  angle: tt,
  ceil: Ur,
  clone: Gr,
  copy: Dr,
  create: te,
  cross: Xr,
  dist: lt,
  distance: se,
  div: ft,
  divide: ae,
  dot: Yr,
  equals: st,
  exactEquals: at,
  floor: Fr,
  forEach: vt,
  fromValues: Sr,
  inverse: kr,
  len: ct,
  length: he,
  lerp: Jr,
  max: Ir,
  min: jr,
  mul: ot,
  multiply: ie,
  negate: _r,
  normalize: Qr,
  random: Hr,
  rotate: rt,
  round: Rr,
  scale: Vr,
  scaleAndAdd: Nr,
  set: Pr,
  sqrDist: dt,
  sqrLen: ut,
  squaredDistance: ce,
  squaredLength: oe,
  str: it,
  sub: ht,
  subtract: ne,
  transformMat2: Wr,
  transformMat2d: Zr,
  transformMat3: Kr,
  transformMat4: et,
  zero: nt
}, Symbol.toStringTag, { value: "Module" }));
class B {
  constructor(r, t) {
    this.update = () => {
    }, this.name = r, this.parent = t;
  }
}
const C = (e) => e * Math.PI / 180, pt = (e) => {
  const r = Math.pow(10, e - 1), t = Math.pow(10, e) - 1;
  return Math.floor(Math.random() * (t - r + 1)) + r;
};
class mt extends B {
  constructor(r) {
    super("CameraComponent", r), this.update = () => {
      this.forwards = [
        Math.cos(C(this.parent.transformComponent.eulers[2])) * Math.cos(C(this.parent.transformComponent.eulers[1])),
        Math.sin(C(this.parent.transformComponent.eulers[2])) * Math.cos(C(this.parent.transformComponent.eulers[1])),
        Math.sin(C(this.parent.transformComponent.eulers[1]))
      ], q(this.right, this.forwards, [0, 0, 1]), q(this.up, this.right, this.forwards);
      let t = z();
      I(
        t,
        new Float32Array(this.parent.transformComponent.position),
        this.forwards
      ), pe(
        this.view,
        new Float32Array(this.parent.transformComponent.position),
        t,
        this.up
      );
    }, this.getView = () => this.view, this.view = L(), this.forwards = z(), this.right = z(), this.up = z();
  }
}
var A = /* @__PURE__ */ ((e) => (e[e.QUAD = 0] = "QUAD", e[e.TRIANGLE = 1] = "TRIANGLE", e[e.OBJECT = 2] = "OBJECT", e))(A || {});
class b {
  constructor() {
    this.initialized = !1, this.initialize = (r) => {
      this.initialized || (this.bufferUsageFlags = GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST, this.bufferDescriptor = {
        size: this.verticies.byteLength,
        usage: this.bufferUsageFlags,
        mappedAtCreation: !0
      }, this.buffer = r.createBuffer(this.bufferDescriptor), new Float32Array(this.buffer.getMappedRange()).set(this.verticies), this.buffer.unmap(), this.bufferLayout = {
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
      }, this.initialized = !0);
    };
  }
}
class Mt extends b {
  // Assuming buffer is of type GPUBuffer
  constructor() {
    super(), this.v = [], this.vt = [], this.vn = [];
  }
  async setup(r, t) {
    await this.readFile(t), this.verticieCount = this.verticies.length / 5, this.setupBuffer(r);
  }
  async readFile(r) {
    const i = (await (await fetch(r)).text()).split(`
`), a = [];
    i.forEach((s) => {
      const c = s.trim().split(/\s+/);
      switch (c[0]) {
        case "v":
          this.readVertexLine(c);
          break;
        case "vt":
          this.readTextCoordLine(c);
          break;
        case "vn":
          this.readNormalLine(c);
          break;
        case "f":
          this.readFaceLine(c, a);
          break;
      }
    }), this.verticies = new Float32Array(a);
  }
  readVertexLine(r) {
    const t = [parseFloat(r[1]), parseFloat(r[2]), parseFloat(r[3])];
    this.v.push(t);
  }
  readTextCoordLine(r) {
    const t = [parseFloat(r[1]), parseFloat(r[2])];
    this.vt.push(t);
  }
  readNormalLine(r) {
    const t = [parseFloat(r[1]), parseFloat(r[2]), parseFloat(r[3])];
    this.vn.push(t);
  }
  readFaceLine(r, t) {
    r.slice(1).forEach((n) => {
      this.readCorner(n, t);
    });
  }
  readCorner(r, t) {
    const [n, i, a] = r.split("/").map((h) => parseInt(h, 10) - 1), s = this.v[n], c = this.vt[i];
    !s || !c || t.push(s[0], s[1], s[2], c[0], c[1]);
  }
  setupBuffer(r) {
    this.buffer = r.createBuffer({
      size: this.verticies.byteLength,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: !0
    }), new Float32Array(this.buffer.getMappedRange()).set(this.verticies), this.buffer.unmap();
  }
}
const x = class x {
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
let E = x;
class gt extends b {
  constructor(r) {
    super(), this.verticies = new Float32Array([
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
    ]), this.verticieCount = 6, this.initialize(r);
  }
}
class yt extends b {
  constructor(r) {
    super(), this.verticies = new Float32Array([
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
    ]), this.verticieCount = 3, this.initialize(r);
  }
}
class fe extends B {
  constructor(r, t, n) {
    super("MeshComponent", r), this.update = () => {
      this.model = L(), U(this.model, this.model, this.parent.transformComponent.position), U(this.model, this.model, this.parent.transformComponent.position), de(this.model, this.model, C(this.parent.transformComponent.eulers[2]));
    }, this.setupMesh = async () => {
      const i = E.getInstance();
      switch (this.meshType) {
        case A.OBJECT:
          if (!this.objectUrl) throw new Error("ObjectURL not specified when creating object mesh.");
          const a = new Mt();
          await a.setup(i, this.objectUrl), this.mesh = a;
          break;
        case A.QUAD:
          this.mesh = new gt(i);
          break;
        case A.TRIANGLE:
          this.mesh = new yt(i);
          break;
        default:
          throw new Error("Invalid MeshType specified.");
      }
    }, this.getModel = () => this.model, this.getMesh = () => this.mesh, this.meshType = t, this.objectUrl = n;
  }
}
class Et {
  constructor(r) {
    this.update = () => {
      let n = 0;
      this.gameObjects.forEach((i) => {
        i.components.forEach((a) => {
          if (a.update(), a instanceof fe) {
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
    const t = r.getComponent(mt);
    if (!t) throw new Error("Camera component not found within gameobject specified.");
    this.camera = t, this.gameObjects = [], this.objectData = new Float32Array(16 * 1024), this.gameObjects.push(r);
  }
}
const F = `struct TransformData {
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
};`, y = class y {
  constructor() {
  }
  static async initialize(r) {
    if (y.instance) {
      console.warn("Renderer is already initialized.");
      return;
    }
    y.canvas = r, y.instance = new wt(r);
  }
  static getInstance() {
    if (!y.instance)
      throw new Error("Renderer is not initialized. Call initialize() first.");
    return y.instance;
  }
};
y.instance = null, y.canvas = null;
let T = y;
class xt extends B {
  constructor(r, t) {
    super("MaterialComponent", r), this.setMaterial = (n) => {
      const a = T.getInstance().materials.filter((s) => s.url == n);
      if (a.length > 1)
        throw new Error("Multiple instances of same material url found. Please remove duplicates.");
      this.material = a[0];
    }, this.setMaterial(t);
  }
}
class wt {
  constructor(r) {
    this.addTexture = (t) => {
      this.materials.push(t);
    }, this.initialize = async () => {
      await this.setupDevice(), await this.createBindGroupLayouts(), await this.createAssets(), await this.createDepthBufferResources(), await this.createPipeline(), await this.createBindGroup();
    }, this.setupDevice = async () => {
      this.adapter = await navigator.gpu.requestAdapter(), await E.initialize(this.adapter), this.device = E.getInstance(), this.context = this.canvas.getContext("webgpu"), this.format = "bgra8unorm", this.context.configure({
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
        size: 64 * 1024,
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
          module: this.device.createShaderModule({ code: F }),
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
            code: F
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
      var l;
      this.activeScene = t;
      const n = t.getObjectData();
      if (!this.device)
        throw new Error("GPUDevice is not initialized.");
      const i = L();
      ve(i, Math.PI / 4, 800 / 600, 0.1, 5e4);
      const a = n.viewTransform;
      this.device.queue.writeBuffer(
        this.objectBuffer,
        0,
        n.modelTransforms,
        0,
        n.modelTransforms.length
      ), this.device.queue.writeBuffer(this.uniformBuffer, 0, a), this.device.queue.writeBuffer(this.uniformBuffer, 64, i);
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
      for (const u of f) {
        const d = u.getComponent(xt), v = u.getComponent(fe);
        if (!d || !v) continue;
        (l = v == null ? void 0 : v.mesh) != null && l.initialized || await v.setupMesh(), v.mesh.initialized = !0;
        const p = v.getMesh();
        p.buffer && d.material && (h.setVertexBuffer(0, p.buffer), h.setBindGroup(1, d.material.bindGroup), h.draw(p.verticieCount, 1, 0, o), o++);
      }
      h.end(), this.device.queue.submit([s.finish()]);
    }, this.canvas = r, this.materials = [];
  }
}
class At {
  constructor(r) {
    if (this.createRenderer = async () => {
      this.rendererInitialized = T.initialize(this.canvas), await this.rendererInitialized, this.renderer = T.getInstance();
    }, this.getRenderer = async () => (await this.rendererInitialized, this.renderer), this.validateActiveScene = () => !0, this.startRenderProcess = async () => {
      await this.rendererInitialized, await this.renderer.initialize(), requestAnimationFrame(this.gameLoop);
    }, this.gameLoop = async () => {
      if (!this.activeScene)
        throw new Error("No current active scene was set.");
      this.activeScene.update(), await this.rendererInitialized, this.renderer.startRender(this.activeScene), requestAnimationFrame(this.gameLoop);
    }, !r) throw new Error("Improper canvas specificed in initializing engine.");
    if (this.canvas = r, navigator.gpu) console.log("WebGPU supported, started to run engine.");
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
class zt extends B {
  constructor(r) {
    super("TransformComponent", r), this.position = [0, 0, 0], this.eulers = z(), this.eulers[2] = 0;
  }
}
class Bt {
  constructor(r) {
    this.name = r, this.instanceId = pt(10), this.components = [], this.transformComponent = new zt(this);
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
class qt {
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
    }, this.url = r, T.getInstance().materials.filter(
      (n) => n.url == r
    ).length !== 0)
      throw new Error(
        "Material with image already found, please use existing material."
      );
  }
}
export {
  B as BaseComponent,
  mt as CameraComponent,
  C as Deg2Rad,
  At as EpicEngine,
  Bt as GameObject,
  qt as Material,
  xt as MaterialComponent,
  b as Mesh,
  fe as MeshComponent,
  A as MeshTypes,
  Mt as ObjectMesh,
  gt as QuadMesh,
  wt as Renderer,
  Et as Scene,
  zt as TransformComponent,
  yt as TriangleMesh,
  pt as generateId,
  Tt as vec2,
  $t as vec3,
  Ct as vec4
};
