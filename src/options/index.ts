import type CSS from "./css";
import type HTML from "./html";
import type IMG from "./img";
import type JS from "./js";
import type SVG from "./svg";

export interface Options {
	[key: string]: any;

	path?: string;

	css?: boolean | CSS;

	html?: boolean | HTML;

	js?: boolean | JS;

	img?: boolean | IMG;

	svg?: boolean | SVG;

	logger?: number;
}

export default (): Options => {
	return {
		path: "./dist/",
		css: {
			clone: false,
			comments: false,
			forceMediaMerge: true,
		},
		html: {
			caseSensitive: true,
			collapseBooleanAttributes: true,
			collapseInlineTagWhitespace: false,
			collapseWhitespace: true,
			conservativeCollapse: false,
			continueOnParseError: false,
			customAttrAssign: [],
			customAttrCollapse: new RegExp("", "i"),
			customAttrSurround: [],
			customEventAttributes: [/^on[a-z]{3,}$/],
			decodeEntities: false,
			html5: true,
			ignoreCustomComments: [],
			ignoreCustomFragments: [],
			includeAutoGeneratedTags: true,
			keepClosingSlash: true,
			maxLineLength: null,
			minifyCSS: true,
			minifyJS: true,
			minifyURLs: false,
			preserveLineBreaks: false,
			preventAttributesEscaping: false,
			processConditionalComments: true,
			processScripts: [],
			removeAttributeQuotes: true,
			removeComments: false,
			removeEmptyAttributes: false,
			removeEmptyElements: false,
			removeOptionalTags: false,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			removeTagWhitespace: true,
			sortAttributes: true,
			sortClassName: true,
			trimCustomFragments: false,
			useShortDoctype: false,
		},
		js: {
			ecma: 5,
			enclose: false,
			keep_classnames: false,
			keep_fnames: false,
			ie8: false,
			module: false,
			safari10: false,
			toplevel: false,
		},
		img: {
			avif: {
				chromaSubsampling: "4:4:4",
				effort: 9,
			},
			gif: {
				effort: 10,
			},
			heif: {
				chromaSubsampling: "4:4:4",
			},
			jpeg: {
				chromaSubsampling: "4:4:4",
				mozjpeg: true,
				trellisQuantisation: true,
				overshootDeringing: true,
				optimiseScans: true,
			},
			png: {
				compressionLevel: 9,
				palette: true,
			},
			raw: {},
			tiff: {
				compression: "lzw",
			},
			webp: {
				effort: 6,
			},
		},
		svg: {
			multipass: true,
			js2svg: {
				indent: 0,
				pretty: false,
			},
			plugins: ["preset-default"],
		},
		logger: 2,
	};
};
