// Draw.io 实时绘制脚本
// 模拟逐步绘制登录流程图的过程

class DrawioRealtimeDrawing {
    constructor() {
        this.currentStep = 0;
        this.steps = [];
        this.drawioWindow = null;
        this.initSteps();
    }
    
    initSteps() {
        // 定义绘制步骤
        this.steps = [
            {
                name: "创建用户参与者",
                action: "createActor",
                params: {
                    x: 80,
                    y: 80,
                    width: 20,
                    height: 600,
                    label: "用户",
                    color: "#dae8fc",
                    strokeColor: "#6c8ebf"
                }
            },
            {
                name: "创建前端边界",
                action: "createBoundary",
                params: {
                    x: 280,
                    y: 80,
                    width: 100,
                    height: 600,
                    label: "前端",
                    color: "#fff2cc",
                    strokeColor: "#d6b656"
                }
            },
            {
                name: "创建后端API边界",
                action: "createBoundary",
                params: {
                    x: 530,
                    y: 80,
                    width: 100,
                    height: 600,
                    label: "后端API",
                    color: "#e1d5e7",
                    strokeColor: "#9673a6"
                }
            },
            {
                name: "创建数据库边界",
                action: "createBoundary",
                params: {
                    x: 780,
                    y: 80,
                    width: 100,
                    height: 600,
                    label: "数据库",
                    color: "#d5e8d4",
                    strokeColor: "#82b366"
                }
            },
            {
                name: "绘制用户到前端的连接",
                action: "createConnection",
                params: {
                    from: "用户",
                    to: "前端",
                    label: "输入用户名和密码",
                    y: 160,
                    color: "#000000"
                }
            },
            {
                name: "绘制前端自调用",
                action: "createSelfCall",
                params: {
                    target: "前端",
                    label: "前端表单验证",
                    y: 200,
                    color: "#000000"
                }
            },
            {
                name: "绘制前端到后端的API调用",
                action: "createConnection",
                params: {
                    from: "前端",
                    to: "后端API",
                    label: "POST /api/login\\n{username, password}",
                    y: 240,
                    color: "#000000"
                }
            },
            {
                name: "绘制后端自调用验证",
                action: "createSelfCall",
                params: {
                    target: "后端API",
                    label: "验证用户名密码格式",
                    y: 280,
                    color: "#000000"
                }
            },
            {
                name: "绘制后端到数据库的查询",
                action: "createConnection",
                params: {
                    from: "后端API",
                    to: "数据库",
                    label: "SELECT * FROM users\\nWHERE username = ?",
                    y: 320,
                    color: "#000000"
                }
            },
            {
                name: "绘制数据库返回数据",
                action: "createReturnConnection",
                params: {
                    from: "数据库",
                    to: "后端API",
                    label: "返回用户信息",
                    y: 360,
                    color: "#000000",
                    dashed: true
                }
            },
            {
                name: "绘制密码验证（成功）",
                action: "createSelfCall",
                params: {
                    target: "后端API",
                    label: "密码加密比对\\n(bcrypt)",
                    y: 400,
                    color: "#82b366"
                }
            },
            {
                name: "生成JWT Token",
                action: "createSelfCall",
                params: {
                    target: "后端API",
                    label: "生成JWT Token",
                    y: 440,
                    color: "#82b366"
                }
            },
            {
                name: "返回Token给前端",
                action: "createReturnConnection",
                params: {
                    from: "后端API",
                    to: "前端",
                    label: "{success: true,\\ntoken: \\"jwt_token\\"}",
                    y: 480,
                    color: "#82b366",
                    dashed: true
                }
            },
            {
                name: "前端存储Token",
                action: "createSelfCall",
                params: {
                    target: "前端",
                    label: "存储Token到\\nlocalStorage",
                    y: 520,
                    color: "#000000"
                }
            },
            {
                name: "跳转到首页",
                action: "createReturnConnection",
                params: {
                    from: "前端",
                    to: "用户",
                    label: "跳转到首页",
                    y: 560,
                    color: "#4285f4",
                    dashed: true
                }
            }
        ];
    }
    
