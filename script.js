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

const session2 = {
    title: "جلسه ۲: شرط ها و متغییر های منطقی True/False",
    description: "سوال‌های چندگزینه‌ای درباره متغیرهای منطقی، مقایسه‌ها و ساختار if/else در پایتون.",
    questions: [
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = "2"\nb = 2\nprint(a == b)',
            options: [
                "False",
                "True",
                "2 2",
                "خطای برنامه"
            ],
            correctIndex: 0,
            explanation: "متغیر a رشته \"2\" است و b عدد 2 است. چون نوع داده‌هایشان متفاوت است (یکی str و دیگری int)، مقایسه == نتیجه False می‌دهد."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "aa = 2\nbb = 2\nprint(aa == bb)",
            options: [
                "2",
                "False",
                "True",
                "4"
            ],
            correctIndex: 2,
            explanation: "عملگر == برابری دو مقدار را بررسی می‌کند. چون هر دو متغیر مقدار 2 دارند، نتیجه True خواهد بود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "d = 'True'\ne = 'False'\nprint(d + e)",
            options: [
                "True",
                "False",
                "TrueFalse", 
                "خطا"
            ],
            correctIndex: 2,
            explanation: "متغیر d رشته 'True' است و e رشته 'False' است. عملگر + بین رشته‌ها آن‌ها را به هم می‌چسباند، پس خروجی 'TrueFalse' خواهد بود."
        },
        {
            text: "اگر کاربر عدد 5 را وارد کند، خروجی کد زیر چیست؟",
            code: 'a = input("عدد وارد کنید:")\na = int(a)\nif a > 3:\n    print("بزرگ")\nelse:\n    print("کوچک")',
            options: [
                "کوچک",
                "بزرگ",
                "5",
                "خطا"
            ],
            correctIndex: 1,
            explanation: "کاربر 5 وارد می‌کند، با int() به عدد تبدیل می‌شود. چون 5 > 3 است، شرط if برقرار است و 'بزرگ' چاپ می‌شود."
        },
        {
            text: "اگر کاربر علامت '*' و اعداد 3 و 4 را وارد کند، خروجی چیست؟",
            code: 'a = int(input("عدد اول:"))\no = input("عملگر:")\nb = int(input("عدد دوم:"))\nif o == "*":\n    print(a * b)\nelif o == "+":\n    print(a + b)\nelse:\n    print("نامشخص")',
            options: [
                "12",
                "7",
                "نامشخص",
                "3*4"
            ],
            correctIndex: 0,
            explanation: "کاربر * وارد می‌کند که با شرط اول (o == '*') مطابقت دارد، پس a * b یعنی 3 * 4 = 12 چاپ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "x = 5\ny = 10\nprint(x < y)",
            options: [
                "False",
                "True",
                "5 10",
                "خطا"
            ],
            correctIndex: 1,
            explanation: "مقایسه x < y یعنی 5 < 10 که درست است، بنابراین نتیجه True خواهد بود."
        },
        {
            text: "اگر کاربر عدد 2 را وارد کند، خروجی کد زیر چیست؟",
            code: 'num = int(input("عدد:"))\nif num > 5:\n    print("A")\nelif num > 2:\n    print("B")\nelse:\n    print("C")',
            options: [
                "A",
                "B", 
                "C",
                "خطا"
            ],
            correctIndex: 2,
            explanation: "کاربر 2 وارد می‌کند. 2 > 5 نادرست است. 2 > 2 نیز نادرست است. پس به else می‌رود و 'C' چاپ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "result = true \nprint(result)",
            options: [
                "True",
                "False", 
                "TrueFalse",
                "خطای برنامه (Error)"
            ],
            correctIndex: 3,
            explanation: "در پایتون، مقادیر منطقی باید با حرف بزرگ نوشته شوند (True/False). چون true با حرف کوچک نوشته شده، پایتون آن را به عنوان متغیر تعریف نشده تشخیص می‌دهد و خطای NameError می‌دهد."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = "5"\nb = 5\nprint(a == b)',
            options: [
                "True",
                "False",
                "5",
                '"5"'
            ],
            correctIndex: 1,
            explanation: "متغیر a رشته \"5\" است و b عدد 5 است. چون نوع داده‌هایشان متفاوت است، مقایسه == نتیجه False می‌دهد."
        }
    ]
};

