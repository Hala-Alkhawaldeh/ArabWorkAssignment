
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/*.vue",
    ],
    theme: {
        minWidth: {
            "296": "296px",
            "186": "186px",
            "510": "510px",
        },
        extend: {
            maxWidth: {
                "402": "402px",
                "510": "510px",
                "171": "171px",
                "186": "186px",
                "768": "768px",
                "1/4": "25%",
                "1/3": "33.33333%",
                "5/12": "41.66667%",
                "1/2": "50%",
                "7/12": "58.333333%",
                "2/3": "66.66667%",
                "3/4": "75%",
                "4/4": "100%",
                "1270": "1270px",
            },
            width: {
                "296": "296px",
                "365": "365px",
            },
            lineHeight: {
                "11": "52px",
                "12": "60px",
                "13": "56px",
                "14": "79px",
            },
            backgroundImage: {},
            backgroundColor: {},
            height: {
                "230": "230px",
                "300": "300px",
                "264": "264px",
                "427": "427px",
            },
            zIndex: {
                "1": "1",
            },
            minHeight: {
                "200": "200px",
                "250": "250px",
                "56": "56px",
                "80": "80px",
            },
            minWidth: {
                "158": "158px",
                "182": "182px",
                "192": "192px",
                '296': '296px',
                '186': '186px',
                '510': '510px',
            },
            fontSize: {
                "4.5xl": "2.625rem",
                "42": "42px",
                "32": "32px",
                "40": "40px",
            },
            fontWeight: {
                "author-weight": "700",
                "date-weight": "600",
                'writerFontWeight': "bold",
            },
            borderRadius: {
                "19": "19px",
                "4xl": "30px",
                full: "50%",
            },
            boxShadow: {
                card: "0 2px 22px 0 rgba(0,0,0,0.1)",
                toolSlide: "0 2px 17px 0 rgba(45,53,64,0.17)",
                "outer-space": "0 2px 32px 0 rgba(45,53,64,0.1)",
                dropdown: "0 2px 32px 0 rgba(45,53,64,0.17)",
            },
            flex: {
                "3": "0 0 25%",
                "4": "0 0 33.33333%;",
                "5": "0 0 41.66667%",
                "6": "0 0 50%",
                "7": "0 0 58.33333%",
                "8": "0 0 66.66667%",
                "9": "0 0 75%",
                "12": "0 0 100%",
            },
            colors: {
                primary: '#00AAFF',
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1269px",
        },
    },
}