    // 打开Draw.io窗口
    openDrawio() {
        this.drawioWindow = window.open('http://127.0.0.1:6956', 'drawio', 'width=1200,height=800');
        
        // 等待Draw.io加载完成
        setTimeout(() => {
            this.startDrawing();
        }, 3000);
    }
    
    // 开始逐步绘制
    startDrawing() {
        this.drawNextStep();
    }
    
    // 绘制下一步
    drawNextStep() {
        if (this.currentStep >= this.steps.length) {
            console.log("绘制完成！");
            return;
        }
        
        const step = this.steps[this.currentStep];
        console.log(`正在绘制: ${step.name}`);
        
        // 模拟绘制延迟
        setTimeout(() => {
            this.executeStep(step);
            this.currentStep++;
            this.drawNextStep();
        }, 1500); // 每步间隔1.5秒
    }
    
    // 执行绘制步骤
    executeStep(step) {
        if (!this.drawioWindow || this.drawioWindow.closed) {
            console.error("Draw.io窗口已关闭");
            return;
        }
        
        try {
            // 这里需要与Draw.io的API交互
            // 由于Draw.io没有公开的JavaScript API，我们使用模拟的方式
            this.simulateDrawing(step);
        } catch (error) {
            console.error("绘制步骤失败:", error);
        }
    }
    
    // 模拟绘制过程
    simulateDrawing(step) {
        console.log(`✅ 完成: ${step.name}`);
        
        // 在实际实现中，这里会调用Draw.io的绘图API
        // 现在我们只是记录进度
        this.updateProgress(step.name);
    }
    
    // 更新进度显示
    updateProgress(stepName) {
        const progress = ((this.currentStep + 1) / this.steps.length) * 100;
        console.log(`进度: ${progress.toFixed(1)}% - ${stepName}`);
        
        // 如果有进度条元素，更新它
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        const progressText = document.getElementById('progress-text');
        if (progressText) {
            progressText.textContent = `正在绘制: ${stepName} (${progress.toFixed(1)}%)`;
        }
    }
    
    // 重置绘制
    reset() {
        this.currentStep = 0;
        console.log("绘制已重置");
    }
    
    // 暂停绘制
    pause() {
        this.isPaused = true;
        console.log("绘制已暂停");
    }
    
    // 继续绘制
    resume() {
        this.isPaused = false;
        console.log("继续绘制");
        this.drawNextStep();
    }
}

// 使用示例
const drawer = new DrawioRealtimeDrawing();

// 页面加载完成后自动开始
window.addEventListener('load', () => {
    console.log("准备开始实时绘制演示...");
    
    // 添加控制按钮
    const controls = document.createElement('div');
    controls.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); z-index: 1000;">
            <h3>🎨 实时绘制控制</h3>
            <button onclick="drawer.openDrawio()" style="background: #4285f4; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 5px;">开始绘制</button>
            <button onclick="drawer.reset()" style="background: #f44336; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 5px;">重置</button>
            <button onclick="drawer.pause()" style="background: #ff9800; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 5px;">暂停</button>
            <button onclick="drawer.resume()" style="background: #4caf50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 5px;">继续</button>
            <div style="margin-top: 10px;">
                <div style="background: #e0e0e0; height: 10px; border-radius: 5px; overflow: hidden;">
                    <div id="progress-bar" style="height: 100%; background: #4285f4; width: 0%; transition: width 0.5s;"></div>
                </div>
                <div id="progress-text" style="margin-top: 5px; font-size: 14px; color: #666;">准备开始...</div>
            </div>
        </div>
    `;
    document.body.appendChild(controls);
});

// 导出到全局
window.drawer = drawer;