const session3 = {
    title: "جلسه ۳: ادامه شرط ها و متغییر های منطقی",
    description: "سوال‌های چندگزینه‌ای درباره عملگرهای منطقی، مقایسه‌های پیچیده‌تر و ساختارهای شرطی پیشرفته در پایتون.",
    questions: [
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = 5\nb = 3\nprint(a == b)',
            options: [
                "False",
                "True", 
                "5 3",
                "خطای برنامه"
            ],
            correctIndex: 0,
            explanation: "عملگر == برابری را بررسی می‌کند. چون 5 برابر با 3 نیست، نتیجه False خواهد بود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "x = 10\ny = 10\nprint(x >= y)",
            options: [
                "10",
                "False",
                "True",
                "20"
            ],
            correctIndex: 2,
            explanation: "عملگر >= بزرگتر یا مساوی بودن را بررسی می‌کند. چون 10 مساوی 10 است، شرط برقرار است و نتیجه True می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "result = True + \"False\" \nprint(result)",
            options: [
                "True",
                "False",
                "TrueFalse", 
                "خطا"
            ],
            correctIndex: 3,
            explanation: "در این کد، تلاش می‌کنیم یک عدد (True) را با یک رشته ('False') جمع کنیم که باعث خطا می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "flag = 1==2\nprint(flag)",
            options: [
                "False",
                "True",
                "1==2",
                "خطا"
            ],
            correctIndex: 0,
            explanation: "عبارت 1==2 برابر False است، چون 1 برابر 2 نیست."
        },
        {
            text: "اگر کاربر عدد 15 را وارد کند، خروجی کد زیر چیست؟",
            code: 'age = int(input("سن:"))\nif age < 13:\n    print("کودک")\nelif age < 20:\n    print("نوجوان")\nelif age < 60:\n    print("بزرگسال")\nelse:\n    print("سالمند")',
            options: [
                "کودک",
                "نوجوان", 
                "بزرگسال",
                "سالمند"
            ],
            correctIndex: 1,
            explanation: "کاربر 15 وارد می‌کند. 15 < 13 نادرست است. 15 < 20 درست است، پس شرط elif اول برقرار می‌شود و 'نوجوان' چاپ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'name = ""\nif name:\n    print("نام وارد شده")\nelse:\n    print("نام خالی")',
            options: [
                "نام وارد شده",
                "نام خالی",
                '""',
                "خطا"
            ],
            correctIndex: 1,
            explanation: "در پایتون، رشته خالی \"\" به عنوان False در نظر گرفته می‌شود. بنابراین شرط if برقرار نمی‌شود و 'نام خالی' چاپ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "score = 85\ngrade = 'A' if score >= 90 else 'B'\nprint(grade)",
            options: [
                "A",
                "B",
                "85",
                "خطا"
            ],
            correctIndex: 1,
            explanation: "این یک عبارت شرطی سه‌گانه (ternary) است. چون score (85) کمتر از 90 است، شرط نادرست است و مقدار 'B' به grade تخصیص داده می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: 'a = 0\nif a:\n    print("صفر نیست")\nelse:\n    print("صفر است")',
            options: [
                "صفر نیست",
                "صفر است",
                "0",
                "False"
            ],
            correctIndex: 1,
            explanation: "در پایتون، عدد صفر (0) به عنوان False در نظر گرفته می‌شود. بنابراین شرط if برقرار نمی‌شود و 'صفر است' چاپ می‌شود."
        }
    ]
};

