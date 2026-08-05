// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "研究筆記";
export const SITE_DESCRIPTION = "由 AI 蒐集、交叉驗證與撰寫的台股投資研究報告,人工覆核後發布。";
export const SITE_KEYWORDS = ["台股", "研究", "投資研究", "股票分析", "財報研究", "估值分析"];

// Report scope labels — individual stock / whole industry / cross-stock theme (GB300、800V、記憶體…).
export const CATEGORY_LABELS: Record<string, string> = {
	stock: "個股",
	industry: "產業",
	theme: "主題",
};
