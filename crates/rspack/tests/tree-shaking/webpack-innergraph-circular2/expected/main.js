(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _module = __webpack_require__("./module.js");
it("should be able to handle circular referenced", ()=>{
    expect((0, _module.x)()).toEqual([
        _module.y,
        _module.z
    ]);
    const [_a, b, c, d] = (0, _module.a)();
    expect(b()).toEqual([
        _module.a,
        b,
        c,
        d
    ]);
    expect(c()).toEqual([
        _module.a,
        b,
        c,
        d
    ]);
    expect(d()).toEqual([
        _module.a,
        b,
        c,
        d
    ]);
    const [f2, f4] = (0, _module.f3)();
    const [f1, _f3] = f2();
    expect(_f3).toBe(_module.f3);
    expect((0, _module.f3)()).toEqual(f1());
    expect(f2()).toEqual(f4());
});
},
"./module.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    x: function() {
        return x;
    },
    y: function() {
        return y;
    },
    z: function() {
        return z;
    },
    a: function() {
        return a;
    },
    f3: function() {
        return f3;
    }
});
function x() {
    return [
        y,
        z
    ];
}
function y() {
    return [
        x,
        z
    ];
}
function z() {
    return [
        x,
        y
    ];
}
function a() {
    return [
        a,
        b,
        c,
        d
    ];
}
function b() {
    return [
        a,
        b,
        c,
        d
    ];
}
function c() {
    return [
        a,
        b,
        c,
        d
    ];
}
function d() {
    return [
        a,
        b,
        c,
        d
    ];
}
function f1() {
    return [
        f2,
        f4
    ];
}
function f2() {
    return [
        f1,
        f3
    ];
}
function f3() {
    return [
        f2,
        f4
    ];
}
function f4() {
    return [
        f1,
        f3
    ];
}
},

},function(__webpack_require__) {
var __webpack_exports__ = __webpack_require__('./index.js');

}
]);