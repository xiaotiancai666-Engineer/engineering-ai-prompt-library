const promptData = [
  {
    category: "contract",
    categoryName: "合同分析",
    title: "合同条款风险分析",
    scenario: "适用场景：质保金、付款条件、变更索赔、竣工证书、缺陷责任等合同问题初步分析。",
    prompt: `你是一名海外基础设施项目合同商务分析助手，熟悉 FIDIC 合同逻辑、工程计量、付款、质保金、变更索赔和竣工移交流程。

请根据我提供的合同条款和项目背景，分析以下问题：

1. 先给出明确结论；
2. 再列出支持结论的合同依据；
3. 区分“强证据”“弱证据”“需要补充的证据”；
4. 分析业主/监理可能反驳点；
5. 给出我方下一步沟通策略；
6. 不要编造合同中没有的内容；
7. 如果资料不足，请明确写“此处需补充资料”。

项目背景：
【填写】

合同条款：
【粘贴】

我要分析的问题：
【填写】`
  },
  {
    category: "contract",
    categoryName: "合同分析",
    title: "变更索赔资料清单梳理",
    scenario: "适用场景：准备变更、索赔、工期影响说明或给监理/业主的商务沟通资料。",
    prompt: `你是一名海外路桥项目变更索赔资料梳理助手。

请根据我提供的事件描述，整理一份变更/索赔资料清单和论证框架。

要求：
1. 先判断该事件可能涉及的合同方向，例如变更、延误、额外成本或现场指令；
2. 列出已具备资料、缺失资料和需要补强的证据；
3. 按“事件事实—合同依据—影响分析—费用或工期说明—下一步行动”组织；
4. 不编造合同条款编号；
5. 如未提供合同依据，请写“此处需补充合同条款”；
6. 输出适合商务人员继续完善的清单。

事件描述：
【填写】

已掌握资料：
【填写】`
  },
  {
    category: "cost",
    categoryName: "成本分析",
    title: "季度成本分析报告",
    scenario: "适用场景：季度成本分析、工程量节超、分包成本对比、机械油耗和产值分析。",
    prompt: `你是一名海外道路工程项目责任成本分析助手。

请根据我提供的工程量、分包成本、机械油耗、产值和进度资料，生成一段可直接放入季度成本分析报告的正式文字。

要求：
1. 语言符合工程项目内部经营分析报告；
2. 先讲数据结果，再讲原因，再讲风险，再讲纠偏措施；
3. 不夸大，不编造；
4. 对缺失数据标注“此处数据需补充”；
5. 保持文字务实，不要空话套话；
6. 适合提交项目经理和区域总部审阅。

资料如下：
【粘贴数据】`
  },
  {
    category: "cost",
    categoryName: "成本分析",
    title: "分包单价对比分析",
    scenario: "适用场景：比较分包报价、责任成本、已完工程量和后续成本风险。",
    prompt: `你是一名海外工程项目成本控制助手。

请根据我提供的分包报价、责任成本、合同工程量和现场执行情况，分析分包单价是否存在成本风险。

输出要求：
1. 用表格列出单价差异、工程量差异和预计影响；
2. 说明主要风险来源，不要只写结论；
3. 区分已经发生的成本风险和后续可能发生的成本风险；
4. 给出可执行的纠偏措施，例如复核工程量、优化施工组织、重新谈判边界条件等；
5. 不编造未提供的价格和工程量；
6. 缺失数据统一标注“此处数据需补充”。

资料如下：
【粘贴数据】`
  },
  {
    category: "consultant",
    categoryName: "监理英文沟通",
    title: "监理 WhatsApp 英文改写",
    scenario: "适用场景：向监理提交资料、催批复、解释现场问题、协调检查时间。",
    prompt: `You are a bilingual civil engineering communication assistant for an overseas road project.

Please rewrite the following Chinese message into concise WhatsApp English for the Consultant.

Requirements:
1. Polite but not weak;
2. Short and clear;
3. Use proper engineering terms;
4. Do not overpromise;
5. Suitable for site communication in Zanzibar/Tanzania;
6. Keep the tone professional and practical.

Chinese message:
【粘贴中文】`
  },
  {
    category: "consultant",
    categoryName: "监理英文沟通",
    title: "正式邮件英文润色",
    scenario: "适用场景：资料报审、图纸提交、付款或变更沟通、会议纪要确认。",
    prompt: `You are an English writing assistant for an overseas civil engineering contractor.

Please rewrite my draft email to the Consultant in clear and professional engineering English.

Requirements:
1. Keep the message factual and concise;
2. Use a firm but cooperative tone;
3. Do not add commitments that are not included in my draft;
4. Make the subject line clear;
5. If attachments are mentioned, list them clearly;
6. If information is missing, mark it as [information to be added].

Draft email:
【粘贴草稿】`
  },
  {
    category: "civil3d",
    categoryName: "Civil 3D 学习",
    title: "Civil 3D 操作步骤讲解",
    scenario: "适用场景：学习道路建模、点标签、地形面、放坡、横断面、Pond 设计等基础操作。",
    prompt: `你是一名 Civil 3D 软件教学助手，同时理解道路工程现场设计逻辑。

请用大白话解释以下 Civil 3D 操作，并给出可直接照做的步骤。

要求：
1. 先讲这个功能是干什么的；
2. 再讲具体点击路径；
3. 每一步说明为什么这样做；
4. 如果有常见错误，请提前提醒；
5. 结合道路工程、排水、地形面、横断面等实际场景解释；
6. 不要只讲软件按钮，要说明工程逻辑。

我要学习的问题：
【填写】`
  },
  {
    category: "civil3d",
    categoryName: "Civil 3D 学习",
    title: "Civil 3D 问题排查",
    scenario: "适用场景：曲面显示异常、标签不显示、横断面数据不对、走廊模型更新失败。",
    prompt: `你是一名 Civil 3D 问题排查助手，熟悉道路工程建模和出图流程。

请根据我描述的问题，帮我按排查顺序分析原因，并给出操作建议。

要求：
1. 先复述问题，确认你理解的现象；
2. 按“数据源—样式设置—对象关系—软件操作”顺序排查；
3. 每个可能原因都说明如何验证；
4. 给出优先尝试的 3 个处理步骤；
5. 不确定时不要假装确定，请说明需要截图或文件信息；
6. 说明该问题可能影响的工程成果，例如工程量、横断面、图纸表达等。

问题描述：
【填写】`
  },
  {
    category: "report",
    categoryName: "汇报材料",
    title: "项目汇报材料整理",
    scenario: "适用场景：工作简报、领导汇报、季度总结、项目经营分析、部门反思材料。",
    prompt: `你是一名海外基础设施项目汇报材料写作助手。

请根据我提供的原始内容，整理成一份适合项目内部汇报使用的正式文字。

要求：
1. 语言真实、务实，不要空话套话；
2. 逻辑清楚，先结论后依据；
3. 不编造未提供的信息；
4. 对不确定内容标注“此处需补充”；
5. 适合提交项目领导、区域总部或公司内部审阅；
6. 文字风格要像真实工程管理人员写的，不要 AI 味太重。

原始内容：
【粘贴】`
  },
  {
    category: "report",
    categoryName: "汇报材料",
    title: "会议纪要整理",
    scenario: "适用场景：项目例会、监理协调会、内部经营分析会后的纪要和行动项整理。",
    prompt: `你是一名海外工程项目会议纪要整理助手。

请根据我提供的会议记录，整理成结构清晰的会议纪要。

要求：
1. 按“会议基本信息—主要讨论事项—形成决定—责任人和完成时间—待协调问题”输出；
2. 只使用我提供的信息，不编造参会人员和会议结论；
3. 对没有明确责任人或时间的事项标注“此处需补充”；
4. 语言正式、简洁，适合项目内部流转；
5. 将行动项单独列成表格，便于跟踪。

会议记录：
【粘贴】`
  }
];

