# 需求文档操作命令模板

> 复制以下块到新需求目录或会议纪要里使用。

## 1. 新建需求（最小闭环）

- 需求编号：`REQ-YYYYMM-xxx`
- 需求目录：`docs/requirements/01.draft/REQ-YYYYMM-xxx-<title>/`

```
[ ] 在 00.inbox 记录一句话需求（可选）
[ ] 移动到 01.draft，新建需求目录
[ ] 创建 PRD.md
[ ] 创建 AC.md（验收标准）
[ ] 补齐：背景/目标/范围/非目标/里程碑/风险
```

## 2. 状态流转（目录移动命令）

```
Draft      -> docs/requirements/01.draft/
Review     -> docs/requirements/02.review/
Approved   -> docs/requirements/03.approved/
Delivered  -> docs/requirements/04.delivered/
Archived   -> docs/requirements/05.archived/
```

执行规则：

```
[ ] 每次状态变化，只做“移动目录 + 变更记录”两件事
[ ] 所有补充材料（图/文件）统一放到 99.assets 并按需求编号分目录
```

## 3. 变更记录（写入 CHANGELOG.md 的块）

复制粘贴：

```
## YYYY-MM-DD
- Type: scope|schedule|ux|tech|data|risk
- Summary: 
- Reason: 
- Impact:
  - Timeline:
  - Cost:
  - Risk:
- Decision:
- Owner:
```

## 4. 评审记录（写入 PRD.md 或 MEETING_NOTES.md 的块）

复制粘贴：

```
## 评审记录 YYYY-MM-DD
- Attendees:
- Decision: pass|revise|reject
- Notes:
- Action Items:
  - [ ] (Owner) item
```

## 5. 验收标准（AC.md 模板块）

```
# 验收标准（AC）

## Must
- [ ] 

## Should
- [ ] 

## Could
- [ ] 

## Out of Scope
- [ ] 

## 验收说明
- 数据口径：
- 埋点/日志：
- 回滚方案：
```

## 6. 附件与图片命名（强约束，便于检索）

```
images/REQ-YYYYMM-xxx/
  - REQ-YYYYMM-xxx-ui-001.png
  - REQ-YYYYMM-xxx-flow-001.png
files/REQ-YYYYMM-xxx/
  - REQ-YYYYMM-xxx-prototype-001.fig
  - REQ-YYYYMM-xxx-data-001.xlsx
```

## 7. 交付清单（Delivered 阶段检查）

```
[ ] PRD 最终版本已定稿
[ ] AC 已对齐并标记完成/未完成项
[ ] 关键截图/原型已归档到 99.assets
[ ] CHANGELOG 已补齐所有关键变更
[ ] 上线/交付链接（如有）已记录
[ ] 回滚策略与风险说明已记录
```
