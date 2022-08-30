const postcss = require('postcss')

let expectedV3 = `
.highlight-none {
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.highlight {
    --tw-hl-size: 1px;
    --tw-hl-shadow: inset 0px 0px 0px var(--tw-hl-size) var(--tw-hl-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-hl-shadow);
}
.highlight-b {
    --tw-hl-size: 1px;
    --tw-hl-shadow: inset 0px calc(0px - var(--tw-hl-size)) 0px 0px var(--tw-hl-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-hl-shadow);
}
.highlight-x-\\[16px\\] {
    --tw-hl-size: 16px;
    --tw-hl-shadow: inset var(--tw-hl-size) 0px 0px 0px var(--tw-hl-color), inset calc(0px - var(--tw-hl-size)) 0px 0px 0px var(--tw-hl-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-hl-shadow);
}
.highlight-y-3 {
    --tw-hl-size: 3px;
    --tw-hl-shadow: inset 0px var(--tw-hl-size) 0px 0px var(--tw-hl-color), inset 0px calc(0px - var(--tw-hl-size)) 0px 0px var(--tw-hl-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-hl-shadow);
}
.highlight-x-\\[length\\:var\\(--width\\)\\] {
    --tw-hl-size: var(--width);
    --tw-hl-shadow: inset var(--tw-hl-size) 0px 0px 0px var(--tw-hl-color), inset calc(0px - var(--tw-hl-size)) 0px 0px 0px var(--tw-hl-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-hl-shadow);
}
.highlight-white\\/40 {
    --tw-hl-color: rgb(255 255 255 / 0.4)
}
.hover\\:highlight:hover {
    --tw-hl-size: 1px;
    --tw-hl-shadow: inset 0px 0px 0px var(--tw-hl-size) var(--tw-hl-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-hl-shadow);
}
`

it('v3', () => {
  // @ts-ignore
  const css = postcss([
    // @ts-ignore
    require('tailwindcss')({
      content: [
        {
          raw: 'highlight highlight-none highlight-b highlight-x-[16px] highlight-y-3 highlight-white/40 highlight-x-[length:var(--width)] hover:highlight',
        },
      ],
      plugins: [require('../')],
    }),
  ]).process('@tailwind utilities').css

  expect(css).toBe(expectedV3.trim())
})
