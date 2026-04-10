# OAuth2 Authorization Code Flow 时序图

```mermaid
sequenceDiagram
    participant U as User (Resource Owner)
    participant C as Client Application
    participant A as Authorization Server
    participant R as Resource Server

    Note over U,R: OAuth2 Authorization Code Flow

    %% Step 1: Authorization Request
    C->>U: 1. Redirect to Authorization Server
    Note right of C: /authorize?response_type=code&client_id=xxx&redirect_uri=xxx&scope=read&state=xyz

    %% Step 2: User Authentication
    U->>A: 2. User authenticates
    Note right of U: Login with username/password
    
    A->>U: 3. Show consent screen
    Note right of A: Request permission for client

    %% Step 3: Authorization Grant
    U->>A: 4. User approves access
    Note right of U: Click "Allow"

    A->>C: 5. Redirect with Authorization Code
    Note right of A: 302 Redirect to redirect_uri?code=AUTH_CODE&state=xyz

    %% Step 4: Token Exchange
    C->>A: 6. Exchange code for access token
    Note right of C: POST /token with code, client_id, client_secret

    A->>C: 7. Return Access Token
    Note right of A: {access_token, token_type, expires_in, refresh_token}

    %% Step 5: Access Protected Resource
    C->>R: 8. Request protected resource
    Note right of C: GET /api/resource with Authorization: Bearer TOKEN

    R->>A: 9. Validate token (optional)
    Note right of R: Token validation

    R->>C: 10. Return protected data
    Note right of R: JSON response with requested data

    %% Step 6: Token Refresh (optional)
    C->>A: 11. Refresh access token
    Note right of C: POST /token with refresh_token

    A->>C: 12. Return new access token
    Note right of A: {access_token, token_type, expires_in}

```

## OAuth2 流程说明

### 参与者
- **User (Resource Owner)**: 资源所有者，通常是最终用户
- **Client Application**: 客户端应用，需要访问用户资源
- **Authorization Server**: 授权服务器，负责认证和授权
- **Resource Server**: 资源服务器，存储受保护的资源

### 主要步骤

1. **授权请求**: 客户端将用户重定向到授权服务器
2. **用户认证**: 用户在授权服务器上进行身份验证
3. **授权同意**: 用户同意客户端访问其资源
4. **授权码返回**: 授权服务器返回授权码给客户端
5. **令牌交换**: 客户端使用授权码换取访问令牌
6. **资源访问**: 客户端使用访问令牌请求受保护资源
7. **令牌刷新**: 访问令牌过期时使用刷新令牌获取新令牌

### 安全特性
- 授权码是临时的，只能使用一次
- 访问令牌有时效性
- 客户端密钥用于验证客户端身份
- State参数防止CSRF攻击

### 使用方法
1. 将此Mermaid代码复制到支持Mermaid的编辑器中
2. 或使用在线Mermaid编辑器: https://mermaid.live
3. 或在GitHub/GitLab的Markdown文件中直接使用
4. 可以导入到Draw.io中进行进一步编辑