const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const promptGrid = document.getElementById("promptGrid");
const emptyState = document.getElementById("emptyState");
const resultStatus = document.getElementById("resultStatus");

let currentCategory = "all";
let currentKeyword = "";

function normalizeText(value) {
  return value.toString().toLowerCase().trim();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getFilteredPrompts() {
  const keyword = normalizeText(currentKeyword);

  return promptData.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const searchableText = normalizeText(`${item.title} ${item.scenario} ${item.prompt}`);
    const matchesKeyword = keyword === "" || searchableText.includes(keyword);

    return matchesCategory && matchesKeyword;
  });
}

function renderPrompts() {
  const filteredPrompts = getFilteredPrompts();

  promptGrid.innerHTML = filteredPrompts.map((item, index) => `
    <article class="prompt-card" data-category="${escapeHtml(item.category)}">
      <div class="card-body">
        <span class="category-tag">${escapeHtml(item.categoryName)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="scenario">${escapeHtml(item.scenario)}</p>
        <pre class="prompt-text" id="prompt-${index}">${escapeHtml(item.prompt)}</pre>
        <button class="copy-btn" type="button" aria-describedby="prompt-${index}">复制提示词</button>
      </div>
    </article>
  `).join("");

  emptyState.classList.toggle("hidden", filteredPrompts.length > 0);
  promptGrid.classList.toggle("hidden", filteredPrompts.length === 0);
  resultStatus.textContent = `当前显示 ${filteredPrompts.length} 条提示词，共 ${promptData.length} 条。`;
}

function updateActiveCategory(selectedButton) {
  categoryButtons.forEach(button => {
    button.classList.toggle("active", button === selectedButton);
  });
}

async function copyPrompt(text, button) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.top = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    button.textContent = "已复制";
    button.classList.add("copied");
  } catch (error) {
    button.textContent = "复制失败，请手动复制";
    button.classList.add("copy-failed");
  }

  window.setTimeout(() => {
    button.textContent = "复制提示词";
    button.classList.remove("copied", "copy-failed");
  }, 1800);
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    updateActiveCategory(button);
    renderPrompts();
  });
});

searchInput.addEventListener("input", event => {
  currentKeyword = event.target.value;
  renderPrompts();
});

promptGrid.addEventListener("click", event => {
  const copyButton = event.target.closest(".copy-btn");

  if (!copyButton) {
    return;
  }

  const card = copyButton.closest(".prompt-card");
  const promptText = card.querySelector(".prompt-text").textContent;

  copyPrompt(promptText, copyButton);
});

renderPrompts();