const session4 = {
    title: "جلسه ۴: حلقه for",
    description: "سوال‌های چندگزینه‌ای درباره حلقه for و تابع range در پایتون.",
    questions: [
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "for i in range(3):\n    print(i)",
            options: [
                "0 1 2",
                "1 2 3", 
                "0 1 2 3",
                "1 2"
            ],
            correctIndex: 0,
            explanation: "تابع range(3) اعداد 0, 1, 2 را تولید می‌کند. حلقه for روی این اعداد اجرا می‌شود و هر عدد چاپ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "for i in range(1, 4):\n    print(i)",
            options: [
                "1 2 3 4",
                "1 2 3",
                "0 1 2 3",
                "2 3 4"
            ],
            correctIndex: 1,
            explanation: "تابع range(1, 4) اعداد از 1 تا قبل از 4 را تولید می‌کند، یعنی 1, 2, 3."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "for i in range(0, 6, 2):\n    print(i)",
            options: [
                "0 2 4 6",
                "2 4 6",
                "0 2 4",
                "1 3 5"
            ],
            correctIndex: 2,
            explanation: "تابع range(0, 6, 2) از 0 شروع می‌شود، تا قبل از 6 ادامه دارد و با گام 2 پیش می‌رود: 0, 2, 4."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "count = 0\nfor i in range(3):\n    count = count + 1\nprint(count)",
            options: [
                "0",
                "3",
                "2",
                "4"
            ],
            correctIndex: 1,
            explanation: "حلقه 3 بار اجرا می‌شود (برای i=0, 1, 2). هر بار count یک واحد اضافه می‌شود، پس از 0 به 3 می‌رسد."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "for i in range(3, 0, -1):\n    print(i)",
            options: [
                "3 2 1 0",
                "3 2 1",
                "2 1 0",
                "1 0 -1"
            ],
            correctIndex: 1,
            explanation: "range(3, 0, -1) از 3 شروع می‌شود، تا قبل از 0 ادامه دارد و با گام -1 (معکوس) پیش می‌رود: 3, 2, 1."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "total = 0\nfor i in range(1, 4):\n    total = total + i\nprint(total)",
            options: [
                "6",
                "3",
                "4",
                "10"
            ],
            correctIndex: 0,
            explanation: "حلقه روی اعداد 1, 2, 3 اجرا می‌شود. total = 0+1+2+3 = 6."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "for i in range(5):\n    if i == 2:\n        break\n    print(i)",
            options: [
                "0 1 2",
                "0 1",
                "0 1 2 3 4",
                "2"
            ],
            correctIndex: 1,
            explanation: "وقتی i برابر 2 شود، دستور break اجرا شده و حلقه متوقف می‌شود. فقط 0 و 1 چاپ می‌شوند."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "for i in range(3):\n    if i == 1:\n        continue\n    print(i)",
            options: [
                "0 1 2",
                "0 2",
                "1 2",
                "0 1"
            ],
            correctIndex: 1,
            explanation: "وقتی i برابر 1 شود، continue باعث می‌شود به تکرار بعدی برویم و print(i) اجرا نشود. پس فقط 0 و 2 چاپ می‌شوند."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "text = ''\nfor i in range(3):\n    text = text + 'a'\nprint(text)",
            options: [
                "a",
                "aaa",
                "aa",
                "''"
            ],
            correctIndex: 1,
            explanation: "حلقه 3 بار اجرا می‌شود و هر بار یک 'a' به text اضافه می‌شود. نتیجه نهایی 'aaa' است."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "numbers = [10, 20, 30]\ntotal = 0\nfor num in numbers:\n    total = total + num\nprint(total)",
            options: [
                "10",
                "20",
                "60",
                "30"
            ],
            correctIndex: 2,
            explanation: "حلقه روی لیست numbers اجرا می‌شود و تمام اعداد جمع می‌شوند: 10 + 20 + 30 = 60."
        }
    ]
};

