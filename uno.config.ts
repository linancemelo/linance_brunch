import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import { presetDaisy } from "unocss-preset-daisy";

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy({
      themes: [
        {
          mytheme: {
            primary: "#1dcdbc",
            secondary: "#ff33cd",
            accent: "#0737ad",
            neutral: "#262c31",
            "base-100": "#ffffff",
            info: "#3abff8",
            success: "#08e562",
            warning: "#ffcd05",
            error: "#f85454",
          },
        },
      ],
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
      // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      // logs: true, // Shows info about daisyUI version and used config in the console when building your
    }),
  ],
});
