---
trigger: manual
---

# PRD Command Rules

## Command: `/prd`

### Description
Generate comprehensive PRD (Product Requirements Document) for SINE system modules using standardized template and workflow.

### Usage
Type `/prd` in chat to start PRD generation process.

### Workflow
1. **Initialization**: Confirm target module and collect basic requirements
2. **Information Gathering**: Ask structured questions if information is incomplete
3. **Document Generation**: Create PRD following standard template
4. **Quality Check**: Validate logic completeness and feasibility
5. **Output**: Save to `_draft/PRD/` directory

### Template Structure
- 1. 文档概述 (项目背景、用户价值、适用范围)
- 2. 业务流程图 (Mermaid泳道图)
- 3. 详细功能需求 (前置条件、页面交互、逻辑规则、后置操作)
- 4. 数据字典与字段定义
- 5. 异常流程与边界情况
- 6. 埋点与统计需求

### Quality Standards
- Logic completeness with no ambiguity
- Directly understandable by developers
- Testable by QA team
- Acceptable by product team

### Auto-completion Rules
Automatically supplement missing logic based on:
- ERP system standards
- Time management best practices
- Data security regulations
- UX standards