const session5 = {
    title: "جلسه ۵: لیست‌ها (Lists)",
    description: "سوال‌های چندگزینه‌ای درباره کار با لیست‌ها در پایتون.",
    questions: [
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "numbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)",
            options: [
                "[1, 2, 3]",
                "[1, 2, 3, 4]",
                "[4, 1, 2, 3]",
                "[1, 4, 2, 3]"
            ],
            correctIndex: 1,
            explanation: "متد append یک عنصر به انتهای لیست اضافه می‌کند. لیست از [1, 2, 3] به [1, 2, 3, 4] تبدیل می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "fruits = ['apple', 'banana']\nfruits.insert(1, 'orange')\nprint(fruits)",
            options: [
                "['apple', 'banana', 'orange']",
                "['apple', 'orange', 'banana']",
                "['orange', 'apple', 'banana']",
                "['banana', 'orange', 'apple']"
            ],
            correctIndex: 1,
            explanation: "متد insert در ایندکس 1 (موقعیت دوم) عنصر 'orange' را插入 می‌کند. پس لیست به ['apple', 'orange', 'banana'] تبدیل می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "numbers = [10, 20, 30, 40]\nnumbers.remove(20)\nprint(numbers)",
            options: [
                "[10, 30, 40]",
                "[20, 30, 40]",
                "[10, 20, 40]",
                "[10, 20, 30]"
            ],
            correctIndex: 0,
            explanation: "متد remove اولین عنصری که با مقدار داده شده مطابقت دارد را حذف می‌کند. عنصر 20 حذف شده و لیست به [10, 30, 40] تبدیل می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "colors = ['red', 'green', 'blue']\nresult = colors.pop(1)\nprint(result)",
            options: [
                "'red'",
                "'green'",
                "'blue'",
                "['red', 'blue']"
            ],
            correctIndex: 1,
            explanation: "متد pop عنصر در ایندکس 1 را برمی‌گرداند و حذف می‌کند. عنصر در ایندکس 1 'green' است که چاپ می‌شود."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "numbers = [5, 10, 15]\nprint(numbers[1])",
            options: [
                "5",
                "10",
                "15",
                "خطا"
            ],
            correctIndex: 1,
            explanation: "ایندکس‌ها در پایتون از 0 شروع می‌شوند. numbers[1] عنصر دوم لیست را برمی‌گرداند که 10 است."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "items = []\nitems.append('a')\nitems.append('b')\nprint(items)",
            options: [
                "[]",
                "['a']",
                "['a', 'b']",
                "['b', 'a']"
            ],
            correctIndex: 2,
            explanation: "لیست خالی با دو عنصر 'a' و 'b' پر می‌شود. نتیجه نهایی ['a', 'b'] است."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "numbers = [1, 2, 3, 4]\nnumbers[0] = 10\nprint(numbers[0])",
            options: [
                "1",
                "2",
                "10",
                "4"
            ],
            correctIndex: 2,
            explanation: "می‌توانیم با استفاده از ایندکس، مقدار یک عنصر را تغییر دهیم. numbers[0] = 10 عنصر اول را به 10 تغییر می‌دهد."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "fruits = ['apple', 'banana', 'orange']\nfor fruit in fruits:\n    print(fruit)",
            options: [
                "apple banana orange",
                "a b o",
                "['apple', 'banana', 'orange']",
                "apple"
            ],
            correctIndex: 0,
            explanation: "حلقه روی هر میوه اجرا می‌شود و هر میوه به طور کامل چاپ می‌شود: apple، banana، orange."
        }
    ]
};

