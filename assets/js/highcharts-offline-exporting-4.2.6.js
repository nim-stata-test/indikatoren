/*
 Highcharts JS v4.2.6 (2016-08-02)
 Client side exporting module

 (c) 2015 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(a) {
    typeof module === "object" && module.exports ? module.exports = a : a(Highcharts)
})(function(a) {
    function v(g, a) {
        var c = m.getElementsByTagName("head")[0]
          , b = m.createElement("script");
        b.type = "text/javascript";
        b.src = g;
        b.onload = a;
        c.appendChild(b)
    }
    var j = a.win
      , k = j.navigator
      , m = j.document
      , r = j.URL || j.webkitURL || j
      , s = /Edge\/|Trident\/|MSIE /.test(k.userAgent)
      , w = s ? 150 : 0;
    a.CanVGRenderer = {};
    a.downloadURL = function(g, a) {
        var c = m.createElement("a"), b;
        if (k.msSaveOrOpenBlob)
            k.msSaveOrOpenBlob(g, a);
        else if (c.download !== void 0)
            c.href = g,
            c.download = a,
            c.target = "_blank",
            m.body.appendChild(c),
            c.click(),
            m.body.removeChild(c);
        else
            try {
                if (b = j.open(g, "chart"),
                b === void 0 || b === null )
                    throw "Failed to open window";
            } catch (i) {
                j.location.href = g
            }
    }
    ;
    a.svgToDataUrl = function(a) {
        a = a.replace('width="485" height="415">', 'viewBox="0 0 485 415">');
        var h = k.userAgent.indexOf("WebKit") > -1 && k.userAgent.indexOf("Chrome") < 0;
        try {
            if (!h && k.userAgent.toLowerCase().indexOf("firefox") < 0)
                return r.createObjectURL(new j.Blob([a],{
                    type: "image/svg+xml;charset-utf-16"
                }))
        } catch (c) {}
        return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(a)
    }
    ;
    a.imageToDataUrl = function(a, h, c, b, i, d, l, f, n) {
        var e = new j.Image, k, o = function() {
            setTimeout(function() {
                var d = m.createElement("canvas"), o = d.getContext && d.getContext("2d"), f;
                try {
                    if (o) {
                        d.height = e.height * b;
                        d.width = e.width * b;
                        o.drawImage(e, 0, 0, d.width, d.height);
                        try {
                            f = d.toDataURL(h),
                            i(f, h, c, b)
                        } catch (j) {
                            k(a, h, c, b)
                        }
                    } else
                        l(a, h, c, b)
                } finally {
                    n && n(a, h, c, b)
                }
            }, w)
        }
        , q = function() {
            f(a, h, c, b);
            n && n(a, h, c, b)
        }
        ;
        k = function() {
            e = new j.Image;
            k = d;
            e.crossOrigin = "Anonymous";
            e.onload = o;
            e.onerror = q;
            e.src = a
        }
        ;
        e.onload = o;
        e.onerror = q;
        e.src = a
    }
    ;
    a.downloadSVGLocal = function(g, h, c, b, i, d) {
        var l, f, n = !0, e;
        if (c === "image/svg+xml")
            try {
                k.msSaveOrOpenBlob ? (f = new MSBlobBuilder,
                f.append(g),
                l = f.getBlob("image/svg+xml")) : l = a.svgToDataUrl(g),
                a.downloadURL(l, h),
                d && d()
            } catch (p) {
                i()
            }
        else
            l = a.svgToDataUrl(g),
            e = function() {
                try {
                    r.revokeObjectURL(l)
                } catch (a) {}
            }
            ,
            a.imageToDataUrl(l, c, {}, b, function(b) {
                try {
                    a.downloadURL(b, h),
                    d && d()
                } catch (c) {
                    i()
                }
            }, function() {
                var f = m.createElement("canvas")
                  , l = f.getContext("2d")
                  , t = g.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1] * b
                  , p = g.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1] * b
                  , u = function() {
                    l.drawSvg(g, 0, 0, t, p);
                    try {
                        a.downloadURL(k.msSaveOrOpenBlob ? f.msToBlob() : f.toDataURL(c), h),
                        d && d()
                    } catch (b) {
                        i()
                    } finally {
                        e()
                    }
                }
                ;
                f.width = t;
                f.height = p;
                j.canvg ? u() : (n = !0,
                v(a.getOptions().global.canvasToolsURL, function() {
                    u()
                }))
            }, i, i, function() {
                n && e()
            })
    }
    ;
    a.Chart.prototype.getSVGForLocalExport = function(g, h, c, b) {
        var i = this, d, l = 0, f, j, e, k, m = function(a, c, e) {
            ++l;
            e.imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
            l === d.length && b(i.sanitizeSVG(f.innerHTML))
        }
        ;
        a.wrap(a.Chart.prototype, "getChartHTML", function(a) {
            f = this.container.cloneNode(!0);
            return a.apply(this, Array.prototype.slice.call(arguments, 1))
        });
        i.getSVGForExport(g, h);
        d = f.getElementsByTagName("image");
        try {
            if (d.length)
                for (e = 0,
                k = d.length; e < k; ++e)
                    j = d[e],
                    a.imageToDataUrl(j.getAttributeNS("http://www.w3.org/1999/xlink", "href"), "image/png", {
                        imageElement: j
                    }, g.scale, m, c, c, c);
            else
                b(i.sanitizeSVG(f.innerHTML))
        } catch (q) {
            c()
        }
    }
    ;
    a.Chart.prototype.exportChartLocal = function(g, h) {
        var c = this
          , b = a.merge(c.options.exporting, g)
          , i = b && b.type || "image/png"
          , d = function() {
            if (b.fallbackToExportServer === !1)
                if (b.error)
                    b.error();
                else
                    throw "Fallback to export server disabled";
            else
                c.exportChart(b)
        }
        ;
        s && i !== "image/svg+xml" && c.container.getElementsByTagName("image").length ? d() : c.getSVGForLocalExport(b, h, d, function(c) {
            var f = (b.filename || "chart") + "." + (i === "image/svg+xml" ? "svg" : i.split("/")[1]);
            a.downloadSVGLocal(c, f, i, b.scale, d)
        })
    }
    ;
    a.getOptions().exporting.buttons.contextButton.menuItems = [{
        textKey: "printChart",
        onclick: function() {
            this.print()
        }
    }, {
        separator: !0
    }, {
        textKey: "downloadPNG",
        onclick: function() {
            this.exportChartLocal()
        }
    }, {
        textKey: "downloadJPEG",
        onclick: function() {
            this.exportChartLocal({
                type: "image/jpeg"
            })
        }
    }, {
        textKey: "downloadSVG",
        onclick: function() {
            this.exportChartLocal({
                type: "image/svg+xml"
            })
        }
    }]
});
