// Recovered from the supplied complete production build; React runtime removed.
import * as E from "react"
import * as D from "react/jsx-runtime"
import { LatestNews, BlogPage, ArticlePage } from "../blog/Blog"
const _ =
    `` +
    new URL(
      "../imports/site/background-cover-desktop-DNTUnc2l.jpg",
      import.meta.url,
    ).href,
  v =
    `` +
    new URL(
      "../imports/site/background-cover-mobile-Cv-lfD9Z.jpg",
      import.meta.url,
    ).href,
  y =
    `` +
    new URL(
      "../imports/site/product-hero-bags-B1SK9gj-.jpg",
      import.meta.url,
    ).href,
  b =
    `` +
    new URL(
      "../imports/site/product-hero-clothing-DVbHAG4v.jpg",
      import.meta.url,
    ).href,
  x =
    `` +
    new URL(
      "../imports/site/product-hero-headwear-klclEZr6.jpg",
      import.meta.url,
    ).href,
  S =
    `` +
    new URL(
      "../imports/site/product-hero-outerwear-Dqq8Y6Bd.jpg",
      import.meta.url,
    ).href,
  C =
    `` +
    new URL(
      "../imports/site/product-hero-accessories-CNIYJc9t.jpg",
      import.meta.url,
    ).href,
  w =
    `` +
    new URL(
      "../imports/site/5a6a096f-5f18-4bf8-9f48-da9fea077525-SgFsqqu4.png",
      import.meta.url,
    ).href,
  ee =
    `` +
    new URL(
      "../imports/site/fdf6f186-03d0-435e-bb3d-b8b3c6b7be01-BjpBrOl8.png",
      import.meta.url,
    ).href,
  te =
    `` +
    new URL(
      "../imports/site/ada85d98-daea-4212-93b9-2e814c1fec75-BJjMHUrk.png",
      import.meta.url,
    ).href,
  ne =
    `` +
    new URL(
      "../imports/site/cbfe227f-fc8f-4ac8-befc-f7eb47e611fa-si-RAq-H.png",
      import.meta.url,
    ).href,
  T =
    `` +
    new URL(
      "../imports/site/ef5d2cc1-0b55-48c0-9c17-382810fbc085-CdjIm-oF.png",
      import.meta.url,
    ).href,
  re =
    `` +
    new URL(
      "../imports/site/498280d0-b8f6-43d2-9662-1c8cb3ff084a-BK8cifce.png",
      import.meta.url,
    ).href,
  ie =
    `` +
    new URL(
      "../imports/site/737c6879-b26d-475b-8506-a6757398437d-CsTOUKM2.png",
      import.meta.url,
    ).href,
  ae =
    `` +
    new URL(
      "../imports/site/a911091f-f394-4f0d-a3b6-eecfe0bedebb-C_l190RJ.png",
      import.meta.url,
    ).href,
  oe = `data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%205H21V7H3V5ZM3%2011H21V13H3V11ZM3%2017H21V19H3V17Z'%20fill='black'/%3e%3c/svg%3e`
const O = (e, t = 900, n = 1100) =>
    `https://images.unsplash.com/photo-${e}?w=${t}&h=${n}&fit=crop&auto=format`,
  k = {
    hoodie: `1614214191247-5b2d3a734f1b`,
    cap: `1620365093928-c0e4dcdcad5d`,
    tote: `1578237493287-8d4d2b03591a`,
    toteCaps: `1770017863938-237bd953a6e6`,
    tote2: `1572196284554-4e321b0e7e0b`,
    tee: `1589884047253-28d52f2891e7`,
    embroidery: `1772351720165-d9218e428cf0`,
    embroidery2: `1772351721250-58367a2aecba`,
    fabric: `1695666995983-3eb031a3f370`,
    shoesTote: `1718724403139-ca810fd1fe94`,
  },
  le = [
    {
      title: `Рюкзаки и сумки`,
      items: [`Рюкзаки`, `Шопперы`, `Поясные сумки`, `Дорожные сумки`],
    },
    {
      title: `Одежда`,
      items: [`Футболки`, `Худи`, `Свитшоты`, `Поло`, `Спецодежда`],
    },
    {
      title: `Головные уборы`,
      items: [`Бейсболки`, `Шапки`, `Панамы`, `Кепки`],
    },
    {
      title: `Верхняя одежда`,
      items: [`Куртки`, `Жилеты`, `Флис`, `Ветровки`],
    },
    {
      title: `Аксессуары`,
      items: [
        `Бутылки`,
        `Термокружки`,
        `Ежедневники`,
        `Ручки`,
        `Значки`,
        `Нашивки`,
      ],
    },
  ],
  ue = (e, t) => `${e}assortment/product/?product=${encodeURIComponent(t)}`
