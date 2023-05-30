(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    145: function(t, e, a) {
      'use strict';
      a.r(e);
      var n = a(0),
        r = a.n(n),
        i = a(283),
        o = a(4),
        s = a.n(o),
        c = a(176),
        u = function(t) {
          var e = t.children;
          return r.a.createElement(c.a, {
            query: '755544856',
            render: function(t) {
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement('main', null, e)
              );
            },
            data: i,
          });
        };
      u.propTypes = { children: s.a.node.isRequired };
      var l = u,
        d = a(195);
      e.default = function() {
        return r.a.createElement(
          l,
          null,
          r.a.createElement(d.a, { title: '404: Not found' }),
          r.a.createElement('h1', null, 'NOT FOUND'),
          r.a.createElement(
            'p',
            null,
            "You just hit a route that doesn't exist... the sadness."
          )
        );
      };
    },
    172: function(t, e, a) {
      var n;
      t.exports = ((n = a(194)) && n.default) || n;
    },
    176: function(t, e, a) {
      'use strict';
      a.d(e, 'a', function() {
        return c;
      });
      var n = a(0),
        r = a.n(n),
        i = a(4),
        o = a.n(i),
        s = (a(34), a(172), r.a.createContext({})),
        c = function(t) {
          return r.a.createElement(s.Consumer, null, function(e) {
            return t.data || (e[t.query] && e[t.query].data)
              ? (t.render || t.children)(t.data ? t.data.data : e[t.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      c.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      };
    },
    194: function(t, e, a) {
      'use strict';
      a.r(e);
      a(33);
      var n = a(0),
        r = a.n(n),
        i = a(4),
        o = a.n(i),
        s = a(57),
        c = a(2),
        u = function(t) {
          var e = t.location,
            a = c.default.getResourcesForPathnameSync(e.pathname);
          return a
            ? r.a.createElement(
                s.a,
                Object.assign({ location: e, pageResources: a }, a.json)
              )
            : null;
        };
      (u.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (e.default = u);
    },
    195: function(t, e, a) {
      'use strict';
      var n = a(196),
        r = a(0),
        i = a.n(r),
        o = a(4),
        s = a.n(o),
        c = a(224),
        u = a.n(c),
        l = a(176);
      function d(t) {
        var e = t.description,
          a = t.lang,
          r = t.meta,
          o = t.keywords,
          s = t.title;
        return i.a.createElement(l.a, {
          query: p,
          render: function(t) {
            var n = e || t.site.siteMetadata.description;
            return i.a.createElement(u.a, {
              htmlAttributes: { lang: a },
              title: s,
              titleTemplate: '%s | ' + t.site.siteMetadata.title,
              meta: [
                { name: 'description', content: n },
                { property: 'og:title', content: s },
                { property: 'og:description', content: n },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary' },
                {
                  name: 'twitter:creator',
                  content: t.site.siteMetadata.author,
                },
                { name: 'twitter:title', content: s },
                { name: 'twitter:description', content: n },
              ]
                .concat(
                  o.length > 0
                    ? { name: 'keywords', content: o.join(', ') }
                    : []
                )
                .concat(r),
            });
          },
          data: n,
        });
      }
      (d.defaultProps = { lang: 'en', meta: [], keywords: [] }),
        (d.propTypes = {
          description: s.a.string,
          lang: s.a.string,
          meta: s.a.array,
          keywords: s.a.arrayOf(s.a.string),
          title: s.a.string.isRequired,
        }),
        (e.a = d);
      var p = '1025518380';
    },
    196: function(t) {
      t.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'MultDesk',
              description:
                'Leve o atendimento da sua empresa para outro nível!',
              author: '@gatsbyjs',
            },
          },
        },
      };
    },
    283: function(t) {
      t.exports = { data: { site: { siteMetadata: { title: 'MultDesk' } } } };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-fccb181f801869ad253d.js.map
