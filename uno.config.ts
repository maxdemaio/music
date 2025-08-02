import { defineConfig, presetIcons, presetWind3, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        height: "1.2em",
        width: "1.2em",
        "vertical-align": "text-bottom",
      },
    }),
    presetWebFonts({
      fonts: {
        kai: "Kaisei Tokumin",
      },
    }),
  ],
  shortcuts: {
    mlinkTextHover:
      "transition-color transition-bg duration-150 hover:text-sky-950 dark:hover:text-sky-100 hover:bg-sky-50 dark:hover:bg-sky-950",
    soundLinkHover:
      "transition-color transition-bg duration-150 hover:text-orange-950 dark:hover:text-orange-100 hover:bg-orange-50 dark:hover:bg-orange-950",
    mySponsorLinkHover:
      "transition-color transition-bg duration-150 hover:text-pink-600 dark:hover:text-pink-50 hover:bg-pink-50 dark:hover:bg-pink-950",
    mlink:
      "rounded-sm p-0.5 text-sky-900 dark:text-sky-200 bg-sky-100 dark:bg-sky-950 mlinkTextHover",
    soundLink:
      "rounded-sm p-0.5 text-orange-900 dark:text-orange-200 bg-orange-100 dark:bg-orange-950 soundLinkHover",
    new: "rounded-sm p-0.5 text-emerald-900 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-950",
    mySponsorLink:
      "rounded-sm p-0.5 text-pink-400 dark:text-pink-200 bg-pink-100 dark:bg-pink-950 mySponsorLinkHover",
    // unfortunately, group doesn't quite work yet in a shortcut
    // mproj: 'group rounded p-4 bg-transparent hover:bg-#88888808',
    mprojItem:
      "transition-opacity duration-150 opacity-80 group-hover:opacity-100",
  },
  theme: {
    colors: {
      // https://maketintsandshades.com/
      // class="text-primary-light"
      // class="text-primary-dark"
      "primary-light": "#224b37",
      "primary-light-hover": "#030705",
      "primary-dark": "#a7b7af",
      "primary-dark-hover": "#f6f8f7",
    },
    breakpoints: {
      // this overrides and doesn't merge
      // as per https://github.com/unocss/unocss/blob/main/README.md#extend-theme
      md: "770px",
      sm: "640px",
      xs: "480px",
      lg: "1024px",
    },
  },
  rules: [
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c]) return { color: theme.colors[c] };
      },
    ],
    [
      /^border-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c]) return { "border-color": theme.colors[c] };
      },
    ],
    [
      "transition-color-border-color",
      { "transition-property": "color,border-color" },
    ],
    ["transition-color", { "transition-property": "color" }],
  ],
});