function A({ children: e, dark: t = !1 }) {
  return (0, D.jsx)(`span`, {
    className: `font-mono text-[13px] uppercase tracking-[0.22em] ${
      t ? `text-acid` : `text-ash`
    }`,
    children: e,
  })
}
function j({ className: e = `` }) {
  return (0, D.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `none`,
    className: e,
    "aria-hidden": !0,
    children: (0, D.jsx)(`path`, {
      d: `M5 12h14M13 6l6 6-6 6`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `square`,
    }),
  })
}
function M({ children: e, className: t = ``, ...n }) {
  return (0, D.jsxs)(`button`, {
    ...n,
    className: `cta-button inline-flex h-12 items-center gap-2 rounded-full bg-acid px-5 font-display text-[0.875rem] font-extrabold whitespace-nowrap uppercase tracking-tight text-ink min-[480px]:gap-3 min-[480px]:px-7 min-[480px]:text-[1rem] sm:text-[1.0625rem] ${t}`,
    children: [e, (0, D.jsx)(j, { className: `cta-arrow h-4 w-4 shrink-0` })],
  })
}
function de({ children: e, dark: t = !1, href: n = `#` }) {
  return (0, D.jsxs)(`a`, {
    href: n,
    className: `arrow-link inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-tight underline decoration-acid decoration-4 underline-offset-4 ${
      t ? `text-paper` : `text-ink`
    }`,
    children: [e, ` `, (0, D.jsx)(j, { className: `arrow-link-icon h-4 w-4` })],
  })
}
function fe({ inverse: e = !1, href: t = `#` }) {
  return (0, D.jsx)(`a`, {
    href: t,
    className: `flex items-baseline gap-3`,
    children: (0, D.jsx)(`svg`, {
      viewBox: `0 0 79 20`,
      className: `h-6 w-auto transition-colors duration-200 ease-out ${
        e ? `text-paper` : `text-ink`
      }`,
      fill: `none`,
      "aria-label": `ТФМ`,
      role: `img`,
      children: (0, D.jsx)(`path`, {
        d: `M6.73035 3.12334H12.3714V18.8359H6.73035V3.12334ZM-0.000165409 0.678078H19.1019V5.68965H-0.000165409V0.678078ZM35.0733 16.197V11.7907H40.8838C41.4648 11.7907 41.9571 11.6938 42.3606 11.5002C42.7803 11.3065 43.095 11.024 43.3048 10.6528C43.5308 10.2816 43.6438 9.83771 43.6438 9.32122C43.6438 8.80473 43.5308 8.36894 43.3048 8.01385C43.095 7.64263 42.7803 7.36017 42.3606 7.16649C41.9571 6.9728 41.4648 6.87596 40.8838 6.87596H35.0975V2.46965H41.2227C42.9174 2.46965 44.362 2.75211 45.5564 3.31702C46.7669 3.88193 47.695 4.68088 48.3406 5.71386C49.0023 6.7307 49.3332 7.93315 49.3332 9.32122C49.3332 10.7093 49.0023 11.9198 48.3406 12.9528C47.695 13.9858 46.7669 14.7847 45.5564 15.3496C44.362 15.9145 42.9174 16.197 41.2227 16.197H35.0733ZM27.6648 16.197C25.9701 16.197 24.5175 15.9145 23.307 15.3496C22.1126 14.7847 21.1926 13.9858 20.547 12.9528C19.9014 11.9198 19.5785 10.7093 19.5785 9.32122C19.5785 7.93315 19.9014 6.7307 20.547 5.71386C21.1926 4.68088 22.1126 3.88193 23.307 3.31702C24.5175 2.75211 25.9701 2.46965 27.6648 2.46965H33.8143V6.87596H28.0038C27.4227 6.87596 26.9305 6.9728 26.527 7.16649C26.1234 7.36017 25.8087 7.64263 25.5827 8.01385C25.3729 8.36894 25.268 8.80473 25.268 9.32122C25.268 9.83771 25.3729 10.2816 25.5827 10.6528C25.8087 11.024 26.1234 11.3065 26.527 11.5002C26.9305 11.6938 27.4227 11.7907 28.0038 11.7907H33.8385V16.197H27.6648ZM31.6354 19.5138V0.000184375H37.2764V19.5138H31.6354ZM78.7336 0.678078V18.8359H73.3589V2.76018L74.4726 2.88123L67.9115 18.8359H62.2947L55.7095 2.92965L56.8231 2.78439V18.8359H51.4726V0.678078H60.1642L66.1442 15.858H64.0863L70.0179 0.678078H78.7336Z`,
        fill: `currentColor`,
      }),
    }),
  })
}
function pe({ innerPage: e = !1, rootPrefix: t, forceSolid: n = !1 }) {
  let r = [`Ассортимент`, `Кейсы`, `Отзывы`, `О компании`, `Блог`],
    i = t ?? (e ? `../` : ``),
    a = i || `#`,
    o = i ? `${i}#lead` : `#lead`,
    s = `${i}blog/`,
    c = `${i}cases/`,
    l = `${i}about/`,
    u = `https://2gis.ru/tyumen/firm/1830115630081608/tab/reviews?m=65.520537%2C57.129767%2F16`,
    [d, f] = (0, E.useState)(!1),
    [p, m] = (0, E.useState)(!1),
    [h, g] = (0, E.useState)(!1),
    [_, v] = (0, E.useState)(`Одежда`),
    [y, b] = (0, E.useState)(le[0].title),
    [x, S] = (0, E.useState)(0),
    C = le.find((e) => e.title === y) ?? le[0]
  ;(0, E.useEffect)(() => {
    let e = 0,
      t = () => {
        ;(e = 0), S(Math.min(Math.max(window.scrollY / 80, 0), 1))
      },
      n = () => {
        e ||= window.requestAnimationFrame(t)
      }
    return (
      t(),
      window.addEventListener(`scroll`, n, { passive: !0 }),
      () => {
        window.removeEventListener(`scroll`, n),
          e && window.cancelAnimationFrame(e)
      }
    )
  }, [])
  let w = n || d || p ? 1 : x,
    ee = w >= 0.5
  return (0, D.jsxs)(`header`, {
    className: `fixed inset-x-0 top-0 z-40 border-b ${
      ee ? `text-ink` : `text-paper`
    }`,
    onMouseLeave: () => m(!1),
    style: {
      backgroundColor: `rgba(255, 255, 255, ${w})`,
      borderColor: `rgba(218, 216, 208, ${w})`,
    },
    children: [
      (0, D.jsx)(`div`, {
        className: `hidden bg-[#111110] text-paper lg:block`,
        children: (0, D.jsxs)(`div`, {
          className: `relative mx-auto flex max-w-[1600px] items-center justify-between px-5 sm:px-8 py-2 font-mono text-[13px] uppercase tracking-[0.16em]`,
          children: [
            (0, D.jsx)(`span`, {
              className: `opacity-70`,
              children: `Тюменская фабрика мерча`,
            }),
            (0, D.jsx)(`span`, {
              className: `absolute left-1/2 -translate-x-1/2 opacity-70`,
              children: `Производим брендированные вещи с 2009 года`,
            }),
            (0, D.jsx)(`a`, {
              href: `#contacts`,
              className: `opacity-70 transition-opacity hover:opacity-100`,
              children: `Контакты`,
            }),
          ],
        }),
      }),
      (0, D.jsxs)(`div`, {
        className: `relative mx-auto flex max-w-[1600px] items-center justify-between px-5 sm:px-8 py-4`,
        children: [
          (0, D.jsx)(fe, { inverse: !ee, href: a }),
          (0, D.jsx)(`nav`, {
            className: `hidden items-center gap-8 xl:absolute xl:left-1/2 xl:flex xl:-translate-x-1/2`,
            children: r.map((e) =>
              e === `Ассортимент`
                ? (0, D.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      "aria-expanded": p,
                      onMouseEnter: () => m(!0),
                      onFocus: () => m(!0),
                      onClick: () => m((e) => !e),
                      className: `flex items-center gap-1.5 font-sans text-[15px] font-semibold leading-none uppercase tracking-tight transition-colors duration-150 ease-out hover:text-ash`,
                      children: [
                        (0, D.jsx)(`img`, {
                          src: oe,
                          alt: ``,
                          "aria-hidden": `true`,
                          className: `block h-4 w-4 shrink-0 -translate-y-px object-contain transition-[filter] ${
                            ee ? `` : `invert`
                          }`,
                        }),
                        e,
                      ],
                    },
                    e,
                  )
                : (0, D.jsx)(
                    `a`,
                    {
                      href:
                        e === `Отзывы`
                          ? u
                          : e === `Блог`
                            ? s
                            : e === `Кейсы`
                              ? c
                              : e === `О компании`
                                ? l
                                : a,
                      target: e === `Отзывы` ? `_blank` : void 0,
                      rel: e === `Отзывы` ? `noopener noreferrer` : void 0,
                      className: `font-sans text-[15px] font-semibold uppercase tracking-tight transition-colors duration-150 ease-out hover:text-ash`,
                      children: e,
                    },
                    e,
                  ),
            ),
          }),
          (0, D.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, D.jsxs)(`a`, {
                href: o,
                "data-quiz-open": !0,
                className: `cta-button hidden h-11 items-center justify-center gap-2 rounded-full bg-acid px-6 font-display text-[15px] font-bold leading-none uppercase tracking-tight text-ink sm:inline-flex`,
                children: [
                  (0, D.jsx)(`span`, { children: `Обсудить проект` }),
                  (0, D.jsx)(j, { className: `cta-arrow h-4 w-4 shrink-0` }),
                ],
              }),
              (0, D.jsxs)(`button`, {
                type: `button`,
                onClick: () => f((e) => !e),
                "aria-label": d ? `Закрыть меню` : `Открыть меню`,
                "aria-expanded": d,
                className: `flex h-11 shrink-0 items-center gap-3 border px-3 transition-colors duration-200 ease-out xl:hidden ${
                  ee
                    ? `border-line bg-white text-ink hover:bg-ink hover:text-paper`
                    : `border-white/40 bg-transparent text-paper hover:bg-white/10`
                }`,
                children: [
                  (0, D.jsx)(`span`, {
                    className: `font-mono text-[12px] uppercase tracking-[0.18em]`,
                    children: `Меню`,
                  }),
                  (0, D.jsxs)(`span`, {
                    className: `relative block h-4 w-5`,
                    children: [
                      (0, D.jsx)(`span`, {
                        className: `absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                          d ? `top-1/2 -translate-y-1/2 rotate-45` : `top-0`
                        }`,
                      }),
                      (0, D.jsx)(`span`, {
                        className: `absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity ${
                          d ? `opacity-0` : `opacity-100`
                        }`,
                      }),
                      (0, D.jsx)(`span`, {
                        className: `absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                          d ? `top-1/2 -translate-y-1/2 -rotate-45` : `bottom-0`
                        }`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      p &&
        (0, D.jsx)(`div`, {
          className: `absolute inset-x-0 top-full hidden border-t border-white/10 bg-[#111110] text-paper shadow-[0_24px_48px_rgba(0,0,0,0.24)] xl:block`,
          onMouseEnter: () => m(!0),
          children: (0, D.jsxs)(`div`, {
            className: `mx-auto max-w-[1600px]`,
            children: [
              (0, D.jsx)(`div`, {
                className: `flex overflow-x-auto border-b border-white/10 px-5 sm:px-8`,
                children: le.map((e) =>
                  (0, D.jsx)(
                    `button`,
                    {
                      type: `button`,
                      onMouseEnter: () => b(e.title),
                      onFocus: () => b(e.title),
                      onClick: () => b(e.title),
                      className: `shrink-0 border-r border-white/10 px-6 py-5 font-display text-[15px] font-bold uppercase tracking-tight transition-colors first:border-l ${
                        e.title === y
                          ? `border-acid bg-acid text-ink`
                          : `text-paper/60 hover:bg-white/5 hover:text-paper`
                      }`,
                      children: e.title,
                    },
                    e.title,
                  ),
                ),
              }),
              (0, D.jsxs)(`div`, {
                className: `grid grid-cols-[0.55fr_1.45fr] gap-12 px-5 sm:px-8 py-8`,
                children: [
                  (0, D.jsxs)(`div`, {
                    children: [
                      (0, D.jsx)(`span`, {
                        className: `font-mono text-[12px] uppercase tracking-[0.22em] text-paper/45`,
                        children: `Категория`,
                      }),
                      (0, D.jsx)(`h2`, {
                        className: `mt-4 max-w-sm font-heading uppercase leading-[1] tracking-[-0.5px] text-paper`,
                        children: C.title,
                      }),
                    ],
                  }),
                  (0, D.jsx)(`div`, {
                    className: `grid grid-cols-2 gap-x-8`,
                    children: C.items.map((e) =>
                      (0, D.jsxs)(
                        `a`,
                        {
                          href: ue(i, e),
                          onClick: () => m(!1),
                          className: `group flex items-center justify-between border-b border-white/15 py-4 font-sans text-[15px] text-paper/70 transition-colors hover:text-paper`,
                          children: [
                            e,
                            (0, D.jsx)(j, {
                              className: `h-4 w-4 text-acid transition-transform group-hover:translate-x-1`,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      d &&
        (0, D.jsx)(`div`, {
          className: `mobile-menu-panel border-t border-line bg-paper xl:hidden`,
          children: (0, D.jsxs)(`nav`, {
            className: `mx-auto max-w-[1600px] px-5 sm:px-8 py-2`,
            children: [
              [...r, `Контакты`].map((e) =>
                e === `Ассортимент`
                  ? (0, D.jsxs)(
                      `div`,
                      {
                        className: `border-b border-line`,
                        children: [
                          (0, D.jsxs)(`button`, {
                            type: `button`,
                            "aria-expanded": h,
                            "aria-controls": `mobile-assortment-groups`,
                            onClick: () => g((e) => !e),
                            className: `flex w-full items-center justify-between py-4 font-sans text-[19px] font-bold uppercase tracking-tight transition-colors hover:text-ash`,
                            children: [
                              (0, D.jsx)(`span`, { children: e }),
                              (0, D.jsx)(`img`, {
                                src: `data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%205H21V7H3V5ZM3%2011H21V13H3V11ZM3%2017H21V19H3V17Z'%20fill='black'/%3e%3c/svg%3e`,
                                alt: ``,
                                "aria-hidden": `true`,
                                className: `h-4 w-4 shrink-0 object-contain`,
                              }),
                            ],
                          }),
                          h &&
                            (0, D.jsx)(`div`, {
                              id: `mobile-assortment-groups`,
                              className: `mobile-menu-groups mb-5`,
                              children: le.map((e, t) => {
                                let n = _ === e.title
                                return (0, D.jsxs)(
                                  `div`,
                                  {
                                    className: `mobile-menu-group`,
                                    children: [
                                      (0, D.jsxs)(`button`, {
                                        type: `button`,
                                        "aria-expanded": n,
                                        "aria-controls": `mobile-category-${t}`,
                                        onClick: () => v(n ? null : e.title),
                                        className: `mobile-menu-group-button`,
                                        children: [
                                          (0, D.jsx)(`span`, {
                                            children: e.title,
                                          }),
                                          (0, D.jsx)(j, {
                                            className: `mobile-menu-chevron ${
                                              n
                                                ? `mobile-menu-chevron-open`
                                                : ``
                                            }`,
                                          }),
                                        ],
                                      }),
                                      n &&
                                        (0, D.jsx)(`div`, {
                                          id: `mobile-category-${t}`,
                                          className: `mobile-menu-items`,
                                          children: e.items.map((e) =>
                                            (0, D.jsx)(
                                              `a`,
                                              {
                                                href: ue(i, e),
                                                onClick: () => {
                                                  f(!1), g(!1)
                                                },
                                                className: `mobile-menu-item`,
                                                children: e,
                                              },
                                              e,
                                            ),
                                          ),
                                        }),
                                    ],
                                  },
                                  e.title,
                                )
                              }),
                            }),
                        ],
                      },
                      e,
                    )
                  : (0, D.jsxs)(
                      `a`,
                      {
                        href:
                          e === `Контакты`
                            ? `#contacts`
                            : e === `Отзывы`
                              ? u
                              : e === `Блог`
                                ? s
                                : e === `Кейсы`
                                  ? c
                                  : e === `О компании`
                                    ? l
                                    : a,
                        target: e === `Отзывы` ? `_blank` : void 0,
                        rel: e === `Отзывы` ? `noopener noreferrer` : void 0,
                        onClick: () => f(!1),
                        className: `flex items-center justify-between border-b border-line py-4 font-sans text-[19px] font-bold uppercase tracking-tight transition-colors hover:text-ash`,
                        children: [
                          e,
                          (0, D.jsx)(j, { className: `h-4 w-4 text-ash` }),
                        ],
                      },
                      e,
                    ),
              ),
              (0, D.jsxs)(`a`, {
                href: o,
                "data-quiz-open": !0,
                onClick: () => f(!1),
                className: `cta-button mt-5 mb-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-acid px-4 font-display text-[0.875rem] font-bold leading-none whitespace-nowrap uppercase tracking-tight text-ink min-[480px]:px-5 min-[480px]:text-[1rem]`,
                children: [
                  (0, D.jsx)(`span`, { children: `Обсудить проект` }),
                  (0, D.jsx)(j, { className: `cta-arrow h-4 w-4 shrink-0` }),
                ],
              }),
            ],
          }),
        }),
    ],
  })
}
function me() {
  return (0, D.jsxs)(`section`, {
    className: `relative min-h-[704px] overflow-hidden lg:min-h-[848px]`,
    children: [
      (0, D.jsxs)(`picture`, {
        className: `absolute inset-0 block h-full w-full`,
        children: [
          (0, D.jsx)(`source`, { media: `(max-width: 479px)`, srcSet: v }),
          (0, D.jsx)(`img`, {
            src: _,
            alt: ``,
            "aria-hidden": `true`,
            className: `h-full w-full object-cover object-center`,
          }),
        ],
      }),
      (0, D.jsx)(`div`, {
        className: `absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10`,
      }),
      (0, D.jsxs)(`div`, {
        className: `relative mx-auto max-w-[1600px] px-5 sm:px-8 pt-36 pb-28 lg:pt-52 lg:pb-40`,
        children: [
          (0, D.jsx)(`span`, {
            className: `hero-eyebrow font-mono text-[13px] uppercase tracking-[0.22em] text-paper/60`,
            children: `Брендируем бизнес, команды и людей`,
          }),
          (0, D.jsxs)(`h1`, {
            className: `hero-title mt-6 max-w-2xl font-heading uppercase tracking-[-1px] text-paper`,
            children: [
              (0, D.jsx)(`span`, { className: `text-acid`, children: `Мерч,` }),
              (0, D.jsx)(`br`, {}),
              `который`,
              (0, D.jsx)(`br`, {}),
              `носят`,
            ],
          }),
          (0, D.jsx)(`p`, {
            className: `mt-5 max-w-lg text-[16px] leading-[1.45] text-paper/70 min-[480px]:mt-7 min-[480px]:leading-relaxed`,
            children: `Тюменская фабрика мерча — производство брендированной продукции под ключ с 2009 года. Вышивка, печать, текстиль, аксессуары и кастомизация.`,
          }),
          (0, D.jsxs)(`div`, {
            className: `mt-8 flex flex-col items-start gap-8`,
            children: [
              (0, D.jsx)(`a`, {
                href: `#lead`,
                "data-quiz-open": !0,
                children: (0, D.jsx)(M, { children: `Заказать мерч` }),
              }),
              (0, D.jsx)(`a`, {
                href: `#tech`,
                className: `hero-secondary-link font-display text-[14px] font-bold uppercase tracking-tight text-paper underline decoration-paper/30 decoration-2 underline-offset-4 transition-colors hover:decoration-acid`,
                children: `Посмотреть возможности`,
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function he({ items: e }) {
  return (0, D.jsx)(`section`, {
    className: `bg-coal text-paper`,
    children: (0, D.jsx)(`div`, {
      className: `mx-auto grid max-w-[1600px] grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4`,
      children: e.map(([e, t], n) =>
        (0, D.jsxs)(
          `div`,
          {
            className: `px-5 py-7 sm:px-8 min-[480px]:py-11 ${
              n < 3 ? `border-b border-white/10 lg:border-r lg:border-b-0` : ``
            } ${n === 2 ? `min-[480px]:border-b-0` : ``} ${
              n === 1 || n === 3
                ? `min-[480px]:border-l min-[480px]:border-white/10 lg:border-l-0`
                : ``
            }`,
            children: [
              (0, D.jsx)(`div`, {
                className: `font-display text-[0.9rem] font-black uppercase leading-[1.1] tracking-mega text-acid max-[479px]:text-[1rem] sm:text-[1.5rem]`,
                children: e,
              }),
              (0, D.jsx)(`div`, {
                className: `mt-2 font-mono text-[14px] uppercase tracking-[0.18em] text-paper min-[480px]:mt-3`,
                children: t,
              }),
            ],
          },
          t,
        ),
      ),
    }),
  })
}
function ge() {
  return (0, D.jsx)(he, {
    items: [
      [`16 лет`, `На рынке`],
      [`от 1 шт`, `Минимальный тираж`],
      [`под ключ`, `От идеи до доставки`],
      [`по РФ`, `Доставка`],
    ],
  })
}
function _e() {
  return (0, D.jsxs)(`section`, {
    children: [
      (0, D.jsxs)(`div`, {
        className: `directions-header mx-auto flex max-w-[1600px] flex-col items-start gap-8 px-5 sm:px-8 py-14 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:py-6`,
        children: [
          (0, D.jsxs)(`div`, {
            children: [
              (0, D.jsx)(A, { children: `Направления производства` }),
              (0, D.jsx)(`div`, {
                className: `mt-6 font-heading text-[1.375rem] font-black uppercase tracking-[-1px] sm:mt-2 sm:text-[1.6875rem] md:text-[2.0625rem]`,
                children: `Что мы изготавливаем`,
              }),
            ],
          }),
          (0, D.jsx)(de, { children: `Все возможности` }),
        ],
      }),
      (0, D.jsx)(`div`, {
        className: `mx-auto grid max-w-[1600px] grid-cols-2 border-l border-t border-line md:grid-cols-4 xl:grid-cols-8`,
        children: [
          [`Бейсболки`, w],
          [`Худи`, ee],
          [`Футболки`, te],
          [`Шапки`, ne],
          [`Флис`, T],
          [`Сумки`, re],
          [`Аксессуары`, ie],
          [`Нашивки`, ae],
        ].map(([e, t]) =>
          (0, D.jsxs)(
            `a`,
            {
              href: `#`,
              className: `group flex min-w-0 flex-col items-center gap-4 border-b border-r border-line bg-paper px-5 py-8 sm:px-8 lg:px-4`,
              children: [
                (0, D.jsx)(`div`, {
                  className: `flex aspect-square w-full items-center justify-center p-4`,
                  children: (0, D.jsx)(`img`, {
                    src: t,
                    alt: e,
                    className: `h-full w-full object-contain transition-transform duration-500 group-hover:scale-105`,
                  }),
                }),
                (0, D.jsxs)(`div`, {
                  className: `flex w-full items-center justify-center gap-2`,
                  children: [
                    (0, D.jsx)(`span`, {
                      className: `min-w-0 whitespace-nowrap font-display text-[0.646875rem] font-extrabold uppercase tracking-tight min-[480px]:text-[0.6875rem] sm:text-[0.75rem]`,
                      children: e,
                    }),
                    (0, D.jsx)(j, {
                      className: `h-3.5 w-3.5 text-ash transition-transform group-hover:translate-x-0.5 group-hover:text-ink`,
                    }),
                  ],
                }),
              ],
            },
            e,
          ),
        ),
      }),
    ],
  })
}
function ve() {
  let e = [
    [`Siberia Team`, `Корпоративная коллекция`, k.hoodie],
    [`Ямал`, `Мерч для события`, k.tee],
    [`Технопарк`, `Коллекция для сотрудников`, k.tote2],
  ]
  return (0, D.jsx)(`section`, {
    children: (0, D.jsxs)(`div`, {
      className: `mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]`,
      children: [
        (0, D.jsx)(`div`, {
          className: `px-5 sm:px-8 py-14 lg:py-20`,
          children: (0, D.jsxs)(`div`, {
            className: `xl:sticky xl:top-[144px]`,
            children: [
              (0, D.jsx)(A, { children: `Наши работы` }),
              (0, D.jsxs)(`h2`, {
                className: `mt-6 font-heading uppercase tracking-[-1px]`,
                children: [
                  `Бренды,`,
                  (0, D.jsx)(`br`, {}),
                  `которые`,
                  (0, D.jsx)(`br`, {}),
                  `движутся`,
                  (0, D.jsx)(`br`, {}),
                  `вперёд`,
                ],
              }),
              (0, D.jsx)(`p`, {
                className: `mt-7 max-w-md text-[16px] leading-relaxed text-ink/75`,
                children: `Реальные проекты для компаний, команд и событий. Мерч, который становится частью бренда.`,
              }),
              (0, D.jsx)(`div`, {
                className: `mt-8`,
                children: (0, D.jsx)(de, {
                  href: `cases/`,
                  children: `Все кейсы`,
                }),
              }),
            ],
          }),
        }),
        (0, D.jsxs)(`div`, {
          className: `grid grid-cols-1 border-l border-t border-line sm:grid-cols-2`,
          children: [
            e.map(([e, t, n], r) =>
              (0, D.jsxs)(
                `a`,
                {
                  href: `#`,
                  className: `group relative min-w-0 overflow-hidden border-b border-r border-line`,
                  children: [
                    (0, D.jsx)(`div`, {
                      className: `aspect-[4/5] overflow-hidden bg-neutral-200`,
                      children: (0, D.jsx)(`img`, {
                        src: O(n, 700, 850),
                        alt: `${e} — ${t}`,
                        className: `h-full w-full object-cover transition-transform duration-500 group-hover:scale-105`,
                      }),
                    }),
                    (0, D.jsxs)(`div`, {
                      className: `flex items-start justify-between p-5 sm:p-8 lg:p-5`,
                      children: [
                        (0, D.jsxs)(`div`, {
                          children: [
                            (0, D.jsx)(`div`, {
                              className: `min-w-0 break-words font-heading text-[0.875rem] font-extrabold uppercase tracking-tight sm:text-[1.0625rem]`,
                              children: e,
                            }),
                            (0, D.jsx)(`div`, {
                              className: `mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ash`,
                              children: t,
                            }),
                          ],
                        }),
                        (0, D.jsxs)(`span`, {
                          className: `mt-1 font-mono text-[11px] text-ash`,
                          children: [`0`, r + 1],
                        }),
                      ],
                    }),
                  ],
                },
                e,
              ),
            ),
            (0, D.jsxs)(`a`, {
              href: `#lead`,
              "data-quiz-open": !0,
              className: `group flex min-h-[400px] flex-col justify-between border-b border-r border-line bg-acid p-5 text-ink sm:p-8 lg:p-7 sm:min-h-0`,
              children: [
                (0, D.jsx)(`span`, {
                  className: `font-mono text-[11px] uppercase tracking-[0.2em]`,
                  children: `Свободный слот`,
                }),
                (0, D.jsxs)(`div`, {
                  className: `heading-size-blog mt-3 mb-5 font-heading font-black uppercase leading-[0.92] tracking-[-1px] sm:mt-0 sm:mb-0`,
                  children: [`Ваш проект`, (0, D.jsx)(`br`, {}), `здесь?`],
                }),
                (0, D.jsxs)(`span`, {
                  className: `flex items-center gap-3 font-display font-extrabold uppercase tracking-tight`,
                  children: [
                    `Обсудить`,
                    (0, D.jsx)(`span`, {
                      className: `grid h-10 w-10 place-items-center rounded-full border-2 border-ink transition-transform group-hover:translate-x-1`,
                      children: (0, D.jsx)(j, { className: `h-4 w-4` }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  })
}
function ye({ i: e }) {
  let t = [
      `M4 20V8l8-4 8 4v12M9 20v-6h6v6`,
      `M4 7h16M4 12h16M4 17h10`,
      `M12 7v5l3 3M12 3a9 9 0 100 18 9 9 0 000-18z`,
      `M4 18l5-5 3 3 8-8M4 6h6M4 6v6`,
      `M3 12h13l-3-3M16 12l-3 3M20 6v12`,
      `M5.58253 20.5625C5.48503 21.1175 6.03253 21.5512 6.51503 21.3037L12.0025 18.4837L17.4888 21.3037C17.9713 21.5512 18.5188 21.1175 18.4213 20.5637L17.3838 14.6512L21.7863 10.4562C22.1988 10.0637 21.9863 9.34622 21.4338 9.26872L15.3113 8.39872L12.5813 2.98996C12.5293 2.88033 12.4472 2.78769 12.3447 2.72283C12.2421 2.65797 12.1232 2.62354 12.0019 2.62354C11.8806 2.62354 11.7617 2.65797 11.6591 2.72283C11.5566 2.78769 11.4745 2.88033 11.4225 2.98996L8.69253 8.39996L2.57003 9.26997C2.01878 9.34747 1.80503 10.065 2.21628 10.4575L6.62003 14.6525L5.58253 20.565V20.5625ZM11.7138 17.1037L7.10628 19.4712L7.97378 14.525C7.99466 14.4111 7.98698 14.2938 7.95142 14.1837C7.91586 14.0735 7.85354 13.9739 7.77003 13.8937L4.13753 10.4312L9.20253 9.71122C9.30723 9.69487 9.40649 9.65365 9.49197 9.59101C9.57745 9.52837 9.64666 9.44614 9.69378 9.35122L12 4.77871L14.3088 9.35122C14.3559 9.44614 14.4251 9.52837 14.5106 9.59101C14.5961 9.65365 14.6953 9.69487 14.8 9.71122L19.865 10.43L16.2325 13.8925C16.1488 13.9728 16.0864 14.0726 16.0508 14.183C16.0152 14.2934 16.0077 14.4109 16.0288 14.525L16.8963 19.4712L12.2888 17.1037C12.1998 17.0575 12.1009 17.0333 12.0007 17.0333C11.9004 17.0333 11.8028 17.0575 11.7138 17.1037Z`,
    ],
    n = e === 5
  return (0, D.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `none`,
    className: `h-8 w-8`,
    "aria-hidden": !0,
    children: n
      ? (0, D.jsx)(`path`, { d: t[e], fill: `currentColor` })
      : (0, D.jsx)(`path`, {
          d: t[e],
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          strokeLinecap: `square`,
          strokeLinejoin: `miter`,
        }),
  })
}
function be({ noTopPadding: e = !1 }) {
  let t = (0, E.useRef)(null),
    [n, r] = (0, E.useState)(0)
  return (
    (0, E.useEffect)(() => {
      let e = window.matchMedia(`(max-width: 639px)`),
        n = 0,
        i = () => {
          if (((n = 0), !e.matches || !t.current)) return
          let i = window.innerHeight / 2,
            a = Array.from(t.current.children),
            o = 0,
            s = 1 / 0
          a.forEach((e, t) => {
            let n = e.getBoundingClientRect(),
              r = Math.abs(n.top + n.height / 2 - i)
            r < s && ((s = r), (o = t))
          }),
            r(o)
        },
        a = () => {
          n ||= window.requestAnimationFrame(i)
        }
      return (
        a(),
        window.addEventListener(`scroll`, a, { passive: !0 }),
        window.addEventListener(`resize`, a),
        e.addEventListener(`change`, a),
        () => {
          window.cancelAnimationFrame(n),
            window.removeEventListener(`scroll`, a),
            window.removeEventListener(`resize`, a),
            e.removeEventListener(`change`, a)
        }
      )
    }, []),
    (0, D.jsxs)(`section`, {
      children: [
        (0, D.jsxs)(`div`, {
          className: `mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-4 px-5 sm:px-8 pb-12 ${
            e ? `pt-0` : `pt-12`
          }`,
          children: [
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(A, { children: `Преимущества` }),
                (0, D.jsxs)(`h2`, {
                  className: `mt-4 font-heading uppercase tracking-mega`,
                  children: [`Почему`, (0, D.jsx)(`br`, {}), `выбирают нас`],
                }),
              ],
            }),
            (0, D.jsx)(`p`, {
              className: `max-w-xs text-[15px] leading-relaxed text-ink/70`,
              children: `Надёжный производственный партнёр для брендов, команд и организаций.`,
            }),
          ],
        }),
        (0, D.jsx)(`div`, {
          ref: t,
          className: `mx-auto grid max-w-[1600px] grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3`,
          children: [
            [`Своё производство`, `Полный контроль качества на всех этапах.`],
            [
              `От 1 штуки`,
              `Работаем как с небольшими партиями, так и с крупными тиражами.`,
            ],
            [`Срочные заказы`, `Помогаем реализовать проект в сжатые сроки.`],
            [
              `Дизайн под задачу`,
              `Помогаем с концепцией, макетами и материалами.`,
            ],
            [`Доставка по России`, `Отправляем готовые заказы по всей стране.`],
            [
              `16 лет экспертизы`,
              `Работаем с корпоративным мерчем с 2009 года.`,
            ],
          ].map(([e, t], r) =>
            (0, D.jsxs)(
              `div`,
              {
                className: `group flex min-h-[220px] flex-col justify-between border-b border-r border-line p-5 transition-colors duration-300 sm:p-8 sm:hover:bg-ink sm:hover:text-paper ${
                  n === r ? `bg-coal text-paper` : `bg-paper text-ink`
                } ${
                  r === 0
                    ? `sm:bg-coal sm:text-paper`
                    : `sm:bg-paper sm:text-ink`
                }`,
                children: [
                  (0, D.jsx)(`span`, {
                    className: `${n === r ? `text-acid` : `text-ink`} ${
                      r === 0 ? `sm:text-acid` : `sm:text-ink`
                    } sm:group-hover:text-acid`,
                    children: (0, D.jsx)(ye, { i: r }),
                  }),
                  (0, D.jsxs)(`div`, {
                    children: [
                      (0, D.jsx)(`div`, {
                        className: `min-w-0 break-words font-heading text-[1.0625rem] font-extrabold uppercase tracking-tight sm:text-[1.3125rem]`,
                        children: e,
                      }),
                      (0, D.jsx)(`p`, {
                        className: `mt-3 text-[15px] leading-relaxed ${
                          n === r ? `text-paper/70` : `text-ink/65`
                        } ${
                          r === 0 ? `sm:text-paper/70` : `sm:text-ink/65`
                        } sm:group-hover:text-paper/70`,
                        children: t,
                      }),
                    ],
                  }),
                ],
              },
              e,
            ),
          ),
        }),
      ],
    })
  )
}
function xe({ onSubmit: e, innerPage: t = !1 }) {
  return (0, D.jsx)(`section`, {
    id: `lead`,
    children: (0, D.jsxs)(`div`, {
      className: `mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-2`,
      children: [
        (0, D.jsxs)(`div`, {
          className: `border border-line px-5 py-12 sm:px-8 lg:px-[60px] sm:py-14 lg:py-20`,
          children: [
            (0, D.jsx)(A, { children: `Обсудим ваш проект` }),
            (0, D.jsxs)(`h2`, {
              className: `mt-6 font-heading uppercase tracking-[-1px]`,
              children: [
                `Отправим`,
                (0, D.jsx)(`br`, {}),
                `примеры`,
                (0, D.jsx)(`br`, {}),
                `работ`,
              ],
            }),
            (0, D.jsx)(`p`, {
              className: `mt-6 max-w-md text-[16px] leading-relaxed text-ink/75`,
              children: `Расскажите о вашей задаче — подберём подходящие решения и покажем примеры похожих проектов.`,
            }),
            (0, D.jsxs)(`form`, {
              className: `mt-9 max-w-lg`,
              onSubmit: (t) => {
                t.preventDefault(), e()
              },
              children: [
                (0, D.jsxs)(`div`, {
                  className: `border border-line`,
                  children: [
                    (0, D.jsxs)(`label`, {
                      className: `form-field-outline block border-b border-line`,
                      children: [
                        (0, D.jsx)(`span`, {
                          className: `sr-only`,
                          children: `Ваше имя`,
                        }),
                        (0, D.jsx)(`input`, {
                          required: !0,
                          placeholder: `Ваше имя`,
                          className: `block w-full bg-paper px-4 py-4 text-[15px] outline-none placeholder:text-ash focus:bg-acid/15`,
                        }),
                      ],
                    }),
                    (0, D.jsxs)(`label`, {
                      className: `form-field-outline block border-b border-line`,
                      children: [
                        (0, D.jsx)(`span`, {
                          className: `sr-only`,
                          children: `Телефон / Telegram / WhatsApp`,
                        }),
                        (0, D.jsx)(`input`, {
                          required: !0,
                          placeholder: `Телефон / Telegram / WhatsApp`,
                          className: `block w-full bg-paper px-4 py-4 text-[15px] outline-none placeholder:text-ash focus:bg-acid/15`,
                        }),
                      ],
                    }),
                    (0, D.jsxs)(`label`, {
                      className: `form-field-outline block`,
                      children: [
                        (0, D.jsx)(`span`, {
                          className: `sr-only`,
                          children: `Ваша задача`,
                        }),
                        (0, D.jsx)(`textarea`, {
                          required: !0,
                          rows: 3,
                          placeholder: `Ваша задача`,
                          className: `block w-full resize-none bg-paper px-4 py-4 text-[15px] outline-none placeholder:text-ash focus:bg-acid/15`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, D.jsx)(M, {
                  className: `mt-6 w-full justify-center sm:w-auto sm:justify-start`,
                  children: `Получить примеры`,
                }),
                (0, D.jsxs)(`p`, {
                  className: `mt-4 max-w-sm font-mono text-[14px] leading-relaxed text-ash`,
                  children: [
                    `Нажимая на кнопку, вы соглашаетесь с`,
                    ` `,
                    (0, D.jsx)(`a`, {
                      href: t ? `../privacy/` : `privacy/`,
                      className: `underline underline-offset-2 transition-colors hover:text-ink`,
                      children: `политикой конфиденциальности`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, D.jsxs)(`div`, {
          className: `relative min-h-[440px] bg-coal`,
          children: [
            (0, D.jsx)(`img`, {
              src: O(k.embroidery2, 900, 1100),
              alt: `Брендированный текстиль на производстве`,
              className: `h-full w-full object-cover opacity-80`,
            }),
            (0, D.jsx)(`div`, {
              className: `pointer-events-none absolute inset-0 bg-gradient-to-t from-coal/60 to-transparent`,
            }),
            (0, D.jsxs)(`div`, {
              className: `heading-size-image absolute bottom-8 right-8 text-right font-heading font-black uppercase leading-[0.9] tracking-[-1px] text-paper`,
              children: [
                `Идеи`,
                (0, D.jsx)(`br`, {}),
                `становятся`,
                (0, D.jsx)(`br`, {}),
                `вещами`,
              ],
            }),
          ],
        }),
      ],
    }),
  })
}
function Se() {
  return (0, D.jsxs)(`section`, {
    id: `assortment`,
    className: `scroll-mt-28`,
    children: [
      (0, D.jsxs)(`div`, {
        className: `mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-6 px-5 sm:px-8 py-14`,
        children: [
          (0, D.jsxs)(`div`, {
            children: [
              (0, D.jsx)(A, { children: `Ассортимент` }),
              (0, D.jsxs)(`h2`, {
                className: `mt-5 font-heading uppercase tracking-[-1px]`,
                children: [
                  `Какой мерч`,
                  (0, D.jsx)(`br`, { className: `hidden min-[480px]:block` }),
                  ` `,
                  `мы изготавливаем`,
                ],
              }),
            ],
          }),
          (0, D.jsx)(de, { children: `Перейти в каталог` }),
        ],
      }),
      (0, D.jsx)(`div`, {
        className: `mx-auto grid max-w-[1600px] grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-5`,
        children: le.map(({ title: e, items: t }) =>
          (0, D.jsxs)(
            `div`,
            {
              className: `border-b border-r border-line p-5 sm:p-8 lg:p-7`,
              children: [
                (0, D.jsxs)(`div`, {
                  className: `min-w-0 break-words flex items-center gap-2 font-heading text-[0.8125rem] font-extrabold uppercase tracking-tight sm:text-[0.9375rem]`,
                  children: [
                    (0, D.jsx)(`span`, { className: `h-2 w-2 bg-acid` }),
                    e,
                  ],
                }),
                (0, D.jsx)(`ul`, {
                  className: `mt-5 space-y-2.5`,
                  children: t.map((e) =>
                    (0, D.jsx)(
                      `li`,
                      {
                        children: (0, D.jsx)(`a`, {
                          href: ue(``, e),
                          className: `text-[15px] text-ink/70 transition-colors hover:text-ink`,
                          children: e,
                        }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            },
            e,
          ),
        ),
      }),
    ],
  })
}
function Ce() {
  let e = [
      [`DTF`, `Плёночный перенос`],
      [`DTG`, `Прямая печать по ткани`],
      [`UV DTF`, `УФ-перенос`],
      [`UV`, `УФ-печать по предметам`],
      [`Шелкография`, `Насыщенная печать тиражей`],
      [`Вышивка`, `Объёмный логотип на текстиле`],
      [`Embossing`, `Тиснение по материалам`],
      [`Лазерная гравировка`, `Маркировка по металлу и дереву`],
    ],
    [t, n] = (0, E.useState)(0)
  return (0, D.jsx)(`section`, {
    id: `tech`,
    className: `bg-coal text-paper`,
    children: (0, D.jsxs)(`div`, {
      className: `mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]`,
      children: [
        (0, D.jsxs)(`div`, {
          className: `px-5 sm:px-8 py-14 lg:border-r border-white/10 lg:py-20`,
          children: [
            (0, D.jsx)(A, { dark: !0, children: `Технологии нанесения` }),
            (0, D.jsxs)(`h2`, {
              className: `mt-6 font-heading uppercase tracking-[-1px]`,
              children: [
                `Все`,
                (0, D.jsx)(`br`, {}),
                `популярные`,
                (0, D.jsx)(`br`, {}),
                `технологии`,
              ],
            }),
            (0, D.jsx)(`p`, {
              className: `mt-6 max-w-md text-[16px] leading-relaxed text-paper/70`,
              children: `Современное оборудование и проверенные методы нанесения для любых задач.`,
            }),
            (0, D.jsx)(`div`, {
              className: `mt-8`,
              children: (0, D.jsx)(de, {
                dark: !0,
                children: `Все технологии`,
              }),
            }),
          ],
        }),
        (0, D.jsx)(`div`, {
          className: `grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:border-l-0 lg:border-t-0`,
          children: e.map(([r, i], a) =>
            (0, D.jsxs)(
              `button`,
              {
                onMouseEnter: () => n(a),
                onFocus: () => n(a),
                className: `flex min-w-0 flex-col justify-between gap-6 border-r border-white/10 p-5 text-left transition-colors sm:p-8 lg:p-7 ${
                  t === a ? `bg-acid text-ink` : `hover:bg-white/5`
                } ${a === e.length - 1 ? `` : `border-b`} ${
                  a === e.length - 2 ? `sm:border-b-0` : ``
                }`,
                children: [
                  (0, D.jsxs)(`span`, {
                    className: `font-mono text-[11px] opacity-60`,
                    children: [`0`, a + 1],
                  }),
                  (0, D.jsxs)(`div`, {
                    children: [
                      (0, D.jsx)(`div`, {
                        className: `min-w-0 break-words font-heading text-[0.8125rem] font-extrabold uppercase tracking-tight sm:text-[1.0625rem]`,
                        children: r,
                      }),
                      (0, D.jsx)(`div`, {
                        className: `mt-1 text-[13px] ${
                          t === a ? `text-ink/70` : `text-paper/50`
                        }`,
                        children: i,
                      }),
                    ],
                  }),
                ],
              },
              r,
            ),
          ),
        }),
      ],
    }),
  })
}
function we() {
  return (0, D.jsxs)(`section`, {
    children: [
      (0, D.jsxs)(`div`, {
        className: `mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-4 px-5 sm:px-8 py-12`,
        children: [
          (0, D.jsxs)(`div`, {
            children: [
              (0, D.jsx)(A, { children: `Нам доверяют` }),
              (0, D.jsx)(`h2`, {
                className: `mt-4 font-heading uppercase tracking-[-1px]`,
                children: `Наши заказчики`,
              }),
            ],
          }),
          (0, D.jsx)(`p`, {
            className: `max-w-md text-[15px] leading-relaxed text-ink/70`,
            children: `Работаем с крупным бизнесом, региональными компаниями, государственными учреждениями и командами.`,
          }),
        ],
      }),
      (0, D.jsx)(`div`, {
        className: `mx-auto grid max-w-[1600px] grid-cols-2 border-l border-t border-line sm:grid-cols-4`,
        children: [
          `СИБУР`,
          `Яндекс`,
          `Газпром`,
          `СБЕР`,
          `Тюменская область`,
          `Росатом`,
          `Тинькофф`,
          `МТС`,
        ].map((e) =>
          (0, D.jsx)(
            `div`,
            {
              className: `flex min-w-0 items-center justify-center border-b border-r border-line px-5 py-10 text-center font-display text-[0.8125rem] font-extrabold uppercase tracking-tight text-ash transition-colors hover:text-ink sm:px-8 lg:px-6 sm:text-[1.125rem]`,
              children: e,
            },
            e,
          ),
        ),
      }),
    ],
  })
}
function De() {
  return D.jsx(LatestNews, {})
}
function Oe() {
  let e = [
      [
        `Какой минимальный тираж?`,
        `Работаем от 1 штуки — можно изготовить пробный образец или крупную партию до десятков тысяч изделий.`,
      ],
      [
        `Сколько времени занимает производство?`,
        `Стандартный срок — от 7 до 14 рабочих дней в зависимости от тиража и способа нанесения. Есть срочное производство.`,
      ],
      [
        `Работаете ли вы с юридическими лицами?`,
        `Да, работаем с юрлицами с НДС и предоставляем полный пакет закрывающих документов.`,
      ],
      [
        `Можно ли заказать образцы?`,
        `Да. Оставьте заявку — покажем примеры работ и подберём материалы под вашу задачу.`,
      ],
      [
        `Как осуществляется доставка?`,
        `Доставляем по всей России надёжными логистическими партнёрами — в любой регион.`,
      ],
    ],
    [t, n] = (0, E.useState)(0)
  return (0, D.jsx)(`section`, {
    className: `border border-line`,
    children: (0, D.jsxs)(`div`, {
      className: `mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[0.7fr_1.3fr]`,
      children: [
        (0, D.jsxs)(`div`, {
          className: `px-5 sm:px-8 py-14 lg:border-r lg:border-line lg:py-20`,
          children: [
            (0, D.jsx)(A, { children: `Частые вопросы` }),
            (0, D.jsxs)(`h2`, {
              className: `mt-6 font-heading uppercase tracking-[-1px]`,
              children: [`Отвечаем`, (0, D.jsx)(`br`, {}), `на главное`],
            }),
          ],
        }),
        (0, D.jsx)(`div`, {
          className: `border-t border-line lg:border-t-0`,
          children: e.map(([e, r], i) => {
            let a = t === i
            return (0, D.jsxs)(
              `div`,
              {
                className: `border-b border-line last:border-b-0`,
                children: [
                  (0, D.jsxs)(`button`, {
                    onClick: () => n(a ? null : i),
                    className: `flex w-full items-center justify-between gap-6 px-5 sm:px-8 pt-6 text-left transition-[padding] duration-300 ${
                      a ? `pb-3 sm:pb-1` : `pb-6`
                    }`,
                    "aria-expanded": a,
                    children: [
                      (0, D.jsx)(`span`, {
                        className: `min-w-0 break-words font-heading text-[0.875rem] font-extrabold uppercase leading-[1.25] tracking-tight sm:text-[0.9375rem] sm:leading-[1.1] lg:text-[1.0625rem]`,
                        children: e,
                      }),
                      (0, D.jsx)(`span`, {
                        className: `grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-colors ${
                          a ? `bg-acid` : ``
                        }`,
                        children: (0, D.jsx)(`svg`, {
                          viewBox: `0 0 24 24`,
                          className: `h-4 w-4`,
                          fill: `none`,
                          "aria-hidden": !0,
                          children: (0, D.jsx)(`path`, {
                            d: `M12 5v14M5 12h14`,
                            stroke: `currentColor`,
                            strokeWidth: `2.5`,
                            strokeLinecap: `square`,
                            className: `origin-center transition-transform ${
                              a ? `rotate-45` : ``
                            }`,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, D.jsx)(`div`, {
                    className: `grid overflow-hidden transition-all duration-300 ${
                      a ? `grid-rows-[1fr]` : `grid-rows-[0fr]`
                    }`,
                    children: (0, D.jsx)(`div`, {
                      className: `min-h-0`,
                      children: (0, D.jsx)(`p`, {
                        className: `max-w-2xl px-5 sm:px-8 pb-7 text-[16px] leading-relaxed text-ink/75`,
                        children: r,
                      }),
                    }),
                  }),
                ],
              },
              e,
            )
          }),
        }),
      ],
    }),
  })
}
function ke({ innerPage: e = !1, privacyPage: t = !1, rootPrefix: n }) {
  let r = [`TG`, `VK`],
    i = n ?? (e ? `../` : ``),
    a = i || `#`,
    o = i ? `${i}#lead` : `#lead`,
    s = t ? `#top` : `${i}privacy/`,
    c = `${i}blog/`,
    l = `${i}cases/`,
    u = `${i}about/`
  return (0, D.jsxs)(`footer`, {
    className: `bg-coal text-paper`,
    children: [
      (0, D.jsx)(`div`, {
        className: `border-b border-white/10`,
        children: (0, D.jsxs)(`div`, {
          className: `mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 px-5 sm:px-8 py-16 lg:flex-row lg:items-center`,
          children: [
            (0, D.jsxs)(`h2`, {
              className: `font-heading uppercase tracking-[-1px]`,
              children: [
                `Готовы обсудить`,
                (0, D.jsx)(`br`, {}),
                `ваш проект?`,
              ],
            }),
            (0, D.jsx)(`a`, {
              href: o,
              "data-quiz-open": !0,
              children: (0, D.jsx)(M, { children: `Обсудить проект` }),
            }),
          ],
        }),
      }),
      (0, D.jsxs)(`div`, {
        className: `mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 sm:px-8 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]`,
        children: [
          (0, D.jsxs)(`div`, {
            children: [
              (0, D.jsx)(`div`, {
                className: `flex items-baseline gap-2`,
                children: (0, D.jsx)(`svg`, {
                  width: `79`,
                  height: `20`,
                  viewBox: `0 0 79 20`,
                  fill: `none`,
                  xmlns: `http://www.w3.org/2000/svg`,
                  "aria-label": `ТФМ`,
                  children: (0, D.jsx)(`path`, {
                    d: `M6.73035 3.12334H12.3714V18.8359H6.73035V3.12334ZM-0.000165409 0.678078H19.1019V5.68965H-0.000165409V0.678078ZM35.0733 16.197V11.7907H40.8838C41.4648 11.7907 41.9571 11.6938 42.3606 11.5002C42.7803 11.3065 43.095 11.024 43.3048 10.6528C43.5308 10.2816 43.6438 9.83771 43.6438 9.32122C43.6438 8.80473 43.5308 8.36894 43.3048 8.01385C43.095 7.64263 42.7803 7.36017 42.3606 7.16649C41.9571 6.9728 41.4648 6.87596 40.8838 6.87596H35.0975V2.46965H41.2227C42.9174 2.46965 44.362 2.75211 45.5564 3.31702C46.7669 3.88193 47.695 4.68088 48.3406 5.71386C49.0023 6.7307 49.3332 7.93315 49.3332 9.32122C49.3332 10.7093 49.0023 11.9198 48.3406 12.9528C47.695 13.9858 46.7669 14.7847 45.5564 15.3496C44.362 15.9145 42.9174 16.197 41.2227 16.197H35.0733ZM27.6648 16.197C25.9701 16.197 24.5175 15.9145 23.307 15.3496C22.1126 14.7847 21.1926 13.9858 20.547 12.9528C19.9014 11.9198 19.5785 10.7093 19.5785 9.32122C19.5785 7.93315 19.9014 6.7307 20.547 5.71386C21.1926 4.68088 22.1126 3.88193 23.307 3.31702C24.5175 2.75211 25.9701 2.46965 27.6648 2.46965H33.8143V6.87596H28.0038C27.4227 6.87596 26.9305 6.9728 26.527 7.16649C26.1234 7.36017 25.8087 7.64263 25.5827 8.01385C25.3729 8.36894 25.268 8.80473 25.268 9.32122C25.268 9.83771 25.3729 10.2816 25.5827 10.6528C25.8087 11.024 26.1234 11.3065 26.527 11.5002C26.9305 11.6938 27.4227 11.7907 28.0038 11.7907H33.8385V16.197H27.6648ZM31.6354 19.5138V0.000184375H37.2764V19.5138H31.6354ZM78.7336 0.678078V18.8359H73.3589V2.76018L74.4726 2.88123L67.9115 18.8359H62.2947L55.7095 2.92965L56.8231 2.78439V18.8359H51.4726V0.678078H60.1642L66.1442 15.858H64.0863L70.0179 0.678078H78.7336Z`,
                    fill: `currentColor`,
                  }),
                }),
              }),
              (0, D.jsx)(`p`, {
                className: `mt-5 max-w-xs text-[15px] leading-relaxed text-paper/70`,
                children: `Тюменская фабрика мерча. Больше чем вещи.`,
              }),
              (0, D.jsx)(`div`, {
                className: `mt-6 flex gap-3`,
                children: r.map((e) =>
                  (0, D.jsx)(
                    `a`,
                    {
                      href: `#`,
                      className: `grid h-10 w-10 place-items-center border border-white/20 font-mono text-xs transition-colors hover:border-acid hover:bg-acid hover:text-ink`,
                      children: e,
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, D.jsxs)(`div`, {
            children: [
              (0, D.jsx)(`div`, {
                className: `font-mono text-[14px] uppercase tracking-[0.18em] text-acid`,
                children: `Навигация`,
              }),
              (0, D.jsx)(`ul`, {
                className: `mt-5 space-y-3 text-[16px] text-paper/75`,
                children: [`Ассортимент`, `Кейсы`, `Отзывы`].map((e) =>
                  (0, D.jsx)(
                    `li`,
                    {
                      children: (0, D.jsx)(`a`, {
                        href: e === `Кейсы` ? l : a,
                        className: `transition-colors hover:text-acid`,
                        children: e,
                      }),
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, D.jsxs)(`div`, {
            children: [
              (0, D.jsx)(`div`, {
                className: `font-mono text-[14px] uppercase tracking-[0.18em] text-acid`,
                children: `Компания`,
              }),
              (0, D.jsx)(`ul`, {
                className: `mt-5 space-y-3 text-[16px] text-paper/75`,
                children: [`О нас`, `Кейсы`, `Блог`].map((e) =>
                  (0, D.jsx)(
                    `li`,
                    {
                      children: (0, D.jsx)(`a`, {
                        href:
                          e === `Блог`
                            ? c
                            : e === `Кейсы`
                              ? l
                              : e === `О нас`
                                ? u
                                : a,
                        className: `transition-colors hover:text-acid`,
                        children: e,
                      }),
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, D.jsxs)(`div`, {
            id: `contacts`,
            className: `scroll-mt-28`,
            children: [
              (0, D.jsx)(`div`, {
                className: `font-mono text-[14px] uppercase tracking-[0.18em] text-acid`,
                children: `Контакты`,
              }),
              (0, D.jsxs)(`ul`, {
                className: `mt-5 space-y-2 text-[16px] text-paper/80`,
                children: [
                  (0, D.jsx)(`li`, { children: `+7 (3452) 00-00-00` }),
                  (0, D.jsx)(`li`, { children: `hello@tfm.ru` }),
                  (0, D.jsx)(`li`, {
                    className: `text-paper/60`,
                    children: `г. Тюмень, ул. Республики, 1`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, D.jsx)(`div`, {
        className: `border-t border-white/10`,
        children: (0, D.jsxs)(`div`, {
          className: `mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-2 px-5 sm:px-8 py-6 font-mono text-[12px] uppercase tracking-[0.14em] text-paper/50 sm:flex-row sm:items-center`,
          children: [
            (0, D.jsx)(`a`, {
              href: s,
              className: `text-[14px] transition-colors hover:text-acid`,
              children: `Политика конфиденциальности`,
            }),
            (0, D.jsx)(`span`, {
              className: `text-[14px]`,
              children: `© Тюменская фабрика мерча 2026`,
            }),
          ],
        }),
      }),
    ],
  })
}
function Ae() {
  let [e, t] = (0, E.useState)(0),
    n = [
      {
        image: k.embroidery2,
        alt: `Производственный участок Тюменской фабрики мерча`,
      },
      { image: k.fabric, alt: `Материалы и оборудование в мастерской` },
      { image: k.toteCaps, alt: `Образцы готового корпоративного мерча` },
    ]
  return (0, D.jsxs)(`div`, {
    id: `top`,
    className: `min-h-screen bg-paper text-ink`,
    children: [
      (0, D.jsx)(pe, { innerPage: !0 }),
      (0, D.jsxs)(`main`, {
        className: `flex flex-col [&>*:nth-child(n+3)]:mt-[100px]`,
        children: [
          (0, D.jsxs)(`section`, {
            className: `relative min-h-[720px] overflow-hidden bg-coal text-paper lg:min-h-[860px]`,
            children: [
              (0, D.jsx)(`img`, {
                src: O(k.embroidery2, 1800, 1200),
                alt: `Производство Тюменской фабрики мерча`,
                className: `absolute inset-0 h-full w-full object-cover`,
              }),
              (0, D.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10`,
              }),
              (0, D.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20`,
              }),
              (0, D.jsx)(`div`, {
                className: `relative mx-auto flex min-h-[720px] max-w-[1600px] items-end px-5 sm:px-8 pt-40 pb-16 lg:min-h-[860px] lg:pb-24`,
                children: (0, D.jsxs)(`div`, {
                  className: `max-w-4xl`,
                  children: [
                    (0, D.jsx)(`div`, {
                      className: `font-mono text-[12px] uppercase tracking-[0.2em] text-acid sm:text-[13px]`,
                      children: `О компании`,
                    }),
                    (0, D.jsxs)(`h1`, {
                      className: `mt-7 font-heading uppercase`,
                      children: [
                        `Тюменская`,
                        (0, D.jsx)(`br`, {}),
                        `фабрика мерча`,
                      ],
                    }),
                    (0, D.jsx)(`p`, {
                      className: `mt-6 max-w-xl text-[16px] leading-relaxed text-paper/75 sm:text-[18px]`,
                      children: `С 2009 года создаём корпоративный мерч, который работает на бренд — от единичных изделий до больших тиражей.`,
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, D.jsx)(he, {
            items: [
              [`16 лет`, `На рынке мерча`],
              [`500+`, `Активных клиентов`],
              [`50+`, `Видов продукции`],
              [`1 000 000+`, `Изделий выпущено`],
            ],
          }),
          (0, D.jsx)(`section`, {
            className: `mx-auto w-full max-w-[1600px] px-5 sm:px-8`,
            children: (0, D.jsxs)(`div`, {
              className: `grid gap-12 lg:grid-cols-[0.65fr_1.35fr]`,
              children: [
                (0, D.jsxs)(`div`, {
                  children: [
                    (0, D.jsx)(A, { children: `История` }),
                    (0, D.jsxs)(`h2`, {
                      className: `mt-6 font-heading uppercase tracking-[-1px]`,
                      children: [
                        `Растём вместе`,
                        (0, D.jsx)(`br`, {}),
                        `с клиентами`,
                      ],
                    }),
                    (0, D.jsx)(`p`, {
                      className: `mt-6 max-w-md text-[15px] leading-relaxed text-ink/65`,
                      children: `Начинали с небольшого вышивального цеха, а сегодня собираем проекты полностью — от идеи до доставки.`,
                    }),
                  ],
                }),
                (0, D.jsx)(`div`, {
                  className: `border-t border-line lg:w-[88%] lg:justify-self-end`,
                  children: [
                    [
                      `2009`,
                      `Основание`,
                      `Открыли первый цех вышивки в Тюмени и выполнили первые заказы для местных компаний.`,
                    ],
                    [
                      `2016`,
                      `Расширение`,
                      `Запустили собственные участки печати и начали работать с клиентами по всему Уральскому округу.`,
                    ],
                    [
                      `2021`,
                      `Новый масштаб`,
                      `Собрали команду дизайнеров и технологов, расширили ассортимент одежды и аксессуаров.`,
                    ],
                    [
                      `2026`,
                      `Сегодня`,
                      `Создаём мерч для компаний по всей России и контролируем каждый этап внутри производства.`,
                    ],
                  ].map(([e, t, n]) =>
                    (0, D.jsxs)(
                      `div`,
                      {
                        className: `grid gap-4 border-b border-line py-7 sm:grid-cols-[130px_1fr] sm:gap-8 lg:py-5`,
                        children: [
                          (0, D.jsx)(`div`, {
                            className: `font-display text-[1.6rem] font-black text-acid sm:text-[2rem]`,
                            children: e,
                          }),
                          (0, D.jsxs)(`div`, {
                            children: [
                              (0, D.jsx)(`div`, {
                                className: `font-heading text-[1rem] uppercase sm:text-[1.1rem]`,
                                children: t,
                              }),
                              (0, D.jsx)(`p`, {
                                className: `mt-2 max-w-2xl text-[15px] leading-relaxed text-ink/65`,
                                children: n,
                              }),
                            ],
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          }),
          (0, D.jsx)(`div`, { children: (0, D.jsx)(be, { noTopPadding: !0 }) }),
          (0, D.jsxs)(`section`, {
            className: `mx-auto w-full max-w-[1600px] px-5 sm:px-8`,
            children: [
              (0, D.jsxs)(`div`, {
                className: `flex flex-wrap items-end justify-between gap-4 pb-12`,
                children: [
                  (0, D.jsxs)(`div`, {
                    children: [
                      (0, D.jsx)(A, { children: `Офис и производство` }),
                      (0, D.jsxs)(`h2`, {
                        className: `mt-4 font-heading uppercase tracking-mega`,
                        children: [
                          `Место, где`,
                          (0, D.jsx)(`br`, {}),
                          `рождаются идеи`,
                        ],
                      }),
                    ],
                  }),
                  (0, D.jsx)(`p`, {
                    className: `max-w-xs text-[15px] leading-relaxed text-ink/70`,
                    children: `Здесь дизайнеры, менеджеры и мастера работают рядом, поэтому путь от первого эскиза до готового изделия остаётся прозрачным.`,
                  }),
                ],
              }),
              (0, D.jsxs)(`div`, {
                className: `relative aspect-[4/3] overflow-hidden bg-neutral-200 sm:aspect-[16/8]`,
                children: [
                  (0, D.jsx)(
                    `img`,
                    {
                      src: O(n[e].image, 1600, 900),
                      alt: n[e].alt,
                      className: `h-full w-full object-cover`,
                    },
                    n[e].image,
                  ),
                  (0, D.jsx)(`button`, {
                    type: `button`,
                    onClick: () => t((e - 1 + n.length) % n.length),
                    className: `absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink transition-colors hover:bg-acid`,
                    "aria-label": `Предыдущее фото`,
                    children: (0, D.jsx)(j, {
                      className: `h-4 w-4 rotate-180`,
                    }),
                  }),
                  (0, D.jsx)(`button`, {
                    type: `button`,
                    onClick: () => t((e + 1) % n.length),
                    className: `absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink transition-colors hover:bg-acid`,
                    "aria-label": `Следующее фото`,
                    children: (0, D.jsx)(j, { className: `h-4 w-4` }),
                  }),
                  (0, D.jsx)(`div`, {
                    className: `absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2`,
                    children: n.map((n, r) =>
                      (0, D.jsx)(
                        `button`,
                        {
                          type: `button`,
                          onClick: () => t(r),
                          "aria-label": `Открыть фото ${r + 1}`,
                          className: `h-2 w-2 rounded-full transition-colors ${
                            e === r ? `bg-acid` : `bg-paper/70`
                          }`,
                        },
                        n.image,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, D.jsx)(Oe, {}),
        ],
      }),
      (0, D.jsx)(ke, { innerPage: !0 }),
    ],
  })
}
var je = [
  {
    category: `Нефть и газ`,
    name: `Северный характер`,
    type: `Корпоративная коллекция`,
    year: `2026`,
    image: k.hoodie,
  },
  {
    category: `IT`,
    name: `Технопарк`,
    type: `Welcome pack для команды`,
    year: `2026`,
    image: k.toteCaps,
  },
  {
    category: `Спорт`,
    name: `Siberia Team`,
    type: `Мерч для соревнований`,
    year: `2025`,
    image: k.cap,
  },
  {
    category: `HoReCa`,
    name: `Завтрак на районе`,
    type: `Форма и аксессуары`,
    year: `2025`,
    image: k.tee,
  },
  {
    category: `Ритейл`,
    name: `Локальная марка`,
    type: `Лимитированная коллекция`,
    year: `2025`,
    image: k.tote,
  },
  {
    category: `Нефть и газ`,
    name: `Ямал`,
    type: `Набор для события`,
    year: `2024`,
    image: k.embroidery,
  },
  {
    category: `Образование`,
    name: `Новая школа`,
    type: `Мерч для студентов`,
    year: `2024`,
    image: k.shoesTote,
  },
  {
    category: `IT`,
    name: `Лаборатория будущего`,
    type: `Подарки для сотрудников`,
    year: `2024`,
    image: k.fabric,
  },
  {
    category: `HoReCa`,
    name: `Город говорит`,
    type: `Текстиль для команды`,
    year: `2023`,
    image: k.embroidery2,
  },
]
function Me() {
  let e = [
      `Все`,
      `Нефть и газ`,
      `IT`,
      `Спорт`,
      `HoReCa`,
      `Ритейл`,
      `Образование`,
    ],
    [t, n] = (0, E.useState)(`Все`),
    [r, i] = (0, E.useState)(!1),
    a = t === `Все` ? je : je.filter((e) => e.category === t)
  return (0, D.jsxs)(`div`, {
    id: `top`,
    className: `min-h-screen bg-paper text-ink`,
    children: [
      (0, D.jsx)(pe, { innerPage: !0 }),
      (0, D.jsxs)(`main`, {
        children: [
          (0, D.jsx)(`section`, {
            className: `bg-coal text-paper`,
            children: (0, D.jsxs)(`div`, {
              className: `mx-auto grid max-w-[1600px] gap-10 px-5 sm:px-8 pt-40 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-52 lg:pb-28`,
              children: [
                (0, D.jsxs)(`div`, {
                  children: [
                    (0, D.jsx)(`div`, {
                      className: `font-mono text-[12px] uppercase tracking-[0.2em] text-acid sm:text-[13px]`,
                      children: `Портфолио`,
                    }),
                    (0, D.jsxs)(`h1`, {
                      className: `mt-7 max-w-4xl font-heading uppercase`,
                      children: [`Наши`, (0, D.jsx)(`br`, {}), `работы`],
                    }),
                  ],
                }),
                (0, D.jsx)(`div`, {
                  className: `lg:pb-2`,
                  children: (0, D.jsx)(`p`, {
                    className: `max-w-xl text-[16px] leading-[1.55] text-paper/70 sm:text-[18px]`,
                    children: `Реальные проекты для компаний, команд и событий — от идеи и дизайна до готового тиража.`,
                  }),
                }),
              ],
            }),
          }),
          (0, D.jsx)(`section`, {
            children: (0, D.jsx)(`div`, {
              className: `mx-auto flex max-w-[1600px] gap-2 overflow-x-auto px-5 sm:px-8 pt-10 pb-6 sm:pt-12`,
              children: e.map((e) =>
                (0, D.jsx)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => n(e),
                    className: `shrink-0 border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                      t === e
                        ? `border-ink bg-ink text-paper`
                        : `border-line hover:border-ink`
                    }`,
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          }),
          (0, D.jsx)(`section`, {
            children: (0, D.jsx)(`div`, {
              className: `mx-auto grid max-w-[1600px] grid-cols-1 border-l border-line sm:grid-cols-2 xl:grid-cols-3`,
              children: a.map((e, t) =>
                (0, D.jsxs)(
                  `article`,
                  {
                    className: `group relative overflow-hidden border-b border-r border-line ${
                      t === 0
                        ? `border-t`
                        : t === 1
                          ? `sm:border-t`
                          : t === 2
                            ? `xl:border-t`
                            : ``
                    }`,
                    children: [
                      t === 0 &&
                        (0, D.jsx)(`a`, {
                          href: `severnyy-harakter/`,
                          className: `absolute inset-0 z-10`,
                          "aria-label": `Открыть кейс ${e.name}`,
                        }),
                      (0, D.jsx)(`div`, {
                        className: `aspect-[4/3] overflow-hidden bg-neutral-200 sm:aspect-[4/5]`,
                        children: (0, D.jsx)(`img`, {
                          src: O(e.image, 900, 1050),
                          alt: `${e.name} — ${e.type}`,
                          className: `h-full w-full object-cover transition-transform duration-500 group-hover:scale-105`,
                          loading: t > 2 ? `lazy` : `eager`,
                        }),
                      }),
                      (0, D.jsxs)(`div`, {
                        className: `flex min-h-[150px] items-start justify-between gap-6 p-5 pb-8 sm:min-h-[170px] sm:p-8 lg:p-7`,
                        children: [
                          (0, D.jsxs)(`div`, {
                            children: [
                              (0, D.jsx)(`div`, {
                                className: `inline-flex bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper`,
                                children: e.category,
                              }),
                              (0, D.jsx)(`h2`, {
                                className: `mt-4 font-display text-[1.05rem] uppercase sm:text-[1.2rem]`,
                                children: e.name,
                              }),
                              (0, D.jsx)(`p`, {
                                className: `mt-2 text-[14px] leading-relaxed text-ink/60`,
                                children: e.type,
                              }),
                            ],
                          }),
                          (0, D.jsxs)(`div`, {
                            className: `flex shrink-0 flex-col items-end gap-4 font-mono text-[10px] text-ash`,
                            children: [
                              (0, D.jsx)(`span`, { children: e.year }),
                              (0, D.jsx)(`span`, {
                                className: `grid h-8 w-8 place-items-center rounded-full border border-line transition-colors group-hover:border-acid group-hover:bg-acid group-hover:text-ink`,
                                children: (0, D.jsx)(j, {
                                  className: `h-3.5 w-3.5`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
            }),
          }),
          (0, D.jsx)(`div`, {
            className: `mt-[100px]`,
            children: (0, D.jsx)(xe, {
              onSubmit: () => {
                i(!0), setTimeout(() => i(!1), 2600)
              },
              innerPage: !0,
            }),
          }),
          (0, D.jsx)(`div`, {
            className: `mt-[100px]`,
            children: (0, D.jsx)(Oe, {}),
          }),
        ],
      }),
      (0, D.jsx)(ke, { innerPage: !0 }),
      (0, D.jsx)(Ye, { show: r }),
    ],
  })
}
function Ne() {
  let e = je[0],
    [t, n] = (0, E.useState)(null),
    [r, i] = (0, E.useState)(100),
    [a, o] = (0, E.useState)(null),
    [s, c] = (0, E.useState)({ width: 0, height: 0 }),
    l = (0, E.useRef)(null),
    u = (0, E.useRef)(null),
    d = (0, E.useRef)(null),
    f = (0, E.useRef)(null),
    p = (0, E.useRef)({ x: 0.5, y: 0.5 }),
    m = (0, E.useRef)(100),
    h = (0, E.useRef)(null),
    g = (0, E.useRef)(!1),
    _ = (0, E.useRef)(null),
    v = [
      [`Задача`, `Создать корпоративную коллекцию для команды`],
      [`Решение`, `Худи, футболки и аксессуары с вышивкой`],
      [`Тираж`, `240 изделий`],
      [`Срок`, `18 рабочих дней`],
      [`Клиент`, `Северный характер`],
    ],
    y = [k.hoodie, k.embroidery, k.toteCaps, k.fabric, k.cap],
    b = t !== null,
    x =
      a && s.width && s.height
        ? Math.min(s.width / a.width, s.height / a.height)
        : 0,
    S = a ? Math.round((a.width * x * r) / 100) : 0,
    C = a ? Math.round((a.height * x * r) / 100) : 0,
    w = () => {
      let e = u.current
      if (!e) return
      let t = e.scrollWidth - e.clientWidth,
        n = e.scrollHeight - e.clientHeight
      p.current = {
        x: t > 0 ? e.scrollLeft / t : 0.5,
        y: n > 0 ? e.scrollTop / n : 0.5,
      }
    }
  ;(0, E.useEffect)(() => {
    if (!b) return
    let e = document.body.style.overflow
    ;(document.body.style.overflow = `hidden`), d.current?.focus()
    let t = (e) => {
      if (e.key === `Escape`) n(null)
      else if (e.key === `ArrowRight`)
        n((e) => (e === null ? null : (e + 1) % y.length)),
          i(100),
          (m.current = 100),
          o(null),
          (p.current = { x: 0.5, y: 0.5 })
      else if (e.key === `ArrowLeft`)
        n((e) => (e === null ? null : (e - 1 + y.length) % y.length)),
          i(100),
          (m.current = 100),
          o(null),
          (p.current = { x: 0.5, y: 0.5 })
      else if (e.key === `Tab`) {
        let t = l.current?.querySelectorAll(`button`)
        if (!t?.length) return
        let n = t[0],
          r = t[t.length - 1]
        e.shiftKey && document.activeElement === n
          ? (e.preventDefault(), r.focus())
          : !e.shiftKey &&
            document.activeElement === r &&
            (e.preventDefault(), n.focus())
      }
    }
    return (
      window.addEventListener(`keydown`, t),
      () => {
        ;(document.body.style.overflow = e),
          window.removeEventListener(`keydown`, t),
          f.current?.focus()
      }
    )
  }, [b]),
    (0, E.useEffect)(() => {
      if (!b || !u.current) return
      let e = u.current,
        t = (e) =>
          Math.hypot(e[0].clientX - e[1].clientX, e[0].clientY - e[1].clientY),
        n = (e) => {
          e.touches.length === 2 &&
            (_.current !== null && window.clearTimeout(_.current),
            (g.current = !0),
            (h.current = {
              distance: Math.max(1, t(e.touches)),
              zoom: m.current,
            }))
        },
        r = (e) => {
          if (!h.current || e.touches.length !== 2) return
          e.preventDefault()
          let n = Math.min(
            250,
            Math.max(
              100,
              Math.round((h.current.zoom * t(e.touches)) / h.current.distance),
            ),
          )
          n !== m.current && (w(), (m.current = n), i(n))
        },
        a = (e) => {
          if (h.current && e.touches.length < 2) {
            h.current = null
            let e = Math.min(
              250,
              Math.max(100, Math.round(m.current / 25) * 25),
            )
            w(), (m.current = e), i(e)
          }
          e.touches.length === 0 &&
            g.current &&
            (_.current = window.setTimeout(() => {
              ;(g.current = !1), (_.current = null)
            }, 400))
        }
      return (
        e.addEventListener(`touchstart`, n, { passive: !0 }),
        e.addEventListener(`touchmove`, r, { passive: !1 }),
        e.addEventListener(`touchend`, a),
        e.addEventListener(`touchcancel`, a),
        () => {
          e.removeEventListener(`touchstart`, n),
            e.removeEventListener(`touchmove`, r),
            e.removeEventListener(`touchend`, a),
            e.removeEventListener(`touchcancel`, a),
            _.current !== null && window.clearTimeout(_.current),
            (h.current = null),
            (g.current = !1)
        }
      )
    }, [b]),
    (0, E.useEffect)(() => {
      if (!b || !u.current) return
      let e = u.current,
        t = () => {
          let t = window.getComputedStyle(e),
            n =
              e.clientWidth -
              parseFloat(t.paddingLeft) -
              parseFloat(t.paddingRight),
            r =
              e.clientHeight -
              parseFloat(t.paddingTop) -
              parseFloat(t.paddingBottom)
          c((e) =>
            e.width === n && e.height === r ? e : { width: n, height: r },
          )
        },
        n = new ResizeObserver(t)
      return n.observe(e), t(), () => n.disconnect()
    }, [b]),
    (0, E.useEffect)(() => {
      if (!b || !S || !C) return
      let e = window.requestAnimationFrame(() => {
        let e = u.current
        e &&
          ((e.scrollLeft =
            Math.max(0, e.scrollWidth - e.clientWidth) * p.current.x),
          (e.scrollTop =
            Math.max(0, e.scrollHeight - e.clientHeight) * p.current.y))
      })
      return () => window.cancelAnimationFrame(e)
    }, [b, t, r, S, C])
  let ee = (e) => {
      n((e + y.length) % y.length),
        i(100),
        (m.current = 100),
        o(null),
        (p.current = { x: 0.5, y: 0.5 })
    },
    te = (e) => {
      w(), (m.current = e), i(e)
    }
  return (0, D.jsxs)(`div`, {
    id: `top`,
    className: `min-h-screen bg-paper text-ink`,
    children: [
      (0, D.jsx)(pe, { innerPage: !0, rootPrefix: `../../` }),
      (0, D.jsxs)(`main`, {
        children: [
          (0, D.jsxs)(`section`, {
            className: `relative min-h-[680px] overflow-hidden bg-coal text-paper lg:min-h-[820px]`,
            children: [
              (0, D.jsx)(`img`, {
                src: O(e.image, 1800, 1100),
                alt: `${e.name} — ${e.type}`,
                className: `absolute inset-0 h-full w-full object-cover`,
              }),
              (0, D.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15`,
              }),
              (0, D.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20`,
              }),
              (0, D.jsx)(`div`, {
                className: `relative mx-auto flex min-h-[680px] max-w-[1600px] items-end px-5 sm:px-8 pt-40 pb-16 lg:min-h-[820px] lg:pb-24`,
                children: (0, D.jsxs)(`div`, {
                  className: `max-w-4xl`,
                  children: [
                    (0, D.jsx)(`div`, {
                      className: `inline-flex bg-acid px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.17em] text-ink`,
                      children: e.category,
                    }),
                    (0, D.jsxs)(`h1`, {
                      className: `mt-6 font-heading uppercase`,
                      children: [`Северный`, (0, D.jsx)(`br`, {}), `характер`],
                    }),
                    (0, D.jsx)(`p`, {
                      className: `mt-6 max-w-xl text-[16px] leading-relaxed text-paper/75 sm:text-[18px]`,
                      children: `Корпоративная коллекция для команды, которая работает в суровом климате и ценит функциональные вещи.`,
                    }),
                    (0, D.jsx)(`a`, {
                      href: `../../#lead`,
                      "data-quiz-open": !0,
                      className: `mt-8 inline-flex`,
                      children: (0, D.jsx)(M, { children: `ХОЧУ ТАКЖЕ` }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, D.jsxs)(`section`, {
            className: `mx-auto mt-[100px] grid max-w-[1600px] grid-cols-1 border border-line lg:grid-cols-[1.2fr_0.8fr]`,
            children: [
              (0, D.jsxs)(`div`, {
                className: `px-5 py-14 sm:px-8 lg:border-r lg:border-line lg:px-16 lg:py-20`,
                children: [
                  (0, D.jsx)(A, { children: `О проекте` }),
                  (0, D.jsxs)(`h2`, {
                    className: `mt-6 font-heading uppercase tracking-[-1px]`,
                    children: [
                      `Мерч для`,
                      (0, D.jsx)(`br`, {}),
                      `северной команды`,
                    ],
                  }),
                  (0, D.jsxs)(`div`, {
                    className: `mt-8 max-w-2xl space-y-5 text-[16px] leading-relaxed text-ink/70`,
                    children: [
                      (0, D.jsx)(`p`, {
                        children: `Задачей было создать цельную коллекцию одежды и аксессуаров, которая объединит сотрудников и останется удобной в повседневной работе.`,
                      }),
                      (0, D.jsx)(`p`, {
                        children: `Мы разработали спокойную графическую систему, подобрали плотный текстиль и использовали износостойкую вышивку. Перед запуском тиража изготовили образцы и проверили посадку изделий.`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, D.jsx)(`div`, {
                className: `px-5 py-10 sm:px-8 lg:px-14 lg:py-20`,
                children: v.map(([e, t]) =>
                  (0, D.jsxs)(
                    `div`,
                    {
                      className: `border-b border-line py-4 first:pt-0 last:border-b-0`,
                      children: [
                        (0, D.jsx)(`div`, {
                          className: `font-mono text-[13px] uppercase tracking-[0.16em] text-ash`,
                          children: e,
                        }),
                        (0, D.jsx)(`div`, {
                          className: `mt-2 text-[16px] font-semibold leading-snug`,
                          children: t,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, D.jsx)(`section`, {
            className: `mx-auto mt-[100px] grid max-w-[1600px] grid-cols-1 gap-3 px-5 sm:grid-cols-2 sm:px-8`,
            children: y.map((e, t) =>
              (0, D.jsx)(
                `button`,
                {
                  type: `button`,
                  onClick: (e) => {
                    ;(f.current = e.currentTarget), ee(t)
                  },
                  "aria-label": `Увеличить фото ${t + 1} проекта «Северный характер»`,
                  className: `group relative overflow-hidden bg-neutral-200 text-left cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                    t === 2 ? `sm:col-span-2 sm:aspect-[16/8]` : `aspect-[4/5]`
                  }`,
                  children: (0, D.jsx)(`img`, {
                    src: O(e, t === 2 ? 1600 : 900, t === 2 ? 800 : 1100),
                    alt: `Деталь проекта «Северный характер», фото ${t + 1}`,
                    className: `h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]`,
                    loading: t > 1 ? `lazy` : `eager`,
                  }),
                },
                `${e}-${t}`,
              ),
            ),
          }),
          (0, D.jsx)(`div`, {
            className: `mt-[100px]`,
            children: (0, D.jsx)(Oe, {}),
          }),
        ],
      }),
      (0, D.jsx)(ke, { innerPage: !0, rootPrefix: `../../` }),
      t !== null &&
        (0, D.jsxs)(`div`, {
          ref: l,
          role: `dialog`,
          "aria-modal": `true`,
          "aria-label": `Просмотр фотографий проекта «Северный характер»`,
          className: `fixed inset-0 z-[100] flex flex-col bg-coal text-paper`,
          children: [
            (0, D.jsxs)(`div`, {
              className: `flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/15 px-5 py-4 sm:flex-nowrap sm:gap-4 sm:px-8`,
              children: [
                (0, D.jsxs)(`div`, {
                  className: `min-w-0 max-[639px]:w-full`,
                  children: [
                    (0, D.jsx)(`div`, {
                      className: `font-mono text-[10px] uppercase tracking-[0.2em] text-acid`,
                      children: `Галерея проекта`,
                    }),
                    (0, D.jsx)(`div`, {
                      className: `mt-1 truncate font-display text-[15px] uppercase sm:text-[18px]`,
                      children: `Северный характер`,
                    }),
                  ],
                }),
                (0, D.jsxs)(`div`, {
                  className: `flex shrink-0 items-center gap-2 max-[639px]:w-full`,
                  children: [
                    (0, D.jsx)(`button`, {
                      type: `button`,
                      onClick: () => te(Math.max(100, r - 25)),
                      disabled: r <= 100,
                      "aria-label": `Уменьшить фотографию`,
                      className: `grid h-11 w-11 place-items-center border border-white/30 font-display text-[22px] transition-colors hover:border-acid hover:bg-acid hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid disabled:cursor-not-allowed disabled:opacity-35`,
                      children: `−`,
                    }),
                    (0, D.jsxs)(`span`, {
                      className: `w-10 text-center font-mono text-[11px] text-acid`,
                      role: `status`,
                      "aria-live": `polite`,
                      children: [r, `%`],
                    }),
                    (0, D.jsx)(`button`, {
                      type: `button`,
                      onClick: () => te(Math.min(250, r + 25)),
                      disabled: r >= 250,
                      "aria-label": `Увеличить фотографию`,
                      className: `grid h-11 w-11 place-items-center border border-white/30 font-display text-[22px] transition-colors hover:border-acid hover:bg-acid hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid disabled:cursor-not-allowed disabled:opacity-35`,
                      children: `+`,
                    }),
                    (0, D.jsx)(`button`, {
                      ref: d,
                      type: `button`,
                      onClick: () => n(null),
                      "aria-label": `Закрыть просмотр`,
                      className: `grid h-11 w-11 place-items-center border border-paper bg-paper text-ink transition-colors hover:border-acid hover:bg-acid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid max-[639px]:ml-auto`,
                      children: (0, D.jsx)(`svg`, {
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        className: `h-5 w-5`,
                        "aria-hidden": `true`,
                        children: (0, D.jsx)(`path`, {
                          d: `M5 5 19 19M19 5 5 19`,
                          stroke: `currentColor`,
                          strokeWidth: `1.8`,
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, D.jsx)(`div`, {
              ref: u,
              className: `min-h-0 flex-1 overflow-auto p-5 sm:p-8`,
              style: { touchAction: `pan-x pan-y` },
              children: (0, D.jsx)(`div`, {
                className: `flex h-full min-h-full min-w-full items-center justify-center`,
                style: S && C ? { width: S, height: C } : void 0,
                children: (0, D.jsx)(
                  `img`,
                  {
                    src: `https://images.unsplash.com/photo-${y[t]}?w=2400&auto=format`,
                    alt: `Деталь проекта «Северный характер», фото ${t + 1}`,
                    onLoad: (e) =>
                      o({
                        width: e.currentTarget.naturalWidth,
                        height: e.currentTarget.naturalHeight,
                      }),
                    onClick: () => {
                      !g.current && r < 250 && te(Math.min(250, r + 25))
                    },
                    style: S && C ? { width: S, height: C } : void 0,
                    className: `${
                      S && C
                        ? `block max-h-none max-w-none`
                        : `max-h-full max-w-full`
                    } object-contain ${
                      r < 250 ? `cursor-zoom-in` : `cursor-default`
                    }`,
                  },
                  t,
                ),
              }),
            }),
            (0, D.jsxs)(`div`, {
              className: `flex shrink-0 items-center justify-between gap-3 border-t border-white/15 px-5 py-4 sm:px-8`,
              children: [
                (0, D.jsx)(`button`, {
                  type: `button`,
                  onClick: () => ee(t - 1),
                  className: `h-11 border border-white/30 px-4 font-display text-[12px] uppercase transition-colors hover:border-acid hover:bg-acid hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid`,
                  children: `Назад`,
                }),
                (0, D.jsxs)(`span`, {
                  className: `font-mono text-[12px] tracking-[0.2em] text-acid`,
                  children: [
                    String(t + 1).padStart(2, `0`),
                    ` / `,
                    String(y.length).padStart(2, `0`),
                  ],
                }),
                (0, D.jsx)(`button`, {
                  type: `button`,
                  onClick: () => ee(t + 1),
                  className: `h-11 border border-white/30 px-4 font-display text-[12px] uppercase transition-colors hover:border-acid hover:bg-acid hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid`,
                  children: `Далее`,
                }),
              ],
            }),
          ],
        }),
    ],
  })
}
function Pe() {
  return D.jsx(BlogPage, {
    header: D.jsx(pe, { innerPage: true }),
    footer: D.jsx(ke, { innerPage: true }),
    faq: D.jsx(Oe, {}),
  })
}
function Fe() {
  const articleRoot = /\/blog\/article\/[a-z0-9-]+(?:\/|\/index\.html)?$/.test(window.location.pathname) ? "../../../" : "../../"
  return D.jsx(ArticlePage, {
    header: D.jsx(pe, {
      innerPage: true,
      rootPrefix: articleRoot,
      forceSolid: true,
    }),
    footer: D.jsx(ke, { innerPage: true, rootPrefix: articleRoot }),
  })
}
function Ie() {
  let e =
      new URLSearchParams(window.location.search).get(`product`) ?? `Футболки`,
    t = le.find((t) => t.items.includes(e)) ?? le[1],
    n = t.items.includes(e) ? e : `Футболки`,
    r = {
      "Рюкзаки и сумки": {
        description: `Практичный мерч для команды, мероприятий и ежедневного использования. Подберём конструкцию, материал и способ нанесения под задачу и бюджет.`,
        images: [re, ie, O(k.tote, 1e3, 800)],
        methods: [
          [`Шелкография`, `Стойкая печать для средних и крупных тиражей.`],
          [`Вышивка`, `Фактурное нанесение с премиальным внешним видом.`],
          [`DTF-печать`, `Полноцветные изображения и небольшие партии.`],
          [`Термоперенос`, `Оперативное нанесение логотипов и надписей.`],
        ],
      },
      Одежда: {
        description: `Брендированная одежда для сотрудников, клиентов и мероприятий. Поможем выбрать посадку, плотность ткани, цвет и технологию нанесения.`,
        images: [n === `Худи` || n === `Свитшоты` ? ee : te, ee, T],
        methods: [
          [`Вышивка`, `Для плотных тканей, логотипов и небольших деталей.`],
          [`Шелкография`, `Насыщенные принты и выгодные тиражи от 50 штук.`],
          [`DTF-печать`, `Фотографическая детализация и малые партии.`],
          [`Термоперенос`, `Быстрое нанесение имён, номеров и логотипов.`],
        ],
      },
      "Головные уборы": {
        description: `Головные уборы для корпоративных коллекций, промо и командной формы. Настроим посадку и аккуратно адаптируем логотип под изделие.`,
        images: [ne, O(k.cap, 1e3, 800), ae],
        methods: [
          [`Вышивка`, `Износостойкий объёмный логотип для ежедневной носки.`],
          [`Шевроны`, `Съёмные и пришивные нашивки сложной формы.`],
          [`DTF-печать`, `Цветные изображения и небольшие тиражи.`],
          [`Термоперенос`, `Лёгкие надписи и персонализация изделий.`],
        ],
      },
      "Верхняя одежда": {
        description: `Функциональная одежда для команды, выездных мероприятий и работы на улице. Учитываем свойства ткани и условия эксплуатации.`,
        images: [T, ee, O(k.fabric, 1e3, 800)],
        methods: [
          [`Вышивка`, `Надёжное нанесение для флиса и плотных материалов.`],
          [`Шевроны`, `Выразительный знак без риска повредить ткань.`],
          [`DTF-печать`, `Детальные изображения с точной передачей цвета.`],
          [`Термоперенос`, `Персонализация формы и небольших партий.`],
        ],
      },
      Аксессуары: {
        description: `Полезные брендированные предметы, которые остаются с человеком каждый день. Подберём основу и технологию под материал изделия.`,
        images: [n === `Нашивки` ? ae : ie, ae, re],
        methods: [
          [`UV-печать`, `Полноцветное нанесение на твёрдые поверхности.`],
          [`UV DTF`, `Перенос изображения на изделия сложной формы.`],
          [`Гравировка`, `Долговечная маркировка металла и дерева.`],
          [`Тампопечать`, `Аккуратные логотипы на небольших предметах.`],
        ],
      },
    }[t.title],
    i = {
      "Рюкзаки и сумки": y,
      Одежда: b,
      "Головные уборы": x,
      "Верхняя одежда": S,
      Аксессуары: C,
    },
    a =
      n === `Футболки`
        ? [
            [
              `Оверсайз-футболки`,
              `Свободный крой для командных коллекций и современного корпоративного мерча.`,
            ],
            [
              `Базовые футболки`,
              `Универсальная модель прямого кроя для массовых тиражей и мероприятий.`,
            ],
            [
              `Премиум-футболки`,
              `Плотные материалы, аккуратная посадка и расширенная палитра цветов.`,
            ],
          ]
        : [
            [
              `Базовые ${n.toLowerCase()}`,
              `Практичная основа для регулярных заказов, мероприятий и больших тиражей.`,
            ],
            [
              `Премиум ${n.toLowerCase()}`,
              `Улучшенные материалы и детали для имиджевых корпоративных коллекций.`,
            ],
            [
              `Индивидуальное производство`,
              `Подберём конструкцию, цвет, фурнитуру и отделку под задачу вашего бренда.`,
            ],
          ]
  return (0, D.jsxs)(`div`, {
    id: `top`,
    className: `min-h-screen bg-paper text-ink`,
    children: [
      (0, D.jsx)(pe, { innerPage: !0, rootPrefix: `../../` }),
      (0, D.jsxs)(`main`, {
        children: [
          (0, D.jsxs)(`section`, {
            className: `relative min-h-[704px] overflow-hidden bg-coal text-paper lg:min-h-[848px]`,
            children: [
              (0, D.jsx)(`img`, {
                src: i[t.title],
                alt: ``,
                "aria-hidden": `true`,
                className: `absolute inset-0 h-full w-full object-cover object-[62%_center] lg:object-center`,
              }),
              (0, D.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 lg:hidden`,
              }),
              (0, D.jsx)(`div`, {
                className: `absolute inset-0 hidden bg-gradient-to-r from-black/85 via-black/45 to-transparent lg:block`,
              }),
              (0, D.jsx)(`div`, {
                className: `relative mx-auto flex min-h-[704px] max-w-[1600px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:min-h-[848px] lg:items-center lg:py-40`,
                children: (0, D.jsxs)(`div`, {
                  className: `max-w-[680px]`,
                  children: [
                    (0, D.jsxs)(`div`, {
                      className: `font-mono text-[13px] uppercase tracking-[0.22em] text-paper/65`,
                      children: [`Ассортимент · `, t.title],
                    }),
                    (0, D.jsxs)(`h1`, {
                      className: `mt-6 font-heading uppercase leading-[0.94] tracking-[-1px]`,
                      children: [
                        (0, D.jsx)(`span`, {
                          className: `text-acid`,
                          children: n,
                        }),
                        (0, D.jsx)(`br`, {}),
                        `с логотипом`,
                        (0, D.jsx)(`br`, {}),
                        `на заказ`,
                      ],
                    }),
                    (0, D.jsx)(`p`, {
                      className: `mt-6 max-w-lg text-[16px] leading-[1.5] text-paper/75 sm:text-[18px]`,
                      children: r.description,
                    }),
                    (0, D.jsx)(`a`, {
                      href: `../../#lead`,
                      "data-quiz-open": !0,
                      className: `mt-8 inline-flex`,
                      children: (0, D.jsx)(M, { children: `Получить примеры` }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, D.jsxs)(`section`, {
            className: `mx-auto max-w-[1600px] px-5 sm:px-8 py-[100px]`,
            children: [
              (0, D.jsxs)(`div`, {
                className: `flex flex-wrap items-end justify-between gap-4 pb-12`,
                children: [
                  (0, D.jsxs)(`div`, {
                    children: [
                      (0, D.jsx)(A, { children: `Виды изделий` }),
                      (0, D.jsxs)(`h2`, {
                        className: `mt-4 font-heading uppercase tracking-mega`,
                        children: [
                          `Какие `,
                          n.toLowerCase(),
                          (0, D.jsx)(`br`, { className: `hidden sm:block` }),
                          ` мы изготавливаем`,
                        ],
                      }),
                    ],
                  }),
                  (0, D.jsx)(`p`, {
                    className: `max-w-xs text-[15px] leading-relaxed text-ink/70`,
                    children: `Подберём модель, материал и детали под вашу задачу — от базовых вариантов до индивидуального производства.`,
                  }),
                ],
              }),
              (0, D.jsx)(`div`, {
                className: `grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3`,
                children: a.map(([e, t], n) =>
                  (0, D.jsxs)(
                    `article`,
                    {
                      className: `bg-paper`,
                      children: [
                        (0, D.jsx)(`div`, {
                          className: `aspect-[4/3] overflow-hidden bg-neutral-200`,
                          children: (0, D.jsx)(`img`, {
                            src: r.images[n],
                            alt: e,
                            className: `h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]`,
                            loading: `lazy`,
                          }),
                        }),
                        (0, D.jsxs)(`div`, {
                          className: `p-5 sm:p-8 lg:p-7`,
                          children: [
                            (0, D.jsx)(`div`, {
                              className: `font-heading text-[1.05rem] uppercase sm:text-[1.2rem]`,
                              children: e,
                            }),
                            (0, D.jsx)(`p`, {
                              className: `mt-3 text-[15px] leading-relaxed text-ink/65`,
                              children: t,
                            }),
                          ],
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, D.jsx)(`section`, {
            className: `bg-coal text-paper`,
            children: (0, D.jsx)(`div`, {
              className: `mx-auto max-w-[1600px] px-5 sm:px-8 py-[100px]`,
              children: (0, D.jsxs)(`div`, {
                className: `grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20`,
                children: [
                  (0, D.jsxs)(`div`, {
                    children: [
                      (0, D.jsx)(A, { dark: !0, children: `Технологии` }),
                      (0, D.jsxs)(`h2`, {
                        className: `mt-6 font-heading uppercase tracking-[-1px]`,
                        children: [`Методы`, (0, D.jsx)(`br`, {}), `нанесения`],
                      }),
                      (0, D.jsx)(`p`, {
                        className: `mt-6 max-w-md text-[16px] leading-relaxed text-paper/65`,
                        children: `Выбираем технологию по материалу изделия, детализации макета, срокам и тиражу.`,
                      }),
                    ],
                  }),
                  (0, D.jsx)(`div`, {
                    className: `grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2`,
                    children: r.methods.map(([e, t], n) =>
                      (0, D.jsxs)(
                        `div`,
                        {
                          className: `min-h-[190px] border-b border-r border-white/15 p-5 sm:p-8 lg:p-7`,
                          children: [
                            (0, D.jsxs)(`div`, {
                              className: `font-mono text-[11px] tracking-[0.18em] text-acid`,
                              children: [`0`, n + 1],
                            }),
                            (0, D.jsx)(`div`, {
                              className: `mt-8 font-heading text-[1.05rem] uppercase`,
                              children: e,
                            }),
                            (0, D.jsx)(`p`, {
                              className: `mt-3 text-[14px] leading-relaxed text-paper/60`,
                              children: t,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          }),
          (0, D.jsx)(`div`, {
            className: `py-[100px]`,
            children: (0, D.jsx)(be, {}),
          }),
        ],
      }),
      (0, D.jsx)(ke, { innerPage: !0, rootPrefix: `../../` }),
    ],
  })
}
var Le = [
  {
    id: `general`,
    number: `01`,
    title: `Общие положения`,
    paragraphs: [
      `Настоящая политика описывает порядок обработки и защиты персональных данных посетителей сайта Тюменской фабрики мерча. Документ подготовлен с учётом требований Федерального закона № 152-ФЗ «О персональных данных».`,
      `Оператором персональных данных является организация, управляющая сайтом и принимающая обращения через размещённые на нём формы. Полное наименование, юридический адрес и реквизиты Оператора будут добавлены после согласования с клиентом.`,
      `Политика применяется ко всей информации, которую Оператор получает при посещении сайта, отправке заявки или ином взаимодействии пользователя с его функциональностью.`,
    ],
  },
  {
    id: `terms`,
    number: `02`,
    title: `Основные понятия`,
    paragraphs: [
      `Персональные данные — информация, которая прямо или косвенно относится к определённому пользователю сайта. Обработка персональных данных — любые действия с такими сведениями, включая получение, хранение, уточнение, использование, передачу, обезличивание и удаление.`,
      `Пользователь — любой посетитель сайта. Оператор — лицо, которое определяет цели и способы обработки данных. Обезличенные данные — сведения, по которым нельзя определить конкретного пользователя без дополнительной информации.`,
    ],
  },
  {
    id: `conditions`,
    number: `03`,
    title: `Условия обработки данных`,
    paragraphs: [
      `Оператор обрабатывает данные в соответствии с законодательством Российской Федерации и только в объёме, необходимом для ответа на обращение, подготовки предложения и работы сервисов сайта.`,
      `Данные передаются пользователем добровольно при заполнении форм. Отправляя форму, пользователь подтверждает согласие с настоящей Политикой. Пользователь отвечает за достоверность предоставленной информации и может потребовать её уточнения или удаления.`,
      `Если поле формы не отмечено как обязательное, пользователь самостоятельно решает, предоставлять соответствующую информацию или нет.`,
    ],
  },
  {
    id: `data`,
    number: `04`,
    title: `Какие данные собираются`,
    paragraphs: [
      `При обращении через сайт могут обрабатываться имя, номер телефона, контакт в Telegram или WhatsApp, содержание задачи и иные сведения, которые пользователь самостоятельно укажет в сообщении.`,
      `Сайт также может автоматически получать обезличенные технические сведения: тип и версию браузера, параметры устройства и экрана, операционную систему, IP-адрес, источник перехода, время посещения и файлы cookie.`,
    ],
    items: [
      `Имя пользователя`,
      `Телефон или контакт в мессенджере`,
      `Описание задачи и пожелания к проекту`,
      `Обезличенные технические данные`,
    ],
  },
  {
    id: `purposes`,
    number: `05`,
    title: `Цели обработки`,
    paragraphs: [
      `Данные используются для обработки обращений, обратной связи, уточнения задачи, подготовки расчёта и примеров работ, заключения и исполнения договоров, а также улучшения содержания и удобства сайта.`,
      `Контактные данные не используются для рекламных рассылок без отдельного согласия пользователя.`,
    ],
  },
  {
    id: `cookies`,
    number: `06`,
    title: `Cookie и аналитика`,
    paragraphs: [
      `Сайт может использовать cookie и сервисы веб-аналитики, чтобы понимать, какие страницы посещают пользователи и как можно улучшить интерфейс. Полученная статистика анализируется в обезличенном виде.`,
      `Пользователь может ограничить или полностью отключить cookie в настройках браузера. В таком случае отдельные элементы сайта могут работать не в полном объёме.`,
    ],
  },
  {
    id: `protection`,
    number: `07`,
    title: `Защита и передача данных`,
    paragraphs: [
      `Оператор принимает организационные и технические меры для защиты данных от неправомерного доступа, изменения, раскрытия или уничтожения.`,
      `Передача третьим лицам допускается с согласия пользователя, для работы необходимых технических сервисов, исполнения договора либо по законному требованию суда или государственного органа. Получатели получают только тот объём информации, который необходим для соответствующей цели.`,
    ],
  },
  {
    id: `final`,
    number: `08`,
    title: `Заключительные положения`,
    paragraphs: [
      `Пользователь вправе запросить сведения об обработке своих данных, потребовать их уточнения, блокирования или удаления. Для этого необходимо направить обращение Оператору по контактам, указанным на сайте.`,
      `Оператор может обновлять Политику при изменении сайта, состава сервисов или требований законодательства. Новая редакция начинает действовать после публикации на этой странице.`,
    ],
  },
]
function Re() {
  return (0, D.jsxs)(`div`, {
    id: `top`,
    className: `min-h-screen bg-paper text-ink`,
    children: [
      (0, D.jsx)(pe, { innerPage: !0 }),
      (0, D.jsxs)(`main`, {
        children: [
          (0, D.jsx)(`section`, {
            className: `bg-coal text-paper`,
            children: (0, D.jsxs)(`div`, {
              className: `mx-auto max-w-[1600px] px-5 sm:px-8 pt-40 pb-20 lg:pt-52 lg:pb-28`,
              children: [
                (0, D.jsx)(`div`, {
                  className: `font-mono text-[12px] uppercase tracking-[0.2em] text-acid sm:text-[13px]`,
                  children: `Документы · редакция от 28.09.2026`,
                }),
                (0, D.jsxs)(`h1`, {
                  className: `mt-7 max-w-5xl font-heading uppercase`,
                  children: [
                    `Политика`,
                    (0, D.jsx)(`br`, { className: `hidden sm:block` }),
                    ` конфиденциальности`,
                  ],
                }),
                (0, D.jsx)(`p`, {
                  className: `mt-8 max-w-2xl text-[16px] leading-[1.55] text-paper/70 sm:text-[18px]`,
                  children: `Как сайт Тюменской фабрики мерча получает, использует и защищает данные посетителей.`,
                }),
              ],
            }),
          }),
          (0, D.jsx)(`section`, {
            className: `border-b border-line`,
            children: (0, D.jsx)(`div`, {
              className: `mx-auto max-w-[1600px] px-5 sm:px-8 py-8`,
              children: (0, D.jsxs)(`div`, {
                className: `grid gap-4 bg-acid p-5 sm:p-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8`,
                children: [
                  (0, D.jsx)(`span`, {
                    className: `font-mono text-[12px] uppercase tracking-[0.18em]`,
                    children: `Важно`,
                  }),
                  (0, D.jsx)(`p`, {
                    className: `max-w-4xl text-[15px] leading-[1.5] sm:text-[16px]`,
                    children: `Это предварительная редакция. Перед публикацией необходимо добавить юридическое наименование, адрес и подтверждённые контактные данные Оператора.`,
                  }),
                ],
              }),
            }),
          }),
          (0, D.jsx)(`section`, {
            children: (0, D.jsxs)(`div`, {
              className: `mx-auto grid max-w-[1600px] gap-14 px-5 sm:px-8 py-20 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-20 lg:py-28`,
              children: [
                (0, D.jsxs)(`aside`, {
                  className: `lg:sticky lg:top-36 lg:self-start`,
                  children: [
                    (0, D.jsx)(`div`, {
                      className: `font-mono text-[12px] uppercase tracking-[0.2em] text-ash`,
                      children: `Содержание`,
                    }),
                    (0, D.jsx)(`nav`, {
                      className: `mt-6 border-t border-line`,
                      children: Le.map((e) =>
                        (0, D.jsxs)(
                          `a`,
                          {
                            href: `#${e.id}`,
                            className: `group flex items-center justify-between gap-4 border-b border-line py-3 text-[14px] transition-colors hover:text-ash`,
                            children: [
                              (0, D.jsx)(`span`, { children: e.title }),
                              (0, D.jsx)(`span`, {
                                className: `font-mono text-[11px] text-ash`,
                                children: e.number,
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, D.jsxs)(`div`, {
                  className: `min-w-0`,
                  children: [
                    Le.map((e, t) =>
                      (0, D.jsxs)(
                        `article`,
                        {
                          id: e.id,
                          className: `scroll-mt-36 ${
                            t > 0
                              ? `mt-16 border-t border-line pt-16 lg:mt-24 lg:pt-24`
                              : ``
                          }`,
                          children: [
                            (0, D.jsxs)(`div`, {
                              className: `font-mono text-[12px] uppercase tracking-[0.2em] text-ash`,
                              children: [`Раздел `, e.number],
                            }),
                            (0, D.jsx)(`h2`, {
                              className: `mt-4 max-w-3xl font-display text-[1.5rem] uppercase sm:text-[1.75rem] lg:text-[2rem]`,
                              children: e.title,
                            }),
                            (0, D.jsx)(`div`, {
                              className: `mt-7 max-w-4xl space-y-5 text-[16px] leading-[1.65] text-ink/75 sm:text-[17px]`,
                              children: e.paragraphs.map((e) =>
                                (0, D.jsx)(`p`, { children: e }, e),
                              ),
                            }),
                            e.items &&
                              (0, D.jsx)(`ul`, {
                                className: `mt-8 grid max-w-4xl gap-px border border-line bg-line sm:grid-cols-2`,
                                children: e.items.map((e, t) =>
                                  (0, D.jsxs)(
                                    `li`,
                                    {
                                      className: `flex gap-4 bg-paper p-5 sm:p-8 lg:p-5 text-[15px] leading-[1.45]`,
                                      children: [
                                        (0, D.jsxs)(`span`, {
                                          className: `font-mono text-[11px] text-ash`,
                                          children: [`0`, t + 1],
                                        }),
                                        (0, D.jsx)(`span`, { children: e }),
                                      ],
                                    },
                                    e,
                                  ),
                                ),
                              }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                    (0, D.jsxs)(`div`, {
                      className: `mt-20 border border-line p-5 sm:p-8 lg:mt-28 lg:p-10`,
                      children: [
                        (0, D.jsx)(`div`, {
                          className: `font-mono text-[12px] uppercase tracking-[0.2em] text-ash`,
                          children: `Вопросы по данным`,
                        }),
                        (0, D.jsx)(`h2`, {
                          className: `mt-5 max-w-2xl font-display text-[1.5rem] uppercase sm:text-[1.75rem]`,
                          children: `Напишите нам, если хотите уточнить или удалить свои данные`,
                        }),
                        (0, D.jsxs)(`a`, {
                          href: `mailto:hello@tfm.ru`,
                          className: `arrow-link mt-8 inline-flex items-center gap-3 border-b-2 border-acid pb-1 font-display text-[14px] uppercase sm:text-[16px]`,
                          children: [
                            `hello@tfm.ru `,
                            (0, D.jsx)(j, {
                              className: `arrow-link-icon h-4 w-4`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, D.jsx)(ke, { innerPage: !0, privacyPage: !0 }),
    ],
  })
}
var ze = [
    {
      key: `audience`,
      title: `Для кого предназначается мерч?`,
      description: `Можно выбрать несколько вариантов.`,
      multiple: !0,
      options: [
        `Сотрудники`,
        `Партнёры`,
        `Клиенты`,
        `Участники мероприятия`,
        `Другое`,
      ],
    },
    {
      key: `occasion`,
      title: `К какому событию приурочен мерч?`,
      description: `Отметьте все подходящие сценарии.`,
      multiple: !0,
      options: [
        `Корпоративное мероприятие`,
        `Офлайн- или онлайн-продажа`,
        `Массовая акция`,
        `Календарный праздник`,
        `Выставка или конференция`,
        `Онбординг новых сотрудников`,
        `Подарки для руководства`,
        `Другое`,
      ],
    },
    {
      key: `design`,
      title: `Есть ли готовый дизайн?`,
      description: `Выберите один вариант — это поможет оценить объём подготовки.`,
      multiple: !1,
      options: [
        `Только логотип`,
        `Брендбук`,
        `Готовое техническое задание`,
        `Идея или видение концепции`,
        `Нужна помощь с идеей и дизайном`,
        `Другое`,
      ],
    },
  ],
  Be = {
    audience: [],
    occasion: [],
    design: [],
    quantity: ``,
    deadline: ``,
    name: ``,
    city: ``,
    phone: ``,
    email: ``,
    company: ``,
  },
  Ve = (e) => {
    let t = e.replace(/\D/g, ``).slice(0, 8)
    return t.length <= 2
      ? t
      : t.length <= 4
        ? `${t.slice(0, 2)}.${t.slice(2)}`
        : `${t.slice(0, 2)}.${t.slice(2, 4)}.${t.slice(4)}`
  },
  He = (e) => {
    let t = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(e)
    if (!t) return !1
    let n = Number(t[1]),
      r = Number(t[2]),
      i = Number(t[3]),
      a = new Date(i, r - 1, n)
    return a.getFullYear() === i && a.getMonth() === r - 1 && a.getDate() === n
  },
  Ue = [
    { id: `RU`, name: `Россия`, flag: `🇷🇺`, dial: `+7`, groups: [3, 3, 2, 2] },
    {
      id: `KZ`,
      name: `Казахстан`,
      flag: `🇰🇿`,
      dial: `+7`,
      groups: [3, 3, 2, 2],
    },
    {
      id: `BY`,
      name: `Беларусь`,
      flag: `🇧🇾`,
      dial: `+375`,
      groups: [2, 3, 2, 2],
    },
    { id: `AM`, name: `Армения`, flag: `🇦🇲`, dial: `+374`, groups: [2, 3, 3] },
    {
      id: `KG`,
      name: `Кыргызстан`,
      flag: `🇰🇬`,
      dial: `+996`,
      groups: [3, 3, 3],
    },
    {
      id: `UZ`,
      name: `Узбекистан`,
      flag: `🇺🇿`,
      dial: `+998`,
      groups: [2, 3, 2, 2],
    },
    {
      id: `AZ`,
      name: `Азербайджан`,
      flag: `🇦🇿`,
      dial: `+994`,
      groups: [2, 3, 2, 2],
    },
    {
      id: `GE`,
      name: `Грузия`,
      flag: `🇬🇪`,
      dial: `+995`,
      groups: [3, 2, 2, 2],
    },
  ],
  We = (e) => e.groups.reduce((e, t) => e + t, 0),
  Ge = (e) =>
    e.groups
      .map(
        (e, t) => `${t === 0 ? `(` : ``}${`0`.repeat(e)}${t === 0 ? `)` : ``}`,
      )
      .join(` `)
      .replace(/ (?=\d{2}(?: |$))/g, `-`),
  Ke = (e, t) => {
    let n = e.replace(/\D/g, ``)
    if (e.trim().startsWith(`+`)) {
      let e = t.dial.replace(/\D/g, ``)
      n.startsWith(e) && (n = n.slice(e.length))
    }
    if (((n = n.slice(0, We(t))), !n)) return ``
    let r = [],
      i = 0
    return (
      t.groups.forEach((e, t) => {
        let a = n.slice(i, i + e)
        a &&
          (r.push(t === 0 ? `(${a}${a.length === e ? `)` : ``}` : a), (i += e))
      }),
      r.join(` `).replace(/ (?=\d{2}(?: |$))/g, `-`)
    )
  },
  qe = (e) => e.replace(/[^A-Za-zА-Яа-яЁё\s'’-]/g, ``).replace(/\s{2,}/g, ` `)
function Je({ open: e, onClose: t }) {
  let [n, r] = (0, E.useState)(0),
    [i, a] = (0, E.useState)(Be),
    [o, s] = (0, E.useState)(`RU`),
    [c, l] = (0, E.useState)(!1),
    u = (0, E.useRef)(null),
    d = (0, E.useRef)(null),
    f = window.location.pathname,
    p =
      /\/(?:blog\/article|cases\/severnyy-harakter|assortment\/product)(?:\/|\/index\.html)?$/.test(
        f,
      )
        ? `../../privacy/`
        : /\/(?:about|cases|blog|privacy)(?:\/|\/index\.html)?$/.test(f)
          ? `../privacy/`
          : `privacy/`
  if (
    ((0, E.useEffect)(() => {
      e || (r(0), a(Be), s(`RU`), l(!1))
    }, [e]),
    (0, E.useEffect)(() => {
      if (!e) return
      let n = document.body.style.overflow
      document.body.style.overflow = `hidden`
      let r = (e) => {
        e.key === `Escape` && t()
      }
      return (
        window.addEventListener(`keydown`, r),
        window.requestAnimationFrame(() => u.current?.focus()),
        () => {
          ;(document.body.style.overflow = n),
            window.removeEventListener(`keydown`, r)
        }
      )
    }, [e, t]),
    !e)
  )
    return null
  let m = n < 3 ? ze[n] : null,
    h = Ue.find((e) => e.id === o) ?? Ue[0],
    g = Ge(h),
    _ =
      n < 3
        ? i[ze[n].key].length > 0
        : n === 3
          ? Number(i.quantity) > 0
          : n === 4
            ? He(i.deadline)
            : !0,
    v = (e, t, n) => {
      a((r) => {
        let i = r[e],
          a = n ? (i.includes(t) ? i.filter((e) => e !== t) : [...i, t]) : [t]
        return { ...r, [e]: a }
      })
    },
    y = (e, t) => {
      let n =
        e === `phone` ? Ke(t, h) : e === `name` || e === `city` ? qe(t) : t
      a((t) => ({ ...t, [e]: n }))
    },
    b = (e) => {
      let t = Ue.find((t) => t.id === e) ?? Ue[0]
      s(t.id), a((e) => ({ ...e, phone: Ke(e.phone, t) }))
    },
    x = (e) => {
      if (e.key !== `Backspace` && e.key !== `Delete`) return
      let t = e.currentTarget
      if (t.selectionStart !== t.selectionEnd) return
      let n = t.selectionStart ?? t.value.length,
        r = [...t.value].reduce(
          (e, t, n) => (/\d/.test(t) && e.push(n), e),
          [],
        ),
        i =
          e.key === `Backspace`
            ? [...r].reverse().find((e) => e < n)
            : r.find((e) => e >= n)
      if (i === void 0) return
      e.preventDefault()
      let o = `${t.value.slice(0, i)}${t.value.slice(i + 1)}`
      a((e) => ({ ...e, phone: Ke(o, h) }))
    },
    S = () => {
      let e = d.current
      e && (typeof e.showPicker == `function` ? e.showPicker() : e.click())
    },
    C = [
      [`Для кого`, i.audience.join(`, `)],
      [`Повод`, i.occasion.join(`, `)],
      [`Дизайн`, i.design.join(`, `)],
      [`Тираж`, i.quantity ? `${i.quantity} шт.` : ``],
      [`Срок`, i.deadline],
    ].filter(([, e]) => e),
    w = () => {
      r(0), a(Be), l(!1)
    }
  return (0, D.jsx)(`div`, {
    className: `fixed inset-0 z-[100] flex items-stretch justify-center bg-ink/75 p-0 sm:items-center sm:p-5 lg:p-8`,
    role: `dialog`,
    "aria-modal": `true`,
    "aria-labelledby": `quiz-title`,
    onMouseDown: (e) => {
      e.currentTarget === e.target && t()
    },
    children: (0, D.jsxs)(`div`, {
      className: `relative flex h-[100dvh] w-full max-w-[1500px] flex-col overflow-hidden bg-paper text-ink sm:h-[calc(100dvh-40px)] sm:max-h-[920px] sm:border sm:border-line lg:h-[min(860px,calc(100dvh-64px))]`,
      children: [
        (0, D.jsx)(`button`, {
          ref: u,
          type: `button`,
          onClick: t,
          className: `absolute top-4 right-4 z-20 grid h-11 w-11 place-items-center border border-line bg-paper transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid sm:top-6 sm:right-6`,
          "aria-label": `Закрыть квиз`,
          children: (0, D.jsxs)(`span`, {
            className: `relative h-5 w-5`,
            "aria-hidden": `true`,
            children: [
              (0, D.jsx)(`span`, {
                className: `absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 rotate-45 bg-current`,
              }),
              (0, D.jsx)(`span`, {
                className: `absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 -rotate-45 bg-current`,
              }),
            ],
          }),
        }),
        c
          ? (0, D.jsxs)(`div`, {
              className: `grid h-full overflow-y-auto lg:grid-cols-[1fr_0.55fr]`,
              children: [
                (0, D.jsxs)(`div`, {
                  className: `flex flex-col justify-center px-5 py-24 sm:px-8 lg:px-20`,
                  children: [
                    (0, D.jsx)(A, { children: `Квиз завершён` }),
                    (0, D.jsxs)(`h2`, {
                      id: `quiz-title`,
                      className: `mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,4.5rem)] uppercase leading-[0.98]`,
                      children: [
                        `Спасибо!`,
                        (0, D.jsx)(`br`, {}),
                        `Мы изучим задачу`,
                      ],
                    }),
                    (0, D.jsx)(`p`, {
                      className: `mt-7 max-w-xl text-[17px] leading-relaxed text-ink/70`,
                      children: `Ответы помогут менеджеру быстрее подготовиться к разговору и предложить подходящие варианты мерча.`,
                    }),
                    (0, D.jsx)(`div`, {
                      className: `mt-10 flex flex-col gap-3 min-[480px]:flex-row`,
                      children: (0, D.jsx)(`button`, {
                        type: `button`,
                        onClick: w,
                        className: `h-12 border border-ink px-6 font-display text-[14px] uppercase transition-colors hover:bg-ink hover:text-paper`,
                        children: `Заполнить заново`,
                      }),
                    }),
                  ],
                }),
                (0, D.jsxs)(`div`, {
                  className: `hidden flex-col justify-between bg-acid p-12 lg:flex`,
                  children: [
                    (0, D.jsx)(`span`, {
                      className: `font-mono text-[12px] uppercase tracking-[0.2em]`,
                      children: `Тюменская фабрика мерча`,
                    }),
                    (0, D.jsxs)(`div`, {
                      className: `font-display text-[clamp(2rem,3vw,3.75rem)] uppercase leading-[0.95]`,
                      children: [
                        `Идеи`,
                        (0, D.jsx)(`br`, {}),
                        `становятся`,
                        (0, D.jsx)(`br`, {}),
                        `вещами`,
                      ],
                    }),
                    (0, D.jsx)(fe, {}),
                  ],
                }),
              ],
            })
          : (0, D.jsxs)(D.Fragment, {
              children: [
                (0, D.jsxs)(`div`, {
                  className: `grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]`,
                  children: [
                    (0, D.jsxs)(`div`, {
                      className: `flex min-h-0 flex-col`,
                      children: [
                        (0, D.jsxs)(`div`, {
                          className: `border-b border-line px-5 pt-7 pb-5 pr-20 sm:px-8 sm:pt-9 sm:pb-7 sm:pr-24 lg:px-14`,
                          children: [
                            (0, D.jsxs)(`div`, {
                              className: `flex items-center gap-4`,
                              children: [
                                (0, D.jsx)(fe, {}),
                                (0, D.jsx)(`span`, {
                                  className: `h-4 w-px bg-line`,
                                }),
                                (0, D.jsx)(`span`, {
                                  className: `font-mono text-[11px] uppercase tracking-[0.18em] text-ash`,
                                  children: `Квиз по проекту`,
                                }),
                              ],
                            }),
                            (0, D.jsx)(`h2`, {
                              id: `quiz-title`,
                              className: `mt-10 max-w-4xl font-display text-[clamp(1.35rem,2.45vw,2.15rem)] uppercase leading-[1.04] sm:mt-12`,
                              children: `Соберём мерч под вашу задачу`,
                            }),
                            (0, D.jsx)(`p`, {
                              className: `mt-3 max-w-2xl text-[14px] leading-relaxed text-ink/65 sm:text-[16px]`,
                              children: `Ответьте на 5 вопросов — так мы быстрее предложим подходящие изделия, технологии и сроки.`,
                            }),
                          ],
                        }),
                        (0, D.jsx)(`div`, {
                          className: `h-1 bg-line`,
                          children: (0, D.jsx)(`div`, {
                            className: `h-full bg-acid transition-[width] duration-300`,
                            style: { width: `${((n + 1) / 6) * 100}%` },
                          }),
                        }),
                        (0, D.jsxs)(`div`, {
                          className: `min-h-0 flex-1 overflow-y-auto px-5 py-7 sm:px-8 sm:py-9 lg:px-14`,
                          children: [
                            (0, D.jsxs)(`div`, {
                              className: `mb-6 flex items-center justify-between gap-4`,
                              children: [
                                (0, D.jsx)(`span`, {
                                  className: `font-mono text-[12px] uppercase tracking-[0.16em] text-ash`,
                                  children:
                                    n < 5
                                      ? `Вопрос 0${n + 1} / 05`
                                      : `Контактные данные`,
                                }),
                                (0, D.jsxs)(`span`, {
                                  className: `font-mono text-[11px] uppercase tracking-[0.14em] text-ash lg:hidden`,
                                  children: [`Шаг `, n + 1, ` из `, 6],
                                }),
                              ],
                            }),
                            m &&
                              (0, D.jsxs)(`fieldset`, {
                                "aria-labelledby": `quiz-question-${n}`,
                                children: [
                                  (0, D.jsx)(`legend`, {
                                    className: `sr-only`,
                                    children: m.title,
                                  }),
                                  (0, D.jsx)(`h3`, {
                                    id: `quiz-question-${n}`,
                                    className: `max-w-3xl font-display text-[1.125rem] uppercase leading-tight sm:text-[1.4rem]`,
                                    children: m.title,
                                  }),
                                  (0, D.jsx)(`p`, {
                                    className: `mt-2 text-[14px] text-ash`,
                                    children: m.description,
                                  }),
                                  (0, D.jsx)(`div`, {
                                    className: `mt-6 grid gap-2 sm:grid-cols-2`,
                                    children: m.options.map((e, t) => {
                                      let n = i[m.key].includes(e)
                                      return (0, D.jsxs)(
                                        `label`,
                                        {
                                          className: `group flex min-h-[60px] cursor-pointer items-center gap-4 border px-4 py-3 transition-colors sm:min-h-[68px] ${
                                            n
                                              ? `border-ink bg-ink text-paper`
                                              : `border-line hover:border-ink`
                                          }`,
                                          children: [
                                            (0, D.jsx)(`input`, {
                                              className: `sr-only`,
                                              type: m.multiple
                                                ? `checkbox`
                                                : `radio`,
                                              name: m.key,
                                              checked: n,
                                              onChange: () =>
                                                v(m.key, e, m.multiple),
                                            }),
                                            (0, D.jsx)(`span`, {
                                              className: `grid h-7 w-7 shrink-0 place-items-center border font-mono text-[10px] ${
                                                n
                                                  ? `border-acid bg-acid text-ink`
                                                  : `border-line group-hover:border-ink`
                                              }`,
                                              children: n
                                                ? `✓`
                                                : String(t + 1).padStart(
                                                    2,
                                                    `0`,
                                                  ),
                                            }),
                                            (0, D.jsx)(`span`, {
                                              className: `text-[14px] font-semibold leading-snug sm:text-[15px]`,
                                              children: e,
                                            }),
                                          ],
                                        },
                                        e,
                                      )
                                    }),
                                  }),
                                ],
                              }),
                            n === 3 &&
                              (0, D.jsxs)(`div`, {
                                children: [
                                  (0, D.jsx)(`h3`, {
                                    className: `font-display text-[1.125rem] uppercase leading-tight sm:text-[1.4rem]`,
                                    children: `Какой тираж необходим?`,
                                  }),
                                  (0, D.jsx)(`p`, {
                                    className: `mt-2 text-[14px] text-ash`,
                                    children: `Укажите примерное количество. Точный тираж можно уточнить с менеджером.`,
                                  }),
                                  (0, D.jsxs)(`label`, {
                                    className: `mt-7 block w-full min-w-0 max-w-xl`,
                                    children: [
                                      (0, D.jsx)(`span`, {
                                        className: `font-mono text-[11px] uppercase tracking-[0.15em] text-ash`,
                                        children: `Количество изделий`,
                                      }),
                                      (0, D.jsxs)(`div`, {
                                        className: `mt-2 grid w-full min-w-0 max-w-full grid-cols-[minmax(0,1fr)_auto] overflow-hidden border border-line transition-colors hover:border-ink focus-within:border-ink`,
                                        children: [
                                          (0, D.jsx)(`input`, {
                                            autoFocus: !0,
                                            required: !0,
                                            min: `1`,
                                            inputMode: `numeric`,
                                            type: `number`,
                                            value: i.quantity,
                                            onChange: (e) =>
                                              a({
                                                ...i,
                                                quantity: e.target.value,
                                              }),
                                            placeholder: `Например, 100`,
                                            className: `quiz-quantity-input w-full min-w-0 bg-paper px-3 py-4 text-[16px] outline-none [appearance:textfield] placeholder:text-ash/70 min-[361px]:px-4 min-[361px]:text-[18px]`,
                                          }),
                                          (0, D.jsx)(`span`, {
                                            className: `grid shrink-0 place-items-center border-l border-line px-3 font-mono text-[11px] uppercase text-ash min-[361px]:px-5 min-[361px]:text-[12px]`,
                                            children: `шт.`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            n === 4 &&
                              (0, D.jsxs)(`div`, {
                                children: [
                                  (0, D.jsx)(`h3`, {
                                    className: `font-display text-[1.125rem] uppercase leading-tight sm:text-[1.4rem]`,
                                    children: `К какому сроку нужна готовность?`,
                                  }),
                                  (0, D.jsx)(`p`, {
                                    className: `mt-2 text-[14px] text-ash`,
                                    children: `Выберите желаемую дату. Мы проверим загрузку производства и подтвердим реальный срок.`,
                                  }),
                                  (0, D.jsxs)(`label`, {
                                    className: `mt-7 block max-w-xl`,
                                    children: [
                                      (0, D.jsx)(`span`, {
                                        className: `font-mono text-[11px] uppercase tracking-[0.15em] text-ash`,
                                        children: `Желаемая дата`,
                                      }),
                                      (0, D.jsxs)(`div`, {
                                        className: `relative mt-2 flex w-full border border-line bg-paper transition-colors hover:border-ink focus-within:border-ink`,
                                        children: [
                                          (0, D.jsx)(`input`, {
                                            autoFocus: !0,
                                            required: !0,
                                            type: `text`,
                                            inputMode: `numeric`,
                                            autoComplete: `off`,
                                            maxLength: 10,
                                            pattern: `[0-9]{2}\\.[0-9]{2}\\.[0-9]{4}`,
                                            value: i.deadline,
                                            onChange: (e) =>
                                              a((t) => ({
                                                ...t,
                                                deadline: Ve(e.target.value),
                                              })),
                                            placeholder: `ДД.ММ.ГГГГ`,
                                            className: `min-w-0 flex-1 bg-paper px-4 py-4 text-[17px] outline-none placeholder:text-ash/70`,
                                          }),
                                          (0, D.jsx)(`button`, {
                                            type: `button`,
                                            onClick: S,
                                            "aria-label": `Выбрать дату в календаре`,
                                            className: `grid w-14 shrink-0 place-items-center border-l border-line text-ink transition-colors hover:bg-acid focus-visible:bg-acid focus-visible:outline-none`,
                                            children: (0, D.jsx)(`svg`, {
                                              viewBox: `0 0 24 24`,
                                              className: `h-5 w-5`,
                                              fill: `none`,
                                              "aria-hidden": `true`,
                                              children: (0, D.jsx)(`path`, {
                                                d: `M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z`,
                                                stroke: `currentColor`,
                                                strokeWidth: `1.7`,
                                                strokeLinecap: `square`,
                                              }),
                                            }),
                                          }),
                                          (0, D.jsx)(`input`, {
                                            ref: d,
                                            type: `date`,
                                            tabIndex: -1,
                                            "aria-hidden": `true`,
                                            value:
                                              i.deadline.length === 10
                                                ? i.deadline
                                                    .split(`.`)
                                                    .reverse()
                                                    .join(`-`)
                                                : ``,
                                            onInput: (e) => {
                                              let [t, n, r] =
                                                e.currentTarget.value.split(`-`)
                                              t &&
                                                n &&
                                                r &&
                                                a((e) => ({
                                                  ...e,
                                                  deadline: `${r}.${n}.${t}`,
                                                }))
                                            },
                                            className: `pointer-events-none absolute right-0 bottom-0 h-px w-px opacity-0`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            n === 5 &&
                              (0, D.jsxs)(`form`, {
                                id: `quiz-contact-form`,
                                onSubmit: (e) => {
                                  e.preventDefault(), l(!0)
                                },
                                children: [
                                  (0, D.jsx)(`h3`, {
                                    className: `font-display text-[1.125rem] uppercase leading-tight sm:text-[1.4rem]`,
                                    children: `Куда отправить предложение?`,
                                  }),
                                  (0, D.jsx)(`p`, {
                                    className: `mt-2 text-[14px] text-ash`,
                                    children: `Оставьте контакты — свяжемся, уточним детали и подготовим варианты.`,
                                  }),
                                  (0, D.jsx)(`div`, {
                                    className: `quiz-contact-grid mt-6 grid border border-line sm:grid-cols-2`,
                                    children: [
                                      [`name`, `Имя и фамилия *`, `text`, !0],
                                      [
                                        `company`,
                                        `Название компании *`,
                                        `text`,
                                        !0,
                                      ],
                                      [`city`, `Город *`, `text`, !0],
                                      [`phone`, `Телефон *`, `tel`, !0],
                                      [`email`, `E-mail *`, `email`, !0],
                                    ].map(([e, t, n, r]) =>
                                      e === `phone`
                                        ? (0, D.jsxs)(
                                            `div`,
                                            {
                                              "data-filled": !!i.phone,
                                              className: `form-field-outline flex min-w-0 items-center border-b border-line bg-paper px-4 transition-colors focus-within:bg-[#FDFDDC]`,
                                              children: [
                                                (0, D.jsxs)(`div`, {
                                                  className: `relative flex h-full w-9 shrink-0 cursor-pointer items-center gap-1`,
                                                  children: [
                                                    (0, D.jsx)(`span`, {
                                                      "aria-hidden": `true`,
                                                      className: `text-[17px] leading-none`,
                                                      children: h.flag,
                                                    }),
                                                    (0, D.jsx)(`span`, {
                                                      "aria-hidden": `true`,
                                                      className: `text-[8px] leading-none text-ash`,
                                                      children: `▼`,
                                                    }),
                                                    (0, D.jsx)(`select`, {
                                                      "aria-label": `Код страны`,
                                                      title: h.name,
                                                      value: o,
                                                      onChange: (e) =>
                                                        b(e.target.value),
                                                      className: `absolute inset-0 h-full w-full cursor-pointer opacity-0`,
                                                      children: Ue.map((e) =>
                                                        (0, D.jsxs)(
                                                          `option`,
                                                          {
                                                            value: e.id,
                                                            children: [
                                                              e.flag,
                                                              ` `,
                                                              e.dial,
                                                              ` · `,
                                                              e.name,
                                                            ],
                                                          },
                                                          e.id,
                                                        ),
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, D.jsx)(`span`, {
                                                  className: `ml-1 shrink-0 text-[15px] font-semibold`,
                                                  children: h.dial,
                                                }),
                                                (0, D.jsxs)(`label`, {
                                                  className: `min-w-0 flex-1`,
                                                  children: [
                                                    (0, D.jsx)(`span`, {
                                                      className: `sr-only`,
                                                      children: t,
                                                    }),
                                                    (0, D.jsx)(`input`, {
                                                      required: !0,
                                                      type: `tel`,
                                                      inputMode: `numeric`,
                                                      minLength: g.length,
                                                      maxLength: g.length,
                                                      autoComplete: `tel-national`,
                                                      value: i.phone,
                                                      onKeyDown: x,
                                                      onChange: (e) =>
                                                        y(
                                                          `phone`,
                                                          e.target.value,
                                                        ),
                                                      placeholder: g,
                                                      className: `h-full w-full min-w-0 bg-transparent py-4 pr-0 pl-2 text-[15px] outline-none placeholder:text-ash`,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            e,
                                          )
                                        : (0, D.jsxs)(
                                            `label`,
                                            {
                                              "data-filled": !!i[e],
                                              className: `form-field-outline bg-paper ${
                                                e === `email`
                                                  ? ``
                                                  : `border-b border-line`
                                              } ${
                                                e === `name` || e === `city`
                                                  ? `sm:border-r`
                                                  : ``
                                              } ${
                                                e === `email`
                                                  ? `sm:col-span-2`
                                                  : ``
                                              }`,
                                              children: [
                                                (0, D.jsx)(`span`, {
                                                  className: `sr-only`,
                                                  children: t,
                                                }),
                                                (0, D.jsx)(`input`, {
                                                  required: !!r,
                                                  type: String(n),
                                                  autoComplete:
                                                    e === `name`
                                                      ? `name`
                                                      : e === `email`
                                                        ? `email`
                                                        : e === `company`
                                                          ? `organization`
                                                          : `address-level2`,
                                                  value: i[e],
                                                  onChange: (t) =>
                                                    y(e, t.target.value),
                                                  placeholder: String(t),
                                                  className: `w-full bg-paper px-4 py-4 text-[15px] outline-none placeholder:text-ash focus:bg-acid/15`,
                                                }),
                                              ],
                                            },
                                            e,
                                          ),
                                    ),
                                  }),
                                  (0, D.jsxs)(`label`, {
                                    className: `mt-5 flex max-w-2xl cursor-pointer items-start gap-3 text-[12px] leading-relaxed text-ash sm:text-[13px]`,
                                    children: [
                                      (0, D.jsx)(`input`, {
                                        required: !0,
                                        type: `checkbox`,
                                        className: `mt-0.5 h-4 w-4 shrink-0 accent-[#0b0b0b]`,
                                      }),
                                      (0, D.jsxs)(`span`, {
                                        children: [
                                          `Я согласен на обработку персональных данных и принимаю`,
                                          ` `,
                                          (0, D.jsx)(`a`, {
                                            href: p,
                                            target: `_blank`,
                                            rel: `noopener noreferrer`,
                                            className: `text-ink underline underline-offset-2`,
                                            children: `политику конфиденциальности`,
                                          }),
                                          `.`,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, D.jsxs)(`aside`, {
                      className: `hidden min-h-0 flex-col justify-between overflow-hidden border-l border-ink/10 bg-acid p-8 lg:flex xl:p-10`,
                      children: [
                        (0, D.jsxs)(`div`, {
                          children: [
                            (0, D.jsxs)(`div`, {
                              className: `pr-16`,
                              children: [
                                (0, D.jsx)(`span`, {
                                  className: `block font-mono text-[11px] uppercase tracking-[0.18em]`,
                                  children: `Шаг`,
                                }),
                                (0, D.jsxs)(`span`, {
                                  className: `mt-6 block font-display text-[3rem] leading-none`,
                                  children: [`0`, n + 1],
                                }),
                              ],
                            }),
                            (0, D.jsx)(`div`, {
                              className: `mt-2 h-px bg-ink/30`,
                            }),
                            (0, D.jsx)(`div`, {
                              className: `mt-7 font-display text-[1.35rem] uppercase leading-[1.05]`,
                              children:
                                n < 5
                                  ? `Расскажите о задаче`
                                  : `Оставьте контакты`,
                            }),
                            C.length > 0 &&
                              (0, D.jsx)(`dl`, {
                                className: `mt-8 space-y-5`,
                                children: C.map(([e, t]) =>
                                  (0, D.jsxs)(
                                    `div`,
                                    {
                                      children: [
                                        (0, D.jsx)(`dt`, {
                                          className: `font-mono text-[10px] uppercase tracking-[0.15em] text-ink/55`,
                                          children: e,
                                        }),
                                        (0, D.jsx)(`dd`, {
                                          className: `mt-1 line-clamp-2 text-[13px] font-semibold leading-snug`,
                                          children: t,
                                        }),
                                      ],
                                    },
                                    e,
                                  ),
                                ),
                              }),
                          ],
                        }),
                        (0, D.jsx)(`p`, {
                          className: `mt-8 max-w-xs text-[13px] leading-relaxed text-ink/65`,
                          children: `Ответы можно изменить кнопкой «Назад». Заполнение обычно занимает 2–3 минуты.`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, D.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-3 border-t border-line bg-paper px-5 py-4 sm:px-8 lg:px-14`,
                  children: [
                    (0, D.jsx)(`button`, {
                      type: `button`,
                      disabled: n === 0,
                      onClick: () => r((e) => Math.max(0, e - 1)),
                      className: `quiz-nav-button inline-flex h-12 items-center gap-2 rounded-full border border-line px-4 font-display text-[13px] uppercase transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-35 sm:px-6`,
                      children: `Назад`,
                    }),
                    n < 5
                      ? (0, D.jsx)(M, {
                          type: `button`,
                          disabled: !_,
                          onClick: () => r((e) => Math.min(5, e + 1)),
                          className: `quiz-nav-button justify-center disabled:cursor-not-allowed disabled:opacity-40`,
                          children: `Далее`,
                        })
                      : (0, D.jsx)(M, {
                          type: `submit`,
                          form: `quiz-contact-form`,
                          className: `quiz-nav-button justify-center`,
                          children: `Отправить`,
                        }),
                  ],
                }),
              ],
            }),
      ],
    }),
  })
}
function Ye({ show: e }) {
  return (0, D.jsx)(`div`, {
    className: `fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-acid px-6 py-3 font-display text-sm font-extrabold uppercase tracking-tight text-ink shadow-lg transition-all duration-300 ${
      e
        ? `translate-y-0 opacity-100`
        : `pointer-events-none translate-y-4 opacity-0`
    }`,
    children: `Заявка принята — свяжемся с вами`,
  })
}
function Xe() {
  let [e, t] = (0, E.useState)(!1)
  return (0, D.jsxs)(`div`, {
    className: `min-h-screen bg-paper text-ink`,
    children: [
      (0, D.jsx)(pe, {}),
      (0, D.jsxs)(`main`, {
        className: `flex flex-col [&>*:nth-child(n+3)]:mt-[100px]`,
        children: [
          (0, D.jsx)(me, {}),
          (0, D.jsx)(ge, {}),
          (0, D.jsx)(_e, {}),
          (0, D.jsx)(ve, {}),
          (0, D.jsx)(be, {}),
          (0, D.jsx)(xe, {
            onSubmit: () => {
              t(!0), setTimeout(() => t(!1), 2600)
            },
          }),
          (0, D.jsx)(Se, {}),
          (0, D.jsx)(Ce, {}),
          (0, D.jsx)(we, {}),
          (0, D.jsx)(De, {}),
          (0, D.jsx)(Oe, {}),
        ],
      }),
      (0, D.jsx)(ke, {}),
      (0, D.jsx)(Ye, { show: e }),
    ],
  })
}
function Ze() {
  let [e, t] = (0, E.useState)(!1),
    n = (0, E.useCallback)(() => t(!1), [])
  ;(0, E.useEffect)(() => {
    let e = (e) => {
      ;(e.target instanceof Element ? e.target : null)?.closest(
        `[data-quiz-open]`,
      ) && (e.preventDefault(), t(!0))
    }
    return (
      document.addEventListener(`click`, e),
      () => document.removeEventListener(`click`, e)
    )
  }, [])
  let r = /\/privacy(?:\/|\/index\.html)?$/.test(window.location.pathname),
    i = /\/blog(?:\/|\/index\.html)?$/.test(window.location.pathname),
    a = /\/blog\/article(?:\/[a-z0-9-]+)?(?:\/|\/index\.html)?$/.test(window.location.pathname),
    o = /\/about(?:\/|\/index\.html)?$/.test(window.location.pathname),
    s = /\/cases(?:\/|\/index\.html)?$/.test(window.location.pathname),
    c = /\/cases\/severnyy-harakter(?:\/|\/index\.html)?$/.test(
      window.location.pathname,
    ),
    l = /\/assortment\/product(?:\/|\/index\.html)?$/.test(
      window.location.pathname,
    ),
    u = (0, D.jsx)(Xe, {})
  return (
    r
      ? (u = (0, D.jsx)(Re, {}))
      : l
        ? (u = (0, D.jsx)(Ie, {}))
        : a
          ? (u = (0, D.jsx)(Fe, {}))
          : i
            ? (u = (0, D.jsx)(Pe, {}))
            : o
              ? (u = (0, D.jsx)(Ae, {}))
              : c
                ? (u = (0, D.jsx)(Ne, {}))
                : s && (u = (0, D.jsx)(Me, {})),
    (0, D.jsxs)(D.Fragment, {
      children: [u, (0, D.jsx)(Je, { open: e, onClose: n })],
    })
  )
}
export default Ze

