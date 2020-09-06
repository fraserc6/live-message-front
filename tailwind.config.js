module.exports = {
    theme: {
        opacity: {
            0: "0",
            10: ".1",
            20: ".2",
            30: ".3",
            40: ".4",
            50: ".5",
            60: ".6",
            70: ".7",
            80: ".8",
            90: ".9",
            100: "1",
        },
        extend: {
            borderRadius: {
                xl: "1rem",
            },
            fontFamily: {
                display: ["Poppins", "system-ui", "-apple-system", "Arial", "sans-serif"],
            },
            colors: {
                navy: "#0C1128",
                blue: {
                    50: "#F6F7FE",
                    100: "#ECF0FC",
                    200: "#D0D9F8",
                    300: "#B3C1F3",
                    400: "#7B93EB",
                    500: "#4265E2",
                    600: "#3B5BCB",
                    700: "#283D88",
                    800: "#1E2D66",
                    900: "#141E44",
                },
                gray: {
                    50: "#F9FAFB",
                    100: "#F4F5F7",
                    200: "#E5E7EB",
                    300: "#D2D6DC",
                    400: "#9FA6B2",
                    500: "#6B7280",
                    600: "#4B5563",
                    700: "#374151",
                    800: "#252F3F",
                    900: "#161E2E",
                },
            },
        },
    },
    variants: {
        textColor: ["responsive", "hover", "focus", "group-hover"],
    },
}
