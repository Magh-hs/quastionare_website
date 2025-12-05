const session1 = {
    title: "جلسه ۱: متغیرها و عملگرها",
    description: "سوال‌های چندگزینه‌ای درباره متغیرها و عملگرهای ساده در پایتون.",
    questions: [
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = "11"\nb = 2\nprint(a * b)',
            options: [
                '"22"',
                '"13"',
                '"1111"',
                "خطای برنامه (Error)"
            ],
            correctIndex: 2,
            explanation: "در پایتون وقتی یک رشته (مثل \"11\") را در یک عدد صحیح (۲) ضرب می‌کنیم، آن رشته به همان تعداد تکرار می‌شود. پس \"11\" دو بار تکرار می‌شود و خروجی \"1111\" است."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = "a"\na = a + "a"\nprint(a)',
            options: [
                '"a"',
                '"aa"',
                '"aaa"',
                '"a a"'
            ],
            correctIndex: 1,
            explanation: "در خط دوم مقدار متغیر a که \"a\" است با یک \"a\" دیگر جمع می‌شود (الحاق رشته‌ها)، بنابراین مقدار جدید a برابر \"aa\" می‌شود و همان چاپ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟ (فرض کنید از پایتون ۳ استفاده می‌کنیم)",
            code: "a = 3\nb = 6\nc = 2\nprint(a + b / c)",
            options: [
                "6",
                "4.5",
                "3.0",
                "6.0"
            ],
            correctIndex: 3,
            explanation: "در پایتون ۳ عمل تقسیم / همیشه نتیجهٔ اعشاری (float) می‌دهد. اول b / c یعنی ۶ / ۲ محاسبه می‌شود که ۳.۰ است، سپس با a که ۳ است جمع می‌شود و نتیجه ۶.۰ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = "2"\nb = "2"\nprint(a + b)',
            options: [
                "4",
                '"22"',
                '"4"',
                "خطا به‌خاطر نوع داده متفاوت"
            ],
            correctIndex: 1,
            explanation: "هر دو متغیر a و b رشته هستند (یکی با کوتیشن دوتایی و دیگری با کوتیشن تکی، اما هر دو رشته‌اند). عمل + روی رشته‌ها باعث چسباندن آن‌ها می‌شود، پس \"2\" و \"2\" کنار هم قرار می‌گیرند و خروجی \"22\" است."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = "a"\nb = a\nprint(a, b)',
            options: [
                "aa",
                "a",
                "a a",
                "b a"
            ],
            correctIndex: 2,
            explanation: "متغیر b همان مقدار a را می‌گیرد، یعنی \"a\". در تابع print وقتی چند مقدار را با ویرگول چاپ می‌کنیم، بین آن‌ها یک فاصله قرار داده می‌شود، بنابراین خروجی به صورت a و سپس فاصله و سپس a است: «a a»."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "a = 5\nb = 2\nprint(a * b)",
            options: [
                "7",
                "2.5",
                "خطا",
                "10"
            ],
            correctIndex: 3,
            explanation: "هر دو متغیر عدد صحیح هستند، بنابراین عمل ضرب عددی انجام می‌شود: ۵ ضربدر ۲ برابر ۱۰ است و همان چاپ می‌شود."
        },
        {
            text: "در پایتون ۳، خروجی کد زیر چیست؟",
            code: "a = 5\nb = 2\nprint(a / b)",
            options: [
                "2",
                "2.5",
                "3",
                "2.0"
            ],
            correctIndex: 1,
            explanation: "در پایتون ۳ عملگر / تقسیم معمولی را انجام می‌دهد و نتیجه اعشاری می‌دهد. ۵ / ۲ برابر ۲.۵ است، بنابراین خروجی ۲.۵ خواهد بود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = "3"\nb = 3\nprint(int(a) + b)',
            options: [
                '"33"',
                "خطا به‌خاطر نوع داده",
                "3",
                "6"
            ],
            correctIndex: 3,
            explanation: "a یک رشته است، ولی با int(a) آن را به عدد صحیح ۳ تبدیل می‌کنیم. سپس ۳ (از int(a)) با ۳ (از b) جمع می‌شود و نتیجه ۶ چاپ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "a = 1\na = a + 1\na = a + 2\nprint(a)",
            options: [
                "3",
                "4",
                "2",
                "1"
            ],
            correctIndex: 1,
            explanation: "ابتدا a برابر ۱ است. در خط دوم ۱ واحد اضافه می‌شود و a برابر ۲ می‌شود. در خط سوم ۲ واحد دیگر اضافه می‌شود و a برابر ۴ می‌شود. در نهایت ۴ چاپ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = "hi"\nb = "there"\nprint(a + " " + b)',
            options: [
                '"hi" "there"',
                '"hithere"',
                '"hi there"',
                '"HI There"'
            ],
            correctIndex: 2,
            explanation: "عملگر + بین رشته‌ها آن‌ها را به هم می‌چسباند. در این کد بین a و b یک رشتهٔ شامل یک فاصله \" \" قرار داده شده است، بنابراین خروجی دقیقاً \"hi there\" (با یک فاصله بین hi و there) است."
        }
    ]
};

function renderSession(sessionData) {
    const titleEl = document.getElementById("session-title");
    const container = document.getElementById("questions-container");

    titleEl.innerHTML = `
        <h2>${sessionData.title}</h2>
        <p>${sessionData.description}</p>
    `;

    container.innerHTML = "";

    sessionData.questions.forEach((q, index) => {
        const card = document.createElement("article");
        card.className = "question-card";

        const header = document.createElement("div");
        header.className = "question-header";
        header.innerHTML = `
            <span class="question-number">سوال ${index + 1}</span>
            <div class="question-text">${q.text}</div>
            <pre class="code-block">${q.code}</pre>
        `;

        const optionsList = document.createElement("ul");
        optionsList.className = "options-list";

        q.options.forEach((opt, optIndex) => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "option-btn";
            btn.textContent = opt;

            btn.addEventListener("click", () => {
                handleOptionClick(optionsList, btn, optIndex === q.correctIndex, q.explanation);
            });

            li.appendChild(btn);
            optionsList.appendChild(li);
        });

        const explanationDiv = document.createElement("div");
        explanationDiv.className = "explanation";
        explanationDiv.style.display = "none";

        card.appendChild(header);
        card.appendChild(optionsList);
        card.appendChild(explanationDiv);
        container.appendChild(card);
    });
}

function handleOptionClick(optionsListEl, clickedBtn, isCorrect, explanationText) {
    const allButtons = optionsListEl.querySelectorAll(".option-btn");
    allButtons.forEach(btn => {
        btn.classList.remove("correct", "incorrect");
    });

    const card = optionsListEl.closest(".question-card");
    const explanationDiv = card.querySelector(".explanation");

    if (isCorrect) {
        clickedBtn.classList.add("correct");
    } else {
        clickedBtn.classList.add("incorrect");
    }

    explanationDiv.textContent = explanationText;
    explanationDiv.style.display = "block";
}

// فقط جلسه ۱ فعال است

document.addEventListener("DOMContentLoaded", () => {
    renderSession(session1);

    const sessionButtons = document.querySelectorAll(".session-btn");
    sessionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("disabled")) return;
            sessionButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const sessionId = btn.dataset.session;
            if (sessionId === "1") {
                renderSession(session1);
            }
        });
    });
});
