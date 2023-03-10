
//let $ = document

// select Element product html
let productsContentImage = $.querySelector('.products-content__image')
let productsContentTitle = $.querySelector('.products-content__title')
let productsContentDescription = $.querySelector('.products-content__description')
let productsContentPrice = $.querySelector('.content__price')


// Save all information Product
let allProductCartArray = [
    {id: 1 , title:'پیراهن جین اسپرت'  , description:' پیراهن‌های جین یکی از محبوب‌ترین پیراهن‌ها در بین ایرانی‌ها هستند. این پیراهن‌ها را می‌توان برای انواع تیپ مردانه اسپرت و نیمه رسمی ست کرده و در فصول مختلف از آن استفاده کرد. اگر می‌خواهید برای ست کردن پیراهن جین به سراغ شلوارهای پارچه‌ای بروید، حتما علاوه بر رعایت اصول تناسب رنگ در لباس پوشیدن، به هماهنگی ضخامت شلوار و پیراهن نیز توجه کنید.' , image:'img/product-1.png' , price:499000 },
    {id: 2 , title:'شلوار راحتی '  , description:'شلوار راحتی یکی از پرکاربردترین شلوار در میان شلوار است که هم خانم ها و هم آقایان از آن استفاده می کنند ، همانطور که از اسم آن پیداست ، این شلوار برای راحتی بیشتر در خانه است . پارچه های مناسب لباس راحتی چه زنانه چه مردانه پارچه های نخی و الیاف طبیعی هستند چرا که این نوع پارچه ها احساس بهتری نسبت به پارچه های پلی استر و نایلونی به شما منتقل می کند.شما با داشتن یک دست ست لباس راحتی از جنس نخی(لیننی) یا نخ پنبه بسیار راحت تر خواهید بود، چون این پارچه ها آلرژی پوستی ایجاد نمی کند و هوا را بهتر رد و بدل می کند.' , image:'img/product-2.png' , price:249000 },
    {id: 3 , title:'شلوار کتان'  , description:' همه‌ی شما حتماً با پارچه‌های کتان آشنا هستید و در طول زندگی خود بارها و بارها لباس‌هایی از این جنس را خریداری کرده‌اید. برای مثال شلوارهای کتان به‌عنوان یکی از پرطرفدارترین شلوارها در بین افراد شناخته می‌شوند و همواره طرفداران بسیاری داشته‌اند. پارچه‌ی کتان یکی از قدیمی‌ترین پارچه‌ها برای تولید لباس است و استفاده از آن در کل دنیا، تاریخچه‌ای دیرینه دارد. حتی برخی تحقیقات نشان می‌دهند که قدیمی‌ترین لباس تولیدشده در جهان، از نوعی پارچه‌ی کتانی تهیه‌شده است و همین مسئله نشان از قدمت این نوع پارچه دارد.' , image:'img/product-3.png' , price:395000 },
    {id: 4 , title:'پیراهن مجلسی'  , description:'پیراهن مردانه یکی مهم‌ترین لباس‌های مردانه است که در استایل رسمی و نیمه رسمی نقش مهمی را ایفا می‌کند بنابراین هر مرد شیکپوشی باید اصول اولیه‌ای را درباره پیراهن مردانه و ویژگی‌ها خاص آن بداند تا بتواند بهترین پیراهن رسمی یا غیر رسمی را برای خود انتخاب کند. پیراهن مردانه قبل از هر چیزی باید کاملا اندازه شما باشد جالب است بدانید که در نیم قرن اخیر  پیراهن‌های مردانه از نوعی لباس زیر به یکی از بخش‌های ضروری استایل مردانه تبدیل شده‌اند. در گذشته این پیراهن‌ها رنگبندی خاصی نداشتند و فقط به رنگ سفید ساده یافت می‌شدند اما امروزه تنوع رنگ و طرح پیراهن‌های رسمی بسیار بیشتر شده است ' , image:'img/product-4.png' , price:239000 },
    {id: 5 , title:'شلوار لی'  , description:' شلوار لی مردانه تنوع کمتری نسبت به مدل‌های زنانه دارد اما انتخاب درستش، به همان اندازه روی خوش تیپی تاثیر می‌گذارد. برای اینکه بتوانید شلوار لی ایده‌آلتان را انتخاب کنید برایتان راهنمایی فراهم کرده‌ایم که موقع خرید به کارتان می‌آید. در این راهنما، مردان را بر اساس ریز جثه یا درشت بودن تقسیم‌بندی کرده‌ایم و توصیه‌های لازم را برایشان نوشته‌ایم.' , image:'img/product-5.png' , price:375000 },
    {id: 6 , title:'تی شرت'  , description:'با شنیدن نام تیشرت همه ی ما یک استایل راحت و غیر رسمی در تابستان را به یاد می آوریم. این لباس ها به قدری متداول اند و سابقه استفاده از آن ها چنان طولانی است که تقریبا همه آن را می شناسند.تیشرت به دلیل داشتن ظاهر راحت و اسپرت مورد توجه بسیاری از افراد قرار گرفته است. هم چنین طرح ها و رنگ های تیشرت ها متنوع است و از این نظر می¬تواند پاسخگوی انواع سلایق باشد. تیشرت های نخی مناسب فصول گرم سال هستند و به راحتی با شلوار لیست می شوند ' , image:'img/product-6.png' , price:225000 },
    {id: 7 , title:'بلوز کتان'  , description:'بلوز عنصری مهم و اصلی در پوشش و استایل دخترانه و زنانه محسوب می شود که با توجه به گوناگونی در مدل و طرح و ….. قابل استفاده در مکان و زمان های متفاوت می باشد. همین گوناگونی موجب شده تا هر خانمی با هر سلیقه ای بتواند بلوز مورد علاقه و ایده آل خود را انتخاب و به کار ببرد. یکی از گوناگونی های مهم در بلوز های زنانه، بلوز کتان و پیراهن مجلسی می باشد که از نوع راحتی چه بلند و چه کوتاه آن بیشتر در موقعیت های کمتر رسمی بهره گرفته و نوع مجلسی آن مناسب مکان های رسمی تر و نیاز به استایلی شیک است. بلوز های مجلسی برای عروسی ها، مهمانی ها و … مناسب هستند.' , image:'img/product-7.png' , price:200000 },
    {id: 8 , title:'بلوز نخی'  , description:'تاریخ استفاده انسان از لباس های نخی، به ۵۰۰۰سال پیش میرسد.  همه ما وقتی به یک لباس فروشی می رویم، برای خرید لباس دلخواهمان معیار هایی داریم. از قیمت کالا گرفته تا کیفیت پارچه و دوخت و جنس لباس. اما کمتر کسی وقتی میخواهد لباس بخرد به این توجه میکند که جنس الیاف پارچه چه تاثیراتی بر دمای بدن و یا سلامت پوست دارد. در این نوشته، میخواهیم لباس نخی، پوشاک محبوب ما در گرمای تابستان و یا روزهای سرسبز بهاری، را معرفی کنیمگفتنی است که اصلا چیزی به اسم لباس نخی وجود ندارد. جنس الیافی که ما به نام نخی از آن یاد میکنیم، در واقع همان الیاف پنبه ای است. همه لباس ها، لباس نخی هستند، اما این نخ از الیاف گوناگون تهیه می شود. به صورت کلی جنس الیاف پارچه به دو گونه قابل تقسیم است: الیاف طبیعی و الیاف مصنوعی. .' , image:'img/product-8.png' , price:499000 },
    {id: 9 , title:'کت شلوار زنانه'  , description:'کت و شلوار زنانه، انتخابی خاص در میان خانم‌ها و به خصوص بانوان شاغل، گزینه‌ای منحصر‌به‌فرد که اگر درست انتخاب شود، قطعا تاثیر بسزایی در تیپ و استایل شما خواهد داشت. اما باید بدانید که در انتخاب یک کت و شلوار زنانه نکات بسیار مهمی را باید مدنظر قرار دهید که از جمله مهم‌ترین آنها می‌توان به: رنگ، طرح دوخت و… اشاره داشت؛ در این میان مهم‌ترین فاکتوری که برای خرید کت زنانه باید به آن توجه داشته باشید، احساس راحتی است…! در واقع بسیار مهم خواهد بود که بدن شما در لباس راحت باشد.' , image:'img/product-9.png' , price:500000 },
    {id: 10 , title:'ساعت کلاسیک مردانه'  , description:'یکی از انواع ساعت های مچی مردانه که آقایان، هم می‌توانند آن را با کت و شلوار ست کنند و هم با استایل‌های نیمه رسمی و غیر رسمی، ساعت مچی کلاسیک است که از نظر برند، شکل قاب، طرح بند، نوع موتور و طرح صفحه دارای مدل‌های بسیار متعددی می‌باشد. اگر از آن دسته از آقایانی هستید که همیشه کت و شلوار به تن دارید و به بیشتر اوقات به دلیل مسائل کاری مجبور هستید تیپ‌های رسمی بزنید؛ یا اگر به استایل‌های نیمه رسمی و حتی غیر رسمی علاقه دارید، می‌توانید ساعت کلاسیک را در هر مدل و برندی که دوست دارید را خرید کنید ' , image:'img/product-10.png' , price:350000 },
    {id: 11 , title:'ساعت کلاسیک مردانه'  , description:'یکی از انواع ساعت های مچی مردانه که آقایان، هم می‌توانند آن را با کت و شلوار ست کنند و هم با استایل‌های نیمه رسمی و غیر رسمی، ساعت مچی کلاسیک است که از نظر برند، شکل قاب، طرح بند، نوع موتور و طرح صفحه دارای مدل‌های بسیار متعددی می‌باشد. اگر از آن دسته از آقایانی هستید که همیشه کت و شلوار به تن دارید و به بیشتر اوقات به دلیل مسائل کاری مجبور هستید تیپ‌های رسمی بزنید؛ یا اگر به استایل‌های نیمه رسمی و حتی غیر رسمی علاقه دارید، می‌توانید ساعت کلاسیک را در هر مدل و برندی که دوست دارید را خرید کنید ' , image:'img/product-11.png' , price:499000 },
    {id: 12 , title:'کتونی ورزشی دخترانه '  , description:'یکی از مواردی که به هنگام خرید کفش ورزشی می بایست به آن دقت گردد طراحی کفش بر اساس ارگونومیک بدن و جنسیت فرد می باشد. در طراحی کفش ورزشی بخش های مختلفی همچون زیره کفش ، لایه های میانی ، نوع دوخت داخل و خارج و... وجود دارد که بسته به نوع استفاده و مصرف کننده آن متفاوت می باشد. چیزی که سبب تفاوت این موارد در بین کفش ورزشی زنانه و مردانه می شود عمدتا در اندازه و سایز هریک از موارد اشاره شده است. ' , image:'img/product-12.png' , price:239000 },
    {id: 13 , title:' کتونی راحتی'  , description:'کفش کتونی این روزها در بین مردم بسیار رایج شده است زیرا مردم از آن به عنوان کفش های ورزشی استفاده می کنند، گویی استفاده از کفش کتونی مترادف کفش ورزشی است. مردم انواع کفش هایی با کف لاستیکی را به عنوان کفش ورزشی می شناسند و از آن ها به جای کفش ورزشی استفاده می کنند ، هرچند که این کار درست نیست. این نوع کفش ها به دلیل کفی لاستیکی ، هنگام راه رفتن صدای بسیار کمی ایجاد می کردند به نحوی که کسی متوجه راه رفتن شما نمی شد. امروزه تنوع بسیار زیادی از کفش های کتانی در بازار وجود دارد و می توانید یکی از این کفش های کتونی را برای استفاده در سالن بدنسازی تهیه کنید و استفاده کنید  ' , image:'img/product-13.png' , price:159000 },
    {id: 14 , title:' کتونی راحتی'  , description:'کفش کتونی این روزها در بین مردم بسیار رایج شده است زیرا مردم از آن به عنوان کفش های ورزشی استفاده می کنند، گویی استفاده از کفش کتونی مترادف کفش ورزشی است. مردم انواع کفش هایی با کف لاستیکی را به عنوان کفش ورزشی می شناسند و از آن ها به جای کفش ورزشی استفاده می کنند ، هرچند که این کار درست نیست. این نوع کفش ها به دلیل کفی لاستیکی ، هنگام راه رفتن صدای بسیار کمی ایجاد می کردند به نحوی که کسی متوجه راه رفتن شما نمی شد. امروزه تنوع بسیار زیادی از کفش های کتانی در بازار وجود دارد و می توانید یکی از این کفش های کتونی را برای استفاده در سالن بدنسازی تهیه کنید و استفاده کنید  ' , image:'img/product-14.png' , price:169000 },
    {id: 15 , title:' کتونی ورزشی پسرانه'  , description:'همانطور که می‌دانید ورزش کردن یکی از نیازهای بدن برای سلامت بودن است، به همین دلیل در راستای انجام تمرینات ورزشی برای سلامتی، بهتر است از کفش و لباس‌هایی استفاده کنید که نه تنها از بدن شما محافظت می‌کند، بلکه برای کاهش میزان خستگی بدن و پا مناسب است. به جرات می‌توان گفت یکی از مهم‌ترین تجهیزات شما در انجام همه ورزش‌ها، کفش مناسب است. تاثیر کتانی ورزشی مناسب بر روی سلامت بدن و پا به حدی زیاد است که نمی‌توان از آن چشم پوشید. یک کفش ورزشی می‌تواند تمرینات را برای شما لذت‌بخش کند و یا شما را به انواع دردهای کمر و ستون فقرات یا زانوها و پا دچار کند، پس انتخاب کتونی ورزشی مناسب بسیار مهم است ' , image:'img/product-15.png' , price:175000 },
    ];


// set See More Product *
let locationParams = new URLSearchParams(location.search);
let mainProductId = locationParams.get('id');

let mainProductObject = allProductCartArray.find(function (product){
    return product.id === Number(mainProductId)
})

if(mainProductObject){
    productsContentImage.setAttribute('src' , mainProductObject.image)
    productsContentTitle.innerHTML = mainProductObject.title
    productsContentDescription.innerHTML = mainProductObject.description
    productsContentPrice.innerHTML =  ' قیمت:  ' +  mainProductObject.price + '  هزار تومان'
}


// Set All Event Dom
userLoginBtn.addEventListener('click', userLoginFormShow);
userLoginBtnClose.addEventListener('click' , userLoginFormClose);
overlayContainer.addEventListener('click' , overlayContainerControl);
shoppingCartBtn.addEventListener('click' , shoppingCartShow);
shoppingCartCloseBtn.addEventListener('click' , shoppingCartClose);
switchDarkMode.addEventListener('click', setDarkMode);
headerIconBtn.addEventListener('click' , menuToggle);




