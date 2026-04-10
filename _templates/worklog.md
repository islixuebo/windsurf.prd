生成提示词：主要是记录工作日志，填报工时，

1\请先运行这步，如果报错，说明token已经过期，需要重新登录
请求接口：https://rd-mokadisplay.tcl.com/srdpm-api/workload/platform
类型：post
请求头：
accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJsaXh1ZWJvIiwiVXNlck5hbWUiOiLmnY7pm6rms6IgWHVlYm8gTGkiLCJVc2VyTWFpbCI6ImxpeHVlYm9AdGNsLmNvbSIsIlB3ZCI6IjQzMDJiZjVlYjU3NjgzNDJkMTI3MWY0N2VlYjdiNWQzYTllNjdlNWIwYzdhNjIwNGZlMjk1OWVkMTUzNThmMDEiLCJUaWNrZXROYW1lIjoiU0lBTVRHVCIsIlRpY2tldFZhbHVlIjoiVEdULTM5MDIyNDctalJnNFhYYnk3TkpHQVVqYVhXUUNLUmJXaXRJMzFCSFRIZzQ1QmI3WnpzNTc0Nm94YlItU0lBTSIsImlzcyI6Ik1PS0EtUkQiLCJleHAiOjE3NzI4MjYwODksIm5iZiI6MTc3Mjc5NzI4OSwiaWF0IjoxNzcyNzk3Mjg5fQ.esWuxfIOnoXKtEoLdCbQJtIBxQ28jgBNrxC1mZQdVTQ
content-type: application/json
发送内容：{"customer_id":[1],"work_hours":"8","department_id":1,"transaction_id":62,"content":"需求会议","file_url":[],"submit_time":"2026-02-12","times":1}


2\登录 SRDPM，发送以下请求：
请求接口：https://rd-mokadisplay.tcl.com/connect/oauth2/authorize
类型：post
content-type: application/json
发送内容：{"username":"lixuebo","password":"6S=absinC/2"}

拿到结果，记录下 token
{
    "code": 200,
    "data": {
        "expire": 1772827266,
        "oa": {
            "ticketName": "SIAMTGT",
            "ticketValue": "TGT-3909475-tWwKuOSHuw9URa9twKeOmQz0yjn3xrMT95f5LTCRP1XdJFJelr-SIAM"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJsaXh1ZWJvIiwiVXNlck5hbWUiOiLmnY7pm6rms6IgWHVlYm8gTGkiLCJVc2VyTWFpbCI6ImxpeHVlYm9AdGNsLmNvbSIsIlB3ZCI6IjU2YzRlZTU0ZWJhZWVmODkzMGYzZDdmYjMxZDY2ZDQ1YTFhMjQyYzFhMjU5MDdhMGNlMGY3OGZhYWRlNDQyODUiLCJUaWNrZXROYW1lIjoiU0lBTVRHVCIsIlRpY2tldFZhbHVlIjoiVEdULTM5MDk0NzUtdFd3S3VPU0h1dzlVUmE5dHdLZU9tUXoweWpuM3hyTVQ5NWY1TFRDUlAxWGRKRkplbHItU0lBTSIsImlzcyI6Ik1PS0EtUkQiLCJleHAiOjE3NzI4MjcyNjYsIm5iZiI6MTc3Mjc5ODQ2NiwiaWF0IjoxNzcyNzk4NDY2fQ.583944bK57jgTlGJYtog9mjev5nWu8dS-zvCLjmO05w"
    },
    "msg": "OK"
}


用上面获取到的 token 替换掉第一步中的 accesstoken ，然后重新运行第一步的命令。

自动处理用户输入
自动解析用户提供的工作日志信息，格式为：`内容 时长 日期`

支持多种日期格式：
- `需求会议 8 2026-02-12` - 完整日期格式
- `需求会议 8 13` - 自动补全为 `2026-02-13`
- `需求会议 8 2-13` - 自动补全为 `2026-02-13`
- `需求会议 8.5 13` - 自动补全为 `2026-02-13`
- `需求会议 8.5 2-13` - 自动补全为 `2026-02-13`
- `代码开发 6` - 不提供日期则使用当天

### 4. 日期格式处理
自动处理用户输入的日期格式：
- 如果用户只输入数字（如 `13`），自动补全为当前月份的日期：`2026-02-13`
- 如果用户输入 `月-日` 格式（如 `2-13`），自动补全年份：`2026-02-13`
- 支持小数工时格式（如 `8.5`），保持原样不进行转换
- 如果用户未提供日期，使用当天日期（YYYY-MM-DD格式）
- 如果用户已提供完整日期，直接使用

特别注意，不要进行其他操作，请求直接发送，不用问题，有错误是