# 🚀 Awesome Coding Plan

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

> 各大模型/云厂商 Coding Plan 实际价值对比

> *注：本文不会讨论模型的具体智力水平，只建议使用各家的旗舰模型，且如果有数据安全性要求，不允许数据被用于训练，不建议购买 Coding Plan*

## 📖 术语说明

- **周期**：`5h` = 5小时 | `w` = 周 | `mo` = 月
- **额度倍率**：`当前周期额度 ÷ 包月价格`（认可该模型单位定价的前提下，倍率越高，代表性价比越高）

---

## 💡 核心选购建议

尽量考虑算力相对充裕的厂商，额度再差也比天天 429 报错强，如果难以忍受 Coding Plan 的 429，可以直接选择 DeepSeek V4 Flash 按用量计费

- 🎁 **[小米 MiMo 100T 创造者激励计划](https://100t.xiaomimimo.com/)** 申请通过可领取一个月 Standard/Pro/Max Token Plan，5 月 28 日 00:00 截止

- 🎁 **个人想免费白嫖: `NVIDIA NIM` (其他 OpenCode/Ollama/OpenRouter Free 模型选择有限)**
  - **特点**：deepseek-v4-pro/glm-5.1/glm-4.7/deepseek-v4-flash/minimax-m2.7 等开源模型，速率限制 Up to 40 rpm 速度无保证，不限量免费使用 [点此直达](https://build.nvidia.com/) 
  - **劣势**：无稳定性保证，首Token时间通常较高，速度因模型而异，部分模型为量化版本，注意甄别，免费不可持续

- 💰 **按用量计费首选：`DeepSeek V4 Flash`**
  - **特点**：在认可该模型效果前提下，性价比最高模型，同等 Token 用量下，DeepSeek V4 Flash 的按量计费比大部分 Coding Plan 都便宜。速度稳定在 50 TPS 以上，1M 上下文，缓存读 1/100 的价格领先业界 1/10 一代，百万 Token 输入 1 元，输出 2 元，1 亿 Token 约 9 元（输入输出比 115:1 情况下）；DeepSeek V4 Pro 2026/05/31 23:59 之前 2.5 折，折后相当于 DeepSeek V4 Flash 的三倍价格，也非常划算。
  - **劣势**：不支持多模态

- 🏆 **养龙虾性价比推荐：`MiniMax Coding Plan Plus` (￥49/月)**
  - **特点**：目前最实惠、额度限制最小、倍率最高的 Coding Plan（综合成本效果来说我还是会优先考虑 DeepSeek V4 Flash 按量计费），套餐包含 TTS 和图像生成（个人 ￥29 Starter 够用，但没有 TTS 和图像生成）
  - **劣势**：MiniMax M2.7 和 GLM 5.1 一样，并不是多模态模型，只支持文本输入
  
- 👥 **团队综合使用推荐：`Kimi Code Allegretto` (￥199/月)**
  - **特点**：支持多模态（图像输入），模型代码能力更优，较高强度的日常开发够用，送专属龙虾；如果团队使用量增加，可多买几个 ￥199 套餐，或升级至 ￥699 套餐（不如买 3 个 ￥199 套餐划算），不需要抢
  - **劣势**：¥49 套餐毫无性价比，¥199 套餐倍率也一般，最近算力紧张，TPS 大幅下降，升级 kimi-k2.6 后不太稳定容易死循环（有待观察）

- 💻 **团队开发推荐：`GLM Coding Plan Pro` (￥149/月)**
  - **特点**：模型代码能力国内最强
  - **劣势**：GLM 5.1 不支持多模态，¥49 套餐毫无性价比，¥149 套餐倍率也较差，算力紧缺，429 错误更频繁，同时也很难抢到

- 🇺🇸 **海外版 Coding ChatGPT Plus/Claude Pro 之外性价比较高的选择：`Ollama Pro` ($20/月)、`OpenCode Go` ($10/月)**
  - **特点**：Ollama Pro 倍率大约为 10，OpenCode Go 倍率大约为 6，含大部分顶级开源模型，值得一试
  - **劣势**：模型和倍率均不如 ChatGPT Plus/Claude Pro
---

## 📊 数据对比 (TL;DR)

| 厂商                             | 价格(mo)      | 官方说明   | TPS  | 模型请求数/Tokens(5h) | 额度价值(5h)   | 额度倍率(5h) | 模型请求数/Tokens(w) | 额度价值(w)    | 额度倍率(w) | 模型请求数/Tokens(mo) | 额度价值(mo)     | 额度倍率(mo)  |
|--------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|---------|-----------|---------|--------|-----------|--------|--------|-------------|---------|
| [Claude Pro](https://claude.ai/upgrade) (Claude Code claude-opus-4.7)       |  $20.00（AppStore尼日利亚~$11.09)   | 2026-5-6 后额度翻倍  | /    | 411/2298万     |  $18.39   | 0.92    | 1868/1.04亿  |  $83.59  |  4.18  | 7472/4.16亿  |  $334.36       | 16.7   |
| [ChatGPT Plus](https://chatgpt.com/pricing) (Codex gpt-5.4)           |  $20.00（AppStore土耳其~$11.14）| 45-225 Local Messages* / 5h<br/>US$100 /月 级用户享有双倍 Codex 配额，优惠活动持续至 2026 年 5 月 31 日 | /    | 490/2000万    |  $11.85   | 0.59    | 3062/1.2亿   |  $74   | 3.7   | 12250/4.8亿  |  $296       | 14.8   |
| [Ollama Free](https://ollama.com/pricing) (glm-4.7) |  免费   |   glm-4.7/minimax-m2.7/qwen3.5<br/>预估价值按93%的缓存命中率修正 |  /   |  49/217万   |  $0.38   |  /   |  128/556万  |  $0.99   |  /  |  512/2224万 |    $3.96     |  Ollama Pro $20 大约 10 倍额度  |
| [OpenCode Go](https://opencode.ai/go) |   $10.00 (首月 $5)  | 包含 GLM-5.1, Kimi K2.6, MiMo-V2.5-Pro, DeepSeek V4 Pro, Qwen3.6 Plus 和 MiniMax M2.7 等 | / |   /  |  $12   |  1.2   |  /  |  $30   |  3  |  / |    $60     |  6  |
| [OpenRouter](https://openrouter.ai) |  部分模型限免 50 reqs/day   |  hy3-preview/minimax-m2.5/qwen3-coder 等模型限免  |      |         |           |     |        |           |      |     |             |     |
| [NVIDIA NIM](https://build.nvidia.com) (glm-4.7) |  免费   |   deepseek-v4-pro/glm-5.1/glm-4.7/deepseek-v4-flash/minimax-m2.7 等开源模型 Up to 40 rpm 不限量使用  |      |         |           |     |        |           |      |     |             |     |
| [MiniMax Coding Plan Plus](https://platform.minimaxi.com/subscribe/token-plan) （minimax-m2.7）      |  ￥49.00   | 1500次模型调用 / 5 小时 | 52.6 | 1360/6000万    |  ￥108.60  | 2.22    | 13600/6亿      | ￥1086         | 22.2     | 54400/24亿   |  ￥4344 |   88.65|
| [Kimi Code Andante](https://www.kimi.com/membership/pricing) （kimi-k2.5）             |  ￥49.00   | Kimi Code 可调用| 27.98| 359/1500万     |  ￥21.46   | 0.44    | 639/2100万    |  ￥30.34   | 0.62   | 2556/8400万   |  ￥121.36    | 2.48    |
| [Kimi Code Allegretto](https://www.kimi.com/membership/pricing)（kimi-k2.5）           |  ￥199.00  | Kimi Code 20 倍额度  |  27.98   |  1307/6500万       |    ￥89.67       |    0.45     | 9073/3.57亿   |  ￥492.00  | 2.47   | 36292/14.28亿  |  ￥1,968.00  | 9.89    |
| [阿里云 Coding Plan Lite 基础套餐](https://www.aliyun.com/benefit/scene/codingplan)（已下线, qwen-3.5-plus） |  ￥40.00   | 每月请求额度至高 18,000 次<br/>最多 1,200 次/每 5 小时<br/>最多 9,000 次/每周<br/>最多 18,000 次/每月 | 52.5 | 1179/4000万    |  ￥52.83   | 1.32    | 8842/3亿   |  ￥396.00  | 9.90   | 17684/6亿  |  ￥792.00    | 19.80   |
| [火山方舟 Coding Plan Lite](https://www.volcengine.com/activity/codingplan)（doubao-seed-2.0-pro）            |  ￥40.00   | 数倍于 Claude Pro plan 的用量 | 86.6 | 148/1000万     |  ￥19.00   | 0.48    | 1138/7500万   |  ￥146.00  | 3.65   | 6275/3.2亿   |  ￥607.00    | 15.18   |
| [GLM Coding Plan Lite](https://bigmodel.cn/glm-coding)（使用海外版订阅测试 glm-5.1）|  ￥49.00   | 3x Claude Pro 用量额度<br/>每 5 小时限额  最多约 80 次 prompts<br/>每周限额 最多约 400 次 prompts |   26.8   |    90/600万     |    ￥11.66       |  0.24   |      600/3200万  |     ￥62.19      |  1.27    |   2400/1.28亿   |       ￥248.76      |   5.08  |
| [GLM Coding Plan Pro](https://bigmodel.cn/glm-coding)（glm-5.1）|  ￥149.00   | 5x Lite 用量额度<br/>最多约 400 次 prompts<br/>最多约 2000 次 prompts |   26.8   |    450/3000万     |    ￥58.3       |  0.39   |      3000/1.6亿  |     ￥310.95      |   2.09   |   12000/6.4亿   |       ￥1243.8      |   8.35  |
| [Fireworks Fire Pass](https://app.fireworks.ai/fire-pass)（kimi-k2.5-turbo）|  $7/w*4   |   with no per-token charges for kimi-k2.5-turbo  |      |         |           |     |        |           |      |     |             |     |
| [Xiaomi MiMo Token Plan Pro](https://platform.xiaomimimo.com/#/token-plan) (mimo-v2.5-pro)|  ￥329.00   | 700,000,000 Credits 套餐月总量<br/>MiMo-V2.5-Pro 256k 上下文： 2x（消耗 1 Token = 2 Credits） |   46.7   |         |          |    |        |           |      |   3.5亿   |      ￥596       |  2.2   |


## 模型参数数据

本测试通过输入约 1 万字的长文本提示词（其中中文占比约 80%）来衡量各模型分词器的性能。
我们以 gpt-5.4 作为 100% 基准，数值越低，代表该模型的分词压缩率越高，在处理长文本时具有更明显的成本优势和响应速度优势。

| 模型 | 发布时间 | 参数量 | 权重大小 (GB) | 上下文长度 | Token 消耗比例 | 满血版最低 GPU 要求 |
| :--- |  :--- | :--- | :--- | :--- | ---: | :--- |
| kimi-k2.5🏞️ | 2026-01-27 | 1T A32B| 554.3 (INT4) |256K| 87.99% | <ul><li>4xB300 288G</li><li>8xB200 192G</li><li>8xH200 141G</li><li>8x昇腾 910C 128G</li><li>2x8xA100 80G</li></ul> |
| kimi-k2.6🏞️ |  2026-04-20 | 1T A32B| 554.3 (INT4) |256K| 87.99% | <ul><li>4xB300 288G</li><li>8xB200 192G</li><li>8xH200 141G</li><li>8x昇腾 910C 128G</li><li>2x8xA100 80G</li></ul> |
| minimax-m2.7 | 2026-03-18 | 230B A10B | 447.8 | 200K| 89.23% | <ul><li>8xA100 80G</li><li>4xH200 141G</li></ul>  |
| hy3 | 2026-04-23 | 295B A21B | 556.5 | 256K | 92.22% | <ul><li>8xA100 80G</li><li>8x昇腾 910C 128G</li></ul> |
| gemini-3.1-pro-preview🏞️ | 2026-02-19 | ~3T | | 1M | 92.73% | |
| grok-4.20🏞️ | 2026-02-17 | ~500B | | 2M | 94.36% | |
| grok-4.3🏞️ | 2026-04-30 | ~500B | | 1M | 94.36% | |
| deepseek-v3.2 | 2025-12-01 | 685B A37B | 1276.7 | 128K | 95.30% |  |
| deepseek-v4-flash | 2026-04-24 | 284B A13B | 148.6 (FP4) | 1M | 95.30% | <ul><li>1xB300 288G</li><li>2xB200 192G</li><li>2x昇腾 950PR 128G</li><li>4xH100[FP8] 80G</li><li>8xA100[FP16] 80G</li></ul> |
| deepseek-v4-pro | 2026-04-24 | 1.6T A49B | 805.3 (FP4) | 1M | 95.30% | <ul><li>4xB300 288G</li><li>8xB200 192G</li><li>8x昇腾 950PR 128G</li><li>2x8xH200[FP8] 141G</li></ul> |
| glm-4.7 | 2025-12-23 | 355B A32B| 333.7 (FP8) | 200K | 95.93% | <ul><li>8xH100 80G</li><li>4xH200 141G</li><li>2x8xA100[FP16] 80G</li><li>8x昇腾 910C[FP16] 128G</li></ul> |
| glm-5.1 | 2026-04-08 | 744B A40B| 704.2 (FP8) | 200K | 95.93% | <ul><li>8xB200 192G</li><li>8xH200 141G</li><li>2x8xH100 80G</li></ul> |
| qwen-3.5🏞️ | 2026-02-16 | 397B A17B | 378.2 (FP8) | 1M | 95.97% | <ul><li>8xH100 80G</li><li>4xH200 141G</li><li>2x8xA100[FP16] 80G</li><li>8x昇腾 910C[FP16] 128G</li></ul> |
| qwen-3.6-plus🏞️ | 2026-04-02 | 397B A17B || 1M | 95.97% | |
| gpt-5.4🏞️ | 2026-03-05 | ~3T | |1.05M| 100.00% | |
| gpt-5.5🏞️ | 2026-04-24 |  | |1.05M| 100.00% | |
| mimo-v2.5🏞️ | 2026-04-22 | 310B A15B | 293.4 (FP8) | 1M | 101.18% |<ul><li>8xH100 80G</li><li>4xH200 141G</li><li>2x8xA100[FP16] 80G</li><li>8x昇腾 910C[FP16] 128G</li></ul> |
| mimo-v2.5-pro🏞️ | 2026-04-22 | 1T A42B | 962.4 (FP8)| 1M | 101.18% | <ul><li>8xB200 192G</li><li>8xH200 141G</li><li>2x8xH100 80G</li></ul> |
| doubao-seed-2.0-pro🏞️ |2026-02-14| | | 256K| 101.50% | |
| ⚠️claude-sonnet-4.6🏞️ |2026-02-17| ~1T | |1M| 152.86% | |
| ⚠️claude-opus-4.7🏞️ |2026-04-16|~5T | |1M| 166.75% | |
| ⚠️claude-haiku-4.5🏞️ | 2025-10-15 |||200K| 203.96% | |
| ⚠️claude-opus-4.6🏞️ |2026-02-05|~5T||1M| 203.96% | |

*注：🏞️表示属于多模态模型，同时支持文本和图像输入，⚠️表示中文 Tokenizer 压缩率较低*

## AI IDE/Plugin Plan

| 厂商                             | 价格(mo)      | 官方说明   | 备注 | 额度价值(mo)/Tokens     | 额度倍率(mo)  |
|--------------------------------|--------------|------|---------|-----------|---------|
| [Factory Droid Pro](https://factory.ai/pricing) |   $20.00  |   	20 million 	Standard Tokens (10 cached tokens = 1 Standard Token)   |    Usage-based    |     ~$48/~6000万 claude-opus-4.6     |  ~2.4   | 
| [Cursor Pro](https://cursor.com/pricing) |   $20.00  |   $20 of API usage each month<br/>Significantly more included usage when Auto or Composer 2 is selected   |    Usage-based    |      >=$20     |  >=1   | 
| [Windsurf Pro](https://windsurf.com/pricing) |   $20.00 (2 week free trial)  |   plan includes a usage allowance measured as a daily and weekly budget, daily quota is more than 1/7 of your weekly quota<br/>8-101 messages / day for Premium Model<br/>unlimited SWE-1.5      |   Quota-based     |           |     |         
| [Kiro Pro](https://kiro.dev/pricing) |   $20.00 (新注册首月免费，退出付款页丢失免费资格)  |   1,000 credits<br/>Pay-per-use overage ($0.04/credit)<br/>Get 500 bonus credits usable within 30 days when you first sign up    |    Task-based    |     $40.00      |   2  | 
| [Augment Code INDIE](https://www.augmentcode.com/pricing) |   $20.00  |   Includes 40,000 credits    |     Usage-based          |  $25.00   |   1.25     |             
| [Qoder Pro](https://qoder.com/pricing) |   $20.00（为期 2 周的 Pro 试用及 300 Credits）  | 2,000 Credits<br/>更多的对话与智能体请求数   |   Usage-based     |          |     |  
| [Antigravity in Google AI Pro](https://antigravity.google/pricing)<br/><br/>[Gemini Code Assist/Gemini CLI in Google AI Pro](https://codeassist.google/)  |   $19.99（Pixel 手机用户免费试用一年）  |   **Antigravity**<br/>High, generous quota, refreshed every five hours until weekly limit reached<br/>Higher weekly rate limit<br/>Free: 50 AI credits/d<br/>Google AI Plus $7.99: 200 AI credits/mo<br/>Google AI Pro $19.99: 1,000 AI credits/mo<br/>Google AI Ultra $249.99: 25,000 AI credits/mo<br/>Error: Our servers are experiencing high traffic right now, please try again in a minute 频繁，目前不建议购买<br/><br/>**Gemini Code Assist/Gemini CLI**<br/>Maximum requests per user per day<br/>Free: 1000/d<br/>Google AI Pro $19.99: 1500/d<br/>Google AI Ultra $249.99: 2000/d    |   Quota-based     |           |     |  
| [Kilo Pass Starter](https://kilo.ai/pricing) |   $19.00  |  Up to 40% bonus credits |   Usage-based     |     ~$26.6      |    1.4 |   
| [Trae Pro](https://www.trae.ai/pricing) |   $10.00 (Free for 7 days)  |   $20 Basic usage + Bonus usage<br/>Unlimited Autocomplete     |     Usage-based       |   $20.00 + 随机赠送 Bonus（有反馈收到 $130）  |    >2    |  
| [GitHub Copilot Pro](https://github.com/features/copilot/plans) |   $10.00<br/>Temporarilly unavailable  |   Users on a monthly Pro or Pro+ plan will automatically migrate to usage-based billing on June 1, 2026.    |   Usage-based     |   $10   |    1    |          
| [Zed Pro](https://zed.dev/pricing) |   $10.00  |    Unlimited edit predictions<br/>$5 of tokens included<br/>Usage-based billing beyond $5<br/>14-day free trial. No credit card required.    |   Usage-based     |     $5.00/440万 Claude Sonnet 4.6      |   0.5  | 
| [CodeBuddy 个人专业版](https://www.codebuddy.cn/pricing) |   ￥59.00  |    每月 2000 Credits（含体验版 500 Credits）    |     Usage-based       |    |        | 

---

*如果你也在做 Agent Harness 研究，可以关注我的另外一个项目 [Awesome Agent Harness](https://github.com/mahonzhan/awesome-agent-harness)*