const session6 = {
    title: "جلسه ۶: دیکشنری‌ها (Dictionaries)",
    description: "سوال‌های چندگزینه‌ای درباره کار با دیکشنری‌ها در پایتون.",
    questions: [
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "person = {'name': 'Ali', 'age': 20}\nprint(person['name'])",
            options: [
                "'Ali'",
                "'age'",
                "20",
                "خطا"
            ],
            correctIndex: 0,
            explanation: "برای دسترسی به مقدار یک دیکشنری، از کلید داخل براکت استفاده می‌کنیم. person['name'] مقدار 'Ali' را برمی‌گرداند."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "data = {}\ndata['city'] = 'Tehran'\nprint(data)",
            options: [
                "{}",
                "{'city': 'Tehran'}",
                "'Tehran'",
                "خطا"
            ],
            correctIndex: 1,
            explanation: "به دیکشنری خالی یک کلید-مقدار اضافه می‌شود و نتیجه {'city': 'Tehran'} است."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "person = {'name': 'Sara', 'age': 25}\nperson['age'] = 26\nprint(person['age'])",
            options: [
                "25",
                "26",
                "'age'",
                "'Sara'"
            ],
            correctIndex: 1,
            explanation: "می‌توانیم مقدار یک کلید موجود را با استفاده از همان کلید تغییر دهیم. سن از 25 به 26 تغییر می‌کند."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "scores = {'math': 90, 'science': 85}\nresult = scores.pop('math')\nprint(result)",
            options: [
                "90",
                "85",
                "'math'",
                "{'science': 85}"
            ],
            correctIndex: 0,
            explanation: "متد pop مقدار مربوط به کلید را برمی‌گرداند و آن کلید را از دیکشنری حذف می‌کند. مقدار 'math' برابر 90 است."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "person = {'name': 'Reza', 'city': 'Isfahan'}\ndel person['city']\nprint(person)",
            options: [
                "{'name': 'Reza'}",
                "{'city': 'Isfahan'}",
                "{'name': 'Reza', 'city': 'Isfahan'}",
                "'Reza'"
            ],
            correctIndex: 0,
            explanation: "دستور del کلید 'city' را از دیکشنری حذف می‌کند و فقط کلید 'name' باقی می‌ماند."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "data = {'a': 1, 'b': 2, 'c': 3}\nfor key in data:\n    print(key)",
            options: [
                "1 2 3",
                "a b c",
                "a=1 b=2 c=3",
                "['a', 'b', 'c']"
            ],
            correctIndex: 1,
            explanation: "حلقه for روی دیکشنری به طور پیش‌فرض روی کلیدها اجرا می‌شود، پس کلیدهای 'a'، 'b'، 'c' چاپ می‌شوند."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "person = {'name': 'Mina', 'age': 30}\nprint('age' in person)",
            options: [
                "True",
                "False",
                "30",
                "'age'"
            ],
            correctIndex: 0,
            explanation: "عملگر in بررسی می‌کند که آیا کلید در دیکشنری وجود دارد یا نه. چون 'age' یک کلید است، نتیجه True است."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "data = {'x': 10, 'y': 20}\nprint(data.get('x', 0))",
            options: [
                "10",
                "20",
                "0",
                "None"
            ],
            correctIndex: 0,
            explanation: "متد get مقدار کلید را برمی‌گرداند. چون 'x' وجود دارد، مقدار 10 برمی‌گردد."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "person = {}\nperson['name'] = 'Kamran'\nprint(person)",
            options: [
                "{}",
                "{'name': 'Kamran'}",
                "'Kamran'",
                "خطا"
            ],
            correctIndex: 1,
            explanation: "به دیکشنری خالی یک کلید-مقدار اضافه می‌شود و نتیجه {'name': 'Kamran'} است."
        },
        {
            text: "بعد از اجرای کد زیر چه چیزی چاپ می‌شود؟",
            code: "scores = {'math': 95, 'physics': 88}\nfor key, value in scores.items():\n    print(key, value)",
            options: [
                "math 95 physics 88",
                "95 88",
                "math physics",
                "['math', 'physics']"
            ],
            correctIndex: 0,
            explanation: "متد items() کلید و مقدار را برمی‌گرداند. حلقه هر جفت کلید-مقدار را چاپ می‌کند: math 95 و physics 88."
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
            } else if (sessionId === "2") {
                renderSession(session2);
            } else if (sessionId === "3") {
                renderSession(session3);
            } else if (sessionId === "4") {
                renderSession(session4);
            } else if (sessionId === "5") {
                renderSession(session5);
            } else if (sessionId === "6") {
                renderSession(session6);
            }
        });
    });
});
